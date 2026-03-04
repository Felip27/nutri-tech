import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const stats = [
  { value: "+40%", label: "Organización", color: "text-teal-500" },
  { value: "+85%", label: "Fidelización", color: "text-violet-500" },
  { value: "100%", label: "Automatización", color: "text-rose-500" },
  { value: "24/7", label: "Profesionalismo", color: "text-blue-500" },
];

export const DifferentiatorSection = () => {
  return (
    <section id="differentiator" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Mucho más que una <br/>
              <span className="gradient-text">página web</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              No solo te damos presencia online. Te damos un ecosistema completo diseñado para potenciar tu práctica profesional. Mientras vos cuidás la salud de tus pacientes, nuestra tecnología cuida tu negocio.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Diseño UX pensado para padres y niños",
                "Tecnología segura y compliant",
                "Actualizaciones constantes sin costo extra",
                "Comunidad exclusiva de profesionales"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
