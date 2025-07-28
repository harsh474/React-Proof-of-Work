import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const projects = [
    {
      title: "JobMailer – Chrome Extension",
      stack: "React · Node.js · MongoDB · Gemini API",
      summary: "AI-driven extension to automate LinkedIn job applications with personalized messages using Gemini API. Integrates Redis cache and secure JWT auth.",
      link: "https://www.jobmailer.in"
    }
  ];

  return (
    <motion.section
      id="projects"
      className="max-w-5xl mx-auto my-16 p-6 text-gray-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-4">Projects</h2>
      {projects.map((proj, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-300">{proj.title}</h3>
          <p className="text-sm text-gray-400">{proj.stack}</p>
          <p className="mt-2 text-gray-300">{proj.summary}</p>
          {proj.link && (
            <a
              href={proj.link}
              className="text-blue-300 underline mt-1 inline-block"
              target="_blank"
            >
              Live Link
            </a>
          )}
        </div>
      ))}
    </motion.section>
  );
}
