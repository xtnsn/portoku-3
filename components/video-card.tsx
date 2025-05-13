import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

interface VideoProps {
  video: {
    id: string
    title: string
    views: string
    date: string
  }
}

export default function VideoCard({ video }: VideoProps) {
  return (
    <Link
      href={`https://www.youtube.com/watch?v=${video.id}&t`}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-900 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
        <div className="relative aspect-video">
          <Image
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-purple-600/80 flex items-center justify-center">
              <Play className="h-8 w-8 fill-white text-white" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg mb-1 line-clamp-2">{video.title}</h3>
          <div className="flex items-center text-sm text-zinc-400">
            <span>{video.views} views</span>
            <span className="mx-2">•</span>
            <span>{video.date}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
