import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    title: "Viniska K S | Data Science Student & Aspiring Data Engineer",
    meta: [
      {
        name: "description",
        content:
          "Portfolio of Viniska K S, a Data Science student building data pipelines and systems for scale, clarity, and precision.",
      },
      { property: "og:title", content: "Viniska K S | Data Science Student & Aspiring Data Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Viniska K S, a Data Science student building data pipelines and systems for scale, clarity, and precision.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="portfolio-page">
      <style>{`
        .portfolio-page {
          --bg: #050505;
          --surface: #0a0a0a;
          --surface-2: #111111;
          --text: #f5f5f5;
          --text-muted: #a0a0a0;
          --cherry: #a31636;
          --cherry-bright: #dc143c;
          --cherry-dim: rgba(163, 22, 54, 0.12);
          --cherry-glow: rgba(220, 20, 60, 0.25);
          --border: rgba(255, 255, 255, 0.08);
          --radius: 14px;
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.65;
          overflow-x: hidden;
        }
        .portfolio-page * { box-sizing: border-box; }
        .portfolio-page a { text-decoration: none; }
        .portfolio-page ul { list-style: none; padding: 0; margin: 0; }
        .portfolio-page h1, .portfolio-page h2, .portfolio-page h3, .portfolio-page p { margin: 0; }
        .portfolio-page section {
          padding: 7rem 5%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .bg-grid {
          position: fixed;
          inset: 0;
          z-index: -2;
          background-image:
            linear-gradient(rgba(163, 22, 54, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(163, 22, 54, 0.04) 1px, transparent 1px);
          background-size: 70px 70px;
          mask-image: radial-gradient(circle at center, black 0%, transparent 75%);
        }
        .bg-glow {
          position: fixed;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          filter: blur(160px);
          opacity: 0.14;
          z-index: -1;
          pointer-events: none;
        }
        .glow-1 { top: -250px; right: -200px; background: var(--cherry-bright); animation: float 14s ease-in-out infinite; }
        .glow-2 { bottom: -250px; left: -200px; background: #4a0d1a; animation: float 16s ease-in-out infinite reverse; }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 50px); }
        }
        .portfolio-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.25rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(5, 5, 5, 0.75);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .logo {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .logo-dot {
          width: 8px;
          height: 8px;
          background: var(--cherry-bright);
          border-radius: 50%;
          box-shadow: 0 0 14px var(--cherry-bright);
        }
        .nav-links { display: flex; gap: 2.5rem; }
        .nav-links a {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
        }
        .nav-links a:hover { color: var(--text); }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--cherry-bright);
          transition: width 0.2s;
        }
        .nav-links a:hover::after { width: 100%; }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
        }
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 6rem;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--cherry-dim);
          border: 1px solid rgba(220, 20, 60, 0.25);
          border-radius: 100px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: var(--cherry-bright);
          margin-bottom: 1.5rem;
          width: fit-content;
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          background: var(--cherry-bright);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .hero h1 {
          font-size: clamp(2.6rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 1.25rem;
          letter-spacing: -0.03em;
        }
        .gradient-text {
          background: linear-gradient(135deg, #ffffff 0%, var(--cherry-bright) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 560px;
          margin-bottom: 2.5rem;
        }
        .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 1.75rem;
          border-radius: var(--radius);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.2s;
          cursor: pointer;
          border: none;
        }
        .btn-primary {
          background: var(--cherry-bright);
          color: #fff;
          box-shadow: 0 0 30px var(--cherry-glow);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 45px rgba(220, 20, 60, 0.45); }
        .btn-secondary {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
        }
        .btn-secondary:hover {
          border-color: var(--cherry-bright);
          color: var(--cherry-bright);
          background: var(--cherry-dim);
        }
        .hero-photo { display: flex; justify-content: center; align-items: center; }
        .photo-frame {
          position: relative;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          padding: 6px;
          background: linear-gradient(135deg, var(--cherry-bright), #4a0d1a);
          box-shadow: 0 0 60px rgba(220, 20, 60, 0.2);
        }
        .photo-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--surface-2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          text-align: center;
          padding: 2rem;
        }
        .photo-placeholder svg { width: 64px; height: 64px; margin-bottom: 1rem; color: var(--cherry-bright); }
        .hero-stats {
          display: flex;
          gap: 3rem;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }
        .stat { display: flex; flex-direction: column; }
        .stat-value { font-size: 2rem; font-weight: 700; color: var(--text); }
        .stat-label { font-size: 0.85rem; color: var(--text-muted); }
        .section-header { margin-bottom: 4rem; }
        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: var(--cherry-bright);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
        }
        .section-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        .section-desc { color: var(--text-muted); max-width: 600px; font-size: 1.05rem; }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .about-text p { color: var(--text-muted); margin-bottom: 1.25rem; font-size: 1.05rem; }
        .about-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .info-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.5rem;
          transition: transform 0.2s, border-color 0.2s;
        }
        .info-card:hover { transform: translateY(-4px); border-color: rgba(220, 20, 60, 0.35); }
        .info-card h3 {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--cherry-bright);
          margin-bottom: 0.5rem;
        }
        .info-card p { color: var(--text-muted); font-size: 0.95rem; margin: 0; }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .skill-category {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 2rem;
        }
        .skill-category h3 {
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .skill-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--cherry-dim);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cherry-bright);
          font-size: 1rem;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .skill-tag {
          padding: 0.4rem 0.9rem;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 0.85rem;
          color: var(--text-muted);
          transition: all 0.2s;
        }
        .skill-tag:hover { border-color: var(--cherry-bright); color: var(--cherry-bright); background: var(--cherry-dim); }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 1.5rem;
        }
        .project-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          transition: transform 0.3s, border-color 0.3s;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover { transform: translateY(-6px); border-color: rgba(220, 20, 60, 0.3); }
        .project-image {
          height: 200px;
          background: linear-gradient(135deg, var(--surface-2) 0%, #1a0a0d 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .project-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(163, 22, 54, 0.08), rgba(220, 20, 60, 0.05));
        }
        .project-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 4rem;
          font-weight: 700;
          color: rgba(220, 20, 60, 0.18);
          position: relative;
          z-index: 1;
        }
        .project-content { padding: 1.75rem; flex: 1; display: flex; flex-direction: column; }
        .project-status {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--cherry-bright);
          margin-bottom: 0.75rem;
        }
        .project-status.coming-soon { color: #f0ad4e; }
        .project-status.in-progress { color: #5bc0de; }
        .project-content h3 { font-size: 1.25rem; margin-bottom: 0.75rem; }
        .project-content p { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem; flex: 1; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.25rem; }
        .project-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--cherry-bright);
          background: var(--cherry-dim);
          padding: 0.25rem 0.7rem;
          border-radius: 100px;
        }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text);
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        .project-link:hover { color: var(--cherry-bright); }
        .timeline { position: relative; padding-left: 2rem; }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--cherry-bright), transparent);
        }
        .timeline-item { position: relative; padding-bottom: 3rem; }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -2rem;
          top: 0.4rem;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--cherry-bright);
          box-shadow: 0 0 12px var(--cherry-bright);
          transform: translateX(-4px);
        }
        .timeline-item h3 { font-size: 1.15rem; margin-bottom: 0.25rem; }
        .timeline-meta {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: var(--cherry-bright);
          margin-bottom: 0.75rem;
          display: block;
        }
        .timeline-item p { color: var(--text-muted); font-size: 0.95rem; }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .contact-info p { color: var(--text-muted); margin-bottom: 2rem; font-size: 1.05rem; }
        .contact-links { display: flex; flex-direction: column; gap: 1rem; }
        .contact-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--text);
          transition: all 0.2s;
        }
        .contact-link:hover { border-color: rgba(220, 20, 60, 0.35); transform: translateX(6px); }
        .contact-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--cherry-dim);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cherry-bright);
          flex-shrink: 0;
        }
        .contact-link-text { display: flex; flex-direction: column; }
        .contact-link-label { font-size: 0.8rem; color: var(--text-muted); }
        .contact-link-value { font-weight: 600; }
        .contact-cta {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 2.5rem;
        }
        .contact-cta h3 { font-size: 1.5rem; margin-bottom: 1rem; }
        .contact-cta p { color: var(--text-muted); margin-bottom: 1.5rem; }
        .portfolio-footer {
          padding: 3rem 5%;
          border-top: 1px solid var(--border);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .portfolio-footer a { color: var(--cherry-bright); }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
          .hero-content { order: 2; }
          .hero-photo { order: 1; }
          .badge { margin-left: auto; margin-right: auto; }
          .hero-subtitle { margin-left: auto; margin-right: auto; }
          .hero-buttons { justify-content: center; }
          .hero-stats { justify-content: center; }
          .photo-frame { width: 260px; height: 260px; }
          .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
          .nav-links { display: none; }
          .mobile-menu-btn { display: block; }
        }
        @media (max-width: 600px) {
          .hero-stats { flex-direction: column; gap: 1.5rem; text-align: center; }
          .about-cards { grid-template-columns: 1fr; }
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="bg-grid" />
      <div className="bg-glow glow-1" />
      <div className="bg-glow glow-2" />

      <nav className="portfolio-nav">
        <a href="#home" className="logo">
          <span className="logo-dot" />
          Viniska K S
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="mobile-menu-btn" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot" />
              Available for internships
            </div>
            <h1>
              Viniska K S
              <br />
              <span className="gradient-text">Data Science Student</span>
            </h1>
            <p className="hero-subtitle">
              Aspiring Data Engineer designing pipelines that transform raw, disconnected information into reliable systems built for scale, clarity, and precision.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">2+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat">
                <span className="stat-value">7+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat">
                <span className="stat-value">3rd</span>
                <span className="stat-label">Year B.E. DS</span>
              </div>
            </div>
          </div>
          <div className="hero-photo">
            <div className="photo-frame">
              <div className="photo-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Your photo here<br /><small style={{ fontSize: "0.75rem", opacity: 0.7 }}>Replace src in the HTML</small></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="section-header">
          <p className="section-label">01 / About</p>
          <h2>Engineering reliability into every pipeline.</h2>
          <p className="section-desc">A disciplined approach to data: intentional design, anticipated failure points, and datasets that arrive exactly as they should.</p>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm Viniska K S, a Data Science student building toward a career in Data Engineering. My work centers on the movement and structure of data — designing pipelines that extract, transform, and load information reliably from source to destination.
            </p>
            <p>
              I have hands-on experience with Python, SQL, ETL workflows, and cloud infrastructure on AWS, developed through coursework in Database Management Systems and Computer Networks under the VTU curriculum, as well as independent projects.
            </p>
            <p>
              I approach data engineering as a discipline of reliability: every stage of the pipeline is intentional, every failure point is anticipated, and every dataset arrives exactly as it should. Precision at the infrastructure level is what makes insight possible at the surface.
            </p>
          </div>
          <div className="about-cards">
            <div className="info-card">
              <h3>Education</h3>
              <p>3rd Year B.E. Data Science, VTU curriculum</p>
            </div>
            <div className="info-card">
              <h3>Focus</h3>
              <p>Data pipelines, ETL, cloud data warehouses</p>
            </div>
            <div className="info-card">
              <h3>Cloud</h3>
              <p>AWS (S3, IAM, EC2, RDS, Glue, Athena)</p>
            </div>
            <div className="info-card">
              <h3>Status</h3>
              <p>Seeking internships & entry-level roles</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="section-header">
          <p className="section-label">02 / Skills</p>
          <h2>Toolkit for moving and shaping data.</h2>
          <p className="section-desc">Built through academic coursework, independent projects, and continuous hands-on practice — with a growing specialization in Data Engineering.</p>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h3><span className="skill-icon">&lt;/&gt;</span>Languages & Fundamentals</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Dimensional Modeling</span>
              <span className="skill-tag">Star Schema</span>
              <span className="skill-tag">Snowflake Schema</span>
              <span className="skill-tag">ER Diagrams</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><span className="skill-icon">♻</span>Ingestion & Processing</h3>
            <div className="skill-tags">
              <span className="skill-tag">Apache Spark</span>
              <span className="skill-tag">Apache Kafka</span>
              <span className="skill-tag">Apache Airflow</span>
              <span className="skill-tag">Prefect</span>
              <span className="skill-tag">Dagster</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><span className="skill-icon">★</span>Storage & Warehousing</h3>
            <div className="skill-tags">
              <span className="skill-tag">Snowflake</span>
              <span className="skill-tag">Google BigQuery</span>
              <span className="skill-tag">Amazon Redshift</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><span className="skill-icon">✓</span>Transformation & Quality</h3>
            <div className="skill-tags">
              <span className="skill-tag">dbt</span>
              <span className="skill-tag">Great Expectations</span>
              <span className="skill-tag">Soda</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><span className="skill-icon">☁</span>Cloud & Infrastructure</h3>
            <div className="skill-tags">
              <span className="skill-tag">AWS S3</span>
              <span className="skill-tag">AWS IAM</span>
              <span className="skill-tag">AWS EC2</span>
              <span className="skill-tag">AWS RDS</span>
              <span className="skill-tag">AWS Glue</span>
              <span className="skill-tag">AWS Athena</span>
              <span className="skill-tag">GCP Cloud Storage</span>
              <span className="skill-tag">GCP BigQuery</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">GitHub Actions</span>
              <span className="skill-tag">Terraform</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><span className="skill-icon">↻</span>DevOps & Workflow</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">GitHub Actions</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="section-header">
          <p className="section-label">03 / Projects</p>
          <h2>Systems built from source to insight.</h2>
          <p className="section-desc">A selection of data pipelines and tools built to automate ingestion, ensure quality, and surface analytics with minimal manual intervention.</p>
        </div>
        <div className="projects-grid">
          <article className="project-card">
            <div className="project-image">
              <span className="project-number">01</span>
            </div>
            <div className="project-content">
              <span className="project-status"><span className="badge-dot" />Live</span>
              <h3>TransitFlow ETL</h3>
              <p>A fully automated ETL pipeline that extracts live urban traffic telemetry on a schedule, transforms it, and loads it into a cloud data warehouse — surfaced through a real-time analytics dashboard with zero manual intervention.</p>
              <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">ETL</span>
                <span className="project-tag">Streamlit</span>
                <span className="project-tag">Cloud DWH</span>
              </div>
              <a href="https://traffic-etl-pipeline-viniska13.streamlit.app/" target="_blank" rel="noopener" className="project-link">
                View Live
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          </article>
          <article className="project-card">
            <div className="project-image">
              <span className="project-number">02</span>
            </div>
            <div className="project-content">
              <span className="project-status coming-soon"><span className="badge-dot" />Coming Soon</span>
              <h3>Glint Guard</h3>
              <p>A real-time privacy defense tool that identifies concealed camera lenses and scans surrounding WiFi/Bluetooth signals to detect wearable recording devices — built to make invisible surveillance visible.</p>
              <div className="project-tags">
                <span className="project-tag">Computer Vision</span>
                <span className="project-tag">IoT</span>
                <span className="project-tag">Privacy</span>
              </div>
              <span className="project-link" style={{ color: "var(--text-muted)", cursor: "default" }}>Coming Soon</span>
            </div>
          </article>
          <article className="project-card">
            <div className="project-image">
              <span className="project-number">03</span>
            </div>
            <div className="project-content">
              <span className="project-status in-progress"><span className="badge-dot" />In Progress</span>
              <h3>Serverless Data Lake</h3>
              <p>A serverless data lake architecture on AWS — raw files land in S3, get automatically catalogued by Glue, and become instantly queryable in plain SQL through Athena. No database provisioning, no manual schema mapping.</p>
              <div className="project-tags">
                <span className="project-tag">AWS S3</span>
                <span className="project-tag">AWS Glue</span>
                <span className="project-tag">AWS Athena</span>
                <span className="project-tag">Serverless</span>
              </div>
              <span className="project-link" style={{ color: "var(--text-muted)", cursor: "default" }}>Building Now</span>
            </div>
          </article>
        </div>
      </section>

      <section id="experience">
        <div className="section-header">
          <p className="section-label">04 / Experience</p>
          <h2>Path into data engineering.</h2>
          <p className="section-desc">Academic foundation, hands-on projects, and continuous learning toward production-ready data systems.</p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <h3>B.E. in Data Science</h3>
            <span className="timeline-meta">2022 — Present</span>
            <p>3rd year undergraduate under VTU curriculum. Coursework includes Database Management Systems, Computer Networks, and data-focused programming.</p>
          </div>
          <div className="timeline-item">
            <h3>Independent Data Engineering Projects</h3>
            <span className="timeline-meta">2024 — Present</span>
            <p>Designed and deployed ETL pipelines, cloud data warehouses, and real-time dashboards using Python, SQL, AWS, Spark, Kafka, Airflow, and dbt.</p>
          </div>
          <div className="timeline-item">
            <h3>Certifications & Continuous Learning</h3>
            <span className="timeline-meta">Ongoing</span>
            <p>7+ certifications completed in data engineering, cloud, and analytics tooling. Always expanding the toolkit through hands-on practice.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="section-header">
          <p className="section-label">05 / Contact</p>
          <h2>Let's build something reliable together.</h2>
          <p className="section-desc">I'm currently seeking internship and entry-level opportunities in Data Engineering. Open to connections with recruiters and professionals in the data space.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <p>Whether you have an opportunity, a collaboration idea, or just want to talk data pipelines — I'd love to hear from you.</p>
            <div className="contact-links">
              <a href="mailto:viniss.engg@gmail.com" className="contact-link">
                <span className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span className="contact-link-text">
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">viniss.engg@gmail.com</span>
                </span>
              </a>
              <a href="https://www.linkedin.com/in/viniska-k-s-856627389" target="_blank" rel="noopener" className="contact-link">
                <span className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <span className="contact-link-text">
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">Viniska K S</span>
                </span>
              </a>
              <a href="https://github.com/viniska13/" target="_blank" rel="noopener" className="contact-link">
                <span className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </span>
                <span className="contact-link-text">
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-value">@viniska13</span>
                </span>
              </a>
            </div>
          </div>
          <div className="contact-cta">
            <h3>Want to connect?</h3>
            <p>Drop me an email or reach out on LinkedIn. I'm actively looking for internship and entry-level Data Engineering roles.</p>
            <a href="mailto:viniss.engg@gmail.com" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Send Email
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <p>Built with precision by <a href="https://github.com/viniska13/" target="_blank" rel="noopener">Viniska K S</a>. Deploy on GitHub Pages.</p>
      </footer>
    </div>
  );
}
