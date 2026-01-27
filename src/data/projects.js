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
    fullDescription: 'Description for the Green Tower project.',
    how: [],
    results: 'Results for the Green Tower project.',
    technologies: [],
    mechanical: 'The mechanical system description for the Green Tower project.',
    electrical: 'The electrical system description for the Green Tower project.',
    firmware: {
      description: '',
      downloadLink: '',
      fileName: ''
    }
  },
  {
    id: 'project-three',
    title: 'Optimus',
    link: '/projects/project-three',
    image: '/optimus-hero-shot.png',
    additionalImages: [],
    description: 'A project developed for my PHILIPS 2024 Co-op',
    fullDescription: 'A project developed for my PHILIPS 2024 Co-op',
    how: [],
    results: '',
    technologies: [
      'Arduino', 'Linear Slide', 'Strain Meter', 'LabVIEW', '3D Printing'
    ],
    mechanical: 'Mechanics consists of a 3d printed encasing for the new ECG modules and a machined metal linear slide fixture.',
    electrical: 'Electronics consist of an arduino, linear slide, and strain meter.',
    firmware: {
      description: 'Software utilized labview for both the UI/UX and also data processing between systems.',
      downloadLink: '',
      fileName: ''
    }
  },
  {
    id: 'project-four',
    title: 'Cleanboil Thermos',
    link: '/projects/project-four',
    image: '/cleanboil-thermos.png',
    additionalImages: [],
    description: 'A project developed for the Forge 2024 Spring showcase',
    fullDescription: 'A project developed for the Forge 2024 Spring showcase.',
    how: [],
    results: '',
    technologies: [
      'ESP32', 'Silicon Heaters', 'Relays', '3D Printing'
    ],
    mechanical: 'Mechanics consists of a 3d printed shell encasing a metal inner shell.',
    electrical: 'Electronics consist of an esp32 and silicon heaters. Due to power limitations, a relay is used to switch between the usage of the silicon heater and the esp32.',
    firmware: {
      description: '',
      downloadLink: '',
      fileName: ''
    }
  },
  {
    id: 'project-seven',
    title: 'MP3 Player',
    link: '/projects/project-seven',
    image: '/mp3-player-hero.png',
    additionalImages: [],
    description: 'Developed as an individual project',
    fullDescription: 'Developed as an individual project. Electronically uses a TP4065, a DF Mini Player, a 1000 mAh lithium ion battery, two capacitors, a mini audio jack, and 3 micro buttons/switches. Capacitors are included to filter out the dc offset and prevent biasing.',
    how: [],
    results: '',
    technologies: [
      'TP4065', 'DF Mini Player', 'Lithium Ion Battery', 'Capacitors', 'Audio Jack'
    ],
    mechanical: '',
    electrical: '',
    firmware: {
      description: '',
      downloadLink: '',
      fileName: ''
    }
  },
  {
    id: 'project-five',
    title: '3-Axis Laser Turret',
    link: '/projects/project-five',
    image: '/laser-turret-hero.png',
    additionalImages: [],
    description: 'A project I developed individually in highschool',
    fullDescription: 'A project I developed individually in highschool.',
    how: [],
    results: '',
    technologies: [
      'Arduino', 'Servo Motors', 'Laser Diode', 'Microsoft Winforms'
    ],
    mechanical: '',
    electrical: 'Electronics consist of an arduino, 2 servo motors, a laser diode, and two power supplies.',
    firmware: {
      description: 'Software utilized Microsoft Winforms to convert mouse transnational coordinates to rotational data.',
      downloadLink: '',
      fileName: ''
    }
  },
  {
    id: 'project-six',
    title: 'Automated Hydroponic System',
    link: '/projects/project-six',
    image: '/automated-hydroponics-hero.png',
    additionalImages: [],
    description: 'A project I developed individually in highschool',
    fullDescription: 'A project I developed individually in highschool.',
    how: [],
    results: '',
    technologies: [
      'Arduino', 'Servo Motors', 'Kasa Smart Home', 'UV Light Module'
    ],
    mechanical: '',
    electrical: 'Electronics consist of an arduino, 1 servo motors, a Kasa Smart Home smart plug, and an UV light module.',
    firmware: {
      description: 'Software utilized Arduino IDE to automatically open the feeding gate for nutrients.',
      downloadLink: '',
      fileName: ''
    }
  },
  {
    id: 'project-eight',
    title: 'ECG Signal Processing',
    link: '/projects/project-eight',
    image: '/ecg-schematic.png',
    additionalImages: [],
    electricalSchematic: '/ecg-schematic.png',
    description: 'Developed in my Circuits and Signals for Biomedical Applications Class',
    fullDescription: 'Developed in my Circuits and Signals for Biomedical Applications Class. Utilizes a combination of high-pass and low-pass filters to find and amplify human heart beat signals.',
    how: [],
    results: '',
    technologies: [
      'AD627 Op-Amp', 'High-Pass Filter', 'Low-Pass Filter', 'ECG Electrodes'
    ],
    mechanical: 'Mechanically uses 2 hydrogel electrodes.',
    electrical: 'Utilizes a combination of high-pass and low-pass filters to find and amplify human heart beat signals.',
    firmware: {
      description: '',
      downloadLink: '',
      fileName: ''
    }
  },
  {
    id: 'project-nine',
    title: 'OR Gate',
    link: '/projects/project-nine',
    image: '/or-gate-hero.png',
    additionalImages: [],
    description: 'Developed for my Fundamentals of Electronics course',
    fullDescription: 'Developed for my Fundamentals of Electronics course. Utilizes CMOS transistors to simulate an OR gate typically found in logic.',
    how: [],
    results: '',
    technologies: [
      'CMOS Transistors', 'Digital Logic'
    ],
    mechanical: '',
    electrical: 'Utilizes CMOS transistors to simulate an OR gate typically found in logic.',
    firmware: {
      description: '',
      downloadLink: '',
      fileName: ''
    }
  },
  {
    id: 'project-ten',
    title: 'Project Ten',
    link: '/projects/project-ten',
    image: '/placeholder-project.png',
    description: 'Description for project ten'
  }
]

export const getProjectById = (id) => {
  return projects.find(project => project.id === id)
}
