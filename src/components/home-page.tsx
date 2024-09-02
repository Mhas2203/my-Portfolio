import Link from "next/link"

export function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#232946] text-foreground">
      <header className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#b8c1ec]">Musa Hassan</h1>
            <h2 className="text-2xl font-medium text-[#a7a9be] sm:text-3xl md:text-4xl font-mono">
              Computer Science Student
            </h2>
            <p className="text-[#a7a9be] md:text-lg font-displayy">
              As a rising junior in Computer Science at the University of Minnesota, I’m gaining hands-on experience through a Web Development Internship and a Software Engineering Fellowship.
              I’m passionate about creating innovative solutions and thrive in designing user-friendly interfaces and efficient software.
              My collaborative mindset and strong communication skills drive me to contribute meaningfully to impactful projects.
            </p>
            <div className="flex gap-4">
            <a
                href="https://shorturl.at/sWcvk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#121629] px-6 text-sm font-medium text-[#b8c1ec] shadow transition-colors hover:bg-[#121629]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/images/cropped_image.png" width="400" height="400" alt="Musa Hassan" className="rounded-full"/>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="space-y-8">
          <div>

          <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display text-[#b8c1ec]">
        Skills
              </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <img src="/images/PY.webp" alt="Python" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">Python</p>
            </div>
          <div className="flex flex-col items-center">
            <img src="/images/JS.png" alt="JavaScript" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">JavaScript</p>
            </div>
              
                <div className="flex flex-col items-center">
            <img src="/images/Java-logo.webp" alt="JavaScript" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">Java</p>
          </div>
          
                <div className="flex flex-col items-center">
            <img src="/images/C-icon.png" alt="C" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">C</p>
                </div>
                
                <div className="flex flex-col items-center">
            <img src="/images/HTML.png" alt="HTML" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">HTML</p>
                </div>
                
            <div className="flex flex-col items-center">
            <img src="/images/CSS.png" alt="CSS" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">CSS</p>
                </div>
                
                <div className="flex flex-col items-center">
            <img src="/images/Nodejs.png" alt="Node.js" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/React.png" alt="React.js" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">React.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/tailwindcss.webp" alt="Tailwindcss" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">TailwindCss</p>
          </div>
                 
          <div className="flex flex-col items-center">
            <img src="/images/Vscode.jpg" alt="Visual Studio Code" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">Visual Studio Code</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/Firebase.webp" alt="Firebase" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">Firebase</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/githubb.jpg" alt="GitHub" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">GitHub</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/git-icon.png" alt="Git" className="w-16 h-16" />
            <p className="mt-2 text-[#a7a9be]">Git</p>
          </div>
        </div>
      </section>
        
            



            <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display text-[#b8c1ec]">Experience</h2>
            <div className="relative flex flex-col gap-8">
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#a7a9be]" />
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div className="space-y-2 text-right">
                  <h3 className="text-lg font-medium font-serif text-[#b8c1ec]">Software Engineer Fellowship</h3>
                  <p className="text-[#a7a9be] font-mono">Headstarter AI</p>
                  <p className="text-[#a7a9be] font-display">July 2024 - Present</p>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-[#b8c1ec]"/>
                </div>
                <div className="space-y-2 text-left">
                  <p className="text-[#a7a9be] font-display">
                    Developing 5 AI projects in 7 weeks, showcasing strong project management and technical skills.
                    Collaborating with industry professionals on real-world problems and enhancing expertise in software development,
                    project management, and team collaboration through intensive workshops and practical applications.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div className="space-y-2 text-right">
                  <h3 className="text-lg font-medium font-serif text-[#b8c1ec]"> Web Developer Intern</h3>
                  <p className="text-[#a7a9be] font-mono">Energy Solutions & Technologies</p>
                  <p className="text-[#a7a9be] font-display">January 2024 - Present</p>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-[#b8c1ec]" />
                </div>
                <div className="space-y-2 text-left">
                  <p className="text-[#a7a9be] font-display">
                    Integrated a payment gateway, improving checkout process efficiency and
                    reducing abandoned carts by 15%.
                  </p>
                  <p className="text-[#a7a9be] font-display">
                    Implemented automated testing scripts,
                    reducing manual testing efforts by 40% and improving release efficiency.
                  </p>
                  <p className="text-[#a7a9be] font-display">
                    Improved website uptime by 30% through collaborative troubleshooting
                    with cross-functional teams, enhancing user experience.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
       <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display text-[#b8c1ec]">
              Projects
        </h2>
        <div className="relative flex flex-col gap-8">
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#a7a9be]" />
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div className="space-y-2 text-right">
                  <h3 className="text-lg font-medium font-serif text-[#b8c1ec]">Pong Game</h3>
                  <p className="text-[#a7a9be] font-mono">Personal Project</p>
                  <p className="text-[#a7a9be] font-display">2024</p>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-[#b8c1ec]" />
                </div>
                <div className="space-y-2 text-left">
                  <p className="text-[#a7a9be] font-display">
                Developed a fully functional Pong game with sophisticated mechanics such as real-time scoring,
                paddle movement,and ball dynamics, using HTML, CSS, and JavaScript, while integrating engaging
                sound effects and optimizing for performance,accuracy, and interactive gameplay.
                  </p>
                  <div className="flex gap-4">
      <a
        href="https://main--best-pong-game.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 items-center justify-center rounded-md bg-[#121629] px-6 text-sm font-medium text-[#b8c1ec] shadow transition-colors hover:bg-[#121629]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        Live Demo
      </a>
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src="/images/Pong.png"
                        width="200"
                        height="150"
                        alt="Todo App Screenshot"
                        className="rounded-md"
                      />
                      <img
                        src="/images/Pong1.png"
                        width="200"
                        height="150"
                        alt="Todo App Screenshot 2"
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div className="space-y-2 text-right">
                  <h3 className="text-lg font-medium font-serif text-[#b8c1ec]">NewsNexus</h3>
                  <p className="text-[#a7a9be] font-mono">Personal Project</p>
                  <p className="text-[#a7a9be] font-display">2024</p>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-[#b8c1ec]" />
                </div>
                <div className="space-y-2 text-left">
                  <p className="text-[#a7a9be] font-display">
                Created and deployed a responsive news aggregation website using HTML, CSS, and JavaScript.
                Leveraged Netlify for efficient hosting and deployment, delivering a user-friendly experience
                with advanced search functions and optimized performance across all devices.
                  </p>
                  <div className="flex gap-4">
                    <a
        href="https://newssnexus.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 items-center justify-center rounded-md bg-[#121629] px-6 text-sm font-medium text-[#b8c1ec] shadow transition-colors hover:bg-[#121629]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        Live Demo
      </a>
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src="images/NewsN2.png"
                        width="200"
                        height="150"
                        alt="E-commerce Website Screenshot"
                        className="rounded-md"
                      />
                      <img
                        src="images/NewsN1.png"
                        width="200"
                        height="150"
                        alt="E-commerce Website Screenshot 2"
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </main>
      <footer className="bg-[#121629] py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-[#a7a9be] font-display">&copy; 2024 Musa Hassan. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="http://www.linkedin.com/in/musah" className="text-[#a7a9be] hover:underline font-mono"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
              </a>
            <a
              href="https://github.com/Mhas2203"
              className="text-[#a7a9be] hover:underline font-display"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
 