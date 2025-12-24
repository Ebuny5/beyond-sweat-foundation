import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, ExternalLink, Download, MessageCircle, Play, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import founderImage from "@/assets/founder.jpg";
import storyImage from "@/assets/campaign-banner.jpg";
import campaignImage from "@/assets/team.png";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";
import heroBg5 from "@/assets/hero-bg-5.jpg";
import spotlightImage from "@/assets/spotlight-nigeria.jpg";
import schoolAwarenessImage from "@/assets/school-awareness.jpg";
import researchPolicyImage from "@/assets/research-policy.jpg";
import volunteerPlaceholder from "@/assets/volunteer-placeholder.jpg";
import communityPlaceholder from "@/assets/community-placeholder.jpg";
import logo from "@/assets/logo.png";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [heroBg, heroBg2, heroBg3, heroBg4, heroBg5];

  // Hero slideshow
  useState(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-primary-dark shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl">
              <img src={logo} alt="Beyond Sweat Foundation Logo" className="w-10 h-10 rounded-full object-cover" />
              <span className="hidden sm:inline">Beyond Sweat Foundation</span>
              <span className="sm:hidden">Beyond Sweat</span>
            </a>

            {/* Mobile Menu Button - Now shown on all devices */}
            <button 
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu - Now shown on all devices */}
          {mobileMenuOpen && (
            <ul className="mt-4 space-y-3 pb-4 text-white">
              <li><a href="#home" className="block hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="block hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#what-we-do" className="block hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>What We Do</a></li>
              <li><a href="/events" className="block hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Events</a></li>
              <li><a href="/blog" className="block hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</a></li>
              <li><a href="/news" className="block hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>News</a></li>
              <li><a href="#testimonials" className="block hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</a></li>
              <li><a href="/faq" className="block hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQs</a></li>
              <li><a href="#contact" className="block hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 118, 110, 0.48), rgba(0, 0, 0, 0.18)), url(${heroImages[currentHeroImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-white z-10 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Confronting Hyperhidrosis in a Warming World
          </h1>
          
          <p className="text-lg md:text-xl mb-6 opacity-95">
            Tackling climate-driven health challenges and deepening access to care.
          </p>
          
          <p className="text-base md:text-lg mb-4 max-w-4xl opacity-92">
            Beyond Sweat Foundation combines lived experience, education, advocacy, and climate-aware innovation to support people with hyperhidrosis across Nigeria, Africa, and the global community.
          </p>
          
          <p className="text-base md:text-lg mb-8 max-w-4xl opacity-90">
            Rising temperatures intensify symptoms, yet the condition remains under-diagnosed and dismissed. We build evidence, train communities, and push for clinical recognition so people can access dignified care and climate-resilient solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white font-semibold text-base px-6 py-6"
              asChild
            >
              <a href="https://forms.gle/spotlightsurvey" target="_blank" rel="noopener noreferrer">
                Take the Spotlight Survey
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/20 bg-white/10 text-white hover:bg-white/20 font-semibold text-base px-6 py-6"
              asChild
            >
              <a href="#volunteer">Volunteer / Join</a>
            </Button>
          </div>
          
          <div className="text-sm opacity-85">
            Beta: SweatSmart app • Pilot volunteers wanted • Petition to include hyperhidrosis in medical curricula
          </div>
        </div>
      </section>

      {/* Watch My Story Section */}
      <section id="story" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow border-2 border-primary/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative min-h-[300px]">
                  <img 
                    src={storyImage} 
                    alt="They Were Sweating, I Was Drowning" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-primary mb-4">Watch My Story</h2>
                  <p className="text-muted-foreground mb-6">
                    Discover my journey with hyperhidrosis and how it inspired me to create Beyond Sweat Foundation — 
                    a support system I once wished existed.
                  </p>
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary-dark" asChild>
                    <a href="https://youtu.be/CVOXL4lWMBo" target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2" size={18} />
                      Watch on YouTube
                    </a>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section id="campaign" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Teach Hyperhidrosis in Nigerian Medical Schools</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Improve diagnosis, care and dignity
              </p>
            </div>
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative">
                <img 
                  src={campaignImage} 
                  alt="Teach Hyperhidrosis Campaign" 
                  className="w-full h-auto"
                />
              </div>
              <CardContent className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10">
                <h3 className="text-2xl font-bold text-primary mb-4">Train Our Doctors: Make Hyperhidrosis Visible</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Too many people suffer in silence because medical professionals don't recognize hyperhidrosis. 
                  We're demanding that medical schools include hyperhidrosis in their curriculum.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  By educating future doctors, we can improve diagnosis, ensure better care, and restore dignity 
                  to those living with this condition. Join us in making hyperhidrosis visible in Nigerian medical education.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-white"
                  asChild
                >
                  <a href="https://c.org/cM7H8Z96Dr" target="_blank" rel="noopener noreferrer">
                    Support the Campaign
                    <ExternalLink className="ml-2" size={20} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* SweatSmart Section */}
      <section id="sweatsmart" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">SweatSmart</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your climate-aware companion for managing hyperhidrosis
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Web App</h3>
                <p className="text-muted-foreground mb-6">
                  Access SweatSmart from any browser. Track symptoms, get climate alerts, and manage your condition.
                </p>
                <Button className="w-full" asChild>
                  <a href="https://www.sweatsmart.guru" target="_blank" rel="noopener noreferrer">
                    Open Web App
                    <ExternalLink className="ml-2" size={18} />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-primary border-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-4xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Android App</h3>
                <p className="text-muted-foreground mb-6">
                  Download the native Android app for offline access and enhanced features.
                </p>
                <Button className="w-full bg-primary hover:bg-primary-dark" asChild>
                  <a 
                    href="https://github.com/Ebuny5/sweatsmart-apk/releases/download/v1.0.0/SweatSmart.apk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Download APK
                    <Download className="ml-2" size={18} />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Features</h3>
                <ul className="text-left text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Daily sweating triggers & patterns</li>
                  <li>Weather, stress, and food correlations</li>
                  <li>Symptom severity over time</li>
                  <li>Progress reports for your doctor</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building a comprehensive ecosystem of support and advocacy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* School Awareness Campaign */}
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer" onClick={() => window.location.href = '/school-awareness'}>
              <div className="relative h-48">
                <img 
                  src={schoolAwarenessImage} 
                  alt="School Awareness Campaign" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
                  Education & Awareness
                </h3>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Climate-aware education programs in schools and communities. We deliver workshops, create resources, 
                  and break stigma around hyperhidrosis while connecting it to environmental health challenges.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/school-awareness">
                    Learn More
                    <ExternalLink className="ml-2" size={18} />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Research & Policy */}
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer" onClick={() => window.location.href = '/research-policy'}>
              <div className="relative h-48">
                <img 
                  src={researchPolicyImage} 
                  alt="Research & Policy" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
                  Research & Policy
                </h3>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  We research, advocate, and shape policy for a healthier, climate-resilient future. Combining 
                  community stories with scientific research to drive national and global recognition.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/research-policy">
                    Learn More
                    <ExternalLink className="ml-2" size={18} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Spotlight Nigeria Section */}
      <section id="spotlight" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Spotlight Nigeria</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building Nigeria's first comprehensive hyperhidrosis dataset
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow border-2 border-primary">
              <div className="relative h-64">
                <img 
                  src={spotlightImage} 
                  alt="Spotlight Nigeria - Data Collection & Research" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 right-6 text-3xl font-bold text-white">
                  Data Collection & Research
                </h3>
              </div>
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Building Nigeria's first comprehensive hyperhidrosis dataset through the Spotlight survey 
                  and SweatSmart app. Evidence drives policy, clinical research, and funding.
                </p>
                <p className="text-muted-foreground mb-6">
                  Your anonymous survey response will inform policy, advocacy, and clinical research. 
                  Taking just 3 minutes of your time can create lasting impact for our community.
                </p>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark" 
                  asChild
                >
                  <a href="https://forms.gle/zX2uHieyn1aw9xm39" target="_blank" rel="noopener noreferrer">
                    Take the Survey
                    <ExternalLink className="ml-2" size={20} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Volunteer With Us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Be part of the movement that's changing lives across Nigeria and beyond
              </p>
            </div>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src={volunteerPlaceholder} 
                  alt="Volunteer with Beyond Sweat Foundation" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
              </div>
              <CardContent className="p-8 md:p-12 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you're a healthcare professional, educator, or passionate advocate, there's a place 
                  for you in our community. Join us in building awareness, supporting individuals, and driving 
                  systemic change.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-white"
                  asChild
                >
                  <a href="https://forms.gle/M9Rjbdaq4CydJ7dq8" target="_blank" rel="noopener noreferrer">
                    Apply to Volunteer
                    <ExternalLink className="ml-2" size={20} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Support Section */}
      <section id="community-support" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Community Support</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect, share, and find support from people who truly understand
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow border-2 border-accent">
              <div className="relative h-64">
                <img 
                  src={communityPlaceholder} 
                  alt="Join Our Community" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent"></div>
              </div>
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold text-primary mb-6 mt-4">Join Our Community</h3>
                <p className="text-muted-foreground mb-6">
                  Join our WhatsApp community where people share experiences, coping strategies, and victories. 
                  Find understanding, acceptance, and practical support from those who truly get it.
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90" asChild>
                    <a href="https://chat.whatsapp.com/BKgrDMOttm76Jva6fSZUMi?mode=ac_t" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2" size={20} />
                      Join WhatsApp Community
                    </a>
                  </Button>
                  <div className="flex gap-3 justify-center flex-wrap">
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://instagram.com/beyondsweatfoundation" target="_blank" rel="noopener noreferrer">
                        <Instagram className="mr-2" size={20} />
                        Instagram
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://facebook.com/beyondsweatfoundation" target="_blank" rel="noopener noreferrer">
                        <Facebook className="mr-2" size={20} />
                        Facebook
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://x.com/beyondsweatfoun" target="_blank" rel="noopener noreferrer">
                        <Twitter className="mr-2" size={20} />
                        X
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Voices (Testimonials) Section */}
      <section id="testimonials" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Community Voices</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Real stories from our community members
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">👤</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Bernard Adewumi</h3>
                    <p className="opacity-80">Community Member</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed opacity-90 italic">
                  "Finding Beyond Sweat Foundation has been life-changing. For years, I struggled with 
                  hyperhidrosis in silence, thinking I was alone. This community showed me I'm not alone, 
                  and the resources provided through SweatSmart have helped me manage my condition better 
                  than I ever thought possible. Thank you for creating this space where we can share our 
                  experiences and support each other."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Meet the Founder</h2>
              <p className="text-xl text-muted-foreground">Turning personal struggle into collective empowerment</p>
            </div>
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative min-h-[400px]">
                  <img 
                    src={founderImage} 
                    alt="Gifty Aruwajoye - Founder of Beyond Sweat Foundation" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <h3 className="text-3xl font-bold text-primary mb-2">Meet Gifty Aruwajoye</h3>
                  <p className="text-lg text-accent mb-4">Founder, Beyond Sweat Foundation</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Growing up in Africa's hot climate, Gifty experienced firsthand the challenges of living with hyperhidrosis — 
                    a condition that made even simple tasks feel isolating. Instead of staying silent, she turned her personal 
                    struggle into purpose.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Through Beyond Sweat Foundation, Gifty is transforming awareness and care for hyperhidrosis by combining 
                    lived experience, community education, and climate-aware health innovation. Her vision is to ensure that 
                    no one living with excessive sweating feels ashamed, unseen, or unsupported — in Nigeria, across Africa, 
                    and around the world.
                  </p>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "My journey taught me that visibility is power. When we speak up, we make room for understanding, inclusion, and change."
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
                        <a 
                          href="mailto:info@beyondsweat.life" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@beyondsweat.life
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
                        <a 
                          href="tel:+2348112289385" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +234 811 228 9385
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Ready to Connect?</h3>
                    <p className="text-muted-foreground mb-6">
                      Whether you're seeking support, want to volunteer, or are interested in partnering 
                      with us, we're here to help. Reach out today and join our mission.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" asChild>
                        <a href="mailto:info@beyondsweat.life">
                          Send Email
                        </a>
                      </Button>
                      <Button className="bg-primary hover:bg-primary-dark" asChild>
                        <a href="tel:+2348112289385">
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-white font-bold">
                  BS
                </div>
                <h3 className="text-lg font-bold">Beyond Sweat Foundation</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Climate-aware health advocacy for people with hyperhidrosis across Nigeria, Africa, and beyond.
              </p>
            </div>

            {/* Organization Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Organization</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#what-we-do" className="text-gray-400 hover:text-white transition-colors">What We Do</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="/news" className="text-gray-400 hover:text-white transition-colors">News</a></li>
                <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Beyond Sweat Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
