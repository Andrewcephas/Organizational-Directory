"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Shield,
  Users,
  Heart,
  BookOpen,
  ArrowLeft,
  Clock,
  MapPin,
  Mail,
  Phone,
  Eye,
  CheckCircle,
  Target,
  Monitor,
  Edit,
  Video,
  MessageCircle,
  UserCheck,
  Sparkles,
  PlayIcon as Pray,
  GraduationCap,
  Church,
  Music,
  Settings,
  Crown,
  Star,
} from "lucide-react"
import { entitiesData, getEntityById, leadershipData } from "@/lib/data-store"
import type { Entity, ViewMode } from "@/lib/types"
import AdminPanel from "@/components/admin-panel"

const categoryIcons = {
  "KSUCU-MC BOARDS": Shield,
  "EVANGELISTIC TEAMS": Users,
  "KSUCU-MC MINISTRIES": Heart,
  "CLASSES AND FELLOWSHIPS": BookOpen,
}

const categoryColors = {
  "KSUCU-MC BOARDS": "#980000",
  "EVANGELISTIC TEAMS": "#00c6ff",
  "KSUCU-MC MINISTRIES": "#730051",
  "CLASSES AND FELLOWSHIPS": "#00c6ff",
}

const entityIcons = {
  "ICT Board": Monitor,
  "Editorial Board": Edit,
  "Media Production": Video,
  "Communication Board": MessageCircle,
  Ushering: UserCheck,
  Creativity: Sparkles,
  Compassion: Heart,
  Intercessory: Pray,
  "High School": GraduationCap,
  "Church School": BookOpen,
  "Praise and Worship": Music,
  Choir: Music,
}

export default function OrganizationalDirectory() {
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>("directory")

  const categories = ["KSUCU-MC BOARDS", "EVANGELISTIC TEAMS", "KSUCU-MC MINISTRIES", "CLASSES AND FELLOWSHIPS"]

  const getEntitiesByCategory = (category: string) => {
    return entitiesData.filter((entity) => entity.category === category)
  }

  const handleEntityClick = (entityId: string) => {
    const entity = getEntityById(entityId)
    if (entity) {
      setSelectedEntity(entity)
      setViewMode("entity")
    }
  }

  const handleBackToDirectory = () => {
    setSelectedEntity(null)
    setViewMode("directory")
  }

  const handleAdminAccess = () => {
    setViewMode("admin")
  }

  if (viewMode === "admin") {
    return <AdminPanel onBack={handleBackToDirectory} />
  }

  if (viewMode === "entity" && selectedEntity) {
    const categoryColor = categoryColors[selectedEntity.category as keyof typeof categoryColors]

    return (
      <div className="max-w-7xl mx-auto p-6 bg-white">
        {/* Entity Detail Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              onClick={handleBackToDirectory}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Directory
            </Button>
            <Button
              onClick={handleAdminAccess}
              variant="outline"
              className="border-[#730051] text-[#730051] hover:bg-[#730051] hover:text-white bg-transparent"
            >
              <Settings className="h-4 w-4 mr-2" />
              Admin
            </Button>
          </div>

          <div className="space-y-4">
            <Badge
              variant="secondary"
              style={{ backgroundColor: `${categoryColor}20`, color: categoryColor }}
              className="text-sm font-medium"
            >
              {selectedEntity.category}
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900">{selectedEntity.name}</h1>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">{selectedEntity.mandate}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Vision */}
            {selectedEntity.vision && (
              <Card className="border-l-4 hover:shadow-lg transition-shadow" style={{ borderLeftColor: categoryColor }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="h-6 w-6" style={{ color: categoryColor }} />
                    <CardTitle className="text-2xl" style={{ color: categoryColor }}>
                      Our Vision
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">{selectedEntity.vision}</p>
                </CardContent>
              </Card>
            )}

            {/* Objectives */}
            <Card className="border-l-4 hover:shadow-lg transition-shadow" style={{ borderLeftColor: categoryColor }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6" style={{ color: categoryColor }} />
                  <CardTitle className="text-2xl" style={{ color: categoryColor }}>
                    Our Objectives
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {selectedEntity.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Leaders */}
            <Card className="border-l-4 hover:shadow-lg transition-shadow" style={{ borderLeftColor: categoryColor }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6" style={{ color: categoryColor }} />
                  <CardTitle className="text-2xl" style={{ color: categoryColor }}>
                    Leadership Team
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedEntity.leaders.map((leader, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gray-50 rounded-lg border hover:shadow-md transition-all hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={leader.image || "/placeholder.svg?height=80&width=80"}
                          alt={leader.name}
                          className="w-16 h-16 rounded-full object-cover border-2"
                          style={{ borderColor: categoryColor }}
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-gray-900 mb-1">{leader.name}</h4>
                          <p className="font-medium mb-3" style={{ color: categoryColor }}>
                            {leader.position}
                          </p>
                          <div className="space-y-2">
                            {leader.email && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Mail className="h-4 w-4" />
                                <a
                                  href={`mailto:${leader.email}`}
                                  className="hover:underline transition-colors"
                                  style={{ color: categoryColor }}
                                >
                                  {leader.email}
                                </a>
                              </div>
                            )}
                            {leader.phone && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone className="h-4 w-4" />
                                <a
                                  href={`tel:${leader.phone}`}
                                  className="hover:underline transition-colors"
                                  style={{ color: categoryColor }}
                                >
                                  {leader.phone}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar Information */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="border-l-4 hover:shadow-lg transition-shadow" style={{ borderLeftColor: categoryColor }}>
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: categoryColor }}>
                  Quick Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: `${categoryColor}20` }}>
                    <Users className="h-6 w-6" style={{ color: categoryColor }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Members</p>
                    <p className="text-3xl font-bold" style={{ color: categoryColor }}>
                      {selectedEntity.members.length}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: `${categoryColor}20` }}>
                    <Shield className="h-6 w-6" style={{ color: categoryColor }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Leadership Team</p>
                    <p className="text-3xl font-bold" style={{ color: categoryColor }}>
                      {selectedEntity.leaders.length}
                    </p>
                  </div>
                </div>

                {selectedEntity.meetingTime && (
                  <>
                    <Separator />
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: `${categoryColor}20` }}>
                        <Clock className="h-6 w-6" style={{ color: categoryColor }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Meeting Time</p>
                        <p className="text-sm text-gray-800 font-medium">{selectedEntity.meetingTime}</p>
                      </div>
                    </div>
                  </>
                )}

                {selectedEntity.location && (
                  <>
                    <Separator />
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: `${categoryColor}20` }}>
                        <MapPin className="h-6 w-6" style={{ color: categoryColor }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Location</p>
                        <p className="text-sm text-gray-800 font-medium">{selectedEntity.location}</p>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Members List */}
            <Card className="border-l-4 hover:shadow-lg transition-shadow" style={{ borderLeftColor: categoryColor }}>
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: categoryColor }}>
                  Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {selectedEntity.members.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-lg border hover:shadow-sm transition-all hover:scale-105"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={member.image || "/placeholder.svg?height=40&width=40"}
                          alt={member.name}
                          className="w-10 h-10 rounded-full object-cover border"
                          style={{ borderColor: categoryColor }}
                        />
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1">{member.name}</h5>
                          {member.position && (
                            <p className="text-sm font-medium" style={{ color: categoryColor }}>
                              {member.position}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1"></div>
          <div className="flex items-center justify-center gap-3">
            <Church className="h-12 w-12 text-[#730051]" />
            <h1 className="text-5xl font-bold text-gray-900">KSUCU-MC</h1>
          </div>
          <div className="flex-1 flex justify-end">
            <Button
              onClick={handleAdminAccess}
              variant="outline"
              className="border-[#730051] text-[#730051] hover:bg-[#730051] hover:text-white bg-transparent"
            >
              <Settings className="h-4 w-4 mr-2" />
              Admin
            </Button>
          </div>
        </div>
        <p className="text-xl text-gray-600 mb-2">Kenya Students University Christian Union - Main Campus</p>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          Organizational Directory - Discover our leadership, boards, teams, ministries, and fellowships
        </p>
      </div>

      {/* Leadership Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#730051] text-white font-bold text-2xl shadow-lg">
            <Crown className="h-7 w-7" />
            <h2>CHRISTIAN UNION LEADERSHIP</h2>
          </div>
          <div className="w-24 h-1 mx-auto rounded-full bg-[#730051] mt-4"></div>
        </div>

        <div className="space-y-12">
          {leadershipData.map((leadership) => (
            <div key={leadership.id} className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#730051] mb-2">{leadership.title}</h3>
                <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">{leadership.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {leadership.members.map((member) => (
                  <Card
                    key={member.id}
                    className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-[#730051] group"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-4">
                        <img
                          src={member.image || "/placeholder.svg?height=120&width=120"}
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-[#730051]"
                        />
                        <div className="absolute -top-2 -right-2 bg-[#730051] text-white rounded-full p-2">
                          <Star className="h-4 w-4" />
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-[#730051] transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-[#730051] font-semibold mb-3">{member.position}</p>
                      <div className="space-y-2 text-sm">
                        {member.email && (
                          <div className="flex items-center justify-center gap-2 text-gray-600">
                            <Mail className="h-4 w-4" />
                            <a href={`mailto:${member.email}`} className="hover:text-[#730051] transition-colors">
                              {member.email}
                            </a>
                          </div>
                        )}
                        {member.phone && (
                          <div className="flex items-center justify-center gap-2 text-gray-600">
                            <Phone className="h-4 w-4" />
                            <a href={`tel:${member.phone}`} className="hover:text-[#730051] transition-colors">
                              {member.phone}
                            </a>
                          </div>
                        )}
                      </div>
                      {member.bio && <p className="text-xs text-gray-500 mt-3 leading-relaxed">{member.bio}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Categories */}
      <div className="space-y-16">
        {categories.map((category) => {
          const entities = getEntitiesByCategory(category)
          const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
          const categoryColor = categoryColors[category as keyof typeof categoryColors]

          return (
            <section key={category} className="space-y-8">
              {/* Category Header */}
              <div className="text-center space-y-4">
                <div
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-2xl shadow-lg"
                  style={{ backgroundColor: categoryColor }}
                >
                  <IconComponent className="h-7 w-7" />
                  <h2>{category}</h2>
                </div>
                <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: categoryColor }}></div>
              </div>

              {/* Entities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {entities.map((entity) => {
                  const EntityIcon = entityIcons[entity.name as keyof typeof entityIcons] || Users

                  return (
                    <Card
                      key={entity.id}
                      className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-opacity-50 group overflow-hidden"
                      onClick={() => handleEntityClick(entity.id)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-3 rounded-full" style={{ backgroundColor: `${categoryColor}20` }}>
                            <EntityIcon className="h-6 w-6" style={{ color: categoryColor }} />
                          </div>
                          <Badge
                            variant="secondary"
                            className="text-white text-xs font-medium"
                            style={{ backgroundColor: categoryColor }}
                          >
                            {entity.leaders.length} Leaders
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-[#730051] transition-colors line-clamp-2 transform group-hover:translate-x-1 transition-transform duration-300">
                          {entity.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                          {entity.mandate.substring(0, 120)}...
                        </CardDescription>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {entity.members.length} Members
                          </span>
                          {entity.meetingTime && (
                            <span className="font-medium flex items-center gap-1" style={{ color: categoryColor }}>
                              <Clock className="h-4 w-4" />
                              Regular Meetings
                            </span>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full transition-all duration-200 bg-transparent font-medium transform group-hover:translate-y-[-2px]"
                          style={{
                            borderColor: categoryColor,
                            color: categoryColor,
                          }}
                        >
                          <span className="group-hover:animate-pulse">View Details</span>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
