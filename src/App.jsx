 import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-6 bg-black/30 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold text-cyan-400">
          AI Portfolio
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6 relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm <span className="text-cyan-400">Rahul Shrivastava</span> <br />
          AI Engineer Building <br />
          <span className="text-cyan-400">Production AI Systems</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg md:text-2xl max-w-3xl"
        >
          Specializing in RAG pipelines, LLM applications, AI SaaS platforms,
          vector databases, and scalable backend systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-500 text-sm mt-3"
        >
          PhD in Mechanical Engineering • Research + Systems Thinking
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 mt-10"
        >
          <a href="#projects">
            <button className="px-8 py-4 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 transition">
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button className="px-8 py-4 border border-gray-600 rounded-xl hover:bg-white hover:text-black transition">
              Contact Me
            </button>
          </a>
        </motion.div>
      </section>

      {/* FAANG PROFILE SUMMARY */}
      {/* ACADEMIC CREDIBILITY (MINIMAL) */}
      
{/* FAANG PROFILE SUMMARY */}
<section className="px-8 pb-10 relative z-10">

  {/* HEADING */}
  <h2 className="text-3xl font-bold text-center mb-6">
    Academic and Research Background 
  </h2>

  {/* CONTENT BOX */}
  <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">

    <p className="text-center text-gray-300 text-sm md:text-base leading-relaxed">
<p className="text-center text-gray-500 text-sm mb-6">
  Bridging research engineering with production AI systems
</p>
      <span className="text-cyan-400 font-semibold">
        AI Engineer (LLM Systems & RAG Architect)
      </span>
      {" "}with a strong research foundation (PhD, NIT Bhopal) transitioning from
      optimization and systems engineering into scalable AI product development.

      <br /><br />

      Experienced in building <span className="text-white">production-grade AI systems</span> involving
      <span className="text-white"> Retrieval-Augmented Generation (RAG), vector databases, LLM pipelines, and backend deployment architectures</span>.

      <br /><br />

      Published researcher with SCI-indexed papers in
      <span className="text-white"> optimization (DOE + PSO)</span> and applied engineering systems,
      combined with hands-on experience in
      <span className="text-white"> FastAPI, AWS, Docker, CI/CD, and scalable AI infrastructure</span>.

    </p>

  </div>

</section>



      {/* PROJECTS */}
      {/* PROJECTS SECTION */}
<section id="projects" className="py-24 px-8 relative z-10">

  <h2 className="text-4xl font-bold text-center mb-4">
    Production AI System
  </h2>

  <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
    End-to-end production-grade AI system demonstrating real-world RAG architecture,
    deployment, and scalable inference pipeline.
  </p>

  <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">

    {/* FLAGSHIP RAG SYSTEM */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg overflow-hidden"
    >

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-cyan-400 mb-3 relative z-10">
        Production RAG Document Intelligence System
      </h3>

      <p className="text-gray-400 text-sm mb-6 relative z-10">
        Full-scale Retrieval-Augmented Generation system for querying large PDF datasets
        with grounded responses, citations, and page-level traceability.
      </p>

      {/* FLOW PIPELINE */}
      <div className="relative z-10 flex flex-col gap-4 text-sm text-gray-300">

        <p>📄 PDF Parsing → Chunking → Metadata Extraction</p>
        <p>🧠 OpenAI Embeddings Generation</p>
        <p>🔎 FAISS Vector Search (Cosine Similarity, Top-K = 8)</p>
        <p>🤖 LLM Response Generation (OpenAI GPT API)</p>
        <p>📌 Grounded Answer with Source + Page Number Citation</p>

      </div>

      {/* SYSTEM ARCHITECTURE */}
      <div className="relative z-10 mt-6 text-sm text-gray-300 space-y-2 border-t border-white/10 pt-4">

        <p>⚙️ FastAPI async inference pipeline</p>
        <p>🎨 Streamlit interactive UI</p>
        <p>🐳 Dockerized microservice architecture</p>
        <p>☁️ AWS EC2 deployment + Nginx reverse proxy</p>
        <p>🚀 CI/CD via GitHub Actions</p>
        <p>🔐 Secure API keys via environment variables</p>
        <p>🔒 SSL via Certbot</p>

      </div>

      {/* BUTTONS */}
      <div className="flex gap-3 mt-6 relative z-10">

        <a href="https://github.com/your-repo" target="_blank" rel="noreferrer">
          <button className="px-4 py-2 border border-gray-600 rounded-lg text-sm">
            GitHub
          </button>
        </a>
            <a
  href="https://rag.rahulshrivastava.dev"
  target="_blank"
  rel="noreferrer"
>
  <button className="px-4 py-2 bg-cyan-400 text-black rounded-lg text-sm font-semibold">
    Live Demo
  </button>
</a>

      </div>

    </motion.div>

  </div>
</section>

      {/* SYSTEM DESIGN SECTION */}
<section id="system-design" className="py-24 px-8 relative z-10">

  <h2 className="text-4xl font-bold text-center mb-6">
    AI System Design
  </h2>

  <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
    How I design and deploy production-grade AI systems like RAG pipelines,
    LLM applications, and scalable AI SaaS architectures.
  </p>

  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

    {/* RAG SYSTEM */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">

      <h3 className="text-xl font-semibold text-cyan-400 mb-4">
        Retrieval-Augmented Generation (RAG) Pipeline
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        Used for building intelligent assistants that answer from private data.
      </p>

      <div className="text-sm text-gray-300 space-y-2">

        <p>📥 User Query → Embedding Model</p>
        <p>🔎 Vector Search (FAISS / Pinecone)</p>
        <p>📄 Context Retrieval from Knowledge Base</p>
        <p>🧠 LLM (GPT / Claude) generates final answer</p>
        <p>📤 Response returned to user</p>

      </div>

      <p className="text-gray-500 text-xs mt-4">
        Focus: Context accuracy, hallucination reduction, retrieval optimization
      </p>

    </div>

    {/* AI SAAS SYSTEM */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">

      <h3 className="text-xl font-semibold text-purple-400 mb-4">
        AI SaaS Architecture
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        Scalable AI products with authentication, APIs, and cloud deployment.
      </p>

      <div className="text-sm text-gray-300 space-y-2">

        <p>🌐 Frontend (Streamlit)</p>
        <p>⚙️ Backend API (FatAPI / Python)</p>
        <p>🗄️ Database (MongoDB / PostgreSQL)</p>
        <p>🤖 AI Layer (OpenAI APIs)</p>
        <p>☁️ Deployment ( AWS)</p>

      </div>

      <p className="text-gray-500 text-xs mt-4">
        Focus: Scalability, latency optimization, secure AI integration
      </p>

    </div>

  </div>

</section>

{/* ANIMATED SYSTEM DIAGRAM */}
<section className="py-24 px-8 relative z-10">

  <h2 className="text-4xl font-bold text-center mb-6">
    RAG System Flow (Live Architecture)
  </h2>

  <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
    Visual representation of how queries move through a production RAG pipeline.
  </p>

  <div className="flex flex-col md:flex-row items-center justify-center gap-6">

    {/* STEP 1 */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 border border-white/10 p-6 rounded-xl text-center w-60"
    >
      <div className="text-cyan-400 text-xl font-bold">1</div>
      <p className="text-white mt-2">User Query</p>
      <p className="text-gray-400 text-sm">Natural language input</p>
    </motion.div>

    {/* ARROW */}
    <div className="text-cyan-400 text-2xl hidden md:block">→</div>

    {/* STEP 2 */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-white/5 border border-white/10 p-6 rounded-xl text-center w-60"
    >
      <div className="text-purple-400 text-xl font-bold">2</div>
      <p className="text-white mt-2">Embedding Model</p>
      <p className="text-gray-400 text-sm">Convert text → vectors</p>
    </motion.div>

    <div className="text-cyan-400 text-2xl hidden md:block">→</div>

    {/* STEP 3 */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="bg-white/5 border border-white/10 p-6 rounded-xl text-center w-60"
    >
      <div className="text-pink-400 text-xl font-bold">3</div>
      <p className="text-white mt-2">Vector Search</p>
      <p className="text-gray-400 text-sm">FAISS retrieval</p>
    </motion.div>

    <div className="text-cyan-400 text-2xl hidden md:block">→</div>

    {/* STEP 4 */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="bg-white/5 border border-white/10 p-6 rounded-xl text-center w-60"
    >
      <div className="text-green-400 text-xl font-bold">4</div>
      <p className="text-white mt-2">LLM Response</p>
      <p className="text-gray-400 text-sm">GPT generates answer</p>
    </motion.div>

  </div>

</section>

      {/* CONTACT */}
    <section id="contact" className="py-24 px-8 text-center relative z-10">
  <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

  <p className="text-gray-400 mb-10">
    Open to AI Engineer roles and projects.
  </p>

  <div className="flex flex-col md:flex-row justify-center gap-4">

    <a href="mailto:rahulshrivastava080@gmail.com">
      <button className="px-8 py-4 bg-cyan-400 text-black rounded-xl font-semibold">
        Email 
      </button>
    </a>

    <a
      href="https://wa.me/918839928659"
      target="_blank"
      rel="noreferrer"
    >
      <button className="px-8 py-4 border border-gray-600 rounded-xl">
        WhatsApp 
      </button>
    </a>

    <a
      href="https://github.com/rahulshrivastava080-create"
      target="_blank"
      rel="noreferrer"
    >
      <button className="px-8 py-4 border border-gray-600 rounded-xl">
        GitHub
      </button>
    </a>

    <a
      href="https://www.linkedin.com/in/rahul-shrivastava-7732a5392"
      target="_blank"
      rel="noreferrer"
    >
      <button className="px-8 py-4 border border-gray-600 rounded-xl">
        LinkedIn
      </button>
    </a>

  </div>

  <p className="text-gray-600 mt-10 text-sm">
    rahulshrivastava.dev
  </p>

  <p className="text-gray-600 mt-2 text-sm">
    © {new Date().getFullYear()} Rahul Shrivastava
  </p>
</section>
    </div>
  );
}

export default App;