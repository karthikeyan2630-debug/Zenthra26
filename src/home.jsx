import { useState } from "react";
import { Link } from "react-router-dom";
import Timeline from "./Timeline";
import Icon from "./components/Icon";

const GOOGLE_FORM_LINK = "https://forms.gle/p9mTx7d22hEvAhSp8";
const LOGO = "/WhatsApp_Image_2025-09-12_at_18.22.28_4ebc8d65-removebg-preview.png";

const eventDetails = [
  { icon: "calendar", title: "Date", value: "14 October 2026" },
  { icon: "calendar", title: "Full Paper Submission Deadline", value: "11 October 2026" },
  { icon: "clock", title: "Time", value: "09:00 AM - 04:00 PM" },
  { icon: "mapPin", title: "Venue", value: "College Mini Auditorium" },
  { icon: "wallet", title: "Registration Fee", value: "₹ 300" },
  { icon: "check", title: "Spot Registration", value: "Available at Venue" },
];

const highlights = [
  { icon: "lightbulb", title: "Innovation", description: "Bring your ideas, creativity and technical skills to solve exciting challenges." },
  { icon: "trophy", title: "Prizes", description: "Compete with talented students and win exciting prizes and recognition." },
  { icon: "users", title: "Networking", description: "Meet students, developers and passionate innovators from different backgrounds." },
  { icon: "rocket", title: "Experience", description: "Learn, collaborate and gain practical experience through an engaging event." },
];

const staffCoordinators = [
  { name: "Dr. Arulmozhi. P", role: "AP / IT", phone: "8190809453", displayPhone: "+91 81908 09453" },
  { name: "Ms. Lalithavani. K", role: "AP / IT", phone: "7502682662", displayPhone: "+91 75026 82662" },
  { name: "Mrs. Jayapratha. S", role: "AP / CSE", phone: "9943200919", displayPhone: "+91 99432 00919" },
  { name: "Mrs. Deepika. B", role: "AP / CSE", phone: "9600508705", displayPhone: "+91 96005 08705" },
];

const studentCoordinators = [
  { name: "Ragul. S", role: "IT", phone: "7904979933", displayPhone: "+91 79049 79933" },
  { name: "Karthikeyan. M", role: "IT", phone: "9344142109", displayPhone: "+91 93441 42109" },
  { name: "Devanand. R", role: "CSE", phone: "6381136839", displayPhone: "+91 63811 36839" },
  { name: "Subash. R", role: "CSE", phone: "9884147269", displayPhone: "+91 98841 47269" },
];

const convenors = [
  { name: "Shri A. Srinivasan", designation: "Honourable Chancellor", category: "Patron" },
  { name: "Dr. D. Shanmugasundaram", designation: "Principal", category: "President" },
  { name: "Dr. K. Anbarasan", designation: "Vice Principal", category: "Vice President" },
  { name: "Mr. S. Saravanan", designation: "HoD / IT", category: "Convenor" },
  { name: "Mrs. Geetha. T", designation: "HoD / CSE", category: "Convenor" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openRegistration = () => window.open(GOOGLE_FORM_LINK, "_blank", "noopener,noreferrer");
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img src={LOGO} alt="Dhanalakshmi Srinivasan Engineering College logo" className="brand-logo" />
            <div className="brand-copy">
              <strong>Dhanalakshmi Srinivasan Engineering College (Autonomous)</strong>
              <span>Department of Computer Science & Engineering and Information Technology</span>
            </div>
          </a>

          <div className="desktop-nav">
            <a className="nav-link active" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#details">Details</a>
            <a className="nav-link" href="#coordinators">Coordinators</a>
            <Link className="nav-link" to="/event">Explore Events</Link>
            <button className="btn btn-primary nav-cta" onClick={openRegistration}>Register Now <Icon name="arrowUpRight" size={16} /></button>
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            <Icon name={menuOpen ? "x" : "menu"} size={22} />
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-nav">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#details" onClick={closeMenu}>Details</a>
            <a href="#coordinators" onClick={closeMenu}>Coordinators</a>
            <Link to="/event" onClick={closeMenu}>Explore Events</Link>
            <button className="btn btn-primary" onClick={() => { closeMenu(); openRegistration(); }}>Register Now <Icon name="arrowUpRight" size={16} /></button>
          </div>
        )}
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="hero-grid-lines" />
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-layout">
            <div className="hero-copy animate-in">
              <div className="eyebrow"><span className="status-dot" /> NATIONAL LEVEL SYMPOSIUM • 2026</div>
              <p className="hero-kicker">Department of Computer Science & Engineering and Information Technology presents</p>
              <h1><span>ZENTHRA</span> <em>'26</em></h1>
              <p className="hero-tagline">Where technology, creativity and competition come together.</p>
              <p className="hero-description">ZENTHRA '26 is a vibrant technical symposium bringing together passionate students, innovative minds and technology enthusiasts for a day of challenges, ideas and collaboration.</p>
              <div className="hero-actions">
                <button className="btn btn-primary btn-large" onClick={openRegistration}>Register Now <Icon name="arrowRight" size={18} /></button>
                <Link className="btn btn-secondary btn-large" to="/event">Explore Events <Icon name="arrowUpRight" size={17} /></Link>
              </div>
              <div className="hero-points">
                <span><Icon name="check" size={16} /> Open for Students</span>
                <span><Icon name="check" size={16} /> Certificates</span>
                <span><Icon name="check" size={16} /> Exciting Prizes</span>
                <span><Icon name="check" size={16} /> Spot Registration Available</span>
              </div>
            </div>

            <div className="hero-panel animate-in delay-1">
              <div className="hero-panel-top">
                <div>
                  <span className="panel-label">FEATURED EVENT</span>
                  <h2>ZENTHRA <span>'26</span></h2>
                </div>
                <div className="date-badge"><small>OCT</small><strong>14</strong><span>2026</span></div>
              </div>
              <div className="info-stack">
                {eventDetails.map(item => (
                  <div className="info-row" key={item.title}>
                    <div className="icon-box"><Icon name={item.icon} size={19} /></div>
                    <div><span>{item.title}</span><strong>{item.value}</strong></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-bottom container"><span>14 OCTOBER 2026</span><i /><span>DHANALAKSHMI SRINIVASAN ENGINEERING COLLEGE (AUTONOMOUS)</span><i /><span>PERAMBALUR</span></div>
        </section>

        <section id="about" className="section section-about">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="section-label">ABOUT ZENTHRA '26</span><h2>Where technology<br /><span>meets innovation.</span></h2></div>
              <p>ZENTHRA '26 provides an exciting platform to showcase technical skills, present innovative ideas, participate in engaging events and connect with like-minded learners.</p>
            </div>
            <div className="highlight-grid">
              {highlights.map(item => (
                <article className="highlight-card" key={item.title}>
                  <div className="feature-icon"><Icon name={item.icon} size={21} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Timeline />

        <section id="details" className="section section-details">
          <div className="container">
            <div className="section-heading centered"><span className="section-label">EVENT INFORMATION</span><h2>Everything you need<br /><span>to know.</span></h2><p>Keep the essential event information close before you register.</p></div>
            <div className="details-grid">
              {eventDetails.map(item => (
                <div className="detail-card" key={item.title}><div className="detail-icon"><Icon name={item.icon} size={22} /></div><div><span>{item.title}</span><strong>{item.value}</strong></div></div>
              ))}
            </div>
            <div className="explore-strip">
              <div><span className="section-label">EVENT ARENA</span><h3>Choose your challenge.</h3><p>Explore the technical and non-technical events prepared for ZENTHRA '26.</p></div>
              <Link className="btn btn-secondary" to="/event">Explore Events <Icon name="arrowUpRight" size={17} /></Link>
            </div>
            <div className="registration-cta">
              <div className="cta-glow" /><div className="cta-content"><span className="section-label">DON'T MISS OUT</span><h2>Ready to be part of <span>ZENTHRA '26?</span></h2><p>Registration is quick and easy. Register online via the official form or directly at the venue — spot registration is available on event day.</p><button className="btn btn-primary btn-large" onClick={openRegistration}>Register Now <Icon name="arrowRight" size={18} /></button></div>
            </div>
          </div>
        </section>

        <section id="coordinators" className="section section-coordinators">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-label">ORGANIZING COMMITTEE</span>
              <h2>Event Coordinators<br /><span>& Leadership.</span></h2>
              <p>Connect with our faculty, student coordinators, and committee members for event support.</p>
            </div>

            {/* Official Queries & Security Notice Card */}
            <div className="official-mail-card">
              <div className="mail-card-content">
                <div className="mail-badge">
                  <Icon name="mail" size={16} />
                  <span>OFFICIAL QUERIES</span>
                </div>
                <h3>Have questions or need clarifications?</h3>
                <p>Send all symposium queries directly to our official email address:</p>
                <a href="mailto:zenthra26@gmail.com" className="mail-link-pill">
                  <Icon name="mail" size={17} />
                  <strong>zenthra26@gmail.com</strong>
                  <Icon name="arrowUpRight" size={15} />
                </a>
              </div>
              <div className="mail-card-notice">
                <Icon name="shield" size={24} />
                <div>
                  <strong>Important Security Notice</strong>
                  <p>Please only trust official information, schedule announcements, and payment communications received directly from <u>zenthra26@gmail.com</u>. Beware of unofficial channels.</p>
                </div>
              </div>
            </div>

            {/* Coordinators Grid */}
            <div className="coordinators-dual-grid">
              {/* Staff Coordinators */}
              <div className="coord-column">
                <div className="coord-column-header">
                  <span className="coord-group-badge">STAFF COORDINATORS</span>
                  <h3>Faculty Members</h3>
                </div>
                <div className="coord-list">
                  {staffCoordinators.map(person => (
                    <div className="coord-card" key={person.phone}>
                      <div className="coord-avatar">
                        <Icon name="users" size={18} />
                      </div>
                      <div className="coord-info">
                        <strong>{person.name}</strong>
                        <span className="coord-role">{person.role}</span>
                      </div>
                      <a href={`tel:${person.phone}`} className="coord-call-btn" title={`Call ${person.name}`}>
                        <Icon name="phone" size={14} />
                        <span>{person.displayPhone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Coordinators */}
              <div className="coord-column">
                <div className="coord-column-header">
                  <span className="coord-group-badge student">STUDENT COORDINATORS</span>
                  <h3>Student Leads</h3>
                </div>
                <div className="coord-list">
                  {studentCoordinators.map(person => (
                    <div className="coord-card" key={person.phone}>
                      <div className="coord-avatar student">
                        <Icon name="users" size={18} />
                      </div>
                      <div className="coord-info">
                        <strong>{person.name}</strong>
                        <span className="coord-role">{person.role}</span>
                      </div>
                      <a href={`tel:${person.phone}`} className="coord-call-btn" title={`Call ${person.name}`}>
                        <Icon name="phone" size={14} />
                        <span>{person.displayPhone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Convenors & Leadership Ribbon */}
            <div className="convenors-container">
              <div className="convenors-header">
                <span className="section-label">PATRONS & CONVENORS</span>
                <h3>Symposium Leadership</h3>
              </div>
              <div className="convenors-grid">
                {convenors.map(leader => (
                  <div className="convenor-card" key={leader.name}>
                    <span className="convenor-role">{leader.designation}</span>
                    <strong>{leader.name}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <span>Z</span>
              <div>
                <strong>ZENTHRA '26</strong>
                <small>Department of Computer Science & Engineering and Information Technology</small>
              </div>
            </div>
            <p>Dhanalakshmi Srinivasan Engineering College (Autonomous)</p>
          </div>
          <div className="footer-links">
            <strong>Quick Links</strong>
            <a href="#about">About</a>
            <a href="#details">Event Details</a>
            <a href="#coordinators">Coordinators</a>
            <Link to="/event">Explore Events</Link>
          </div>
          <div className="footer-links">
            <strong>Connect & Queries</strong>
            <a href="mailto:zenthra26@gmail.com"><Icon name="mail" size={15} /> zenthra26@gmail.com <Icon name="external" size={13} /></a>
            <a href="https://maps.app.goo.gl/3AwxxnVfk67nsmg1A" target="_blank" rel="noreferrer"><Icon name="mapPin" size={15} /> Event Location <Icon name="external" size={13} /></a>
            <button onClick={openRegistration}><Icon name="external" size={15} /> Registration</button>
          </div>
        </div>
        <div className="container">
          <div className="footer-trust-notice">
            <Icon name="shield" size={20} />
            <p>
              <strong>Important Security Notice:</strong> Please only trust official symposium information, schedule announcements, and payment verifications received directly from our official email address: <a href="mailto:zenthra26@gmail.com">zenthra26@gmail.com</a>.
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 ZENTHRA '26. All rights reserved.</span>
          <span>Designed for a national-level symposium experience.</span>
        </div>
      </footer>
    </div>
  );
}
