import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-purple-500/50 transition-all hover:scale-105"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 text-white">
                  <Instagram className="h-7 w-7" />
                </div>
                <h4 className="font-medium">Instagram</h4>
                <p className="text-sm text-zinc-400">@ihsan</p>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-purple-500/50 transition-all hover:scale-105"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-4 text-white">
                  <Youtube className="h-7 w-7" />
                </div>
                <h4 className="font-medium">YouTube</h4>
                <p className="text-sm text-zinc-400">@ihsan</p>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-purple-500/50 transition-all hover:scale-105"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4 text-white">
                  <Facebook className="h-7 w-7" />
                </div>
                <h4 className="font-medium">Facebook</h4>
                <p className="text-sm text-zinc-400">@ihsan</p>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-purple-500/50 transition-all hover:scale-105"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4 text-white">
                  <Twitter className="h-7 w-7" />
                </div>
                <h4 className="font-medium">Twitter</h4>
                <p className="text-sm text-zinc-400">@ihsan</p>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4 text-purple-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 mb-1">Email</h4>
                    <p className="text-white">contact@ihsan.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4 text-purple-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 mb-1">Location</h4>
                    <p className="text-white">Jakarta, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4 text-purple-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 mb-1">Phone</h4>
                    <p className="text-white">+62 123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20">
              <h4 className="text-lg font-medium mb-2">Let's Collaborate</h4>
              <p className="text-zinc-300 mb-4">
                I'm always open to new projects and creative collaborations. If you have an idea or project in mind,
                don't hesitate to reach out!
              </p>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
