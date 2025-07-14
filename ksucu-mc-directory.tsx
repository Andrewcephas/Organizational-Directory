"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  Monitor,
  Edit,
  Video,
  MessageCircle,
  Heart,
  Sparkles,
  Shield,
  PlayIcon as Pray,
  GraduationCap,
  Church,
  Music,
  BookOpen,
  UserCheck,
} from "lucide-react"

export default function Component() {
  const boards = [
    { name: "ICT Board", icon: Monitor, description: "Technology and digital infrastructure" },
    { name: "Editorial Board", icon: Edit, description: "Content creation and publishing" },
    { name: "Media Production", icon: Video, description: "Audio-visual content production" },
    { name: "Communication Board", icon: MessageCircle, description: "Internal and external communications" },
  ]

  const evangelisticTeams = [
    { name: "CETNE", color: "bg-blue-100 text-blue-800" },
    { name: "TESE", color: "bg-green-100 text-green-800" },
    { name: "TRIVE", color: "bg-purple-100 text-purple-800" },
    { name: "TWESO", color: "bg-orange-100 text-orange-800" },
  ]

  const ministries = [
    { name: "Ushering", icon: UserCheck, description: "Welcome and guidance ministry" },
    { name: "Creativity", icon: Sparkles, description: "Arts and creative expression" },
    { name: "Compassion", icon: Heart, description: "Care and support ministry" },
    { name: "Intercessory", icon: Pray, description: "Prayer and spiritual warfare" },
    { name: "High School", icon: GraduationCap, description: "Youth ministry for high schoolers" },
    { name: "Wananzambe", icon: Users, description: "Community outreach program" },
    { name: "Church School", icon: BookOpen, description: "Christian education ministry" },
    { name: "Praise and Worship", icon: Music, description: "Worship leading ministry" },
    { name: "Choir", icon: Music, description: "Musical ministry and performance" },
  ]

  const fellowships = [
    { name: "Best-p Classes", type: "Class" },
    { name: "Class Fellowships", type: "Fellowship" },
    { name: "Sisters Fellowship", type: "Fellowship" },
    { name: "Brothers Fellowship", type: "Fellowship" },
    { name: "Discipleship Classes", type: "Class" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Church className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">KSUCU-MC</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Organizational Directory - Boards, Ministries, Teams & Fellowships
          </p>
        </div>

        {/* Boards Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">KSUCU-MC BOARDS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boards.map((board, index) => {
              const IconComponent = board.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{board.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{board.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <Separator />

        {/* Evangelistic Teams Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">EVANGELISTIC TEAMS</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {evangelisticTeams.map((team, index) => (
              <Badge key={index} variant="secondary" className={`text-lg py-2 px-4 ${team.color}`}>
                {team.name}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* Ministries Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-900">KSUCU-MC MINISTRIES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <IconComponent className="h-5 w-5 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg">{ministry.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{ministry.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <Separator />

        {/* Classes and Fellowships Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-semibold text-gray-900">CLASSES AND FELLOWSHIPS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fellowships.map((fellowship, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{fellowship.name}</CardTitle>
                    <Badge variant={fellowship.type === "Class" ? "default" : "secondary"}>{fellowship.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {fellowship.type === "Class"
                      ? "Educational and learning focused group"
                      : "Community and spiritual fellowship group"}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-gray-500">Building God's Kingdom through organized ministry and fellowship</p>
        </div>
      </div>
    </div>
  )
}
