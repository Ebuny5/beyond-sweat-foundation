import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Cookie } from "lucide-react";

const CookiePolicy = () => {
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
            <div className="flex items-center gap-4 mb-12">
              <Cookie size={48} className="text-primary" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary">Cookie & Data Collection Policy</h1>
              </div>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond Sweat Foundation ("we," "our," or "us") values your privacy. This Cookie and Data Collection Policy 
                    explains how we collect, use, and protect your personal information when you visit our website, use our app, 
                    or engage with our forms and community platforms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground mb-3">We may collect the following categories of information:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Personal details:</strong> Name, email address, phone number, and demographic information (only when voluntarily provided via our forms).</li>
                    <li><strong>Usage data:</strong> Pages visited, duration, device type, and general analytics (via Google Analytics or similar tools).</li>
                    <li><strong>Cookies:</strong> Small files stored on your device to enhance your browsing experience and improve our services.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Data</h2>
                  <p className="text-muted-foreground mb-3">We use collected information to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Improve our website, app, and educational content.</li>
                    <li>Communicate updates about events, research, or volunteering opportunities.</li>
                    <li>Analyze anonymized usage patterns to strengthen advocacy and public health research.</li>
                    <li>Ensure security and prevent spam or misuse.</li>
                  </ul>
                  <p className="text-muted-foreground mt-4 font-semibold">
                    We do not sell or rent your personal data to any third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Use of Cookies</h2>
                  <p className="text-muted-foreground mb-3">Our site uses cookies to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Remember your preferences and login sessions.</li>
                    <li>Improve navigation and user experience.</li>
                    <li>Measure site performance and engagement.</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    You can manage or delete cookies anytime through your browser settings. Declining cookies may limit certain 
                    functionalities on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground">
                    Your data is stored securely using encrypted systems and trusted hosting providers. We take reasonable 
                    technical and organizational measures to protect against unauthorized access, alteration, disclosure, or 
                    destruction of your data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">6. Data Retention</h2>
                  <p className="text-muted-foreground">
                    We retain your personal data only as long as necessary for our programs, research purposes, or as required 
                    by law. You may request deletion of your data at any time by contacting us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">7. Your Rights</h2>
                  <p className="text-muted-foreground mb-3">You have the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Access or correct your personal information.</li>
                    <li>Withdraw consent for communications.</li>
                    <li>Request deletion of your data.</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    To exercise these rights, contact us at <a href="mailto:info@beyondsweat.life" className="text-primary hover:underline">info@beyondsweat.life</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">8. Updates to This Policy</h2>
                  <p className="text-muted-foreground">
                    This policy may be updated periodically to reflect legal, technical, or organizational changes. Any updates 
                    will be posted on this page with a revised "last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Us</h2>
                  <p className="text-muted-foreground mb-3">
                    If you have questions about this policy or how your data is handled, please contact:
                  </p>
                  <p className="text-muted-foreground">
                    📧 <a href="mailto:info@beyondsweat.life" className="text-primary hover:underline">info@beyondsweat.life</a><br />
                    🌍 Beyond Sweat Foundation
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Short Footer Version</h3>
                  <p className="text-muted-foreground">
                    <strong>Privacy & Cookies:</strong> We use cookies to improve your experience and gather anonymous insights 
                    for our research and awareness programs. By continuing, you agree to our Privacy Policy and Cookie Policy.
                  </p>
                </div>
              </CardContent>
            </Card>
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

export default CookiePolicy;
