import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skills = {
    Languages: ["Python", "JavaScript", "C++", "SQL"],
    Frontend: ["React.js", "Tailwind CSS", "Chrome Extensions"],
    Backend: ["FastAPI", "Django", "Node.js"],
    Database: ["MongoDB", "PostgreSQL", "Redis"],
    Tools: ["Docker", "GitHub Actions", "CI/CD Pipelines"],
    AI: ["ChatGPT API", "Gemini API", "Prompt Engineering"]
  };

  return (
    <motion.section
      id="skills"
      className="max-w-5xl mx-auto my-16 p-6 text-gray-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-4">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-blue-300 mb-1">{category}</h3>
            <p className="text-gray-300">{list.join(' · ')}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
