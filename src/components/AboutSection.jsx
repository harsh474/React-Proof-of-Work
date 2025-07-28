import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="max-w-5xl mx-auto my-16 p-6 text-gray-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-4">About Me</h2>
      <p className="text-lg leading-relaxed">
        I'm a developer who focuses on shipping reliable, maintainable software fast. At Oodles Technologies, I work on scalable backend architectures, frontend interfaces, and AI-integration pipelines. At InsightQ.ai, I designed an AI-powered Minutes of Meeting tool using FastAPI, ChatGPT, and MongoDB — saving hours of manual effort.
        <br /><br />
        I prioritize code clarity, architectural thinking, and delivering value through automation.
      </p>
    </motion.section>
  );
}