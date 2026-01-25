export const projects = [
  {
    id: 'project-one',
    title: 'MIRA Smart Mirror',
    link: '/projects/project-one',
    image: '/mira-smart-mirror.png',
    description: 'Team lead for this project developed for the Forge 2025 Fall Showcase',
    fullDescription: 'As the team lead of 6 engineers, we developed the MIRA Smart Mirror system for the Forge 2025 Fall Showcase. This innovative smart mirror integrates advanced mechanics and electronics to create a functional, intelligent bathroom mirror with defogging, environmental monitoring, hairblowing, and cleaning capabilities.',
    technologies: [
      'ESP32',
      'Linear Actuator',
      'Stepper Motors',
      'Relays',
      'Buck Converters',
      'Temperature Sensor',
      'Humidity Sensor',
      '3D Printing',
      'Arduino',
      'C++',
      '3D Modeling'
    ],
    challenges: 'Integrating multiple electronic components (ESP32, relays, buck converters, stepper motors, and sensors) while ensuring reliable mechanical operation of the linear actuator-powered wiper system. Coordinating the mechanical frame construction with precise 3D printed fan slots for optimal ventilation.',
    solution: 'Designed a modular electronics architecture with proper power management using multiple buck converters. Implemented a robust control system using the ESP32 to coordinate all components. Created custom 3D printed components for fan integration and designed a wooden frame that accommodates all mechanical and electronic systems seamlessly.',
    impact: 'Successfully showcased at the Forge 2025 Fall Showcase, demonstrating practical application of embedded systems, mechanical design, and smart home technology integration. The project showcases expertise in both hardware and software development for IoT applications.'
  },
  {
    id: 'project-two',
    title: 'Project Two',
    link: '/projects/project-two',
    image: '/project-placeholder-2.jpg',
    description: 'Description of Project Two',
    fullDescription: 'Write a detailed description of Project Two here. Explain what the project does, its purpose, and key features.',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    challenges: 'Describe the main challenges you faced while working on this project.',
    solution: 'Explain how you solved those challenges and what you learned.',
    impact: 'Describe the impact or results of this project.'
  },
  {
    id: 'project-three',
    title: 'Project Three',
    link: '/projects/project-three',
    image: '/project-placeholder-3.jpg',
    description: 'Description of Project Three',
    fullDescription: 'Write a detailed description of Project Three here. Explain what the project does, its purpose, and key features.',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    challenges: 'Describe the main challenges you faced while working on this project.',
    solution: 'Explain how you solved those challenges and what you learned.',
    impact: 'Describe the impact or results of this project.'
  },
  {
    id: 'project-four',
    title: 'Project Four',
    link: '/projects/project-four',
    image: '/project-placeholder-4.jpg',
    description: 'Description of Project Four',
    fullDescription: 'Write a detailed description of Project Four here. Explain what the project does, its purpose, and key features.',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    challenges: 'Describe the main challenges you faced while working on this project.',
    solution: 'Explain how you solved those challenges and what you learned.',
    impact: 'Describe the impact or results of this project.'
  },
  {
    id: 'project-five',
    title: 'Project Five',
    link: '/projects/project-five',
    image: '/project-placeholder-5.jpg',
    description: 'Description of Project Five',
    fullDescription: 'Write a detailed description of Project Five here. Explain what the project does, its purpose, and key features.',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    challenges: 'Describe the main challenges you faced while working on this project.',
    solution: 'Explain how you solved those challenges and what you learned.',
    impact: 'Describe the impact or results of this project.'
  },
  {
    id: 'project-six',
    title: 'Project Six',
    link: '/projects/project-six',
    image: '/project-placeholder-6.jpg',
    description: 'Description of Project Six',
    fullDescription: 'Write a detailed description of Project Six here. Explain what the project does, its purpose, and key features.',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    challenges: 'Describe the main challenges you faced while working on this project.',
    solution: 'Explain how you solved those challenges and what you learned.',
    impact: 'Describe the impact or results of this project.'
  },
  {
    id: 'project-seven',
    title: 'Project Seven',
    link: '/projects/project-seven',
    image: '/project-placeholder-7.jpg',
    description: 'Description of Project Seven',
    fullDescription: 'Write a detailed description of Project Seven here. Explain what the project does, its purpose, and key features.',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    challenges: 'Describe the main challenges you faced while working on this project.',
    solution: 'Explain how you solved those challenges and what you learned.',
    impact: 'Describe the impact or results of this project.'
  },
  {
    id: 'project-eight',
    title: 'Project Eight',
    link: '/projects/project-eight',
    image: '/project-placeholder-8.jpg',
    description: 'Description of Project Eight',
    fullDescription: 'Write a detailed description of Project Eight here. Explain what the project does, its purpose, and key features.',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    challenges: 'Describe the main challenges you faced while working on this project.',
    solution: 'Explain how you solved those challenges and what you learned.',
    impact: 'Describe the impact or results of this project.'
  },
  {
    id: 'project-nine',
    title: 'Project Nine',
    link: '/projects/project-nine',
    image: '/project-placeholder-9.jpg',
    description: 'Description of Project Nine',
    fullDescription: 'Write a detailed description of Project Nine here. Explain what the project does, its purpose, and key features.',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    challenges: 'Describe the main challenges you faced while working on this project.',
    solution: 'Explain how you solved those challenges and what you learned.',
    impact: 'Describe the impact or results of this project.'
  },
  {
    id: 'project-ten',
    title: 'Project Ten',
    link: '/projects/project-ten',
    image: '/project-placeholder-10.jpg',
    description: 'Description of Project Ten',
    fullDescription: 'Write a detailed description of Project Ten here. Explain what the project does, its purpose, and key features.',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    challenges: 'Describe the main challenges you faced while working on this project.',
    solution: 'Explain how you solved those challenges and what you learned.',
    impact: 'Describe the impact or results of this project.'
  }
]

export const getProjectById = (id) => {
  return projects.find(project => project.id === id)
}
