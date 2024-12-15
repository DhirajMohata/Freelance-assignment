import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Zap, Users, BarChart } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-purple-600" />
          <span className="ml-2 text-2xl font-bold text-gray-600">TaskMaster</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-purple-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-6xl/none">
                  Manage Projects with Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-2xl ">
                  TaskMaster helps teams organize, track, and manage their work efficiently. Boost productivity and achieve your goals faster.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 text-xl p-6 hover:bg-purple-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="text-xl p-6">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 ">© 2023 TaskMaster. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}