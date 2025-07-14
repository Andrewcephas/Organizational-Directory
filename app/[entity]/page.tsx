"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Church, Users, Target, Clock, MapPin, Mail, Phone, Eye, CheckCircle } from "lucide-react"
import { getEntityById } from "@/lib/entities-data"

export default function EntityPage() {
  const params = useParams()
  const entityId = params.entity as string
  const entity = getEntityById(entityId)

  if (!entity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Entity Not Found</h1>
          <p className="text-gray-600">The requested entity could not be found.</p>
          <Link href="/">
            <Button className="bg-[#730051] hover:bg-[#980000]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const categoryColors = {
    "KSUCU-MC BOARDS": "from-[#730051] to-[#980000]",
    "EVANGELISTIC TEAMS": "from-[#0c6ff0] to-[#730051]",
    "KSUCU-MC MINISTRIES": "from-[#980000] to-[#0c6ff0]",
    "CLASSES AND FELLOWSHIPS": "from-[#730051] to-[#0c6ff0]",
  }

  const gradientColor = categoryColors[entity.category as keyof typeof categoryColors]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className={`bg-gradient-to-r ${gradientColor} text-white`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#730051] bg-transparent"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Church className="h-8 w-8" />
              <span className="text-lg font-semibold">KSUCU-MC</span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <Badge variant="secondary" className="bg-white/20 text-white">
              {entity.category}
            </Badge>
            <h1 className="text-4xl font-bold">{entity.name}</h1>
            <p className="text-xl text-gray-100 max-w-3xl">{entity.mandate}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Vision */}
            {entity.vision && (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="h-6 w-6 text-[#730051]" />
                    <CardTitle className="text-2xl text-[#730051]">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">{entity.vision}</p>
                </CardContent>
              </Card>
            )}

            {/* Objectives */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-[#730051]" />
                  <CardTitle className="text-2xl text-[#730051]">Our Objectives</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {entity.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0c6ff0] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Leaders */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-[#730051]" />
                  <CardTitle className="text-2xl text-[#730051]">Leadership Team</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {entity.leaders.map((leader, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                      <h4 className="font-semibold text-lg text-gray-800">{leader.name}</h4>
                      <p className="text-[#730051] font-medium">{leader.position}</p>
                      <div className="mt-2 space-y-1">
                        {leader.email && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="h-4 w-4" />
                            <a href={`mailto:${leader.email}`} className="hover:text-[#730051]">
                              {leader.email}
                            </a>
                          </div>
                        )}
                        {leader.phone && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="h-4 w-4" />
                            <a href={`tel:${leader.phone}`} className="hover:text-[#730051]">
                              {leader.phone}
                            </a>
                          </div>
                        )}
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
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#730051]">Quick Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#0c6ff0]" />
                  <div>
                    <p className="font-medium">Total Members</p>
                    <p className="text-2xl font-bold text-[#730051]">{entity.members.length}</p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#0c6ff0]" />
                  <div>
                    <p className="font-medium">Leadership Team</p>
                    <p className="text-2xl font-bold text-[#730051]">{entity.leaders.length}</p>
                  </div>
                </div>

                {entity.meetingTime && (
                  <>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#0c6ff0] mt-0.5" />
                      <div>
                        <p className="font-medium">Meeting Time</p>
                        <p className="text-sm text-gray-600">{entity.meetingTime}</p>
                      </div>
                    </div>
                  </>
                )}

                {entity.location && (
                  <>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#0c6ff0] mt-0.5" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-gray-600">{entity.location}</p>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Members List */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#730051]">Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {entity.members.map((member, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <h5 className="font-medium text-gray-800">{member.name}</h5>
                      {member.role && <p className="text-sm text-[#730051]">{member.role}</p>}
                      {member.year && <p className="text-xs text-gray-500">{member.year}</p>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#730051]">Get Involved</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Interested in joining {entity.name}? Contact our leadership team for more information.
                </p>
                <Button className="w-full bg-[#730051] hover:bg-[#980000]">Contact Leadership</Button>
                <Button
                  variant="outline"
                  className="w-full border-[#0c6ff0] text-[#0c6ff0] hover:bg-[#0c6ff0] hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`bg-gradient-to-r ${gradientColor} text-white mt-20`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Church className="h-6 w-6" />
              <h3 className="text-xl font-bold">KSUCU-MC</h3>
            </div>
            <p className="text-gray-200">Building God's Kingdom through organized ministry and fellowship</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
