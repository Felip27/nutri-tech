import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-violet-500 flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Nutri<span className="text-teal-400">Tech</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Ecosistema digital integral para nutricionistas infantiles. Tecnología que humaniza tu práctica.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Producto</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Web Personalizada</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Panel CRM</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Bot Inteligente</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Precios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Compañía</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 NutriTech Kids. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
