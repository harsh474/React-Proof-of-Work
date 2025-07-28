import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Developer · Oodles Technologies",
      period: "Aug 2024 – Present",
      points: [
        "Designed RESTful APIs using Django and FastAPI for scalable AI products",
        "Implemented secure Auth with JWT and OAuth2",
        "Built responsive frontends in React with Tailwind",
        "Automated deployments using GitHub Actions and Jenkins"
      ]
    },
    {
      title: "Software Developer Intern · InsightQ.ai",
      period: "Jun – Jul 2024",
      points: [
        "Engineered MOM feature using FastAPI, ChatGPT, and MongoDB",
        "Reduced documentation effort by 40% through automation",
        "Delivered production-grade frontend using React + Tailwind"
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      className="max-w-5xl mx-auto my-16 p-6 text-gray-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-4">Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-300">{exp.title}</h3>
          <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
          <ul className="list-disc list-inside space-y-1">
            {exp.points.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      ))}
    </motion.section>
  );
}