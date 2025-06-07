import { TypeAnimation } from "react-type-animation";
import img from '/src/components/profilepic.jpg'
export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        <div className="text-center md:text-left z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Johnraine Bonavente
          </h1>

          <h2 className="flex sm:text-2xl text-2xl pt-4 text-white-600">
            I'm a
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'Web Developer',
                2000,
                'Web Designer',
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '7px', display: "inline-block", color: 'white' }}
              repeat={Infinity}
            />
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            I am a web developer student who designs and creates simple web applications. My goal is to build projects that are not only functional but also enjoyable to use.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="w-64 h-64 md:w-96 md:h-96 relative">
          <img
             src={img} // Replace with the path to your image
             alt="Profile"
            className="w-full h-full object-cover rounded-full shadow-2xl"
            />  
        </div>
      </div>
    </section>
  );
};