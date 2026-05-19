import { motion, useScroll, useTransform } from "motion/react";
import { 
  Anchor, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail, 
  Fish, 
  Waves, 
  Star, 
  Menu as MenuIcon, 
  X,
  Compass,
  Navigation,
  ExternalLink
} from "lucide-react";
import { useState, useRef } from "react";

// --- Components ---

const NauticalWave = ({ className = "", color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V30Z" 
      fill={color} 
    />
  </svg>
);

const RopeBorder = () => (
  <svg width="100%" height="8" className="absolute top-0 left-0 w-full overflow-visible opacity-30">
    <pattern id="rope-pattern" x="0" y="0" width="40" height="8" patternUnits="userSpaceOnUse">
      <path d="M0 4Q10 0 20 4T40 4" stroke="#8B6914" strokeWidth="3" fill="none" />
    </pattern>
    <rect width="100%" height="8" fill="url(#rope-pattern)" />
  </svg>
);

const Seagull = ({ delay = 0, className = "" }: { delay?: number, className?: string }) => (
  <motion.svg 
    viewBox="0 0 24 24" 
    className={`w-8 h-8 text-white/40 ${className}`}
    initial={{ y: 0, x: 0 }}
    animate={{ 
      y: [0, -10, 0], 
      x: [0, 5, 0],
      rotate: [0, 5, 0]
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
  >
    <path d="M2 10C5 7 9 7 12 10C15 7 19 7 22 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </motion.svg>
);

// --- Sections ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const images = [
    "https://i.postimg.cc/FRkSvLxj/688253761-122108722383075244-3146713631550382778-n.jpg",
    "https://i.postimg.cc/G2TDRyjj/q.png",
    "https://i.postimg.cc/k4RSCbyj/rr.png",
    "https://i.postimg.cc/50QzJCmg/w.png"
  ];

  return (
    <div className="min-h-screen font-body text-text-primary selection:bg-sea-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Anchor className="text-sea-primary w-8 h-8" />
            <h1 className="text-2xl md:text-3xl font-display italic font-bold tracking-tight">
              Smażalnia <span className="text-sea-primary">Przystań</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-ui font-semibold text-sm uppercase tracking-widest">
            <a href="#o-nas" className="hover:text-sea-primary transition-colors">O nas</a>
            <a href="#galeria" className="hover:text-sea-primary transition-colors">Galeria</a>
            <a href="#opinie" className="hover:text-sea-primary transition-colors">Opinie</a>
            <a href="#kontakt" className="px-5 py-2 bg-sea-primary text-white rounded-full hover:bg-sea-deep transition-all shadow-md active:scale-95">Kontakt</a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-text-primary">
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-border-light md:hidden py-8 px-6 flex flex-col gap-6 font-ui font-bold text-lg"
          >
            <a href="#o-nas" onClick={() => setIsMenuOpen(false)}>O nas</a>
            <a href="#galeria" onClick={() => setIsMenuOpen(false)}>Galeria</a>
            <a href="#opinie" onClick={() => setIsMenuOpen(false)}>Opinie</a>
            <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="text-sea-primary">Kontakt</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg-dark pt-20">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <Compass className="w-[800px] h-[800px] text-white rotate-12" />
        </div>
        
        {/* Seagulls */}
        <Seagull className="absolute top-1/4 left-1/4" delay={0.5} />
        <Seagull className="absolute top-1/3 right-1/4 scale-75" delay={1.2} />
        <Seagull className="absolute top-1/2 left-1/2 scale-50" delay={2} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-ui font-bold text-sea-light uppercase tracking-[0.3em] text-sm md:text-base mb-6 flex items-center justify-center gap-3"
          >
            ⚓ <span className="bg-sea-primary/20 px-3 py-1 rounded">Tradycja znad Bałtyku</span> ⚓
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-bold text-white leading-[1.1] mb-8"
          >
            Najświeższa ryba <br />
            <span className="italic font-normal text-sun-yellow">prosto z kutra</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-text-light-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light italic"
          >
            Zapraszamy do Przystani w Rowach, gdzie smaki morza łączą się z rodzinną atmosferą.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a href="#galeria" className="px-8 py-4 bg-sun-yellow text-bg-dark rounded-full font-ui font-black uppercase tracking-wider hover:bg-sun-orange transition-all shadow-xl shadow-black/20 hover:-translate-y-1">
              Galeria zdjęć
            </a>
            <a href="tel:453314069" className="flex items-center gap-3 text-white font-ui font-bold hover:text-sea-light transition-colors">
              <Phone className="w-5 h-5 text-sun-yellow" />
              453 314 069
            </a>
          </motion.div>
        </div>

        {/* Waves Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <NauticalWave color="#F0F8FF" className="w-full h-24" />
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-24 bg-bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-template-columns-[1.2fr_1fr] gap-16 items-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-sea-pale/50 rounded-full blur-3xl -z-10" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://i.postimg.cc/FRkSvLxj/688253761-122108722383075244-3146713631550382778-n.jpg" 
                alt="Wnętrze smażalni" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sea-primary font-ui font-extrabold uppercase tracking-widest text-sm mb-4">⚓ O naszej pasji</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-text-primary">Ryba, której można zaufać</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Smażalnia "Przystań" to miejsce stworzone z miłości do Bałtyku i tradycji rybackich. Znajdujemy się w samym sercu Rowów, tuż przy porcie, skąd codziennie odbieramy świeże połowy.
            </p>
            
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-sea-primary font-display text-4xl font-black">100%</span>
                <span className="text-text-muted font-ui font-bold uppercase text-xs tracking-tighter">Świeże Ryby</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-bg-warm" ref={galleryRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div>
              <h3 className="text-rope-brown font-ui font-bold uppercase tracking-widest text-sm mb-4 whitespace-nowrap flex items-center gap-2">
                <Fish className="w-4 h-4" /> Nasza Przystań w obiektywie
              </h3>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">Galeria smaku</h2>
            </div>
            <p className="max-w-md text-text-secondary italic">
              Zobacz jak przygotowujemy nasze dania i poczuj klimat naszej restauracji tuż przy kanale portowym w Rowach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="nautical-card p-2 h-72 group"
              >
                <RopeBorder />
                <img 
                  src={img} 
                  alt={`Galeria ${idx + 1}`} 
                  className="w-full h-full object-cover rounded-lg group-hover:brightness-110 transition-all" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="opinie" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full leading-[0] fill-bg-warm">
           <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
             <path d="M0 0L60 10C120 20 240 40 360 40C480 40 600 20 720 10C840 0 960 0 1080 10C1200 20 1320 40 1380 50L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V0Z" />
           </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center mt-12">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-sun-yellow text-sun-yellow" />)}
          </div>
          
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            className="mb-12"
          >
            <blockquote className="text-3xl md:text-4xl font-display italic font-medium text-text-primary leading-tight mb-8">
              "profesjonalna obsługa, właściciele z dużo wiedzą o rybach można zaufać w ciemno, przepyszne rybki świeża"
            </blockquote>
            <p className="font-ui font-bold text-sea-primary uppercase tracking-widest text-sm">— Recenzja z Facebooka</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61582257330893&sk=reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-sea-primary text-sea-primary rounded-full font-ui font-black hover:bg-sea-primary hover:text-white transition-all shadow-lg"
            >
              <Facebook className="w-5 h-5" /> 
              Wszystkie opinie
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61582257330893" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary font-ui font-bold hover:text-sea-primary transition-all"
            >
              Nasz Facebook <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Location / Contact */}
      <section id="kontakt" className="py-24 bg-bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h3 className="text-sea-primary font-ui font-bold uppercase tracking-widest text-sm mb-4">~ Zapraszamy do nas ~</h3>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">Gdzie nas znaleźć?</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border-light flex items-center justify-center shrink-0">
                    <MapPin className="text-sea-primary" />
                  </div>
                  <div>
                    <h4 className="font-ui font-bold text-xs uppercase tracking-widest text-text-muted mb-1">Adres</h4>
                    <p className="text-lg font-display italic">Portowa 4, Rowy 76-212</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border-light flex items-center justify-center shrink-0">
                    <Phone className="text-sea-primary" />
                  </div>
                  <div>
                    <h4 className="font-ui font-bold text-xs uppercase tracking-widest text-text-muted mb-1">Telefon</h4>
                    <p className="text-lg font-display italic">453 314 069</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border-light flex items-center justify-center shrink-0">
                    <Mail className="text-sea-primary" />
                  </div>
                  <div>
                    <h4 className="font-ui font-bold text-xs uppercase tracking-widest text-text-muted mb-1">Email</h4>
                    <p className="text-lg font-display italic">przystanrowy@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border-light flex items-center justify-center shrink-0">
                    <Navigation className="text-sea-primary" />
                  </div>
                  <div>
                    <h4 className="font-ui font-bold text-xs uppercase tracking-widest text-text-muted mb-1">Godziny</h4>
                    <p className="text-lg font-display italic">Codziennie: 10:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.4371718297084!2d17.050800277214673!3d54.66673317511541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe6ae6f113284d%3A0x299b08900bd5f670!2sSma%C5%BCalnia%20Ryb%20Przysta%C5%84!5e0!3m2!1spl!2spl!4v1779185554169!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-dock text-white py-16 dock-planks relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-sun-orange opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Anchor className="text-sun-yellow w-10 h-10" />
                <h2 className="text-3xl font-display italic font-bold">Przystań</h2>
              </div>
              <p className="text-text-light-muted italic max-w-xs leading-relaxed">
                Prawdziwa smażalnia z portową duszą. Odwiedź nas w Rowach i zakochaj się w smakach Bałtyku.
              </p>
            </div>

            <div>
              <h4 className="font-ui font-extrabold uppercase tracking-[0.2em] text-xs text-sun-yellow mb-8">Nawigacja</h4>
              <ul className="grid grid-cols-2 gap-4 font-ui font-medium text-sm text-text-light-muted">
                <li><a href="#" className="hover:text-white transition-colors">Strona Główna</a></li>
                <li><a href="#o-nas" className="hover:text-white transition-colors">O Nas</a></li>
                <li><a href="#galeria" className="hover:text-white transition-colors">Galeria</a></li>
                <li><a href="#opinie" className="hover:text-white transition-colors">Opinie</a></li>
                <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-ui font-extrabold uppercase tracking-[0.2em] text-xs text-sun-yellow mb-8">Bądźmy w kontakcie</h4>
              <div className="flex flex-col gap-4">
                 <a href="https://www.facebook.com/profile.php?id=61582257330893" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                   <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-sea-primary group-hover:border-sea-primary transition-all">
                     <Facebook className="w-5 h-5" />
                   </div>
                   <span className="font-ui font-bold text-sm tracking-widest text-text-light-muted group-hover:text-white transition-colors">FACEBOOK</span>
                 </a>
                 <div className="pt-4 flex items-center gap-2">
                   <img src="https://i.postimg.cc/SxZYzrT1/690682906-122109254187075244-5706504687304607552-n.jpg" className="w-12 h-12 rounded-full border-2 border-sun-yellow p-1" alt="Logo" />
                   <p className="text-[10px] text-text-light-muted uppercase tracking-widest leading-tight">
                     Smażalnia Przystań<br />Portowa 4, Rowy
                   </p>
                 </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-text-light-muted text-xs font-ui">
              © {new Date().getFullYear()} Smażalnia Przystań Rowy. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex items-center gap-1 text-white/20 font-ui text-[10px] tracking-[0.3em] uppercase">
               Proudly <Star className="w-3 h-3 text-sun-yellow" /> Baltic
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
