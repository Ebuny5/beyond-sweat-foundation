import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Database, Globe, TrendingUp } from "lucide-react";
import researchImage from "@/assets/research-policy.jpg";

const ResearchPolicy = () => {
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
      <section 
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(91, 33, 182, 0.85), rgba(126, 34, 206, 0.85)), url(${researchImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Research, Advocacy, & Policy
          </h1>
          <p className="text-2xl mb-4 opacity-90 max-w-3xl mx-auto">
            Shaping policy for a healthier, climate-resilient future
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="mb-12 border-2 border-primary">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  We Research, Advocate, and Shape Policy for a Healthier, Climate-Resilient Future
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At Beyond Sweat Foundation, we combine community stories with scientific research to drive national 
                  and global recognition of hyperhidrosis as a climate-sensitive health condition.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our Research & Policy team collects real-world data from patients, clinicians, and climate studies 
                  to better understand how rising temperatures intensify hyperhidrosis and related mental-health challenges.
                </p>
              </CardContent>
            </Card>

            {/* Mission Statement */}
            <Card className="mb-12 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-primary mb-6">How We Use These Insights</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We use these insights to inform policies that promote equitable healthcare, environmental adaptation, 
                  and public awareness.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through collaborations with universities, digital-health innovators, and global health networks, 
                  we're building bridges between research, policy, and lived experience.
                </p>
              </CardContent>
            </Card>

            {/* Key Initiatives */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Key Initiatives</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Database className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">
                      Build Africa's First Hyperhidrosis Data Repository
                    </h3>
                    <p className="text-muted-foreground">
                      Through Spotlight Nigeria and regional surveys, we're creating the continent's first comprehensive 
                      dataset on hyperhidrosis, enabling evidence-based policy and clinical research.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      <FileText className="text-accent" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">
                      Influence Health Curricula and National Policy
                    </h3>
                    <p className="text-muted-foreground">
                      We advocate for the inclusion of hyperhidrosis in dermatological and environmental health 
                      frameworks, ensuring future healthcare professionals are equipped to diagnose and treat the condition.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Globe className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">
                      Advance Global Recognition
                    </h3>
                    <p className="text-muted-foreground">
                      We work to position hyperhidrosis within the global climate-health-justice agenda, connecting 
                      with international health networks and climate advocates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      <TrendingUp className="text-accent" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">
                      Drive Systemic Change
                    </h3>
                    <p className="text-muted-foreground">
                      By combining research with advocacy, we push for policy changes that improve access to care, 
                      reduce stigma, and promote climate-aware health solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Collaborations */}
            <Card className="bg-primary text-white mb-12">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Our Collaborations</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">→</span>
                    </div>
                    <p className="text-lg">
                      Partnering with universities to conduct groundbreaking research on hyperhidrosis and climate
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">→</span>
                    </div>
                    <p className="text-lg">
                      Working with digital-health innovators to develop accessible management tools
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">→</span>
                    </div>
                    <p className="text-lg">
                      Connecting with global health networks to amplify our impact
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">→</span>
                    </div>
                    <p className="text-lg">
                      Engaging with policymakers to shape health and environmental policies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Want to collaborate on research or policy initiatives?
              </h3>
              <p className="text-muted-foreground mb-6">
                We welcome partnerships with researchers, institutions, and advocates committed to health equity.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-dark" asChild>
                <a href="tel:+2348112289385">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPolicy;
