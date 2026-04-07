import { motion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";
import { resumeData } from "@/data/resume";

const ProfileImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="relative flex items-center justify-center"
  >
    {/* Light Blue halo */}
    <div
      className="absolute w-[125%] h-[125%] rounded-full gold-halo"
      aria-hidden="true"
    />

    {/* Floating + hover animation */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      whileHover={{ scale: 1.03 }}
      className="relative"
    >
      {/* Light Blue ring */}
      <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-[4px] gold-ring gold-glow">
        <img
          src="/assets/profile.jpg"
          alt="Profile photo of SREELEKHA MEENUGU"
          className="w-full h-full rounded-full object-cover bg-card"
          loading="eager"
        />
      </div>
    </motion.div>
  </motion.div>
);

const Hero = () => {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Subtle bg gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(59, 130, 246, 0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Mobile image - above text */}
        <div className="lg:hidden flex justify-center">
          <ProfileImage />
        </div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4"
          >
            {resumeData.title}
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            {resumeData.name.split(" ")[0]}
            <br />
            <span className="text-gradient">{resumeData.name.split(" ")[1]}</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Data Analyst professional with 4+ years of experience delivering scalable reporting solutions, 
            interactive dashboards, and data-driven insights across insurance, healthcare, and financial domains. 
            Expert in Power BI, SQL, and Python for driving business decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a
              href={`mailto:${resumeData.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg btn-gold font-medium gold-focus"
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors gold-focus"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-muted-foreground">
            <MapPin size={14} />
            {resumeData.location}
          </div>
        </motion.div>

        {/* Desktop image */}
        <div className="hidden lg:flex justify-center">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
