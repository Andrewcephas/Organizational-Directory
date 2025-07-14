import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Church } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-6">
        <div className="flex items-center justify-center gap-3">
          <Church className="h-16 w-16 text-[#730051]" />
        </div>
        <h1 className="text-6xl font-bold text-[#730051]">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
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
