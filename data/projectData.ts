
export type Project = {
    id: string
    name: string
    team: string
    techStack: string[]
  }
  
  export const initialProjects: Project[] = [
    { id: '1', name: 'Project Alpha', team: 'Team A', techStack: ['React', 'Node.js'] },
    { id: '2', name: 'Project Beta', team: 'Team B', techStack: ['Vue', 'Express'] },
  ]
  
  // Add a new project to the existing list of projects
  export const addProject = (projects: Project[], newProject: Omit<Project, 'id'>): Project[] => {
    const newId = (projects.length + 1).toString()
    return [...projects, { id: newId, ...newProject }]
  }
  