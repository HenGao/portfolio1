/*
 * ESP32 LED, button, and heating pad 
 * When the button is pressed, the LED will turn on and heating pad will stay on for set time
 * Might need to edit (change if/then to have nested for loop)
 *
 * Button/LED (instruction and wiring diagram): https://esp32io.com/tutorials/esp32-button-led
 * Relay for 12V power (instruction and wiring diagram): https://esp32io.com/tutorials/esp32-controls-heating-element
 */
#define BUTTON_PIN  18 // ESP32 pin GPIO18, which connected to button
#define LED_PIN     2 // ESP32 pin GPIO2, which connected to blue LED
#define RELAY_PIN 16 // ESP32 pin GPIO16 connected to the heating element via the relay
#define switch_pin 21

// variables will change:
int button_state = 0;   // variable for reading the button status
void setup() {
  // initialize the LED pin as an output:
  pinMode(LED_PIN, OUTPUT);
  // initialize the button pin as an pull-up input:
  // the pull-up input pin will be HIGH when the button is open and LOW when the button is pressed.
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  // initialize digital pin A5 as an output.
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(switch_pin, OUTPUT);
  pinMode(4, OUTPUT);

}
void loop() {
  // read the state of the button value:
  digitalWrite(4, HIGH);
  digitalWrite(LED_PIN, HIGH);
  delay(2000);
  digitalWrite(4, LOW);
  digitalWrite(LED_PIN, LOW);
  delay(2000);
 /* button_state = digitalRead(BUTTON_PIN);
  // control LED according to the state of button
  if (button_state == LOW) {      // if button is pressed
    digitalWrite(LED_PIN, HIGH); // turn on LED
    digitalWrite(RELAY_PIN, HIGH); // turn on heating element 5 seconds, can update based on how long it takes to heat up
    delay(5000);
    digitalWrite(RELAY_PIN, LOW);  // turn off heating element 
  }
  else {                          // otherwise, button is not pressing
    digitalWrite(LED_PIN, LOW);  // turn off LED
  }*/
}