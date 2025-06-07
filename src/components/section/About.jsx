import img from '/src/components/Certif1.png'

export const About = () => {

        const FrontendSkills = ["HTML", "CSS", "Javascript", "React"];

        const BackendSkills = ["PHP", "SQL"]

    return (
        <section
        id="about" 
        className="min-h-screen flex items-center justify-center py-20">
            
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
            

            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                     Passionate developer in building scalable web
              applications and creating innovative solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {FrontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {BackendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              

                </div>

            </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 borer hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Certificates </h3>
                    </div>



                   <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition hover:scale-110 focus:scale-110">
                      <img
                        src={img}
                        alt="Certificate"
                        className="w-full h-48 object-cover rounded-lg mb-4 transition duration-300 ease-in-out"
                      />
                    </div>

                </div>
            </div>
        </section>
    )
}