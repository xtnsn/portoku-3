import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import VideoCard from "@/components/video-card"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const youtubeVideos = [
    {
      id: "Zv-NiYDpIR4",
      title: "Creating Stunning Visual Effects | Tutorial",
      views: "24K",
      date: "2 weeks ago",
    },
    {
      id: "Zv-NiYDpIR4",
      title: "Behind the Scenes: My Creative Process",
      views: "18K",
      date: "3 weeks ago",
    },
    {
      id: "Zv-NiYDpIR4",
      title: "Advanced Editing Techniques for Content Creators",
      views: "32K",
      date: "1 month ago",
    },
    {
      id: "Zv-NiYDpIR4",
      title: "How I Grew My Channel to 100K Subscribers",
      views: "45K",
      date: "2 months ago",
    },
    {
      id: "Zv-NiYDpIR4",
      title: "The Future of Content Creation in 2025",
      views: "38K",
      date: "3 months ago",
    },
    {
      id: "Zv-NiYDpIR4",
      title: "My Favorite Gear for YouTube Videos",
      views: "29K",
      date: "4 months ago",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />

      <section id="videos" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Featured Videos
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Check out some of my latest content and creative work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://www.youtube.com/@fortunawebid" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="group border-purple-500 hover:bg-purple-500/10">
              View All Videos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <AboutSection />
      <ContactSection />

      <footer className="py-8 border-t border-zinc-800 text-center text-zinc-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Fortuna Web • All Rights Reserved</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="https://www.instagram.com/fortuna.web/" className="hover:text-purple-400 transition-colors">
              Instagram
            </Link>
            <Link href="https://www.x.com/fortuna.web/" className="hover:text-purple-400 transition-colors">
              Twitter
            </Link>
            <Link href="https://www.tiktok.com/@fortuna.web/" className="hover:text-purple-400 transition-colors">
              TikTok
            </Link>
            <Link href="https://www.youtube.com/@fortunawebid/" className="hover:text-purple-400 transition-colors">
              YouTube
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
