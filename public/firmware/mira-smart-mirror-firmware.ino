#include <WiFi.h>
#include <HTTPClient.h>
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ILI9341.h>
#include <ArduinoJson.h>
#include "time.h"
#include "DHT.h"
// ---------------- TFT Setup ----------------
#define TFT_CS   15
#define TFT_DC   2
#define TFT_RST  4
Adafruit_ILI9341 tft(TFT_CS, TFT_DC, TFT_RST);
// ---------------- DHT Setup ----------------
#define DHTPIN 22
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
float indoorTempF = 0;
float indoorHumidity = 0;
// ---------------- WiFi + Weather ----------------
const char* ssid = "Samsung Galaxy A20 7657";
const char* password = "YOURmom666";
String API_KEY = "199e700e4440aa5edcc1ce88b14dcdc7";
String CITY    = "Boston";
String COUNTRY = "US";
unsigned long lastWeatherUpdate = 0;
const unsigned long weatherInterval = 600000;
String outdoorTemp = "--";
String outdoorCond = "--";
String outdoorMain = "";
// ---------------- Time ----------------
const char* ntpServer = "pool.ntp.org";
const long gmtOffset_sec = -5 * 3600;
const int daylightOffset_sec = 3600;
// ---------------- Stepper Motor ----------------
#define STEP_PIN 12
#define DIR_PIN 13
int stepDelay = 1000;
int stepsPerRevolution = 200;
bool motorActive = false;
// ---------------- RELAY (FAN CONTROL) ----------------
int relayPin = 25;
bool fanOn = false;
// -------------------------------------------------------------
// WEATHER ICONS
// -------------------------------------------------------------
void drawWeatherIconSun(int x, int y) {
  tft.fillCircle(x + 18, y + 18, 12, ILI9341_YELLOW);
}
void drawWeatherIconCloud(int x, int y) {
  tft.fillCircle(x + 9, y + 21, 9, 0xC618);
  tft.fillCircle(x + 21, y + 18, 9, 0xC618);
  tft.fillRect(x + 3, y + 21, 30, 9, 0xC618);
}
void drawWeatherIconRain(int x, int y) {
  drawWeatherIconCloud(x, y);
  tft.drawLine(x + 9, y + 30, x + 9, y + 36, ILI9341_BLUE);
  tft.drawLine(x + 18, y + 30, x + 18, y + 36, ILI9341_BLUE);
  tft.drawLine(x + 27, y + 30, x + 27, y + 36, ILI9341_BLUE);
}
void drawWeatherIconFor(const String &main, int x, int y) {
  String m = main;
  m.toLowerCase();
  if (m.indexOf("clear") >= 0) drawWeatherIconSun(x, y);
  else if (m.indexOf("cloud") >= 0) drawWeatherIconCloud(x, y);
  else if (m.indexOf("rain") >= 0) drawWeatherIconRain(x, y);
  else drawWeatherIconCloud(x, y);
}
// -------------------------------------------------------------
// WEATHER FETCH
// -------------------------------------------------------------
void fetchWeather() {
  if (WiFi.status() != WL_CONNECTED) {
    outdoorTemp = "--";
    outdoorCond = "No WiFi";
    return;
  }
  HTTPClient http;
  String url = "http://api.openweathermap.org/data/2.5/weather?q=" + CITY + "," + COUNTRY +
               "&appid=" + API_KEY + "&units=imperial";
  http.begin(url);
  int code = http.GET();
  if (code != 200) {
    outdoorTemp = "--";
    outdoorCond = "API error";
    http.end();
    return;
  }
  String payload = http.getString();
  http.end();
  StaticJsonDocument<1500> doc;
  if (deserializeJson(doc, payload)) return;
  float temp = doc["main"]["temp"] | NAN;
  const char* mainCond = doc["weather"][0]["main"] | "Unknown";
  const char* desc     = doc["weather"][0]["description"] | "unknown";
  outdoorTemp = String(temp, 0) + " F";
  outdoorCond = String(desc);
  outdoorMain = String(mainCond);
}
// -------------------------------------------------------------
// DHT Read
// -------------------------------------------------------------
void readDHTSensor() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  if (!isnan(h) && !isnan(t)) {
    indoorHumidity = h;
    indoorTempF = t * 9.0 / 5.0 + 32.0;
    if (indoorHumidity > 60) fanOn = true;
    else fanOn = false;
  }
}
// -------------------------------------------------------------
// Stepper Spin
// -------------------------------------------------------------
void spinSteps(int steps) {
  for (int i = 0; i < steps; i++) {
    digitalWrite(STEP_PIN, LOW);
    delayMicroseconds(stepDelay);
    digitalWrite(STEP_PIN, HIGH);
    delayMicroseconds(stepDelay);
  }
}
// -------------------------------------------------------------
// Draw Display
// -------------------------------------------------------------
void drawScreen() {
  tft.fillScreen(ILI9341_BLACK);
  struct tm timeinfo;
  char timeStr[16];
  char dateStr[40];
  if (getLocalTime(&timeinfo)) {
    strftime(timeStr, sizeof(timeStr), "%I:%M %p", &timeinfo);
    strftime(dateStr, sizeof(dateStr), "%A, %b %d %Y", &timeinfo);
  } else {
    strcpy(timeStr, "--:-- --");
    strcpy(dateStr, "No Time");
  }
  // TIME
  tft.setTextColor(ILI9341_CYAN);
  tft.setTextSize(4);
  int16_t x1, y1; uint16_t w, h;
  tft.getTextBounds(timeStr, 0, 0, &x1, &y1, &w, &h);
  tft.setCursor((tft.width() - w) / 2, 6);
  tft.print(timeStr);
  // DATE
  tft.setTextColor(ILI9341_BLUE);
  tft.setTextSize(2);
  tft.getTextBounds(dateStr, 0, 0, &x1, &y1, &w, &h);
  tft.setCursor((tft.width() - w) / 2, 46);
  tft.print(dateStr);
  // OUTDOOR WEATHER
  tft.setTextColor(ILI9341_WHITE);
  tft.setTextSize(4);
  tft.getTextBounds(outdoorTemp, 0, 0, &x1, &y1, &w, &h);
  int iconWidth = 36;
  int totalWidth = iconWidth + 10 + w;
  int startX = (tft.width() - totalWidth) / 2;
  int iconX = startX;
  int iconY = 90;
  drawWeatherIconFor(outdoorMain, iconX, iconY);
  tft.setCursor(iconX + iconWidth + 10, iconY + 4);
  tft.print(outdoorTemp);
  // INDOOR INFO
  String indoorStr =
      " Room Temperature: " + String(indoorTempF, 0) + " F  "
      "    Room Humidity: " + String(indoorHumidity, 0) + "%";
  tft.setTextColor(0xC618);
  tft.setTextSize(2);
  tft.setCursor(10, iconY + 70);
  tft.print(indoorStr);
}
// -------------------------------------------------------------
// SETUP
// -------------------------------------------------------------
void setup() {
  Serial.begin(9600);
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(ILI9341_BLACK);
  // ---- WiFi Connect with Timeout ----
  WiFi.begin(ssid, password);
  unsigned long wifiStart = millis();
  unsigned long timeout = 5000;  // 5 seconds max
  while (WiFi.status() != WL_CONNECTED && millis() - wifiStart < timeout) {
    delay(300);
  }
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi failed, continuing without connection...");
  }
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
  dht.begin();
  pinMode(STEP_PIN, OUTPUT);
  pinMode(DIR_PIN, OUTPUT);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH);
  fetchWeather();
  readDHTSensor();
  drawScreen();
}
// -------------------------------------------------------------
// LOOP
// -------------------------------------------------------------
void loop() {
  readDHTSensor();
  // Manual fan control
  if (Serial.available() > 0) {
    char input = Serial.read();
    if (input == '1') fanOn = true;
    else if (input == '0') fanOn = false;
  }
  // Relay control
  digitalWrite(relayPin, fanOn ? LOW : HIGH);
  // -------------------------------------------------
  // UPDATED MOTOR BEHAVIOR:
  // Spin 5 sec opposite, then 5 sec normal
  // -------------------------------------------------
  if (fanOn) {
    unsigned long startTime = millis();
    // ---- 1. Opposite direction for 5 sec ----
    digitalWrite(DIR_PIN, HIGH);
    while (millis() - startTime < 5000) {
      spinSteps(1);
    }
    // ---- 2. Normal direction for 5 sec ----
    startTime = millis();
    digitalWrite(DIR_PIN, LOW);
    while (millis() - startTime < 5000) {
      spinSteps(1);
    }
  }
  // Weather update
  if (millis() - lastWeatherUpdate > weatherInterval) {
    fetchWeather();
    lastWeatherUpdate = millis();
  }
  // Refresh screen if needed
  static float lastTemp = -9999;
  static float lastHum = -9999;
  static String lastOutdoor = "";
  static unsigned long lastDraw = 0;
  if (indoorTempF != lastTemp ||
      indoorHumidity != lastHum ||
      outdoorTemp != lastOutdoor ||
      millis() - lastDraw > 60000)
  {
    drawScreen();
    lastTemp = indoorTempF;
    lastHum = indoorHumidity;
    lastOutdoor = outdoorTemp;
    lastDraw = millis();
  }
  delay(200);
}