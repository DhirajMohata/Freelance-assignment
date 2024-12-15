'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

interface AddProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: { name: string; team: string; techStack: string[] }) => void;
}

export function AddProjectDialog({ isOpen, onClose, onAddProject }: AddProjectDialogProps) {
  const [projectName, setProjectName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamId, setTeamId] = useState('')
  const [description, setDescription] = useState('')
  const [techStack, setTechStack] = useState<string[]>([])
  const [currentTech, setCurrentTech] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onAddProject({ name: projectName, team: teamName, techStack })
    onClose()
    resetForm()
  }

  const addTech = () => {
    if (currentTech && !techStack.includes(currentTech)) {
      setTechStack([...techStack, currentTech])
      setCurrentTech('')
    }
  }

  const removeTech = (tech: string) => {
    setTechStack(techStack.filter((t) => t !== tech))
  }

  const resetForm = () => {
    setProjectName('')
    setTeamName('')
    setTeamId('')
    setDescription('')
    setTechStack([])
    setCurrentTech('')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="projectName">Project Name</Label>
            <Input
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="teamName">Team Name</Label>
            <Input
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="teamId">Team ID</Label>
            <Input
              id="teamId"
              value={teamId}
              onChange={(e) => setTeamId(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="techStack">Tech Stack</Label>
            <div className="flex gap-2">
              <Input
                id="techStack"
                value={currentTech}
                onChange={(e) => setCurrentTech(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
              />
              <Button type="button" className='bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600' onClick={addTech}>
                Add
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                {tech}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => removeTech(tech)}
                />
              </Badge>
            ))}
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
            Add Project
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

