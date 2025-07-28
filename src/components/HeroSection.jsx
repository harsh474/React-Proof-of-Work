import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="max-w-5xl mx-auto px-6 py-20 text-center text-white"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold text-blue-400 mb-4">Harsh Rajput</h1>
      <p className="text-xl text-gray-300">
        Software Developer | React · FastAPI · MongoDB · LLM APIs
      </p>
      <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
        I architect and deliver full-stack applications that integrate AI and solve real-world problems. Strong foundation in backend systems, modern UIs, and LLM integrations.
      </p>
      <div className="mt-6 flex justify-center gap-6">
        <a href="/resume.pdf" className="bg-blue-500 px-5 py-2 rounded text-white hover:bg-blue-600">Resume</a>
        <a href="https://github.com/harsh474" target="_blank" className="underline text-blue-300">GitHub</a>
        <a href="https://linkedin.com/in/harsh474" target="_blank" className="underline text-blue-300">LinkedIn</a>
      </div>
    </motion.section>
  );
}