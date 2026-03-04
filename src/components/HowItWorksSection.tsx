import { motion } from 'motion/react';
import { ClipboardList, Palette, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Creamos tu ecosistema",
    description: "Analizamos tus necesidades y configuramos tu plataforma base en tiempo récord."
  },
  {
    id: 2,
    icon: Palette,
    title: "Personalizamos",
    description: "Adaptamos el diseño y el tono de comunicación para que refleje tu identidad profesional."
  },
  {
    id: 3,
    icon: Rocket,
    title: "Automatizás y escalás",
    description: "Lanzamos tu nueva presencia digital y empezás a gestionar pacientes de forma eficiente."
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Transformación digital en <span className="text-teal-500">3 simples pasos</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center bg-white md:bg-transparent p-6 md:p-0 rounded-2xl shadow-sm md:shadow-none"
              >
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-teal-100 shadow-lg flex items-center justify-center mb-6 relative">
                  <step.icon className="w-8 h-8 text-teal-600" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold text-sm border-4 border-slate-50 md:border-slate-50">
                    {step.id}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
