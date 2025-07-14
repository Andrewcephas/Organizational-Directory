"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Save, X } from "lucide-react"
import type { Entity, Person } from "@/lib/types"
import { entitiesData, addEntity, updateEntity, deleteEntity } from "@/lib/data-store"

interface AdminPanelProps {
  onBack: () => void
}

export default function AdminPanel({ onBack }: AdminPanelProps) {
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null)
  const [editingPerson, setEditingPerson] = useState<Person | null>(null)
  const [isAddingEntity, setIsAddingEntity] = useState(false)
  const [newEntity, setNewEntity] = useState<Partial<Entity>>({
    name: "",
    category: "",
    mandate: "",
    vision: "",
    objectives: [],
    leaders: [],
    members: [],
    meetingTime: "",
    location: "",
  })

  const categories = ["KSUCU-MC BOARDS", "EVANGELISTIC TEAMS", "KSUCU-MC MINISTRIES", "CLASSES AND FELLOWSHIPS"]

  const handleAddEntity = () => {
    if (newEntity.name && newEntity.category && newEntity.mandate) {
      const entity: Entity = {
        id: `entity-${Date.now()}`,
        name: newEntity.name,
        category: newEntity.category,
        mandate: newEntity.mandate,
        vision: newEntity.vision || "",
        objectives: newEntity.objectives || [],
        leaders: newEntity.leaders || [],
        members: newEntity.members || [],
        meetingTime: newEntity.meetingTime,
        location: newEntity.location,
      }
      addEntity(entity)
      setNewEntity({
        name: "",
        category: "",
        mandate: "",
        vision: "",
        objectives: [],
        leaders: [],
        members: [],
        meetingTime: "",
        location: "",
      })
      setIsAddingEntity(false)
    }
  }

  const handleDeleteEntity = (id: string) => {
    deleteEntity(id)
    if (selectedEntity?.id === id) {
      setSelectedEntity(null)
    }
  }

  const handleAddPerson = (entityId: string, type: "leaders" | "members") => {
    const newPerson: Person = {
      id: `person-${Date.now()}`,
      name: "New Person",
      position: "Position",
      email: "",
      phone: "",
      image: "/placeholder.svg?height=300&width=300",
    }

    const entity = entitiesData.find((e) => e.id === entityId)
    if (entity) {
      entity[type].push(newPerson)
      updateEntity(entityId, { [type]: entity[type] })
      setSelectedEntity(entity)
    }
  }

  const handleUpdatePerson = (
    entityId: string,
    personId: string,
    type: "leaders" | "members",
    updatedPerson: Person,
  ) => {
    const entity = entitiesData.find((e) => e.id === entityId)
    if (entity) {
      const personIndex = entity[type].findIndex((p) => p.id === personId)
      if (personIndex !== -1) {
        entity[type][personIndex] = updatedPerson
        updateEntity(entityId, { [type]: entity[type] })
        setSelectedEntity(entity)
      }
    }
    setEditingPerson(null)
  }

  const handleDeletePerson = (entityId: string, personId: string, type: "leaders" | "members") => {
    const entity = entitiesData.find((e) => e.id === entityId)
    if (entity) {
      entity[type] = entity[type].filter((p) => p.id !== personId)
      updateEntity(entityId, { [type]: entity[type] })
      setSelectedEntity(entity)
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#730051]">Admin Panel</h1>
          <p className="text-gray-600">Manage organizational directory</p>
        </div>
        <Button
          onClick={onBack}
          variant="outline"
          className="border-[#730051] text-[#730051] hover:bg-[#730051] hover:text-white bg-transparent"
        >
          Back to Directory
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Entities List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-[#730051]">Entities</CardTitle>
                <Button
                  size="sm"
                  onClick={() => setIsAddingEntity(true)}
                  className="bg-[#00c6ff] hover:bg-[#00a8d6] text-white"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 max-h-96 overflow-y-auto">
              {entitiesData.map((entity) => (
                <div
                  key={entity.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedEntity?.id === entity.id ? "bg-[#730051] text-white" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedEntity(entity)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{entity.name}</h4>
                      <p className="text-xs opacity-75">{entity.category}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDeleteEntity(entity.id)
                      }}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Add Entity Form */}
          {isAddingEntity && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-[#730051]">Add New Entity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Entity Name"
                  value={newEntity.name}
                  onChange={(e) => setNewEntity({ ...newEntity, name: e.target.value })}
                />
                <select
                  className="w-full p-2 border rounded-md"
                  value={newEntity.category}
                  onChange={(e) => setNewEntity({ ...newEntity, category: e.target.value })}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <Textarea
                  placeholder="Mandate"
                  value={newEntity.mandate}
                  onChange={(e) => setNewEntity({ ...newEntity, mandate: e.target.value })}
                />
                <div className="flex gap-2">
                  <Button onClick={handleAddEntity} className="bg-[#730051] hover:bg-[#980000] text-white">
                    <Save className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button onClick={() => setIsAddingEntity(false)} variant="outline">
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Entity Details */}
        <div className="lg:col-span-2">
          {selectedEntity ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-[#730051]">{selectedEntity.name}</CardTitle>
                <Badge className="w-fit bg-[#00c6ff] text-white">{selectedEntity.category}</Badge>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="leaders" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="leaders">Leaders</TabsTrigger>
                    <TabsTrigger value="members">Members</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>

                  <TabsContent value="leaders" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-[#730051]">Leaders</h3>
                      <Button
                        size="sm"
                        onClick={() => handleAddPerson(selectedEntity.id, "leaders")}
                        className="bg-[#00c6ff] hover:bg-[#00a8d6] text-white"
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Leader
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedEntity.leaders.map((leader) => (
                        <PersonCard
                          key={leader.id}
                          person={leader}
                          onEdit={() => setEditingPerson(leader)}
                          onDelete={() => handleDeletePerson(selectedEntity.id, leader.id, "leaders")}
                        />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="members" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-[#730051]">Members</h3>
                      <Button
                        size="sm"
                        onClick={() => handleAddPerson(selectedEntity.id, "members")}
                        className="bg-[#00c6ff] hover:bg-[#00a8d6] text-white"
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Member
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedEntity.members.map((member) => (
                        <PersonCard
                          key={member.id}
                          person={member}
                          onEdit={() => setEditingPerson(member)}
                          onDelete={() => handleDeletePerson(selectedEntity.id, member.id, "members")}
                        />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mandate</label>
                        <Textarea
                          value={selectedEntity.mandate}
                          onChange={(e) => {
                            const updated = { ...selectedEntity, mandate: e.target.value }
                            setSelectedEntity(updated)
                            updateEntity(selectedEntity.id, { mandate: e.target.value })
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Time</label>
                        <Input
                          value={selectedEntity.meetingTime || ""}
                          onChange={(e) => {
                            const updated = { ...selectedEntity, meetingTime: e.target.value }
                            setSelectedEntity(updated)
                            updateEntity(selectedEntity.id, { meetingTime: e.target.value })
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <Input
                          value={selectedEntity.location || ""}
                          onChange={(e) => {
                            const updated = { ...selectedEntity, location: e.target.value }
                            setSelectedEntity(updated)
                            updateEntity(selectedEntity.id, { location: e.target.value })
                          }}
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-64">
                <p className="text-gray-500">Select an entity to manage</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Edit Person Modal */}
      {editingPerson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle className="text-[#730051]">Edit Person</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Name"
                value={editingPerson.name}
                onChange={(e) => setEditingPerson({ ...editingPerson, name: e.target.value })}
              />
              <Input
                placeholder="Position"
                value={editingPerson.position}
                onChange={(e) => setEditingPerson({ ...editingPerson, position: e.target.value })}
              />
              <Input
                placeholder="Email"
                value={editingPerson.email || ""}
                onChange={(e) => setEditingPerson({ ...editingPerson, email: e.target.value })}
              />
              <Input
                placeholder="Phone"
                value={editingPerson.phone || ""}
                onChange={(e) => setEditingPerson({ ...editingPerson, phone: e.target.value })}
              />
              <Input
                placeholder="Image URL"
                value={editingPerson.image || ""}
                onChange={(e) => setEditingPerson({ ...editingPerson, image: e.target.value })}
              />
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    if (selectedEntity) {
                      const type = selectedEntity.leaders.find((l) => l.id === editingPerson.id) ? "leaders" : "members"
                      handleUpdatePerson(selectedEntity.id, editingPerson.id, type, editingPerson)
                    }
                  }}
                  className="bg-[#730051] hover:bg-[#980000] text-white"
                >
                  <Save className="h-4 w-4 mr-1" />
                  Save
                </Button>
                <Button onClick={() => setEditingPerson(null)} variant="outline">
                  <X className="h-4 w-4 mr-1" />
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

interface PersonCardProps {
  person: Person
  onEdit: () => void
  onDelete: () => void
}

function PersonCard({ person, onEdit, onDelete }: PersonCardProps) {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <img
          src={person.image || "/placeholder.svg?height=60&width=60"}
          alt={person.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h4 className="font-medium text-gray-900">{person.name}</h4>
          <p className="text-sm text-[#730051]">{person.position}</p>
          {person.email && <p className="text-xs text-gray-500">{person.email}</p>}
        </div>
        <div className="flex gap-1">
          <Button size="sm" variant="ghost" onClick={onEdit} className="text-[#00c6ff] hover:text-[#00a8d6]">
            <Edit className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" onClick={onDelete} className="text-red-500 hover:text-red-700">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
