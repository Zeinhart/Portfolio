export const Projects = () => {
    return (
      <section id="projects"
      className="min-h-screen flex item-center justify-center py-20">

<div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Local Campus Parking Reservation</h3>
              <img
                 src="https://plus.unsplash.com/premium_photo-1661902046698-40bba703f396?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the path to your image
                  alt="Parking Reservation"
                   className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-400 mb-4">
                The Parking Reservation website is designed to streamline the process of reserving parking spots on campus.
                 It allows students, faculty, and staff to easily book available spots online, reducing parking congestion and 
                  improving overall campus accessibility.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "SQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Zeinhart/Project.github.io"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className=" 
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">To Be Added</h3>
              <img
                 src="https://pbs.twimg.com/media/GTFrmZ3bEAAI0u_?format=jpg&name=medium"
                  alt="Parking Reservation"
                   className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet. Sit atque incidunt nam quis obcaecati
                 et doloribus cumque ut autem iste eos ratione soluta et dicta sunt.   
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TBA"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#projects"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">TBA  </h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet. Sit atque incidunt nam quis obcaecati 
                et doloribus cumque ut autem iste eos ratione soluta et dicta sunt. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TBA"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a  
                  href="#projects"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            
          </div>
        </div>

      </section>  
    );   
};