import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    whatsapp: '',
    city: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormState({ name: '', email: '', whatsapp: '', city: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block h-full min-h-[600px]"
          >
             {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-violet-200/30 rounded-full blur-3xl -z-10"></div>

            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea86b48e?q=80&w=1000&auto=format&fit=crop" 
              alt="Nutricionista sonriendo" 
              className="w-full h-full object-cover object-center rounded-3xl shadow-2xl mask-image-gradient"
              style={{ maxHeight: '700px', objectPosition: 'top center' }}
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
            >
              <p className="text-slate-600 italic text-sm">
                "NutriTech cambió mi forma de trabajar. Ahora tengo más tiempo para mis pacientes y menos estrés administrativo."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-700">
                  LC
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Lic. Clara M.</p>
                  <p className="text-xs text-slate-500">Nutricionista Pediátrica</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 relative"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Empezá hoy mismo
              </h2>
              <p className="text-slate-600">
                Completá el formulario y recibí una propuesta a medida para tu consultorio.
              </p>
            </div>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-600">
                  Gracias por contactarnos. Te escribiremos pronto a tu WhatsApp o Email.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-8"
                  onClick={() => setIsSuccess(false)}
                >
                  Enviar otro mensaje
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                    placeholder="Ej: Lic. María González"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email profesional</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                    placeholder="maria@nutricion.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="text-sm font-medium text-slate-700">WhatsApp</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formState.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                      placeholder="+54 9 11..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium text-slate-700">Ciudad</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formState.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                      placeholder="Buenos Aires"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none resize-none"
                    placeholder="Contanos qué te gustaría mejorar en tu consultorio..."
                  />
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full shadow-lg shadow-teal-500/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar Presupuesto <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-slate-400 mt-4">
                    Al enviar este formulario aceptás nuestra política de privacidad.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
