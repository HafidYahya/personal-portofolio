import { useEffect, useState } from "react";
import profilePhoto from "./assets/profil-hafid-yahya.webp";
import internshipPhoto from "./assets/foto-magang-alfamart.jpeg";
import badmintonRentalThumbnail from "./assets/thumbnail-badminton-rental.webp";
import moneyLensThumbnail from "./assets/thumbnail-moneylens.webp";
import bangkitAcademyLogo from "./assets/bangkit-academy-logo.jpeg";
import bnspLogo from "./assets/logo-bnsp.png";
import universitasPamulangLogo from "./assets/logo-universitas-pamulang.webp";

const sections = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "experience", label: "Pengalaman" },
  { id: "projects", label: "Proyek" },
  { id: "skills", label: "Keahlian" },
  { id: "education", label: "Pendidikan" },
];

const projects = [
  {
    number: "01",
    title: "Badminton Rental",
    category: "WEB APP · PROJECT PORTOFOLIO",
    description:
      "Booking lapangan jadi lebih gampang. Ada panel admin untuk mengatur lapangan, jadwal, pelanggan, dan pemesanan—plus validasi ketersediaan otomatis.",
    stack: ["Laravel", "PostgreSQL", "JavaScript", "Bootstrap"],
    visual: "court",
    visualLabel: "COURT BOOKING SYSTEM",
    thumbnail: badmintonRentalThumbnail,
    thumbnailAlt: "Tampilan panel admin Badminton Rental dengan ilustrasi shuttlecock",
    githubUrl: "https://github.com/HafidYahya/badminton-rental",
  },
  {
    number: "02",
    title: "MoneyLens",
    category: "ANDROID · TUGAS AKHIR",
    description:
      "Aplikasi yang membantu teman tunanetra mengenali nominal Rupiah lewat kamera dan suara. Model klasifikasinya berjalan langsung di perangkat, jadi tetap bisa dipakai offline.",
    stack: ["Kotlin", "CameraX", "TensorFlow Lite", "Text-to-Speech"],
    visual: "money",
    visualLabel: "RUPIAH, DENGAN SUARA",
    thumbnail: moneyLensThumbnail,
    thumbnailAlt:
      "Poster aplikasi pengenal uang Rupiah untuk tunanetra berbasis kamera smartphone",
    demoUrl: "https://www.instagram.com/infoti_unpam/reel/Dbw90JvP-Zb/",
    githubUrl: "https://github.com/HafidYahya/MoneyLens",
  },
];

const skillGroups = [
  {
    label: "Bahasa",
    skills: ["JavaScript", "PHP", "Kotlin", "HTML", "CSS"],
  },
  {
    label: "Framework & UI",
    skills: ["React", "Laravel", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Data & integrasi",
    skills: ["MySQL", "PostgreSQL", "RESTful API"],
  },
  {
    label: "Workflow",
    skills: ["Git", "GitHub", "Figma", "Draw.io", "Looker Studio"],
  },
];

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function SocialIcon({ name }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      {name === "linkedin" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M7.5 10v6.5M7.5 7.5v.1M11 16.5v-3.2a2.2 2.2 0 0 1 4.4 0v3.2M11 10v6.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.7"
          />
        </>
      )}
      {name === "github" && (
        <path
          d="M12 2.8a9.2 9.2 0 0 0-2.9 18c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.8 9.8 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 4.9.4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5a9.2 9.2 0 0 0-3.7-18Z"
          fill="currentColor"
        />
      )}
      {name === "email" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="m4 7 8 6 8-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </>
      )}
      {name === "instagram" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17.5" cy="6.8" r="1" fill="currentColor" />
        </>
      )}
      {name === "whatsapp" && (
        <>
          <path
            d="M5 19.5 6.2 16.4A8.5 8.5 0 1 1 9 19l-4 1.2Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
          <path
            d="M9 8.4c.2-.4.4-.5.7-.5h.5l.8 1.8-.8 1c.5 1 1.4 1.8 2.5 2.3l.8-.8 1.8.8v.5c0 .4-.2.7-.6.8-1 .4-3-.4-4.4-1.8s-2.1-3.2-1.7-4.1Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </>
      )}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, accent }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {title} <span>{accent}</span>
      </h2>
    </div>
  );
}

function DotTimeline({ activeSection }) {
  // Give each section a keyboard-accessible link without adding a traditional navbar.
  return (
    <nav className="dot-timeline" aria-label="Navigasi bagian halaman">
      <span className="timeline-caption">NAVIGASI</span>
      <div className="timeline-dots">
        {sections.map((section, index) => (
          <a
            className={`timeline-link ${activeSection === section.id ? "is-active" : ""}`}
            href={`#${section.id}`}
            aria-label={`Ke bagian ${section.label}`}
            aria-current={activeSection === section.id ? "location" : undefined}
            key={section.id}
          >
            <span className="timeline-tooltip">{section.label}</span>
            <span className="timeline-dot">{String(index + 1).padStart(2, "0")}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

function ProjectCard({ project }) {
  // Keep project details data-driven so new work can be added without duplicating markup.
  return (
    <article className="project-card">
      <div
        className={`project-visual ${project.visual}${project.thumbnail ? " has-thumbnail" : ""}`}
      >
        <span className="visual-orbit orbit-one" />
        <span className="visual-orbit orbit-two" />
        <span className="visual-label">{project.visualLabel}</span>
        <span className="visual-number">{project.number}</span>
        {project.thumbnail ? (
          <img
            className="project-thumbnail"
            src={project.thumbnail}
            alt={project.thumbnailAlt}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="court-mark" aria-hidden="true">
            <span />
          </div>
        )}
      </div>
      <div className="project-content">
        <span className="eyebrow">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`Teknologi ${project.title}`}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {(project.demoUrl || project.githubUrl) && (
          <div className="project-actions">
            {project.demoUrl && (
              <a
                className="project-demo-link"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lihat demo ${project.title} di Instagram (dibuka di tab baru)`}
              >
                <SocialIcon name="instagram" />
                Lihat demo <ArrowIcon diagonal />
              </a>
            )}
            {project.githubUrl && (
              <a
                className="project-demo-link project-repo-link"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buka repositori GitHub ${project.title} (dibuka di tab baru)`}
              >
                <SocialIcon name="github" />
                GitHub <ArrowIcon diagonal />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

// Assemble the portfolio and track the visible section for the dot timeline.
function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Keep the side timeline in sync with the section currently in view.
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);
        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0, 0.15, 0.4, 0.7] },
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Langsung ke konten
      </a>
      <DotTimeline activeSection={activeSection} />
      <main id="main-content">
        <section className="hero-section page-section" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              <span>WEB · MOBILE · PRODUCT THINKING</span>
            </div>
            <p className="hero-intro">Merangkai ide jadi produk digital.</p>
            <h1>
              Hafid <span>Yahya</span>
            </h1>
            <p className="hero-description">
              Web &amp; mobile developer yang senang bikin teknologi terasa lebih
              dekat, berguna, dan mudah dipakai. Dari baris kode pertama sampai
              fitur siap digunakan.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:hapidyahya01@gmail.com">
                Ngobrol yuk <ArrowIcon diagonal />
              </a>
              <a className="text-link" href="#projects">
                Lihat karya <ArrowIcon />
              </a>
            </div>
            <div className="hero-meta">
              <span>BOGOR, INDONESIA</span>
              <span className="meta-divider" />
              <span>WEB &amp; MOBILE DEVELOPER</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Kartu profil Hafid Yahya">
            <div className="art-glow" />
            <div className="art-index">PORTFOLIO / 2026</div>
            <div className="profile-card">
              <div className="profile-card-top">
                <span>HY — DIGITAL BUILDER</span>
                <span className="card-spark">✳</span>
              </div>
              <img
                className="profile-photo"
                src={profilePhoto}
                alt="Hafid Yahya mengenakan setelan hitam"
                width="726"
                height="929"
                loading="eager"
              />
              <div className="profile-card-bottom">
                <div>
                  <strong>Hafid Yahya</strong>
                  <span>Building with intention.</span>
                </div>
                <span className="card-arrow">
                  <ArrowIcon diagonal />
                </span>
              </div>
            </div>
            <div className="floating-note note-top">
              <span className="note-symbol">&lt;/&gt;</span>
              <span>Curious by nature</span>
            </div>
            <div className="floating-note note-bottom">
              <span className="note-status" />
              <span>Code with purpose</span>
            </div>
            <div className="art-coordinate">06°35&apos; S&nbsp; 106°49&apos; E</div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>SCROLL UNTUK KENALAN</span>
            <span className="scroll-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4v15m-6-6 6 6 6-6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
              </svg>
            </span>
          </a>
        </section>

        <section className="about-section page-section content-section" id="about">
          <SectionHeading eyebrow="01 / SEDIKIT TENTANG SAYA" title="Suka bikin hal" accent="jadi nyata." />
          <div className="about-grid">
            <p className="about-lead">
              Saya lulusan Teknik Informatika yang menikmati proses mengubah
              kebutuhan nyata menjadi solusi digital yang enak dipakai.
            </p>
            <div className="about-detail">
              <p>
                Pernah mengembangkan aplikasi web dan Android, menghubungkan API
                dengan database, sampai menguji fitur sebelum digunakan. Saat
                magang di Alfamart, saya juga belajar melihat produk dari sisi
                yang lebih luas: mendengar kebutuhan pengguna, merapikannya jadi
                requirement, lalu mengawal prosesnya bareng tim.
              </p>
              <p>
                Buat saya, kode yang bagus bukan cuma jalan—tapi juga menjawab
                masalah dengan cara yang sederhana.
              </p>
              <a
                className="inline-link"
                href="https://www.linkedin.com/in/hafid-yahya"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon name="linkedin" />
                Kenalan di LinkedIn <ArrowIcon diagonal />
              </a>
            </div>
          </div>
          <div className="stat-row">
            <div className="stat-item">
              <strong>3.71<span>/4.00</span></strong>
              <span>IPK Teknik Informatika</span>
            </div>
            <div className="stat-item">
              <strong>15<span>+</span></strong>
              <span>BRD lintas departemen</span>
            </div>
            <div className="stat-item">
              <strong>2</strong>
              <span>Proyek dari web sampai mobile</span>
            </div>
          </div>
        </section>

        <section className="experience-section page-section content-section" id="experience">
          <SectionHeading eyebrow="02 / PERJALANAN" title="Belajar sambil" accent="berkontribusi." />
          <div className="experience-entry">
            <div className="experience-date">
              <span>OKT 2025 — APR 2026</span>
              <span className="experience-marker" />
            </div>
            <div className="experience-body">
              <div className="experience-title-row">
                <div>
                  <span className="eyebrow">PENGALAMAN MAGANG</span>
                  <h3>Human Capital System Analyst Intern</h3>
                  <p className="company-name">PT Sumber Alfaria Trijaya, Tbk · Tangerang</p>
                </div>
                <span className="experience-index">01</span>
              </div>
              <div className="experience-details-grid">
                <ul className="experience-list">
                  <li>
                    Terlibat dari awal sampai akhir siklus pengembangan sistem
                    internal: analisis kebutuhan, rancangan solusi, UAT, hingga
                    pemantauan progres bareng tim developer.
                  </li>
                  <li>
                    Menyusun 15+ BRD lintas departemen, lengkap dengan flowchart
                    proses bisnis dan mockup sebagai pegangan tim.
                  </li>
                  <li>
                    Menggali kebutuhan eRecruitment bersama pengguna dan
                    menerjemahkannya menjadi empat BRD; dua di antaranya lanjut
                    ke tahap development selama masa magang.
                  </li>
                </ul>
                <figure className="experience-photo">
                  <img
                    src={internshipPhoto}
                    alt="Hafid berfoto di kantor Alfamart saat menjalani magang"
                    width="720"
                    height="1280"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section page-section content-section" id="projects">
          <SectionHeading eyebrow="03 / YANG SAYA BANGUN" title="Proyek dengan" accent="tujuan." />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.number} />
            ))}
          </div>
        </section>

        <section className="skills-section page-section content-section" id="skills">
          <SectionHeading eyebrow="04 / TOOLKIT" title="Senjata sehari-hari" accent="saya." />
          <p className="skills-intro">
            Teknologi yang saya gunakan untuk membawa ide dari rancangan ke
            pengalaman yang benar-benar bisa dipakai.
          </p>
          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <div className="skill-group" key={group.label}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.label}</h3>
                <ul className="tag-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="education-section page-section content-section" id="education">
          <SectionHeading eyebrow="05 / BEKAL PERJALANAN" title="Terus tumbuh," accent="terus belajar." />
          <div className="education-grid">
            <article className="education-card">
              <div className="education-card-top">
                <span className="eyebrow">PENDIDIKAN · 2022—2026</span>
                <span className="education-logo-frame">
                  <img src={universitasPamulangLogo} alt="Logo Universitas Pamulang" />
                </span>
              </div>
              <h3>S1 Teknik Informatika</h3>
              <p>Universitas Pamulang · Tangerang Selatan</p>
              <span className="education-highlight">IPK 3,71 / 4,00</span>
            </article>
            <article className="education-card">
              <div className="education-card-top">
                <span className="eyebrow">SERTIFIKASI · 2025—2028</span>
                <span className="education-logo-frame">
                  <img src={bnspLogo} alt="Logo Badan Nasional Sertifikasi Profesi" />
                </span>
              </div>
              <h3>Sertifikat Kompetensi Programmer</h3>
              <p>Badan Nasional Sertifikasi Profesi (BNSP)</p>
              <span className="education-highlight">Kompetensi terverifikasi</span>
            </article>
            <article className="education-card">
              <div className="education-card-top">
                <span className="eyebrow">PELATIHAN · 2024</span>
                <span className="education-logo-frame">
                  <img src={bangkitAcademyLogo} alt="Logo Bangkit Academy" />
                </span>
              </div>
              <h3>Bangkit Academy</h3>
              <p>Android Learning Path · Google, GoTo, Tokopedia &amp; Traveloka</p>
              <span className="education-highlight">Belajar &amp; bangun bareng tim</span>
            </article>
          </div>
        </section>

        <footer className="footer-section">
          <div className="footer-topline">
            <span>ADA IDE YANG MAU DIWUJUDKAN?</span>
            <span>HY — 2026</span>
          </div>
          <h2>
            Mari bikin sesuatu
            <br />
            yang <span>berarti.</span>
          </h2>
          <a className="button button-primary footer-cta" href="mailto:hapidyahya01@gmail.com">
            Hubungi saya <ArrowIcon diagonal />
          </a>
          <div className="footer-bottom">
            <nav className="footer-socials" aria-label="Kontak dan media sosial">
              <a href="mailto:hapidyahya01@gmail.com">
                <SocialIcon name="email" />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/hafid-yahya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon name="linkedin" />
                LinkedIn <ArrowIcon diagonal />
              </a>
              <a
                href="https://github.com/HafidYahya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon name="github" />
                GitHub <ArrowIcon diagonal />
              </a>
              <a
                href="https://wa.me/6282117611676"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon name="whatsapp" />
                WhatsApp <ArrowIcon diagonal />
              </a>
            </nav>
            <span>DIBUAT DENGAN RASA INGIN TAHU.</span>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
