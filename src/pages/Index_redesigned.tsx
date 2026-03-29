import { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Download, MessageCircle, Play, Mail, Phone, Instagram, Facebook, Twitter, ChevronRight } from "lucide-react";
import founderImage from "@/assets/founder.jpg";
import storyImage from "@/assets/campaign-banner.jpg";
import campaignImage from "@/assets/team.png";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg5 from "@/assets/hero-bg-5.jpg";
import spotlightImage from "@/assets/spotlight-nigeria.jpg";
import schoolAwarenessImage from "@/assets/school-awareness.jpg";
import researchPolicyImage from "@/assets/research-policy.jpg";
import volunteerPlaceholder from "@/assets/volunteer-placeholder.jpg";
import communityPlaceholder from "@/assets/community-placeholder.jpg";
import logo from "@/assets/logo.png";
import NewsletterSignup from "@/components/NewsletterSignup";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [heroBg, heroBg5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@700;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --purple: #4F2D9E;
          --purple-dark: #3a1f7a;
          --purple-light: #7C5CBF;
          --purple-pale: #f0ecff;
          --green: #1B7A5C;
          --accent: #F4A623;
          --text: #1a1a2e;
          --muted: #64748b;
          --border: #e8e8f0;
          --white: #ffffff;
          --off-white: #f9f8ff;
        }

        /* NAV */
        .nav {
          position: fixed; top: 0; width: 100%; z-index: 100;
          background: var(--purple-dark);
          box-shadow: 0 2px 20px rgba(0,0,0,0.15);
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          display: flex; align-items: center; justify-content: space-between;
          height: 68px;
        }
        .nav-brand {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; color: #fff; font-weight: 700; font-size: 18px;
        }
        .nav-brand img { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; }
        .nav-links { display: flex; align-items: center; gap: 32px; }
        .nav-links a {
          color: rgba(255,255,255,0.85); text-decoration: none;
          font-size: 14px; font-weight: 500; letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: #fff; }
        .nav-cta {
          background: var(--accent); color: #1a1a2e !important;
          padding: 8px 18px; border-radius: 6px; font-weight: 700 !important;
        }
        .hamburger { display: none; background: none; border: none; color: #fff; cursor: pointer; padding: 4px; }
        .mobile-menu {
          background: var(--purple-dark); padding: 16px 24px 24px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .mobile-menu a {
          display: block; color: rgba(255,255,255,0.85); text-decoration: none;
          padding: 12px 0; font-size: 16px; border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .mobile-menu a:last-child { border-bottom: none; }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; padding-top: 68px;
          background: linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 100%);
          position: relative; overflow: hidden;
        }
        .hero::before {
          content: ''; position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .hero-text {
          padding: 80px 48px 80px 60px; position: relative; z-index: 2;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(244,166,35,0.15); border: 1px solid rgba(244,166,35,0.4);
          color: var(--accent); border-radius: 20px;
          padding: 6px 14px; font-size: 12px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 24px;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 900; color: #fff; line-height: 1.12;
          margin-bottom: 20px;
        }
        .hero-sub {
          font-size: clamp(16px, 2vw, 19px);
          color: rgba(255,255,255,0.75); line-height: 1.7;
          margin-bottom: 36px; max-width: 520px;
        }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }
        .btn-primary {
          background: var(--accent); color: #1a1a2e;
          padding: 14px 28px; border-radius: 8px; font-size: 15px;
          font-weight: 700; text-decoration: none; border: none; cursor: pointer;
          display: inline-flex; align-items: center; gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(244,166,35,0.35); }
        .btn-secondary {
          background: transparent; color: #fff;
          padding: 14px 28px; border-radius: 8px; font-size: 15px;
          font-weight: 600; text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.4);
          display: inline-flex; align-items: center; gap: 8px;
          transition: background 0.2s, border-color 0.2s;
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.7); }
        .hero-ticker {
          font-size: 13px; color: rgba(255,255,255,0.5);
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .hero-partner {
          font-size: 13px; color: rgba(255,255,255,0.5);
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 16px; line-height: 1.6;
        }
        .partner-link {
          color: var(--accent); font-weight: 600;
          text-decoration: underline; text-underline-offset: 3px;
          transition: opacity 0.2s;
        }
        .partner-link:hover { opacity: 0.8; }
        .ticker-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
        .hero-image-col {
          position: relative; height: 100vh; overflow: hidden;
        }
        .hero-image-col img {
          width: 100%; height: 100%; object-fit: cover;
          transition: opacity 1s ease;
        }
        .hero-image-col::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to right, var(--purple-dark) 0%, transparent 30%);
        }

        /* IMPACT STATS */
        .stats {
          background: var(--off-white); padding: 60px 24px;
          border-bottom: 1px solid var(--border);
        }
        .stats-inner {
          max-width: 1000px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
          text-align: center;
        }
        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 4vw, 52px); font-weight: 900;
          color: var(--purple); line-height: 1;
        }
        .stat-label { font-size: 14px; color: var(--muted); margin-top: 6px; line-height: 1.4; }

        /* SECTION DEFAULTS */
        .section { padding: 88px 24px; }
        .section-alt { background: var(--off-white); }
        .container { max-width: 1200px; margin: 0 auto; }
        .section-tag {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--purple-light);
          margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 44px); font-weight: 700;
          color: var(--text); line-height: 1.2; margin-bottom: 16px;
        }
        .section-sub {
          font-size: clamp(15px, 2vw, 18px);
          color: var(--muted); max-width: 600px; line-height: 1.7;
        }
        .section-header { margin-bottom: 56px; }
        .section-header.center { text-align: center; }
        .section-header.center .section-sub { margin: 0 auto; }

        /* TWO COL LAYOUT */
        .two-col {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: center;
        }
        .two-col.reverse { direction: rtl; }
        .two-col.reverse > * { direction: ltr; }
        .col-image {
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.1);
        }
        .col-image img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* STORY SECTION - slim horizontal */
        .story-strip {
          background: #fff; border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden;
          display: grid; grid-template-columns: 280px 1fr;
          align-items: center;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        }
        .story-img { height: 200px; overflow: hidden; }
        .story-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .story-content { padding: 28px 32px; display: flex; align-items: center; gap: 24px; }
        .story-text h3 {
          font-family: 'Playfair Display', serif;
          font-size: 22px; font-weight: 700; color: var(--text); margin-bottom: 6px;
        }
        .story-text p { font-size: 15px; color: var(--muted); line-height: 1.6; }
        .story-btn {
          flex-shrink: 0;
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--purple); color: #fff;
          padding: 12px 22px; border-radius: 8px;
          font-size: 14px; font-weight: 600; text-decoration: none;
          white-space: nowrap; transition: background 0.2s;
        }
        .story-btn:hover { background: var(--purple-dark); }

        /* CARDS GRID */
        .cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .card {
          background: #fff; border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
        .card-img { height: 200px; overflow: hidden; }
        .card-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s; }
        .card:hover .card-img img { transform: scale(1.04); }
        .card-body { padding: 24px; }
        .card-tag {
          display: inline-block; background: var(--purple-pale);
          color: var(--purple); border-radius: 4px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; padding: 4px 10px; margin-bottom: 12px;
        }
        .card-title { font-size: 18px; font-weight: 700; color: var(--text); margin-bottom: 8px; line-height: 1.3; }
        .card-desc { font-size: 14px; color: var(--muted); line-height: 1.6; margin-bottom: 20px; }
        .card-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; font-weight: 600; color: var(--purple);
          text-decoration: none; transition: gap 0.2s;
        }
        .card-link:hover { gap: 10px; }

        .pillar-icon { font-size: 28px; margin-bottom: 12px; }

        /* SWEATSMART - compact horizontal */
        .sweatsmart-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 40px;
        }
        .ss-card {
          background: #fff; border: 1px solid var(--border); border-radius: 12px;
          padding: 24px; display: flex; align-items: flex-start; gap: 16px;
          transition: box-shadow 0.2s;
        }
        .ss-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .ss-icon {
          width: 44px; height: 44px; border-radius: 10px;
          background: var(--purple-pale); display: flex; align-items: center;
          justify-content: center; font-size: 20px; flex-shrink: 0;
        }
        .ss-card h3 { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
        .ss-card p { font-size: 13px; color: var(--muted); line-height: 1.5; margin-bottom: 14px; }
        .ss-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 600; color: var(--purple);
          text-decoration: none; background: var(--purple-pale);
          padding: 7px 14px; border-radius: 6px; transition: background 0.2s;
        }
        .ss-link:hover { background: #e0d8ff; }
        .ss-features {
          background: var(--purple); color: #fff; border-radius: 12px;
          padding: 24px; display: flex; align-items: flex-start; gap: 16px;
        }
        .ss-features h3 { font-size: 16px; font-weight: 700; margin-bottom: 12px; color: #fff; }
        .ss-features ul { list-style: none; }
        .ss-features ul li {
          font-size: 13px; color: rgba(255,255,255,0.85);
          padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; gap: 8px;
        }
        .ss-features ul li:last-child { border-bottom: none; }
        .ss-features ul li::before { content: '✓'; color: var(--accent); font-weight: 700; }

        /* SPOTLIGHT - horizontal two-col */
        .spotlight-card {
          background: #fff; border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        }
        .spotlight-inner {
          display: grid; grid-template-columns: 1fr 1fr;
        }
        .spotlight-image { height: 100%; min-height: 320px; overflow: hidden; }
        .spotlight-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .spotlight-content { padding: 48px 40px; display: flex; flex-direction: column; justify-content: center; }
        .spotlight-content p { font-size: 15px; color: var(--muted); line-height: 1.8; margin-bottom: 12px; }
        .spotlight-content p:last-of-type { margin-bottom: 28px; }

        /* VOLUNTEER SECTION */
        .volunteer-strip {
          background: var(--purple-dark);
          border-radius: 20px; overflow: hidden;
          display: grid; grid-template-columns: 1fr 380px;
          align-items: center;
        }
        .volunteer-text { padding: 56px 48px; color: #fff; }
        .volunteer-text .section-title { color: #fff; margin-bottom: 16px; }
        .volunteer-text p { color: rgba(255,255,255,0.75); font-size: 16px; line-height: 1.7; margin-bottom: 32px; }
        .volunteer-image { height: 100%; overflow: hidden; }
        .volunteer-image img { width: 100%; height: 100%; object-fit: cover; display: block; filter: brightness(0.85); }

        /* COMMUNITY - She Code Africa style */
        .community-section {
          background: var(--off-white); padding: 88px 24px;
        }
        .community-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }
        .community-image { border-radius: 20px; overflow: hidden; box-shadow: 0 24px 60px rgba(0,0,0,0.1); }
        .community-image img { width: 100%; height: 420px; object-fit: cover; display: block; }
        .community-text .section-title { margin-bottom: 16px; }
        .community-text p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 32px; }
        .community-btns { display: flex; flex-direction: column; gap: 12px; }
        .btn-whatsapp {
          background: #25D366; color: #fff;
          padding: 14px 24px; border-radius: 8px;
          font-size: 15px; font-weight: 700; text-decoration: none;
          display: inline-flex; align-items: center; gap: 10px;
          transition: background 0.2s; max-width: 340px;
        }
        .btn-whatsapp:hover { background: #1ab854; }
        .social-row { display: flex; gap: 10px; flex-wrap: wrap; }
        .btn-social {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 18px; border-radius: 8px; font-size: 14px; font-weight: 600;
          text-decoration: none; border: 1.5px solid var(--border);
          color: var(--text); background: #fff; transition: border-color 0.2s, background 0.2s;
        }
        .btn-social:hover { border-color: var(--purple); background: var(--purple-pale); color: var(--purple); }



        /* FOUNDER */
        .founder-card {
          background: #fff; border: 1px solid var(--border);
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.06);
        }
        .founder-inner { display: grid; grid-template-columns: 1fr 1fr; }
        .founder-image img { width: 100%; height: 100%; min-height: 480px; object-fit: cover; display: block; }
        .founder-content { padding: 56px 48px; display: flex; flex-direction: column; justify-content: center; }
        .founder-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 28px; font-weight: 700; color: var(--text); margin-bottom: 4px;
        }
        .founder-role { font-size: 14px; color: var(--purple); font-weight: 600; margin-bottom: 24px; }
        .founder-content p { font-size: 15px; color: var(--muted); line-height: 1.8; margin-bottom: 14px; }
        .founder-quote {
          font-style: italic; color: var(--purple); font-size: 16px;
          border-left: 3px solid var(--purple); padding-left: 16px; margin-top: 8px;
        }

        /* CONTACT */
        .contact-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
        }
        .contact-item {
          background: #fff; border: 1px solid var(--border);
          border-radius: 12px; padding: 28px;
          display: flex; align-items: flex-start; gap: 16px;
        }
        .contact-icon {
          width: 48px; height: 48px; border-radius: 12px;
          background: var(--purple-pale); display: flex;
          align-items: center; justify-content: center; color: var(--purple); flex-shrink: 0;
        }
        .contact-item h3 { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
        .contact-item a { font-size: 15px; color: var(--purple); text-decoration: none; }

        /* FOOTER */
        .footer { background: #0f1729; color: #fff; padding: 64px 24px 32px; }
        .footer-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px;
          margin-bottom: 48px;
        }
        .footer-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
        .footer-brand img { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
        .footer-brand span { font-weight: 700; font-size: 16px; }
        .footer-tagline { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; }
        .footer h4 { font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 20px; }
        .footer ul { list-style: none; }
        .footer ul li { margin-bottom: 12px; }
        .footer ul li a { color: rgba(255,255,255,0.65); text-decoration: none; font-size: 14px; transition: color 0.2s; }
        .footer ul li a:hover { color: #fff; }
        .footer-bottom {
          max-width: 1200px; margin: 0 auto;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 28px; text-align: center;
          font-size: 13px; color: rgba(255,255,255,0.3);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-text { padding: 60px 24px 48px; }
          .hero-image-col { height: 55vw; max-height: 360px; }
          .hero-image-col::after { background: linear-gradient(to bottom, var(--purple-dark) 0%, transparent 40%); }
          .stats-inner { grid-template-columns: repeat(2, 1fr); gap: 32px; }
          .two-col { grid-template-columns: 1fr; gap: 32px; }
          .two-col.reverse { direction: ltr; }
          .story-strip { grid-template-columns: 1fr; }
          .story-img { height: 200px; }
          .story-content { flex-direction: column; align-items: flex-start; padding: 24px; }
          .cards-grid { grid-template-columns: 1fr; }
          .sweatsmart-grid { grid-template-columns: 1fr; }
          #sweatsmart > .container > div { grid-template-columns: 1fr !important; gap: 32px !important; }
          #what-we-do .container > div:first-of-type + div { grid-template-columns: 1fr !important; }
          .spotlight-inner { grid-template-columns: 1fr; }
          .spotlight-image { min-height: 220px; }
          .spotlight-content { padding: 32px 24px; }
          .volunteer-strip { grid-template-columns: 1fr; }
          .volunteer-image { height: 220px; }
          .volunteer-text { padding: 40px 24px; }
          .community-inner { grid-template-columns: 1fr; }
          .community-image img { height: 260px; }
          .founder-inner { grid-template-columns: 1fr; }
          .founder-image img { min-height: 280px; }
          .founder-content { padding: 32px 24px; }
          .contact-row { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 560px) {
          .section { padding: 64px 20px; }
          .hero-btns { flex-direction: column; }
          .btn-primary, .btn-secondary { justify-content: center; }
          .stats-inner { grid-template-columns: 1fr 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="/" className="nav-brand">
            <img src={logo} alt="Beyond Sweat Foundation Logo" />
            <span>Beyond Sweat Foundation</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#what-we-do">What We Do</a>
            <a href="/events">Events</a>
            <a href="/blog">Blog</a>
            <a href="/news">News</a>
            <a href="/faq">FAQs</a>
            <a href="#contact">Contact</a>
            <a href="http://go.beyondsweat.org/J7ws6M" target="_blank" rel="noopener noreferrer" className="nav-cta">Take the Survey</a>
          </div>
          <button className="hamburger" aria-label="Open menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {[
              { href: "#about", label: "About" },
              { href: "#what-we-do", label: "What We Do" },
              { href: "/events", label: "Events" },
              { href: "/blog", label: "Blog" },
              { href: "/news", label: "News" },
              { href: "/faq", label: "FAQs" },
              { href: "#contact", label: "Contact" },
              { href: "http://go.beyondsweat.org/J7ws6M", label: "Take the Survey →", target: "_blank" },
            ].map(link => (
              <a key={link.href} href={link.href} target={link.target} rel={link.target ? "noopener noreferrer" : undefined} onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" aria-label="Homepage hero">
        <div className="hero">
          <div className="hero-text">
            <div className="hero-badge">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F4A623" }} />
              Climate · Health · Justice
            </div>
            <h1>Confronting Hyperhidrosis in a Warming World</h1>
            <p className="hero-sub">
              Beyond Sweat Foundation combines lived experience, education, and climate-aware innovation to support people with hyperhidrosis across Nigeria, Africa, and the world.
            </p>
            <div className="hero-btns">
              <a href="http://go.beyondsweat.org/J7ws6M" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Take the Spotlight Survey
              </a>
              <a href="#volunteer" className="btn-secondary">
                Volunteer / Join
              </a>
            </div>
            <div className="hero-ticker">
              <span className="ticker-dot" />
              <span>Awareness</span>
              <span className="ticker-dot" />
              <span>Advocacy</span>
              <span className="ticker-dot" />
              <span>Community</span>
              <span className="ticker-dot" />
              <span>Education</span>
              <span className="ticker-dot" />
              <span>Research & Policy</span>
            </div>
            <div className="hero-partner">
              Innovation partner:{" "}
              <a href="https://www.giftovate.world" target="_blank" rel="noopener noreferrer" className="partner-link">
                Giftovate Therapeutics Ltd
              </a>
              {" "}— building SweatSmart &amp; thermoelectric wearables for hyperhidrosis care.
            </div>
          </div>
          <div className="hero-image-col" aria-hidden="true">
            <img
              src={heroImages[currentHeroImage]}
              alt="Beyond Sweat Foundation community members"
              key={currentHeroImage}
            />
          </div>
        </div>
      </section>

      {/* ── MISSION PILLARS BAR ── */}
      <div className="stats" aria-label="Our mission pillars">
        <div className="stats-inner">
          <div>
            <div className="stat-num" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.01em" }}>Awareness</div>
            <div className="stat-label">Breaking silence around hyperhidrosis in Nigeria &amp; Africa</div>
          </div>
          <div>
            <div className="stat-num" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.01em" }}>Advocacy</div>
            <div className="stat-label">Pushing for clinical recognition &amp; dignified care</div>
          </div>
          <div>
            <div className="stat-num" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.01em" }}>Community</div>
            <div className="stat-label">A safe space where no one suffers in silence</div>
          </div>
          <div>
            <div className="stat-num" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.01em" }}>Research</div>
            <div className="stat-label">Africa's first continental hyperhidrosis dataset</div>
          </div>
        </div>
      </div>

      {/* ── WHAT WE DO — 5 pillars ── */}
      <section id="what-we-do" className="section">
        <div className="container">
          <div className="section-header center">
            <p className="section-tag">Our Mission</p>
            <h2 className="section-title">What Beyond Sweat Foundation Does</h2>
            <p className="section-sub">We are Nigeria's first hyperhidrosis-focused nonprofit — working across five pillars to ensure no one living with excessive sweating feels invisible, ashamed, or without support.</p>
          </div>

          {/* Top row — 2 cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 24 }}>
            <article className="card">
              <div className="card-body" style={{ padding: "32px" }}>
                <div className="pillar-icon">📣</div>
                <span className="card-tag">Pillar 1</span>
                <h3 className="card-title">Awareness</h3>
                <p className="card-desc">Hyperhidrosis is real, common, and life-affecting — but most people have never heard of it. We run targeted awareness campaigns across Nigeria and Africa, bringing this condition into public conversation through media, events, and community outreach so that people finally have a name for what they experience.</p>
              </div>
            </article>
            <article className="card">
              <div className="card-body" style={{ padding: "32px" }}>
                <div className="pillar-icon">✊</div>
                <span className="card-tag">Pillar 2</span>
                <h3 className="card-title">Advocacy</h3>
                <p className="card-desc">We advocate at institutional and policy levels — pushing for hyperhidrosis to be included in Nigerian medical school curricula, recognized by healthcare systems, and funded by global health bodies. Nobody should have to beg a doctor to be believed.</p>
                <a href="https://c.org/cM7H8Z96Dr" target="_blank" rel="noopener noreferrer" className="card-link">Support our petition <ChevronRight size={15} /></a>
              </div>
            </article>
          </div>

          {/* Bottom row — 3 cards */}
          <div className="cards-grid">
            <article className="card">
              <div className="card-img">
                <img src={schoolAwarenessImage} alt="Beyond Sweat Foundation delivering climate-aware hyperhidrosis education in Nigerian schools and communities" />
              </div>
              <div className="card-body">
                <div className="pillar-icon">🎓</div>
                <span className="card-tag">Pillar 3</span>
                <h3 className="card-title">Education</h3>
                <p className="card-desc">We deliver climate-aware education programs in schools and communities — creating resources, running workshops, and connecting hyperhidrosis to environmental health challenges so people understand the full picture.</p>
                <a href="/school-awareness" className="card-link">Learn more <ChevronRight size={15} /></a>
              </div>
            </article>
            <article className="card">
              <div className="card-img">
                <img src={researchPolicyImage} alt="Beyond Sweat Foundation researchers combining community data and scientific evidence to shape hyperhidrosis policy in Africa" />
              </div>
              <div className="card-body">
                <div className="pillar-icon">🔬</div>
                <span className="card-tag">Pillar 4</span>
                <h3 className="card-title">Research &amp; Policy</h3>
                <p className="card-desc">We combine community stories with scientific evidence to produce research that shapes policy — driving national and global recognition of hyperhidrosis as a legitimate, climate-linked health condition.</p>
                <a href="/research-policy" className="card-link">Learn more <ChevronRight size={15} /></a>
              </div>
            </article>
            <article className="card">
              <div className="card-img">
                <img src={communityPlaceholder} alt="Beyond Sweat Foundation Hyperhidrosis Warriors — a safe community where people with hyperhidrosis connect and support each other" />
              </div>
              <div className="card-body">
                <div className="pillar-icon">🤝</div>
                <span className="card-tag">Pillar 5</span>
                <h3 className="card-title">Community Support</h3>
                <p className="card-desc">Living with hyperhidrosis can feel deeply isolating. We build and sustain safe spaces — online and offline — where people share coping strategies, find understanding, and realise they are not alone.</p>
                <a href="https://chat.whatsapp.com/BKgrDMOttm76Jva6fSZUMi?mode=ac_t" target="_blank" rel="noopener noreferrer" className="card-link">Join the community <ChevronRight size={15} /></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN — two col ── */}
      <section id="campaign" className="section section-alt">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="section-header">
                <p className="section-tag">Active Campaign</p>
                <h2 className="section-title">Teach Hyperhidrosis in Nigerian Medical Schools</h2>
                <p className="section-sub">
                  Too many people suffer in silence because medical professionals don't recognize hyperhidrosis. We're demanding that medical schools include it in their curriculum — improving diagnosis, care, and dignity for thousands.
                </p>
              </div>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 28 }}>
                By educating future doctors, we can improve diagnosis, ensure better care, and restore dignity to those living with this condition. Join us in making hyperhidrosis visible in Nigerian medical education.
              </p>
              <a href="https://c.org/cM7H8Z96Dr" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Support the Campaign
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="col-image" style={{ height: 400 }}>
              <img src={campaignImage} alt="Nigerian medical students advocating to include hyperhidrosis in medical school curriculum" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SPOTLIGHT DATA ── */}
      <section id="spotlight" className="section">
        <div className="container">
          <div className="spotlight-card">
            <div className="spotlight-inner">
              <div className="spotlight-image">
                <img src={spotlightImage} alt="Beyond Sweat Foundation team — Spotlight Africa hyperhidrosis data collection and research initiative" />
              </div>
              <div className="spotlight-content">
                <p className="section-tag">Spotlight Africa</p>
                <h2 className="section-title">Africa's First Hyperhidrosis Survey</h2>
                <p>
                  Building the first Pan-African comprehensive hyperhidrosis dataset. By combining data from our community survey and the SweatSmart app, we are creating localised evidence needed to drive policy, clinical research, and funding across the continent.
                </p>
                <p>
                  Your anonymous response takes just 3–5 minutes and helps bridge a critical data gap for the African healthcare community.
                </p>
                <a href="http://go.beyondsweat.org/J7ws6M" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Take the Survey
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SWEATSMART — Giftovate partnership ── */}
      <section id="sweatsmart" className="section section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <p className="section-tag">Innovation Partnership</p>
              <h2 className="section-title">Technology Powered by Giftovate Therapeutics Ltd</h2>
              <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                Beyond Sweat Foundation partners with{" "}
                <a href="https://www.giftovate.world" target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple)", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3 }}>
                  Giftovate Therapeutics Ltd
                </a>
                {" "}— a health innovation company founded by Gifty Aruwajoye — to bring cutting-edge technology solutions to the hyperhidrosis community.
              </p>
              <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.8, marginBottom: 32 }}>
                Giftovate built <strong>SweatSmart</strong>, a climate-aware symptom tracking app, and is currently prototyping <strong>thermoelectric wearables</strong> — non-invasive devices designed to regulate body temperature and reduce excessive sweating. Foundation advocacy and Giftovate innovation work hand in hand: the community's data shapes the science, and the science serves the community.
              </p>
              <a href="https://www.giftovate.world" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Visit Giftovate Therapeutics
                <ExternalLink size={16} />
              </a>
            </div>
            <div>
              <div className="sweatsmart-grid" style={{ marginTop: 0 }}>
                <div className="ss-card">
                  <div className="ss-icon">📱</div>
                  <div>
                    <h3>SweatSmart Web App</h3>
                    <p>Track symptoms, get climate alerts, and manage your condition from any browser — free for the community.</p>
                    <a href="https://www.sweatsmart.guru" target="_blank" rel="noopener noreferrer" className="ss-link">
                      Open Web App <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
                <div className="ss-card">
                  <div className="ss-icon">🤖</div>
                  <div>
                    <h3>Android App</h3>
                    <p>Offline access and enhanced features — built for life in Nigeria's climate. Download the APK directly.</p>
                    <a href="https://github.com/Ebuny5/sweatsmart-apk/releases/download/v1.0.0/SweatSmart.apk" target="_blank" rel="noopener noreferrer" className="ss-link">
                      Download APK <Download size={13} />
                    </a>
                  </div>
                </div>
                <div className="ss-features" style={{ gridColumn: "1 / -1" }}>
                  <div className="ss-icon" style={{ background: "rgba(255,255,255,0.1)", flexShrink: 0 }}>⚡</div>
                  <div style={{ flex: 1 }}>
                    <h3>Coming soon: Thermoelectric Wearables</h3>
                    <ul>
                      <li>Non-invasive temperature regulation</li>
                      <li>Designed for hyperhidrosis sufferers</li>
                      <li>Prototyping underway at Giftovate Therapeutics</li>
                      <li>Community data drives the design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VOLUNTEER ── */}
      <section id="volunteer" className="section section-alt">
        <div className="container">
          <div className="volunteer-strip">
            <div className="volunteer-text">
              <p className="section-tag" style={{ color: "rgba(255,255,255,0.5)" }}>Get Involved</p>
              <h2 className="section-title">Volunteer With Us</h2>
              <p>Whether you're a healthcare professional, educator, or passionate advocate, there's a place for you in our community. Join us in building awareness, supporting individuals, and driving systemic change.</p>
              <a href="https://forms.gle/M9Rjbdaq4CydJ7dq8" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Apply to Volunteer
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="volunteer-image">
              <img src={volunteerPlaceholder} alt="Beyond Sweat Foundation volunteers and community members coming together across Nigeria" />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY — She Code Africa style ── */}
      <section id="community-support" className="community-section">
        <div className="community-inner">
          <div className="community-image">
            <img src={communityPlaceholder} alt="Hyperhidrosis Warriors community members connecting and supporting each other" />
          </div>
          <div className="community-text">
            <p className="section-tag">Community</p>
            <h2 className="section-title">Become a Member of the Hyperhidrosis Warriors Community</h2>
            <p>
              Join our WhatsApp community where people share experiences, coping strategies, and victories. Find understanding, acceptance, and practical support from those who truly get it. You are not alone.
            </p>
            <div className="community-btns">
              <a href="https://chat.whatsapp.com/BKgrDMOttm76Jva6fSZUMi?mode=ac_t" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={20} />
                Join WhatsApp Community
              </a>
              <div className="social-row">
                <a href="https://instagram.com/beyondsweatfoundation" target="_blank" rel="noopener noreferrer" className="btn-social">
                  <Instagram size={16} /> Instagram
                </a>
                <a href="https://facebook.com/beyondsweatfoundation" target="_blank" rel="noopener noreferrer" className="btn-social">
                  <Facebook size={16} /> Facebook
                </a>
                <a href="https://x.com/beyondsweatfoun" target="_blank" rel="noopener noreferrer" className="btn-social">
                  <Twitter size={16} /> X
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WATCH MY STORY — slim strip ── */}
      <section className="section section-alt" id="story">
        <div className="container">
          <div className="story-strip">
            <div className="story-img">
              <img src={storyImage} alt="Founder Gifty Aruwajoye - personal journey with hyperhidrosis that inspired Beyond Sweat Foundation" />
            </div>
            <div className="story-content">
              <div className="story-text">
                <h3>Watch Gifty's Story</h3>
                <p>Before the foundation, before the app, before any of this — there was one woman sitting with a condition nobody around her understood. Watch Gifty tell her story in her own words, and why she refused to stay silent.</p>
              </div>
              <a href="https://youtu.be/CVOXL4lWMBo" target="_blank" rel="noopener noreferrer" className="story-btn">
                <Play size={16} />
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* ── NEWSLETTER ── */}
      <NewsletterSignup />

      {/* ── FOUNDER ── */}
      <section id="founder" className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <p className="section-tag">Leadership</p>
            <h2 className="section-title">Meet the Founder</h2>
            <p className="section-sub">Turning personal struggle into collective empowerment</p>
          </div>
          <div className="founder-card">
            <div className="founder-inner">
              <div className="founder-image">
                <img src={founderImage} alt="Gifty Aruwajoye — Founder of Beyond Sweat Foundation, hyperhidrosis advocate and climate-health innovator" />
              </div>
              <div className="founder-content">
                <h3>Meet Gifty Aruwajoye</h3>
                <p className="founder-role">Founder, Beyond Sweat Foundation &amp; CEO, Giftovate Therapeutics Ltd</p>
                <p>
                  Gifty knows what it feels like to sit in a classroom, avoid handshakes, or miss opportunities — not because of lack of ability, but because of a condition most people around her had never heard of. Growing up in Nigeria's hot climate with hyperhidrosis, she experienced the silence, the shame, and the lack of answers firsthand.
                </p>
                <p>
                  That experience became her fuel. She founded Beyond Sweat Foundation to build the support system she once desperately needed — one rooted in awareness, advocacy, and community. And she founded Giftovate Therapeutics Ltd to innovate the solutions the medical world hasn't yet delivered: from SweatSmart, a climate-aware symptom tracking app, to thermoelectric wearables currently in prototype.
                </p>
                <p>
                  Gifty is not just running an organisation — she is living proof that the people most affected by a problem are often best positioned to solve it.
                </p>
                <p className="founder-quote">
                  "My journey taught me that visibility is power. When we speak up, we make room for understanding, inclusion, and change."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header center">
            <p className="section-tag">Contact</p>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-sub">Have questions or want to learn more? We'd love to hear from you.</p>
          </div>
          <div className="contact-row" style={{ maxWidth: 700, margin: "0 auto" }}>
            <div className="contact-item">
              <div className="contact-icon"><Mail size={22} /></div>
              <div>
                <h3>Email Us</h3>
                <a href="mailto:info@beyondsweat.org">info@beyondsweat.org</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Phone size={22} /></div>
              <div>
                <h3>Call Us</h3>
                <a href="tel:+2348112289385">+234 811 228 9385</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src={logo} alt="Beyond Sweat Foundation" />
              <span>Beyond Sweat Foundation</span>
            </div>
            <p className="footer-tagline">Climate-aware health advocacy for people with hyperhidrosis across Nigeria, Africa, and beyond.</p>
          </div>
          <div>
            <h4>Organization</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="#what-we-do">What We Do</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="/events">Events</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="https://ebuny.substack.com/p/when-data-is-invisible-people-are" target="_blank" rel="noopener noreferrer">When Data Is Invisible <ExternalLink size={11} style={{ display: "inline" }} /></a></li>
              <li><a href="https://medium.com/@giftyaruwajoye/breaking-the-silence-why-hyperhidrosis-education-belongs-in-nigerias-medical-curriculum-69585cf8d78a" target="_blank" rel="noopener noreferrer">Breaking the Silence <ExternalLink size={11} style={{ display: "inline" }} /></a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/cookie-policy">Cookie Policy</a></li>
              <li><a href="/disclaimer">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Beyond Sweat Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
