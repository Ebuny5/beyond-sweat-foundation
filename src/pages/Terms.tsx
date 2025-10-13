import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Terms of Use</h1>
            <p className="text-muted-foreground mb-12">Last Updated: October 2025</p>

            <Card className="mb-8">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Welcome to Beyond Sweat Foundation! These Terms of Use ("Terms") govern your access to and use of our 
                    website, mobile app, and related services (collectively, "the Platform").
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    By using our Platform, you agree to follow these Terms. If you do not agree, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Who We Are</h2>
                  <p className="text-muted-foreground">
                    Beyond Sweat Foundation is a non-profit organization dedicated to supporting individuals with hyperhidrosis, 
                    advancing awareness, research, and climate-health equity across Africa and globally.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. Acceptance of Terms</h2>
                  <p className="text-muted-foreground mb-3">By accessing or using our Platform, you confirm that:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>You are at least 13 years old, or have parental/guardian consent if younger.</li>
                    <li>You agree to comply with these Terms and our Privacy Policy.</li>
                    <li>You are using the Platform only for lawful, non-commercial purposes.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. Purpose of Our Platform</h2>
                  <p className="text-muted-foreground mb-3">Our website and mobile app provide:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Educational information on hyperhidrosis</li>
                    <li>Access to community resources and support</li>
                    <li>Research and volunteer sign-up opportunities</li>
                    <li>Updates on programs, campaigns, and advocacy work</li>
                  </ul>
                  <p className="text-muted-foreground mt-4 font-semibold">
                    The information shared is for awareness and educational purposes only — not a substitute for professional 
                    medical advice or diagnosis. Always consult a qualified healthcare professional for medical concerns.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. User Responsibilities</h2>
                  <p className="text-muted-foreground mb-3">When using our Platform, you agree:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>To provide accurate and honest information when signing up or submitting forms.</li>
                    <li>To use respectful, non-abusive language in all communications.</li>
                    <li>Not to post or share harmful, defamatory, or discriminatory content.</li>
                    <li>Not to engage in unauthorized data collection, hacking, or any misuse of the site/app.</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We reserve the right to restrict access or remove users who violate these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Intellectual Property</h2>
                  <p className="text-muted-foreground mb-4">
                    All materials on the Platform — including text, images, graphics, videos, logos, and software — are the 
                    property of Beyond Sweat Foundation or our partners unless otherwise stated.
                  </p>
                  <p className="text-muted-foreground mb-3"><strong>You may:</strong></p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>View and share content for personal, educational, or awareness purposes</li>
                    <li>Credit Beyond Sweat Foundation when sharing or reposting</li>
                  </ul>
                  <p className="text-muted-foreground mb-3"><strong>You may not:</strong></p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Copy, reproduce, modify, sell, or distribute our content for commercial gain without written permission.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">6. User-Generated Content</h2>
                  <p className="text-muted-foreground mb-3">
                    When you submit content (e.g., testimonials, comments, or photos), you grant Beyond Sweat Foundation a 
                    non-exclusive right to display, reproduce, and use that content in connection with our advocacy and awareness work.
                  </p>
                  <p className="text-muted-foreground">
                    You remain the owner of your content and may request its removal at any time by contacting us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">7. Third-Party Links and Tools</h2>
                  <p className="text-muted-foreground">
                    Our Platform may include links to third-party websites, videos, or tools (e.g., Google Forms, Change.org, 
                    social media, or research portals). We are not responsible for the content or privacy practices of those 
                    external sites. Use them at your own discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">8. Data and Privacy</h2>
                  <p className="text-muted-foreground">
                    We handle all personal information according to our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, 
                    which explains how we collect, use, and protect your data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">9. Disclaimer</h2>
                  <p className="text-muted-foreground mb-3">We strive to provide accurate and up-to-date information, but:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>We make no guarantees about the completeness or accuracy of the content.</li>
                    <li>We are not liable for any harm or loss resulting from reliance on information on this Platform.</li>
                    <li>Our content should never replace medical consultation with qualified professionals.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">10. Limitation of Liability</h2>
                  <p className="text-muted-foreground mb-3">To the fullest extent permitted by law, Beyond Sweat Foundation and its team are not liable for:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Indirect, incidental, or consequential damages,</li>
                    <li>Data loss or service interruptions, or</li>
                    <li>Errors caused by third-party tools or internet issues.</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">Use of our services is at your own risk.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">11. Changes to These Terms</h2>
                  <p className="text-muted-foreground">
                    We may update these Terms periodically. Updates take effect once posted here with a new "Last Updated" date. 
                    We encourage you to review this page regularly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">12. Contact Us</h2>
                  <p className="text-muted-foreground mb-3">
                    If you have questions, feedback, or requests related to these Terms, contact us:
                  </p>
                  <p className="text-muted-foreground">
                    📧 <a href="mailto:info@beyondsweat.life" className="text-primary hover:underline">info@beyondsweat.life</a><br />
                    🌍 <a href="https://www.beyondsweat.life" className="text-primary hover:underline">www.beyondsweat.life</a>
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Short Summary</h3>
                  <p className="text-muted-foreground">
                    By using our website or app, you agree to our Terms of Use and Privacy Policy. Beyond Sweat Foundation 
                    provides educational content and community support — not medical advice. Always consult a healthcare 
                    professional for diagnosis or treatment.
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

export default Terms;
