import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import blogHeroImage from "@/assets/blog-hero.jpg";
import warriorHero from "@/assets/blog-warrior-hero.jpg";
import logo from "@/assets/logo.png";
import NotFound from "./NotFound";

const Nav = () => (
  <nav className="fixed top-0 w-full z-50 bg-white shadow-md border-b">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <img src={logo} alt="Beyond Sweat Foundation Logo" className="w-10 h-10 rounded-full object-cover" />
          <span className="hidden sm:inline">Beyond Sweat Foundation</span>
        </a>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
          <a href="/blog">Back to Blog</a>
        </Button>
      </div>
    </div>
  </nav>
);

const CommunityCTA = () => (
  <Card className="bg-primary text-white mt-8">
    <CardContent className="p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
      <p className="mb-6 opacity-90">
        Connect with others who understand your journey and get access to more resources, support,
        and information about hyperhidrosis.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
          <a href="/">Visit Homepage</a>
        </Button>
        <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
          <a href="https://chat.whatsapp.com/BKgrDMOttm76Jva6fSZUMi?mode=ac_t" target="_blank" rel="noopener noreferrer">
            Join WhatsApp Community
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
);

const WarriorPost = () => (
  <div className="min-h-screen bg-background">
    <Nav />
    <section className="pt-32 pb-12 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <img src={warriorHero} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="text-sm uppercase tracking-wider mb-2 opacity-90">By Gifty Aruwajoye · May 2026</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Why Am I Always Soaking? The Truth About Hyperhidrosis in Africa
        </h1>
      </div>
    </section>

    <article className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 overflow-hidden">
            <img src={warriorHero} alt="A young African woman shielding her face from the sun, beads of sweat visible on her skin" className="w-full h-72 md:h-96 object-cover" />
            <CardContent className="p-8 md:p-12 prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-8">
                For many across Africa, the day doesn't start with a sunrise—it starts with a soak.
              </p>

              <p className="mb-6">
                You wake up, and before you've even stepped out into the 30°C heat, your palms are damp.
                By the time you've navigated your commute, your clothes are ruined, your grip on your
                phone is slipping, and your confidence is drained. If this is your life, you are not
                "unclean." You are a <strong>Warrior</strong> battling a medical condition called{" "}
                <strong>Hyperhidrosis</strong>.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">
                1. Breaking the Myths (The "Solutions" That Don't Work)
              </h2>
              <p className="mb-4">
                In our communities, we are often given traditional advice that ignores the actual
                science of our bodies. I lived through it all:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li>
                  <strong className="text-primary">Myth 1: It is "Ile Tutu":</strong> Growing up, I was
                  told my sweating was <em>Ile Tutu</em> (cold earth) and was given <em>Agbo</em> to drink.
                  But it wasn't a fever—it was a neurological response that no herbal decoction could stop.
                </li>
                <li>
                  <strong className="text-primary">Myth 2: "You are taking too much salt":</strong> I
                  almost stopped eating salt entirely, hoping for relief. It didn't work. Hyperhidrosis is
                  caused by an overactive nervous system, not your kitchen seasonings.
                </li>
                <li>
                  <strong className="text-primary">Myth 3: "You will outgrow it after child-birth":</strong>{" "}
                  This is a common lie told to young women. <strong>It is not true.</strong> I have a son,
                  and I am still a Warrior living with this every day. Motherhood is not a cure for biology.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">
                2. The "Silent Handicap" (Hidden vs. Visible)
              </h2>
              <p className="mb-4">We call it a silent handicap because of how it forces us to hide:</p>
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li>
                  <strong className="text-primary">The Hidden Struggle (Palmar & Plantar):</strong> If you
                  have sweaty palms or feet, you live in "stealth mode"—avoiding handshakes and touch to
                  keep your condition secret.
                </li>
                <li>
                  <strong className="text-primary">The Overlooked Struggle (Craniofacial):</strong> If you
                  sweat from your head or face, people dismiss it as "normal" because of the African sun.
                  They don't realize you are suffering even when everyone else is dry.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">
                3. Reclaiming Your Power with{" "}
                <a href="https://sweatsmart.guru" className="underline hover:text-primary-dark" target="_blank" rel="noopener noreferrer">
                  sweatsmart.guru
                </a>
              </h2>
              <p className="mb-4">
                Since I started logging my episodes, I finally understand my triggers. We built this
                ecosystem to give every African Warrior the tools they deserve:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li>
                  <strong className="text-primary">Multimodal & Voice Logging:</strong> Log manually, or
                  use <em>Voice Logging</em> during intense episodes when your hands are too damp or shaky
                  to type.
                </li>
                <li>
                  <strong className="text-primary">HydroAlly AI & Clinical Data Analysis:</strong> Chat
                  with <em>HydroAlly</em>, the first-ever clinical companion for Hyperhidrosis. Unlike a
                  standard chatbot, HydroAlly <strong>reads your entire episode history and biometric
                  data</strong>. It analyzes your EDA (Electrodermal Activity) trends and environmental
                  triggers to identify patterns you might not even notice.
                </li>
                <li>
                  <strong className="text-primary">The Exportable Clinical Report:</strong> Based on this
                  deep history, you can <strong>export a personalized Clinical Report</strong>. When you
                  visit a dermatologist, you aren't just "complaining"—you are presenting a data-backed
                  history of your condition's behavior in our specific climate.
                </li>
                <li>
                  <strong className="text-primary">Weekly Insights & Dashboard:</strong> Our intuitive
                  dashboard shows trends and correlations. Every week, the system helps you see the link
                  between the weather and your sweat.
                </li>
                <li>
                  <strong className="text-primary">Specialist Radar & Scanner:</strong> Find medical
                  specialists near you who actually understand the condition, and use our{" "}
                  <em>EDA/BPM Scanner</em> to quantify your sympathetic arousal.
                </li>
                <li>
                  <strong className="text-primary">Climate Alerts:</strong> The system monitors local heat
                  to warn you of <strong>Moderate Risk at 28°C</strong>, allowing you to prepare before
                  the soak begins.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">
                4. You Are a Warrior, Not a Victim
              </h2>
              <p className="mb-6">
                At the <strong>Beyond Sweat Foundation</strong>, we believe{" "}
                <strong>your sweat does not define you.</strong> By moving from "Ile Tutu" myths to
                data-driven management, we are reclaiming our dignity.
              </p>

              <h3 className="text-2xl font-bold text-primary mt-8 mb-4">What can you do today?</h3>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>
                  <strong>Start Logging:</strong> Visit{" "}
                  <a href="https://sweatsmart.guru" className="underline hover:text-primary-dark" target="_blank" rel="noopener noreferrer">
                    sweatsmart.guru
                  </a>{" "}
                  and record your first episode.
                </li>
                <li>
                  <strong>Join the Community:</strong> You don't have to hide anymore.
                </li>
                <li>
                  <strong>Speak Up:</strong> Sharing your story is the only way we get recognition from
                  the global health sector.
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">Conclusion</h2>
              <p className="mb-6">
                The heat in Africa is rising, but so is our community. We are moving from the slippery
                slope of shame to the solid ground of justice. Stay strong, stay hydrated, and remember:{" "}
                <strong>We are Warriors.</strong>
              </p>
              <p className="text-center text-lg font-semibold text-primary">
                Visit{" "}
                <a href="https://beyondsweat.org" className="underline hover:text-primary-dark">
                  beyondsweat.org
                </a>{" "}
                for more resources, community support, and advocacy tools to help you manage Hyperhidrosis
                with dignity.
              </p>
            </CardContent>
          </Card>
          <CommunityCTA />
        </div>
      </div>
    </article>
  </div>
);

const HabitsPost = () => (
  <div className="min-h-screen bg-background">
    <Nav />
    <section className="pt-32 pb-12 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={blogHeroImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="text-sm uppercase tracking-wider mb-2 opacity-90">Published: March 2025</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          10 Daily Habits That Make Hyperhidrosis Worse—And How to Fix Them
        </h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Living with hyperhidrosis presents unique challenges, but certain daily habits might be making
          your excessive sweating worse without you realizing it.
        </p>
      </div>
    </section>

    <article className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-8 md:p-12 prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-8">
                As someone who has navigated life with hyperhidrosis for years, I've identified common
                triggers and discovered effective solutions to manage them. Here's what you need to know
                to take control of your sweating.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">1. Wearing Synthetic Fabrics</h2>
              <p className="mb-4"><strong className="text-primary">The Problem:</strong> Synthetic materials like polyester, nylon, and rayon trap heat and moisture against your skin, creating the perfect environment for increased sweating.</p>
              <p className="mb-6"><strong className="text-primary">The Solution:</strong> Opt for breathable, natural fabrics like 100% cotton, linen, or moisture-wicking materials specifically designed for sweat management.</p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">2. Consuming Spicy Foods and Caffeine</h2>
              <p className="mb-4"><strong className="text-primary">The Problem:</strong> Spicy foods, caffeine, and alcohol can trigger your body's sweat response by activating the central nervous system and increasing body temperature.</p>
              <p className="mb-6"><strong className="text-primary">The Solution:</strong> Limit these triggers when you have important events.</p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">3. Hot Showers and Baths</h2>
              <p className="mb-4"><strong className="text-primary">The Problem:</strong> While relaxing, hot showers raise your core body temperature, which can trigger excessive sweating that continues long after you've dried off.</p>
              <p className="mb-6"><strong className="text-primary">The Solution:</strong> Switch to lukewarm showers, especially in the morning.</p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">4. Skipping Antiperspirant Application Timing</h2>
              <p className="mb-4"><strong className="text-primary">The Problem:</strong> Applying antiperspirant right before going out doesn't give the active ingredients enough time to form proper sweat-blocking plugs in your sweat ducts.</p>
              <p className="mb-6"><strong className="text-primary">The Solution:</strong> Apply clinical-strength antiperspirants at night before bed when sweat glands are less active.</p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">5. Using the Wrong Skincare Products</h2>
              <p className="mb-4"><strong className="text-primary">The Problem:</strong> Heavy moisturizers and oil-based skincare products can clog pores and increase the sensation of facial sweating and shine.</p>
              <p className="mb-6"><strong className="text-primary">The Solution:</strong> Switch to oil-free, non-comedogenic products.</p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">6. Skipping Regular Exercise</h2>
              <p className="mb-4"><strong className="text-primary">The Problem:</strong> Avoiding exercise can actually worsen hyperhidrosis in the long run. Regular physical activity helps regulate your body's sweat response over time.</p>
              <p className="mb-6"><strong className="text-primary">The Solution:</strong> Establish a consistent exercise routine in temperature-controlled environments.</p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">7. High-Stress Lifestyle Without Management Techniques</h2>
              <p className="mb-4"><strong className="text-primary">The Problem:</strong> Stress is a major trigger for hyperhidrosis, creating a vicious cycle of sweating, anxiety about the sweating, and then more sweating.</p>
              <p className="mb-6"><strong className="text-primary">The Solution:</strong> Practice stress reduction techniques like deep breathing and meditation.</p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">8. Irregular Sleep Patterns</h2>
              <p className="mb-4"><strong className="text-primary">The Problem:</strong> Poor sleep disrupts your body's hormonal balance, potentially triggering increased sweating during waking hours.</p>
              <p className="mb-6"><strong className="text-primary">The Solution:</strong> Establish a consistent sleep schedule and create a cool sleeping environment.</p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">9. Using Deodorant Instead of Antiperspirant</h2>
              <p className="mb-4"><strong className="text-primary">The Problem:</strong> Many people use deodorants thinking they address sweating, when they only mask odor without reducing perspiration.</p>
              <p className="mb-6"><strong className="text-primary">The Solution:</strong> Make sure you're using actual antiperspirants that contain aluminum compounds to block sweat ducts.</p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">10. Inconsistent Product Application</h2>
              <p className="mb-4"><strong className="text-primary">The Problem:</strong> Applying antiperspirants sporadically or stopping use when sweating seems under control often leads to the return of symptoms.</p>
              <p className="mb-6"><strong className="text-primary">The Solution:</strong> Consistency is key with hyperhidrosis management. Create a daily routine.</p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-4">Final Thoughts</h2>
              <p className="mb-6">Managing hyperhidrosis effectively requires awareness of these common triggers and consistent application of solutions.</p>
              <p className="text-center text-lg font-semibold text-primary">
                For more hyperhidrosis management tips, visit{" "}
                <a href="https://beyondsweat.org" className="underline hover:text-primary-dark">beyondsweat.org</a>
              </p>
            </CardContent>
          </Card>
          <CommunityCTA />
        </div>
      </div>
    </article>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams();
  if (slug === "why-am-i-always-soaking-hyperhidrosis-in-africa") return <WarriorPost />;
  if (slug === "10-daily-habits-that-make-hyperhidrosis-worse") return <HabitsPost />;
  return <NotFound />;
};

export default BlogPost;
