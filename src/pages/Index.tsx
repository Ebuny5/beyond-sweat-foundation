import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, ExternalLink, Download, MessageCircle, Play, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import founderImage from "@/assets/founder.jpg";
import storyImage from "@/assets/campaign-banner.jpg";
import campaignImage from "@/assets/team.png";
import heroBg from "@/assets/hero-bg.jpg";
import spotlightImage from "@/assets/spotlight-nigeria.jpg";
import schoolAwarenessImage from "@/assets/school-awareness.jpg";
import researchPolicyImage from "@/assets/research-policy.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-primary-dark shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-white font-bold">
                BS
              </div>
              <span className="hidden sm:inline">Beyond Sweat Foundation</span>
              <span className="sm:hidden">Beyond Sweat</span>
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6 text-white">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#what-we-do" className="hover:text-accent transition-colors">What We Do</a></li>
              <li><a href="/events" className="hover:text-accent transition-colors">Events</a></li>
              <li><a href="/blog" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="/news" className="hover:text-accent transition-colors">News</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="/faq" className="hover:text-accent transition-colors">FAQs</a></li>
              <li><a href="#contact" className="bg-primary hover:bg-primary-light px-4 py-2 rounded transition-colors">Contact</a></li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <ul className="md:hidden mt-4 space-y-3 pb-4 text-white">
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
          backgroundImage: `linear-gradient(rgba(91, 33, 182, 0.8), rgba(126, 34, 206, 0.7)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center text-white z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            🌍 Climate • Health • Justice
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Lives in a<br />Warming World
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Transforming how we address hyperhidrosis through climate-aware solutions, 
            community advocacy, and systemic change. Join us in the fight for health equity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform text-lg px-8 py-6"
              asChild
            >
              <a href="#sweatsmart">Explore SweatSmart</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              asChild
            >
              <a href="#community">Join Community</a>
            </Button>
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
                  <h3 className="text-3xl font-bold text-primary mb-2">Gifty Aruwajoye</h3>
                  <p className="text-lg text-accent mb-4">Founder & Executive Director</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Living with hyperhidrosis in Nigeria's rising temperatures, I experienced firsthand the 
                    isolation, stigma, and lack of support that many face daily.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond Sweat Foundation was born from this lived experience—a commitment to ensure no one 
                    faces this journey alone. We're building the community and resources I wish existed, 
                    combining climate awareness, health advocacy, and systemic change.
                  </p>
                </CardContent>
              </div>
            </Card>
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
                    Hear about my journey living with hyperhidrosis and why I founded Beyond Sweat Foundation 
                    to create the support system I wish existed.
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

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Confronting Hyperhidrosis in a Warming World: Tackling Climate and Health Inequities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Addressing hyperhidrosis in the context of rising temperatures and health inequity
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  Beyond Sweat Foundation combines lived experience, community education, and climate-aware 
                  innovation to support people with hyperhidrosis across Nigeria, Africa and the wider global community.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Rising temperatures intensify symptoms, yet the condition remains under-diagnosed and dismissed. 
                  We're building a movement that connects climate adaptation, health equity, and systemic change.
                </p>
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
                <Button className="w-full bg-accent hover:bg-accent/90" asChild>
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
                <ul className="text-left text-muted-foreground space-y-2">
                  <li>✅ Daily sweating triggers & patterns</li>
                  <li>✅ Weather, stress, and food correlations</li>
                  <li>✅ Symptom severity over time</li>
                  <li>✅ Progress reports for your doctor</li>
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

            {/* Community Support */}
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <MessageCircle size={80} className="text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Community Support</h3>
                <p className="text-muted-foreground mb-4">
                  Join our WhatsApp community where people share experiences, coping strategies, and victories. 
                  Find understanding, acceptance, and practical support from those who truly get it.
                </p>
                <div className="space-y-2">
                  <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                    <a href="https://chat.whatsapp.com/BKgrDMOttm76Jva6fSZUMi?mode=ac_t" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2" size={18} />
                      Join WhatsApp
                    </a>
                  </Button>
                  <div className="flex gap-2 justify-center pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://instagram.com/beyondsweatfoundation" target="_blank" rel="noopener noreferrer">
                        <Instagram size={18} />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://facebook.com/beyondsweatfoundation" target="_blank" rel="noopener noreferrer">
                        <Facebook size={18} />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://x.com/beyondsweatfoun" target="_blank" rel="noopener noreferrer">
                        <Twitter size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
      <section id="volunteer" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-5xl">🤝</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Volunteer With Us</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Be part of the movement. Whether you're a healthcare professional, educator, or passionate 
              advocate, there's a place for you in our community.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              asChild
            >
              <a href="https://forms.gle/M9Rjbdaq4CydJ7dq8" target="_blank" rel="noopener noreferrer">
                Apply to Volunteer
                <ExternalLink className="ml-2" size={20} />
              </a>
            </Button>
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
      <footer className="bg-primary-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Beyond Sweat Foundation</h3>
              <p className="opacity-80">Climate • Health • Justice</p>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a>
              <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a>
              <a href="#what-we-do" className="opacity-80 hover:opacity-100 transition-opacity">What We Do</a>
              <a href="/events" className="opacity-80 hover:opacity-100 transition-opacity">Events</a>
              <a href="/blog" className="opacity-80 hover:opacity-100 transition-opacity">Blog</a>
              <a href="/news" className="opacity-80 hover:opacity-100 transition-opacity">News</a>
              <a href="#testimonials" className="opacity-80 hover:opacity-100 transition-opacity">Testimonials</a>
              <a href="/faq" className="opacity-80 hover:opacity-100 transition-opacity">FAQs</a>
              <a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center opacity-80">
            <p>&copy; {new Date().getFullYear()} Beyond Sweat Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
