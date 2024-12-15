'use client'

import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { Plus } from 'lucide-react'
import { toast, Toaster } from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { ProjectTable } from '@/components/dashboard/project-table'
import { AddProjectDialog } from '@/components/dashboard/add-project-dialog'
import { Sidebar } from '@/components/dashboard/sidebar'
import { initialProjects, addProject as addProjectUtil, Project } from '@/data/projectData'
import { ThemeToggle } from '@/components/auth/theme-toggle'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function DashboardPage() {
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false)
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [isFirstTime, setIsFirstTime] = useState(false)


  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const userDetails = useSelector((state: RootState) => state.auth.userDetails);


  useEffect(() => {
    // Check if the user is visiting for the first time
    if (localStorage.getItem('isFirstTime') === 'true') {
      setIsFirstTime(true)
      localStorage.removeItem('isFirstTime')
    }
  }, [])

  const handleAddProject = (newProject: Omit<Project, 'id'>) => {
    setProjects((prevProjects) => {
      const updatedProjects = addProjectUtil(prevProjects, newProject)
      toast.success(`Project "${newProject.name}" added successfully!`)
      return updatedProjects
    })
  }
    if (!isLoggedIn) {
      window.location.href = '/auth/login';
    }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="p-6 w-full from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
        {isFirstTime && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={200}
          />
        )}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
          <Button
            onClick={() => setIsAddProjectOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 mr-12"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Project
          </Button>
        </div>
        <ProjectTable projects={projects} />
        <AddProjectDialog
          isOpen={isAddProjectOpen}
          onClose={() => setIsAddProjectOpen(false)}
          onAddProject={handleAddProject}
        />
      </div>
      <Toaster position="bottom-right" />
      <ThemeToggle />
    </div>
  )
}
