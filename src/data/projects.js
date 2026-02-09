export const projects = [
  {
    id: 'project-one',
    title: 'MIRA Smart Mirror',
    link: '/projects/project-one',
    image: '/mira-smart-mirror.png',
    additionalImages: [
      '/mira-smart-mirror-1.png', 
      '/mira-smart-mirror-2.png', 
      '/mira-smart-mirror-3.png'
    ],
    mechanicalGif: '/mira-wiping-demo.mp4',
    electricalSchematic: '/mira-schematic.png',
    description: 'Team lead for this project developed for the Forge 2025 Fall Showcase',
    fullDescription: 'As the team lead of 6 engineers, we developed the MIRA Smart Mirror system to address the market need for a solution to common bathroom problems that plague us every day. This innovative smart mirror integrates advanced mechanics and electronics to create a functional, intelligent bathroom mirror with defogging, environmental monitoring, hairblowing, and cleaning capabilities.',
    how: ['Utilizes a ESP32 MCU to read and process sensor data VIA SPI bus', 'Calls a weather api to display enviromental data about your location ("Weather, time, temperature, etc.)', 'Used SOLIDWORKs Flow simulation to design the most efficient wind channel for blowing hair'],
    results: 'Successfully developed a smart mirror that cleans itself, blows your hair, and displays enviromental data about your location. Pitched MIRA Smart Mirror at the Forge 2025 Fall Showcase, receiving positive feedback from judges and attendees.',
    technologies: [
      'ESP32', 'Linear Actuator', 'Stepper Motors', 'Relays', 'Buck Converters',
      'Temperature Sensor', 'Humidity Sensor', '3D Printing', 'Arduino', 'C++', '3D Modeling'
    ],
    challenges: 'Integrating multiple electronic components including ESP32, stepper motors, linear actuators, and various sensors while ensuring reliable communication and power management.',
    solution: 'Designed a modular electronics architecture with separate power regulation for each subsystem, implemented robust error handling in firmware, and created a comprehensive testing protocol.',
    impact: 'Successfully showcased at the Forge 2025 Fall Showcase, demonstrating practical application of embedded systems in smart home technology.',
    mechanical: 'The mechanical system consists of a wooden frame, a linear actuator-powered wiper mechanism for cleaning the mirror surface, and 3D-printed fan slots for the defogging system. The frame is designed to house all electronic components while maintaining a sleek aesthetic.',
    electrical: 'The electrical system is built around an ESP32 microcontroller that coordinates all components. It includes relay modules for controlling the defogging fans, buck converters for power regulation, stepper motor drivers for precise actuator control, and I2C sensors for temperature and humidity monitoring.',
    firmware: {
      description: 'The firmware controls all system functions including sensor reading, motor control, and user interface interactions. It implements state machines for different operational modes and includes safety features to prevent component damage.',
      downloadLink: '/firmware/mirafirmware.ino',
      fileName: 'mirafirmware.ino'
    }
  },
  {
    id: 'project-two',
    title: 'Green Tower',
    link: '/projects/project-two',
    image: '/green-tower.png',
    additionalImages: [
      '/green-tower-1.png',
      '/green-tower-2.png',
      '/green-tower-3.png',
      '/green-tower-4.png'
    ],
    pcbImage: '/green-tower-pcb.png',
    pcbImage2: '/green-tower-pcb-2.png',
    description: 'Description for project two',
    fullDescription: 'Collaborated with a team of 12 engineers to develop Greentower, a modular hydroponics tower to facilitate easier and cheaper indoor growing. Greentower integrates a plethora of advance sensors such as pH, EC, water level, and humidity to make sure that the growth of its internal plants are as effective as possible',
    how: ['Uses a esp32 MCU to read all sensor data, and control water dispensing', 'Developed nutrient sensing PCBA boards utilizing altium (pH, EC, Humidity, etc.)', 'Sensors tested rigorously using oscilloscopes and continuity testing'],
    results: 'Designed a pH sensing circuit from scratch that reads the analog signal from a pH sensor, filters it, and sends it back to our MCU via SPI protocol. Additionally, designed the motor + LED schematics + layouts.',
    contributionsImage: '/green-tower-ph-schematic.png',
    technologies: [],
    mechanicalGif: '/green-tower-rotation.mp4',
    mechanical: 'Mechanics consist of a 3D printed modular shell, foldable UV lights, mini plant pods, and pull out nutrient drawers',
    electricalSchematic: '/green-tower-pcb-3d.png',
    electrical: 'Electronics consist of a main PCBA board that powers 5 different sensors, UV lights, nutrient delivery, and motors via an ESP32 communicating over SPI, UART, and I2C',
    firmware: {
      description: '',
      downloadLink: '',
      fileName: '',
      githubLink: 'https://github.com/GenerateNU/cedar'
    }
  },
  {
    id: 'project-three',
    title: 'Optimus',
    link: '/projects/project-three',
    image: '/optimus-hero-shot.png',
    heroVideo: 'https://www.youtube.com/watch?v=V9r8V0G7k2I',
    additionalImages: [],
    description: 'A project developed for my PHILIPS 2024 Co-op',
    fullDescription: 'Reliabilty robot that I designed for my PHILIPS 2024 Co-op. This robot was created to validate the integrity of PHILIPS new line of products over tens of thousands of cycles.',
    userGuideVideo: 'https://www.youtube.com/watch?v=V9r8V0G7k2I',
    how: ['Designed entire software stack utilizing LabVIEW. Firmware included my own custom built motor driver and UI system', 'Mechanics were designed by me using Solidworks and manufactured using PHILIPS\' in-house CNC machine', 'Electrical systems utilized an Arduino R4 to read all sensors with firmware written by me to sync rotational with linear data'],
    results: '',
    technologies: [
      'Arduino', 'Linear Slide', 'Strain Meter', 'LabVIEW', '3D Printing'
    ],
    mechanicalGif: '/optimus-mechanical.png',
    mechanical: 'Mechanics were designed by me via Solidworks, and manufactured through either 3D printing or CNCing',
    electricalSchematic: '/optimus-electrical-diagram.png',
    electrical: 'All sensor data was first fed to a computer and processed using LabVIEW. Once the data had been processed, the information was fed to arduino to be converted into linear and rotational data for the servo motor to turn.'
  },
  {
    id: 'project-four',
    title: 'Cleanboil Thermos',
    link: '/projects/project-four',
    image: '/cleanboil-thermos.png',
    additionalImages: [],
    description: 'A project developed for the Forge 2024 Spring showcase',
    fullDescription: 'A project I collaborated on with a team of 5 engineers to solve the need for clean hot water when hiking or camping outdoors. Utilizes silicon heaters to boil water along with a smart battery system for space conservation.',
    how: ['Utilizes an ESP32 for button processing, relay activation, and heat timing', 'Mechanics designed via Onshape. The hinge on this thermos was designed to have space for running cables into a hollow cap where all our main electronics are housed', 'Utilizes a two battery system to get the internal silicon heaters to an appropriate temperature. This is because the esp32 only needs 5V, while the heaters need 12-24 in order to properly boil the water'],
    results: '',
    technologies: [
      'ESP32', 'Silicon Heaters', 'Relays', '3D Printing'
    ],
    mechanicalGif: '/cleanboil-mechanical.png',
    mechanical: 'Mechanics consist of a 3D printed shell encasing a metal inlay. This metal inlay is heated through embedded silicon heaters that bring added water up to a boil. The cap of this thermos also houses enough space for all our electronics',
    electricalSchematic: '/cleanboil-schematic.png',
    electrical: 'Electronics consist of an esp32 and silicon heaters. Due to power and space limitations, a relay is used to switch between the usage of the silicon heater and the esp32. When the button on top of Cleanboil is pressed, it flips to relay to power our silicon heaters and lights the LED on the top to indicate active heating. Once the calculated amount of time to boil has passed, the circuit automatically flips back into unactive mode.',
    firmware: {
      description: '',
      downloadLink: '/firmware/cleanboil.ino',
      fileName: 'cleanboil.ino'
    }
  },
  {
    id: 'project-seven',
    title: 'MP3 Player',
    link: '/projects/project-seven',
    image: '/mp3-player-hero.png',
    additionalImages: ['/mp3-player-1.png', '/mp3-player-2.png'],
    description: 'Developed as an individual project',
    fullDescription: 'Developed as an individual project as an attempt to curb my reliance on spotify while not having to spend too much money on a pre-existing mp3 player. Contains a charging and low frequency filtering custom circuit.',
    how: ['Charging circuit utilizes a TP405 breakout board to process power that\'s being plugged in', 'User interacts with mp3 player through 2 switches and a 3.5mm headphone jack', 'System contains an onboard single cell rechargeable battery'],
    results: '',
    technologies: [
      'TP4065', 'DF Mini Player', 'Lithium Ion Battery', 'Capacitors', 'Audio Jack'
    ],
    mechanical: '',
    electricalSchematic: '/mp3-player-schematic.png',
    electrical: 'Electronics use a DFR0299 MP3 module, a TP4056 lithium battery charger, a single-cell battery, a 3.5mm audio jack, an SPDT power switch, and two push-button switches for control. Capacitors on the audio lines provide DC blocking.',
    firmware: null
  },
  {
    id: 'project-five',
    title: '3-Axis Laser Turret',
    link: '/projects/project-five',
    image: '/laser-turret-hero.png',
    heroVideo: 'https://www.youtube.com/shorts/WHCuafffNu8',
    additionalImages: [],
    description: 'A project I developed individually in highschool',
    fullDescription: 'A project I developed individually in highschool to better understand how electronics work. System uses 2 servos and a laser diode, controlled by a window winform map.',
    how: [],
    results: '',
    technologies: [
      'Arduino', 'Servo Motors', 'Laser Diode', 'Microsoft Winforms'
    ],
    mechanical: '',
    electricalSchematic: '/laser-turret-schematic.png',
    electrical: 'System utilizes 2 servo motors and a laser diode driven by an arduino. The arduino connects with a script I created in vscode that <strong>automatically converted the translational data of a computer mouse into rotational data</strong>. The whole system is also powered by two power supplies for each of the servo motors.',
    firmware: null
  },
  {
    id: 'project-six',
    title: 'Automated Hydroponic System',
    link: '/projects/project-six',
    image: '/automated-hydroponics-hero.png',
    additionalImages: ['/automated-hydroponics-schematic.png'],
    description: 'A project I developed individually in highschool',
    fullDescription: 'A project I developed individually during highschool to explore the topic of hydroponics and also feed my family.',
    contextElectricalSideBySide: true,
    how: [],
    results: '',
    technologies: [
      'Arduino', 'Servo Motors', 'Kasa Smart Home', 'UV Light Module'
    ],
    mechanical: '',
    electrical: 'Electronics consist of an arduino, 1 servo motor, a Kasa Smart Home smart plug, a water pump, and an UV light module. This system is relatively basic, everything is connected to the Kasa Smart Home Plug which can be set to turn on during a specific time of the day. When it turns on, all systems are powered meaning the feeding script activates along with water pumping and UV lighting. When the on cycle ends, everything turns off.',
    firmware: null
  },
  {
    id: 'project-eight',
    title: 'ECG Signal Processing',
    link: '/projects/project-eight',
    image: '/ecg-schematic.png',
    additionalImages: ['/ecg-circuit-diagram.png', '/ecg-breadboard.png'],
    electricalSchematic: '/ecg-schematic.png',
    description: 'Developed in my Circuits and Signals for Biomedical Applications Class',
    fullDescription: 'Developed in my Circuits and Signals for Biomedical Applications Class. Utilizes a combination of high-pass and low-pass filters to find and amplify human heart beat signals.',
    contextElectricalSideBySide: true,
    how: [],
    results: '',
    technologies: [
      'AD627 Op-Amp', 'High-Pass Filter', 'Low-Pass Filter', 'ECG Electrodes'
    ],
    mechanical: '',
    electrical: 'Utilizes a combination of high-pass and low-pass op amp filters to find and amplify human heart beat signals. Op amps are used in this circuit because the human heart beat of 3dB is a very tiny signal, amplification is required in order to read a coherent output signal',
    firmware: null
  },
  {
    id: 'project-nine',
    title: 'OR Gate',
    link: '/projects/project-nine',
    image: '/or-gate-hero.png',
    additionalImages: ['/or-gate-circuit.png'],
    description: 'Developed for my Fundamentals of Electronics course',
    fullDescription: 'Developed for my Fundamentals of Electronics course. Utilizes CMOS transistors to simulate an OR gate typically found in logic.',
    contextElectricalSideBySide: true,
    how: [],
    results: '',
    technologies: [
      'CMOS Transistors', 'Digital Logic'
    ],
    mechanical: '',
    electrical: 'Exploits the switch like property of mosfets to simulate an OR gate found in digital logic. Since all gates can be made with nor gates, we create a physical representation of a nor gate and place them in ways that create an or gate.',
    firmware: null
  },
  {
    id: 'project-ten',
    title: 'Power Cone',
    link: '/projects/project-ten',
    image: '/powercone.png',
    additionalImages: [],
    description: 'Made for a Fiverr client from Finland',
    fullDescription: 'Developed for a Fiverr client based in Finland. They wanted me to make them a soccer cone that can change colors via a remote control across a 20 meter range and function in the cold temperatures of Finland.',
    contextElectricalSideBySide: true,
    centerMainImage: true,
    how: [],
    results: '',
    technologies: [],
    mechanical: '',
    electrical: 'Intended to use an ESP32, 433 MHz RF Transmitter, and a multi colored 10 WATT LED. On the power side, power was to come from a 3000 mAh Li-Po battery. This battery was specced as it would give my client up to 15 hours of play time in negative degrees weather.',
    firmware: null
  }
]

export const getProjectById = (id) => {
  return projects.find(project => project.id === id)
}
