/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUp,
  Download,
  Mail,
  Github,
  Linkedin,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-charcoal/5">
    <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
      <a href="#" className="text-xl font-medium tracking-tight hover:text-primary transition-colors">Tiyasa Saha</a>
      <ul className="flex space-x-8 text-sm font-medium uppercase tracking-widest text-charcoal/70">
        <li>
          <a className="hover:text-primary transition-colors" href="#about">
            About
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary transition-colors"
            href="#experience"
          >
            Path
          </a>
        </li>
        <li>
          <a className="hover:text-primary transition-colors" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="hover:text-primary transition-colors" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-[90vh] pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full md:w-1/2 space-y-6"
    >
      <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-2">
        Hello, I'm Tiyasa
      </span>
      <h1 className="text-5xl md:text-7xl font-light leading-tight">
        Finding the <span className="italic">human stories</span> hidden in
        complex data.
      </h1>
      <p className="text-xl text-charcoal/60 max-w-lg font-light leading-relaxed">
        Data Engineer & MS in Data Science candidate specializing in scalable
        ETL pipelines, ML content strategy, and narrative-driven analytics.
      </p>
      <div className="pt-4">
        <a
          className="inline-flex items-center gap-2 border-b border-charcoal pb-1 hover:text-primary hover:border-primary transition-all duration-300"
          href="#projects"
        >
          View Projects
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="w-full md:w-5/12"
    >
      <div className="aspect-square relative overflow-hidden bg-gray-200 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-2xl">
        <img
          alt="Tiyasa Saha Portrait"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          src="/profile.jpg"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section
    className="py-24 px-6 max-w-6xl mx-auto border-t border-charcoal/5"
    id="about"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-light mb-8">
          Data is just another way of observing people.
        </h2>
        <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
          <p>
            I am a Data Engineer and MS in Data Science student with a passion
            for building scalable data systems and translating complex technical
            concepts into actionable insights. My experience spans from building
            robust ETL pipelines to optimizing content strategies through data
            analysis.
          </p>
          <p>
            Data is everywhere, insight is rare. I build models, pipelines, and
            products that turn complexity into clarity. Take a look at how I
            make data work in the real world.
          </p>
        </div>
      </div>
      <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
        <h3 className="text-sm uppercase tracking-widest font-semibold text-accent mb-6 italic">
          Beyond the Terminal
        </h3>
        <ul className="space-y-4 text-charcoal/70 italic">
          <li>• Dancing keeps me balanced</li>
          <li>• Love discovering new music</li>
          <li>• Bollywood movies are my go-to</li>
          <li>• Love exploring new cultures</li>
        </ul>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section className="py-24 px-6 bg-charcoal/5" id="experience">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-center text-3xl font-light mb-16 tracking-tight">
        The Journey So Far
      </h2>
      <div className="space-y-12">
        {[
          {
            date: "MAR 2026 — PRESENT",
            title: "Data Engineer",
            company: "Saayam For All • Remote",
            desc: "Assisted in building ETL pipelines using Python and SQL to transform raw data into structured datasets. Managed data on AWS S3, performed quality checks, and monitored pipelines for reliability. Supported query development and Power BI dashboards to deliver actionable insights.",
          },
          {
            date: "SEPT 2025 — MAR 2026",
            title: "AI Intern",
            company: "Interview Query • Remote",
            desc: "Authored 100+ tech blogs on DS/ML/DE concepts, improving domain ranking by 7 points. Optimized content strategy via marketing data analysis, contributing to a 100% increase in sitewide impressions and CTR. Designed 200+ SQL/Python/ML questions with detailed technical solutions.",
          },
          {
            date: "OCT 2020 — AUG 2023",
            title: "System Engineer",
            company: "Tata Consultancy Services • Kolkata, India",
            desc: "Built scalable ETL pipelines using Python and SQL, reducing system latency by 30%. Automated Azure VM provisioning and RCA workflows, reducing manual effort by 40%. Developed real-time Power BI dashboards for KPI visualization.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col md:flex-row gap-4 md:gap-12 items-start relative pb-12 border-l border-charcoal/10 pl-8 md:pl-0 md:border-l-0"
          >
            <div className="md:w-1/4 md:text-right text-accent font-medium text-sm pt-1">
              {item.date}
            </div>
            <div className="md:w-3/4">
              <h4 className="text-xl font-medium">{item.title}</h4>
              <p className="text-charcoal/60 mb-3">{item.company}</p>
              {item.desc && (
                <p className="text-charcoal/80 leading-relaxed">{item.desc}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCarousel = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="relative overflow-hidden rounded-2xl mb-6 bg-gray-100 aspect-[4/3] group">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          alt={title}
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
          src={images[current]}
        />
      </AnimatePresence>
      <button
        type="button"
        aria-label="Previous image"
        onClick={() =>
          setCurrent((c: number) => (c - 1 + images.length) % images.length)
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
      >
        <ChevronLeft className="w-4 h-4 text-charcoal" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => setCurrent((c: number) => (c + 1) % images.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
      >
        <ChevronRight className="w-4 h-4 text-charcoal" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to image ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-4 bg-white" : "w-1.5 bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => (
  <section className="py-24 px-6 max-w-6xl mx-auto" id="projects">
    <div className="flex justify-between items-end mb-16">
      <div>
        <h2 className="text-4xl font-light">Projects</h2>
        <p className="text-charcoal/50 mt-2 italic">
          A focus on story and impact.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {[
        {
          tag: "Generative AI • Health",
          title: "BrCaBot - Breast Cancer Information Chatbot",
          desc: "LLM-based breast cancer chatbot using LangChain, Pinecone, and RAG with OpenAI and Hugging Face embeddings.",
          img: "/BrcaBot%20/BrcaBot.png",
          link: "https://github.com/Tiyasa-Saha/BrCabot",
        },
        {
          tag: "Agentic AI • Travel",
          title: "Agentic Holiday Planner",
          desc: "AI-powered travel planning system using a multi-agent PRMA framework. Coordinates six specialized agents for real flight/hotel search via SerpAPI, budget-aware recommendations, and persistent user preferences, all through a conversational interface.",
          images: [
            "/AI%20Travel%20Agent/WhatsApp%20Image%202026-06-05%20at%2018.24.16.jpeg",
            "/AI%20Travel%20Agent/chat_history_for_embedding.jpeg",
          ],
          link: "https://github.com/Tiyasa-Saha/agentic-holiday-planner",
        },
        {
          tag: "ML • Oncology",
          title: "TCGA-BRCA Treatment Prediction",
          desc: "Machine learning pipeline predicting breast cancer treatment outcomes from TCGA clinical data, covering data preprocessing, visualization, and model evaluation with scikit-learn.",
          img: "/TCGA-BRCA%20Treatment%20Predictor/TCGA-BRCA_Treatment_predictor.jpeg",
          link: "https://github.com/Tiyasa-Saha/TCGA-BRCA_Treatment_Prediction",
        },
        {
          tag: "Deep Learning • Medical Imaging",
          title: "Brain Tumor MRI Classification",
          desc: "End-to-end TensorFlow pipeline for brain tumor detection from MRI scans, with a complete model, REST API, and frontend for real-world clinical use.",
          img: "/Brain%20Tumor%20Classifier/Brain_tumor_classifier.jpeg",
          link: "https://github.com/Tiyasa-Saha/Brain-Tumor-MRI-Classification-using-TensorFlow-Pipeline",
        },
        {
          tag: "Generative AI • Research",
          title: "Research Article LLM Tool",
          desc: "RAG-powered research assistant that ingests up to 5 article URLs, uses FAISS for semantic search, and returns answers with numbered citations via a Streamlit interface, built with LangChain and OpenAI.",
          img: "/Research%20Article%20Tool/WhatsApp%20Image%202026-06-05%20at%2018.42.43.jpeg",
          link: "https://github.com/Tiyasa-Saha/research_article_llm_tool",
        },
      ].map((project, idx) => (
        <motion.article
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          className="group"
        >
          {"images" in project ? (
            <ProjectCarousel images={project.images!} title={project.title} />
          ) : (
            <div className="overflow-hidden rounded-2xl mb-6 bg-gray-100 aspect-[4/3]">
              <img
                alt={project.title}
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                src={project.img}
                referrerPolicy="no-referrer"
              />
            </div>
          )}
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-2 block">
            {project.tag}
          </span>
          <h3 className="text-2xl font-light mb-3">{project.title}</h3>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            {project.desc}
          </p>
          <a
            className="text-sm font-semibold inline-flex items-center gap-1 border-b border-transparent group-hover:border-primary transition-all"
            href={"link" in project ? project.link : "#"}
            target={"link" in project ? "_blank" : undefined}
            rel={"link" in project ? "noopener noreferrer" : undefined}
          >
            {"link" in project ? "View on GitHub" : "Case Study"}{" "}
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.article>
      ))}
    </div>
  </section>
);

const Toolbox = () => (
  <section className="py-24 px-6 max-w-6xl mx-auto border-y border-charcoal/5">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      <div>
        <h2 className="text-3xl font-light mb-8">The Toolbox</h2>
        <p className="text-charcoal/60 mb-8 leading-relaxed">
          I believe tools should adapt to the problem, not vice versa. Here are
          the core technologies I use to translate data into decisions.
        </p>
        <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
          {[
            "Python / PyTorch",
            "SQL & NoSQL",
            "GenAI / Agentic AI",
            "Tableau / D3.js",
            "AWS / GCP Cloud",
            "Scikit-learn",
          ].map((skill, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary"></span> {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-0 divide-y divide-charcoal/8">
        {[
          {
            domain: "AI & Generative Systems",
            skills: ["LLMs", "RAG", "LangChain", "Agentic AI", "OpenAI SDK"],
          },
          {
            domain: "Data Engineering",
            skills: [
              "ETL Pipelines",
              "Apache Spark",
              "Airflow",
              "AWS S3",
              "Azure",
            ],
          },
          {
            domain: "Analysis & Visualization",
            skills: ["Power BI", "Tableau", "D3.js", "Statistical Modeling"],
          },
          {
            domain: "ML & Deep Learning",
            skills: [
              "Scikit-learn",
              "TensorFlow",
              "PyTorch",
              "FAISS",
              "Hugging Face",
            ],
          },
        ].map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="py-5"
          >
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-3">
              {group.domain}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm text-charcoal/70 bg-charcoal/5 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Resume = () => (
  <section className="py-24 px-6 text-center">
    <motion.div
      initial={{ opacity: 0, rotate: 2 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto p-12 bg-white rounded-2xl shadow-sm border border-charcoal/5 transition-transform duration-500"
    >
      <h2 className="text-2xl font-light mb-4 italic">Ready to dive deeper?</h2>
      <p className="text-charcoal/50 mb-8">
        Download my full professional CV including technical publications and
        speaking history.
      </p>
      <a
        href="/Tiyasa_Saha_Resume.pdf"
        download
        className="bg-charcoal text-white px-8 py-4 rounded-2xl hover:bg-primary transition-colors inline-flex items-center gap-3 mx-auto shadow-xl group"
      >
        <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        Download CV (.pdf)
      </a>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-charcoal/5" id="contact">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <p className="text-sm font-medium">
          Currently based in <span className="text-accent italic">USA</span>
        </p>
      </div>
      <div className="flex space-x-8">
        <a
          className="text-charcoal/60 hover:text-primary transition-colors flex items-center gap-1"
          href="https://www.linkedin.com/in/tiyasa-saha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a
          className="text-charcoal/60 hover:text-primary transition-colors flex items-center gap-1"
          href="https://github.com/Tiyasa-Saha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
        <a
          className="text-charcoal/60 hover:text-primary transition-colors flex items-center gap-1"
          href="mailto:tiyasa.saha2110@gmail.com"
        >
          <Mail className="w-4 h-4" /> Email
        </a>
      </div>
      <div className="text-xs text-charcoal/30">
        © 2026 Tiyasa Saha. Hand-coded with focus.
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50 w-10 h-10 flex items-center justify-center bg-charcoal text-white rounded-full shadow-lg hover:bg-primary transition-colors"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <ArrowUp className="w-4 h-4" />
    </motion.button>
  );
};

export default function App() {
  return (
    <div className="selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Toolbox />
        <Resume />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
