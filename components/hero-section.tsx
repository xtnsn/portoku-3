import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container px-4 mx-auto z-10 text-center">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_25px_rgba(139,92,246,0.5)]">
            <Image src="https://i.imgur.com/9m831gs.jpeg" alt="IHSAN" fill className="object-cover" />
          </div>

          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            <span className="text-purple-400 font-medium">Content Creator</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            IHSAN
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-8">
            Creating captivating visual stories and sharing creative insights with the world
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Subscribe to Channel</Button>
            <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-500/10">
              Contact Me
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#videos">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
