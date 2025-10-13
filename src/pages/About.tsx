import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-primary-dark shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
              <a href="/">
                <ArrowLeft className="mr-2" size={20} />
                Back to Home
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              About Beyond Sweat Foundation
            </h1>
            <p className="text-xl text-muted-foreground">
              Confronting Hyperhidrosis in a Warming World
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <Card>
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Rising temperatures are making life even harder for those living with hyperhidrosis — a condition 
                  already misunderstood and underdiagnosed. Yet, across Nigeria, Africa, and the global community, 
                  countless individuals continue to suffer in silence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At <strong className="text-primary">Beyond Sweat Foundation</strong>, we believe it's time to change that narrative.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-2 border-primary">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  To advance <strong>awareness, education, and advocacy</strong> for people living with hyperhidrosis — 
                  connecting climate resilience, health equity, and community empowerment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We combine <strong>lived experience</strong>, <strong>research</strong>, and <strong>climate-aware innovation</strong> to 
                  create inclusive solutions that support individuals and influence systemic change.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where <strong>no one feels ashamed, isolated, or dismissed</strong> because of hyperhidrosis — 
                  where health systems recognize the condition, and communities foster empathy, visibility, and access to care.
                </p>
              </CardContent>
            </Card>

            {/* Our Approach */}
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Approach</h2>
                <p className="text-lg text-muted-foreground mb-6">We address hyperhidrosis through:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-1">•</span>
                    <div>
                      <strong className="text-primary">Global Awareness & Research:</strong>
                      <span className="text-muted-foreground"> Generating data, insights, and partnerships to influence public health policy.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-1">•</span>
                    <div>
                      <strong className="text-primary">Community Education & Support:</strong>
                      <span className="text-muted-foreground"> Hosting campaigns, support groups, and awareness events both online and offline.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-1">•</span>
                    <div>
                      <strong className="text-primary">Youth Engagement & Advocacy:</strong>
                      <span className="text-muted-foreground"> Empowering young people to lead stigma reduction in schools and communities.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-1">•</span>
                    <div>
                      <strong className="text-primary">Climate & Health Innovation:</strong>
                      <span className="text-muted-foreground"> Exploring how environmental change impacts symptoms and solutions.</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center pt-8">
              <Button size="lg" className="bg-primary hover:bg-primary-dark" asChild>
                <a href="/#contact">Get Involved</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">&copy; {new Date().getFullYear()} Beyond Sweat Foundation. All rights reserved.</p>
          <div className="flex gap-4 justify-center mt-4 text-sm">
            <a href="/privacy-policy" className="opacity-80 hover:opacity-100">Privacy Policy</a>
            <a href="/terms" className="opacity-80 hover:opacity-100">Terms of Use</a>
            <a href="/disclaimer" className="opacity-80 hover:opacity-100">Disclaimer</a>
            <a href="/cookie-policy" className="opacity-80 hover:opacity-100">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
