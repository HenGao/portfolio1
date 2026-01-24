export const projects = [
  {
    id: 'project-one',
    title: 'Project One',
    link: '/projects/project-one',
    image: '/project-placeholder-1.jpg',
    description: 'Description of Project One'
  },
  {
    id: 'project-two',
    title: 'Project Two',
    link: '/projects/project-two',
    image: '/project-placeholder-2.jpg',
    description: 'Description of Project Two'
  },
  {
    id: 'project-three',
    title: 'Project Three',
    link: '/projects/project-three',
    image: '/project-placeholder-3.jpg',
    description: 'Description of Project Three'
  },
  {
    id: 'project-four',
    title: 'Project Four',
    link: '/projects/project-four',
    image: '/project-placeholder-4.jpg',
    description: 'Description of Project Four'
  },
  {
    id: 'project-five',
    title: 'Project Five',
    link: '/projects/project-five',
    image: '/project-placeholder-5.jpg',
    description: 'Description of Project Five'
  },
  {
    id: 'project-six',
    title: 'Project Six',
    link: '/projects/project-six',
    image: '/project-placeholder-6.jpg',
    description: 'Description of Project Six'
  },
  {
    id: 'project-seven',
    title: 'Project Seven',
    link: '/projects/project-seven',
    image: '/project-placeholder-7.jpg',
    description: 'Description of Project Seven'
  },
  {
    id: 'project-eight',
    title: 'Project Eight',
    link: '/projects/project-eight',
    image: '/project-placeholder-8.jpg',
    description: 'Description of Project Eight'
  },
  {
    id: 'project-nine',
    title: 'Project Nine',
    link: '/projects/project-nine',
    image: '/project-placeholder-9.jpg',
    description: 'Description of Project Nine'
  },
  {
    id: 'project-ten',
    title: 'Project Ten',
    link: '/projects/project-ten',
    image: '/project-placeholder-10.jpg',
    description: 'Description of Project Ten'
  }
]

export const getProjectById = (id) => {
  return projects.find(project => project.id === id)
}
