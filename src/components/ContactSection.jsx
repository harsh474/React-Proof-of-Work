import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="max-w-5xl mx-auto my-16 p-6 text-center text-gray-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-4">Contact</h2>
      <p>If you’d like to collaborate or discuss a project, feel free to reach out.</p>
      <div className="mt-4 space-y-2">
        <p>Email: harshrajput1101@gmail.com</p>
        <p>GitHub: github.com/harsh474</p>
        <p>LinkedIn: linkedin.com/in/harsh474</p>
        <p>Website: jobmailer.in</p>
      </div>
    </motion.section>
  );
}