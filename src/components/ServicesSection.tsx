import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export const ServicesSection = () => {
  return (
    <div className="bg-white" id="services">
      {/* Header */}
      <div className="py-24 px-4 text-center max-w-3xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-teal-600 font-semibold tracking-wider uppercase text-sm"
        >
          Nuestros Servicios
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-3xl md:text-5xl font-bold text-slate-900"
        >
          Todo lo que necesitás en un solo lugar
        </motion.h2>
      </div>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
        subheading="Web Personalizada"
        heading="Tu presencia digital profesional."
      >
        <ExampleContent 
          description="Creamos sitios web que no solo se ven bien, sino que funcionan como una herramienta de captación. Incluye secciones para tu biografía, especialidades, blog de consejos nutricionales y un sistema de reservas integrado."
          features={["Diseño Responsive", "SEO Optimizado", "Integración con WhatsApp", "Blog Autoadministrable"]}
          cta="Ver demo web"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
        subheading="Contenido Estratégico"
        heading="Nutrimos tus redes sociales."
      >
        <ExampleContent 
          description="No tenés que preocuparte por qué publicar. Nuestro equipo de diseñadores y copywriters crea contenido mensual específico para nutrición infantil: recetas saludables, tips para padres y más."
          features={["12 Posts Mensuales", "Diseño de Stories", "Redacción de Copy", "Calendario de Contenidos"]}
          cta="Ver portfolio"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
        subheading="Panel + CRM"
        heading="Gestión integral simplificada."
      >
        <ExampleContent 
          description="Olvidate de las fichas en papel y los excels desordenados. Nuestro CRM está diseñado específicamente para pediatría y nutrición. Llevá el control de curvas de crecimiento y evolución de cada paciente."
          features={["Historia Clínica Digital", "Curvas de Crecimiento (OMS)", "Gestión de Turnos", "Recordatorios Automáticos"]}
          cta="Probar demo panel"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop"
        subheading="Bot Inteligente"
        heading="Asistencia virtual 24/7."
      >
        <ExampleContent 
          description="Tu asistente virtual que nunca duerme. Responde automáticamente preguntas frecuentes, envía recordatorios de turnos y tips nutricionales automáticos para mejorar la adherencia al tratamiento."
          features={["Atención 24/7", "Recordatorios de Turnos", "Respuestas FAQ", "Seguimiento Post-Consulta"]}
          cta="Hablar con el bot"
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: { imgUrl: string, subheading: string, heading: string, children: ReactNode }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: { subheading: string, heading: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl font-medium text-teal-300">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ description, features, cta }: { description: string, features: string[], cta: string }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-slate-900">
      Detalles del servicio
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-8 text-xl text-slate-600 md:text-2xl leading-relaxed">
        {description}
      </p>
      
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-teal-600" />
            </div>
            {feature}
          </div>
        ))}
      </div>

      <Button 
        className="w-full md:w-fit"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {cta} <ArrowUpRight className="ml-2 w-5 h-5" />
      </Button>
    </div>
  </div>
);
