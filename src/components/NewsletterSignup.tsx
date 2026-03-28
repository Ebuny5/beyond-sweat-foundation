import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      // Insert subscriber
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: email.trim(), source: "BeyondSweat" });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already subscribed!",
            description: "This email is already part of our community.",
          });
        } else {
          throw error;
        }
      } else {
        // Send confirmation email
        await supabase.functions.invoke("send-newsletter-welcome", {
          body: { email: email.trim() },
        });

        toast({
          title: "Welcome, Warrior! 🌍",
          description: "You've joined the movement. Check your inbox for a confirmation.",
        });
      }
      setEmail("");
    } catch (err) {
      console.error("Newsletter signup error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
      {/* Decorative blurred orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Glassmorphism card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm mb-6">
                <Mail className="text-white" size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Be the First to Count in Spotlight Africa 🌍🛡️
              </h2>
              <p className="text-white/85 text-lg leading-relaxed">
                Join our community of Warriors. Subscribe for exclusive updates on Africa's first 
                national hyperhidrosis dataset and our mission for clinical recognition.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/15 border-white/25 text-white placeholder:text-white/50 focus-visible:ring-white/40 h-12 text-base backdrop-blur-sm"
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-accent hover:bg-accent/90 text-white font-semibold h-12 px-8 whitespace-nowrap"
              >
                {loading ? "Joining..." : "Join the Movement"}
              </Button>
            </form>

            <p className="text-white/50 text-xs text-center mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
