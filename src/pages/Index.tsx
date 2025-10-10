import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, ExternalLink, Download, MessageCircle, Play } from "lucide-react";
import { useState } from "react";

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
              <li><a href="#sweatsmart" className="hover:text-accent transition-colors">SweatSmart</a></li>
              <li><a href="#community" className="hover:text-accent transition-colors">Community</a></li>
              <li><a href="#spotlight" className="hover:text-accent transition-colors">Spotlight</a></li>
              <li><a href="#volunteer" className="hover:text-accent transition-colors">Volunteer</a></li>
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
              <li><a href="#home" className="block hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="block hover:text-accent transition-colors">About</a></li>
              <li><a href="#sweatsmart" className="block hover:text-accent transition-colors">SweatSmart</a></li>
              <li><a href="#community" className="block hover:text-accent transition-colors">Community</a></li>
              <li><a href="#spotlight" className="block hover:text-accent transition-colors">Spotlight</a></li>
              <li><a href="#volunteer" className="block hover:text-accent transition-colors">Volunteer</a></li>
              <li><a href="#contact" className="block hover:text-accent transition-colors">Contact</a></li>
            </ul>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)'
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

      {/* Watch My Story Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-primary/10 flex items-center justify-center p-8 min-h-[300px]">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Play size={48} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground">[Your Story Video Placeholder]</p>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-primary mb-4">Watch My Story</h2>
                  <p className="text-muted-foreground mb-6">
                    Hear about my journey living with hyperhidrosis and why I founded Beyond Sweat Foundation 
                    to create the support system I wish existed.
                  </p>
                  <Button className="w-full sm:w-auto" variant="outline" disabled>
                    <Play className="mr-2" size={18} />
                    Coming Soon - YouTube Video
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Climate-Health-Justice</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Addressing hyperhidrosis in the context of rising temperatures and health inequity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
              <p className="text-center text-lg">[Climate/Community Image Placeholder]</p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Beyond Sweat Foundation combines lived experience, community education, and climate-aware 
                innovation to support people with hyperhidrosis across Nigeria and West Africa. Rising 
                temperatures intensify symptoms, yet the condition remains under-diagnosed and dismissed. 
                We're building a movement that connects climate adaptation, health equity, and systemic change.
              </p>
            </div>
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
                  <li>✅ Climate alerts</li>
                  <li>✅ Symptom tracking</li>
                  <li>✅ Treatment tips</li>
                  <li>✅ Community support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-accent/10 flex items-center justify-center p-8 min-h-[300px]">
                  <div className="text-center">
                    <MessageCircle size={80} className="text-accent mx-auto mb-4" />
                    <p className="text-muted-foreground font-semibold">Join Our WhatsApp Community</p>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-primary mb-4">Community Support</h2>
                  <p className="text-muted-foreground mb-6">
                    Connect with others who understand your journey. Share experiences, coping strategies, 
                    and victories. Find understanding, acceptance, and practical support from those who truly get it.
                  </p>
                  <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90" asChild>
                    <a 
                      href="https://chat.whatsapp.com/BKgrDMOttm76Jva6fSZUMi?mode=ac_t" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2" size={18} />
                      Join WhatsApp Group
                    </a>
                  </Button>
                </CardContent>
              </div>
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
              Help us build the first national dataset on hyperhidrosis in Nigeria
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-dashed border-primary">
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-5xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Take the Survey</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Your anonymous survey response will inform policy, advocacy, and clinical research. 
                  Taking just 3 minutes of your time can create lasting impact for our community.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://forms.gle/zX2uHieyn1aw9xm39" target="_blank" rel="noopener noreferrer">
                    Take the Survey
                    <ExternalLink className="ml-2" size={18} />
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
            <Card className="border-2 border-dashed border-primary">
              <CardContent className="p-12 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Contact Information Coming Soon</h3>
                <p className="text-muted-foreground mb-6">
                  We're setting up our contact channels. Check back soon for email, phone, and office details.
                </p>
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
              <a href="#sweatsmart" className="opacity-80 hover:opacity-100 transition-opacity">SweatSmart</a>
              <a href="#community" className="opacity-80 hover:opacity-100 transition-opacity">Community</a>
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