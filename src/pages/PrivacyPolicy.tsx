import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last Updated: October 2025</p>

            <Card className="mb-8">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At Beyond Sweat Foundation, we respect your privacy and are committed to protecting your personal data. 
                    This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, 
                    use our app, participate in our programs, or communicate with us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Who We Are</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond Sweat Foundation is a non-profit organization focused on raising awareness, supporting individuals 
                    living with hyperhidrosis, and promoting climate-aware health equity. Our website and digital platforms are 
                    used for community engagement, education, research participation, and volunteer coordination.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">We collect personal and non-personal information in the following ways:</p>
                  
                  <h3 className="text-xl font-semibold text-primary mb-3">a. Information You Provide Voluntarily</h3>
                  <p className="text-muted-foreground mb-3">When you:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>Sign up as a volunteer, participant, or supporter</li>
                    <li>Complete a form, survey, or event registration</li>
                    <li>Subscribe to our newsletter or updates</li>
                    <li>Contact us directly via email, WhatsApp, or our app</li>
                  </ul>
                  <p className="text-muted-foreground mb-3">You may provide:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone/WhatsApp number</li>
                    <li>Location (city/country)</li>
                    <li>Organization or school (optional)</li>
                    <li>Feedback or messages</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-primary mb-3">b. Automatically Collected Information</h3>
                  <p className="text-muted-foreground mb-3">When you visit our website or use our app, we may collect:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>IP address and browser type</li>
                    <li>Device and operating system</li>
                    <li>Date and time of visit</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website (if any)</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">This helps us improve website performance and user experience.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-3">We use your information to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Communicate with you about our programs, events, and opportunities</li>
                    <li>Manage volunteer and research participation</li>
                    <li>Improve our website, app, and outreach</li>
                    <li>Conduct data-driven research and advocacy (only with your consent)</li>
                    <li>Comply with legal or regulatory requirements</li>
                  </ul>
                  <p className="text-muted-foreground mt-4 font-semibold">
                    We will never sell, rent, or trade your personal data to any third party.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Data Storage and Security</h2>
                  <p className="text-muted-foreground mb-3">
                    We use secure servers and encrypted systems to protect your information. Access is limited to authorized 
                    staff and partners who are bound by confidentiality obligations.
                  </p>
                  <p className="text-muted-foreground">
                    If you submit data through Google Forms, our mobile app, or third-party tools (like WhatsApp or Mailchimp), 
                    please note that their respective privacy policies also apply.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Cookies and Analytics</h2>
                  <p className="text-muted-foreground mb-3">
                    Our website may use cookies and analytics tools (e.g., Google Analytics) to understand visitor behavior 
                    and improve performance.
                  </p>
                  <p className="text-muted-foreground">
                    You can adjust your browser settings to refuse cookies or notify you when cookies are being sent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground mb-3">You have the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Access the personal data we hold about you</li>
                    <li>Request corrections or updates to your data</li>
                    <li>Withdraw consent at any time</li>
                    <li>Request deletion of your data ("Right to be Forgotten")</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    To exercise these rights, contact us at: <a href="mailto:info@beyondsweat.life" className="text-primary hover:underline">info@beyondsweat.life</a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">7. Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our website and programs are not intended to collect personal information from children under 13 without 
                    parental consent. If we learn that we have unintentionally collected such information, we will delete it promptly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">8. Links to Other Websites</h2>
                  <p className="text-muted-foreground">
                    Our site may contain links to partner or external websites. We are not responsible for their privacy practices 
                    and encourage you to review their policies separately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">9. Updates to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated 
                    "Last Updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">10. Contact Us</h2>
                  <p className="text-muted-foreground mb-3">
                    If you have questions, concerns, or requests about your data privacy, please reach out to:
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Beyond Sweat Foundation</strong><br />
                    Email: <a href="mailto:info@beyondsweat.life" className="text-primary hover:underline">info@beyondsweat.life</a><br />
                    Website: <a href="https://www.beyondsweat.life" className="text-primary hover:underline">www.beyondsweat.life</a>
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Quick Summary</h3>
                  <p className="text-muted-foreground">
                    We respect your privacy. Beyond Sweat Foundation only collects essential information to connect with our 
                    community and improve our services. We never sell or share your data. You can request data deletion at any time.
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

export default PrivacyPolicy;
