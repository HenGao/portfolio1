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
    description: 'Team lead for this project developed for the Forge 2025 Fall Showcase',
    fullDescription: 'As the team lead of 6 engineers, we developed the MIRA Smart Mirror system for the Forge 2025 Fall Showcase. This innovative smart mirror integrates advanced mechanics and electronics to create a functional, intelligent bathroom mirror with defogging, environmental monitoring, hairblowing, and cleaning capabilities.',
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
      downloadLink: '/firmware/mira-smart-mirror-firmware.ino',
      fileName: 'mira-smart-mirror-firmware.ino'
    }
  },
  {
    id: 'project-two',
    title: 'Project Two',
    link: '/projects/project-two',
    image: '/placeholder-project.png',
    description: 'Description for project two'
  },
  {
    id: 'project-three',
    title: 'Project Three',
    link: '/projects/project-three',
    image: '/placeholder-project.png',
    description: 'Description for project three'
  },
  {
    id: 'project-four',
    title: 'Project Four',
    link: '/projects/project-four',
    image: '/placeholder-project.png',
    description: 'Description for project four'
  },
  {
    id: 'project-five',
    title: 'Project Five',
    link: '/projects/project-five',
    image: '/placeholder-project.png',
    description: 'Description for project five'
  },
  {
    id: 'project-six',
    title: 'Project Six',
    link: '/projects/project-six',
    image: '/placeholder-project.png',
    description: 'Description for project six'
  },
  {
    id: 'project-seven',
    title: 'Project Seven',
    link: '/projects/project-seven',
    image: '/placeholder-project.png',
    description: 'Description for project seven'
  },
  {
    id: 'project-eight',
    title: 'Project Eight',
    link: '/projects/project-eight',
    image: '/placeholder-project.png',
    description: 'Description for project eight'
  },
  {
    id: 'project-nine',
    title: 'Project Nine',
    link: '/projects/project-nine',
    image: '/placeholder-project.png',
    description: 'Description for project nine'
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
