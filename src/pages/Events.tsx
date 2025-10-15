import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Users, Video, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import webinarPlaceholder from "@/assets/webinar-placeholder.jpg";
import qaPlaceholder from "@/assets/qa-placeholder.jpg";
import workshopPlaceholder from "@/assets/workshop-placeholder.jpg";
import supportPlaceholder from "@/assets/support-placeholder.jpg";

const Events = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing:", { firstName, email });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-primary-dark shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-white font-bold">
                BS
              </div>
              <span className="hidden sm:inline">Beyond Sweat Foundation</span>
            </a>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Events & Community Engagement</h1>
          <p className="text-2xl mb-4 opacity-90">Learn. Connect. Empower — Online & Offline.</p>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            At Beyond Sweat Foundation, we believe awareness grows through connection. Our events—whether virtual 
            or in person—create safe, empowering spaces for people with hyperhidrosis, healthcare professionals, 
            and allies to learn, share, and collaborate. Together, we're building a movement for climate-aware health equity.
          </p>
        </div>
      </section>

      {/* Online Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Online Events</h2>
            <p className="text-xl text-muted-foreground">Join us virtually from anywhere in the world</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Webinars */}
            <Card className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={webinarPlaceholder} 
                  alt="Online Webinars" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 -mt-16 relative z-10 bg-white">
                  <Video className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Webinars & Virtual Learning Series</h3>
                <p className="text-muted-foreground mb-4">
                  Join our Hyperhidrosis Awareness Webinars to explore topics such as diagnosis, treatment, and daily 
                  management of hyperhidrosis. Each session features medical experts, patient advocates, and innovators 
                  sharing insights from clinical and lived experience.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground"><strong>Format:</strong> Zoom/Google Meet</p>
                  <p className="text-sm text-muted-foreground"><strong>Duration:</strong> 60–90 minutes</p>
                  <p className="text-sm text-muted-foreground"><strong>Goal:</strong> Knowledge sharing, empowerment, and collaboration</p>
                </div>
                <p className="text-muted-foreground">
                  Participants can ask questions, exchange tips, and connect with others from across Africa and beyond.
                </p>
              </CardContent>
            </Card>

            {/* Expert Q&A */}
            <Card className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={qaPlaceholder} 
                  alt="Expert Q&A Sessions" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 -mt-16 relative z-10 bg-white">
                  <Users className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Expert Q&A Sessions</h3>
                <p className="text-muted-foreground mb-4">
                  Our Expert Q&A events give you direct access to healthcare professionals specializing in hyperhidrosis. 
                  Get answers on treatment options, lifestyle adaptations, and emerging therapies.
                </p>
                <p className="text-muted-foreground mb-4">
                  Whether you're newly diagnosed or seeking advanced management tips, these sessions help you make 
                  informed decisions about your health.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-primary mb-2">Highlight:</p>
                  <p className="text-sm text-muted-foreground">
                    Interactive discussions with dermatologists, physiologists, and climate-health researchers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offline Events */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Offline Events</h2>
            <p className="text-xl text-muted-foreground">Connect in person and build lasting relationships</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Workshops */}
            <Card className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={workshopPlaceholder} 
                  alt="Awareness Workshops" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 -mt-16 relative z-10 bg-white">
                  <Calendar className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Hyperhidrosis Awareness Workshops</h3>
                <p className="text-muted-foreground mb-4">
                  Join us for engaging in-person workshops that educate communities, students, and healthcare providers 
                  about hyperhidrosis. These sessions blend storytelling, science, and advocacy—helping participants 
                  understand both the medical and emotional sides of the condition.
                </p>
                <div className="bg-accent/5 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-primary mb-2">What to Expect:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Expert talks & personal stories</li>
                    <li>• Demonstrations of eco-smart wearable prototypes</li>
                    <li>• Resource sharing & peer connections</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Goal:</strong> Build awareness, reduce stigma, and spark climate-conscious health action.
                </p>
              </CardContent>
            </Card>

            {/* Support Groups */}
            <Card className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={supportPlaceholder} 
                  alt="Support Group Meetups" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 -mt-16 relative z-10 bg-white">
                  <MapPin className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Support Group Meetups</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with others who truly understand your journey. Our Support Group Meetups provide a safe, 
                  welcoming space to share experiences, challenges, and victories.
                </p>
                <p className="text-muted-foreground mb-4">
                  Led by experienced facilitators, these gatherings nurture empathy and foster resilience within 
                  the hyperhidrosis community.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-primary mb-2">Outcome:</p>
                  <p className="text-sm text-muted-foreground">
                    Emotional support, shared strategies, lasting friendships.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl opacity-90 mb-8">
              Never miss an event announcement. Subscribe to our newsletter and follow us on social media.
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center gap-6 mb-12">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="https://instagram.com/beyondsweatfoundation" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2" size={20} />
                  Instagram
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="https://facebook.com/beyondsweatfoundation" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2" size={20} />
                  Facebook
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="https://x.com/beyondsweatfoun" target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2" size={20} />
                  X (Twitter)
                </a>
              </Button>
            </div>

            {/* Newsletter Subscription */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h3>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-white/90"
                  >
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
