import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';

const SECTION_HEIGHT = 1500;

export const HeroSection = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full bg-neutral-950"
    >
      <CenterImage />
      <ParallaxImages />
      
      {/* Gradient overlay at the bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-neutral-950/0 to-white" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  const textOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const textScale = useTransform(scrollY, [0, 600], [1, 0.8]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden bg-neutral-950"
      style={{
        opacity,
      }}
    >
      {/* Hero Content */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
        style={{ opacity: textOpacity, scale: textScale }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[90vw] mx-auto"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight tracking-tight">
            ¿Querés llevar tu consultorio al <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-violet-300">siguiente nivel?</span>
          </h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-[200px] relative z-20 pointer-events-none">
      {/* Bot Image */}
      <ParallaxImg
        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop"
        alt="Bot Inteligente"
        start={-200}
        end={200}
        className="w-1/3 md:w-1/4 rounded-2xl shadow-2xl border-4 border-neutral-800 absolute left-4 md:left-20 top-1/4"
      />
      
      {/* Web Page Image */}
      <ParallaxImg
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        alt="Página Web"
        start={200}
        end={-250}
        className="w-2/3 md:w-1/2 rounded-2xl shadow-2xl border-4 border-neutral-800 mx-auto relative top-1/3"
      />

      {/* Healthy Food Image */}
      <ParallaxImg
        src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=800&auto=format&fit=crop"
        alt="Nutrición Saludable"
        start={-200}
        end={200}
        className="w-1/3 md:w-1/4 rounded-2xl shadow-2xl border-4 border-neutral-800 absolute right-4 md:right-20 top-1/2"
      />

      {/* Social Media Image */}
      <ParallaxImg
        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
        alt="Redes Sociales"
        start={0}
        end={-500}
        className="w-5/12 md:w-1/3 rounded-2xl shadow-2xl border-4 border-neutral-800 absolute left-1/4 bottom-0"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }: { className?: string, alt: string, src: string, start: number, end: number }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
