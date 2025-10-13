import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, AlertCircle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-primary-dark shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
            <a href="/">
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </a>
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <AlertCircle size={48} className="text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary">Disclaimer</h1>
            </div>

            <Card className="mb-8 border-2 border-primary">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="bg-accent/10 p-6 rounded-lg">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Beyond Sweat Foundation provides educational resources, community support, and advocacy for individuals 
                    living with hyperhidrosis and related climate-health challenges.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  The information on this website and app is for <strong>general awareness and educational purposes only</strong>.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  It is <strong>not intended to diagnose, treat, cure, or prevent any medical condition</strong>, nor should it 
                  replace advice from a qualified healthcare professional.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Always consult your doctor, dermatologist, or other licensed health provider regarding any medical concerns 
                  or before starting any treatment.
                </p>

                <div className="border-t border-border pt-6 mt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond Sweat Foundation is not liable for decisions made based on the information provided on this platform.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Use of this site signifies your agreement to our <a href="/terms" className="text-primary hover:underline">Terms of Use</a> and{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                  </p>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold text-primary mb-3">Short Version</h3>
                  <p className="text-muted-foreground">
                    <strong>Disclaimer:</strong> The content on Beyond Sweat Foundation is for education and awareness only 
                    and should not replace professional medical advice.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary-dark" asChild>
                <a href="/#contact">Contact Us for Questions</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">&copy; {new Date().getFullYear()} Beyond Sweat Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Disclaimer;
