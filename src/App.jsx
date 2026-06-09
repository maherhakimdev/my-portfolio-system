import { useState, useEffect } from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #0a0a0a;
    color: #f0ede8;
    min-height: 100vh;
  }

  .portfolio {
    min-height: 100vh;
    background: #0a0a0a;
  }

  /* NAV */
  .nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 48px;
    background: rgba(10,10,10,0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 1.4rem;
    color: #f0ede8;
    letter-spacing: -0.02em;
  }

  .nav-links {
    display: flex;
    gap: 4px;
  }

  .nav-btn {
    background: none;
    border: none;
    color: rgba(240,237,232,0.5);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 100px;
    transition: all 0.2s ease;
  }

  .nav-btn:hover {
    color: #f0ede8;
    background: rgba(255,255,255,0.07);
  }

  .nav-btn.active {
    color: #f0ede8;
    background: rgba(255,255,255,0.1);
  }

  /* SECTIONS */
  .section {
    min-height: 100vh;
    padding: 120px 48px 80px;
    max-width: 1200px;
    margin: 0 auto;
    animation: fadeUp 0.5s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* HOME */
  .home-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    min-height: calc(100vh - 200px);
  }

  .home-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #c9a96e;
    margin-bottom: 28px;
  }

  .home-eyebrow::before {
    content: '';
    display: block;
    width: 24px; height: 1px;
    background: #c9a96e;
  }

  .home-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(3rem, 5vw, 4.5rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: #f0ede8;
    margin-bottom: 24px;
  }

  .home-title em {
    font-style: italic;
    color: #c9a96e;
  }

  .home-desc {
    font-size: 1.05rem;
    line-height: 1.75;
    color: rgba(240,237,232,0.55);
    max-width: 440px;
    margin-bottom: 40px;
  }

  .btn-group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #f0ede8;
    color: #0a0a0a;
    border: none;
    padding: 14px 28px;
    border-radius: 100px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
  }

  .btn-primary:hover {
    background: #c9a96e;
    transform: translateY(-2px);
  }

  .btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: #f0ede8;
    border: 1px solid rgba(240,237,232,0.2);
    padding: 14px 28px;
    border-radius: 100px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
  }

  .btn-outline:hover {
    border-color: rgba(240,237,232,0.5);
    background: rgba(240,237,232,0.05);
    transform: translateY(-2px);
  }

  .home-image-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home-image-frame {
    position: relative;
    width: 380px;
    height: 460px;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.08);
  }

  .home-image-frame img {
    width: 100%; height: 100%;
    object-fit: cover;
  }

  .home-image-frame::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.6) 100%);
  }

  .home-image-deco {
    position: absolute;
    top: -24px; right: -24px;
    width: 160px; height: 160px;
    border: 1px solid rgba(201,169,110,0.3);
    border-radius: 20px;
    z-index: -1;
  }

  /* STATUS BADGE */
  .status-badge {
    position: absolute;
    bottom: 24px; left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    background: rgba(10,10,10,0.85);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 100px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    color: rgba(240,237,232,0.8);
    white-space: nowrap;
  }

  .status-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 8px #4ade80;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  /* PROFILE */
  .profile-header {
    display: flex;
    align-items: flex-end;
    gap: 40px;
    margin-bottom: 45px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .profile-avatar {
    width: 110px; height: 110px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(201,169,110,0.5);
    flex-shrink: 0;
  }

  .profile-avatar-placeholder {
    width: 110px; height: 110px;
    border-radius: 50%;
    background: rgba(201,169,110,0.15);
    border: 2px solid rgba(201,169,110,0.3);
    display: flex; align-items: center; justify-content: center;
    font-family: 'DM Serif Display', serif;
    font-size: 2rem;
    color: #c9a96e;
    flex-shrink: 0;
  }

  .profile-avatar-placeholder img {
    width: 100%; height: 100%;
    border-radius: 50%;
    object-fit: cover;  
  }

  .profile-header-text h1 {
    font-family: 'DM Serif Display', serif;
    font-size: 3rem;
    letter-spacing: -0.02em;
    color: #f0ede8;
    margin-bottom: 6px;
  }

  .profile-header-text p {
    font-size: 0.9rem;
    color: #c9a96e;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
  }

  .profile-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .profile-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 28px;
    transition: border-color 0.2s;
  }

  .profile-card:hover {
    border-color: rgba(201,169,110,0.25);
  }

  .profile-card-label {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #c9a96e;
    margin-bottom: 12px;
  }

  .profile-card h3 {
    font-family: 'DM Serif Display', serif;
    font-size: 1.25rem;
    color: #f0ede8;
    margin-bottom: 10px;
  }

  .profile-card p {
    font-size: 0.95rem;
    line-height: 1.75;
    color: rgba(240,237,232,0.55);
  }

  .profile-card.span-2 {
    grid-column: span 2;
  }

  /* PROJECTS */
  .projects-header {
    margin-bottom: 56px;
  }

  .projects-header h1 {
    font-family: 'DM Serif Display', serif;
    font-size: 3.5rem;
    letter-spacing: -0.02em;
    color: #f0ede8;
    margin-bottom: 15px;
  }

  .projects-header p {
    font-size: 1rem;
    color: rgba(240,237,232,0.45);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .project-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 28px;
    transition: all 0.25s ease;
    cursor: default;
  }

  .project-card:hover {
    border-color: rgba(201,169,110,0.35);
    background: rgba(201,169,110,0.04);
    transform: translateY(-4px);
  }

  .project-number {
    font-size: 0.7rem;
    color: rgba(240,237,232,0.25);
    letter-spacing: 0.1em;
    margin-bottom: 40px;
    font-weight: 500;
  }

  .project-card h3 {
    font-family: 'DM Serif Display', serif;
    font-size: 1.35rem;
    color: #f0ede8;
    margin-bottom: 10px;
  }

  .project-card p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: rgba(240,237,232,0.45);
    margin-bottom: 24px;
  }

  .tag {
    display: inline-block;
    font-size: 0.72rem;
    padding: 4px 10px;
    border-radius: 100px;
    background: rgba(201,169,110,0.1);
    color: #c9a96e;
    border: 1px solid rgba(201,169,110,0.2);
    margin: 3px 3px 0 0;
  }

  .coming-soon-overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    color: rgba(240,237,232,0.2);
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    gap: 12px;
    border: 1px dashed rgba(255,255,255,0.08);
    border-radius: 16px;
  }

  /* CONTACT */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 48px;
    align-items: start;
  }

  .contact-info h1 {
    font-family: 'DM Serif Display', serif;
    font-size: 3rem;
    letter-spacing: -0.02em;
    color: #f0ede8;
    line-height: 1.1;
    margin-bottom: 20px;
  }

  .contact-info h1 em {
    font-style: italic;
    color: #c9a96e;
  }

  .contact-info p {
    font-size: 0.95rem;
    line-height: 1.75;
    color: rgba(240,237,232,0.5);
    margin-bottom: 40px;
  }

  .contact-detail {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 20px;
  }

  .contact-detail-icon {
    width: 40px; height: 40px;
    border-radius: 10px;
    background: rgba(201,169,110,0.1);
    border: 1px solid rgba(201,169,110,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  .contact-detail-text label {
    display: block;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(240,237,232,0.35);
    margin-bottom: 2px;
  }

  .contact-detail-text span {
    font-size: 0.95rem;
    color: rgba(240,237,232,0.8);
  }

  .social-row {
    display: flex;
    gap: 10px;
    margin-top: 36px;
  }

  /* FORM */
  .form-wrap {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 400px;
  }

  .form-wrap h2 {
    font-family: 'DM Serif Display', serif;
    font-size: 1.6rem;
    color: #f0ede8;
    margin-bottom: 28px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(240,237,232,0.4);
    margin-bottom: 8px;
  }

  .form-input {
    width: 100%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 13px 16px;
    color: #f0ede8;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s;
  }

  .form-input::placeholder { color: rgba(240,237,232,0.2); }

  .form-input:focus {
    border-color: rgba(201,169,110,0.5);
    background: rgba(201,169,110,0.04);
  }

  textarea.form-input {
    resize: vertical;
    min-height: 120px;
    line-height: 1.6;
  }

  .btn-submit {
    width: 100%;
    background: #c9a96e;
    color: #0a0a0a;
    border: none;
    padding: 15px;
    border-radius: 100px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    margin-top: 8px;
    transition: all 0.2s ease;
    letter-spacing: 0.02em;
  }

  .btn-submit:hover {
    background: #d4b87a;
    transform: translateY(-2px);
  }

  .btn-submit:active { transform: translateY(0); }

  .divider {
    width: 40px; height: 2px;
    background: #c9a96e;
    margin-bottom: 20px;
    border-radius: 1px;
  }
`;

export default function App() {
  const [currentSection, setCurrentSection] = useState('main');

  const name = "Maher Hakim";
  const email = "maherhakim2003@gmail.com";
  const bio = "Fresh Graduate in Software Engineering student in Universiti Malaysia Terengganu with a passion for building clean, thoughtful web experiences. I care about the details by delivering high-quality solutions.";

  const navItems = [
    { key: 'main', label: 'Home' },
    { key: 'profile', label: 'Profile' },
    { key: 'project', label: 'Projects' },
    { key: 'contact', label: 'Contact' },
  ];

  const renderSection = () => {
    switch (currentSection) {

      case 'main':
        return (
          <div className="section">
            <div className="home-grid">
              <div>
                <div className="home-eyebrow">Hi, I am Maher Hakim</div>
                <h1 className="home-title">
                  Software<br /><em>Developer</em>
                </h1>
                <p className="home-desc">
                  Building digital products with intention — clean code, thoughtful design, and a focus on what actually matters.
                </p>
                <div className="btn-group">
                  <a href="https://github.com/maherhakimdev" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    GitHub 
                  </a>
                  <a href="https://www.linkedin.com/in/maherhakimm" target="_blank" rel="noopener noreferrer" className="btn-outline">
                    LinkedIn 
                  </a>
                </div>
              </div>
              <div className="home-image-wrap">
                <div className="home-image-deco" />
                <div className="home-image-frame">
                  <img src="computer_image.jpg" alt="Portfolio" />
                  <div className="status-badge">
                    <span className="status-dot" />
                    Open to opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="section">
            <div className="profile-header">
              <div className="profile-avatar-placeholder">
                <img src="profile_maher.jpg" alt="MH" />
              </div>
              <div className="profile-header-text">
                <h1>{name}</h1>
                <p>Software Developer</p>
              </div>
            </div>
            <div className="profile-grid">
              <div className="profile-card span-2">
                <div className="profile-card-label">About</div>
                <p>{bio}</p>
              </div>
              <div className="profile-card">
                <div className="profile-card-label">Contact</div>
                <h3>Get in touch</h3>
                <p>{email}</p>
              </div>
              <div className="profile-card">
                <div className="profile-card-label">Location</div>
                <h3>Kinrara, Puchong</h3>
                <p>Selangor, Malaysia</p>
              </div>
              <div className="profile-card">
                <div className="profile-card-label">Focus</div>
                <h3>Full Stack Development</h3>
                <p>Frontend &amp; backend development with an eye for database design.</p>
              </div>
              <div className="profile-card">
                <div className="profile-card-label">Status</div>
                <h3>Fresh Graduate</h3>
                <p>Junior software Developer — seeking for jobs.</p>
              </div>
            </div>
          </div>
        );

      case 'project':
        return (
          <div className="section">
            <div className="projects-header">
              <div className="divider" />
              <h1>Selected Work</h1>
              <p>Projects I've contributed to.</p>
            </div>
            <div className="projects-grid">
              {[
                { n: '01', title: 'IICMS System', desc: 'Web based system to manage national chemical storage and inventory, maintenance by fixing bugs and improving UI design.', tags: ['Java', 'Git', 'MySQL'] },
                { n: '02', title: 'MSP System', desc: 'Web based system for e-commerce platform for malaysian university students voucher RM100 under KPT.', tags: ['Java', 'JavaScript','PostgreSQL'] },
                { n: '03', title: 'ADRS System', desc: 'Web based system for managing the reporting of project\'s community aquaculture activities.', tags: ['PHP', 'Figma', 'MySQL'] },
                { n: '04', title: 'Will Be Announced', desc: 'Stay tuned for more information.', tags: [] },
                { n: '05', title: 'Coming Soon', desc: 'We"ll be right back.', tags: [] },
              ].map(p => (
                <div className="project-card" key={p.n}>
                  <div className="project-number">{p.n}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div>{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="section">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="divider" />
                <h1>Let's<br /><em>connect.</em></h1>
                <p>I'm open to collaborations, opportunities, and interesting conversations. Don't hesitate to reach out.</p>
                <div className="contact-detail">
                  <div className="contact-detail-icon">✉</div>
                  <div className="contact-detail-text">
                    <label>Email</label>
                    <span>{email}</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  <div className="contact-detail-text">
                    <label>Location</label>
                    <span>Kinrara, Puchong, Malaysia</span>
                  </div>
                </div>
                <div className="social-row">
                  <a href="https://github.com/maherhakimdev" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{fontSize:'0.82rem', padding:'10px 20px'}}>GitHub</a>
                  <a href="https://www.linkedin.com/in/maherhakimm" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{fontSize:'0.82rem', padding:'10px 20px'}}>LinkedIn</a>
                </div>
              </div>
              <div className="form-wrap">
                <h2>Any Inquiries?</h2>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '24px',
                  padding: '12px 16px',
                  background: 'rgba(37, 211, 102, 0.1)',
                  border: '1px solid rgba(37, 211, 102, 0.2)',
                  borderRadius: '10px',
                  color: 'rgba(240,237,232,0.5)'
                }}>
                  <img src="whatsapp_icon.svg" alt="WhatsApp" style={{ width: '20px', height: '20px', display: 'block' }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '500', marginBottom: '2px' }}>Please Contact Me on WhatsApp...</div>
                    <a 
                      href="https://wa.me/60173430615" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        color: '#25d366', 
                        textDecoration: 'none', 
                        fontSize: '0.9rem',
                        fontWeight: '400'
                      }}
                    >
                      Click Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default: return null;
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="portfolio">
        <nav className="nav">
          <div className="nav-logo">maher hakim</div>
          <div className="nav-links">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                className={`nav-btn ${currentSection === key ? 'active' : ''}`}
                onClick={() => setCurrentSection(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>
        {renderSection()}
      </div>
    </>
  );
}
