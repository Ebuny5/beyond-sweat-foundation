import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ExternalLink, Download, MessageCircle,
  Mail, Phone, Instagram, Facebook, Twitter,
  ChevronRight, Linkedin, Youtube
} from "lucide-react";
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

/* ─── Slide-in animation hook ─── */
const useSlideIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
};

const SlideLeft = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, visible } = useSlideIn();
  return (
    <div ref={ref} style={{
      transform: visible ? "translateX(0)" : "translateX(-56px)",
      opacity: visible ? 1 : 0,
      transition: `transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 0.75s ease ${delay}ms`
    }}>{children}</div>
  );
};

const SlideRight = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, visible } = useSlideIn();
  return (
    <div ref={ref} style={{
      transform: visible ? "translateX(0)" : "translateX(56px)",
      opacity: visible ? 1 : 0,
      transition: `transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 0.75s ease ${delay}ms`
    }}>{children}</div>
  );
};

const SlideUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, visible } = useSlideIn();
  return (
    <div ref={ref} style={{
      transform: visible ? "translateY(0)" : "translateY(36px)",
      opacity: visible ? 1 : 0,
      transition: `transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 0.65s ease ${delay}ms`
    }}>{children}</div>
  );
};

/* ─── Main Component ─── */
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
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#F8FAFC", color: "#0F172A" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,700;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --navy:       #0F172A;
          --navy-mid:   #1E293B;
          --purple:     #4F2D9E;
          --purple-dim: rgba(79,45,158,0.12);
          --teal:       #2DD4BF;
          --teal-dark:  #0F9488;
          --teal-glow:  rgba(45,212,191,0.15);
          --slate:      #F8FAFC;
          --border:     #E2E8F0;
          --text:       #0F172A;
          --muted:      #64748B;
        }

        /* NAV */
        .nav {
          position: fixed; top: 0; width: 100%; z-index: 100;
          background: rgba(15,23,42,0.85);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 28px;
          display: flex; align-items: center; justify-content: space-between; height: 68px;
        }
        .nav-brand {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; color: #fff; font-weight: 700; font-size: 17px;
        }
        .nav-brand img { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
        .nav-links { display: flex; align-items: center; gap: 28px; }
        .nav-links a { color: rgba(255,255,255,0.72); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .nav-links a:hover { color: #fff; }
        .nav-cta {
          background: var(--teal) !important; color: var(--navy) !important;
          padding: 9px 20px; border-radius: 50px !important; font-weight: 700 !important;
          font-size: 13px !important; transition: background 0.2s, transform 0.2s !important;
          letter-spacing: 0.01em !important;
        }
        .nav-cta:hover { background: var(--teal-dark) !important; transform: translateY(-1px); }
        .hamburger { display: none; background: none; border: none; color: #fff; cursor: pointer; }
        .mobile-menu { background: var(--navy); padding: 16px 28px 28px; border-top: 1px solid rgba(255,255,255,0.07); }
        .mobile-menu a { display: block; color: rgba(255,255,255,0.78); text-decoration: none; padding: 13px 0; font-size: 16px; border-bottom: 1px solid rgba(255,255,255,0.06); }

        /* HERO */
        .hero-wrap { position: relative; min-height: 100vh; display: flex; align-items: center; padding-top: 68px; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; z-index: 0; background-size: cover; background-position: center; transition: opacity 1.2s ease; }
        .hero-overlay { position: absolute; inset: 0; z-index: 1; background: linear-gradient(108deg, rgba(15,23,42,0.94) 0%, rgba(15,23,42,0.72) 55%, rgba(15,23,42,0.35) 100%); }
        .hero-content { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 80px 28px; display: grid; grid-template-columns: 1fr 380px; gap: 64px; align-items: center; width: 100%; }
        .hero-badge { display: inline-flex; align-items: center; gap: 7px; background: var(--teal-glow); border: 1px solid rgba(45,212,191,0.3); color: var(--teal); border-radius: 50px; padding: 6px 16px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 22px; }
        .hero h1 { font-family: 'Lora', serif; font-size: clamp(32px, 4.5vw, 56px); font-weight: 700; color: #fff; line-height: 1.15; margin-bottom: 20px; letter-spacing: -0.02em; }
        .hero h1 em { font-style: italic; color: var(--teal); }
        .hero-sub { font-size: clamp(15px, 1.8vw, 18px); color: rgba(255,255,255,0.7); line-height: 1.78; margin-bottom: 36px; max-width: 540px; }
        .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 40px; }
        .hero-ticker { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; font-size: 12px; color: rgba(255,255,255,0.38); margin-bottom: 16px; }
        .ticker-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--teal); flex-shrink: 0; }
        .hero-partner { font-size: 12px; color: rgba(255,255,255,0.38); border-top: 1px solid rgba(255,255,255,0.07); padding-top: 14px; line-height: 1.7; }
        .partner-link { color: var(--teal); font-weight: 600; text-decoration: underline; text-underline-offset: 3px; transition: opacity 0.2s; }
        .partner-link:hover { opacity: 0.75; }
        .pulse-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--teal); margin-right: 6px; animation: pulse 1.8s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.45;transform:scale(1.5)} }

        /* DATA PULSE CARD */
        .data-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(45,212,191,0.22); border-radius: 18px; padding: 30px; backdrop-filter: blur(10px); }
        .data-card h3 { font-size: 16px; font-weight: 700; color: var(--teal); margin-bottom: 10px; }
        .data-card p { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.68; margin-bottom: 16px; }
        .data-card .note { font-size: 12px; color: rgba(255,255,255,0.32); margin-bottom: 22px; }

        /* BUTTONS */
        .btn-primary { background: var(--teal); color: var(--navy); padding: 14px 28px; border-radius: 50px; font-size: 15px; font-weight: 700; text-decoration: none; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.2s, box-shadow 0.2s, background 0.2s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(45,212,191,0.32); background: var(--teal-dark); }
        .btn-secondary { background: transparent; color: #fff; padding: 14px 28px; border-radius: 50px; font-size: 15px; font-weight: 600; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.32); display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s, border-color 0.2s; }
        .btn-secondary:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.65); }
        .btn-teal-sm { background: var(--teal); color: var(--navy); padding: 12px 24px; border-radius: 50px; font-size: 14px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.2s, box-shadow 0.2s; }
        .btn-teal-sm:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(45,212,191,0.28); }
        .btn-outline-dark { background: transparent; color: rgba(255,255,255,0.8); padding: 11px 22px; border-radius: 50px; font-size: 14px; font-weight: 600; text-decoration: none; border: 1px solid rgba(255,255,255,0.18); display: inline-flex; align-items: center; gap: 8px; transition: border-color 0.2s, color 0.2s; }
        .btn-outline-dark:hover { border-color: var(--teal); color: var(--teal); }

        /* PILLARS BAR */
        .pillars-bar { background: var(--navy); padding: 0 28px; }
        .pillars-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: rgba(255,255,255,0.06); }
        .pillar-item { background: var(--navy-mid); padding: 32px 26px; transition: background 0.2s; cursor: default; }
        .pillar-item:hover { background: rgba(79,45,158,0.22); }
        .pillar-label { font-size: 17px; font-weight: 700; color: var(--teal); margin-bottom: 6px; letter-spacing: -0.01em; }
        .pillar-desc { font-size: 13px; color: rgba(255,255,255,0.42); line-height: 1.6; }

        /* SECTIONS */
        .section { padding: 96px 28px; }
        .section-alt { background: var(--slate); }
        .container { max-width: 1200px; margin: 0 auto; }
        .section-tag { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--teal); margin-bottom: 10px; }
        .section-title { font-family: 'Lora', serif; font-size: clamp(26px, 3.5vw, 40px); font-weight: 700; color: var(--text); line-height: 1.2; margin-bottom: 14px; letter-spacing: -0.02em; }
        .section-sub { font-size: clamp(15px, 1.8vw, 17px); color: var(--muted); line-height: 1.78; max-width: 580px; }
        .section-header { margin-bottom: 56px; }
        .section-header.center { text-align: center; }
        .section-header.center .section-sub { margin: 0 auto; }

        /* BENTO GRID */
        .bento-grid { display: grid; grid-template-columns: 1.35fr 1fr 1fr; grid-template-rows: auto auto; gap: 18px; }
        .bento-card { background: #fff; border: 1px solid var(--border); border-radius: 20px; padding: 32px; overflow: hidden; transition: transform 0.25s, box-shadow 0.25s; position: relative; }
        .bento-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,0.09); }
        .bento-card.tall { grid-row: span 2; display: flex; flex-direction: column; }
        .bento-card.wide { grid-column: span 2; }
        .bento-card.dark { background: var(--navy-mid); border-color: rgba(255,255,255,0.07); }
        .bento-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--teal), var(--purple)); border-radius: 20px 20px 0 0; }
        .bento-icon { font-size: 30px; margin-bottom: 14px; }
        .bento-tag { display: inline-block; background: var(--purple-dim); color: var(--purple); border-radius: 4px; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 4px 10px; margin-bottom: 10px; }
        .bento-card.dark .bento-tag { background: var(--teal-glow); color: var(--teal); }
        .bento-title { font-size: 20px; font-weight: 700; color: var(--text); margin-bottom: 10px; line-height: 1.3; }
        .bento-card.dark .bento-title { color: #fff; }
        .bento-desc { font-size: 14px; color: var(--muted); line-height: 1.72; margin-bottom: 20px; flex-grow: 1; }
        .bento-card.dark .bento-desc { color: rgba(255,255,255,0.52); }
        .bento-img { border-radius: 12px; overflow: hidden; margin-bottom: 20px; }
        .bento-img img { width: 100%; height: 195px; object-fit: cover; display: block; transition: transform 0.35s; }
        .bento-card:hover .bento-img img { transform: scale(1.05); }
        .bento-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: var(--teal); text-decoration: none; transition: gap 0.2s; }
        .bento-link:hover { gap: 10px; }

        /* SPLIT CARD */
        .split-card { background: #fff; border: 1px solid var(--border); border-radius: 22px; overflow: hidden; box-shadow: 0 4px 28px rgba(0,0,0,0.06); display: grid; grid-template-columns: 1fr 1fr; }
        .split-img { overflow: hidden; }
        .split-img img { width: 100%; height: 100%; min-height: 380px; object-fit: cover; display: block; }
        .split-content { padding: 52px 46px; display: flex; flex-direction: column; justify-content: center; }
        .split-content p { font-size: 15px; color: var(--muted); line-height: 1.82; margin-bottom: 14px; }
        .split-content p:last-of-type { margin-bottom: 28px; }

        /* GIFTOVATE DARK */
        .giftovate-section { background: var(--navy); padding: 96px 28px; position: relative; overflow: hidden; }
        .giftovate-section::before { content:''; position:absolute; width:600px; height:600px; border-radius:50%; background:radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 70%); top:-200px; right:-150px; pointer-events:none; }
        .giftovate-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .g-tag { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--teal); margin-bottom: 10px; }
        .g-title { font-family: 'Lora', serif; font-size: clamp(26px, 3vw, 38px); font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 18px; letter-spacing: -0.02em; }
        .g-body { font-size: 15px; color: rgba(255,255,255,0.58); line-height: 1.82; margin-bottom: 14px; }
        .g-body strong { color: rgba(255,255,255,0.88); font-weight: 600; }
        .g-body a { color: var(--teal); font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
        .glow-cards { display: flex; flex-direction: column; gap: 14px; }
        .glow-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(45,212,191,0.16); border-radius: 14px; padding: 22px 24px; display: flex; align-items: flex-start; gap: 16px; transition: border-color 0.25s, background 0.25s; }
        .glow-card:hover { border-color: rgba(45,212,191,0.42); background: rgba(45,212,191,0.04); }
        .glow-icon { width: 42px; height: 42px; border-radius: 10px; background: var(--teal-glow); border: 1px solid rgba(45,212,191,0.18); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
        .glow-card h4 { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .glow-card p { font-size: 13px; color: rgba(255,255,255,0.48); line-height: 1.62; margin-bottom: 10px; }
        .glow-link { display: inline-flex; align-items: center; gap: 5px; font-size: 12px; font-weight: 700; color: var(--teal); text-decoration: none; background: var(--teal-glow); padding: 5px 13px; border-radius: 50px; transition: background 0.2s; }
        .glow-link:hover { background: rgba(45,212,191,0.26); }
        .proto-badge { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.45); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 4px 12px; border-radius: 50px; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 8px; }

        /* VOLUNTEER */
        .volunteer-strip { background: var(--purple); border-radius: 24px; overflow: hidden; display: grid; grid-template-columns: 1fr 380px; }
        .volunteer-text { padding: 60px 52px; color: #fff; }
        .volunteer-text .section-title { color: #fff; margin-bottom: 16px; }
        .volunteer-text p { color: rgba(255,255,255,0.7); font-size: 16px; line-height: 1.8; margin-bottom: 32px; }
        .volunteer-img { overflow: hidden; }
        .volunteer-img img { width: 100%; height: 100%; object-fit: cover; display: block; filter: brightness(0.78); }

        /* COMMUNITY */
        .community-wrap { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .community-img-wrap { border-radius: 22px; overflow: hidden; box-shadow: 0 24px 64px rgba(0,0,0,0.1); }
        .community-img-wrap img { width: 100%; height: 440px; object-fit: cover; display: block; }
        .community-body { font-size: 16px; color: var(--muted); line-height: 1.82; margin-bottom: 32px; }
        .btn-whatsapp { background: #25D366; color: #fff; padding: 14px 26px; border-radius: 50px; font-size: 15px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; transition: background 0.2s, transform 0.2s; margin-bottom: 16px; }
        .btn-whatsapp:hover { background: #1aab52; transform: translateY(-2px); }
        .social-row { display: flex; gap: 10px; flex-wrap: wrap; }
        .btn-social { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 50px; font-size: 13px; font-weight: 600; text-decoration: none; border: 1.5px solid var(--border); color: var(--text); background: #fff; transition: border-color 0.2s, color 0.2s, background 0.2s; }
        .btn-social:hover { border-color: var(--teal); color: var(--teal); background: rgba(45,212,191,0.05); }

        /* FOUNDER */
        .founder-card { background: #fff; border: 1px solid var(--border); border-radius: 24px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.07); display: grid; grid-template-columns: 1fr 1fr; }
        .founder-img img { width: 100%; height: 100%; min-height: 500px; object-fit: cover; display: block; }
        .founder-content { padding: 56px 52px; display: flex; flex-direction: column; justify-content: center; }
        .founder-name { font-family: 'Lora', serif; font-size: 28px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
        .founder-role { font-size: 13px; color: var(--teal); font-weight: 600; margin-bottom: 28px; }
        .founder-content p { font-size: 15px; color: var(--muted); line-height: 1.85; margin-bottom: 14px; }
        .founder-quote { font-style: italic; color: var(--purple); font-size: 16px; border-left: 3px solid var(--teal); padding-left: 18px; margin-top: 8px; line-height: 1.72; }

        /* CONTACT */
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 680px; margin: 0 auto; }
        .contact-card { background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 28px; display: flex; align-items: flex-start; gap: 16px; transition: box-shadow 0.2s; }
        .contact-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.07); }
        .contact-icon { width: 46px; height: 46px; border-radius: 12px; background: rgba(45,212,191,0.1); border: 1px solid rgba(45,212,191,0.18); display: flex; align-items: center; justify-content: center; color: var(--teal); flex-shrink: 0; }
        .contact-card h3 { font-size: 15px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
        .contact-card a { font-size: 14px; color: var(--teal); text-decoration: none; }

        /* FOOTER */
        .footer { background: var(--navy); color: #fff; padding: 72px 28px 32px; }
        .footer-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 52px; }
        .footer-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .footer-brand img { width: 34px; height: 34px; border-radius: 50%; object-fit: cover; }
        .footer-brand span { font-weight: 700; font-size: 15px; }
        .footer-tagline { font-size: 13px; color: rgba(255,255,255,0.38); line-height: 1.78; margin-bottom: 22px; }
        .footer-socials { display: flex; gap: 9px; flex-wrap: wrap; }
        .f-social { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.55); text-decoration: none; transition: background 0.2s, color 0.2s, border-color 0.2s; }
        .f-social:hover { background: var(--teal-glow); color: var(--teal); border-color: rgba(45,212,191,0.28); }
        .footer h4 { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 20px; }
        .footer ul { list-style: none; }
        .footer ul li { margin-bottom: 11px; }
        .footer ul li a { color: rgba(255,255,255,0.58); text-decoration: none; font-size: 14px; transition: color 0.2s; }
        .footer ul li a:hover { color: var(--teal); }
        .footer-bottom { max-width: 1200px; margin: 0 auto; border-top: 1px solid rgba(255,255,255,0.07); padding-top: 28px; text-align: center; font-size: 13px; color: rgba(255,255,255,0.22); }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .hero-content { grid-template-columns: 1fr; gap: 40px; padding: 60px 20px; }
          .pillars-inner { grid-template-columns: repeat(2,1fr); }
          .bento-grid { grid-template-columns: 1fr; }
          .bento-card.tall, .bento-card.wide { grid-row: auto; grid-column: auto; }
          .split-card { grid-template-columns: 1fr; }
          .split-img img { min-height: 240px; }
          .split-content { padding: 36px 28px; }
          .giftovate-inner { grid-template-columns: 1fr; gap: 48px; }
          .volunteer-strip { grid-template-columns: 1fr; }
          .volunteer-img { height: 220px; }
          .volunteer-text { padding: 44px 28px; }
          .community-wrap { grid-template-columns: 1fr; }
          .community-img-wrap img { height: 260px; }
          .founder-card { grid-template-columns: 1fr; }
          .founder-img img { min-height: 280px; }
          .founder-content { padding: 36px 28px; }
          .contact-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 560px) {
          .section { padding: 64px 20px; }
          .hero-btns { flex-direction: column; }
          .pillars-inner { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ══ NAV ══ */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="/" className="nav-brand">
            <img src={logo} alt="Beyond Sweat Foundation Logo" />
            <span>Beyond Sweat Foundation</span>
          </a>
          <div className="nav-links">
            <a href="#what-we-do">What We Do</a>
            <a href="#campaign">Campaign</a>
            <a href="/events">Events</a>
            <a href="/blog">Blog</a>
            <a href="/faq">FAQs</a>
            <a href="#contact">Contact</a>
            <a href="http://go.beyondsweat.org/J7ws6M" target="_blank" rel="noopener noreferrer" className="nav-cta">Take the Survey</a>
          </div>
          <button className="hamburger" aria-label="Toggle menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {[
              { href: "#what-we-do", label: "What We Do" },
              { href: "#campaign", label: "Campaign" },
              { href: "/events", label: "Events" },
              { href: "/blog", label: "Blog" },
              { href: "/news", label: "News" },
              { href: "/faq", label: "FAQs" },
              { href: "#contact", label: "Contact" },
              { href: "http://go.beyondsweat.org/J7ws6M", label: "Take the Survey →", target: "_blank" },
            ].map(link => (
              <a key={link.href} href={link.href} target={(link as any).target}
                rel={(link as any).target ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ══ HERO ══ */}
      <section id="home" aria-label="Homepage hero">
        <div className="hero-wrap">
          {heroImages.map((img, i) => (
            <div key={i} className="hero-bg" style={{ backgroundImage: `url(${img})`, opacity: i === currentHeroImage ? 1 : 0 }} />
          ))}
          <div className="hero-overlay" />
          <div className="hero-content">
            <div>
              <div className="hero-badge">
                <span className="pulse-dot" />
                Climate · Health · Justice · Nigeria
              </div>
              <h1>Confronting <em>Hyperhidrosis</em><br />in a Warming World</h1>
              <p className="hero-sub">
                Beyond Sweat Foundation is Nigeria's first hyperhidrosis-focused nonprofit — combining lived experience, advocacy, and community power to ensure no one suffers in silence.
              </p>
              <div className="hero-btns">
                <a href="http://go.beyondsweat.org/J7ws6M" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Take the Spotlight Survey
                </a>
                <a href="#volunteer" className="btn-secondary">Volunteer / Join</a>
              </div>
              <div className="hero-ticker">
                <span className="ticker-dot" /><span>Awareness</span>
                <span className="ticker-dot" /><span>Advocacy</span>
                <span className="ticker-dot" /><span>Community</span>
                <span className="ticker-dot" /><span>Education</span>
                <span className="ticker-dot" /><span>Research &amp; Policy</span>
              </div>
              <div className="hero-partner">
                Innovation partner:{" "}
                <a href="https://www.giftovate.world" target="_blank" rel="noopener noreferrer" className="partner-link">
                  Giftovate Therapeutics Ltd
                </a>
                {" "}— building SweatSmart &amp; thermoelectric wearables for hyperhidrosis care.
              </div>
            </div>
            <div className="data-card">
              <h3><span className="pulse-dot" />Join Africa's First Clinical Dataset</h3>
              <p>We are building the continent's first comprehensive hyperhidrosis dataset — combining community survey responses and SweatSmart app data to drive policy, research, and funding across Africa.</p>
              <p className="note">Takes 3–5 minutes · Completely anonymous · Your response matters.</p>
              <a href="http://go.beyondsweat.org/J7ws6M" target="_blank" rel="noopener noreferrer" className="btn-teal-sm">
                Take the Spotlight Survey <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PILLARS BAR ══ */}
      <div className="pillars-bar">
        <div className="pillars-inner">
          {[
            { label: "Awareness", desc: "Breaking silence around hyperhidrosis in Nigeria & Africa" },
            { label: "Advocacy", desc: "Pushing for clinical recognition and dignified healthcare" },
            { label: "Community", desc: "Safe spaces where no one suffers alone" },
            { label: "Research", desc: "Africa's first continental hyperhidrosis dataset" },
          ].map((p, i) => (
            <SlideUp key={p.label} delay={i * 80}>
              <div className="pillar-item">
                <div className="pillar-label">{p.label}</div>
                <div className="pillar-desc">{p.desc}</div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>

      {/* ══ WHAT WE DO — BENTO ══ */}
      <section id="what-we-do" className="section">
        <div className="container">
          <SlideUp>
            <div className="section-header">
              <p className="section-tag">Our Mission</p>
              <h2 className="section-title">What Beyond Sweat Foundation Does</h2>
              <p className="section-sub">Five distinct pillars — one purpose: ensuring every person living with hyperhidrosis in Nigeria and across Africa is seen, heard, and supported.</p>
            </div>
          </SlideUp>

          <div className="bento-grid">
            {/* Tall — Awareness */}
            <SlideLeft>
              <div className="bento-card tall" style={{ height: "100%" }}>
                <div className="bento-accent" />
                <div className="bento-img">
                  <img src={schoolAwarenessImage} alt="Beyond Sweat Foundation awareness campaign at a Nigerian school" />
                </div>
                <div className="bento-icon">📣</div>
                <span className="bento-tag">Pillar 1</span>
                <h3 className="bento-title">Awareness</h3>
                <p className="bento-desc">Hyperhidrosis is real, common, and life-affecting — but most Nigerians have never heard of it. We run targeted campaigns across media, events, and communities to bring this condition into public conversation and end the stigma.</p>
                <a href="/school-awareness" className="bento-link">Learn more <ChevronRight size={14} /></a>
              </div>
            </SlideLeft>

            {/* Advocacy */}
            <SlideUp delay={100}>
              <div className="bento-card">
                <div className="bento-icon">✊</div>
                <span className="bento-tag">Pillar 2</span>
                <h3 className="bento-title">Advocacy</h3>
                <p className="bento-desc">We push for hyperhidrosis to be included in Nigerian medical school curricula and recognised by health systems. Nobody should have to beg a doctor to be believed.</p>
                <a href="https://c.org/cM7H8Z96Dr" target="_blank" rel="noopener noreferrer" className="bento-link">Support our petition <ChevronRight size={14} /></a>
              </div>
            </SlideUp>

            {/* Community — dark */}
            <SlideRight delay={140}>
              <div className="bento-card dark">
                <div className="bento-icon">🤝</div>
                <span className="bento-tag">Pillar 5</span>
                <h3 className="bento-title">Community Support</h3>
                <p className="bento-desc">Living with hyperhidrosis can feel deeply isolating. We build safe spaces — online and offline — where people find understanding and realise they are not alone.</p>
                <a href="https://chat.whatsapp.com/BKgrDMOttm76Jva6fSZUMi?mode=ac_t" target="_blank" rel="noopener noreferrer" className="bento-link">Join the community <ChevronRight size={14} /></a>
              </div>
            </SlideRight>

            {/* Education — wide */}
            <SlideLeft delay={120}>
              <div className="bento-card wide">
                <div className="bento-accent" />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "center" }}>
                  <div>
                    <div className="bento-icon">🎓</div>
                    <span className="bento-tag">Pillar 3</span>
                    <h3 className="bento-title">Education</h3>
                    <p className="bento-desc">Climate-aware education programs in schools and communities — workshops, resources, and breaking the stigma around hyperhidrosis while connecting it to environmental health.</p>
                    <a href="/school-awareness" className="bento-link">Learn more <ChevronRight size={14} /></a>
                  </div>
                  <div className="bento-img" style={{ marginBottom: 0 }}>
                    <img src={researchPolicyImage} alt="Beyond Sweat Foundation education and research program" />
                  </div>
                </div>
              </div>
            </SlideLeft>

            {/* Research */}
            <SlideRight delay={180}>
              <div className="bento-card">
                <div className="bento-icon">🔬</div>
                <span className="bento-tag">Pillar 4</span>
                <h3 className="bento-title">Research &amp; Policy</h3>
                <p className="bento-desc">We combine community stories with scientific evidence to produce research that drives national and global recognition of hyperhidrosis as a climate-linked health condition.</p>
                <a href="/research-policy" className="bento-link">Learn more <ChevronRight size={14} /></a>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══ CAMPAIGN ══ */}
      <section id="campaign" className="section section-alt">
        <div className="container">
          <SlideUp>
            <div className="section-header center">
              <p className="section-tag">Active Campaign</p>
              <h2 className="section-title">Teach Hyperhidrosis in Nigerian Medical Schools</h2>
            </div>
          </SlideUp>
          <div className="split-card">
            <SlideLeft>
              <div className="split-img">
                <img src={campaignImage} alt="Nigerian medical students advocating to include hyperhidrosis in medical school curriculum" />
              </div>
            </SlideLeft>
            <SlideRight>
              <div className="split-content">
                <p className="section-tag">Advocacy in Action</p>
                <h2 className="section-title">Train Our Doctors: Make Hyperhidrosis Visible</h2>
                <p>Too many people suffer in silence because doctors don't recognise hyperhidrosis. We are demanding that Nigerian medical schools include it in their curriculum — improving diagnosis, care, and dignity for thousands.</p>
                <p>By educating future doctors, we bridge the gap between patient experience and clinical knowledge. Join us.</p>
                <a href="https://c.org/cM7H8Z96Dr" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Support the Campaign <ExternalLink size={15} />
                </a>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══ SPOTLIGHT ══ */}
      <section id="spotlight" className="section">
        <div className="container">
          <div className="split-card">
            <SlideRight>
              <div className="split-content">
                <p className="section-tag">Spotlight Africa</p>
                <h2 className="section-title">Africa's First Hyperhidrosis Survey</h2>
                <p>We are building the first Pan-African hyperhidrosis dataset — combining community survey data and SweatSmart app insights to create localised evidence needed for policy, clinical research, and funding across the continent.</p>
                <p>Your anonymous response takes just 3–5 minutes and helps bridge a critical data gap for African healthcare.</p>
                <a href="http://go.beyondsweat.org/J7ws6M" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Take the Survey <ExternalLink size={15} />
                </a>
              </div>
            </SlideRight>
            <SlideLeft>
              <div className="split-img">
                <img src={spotlightImage} alt="Beyond Sweat Foundation team collecting hyperhidrosis data across Nigeria for Spotlight Africa" />
              </div>
            </SlideLeft>
          </div>
        </div>
      </section>

      {/* ══ GIFTOVATE DARK SECTION ══ */}
      <section id="sweatsmart" className="giftovate-section">
        <div className="giftovate-inner">
          <SlideLeft>
            <div>
              <p className="g-tag">Innovation Partnership</p>
              <h2 className="g-title">Technology Powered by Giftovate Therapeutics Ltd</h2>
              <p className="g-body">
                Beyond Sweat Foundation partners with{" "}
                <a href="https://www.giftovate.world" target="_blank" rel="noopener noreferrer">Giftovate Therapeutics Ltd</a>
                {" "}— a health innovation company founded by Gifty Aruwajoye — to bring cutting-edge technology to the hyperhidrosis community.
              </p>
              <p className="g-body">
                The Foundation's <strong>community data and advocacy</strong> shapes what Giftovate builds. Giftovate's <strong>technology</strong> serves the Foundation's community. Two distinct missions. One shared purpose.
              </p>
              <a href="https://www.giftovate.world" target="_blank" rel="noopener noreferrer" className="btn-teal-sm" style={{ marginTop: 10 }}>
                Visit Giftovate Therapeutics <ExternalLink size={15} />
              </a>
            </div>
          </SlideLeft>

          <SlideRight>
            <div className="glow-cards">
              <div className="glow-card">
                <div className="glow-icon">📱</div>
                <div>
                  <h4>SweatSmart Web App</h4>
                  <p>Track symptoms, get climate alerts, and manage your condition from any browser — free for the community.</p>
                  <a href="https://www.sweatsmart.guru" target="_blank" rel="noopener noreferrer" className="glow-link">
                    Open App <ExternalLink size={11} />
                  </a>
                </div>
              </div>
              <div className="glow-card">
                <div className="glow-icon">🤖</div>
                <div>
                  <h4>SweatSmart Android</h4>
                  <p>Offline access and enhanced features — built for Nigeria's climate. Download the APK directly.</p>
                  <a href="https://github.com/Ebuny5/sweatsmart-apk/releases/download/v1.0.0/SweatSmart.apk" target="_blank" rel="noopener noreferrer" className="glow-link">
                    Download APK <Download size={11} />
                  </a>
                </div>
              </div>
              <div className="glow-card">
                <div className="glow-icon">⚡</div>
                <div>
                  <div className="proto-badge">In Development</div>
                  <h4>Thermoelectric Wearables</h4>
                  <p>Non-invasive wearable devices designed to regulate body temperature and reduce excessive sweating — prototype stage at Giftovate Therapeutics.</p>
                </div>
              </div>
            </div>
          </SlideRight>
        </div>
      </section>

      {/* ══ VOLUNTEER ══ */}
      <section id="volunteer" className="section section-alt">
        <div className="container">
          <SlideUp>
            <div className="volunteer-strip">
              <div className="volunteer-text">
                <p className="section-tag" style={{ color: "rgba(255,255,255,0.4)" }}>Get Involved</p>
                <h2 className="section-title">Volunteer With Us</h2>
                <p>Whether you're a healthcare professional, educator, or passionate advocate — there is a place for you in this movement. Join us in building awareness, supporting individuals, and driving systemic change.</p>
                <a href="https://forms.gle/M9Rjbdaq4CydJ7dq8" target="_blank" rel="noopener noreferrer" className="btn-teal-sm">
                  Apply to Volunteer <ExternalLink size={15} />
                </a>
              </div>
              <div className="volunteer-img">
                <img src={volunteerPlaceholder} alt="Beyond Sweat Foundation volunteers and community members across Nigeria" />
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ══ COMMUNITY ══ */}
      <section id="community-support" className="section">
        <div className="container">
          <div className="community-wrap">
            <SlideLeft>
              <div className="community-img-wrap">
                <img src={communityPlaceholder} alt="Hyperhidrosis Warriors community members connecting and supporting each other" />
              </div>
            </SlideLeft>
            <SlideRight>
              <div>
                <p className="section-tag">Community</p>
                <h2 className="section-title">Become a Member of the Hyperhidrosis Warriors Community</h2>
                <p className="community-body">
                  Join our WhatsApp community where people share experiences, coping strategies, and victories. Find understanding, acceptance, and practical support from those who truly get it. You are not alone.
                </p>
                <div style={{ marginBottom: 16 }}>
                  <a href="https://chat.whatsapp.com/BKgrDMOttm76Jva6fSZUMi?mode=ac_t" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                    <MessageCircle size={20} /> Join WhatsApp Community
                  </a>
                </div>
                <div className="social-row">
                  <a href="https://instagram.com/beyondsweatfoundation" target="_blank" rel="noopener noreferrer" className="btn-social"><Instagram size={15} /> Instagram</a>
                  <a href="https://facebook.com/beyondsweatfoundation" target="_blank" rel="noopener noreferrer" className="btn-social"><Facebook size={15} /> Facebook</a>
                  <a href="https://x.com/beyondsweatfoun" target="_blank" rel="noopener noreferrer" className="btn-social"><Twitter size={15} /> X</a>
                  <a href="https://www.linkedin.com/company/beyond-sweat-foundation/" target="_blank" rel="noopener noreferrer" className="btn-social"><Linkedin size={15} /> LinkedIn</a>
                  <a href="https://youtube.com/@beyondsweatfoundation" target="_blank" rel="noopener noreferrer" className="btn-social"><Youtube size={15} /> YouTube</a>
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══ NEWSLETTER ══ */}
      <NewsletterSignup />

      {/* ══ FOUNDER ══ */}
      <section id="founder" className="section section-alt">
        <div className="container">
          <SlideUp>
            <div className="section-header center">
              <p className="section-tag">Leadership</p>
              <h2 className="section-title">Meet the Founder</h2>
              <p className="section-sub">Turning personal struggle into collective empowerment</p>
            </div>
          </SlideUp>
          <div className="founder-card">
            <SlideLeft>
              <div className="founder-img">
                <img src={founderImage} alt="Gifty Aruwajoye — Founder of Beyond Sweat Foundation and CEO of Giftovate Therapeutics Ltd" />
              </div>
            </SlideLeft>
            <SlideRight>
              <div className="founder-content">
                <h3 className="founder-name">Gifty Aruwajoye</h3>
                <p className="founder-role">Founder, Beyond Sweat Foundation · CEO, Giftovate Therapeutics Ltd</p>
                <p>Gifty knows what it feels like to sit in a classroom, avoid handshakes, or miss opportunities — not because of lack of ability, but because of a condition most people around her had never heard of. Growing up in Nigeria's hot climate with hyperhidrosis, she experienced the silence, the shame, and the absence of answers firsthand.</p>
                <p>That experience became her fuel. She founded Beyond Sweat Foundation to build the support system she once desperately needed — rooted in awareness, advocacy, and community. Separately, she founded Giftovate Therapeutics Ltd to innovate the solutions the medical world hasn't yet delivered.</p>
                <p>Gifty is not just running organisations — she is living proof that the people most affected by a problem are often best positioned to solve it.</p>
                <p className="founder-quote">"My journey taught me that visibility is power. When we speak up, we make room for understanding, inclusion, and change."</p>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="section">
        <div className="container">
          <SlideUp>
            <div className="section-header center">
              <p className="section-tag">Contact</p>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-sub">Have questions or want to learn more? We'd love to hear from you.</p>
            </div>
          </SlideUp>
          <div className="contact-grid">
            <SlideLeft delay={80}>
              <div className="contact-card">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <h3>Email Us</h3>
                  <a href="mailto:info@beyondsweat.org">info@beyondsweat.org</a>
                </div>
              </div>
            </SlideLeft>
            <SlideRight delay={80}>
              <div className="contact-card">
                <div className="contact-icon"><Phone size={20} /></div>
                <div>
                  <h3>Call Us</h3>
                  <a href="tel:+2348112289385">+234 811 228 9385</a>
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src={logo} alt="Beyond Sweat Foundation" />
              <span>Beyond Sweat Foundation</span>
            </div>
            <p className="footer-tagline">Climate-aware health advocacy for people with hyperhidrosis across Nigeria, Africa, and beyond.</p>
            <div className="footer-socials">
              <a href="https://instagram.com/beyondsweatfoundation" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="Instagram"><Instagram size={15} /></a>
              <a href="https://facebook.com/beyondsweatfoundation" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="Facebook"><Facebook size={15} /></a>
              <a href="https://x.com/beyondsweatfoun" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="X"><Twitter size={15} /></a>
              <a href="https://www.linkedin.com/company/beyond-sweat-foundation/" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="LinkedIn"><Linkedin size={15} /></a>
              <a href="https://youtube.com/@beyondsweatfoundation" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="YouTube"><Youtube size={15} /></a>
            </div>
          </div>
          <div>
            <h4>Organisation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="#what-we-do">What We Do</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="https://www.giftovate.world" target="_blank" rel="noopener noreferrer">Giftovate Therapeutics ↗</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="/events">Events</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="https://ebuny.substack.com/p/when-data-is-invisible-people-are" target="_blank" rel="noopener noreferrer">When Data Is Invisible ↗</a></li>
              <li><a href="https://medium.com/@giftyaruwajoye/breaking-the-silence-why-hyperhidrosis-education-belongs-in-nigerias-medical-curriculum-69585cf8d78a" target="_blank" rel="noopener noreferrer">Breaking the Silence ↗</a></li>
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
