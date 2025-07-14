export interface Person {
  id: string
  name: string
  position: string
  email?: string
  phone?: string
  image?: string
  bio?: string
}

export interface Entity {
  id: string
  name: string
  category: string
  mandate: string
  vision?: string
  objectives: string[]
  leaders: Person[]
  members: Person[]
  meetingTime?: string
  location?: string
}

export interface LeadershipTeam {
  id: string
  title: string
  description: string
  members: Person[]
}

export type ViewMode = "directory" | "entity" | "admin"
