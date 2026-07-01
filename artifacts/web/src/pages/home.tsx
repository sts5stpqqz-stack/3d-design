import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Scan, Cpu, Printer, ChevronRight, ArrowRight, Layers, Lightbulb, PenTool, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import logoPath from "@assets/311designs_logo.png";
import logoNoBgPath from "@assets/311designs_logo_nobg.png";

const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const STAGGER = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.2 }
};

const ITEM = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoPath} alt="311 Designs" className="h-8 w-auto drop-shadow-md" />
          <span className="font-serif font-bold text-xl tracking-wide text-foreground">311 DESIGNS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-primary transition-colors uppercase tracking-wider font-mono text-xs" data-testid="link-services">Services</a>
          <a href="#process" className="hover:text-primary transition-colors uppercase tracking-wider font-mono text-xs" data-testid="link-process">Process</a>
          <a href="#portfolio" className="hover:text-primary transition-colors uppercase tracking-wider font-mono text-xs" data-testid="link-portfolio">Portfolio</a>
          <Button onClick={scrollToContact} className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground tracking-wide" data-testid="btn-nav-contact">
            Work With Us
          </Button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero-bg.png" alt="Abstract metal background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 pointer-events-none" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div
            className="mx-auto rounded-full p-[3px]"
            style={{
              background: "linear-gradient(to right, hsl(211 29% 45%), #93c5fd)",
              filter: "drop-shadow(0 0 24px rgba(147,197,253,0.35))",
              width: "fit-content",
            }}
          >
            <div className="rounded-full flex items-center justify-center p-8 md:p-10" style={{ background: "hsl(var(--background))" }}>
              <div
                style={{
                  WebkitMaskImage: `url(${logoNoBgPath})`,
                  maskImage: `url(${logoNoBgPath})`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  background: "linear-gradient(to right, hsl(211 29% 45%), #93c5fd)",
                }}
                className="h-24 md:h-32 w-24 md:w-32"
                role="img"
                aria-label="311 Designs Studio"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary/30 bg-primary/10 text-primary-foreground text-xs font-mono uppercase tracking-wider"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Precision Engineering Studio
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tighter mb-6 max-w-4xl text-foreground"
        >
          Designs Built <br className="hidden md:block"/> With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Purpose</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light"
        >
          3D design, precise scanning, and high-quality printing — delivering custom, functional, and visually striking creations powered by creativity, craftsmanship, and cutting-edge tech.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="rounded-none h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground group border border-transparent hover:border-primary/50 transition-all shadow-[0_0_20px_rgba(63,88,115,0.3)] hover:shadow-[0_0_30px_rgba(63,88,115,0.5)]"
            data-testid="btn-hero-contact"
          >
            Work With Us
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "3D Scanning",
      description: "Capture physical objects with sub-millimeter precision for reverse engineering, archiving, or custom fitment.",
      icon: Scan,
    },
    {
      title: "Custom CAD Design",
      description: "Expert Fusion 360 modeling to turn concepts into functional, manufacturable, and visually striking parts.",
      icon: Cpu,
    },
    {
      title: "3D Printing",
      description: "High-quality FDM and Resin printing using engineering-grade materials built for rigorous applications.",
      icon: Printer,
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-card/30 border-y border-border/50 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div {...FADE_UP} className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">Core Capabilities</h2>
          <div className="h-1 w-20 bg-primary" />
        </motion.div>

        <motion.div 
          variants={STAGGER}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, i) => (
            <motion.div 
              key={i}
              variants={ITEM}
              className="group relative p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
              data-testid={`card-service-${i}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 text-primary">
                <service.icon className="w-32 h-32" />
              </div>
              <service.icon className="w-10 h-10 text-primary mb-6 drop-shadow-[0_0_8px_rgba(63,88,115,0.5)]" />
              <h3 className="text-xl font-bold font-serif mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: "01", title: "Consultation & Scope", desc: "Understanding the operational constraints, material requirements, and final intent of the part." },
    { num: "02", title: "Scanning & Capture", desc: "High-resolution optical data acquisition to establish precise real-world geometry." },
    { num: "03", title: "CAD Engineering", desc: "Parametric modeling in Fusion 360. Iterative refinement for optimal strength and fit." },
    { num: "04", title: "Fabrication", desc: "Additive manufacturing using industrial-grade polymers tailored for the specific environment." }
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 hidden lg:block opacity-30" />
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div {...FADE_UP} className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">Our Process</h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">A systematic approach to transforming complex physical challenges into engineered solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="bg-card border border-border p-8 h-full">
                <span className="text-5xl font-mono font-bold text-primary/20 absolute top-4 right-6">{step.num}</span>
                <h3 className="text-xl font-bold font-serif mb-4 mt-6">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const works = [
    { title: "3D Scan", img: "/images/portfolio-scan.png", category: "Reverse Engineering" },
    { title: "Custom Design", img: "/images/portfolio-cad.png", category: "Fusion 360" },
    { title: "Fusion360 Modelling", img: "/images/portfolio-fusion.png", category: "Prototyping" },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card/20 border-y border-border/50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div {...FADE_UP} className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">Recent Work</h2>
            <div className="h-1 w-20 bg-primary" />
          </div>
          <p className="text-muted-foreground max-w-md">
            A selection of bespoke creations, showcasing our commitment to precision, functionality, and aesthetic quality.
          </p>
        </motion.div>

        <motion.div 
          variants={STAGGER}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {works.map((work, i) => (
            <motion.div 
              key={i}
              variants={ITEM}
              className="group cursor-pointer block relative aspect-[4/3] overflow-hidden bg-card border border-border"
              data-testid={`card-portfolio-${i}`}
            >
              <img 
                src={work.img} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary text-xs font-mono uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 drop-shadow-md">{work.category}</p>
                <h3 className="text-2xl font-serif font-bold text-white drop-shadow-lg">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Technology() {
  const specs = [
    { label: "Modeling", value: "Autodesk Fusion 360" },
    { label: "Scanning", value: "Sub-0.1mm Optical" },
    { label: "FDM Tech", value: "High-Temp Engineering grade" },
    { label: "Resin", value: "4K SLA Precision" },
    { label: "Materials", value: "PA-CF, ABS, Tough Resin" },
    { label: "Tolerances", value: "±0.05mm achievable" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...FADE_UP}>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Technical Specifications</h2>
             <p className="text-muted-foreground mb-8 leading-relaxed">
               We utilize industrial-grade software and hardware to ensure that every dimension is exact and every physical property meets the demands of its operating environment.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specs.map((spec, i) => (
                  <div key={i} className="flex flex-col p-4 border border-border bg-card/30">
                    <span className="text-xs font-mono uppercase text-muted-foreground mb-1">{spec.label}</span>
                    <span className="font-medium text-foreground">{spec.value}</span>
                  </div>
                ))}
             </div>
          </motion.div>
          <motion.div 
            {...FADE_UP} 
            className="relative aspect-square md:aspect-video lg:aspect-square bg-card border border-border overflow-hidden flex items-center justify-center p-12"
          >
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz4KPC9zdmc+')] opacity-50" />
             <div className="relative z-10 w-full h-full border border-primary/20 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                <div className="w-3/4 h-3/4 border border-primary/40 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]">
                  <div className="w-1/2 h-1/2 border border-primary rounded-full shadow-[0_0_30px_rgba(63,88,115,0.4)]" />
                </div>
             </div>
             <Layers className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-primary drop-shadow-[0_0_15px_rgba(63,88,115,0.8)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(data: z.infer<typeof contactSchema>) {
    console.log(data);
    toast({
      title: "Message Sent",
      description: "We've received your inquiry and will be in touch shortly.",
      duration: 5000,
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/50 border-t border-border/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div {...FADE_UP}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">Start a Project</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
              Whether you need precise reverse engineering, a custom functional part, or a high-fidelity prototype, we have the tools and expertise to build it.
            </p>
            
            <div className="space-y-6 text-sm font-mono text-muted-foreground mt-12 border-t border-border/50 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-background shadow-inner">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(63,88,115,0.8)]" />
                </div>
                <span>Based in the United Kingdom<br/>High-Spec Fabrication Lab</span>
              </div>
            </div>
          </motion.div>

          <motion.div {...FADE_UP} className="bg-background border border-border p-6 md:p-10 shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent" />
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono uppercase text-xs tracking-wider text-muted-foreground">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="rounded-none bg-card border-border h-12 focus-visible:ring-primary focus-visible:border-primary text-foreground" data-testid="input-contact-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono uppercase text-xs tracking-wider text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="rounded-none bg-card border-border h-12 focus-visible:ring-primary focus-visible:border-primary text-foreground" data-testid="input-contact-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono uppercase text-xs tracking-wider text-muted-foreground">Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your requirements..." 
                          className="rounded-none bg-card border-border min-h-[150px] resize-y focus-visible:ring-primary focus-visible:border-primary text-foreground" 
                          {...field} 
                          data-testid="input-contact-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full rounded-none h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base tracking-wide shadow-[0_0_15px_rgba(63,88,115,0.2)] hover:shadow-[0_0_25px_rgba(63,88,115,0.4)] transition-shadow" data-testid="btn-contact-submit">
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoPath} alt="311 Designs" className="h-6 w-auto grayscale opacity-50" />
          <span className="font-serif font-bold text-lg tracking-wide text-muted-foreground">311 DESIGNS</span>
        </div>
        <p className="text-sm font-mono text-muted-foreground/60">
          &copy; {new Date().getFullYear()} 311 Designs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
