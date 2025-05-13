export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="max-w-3xl text-center">
            <p className="text-zinc-300 mb-6">
              I'm a passionate content creator specializing in visual storytelling and creative education. With over 5
              years of experience in the digital content space, I've developed a unique style that combines technical
              expertise with artistic vision.
            </p>

            <p className="text-zinc-300 mb-6">
              My channel focuses on sharing creative techniques, behind-the-scenes insights, and tutorials that help
              other creators elevate their work. I believe in the power of visual media to inspire, educate, and connect
              people across the globe.
            </p>

            <p className="text-zinc-400">
              When I'm not creating content, you can find me exploring new technologies, collaborating with other
              creators, or seeking inspiration in art, nature, and everyday life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
