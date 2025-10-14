import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import blogHeroImage from "@/assets/blog-hero.jpg";

const Blog = () => {
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
            Living with hyperhidrosis presents unique challenges, but certain daily habits might be making your excessive sweating worse without you realizing it.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8 md:p-12 prose prose-lg max-w-none">
                <p className="lead text-xl text-muted-foreground mb-8">
                  As someone who has navigated life with hyperhidrosis for years, I've identified common triggers and discovered effective solutions to manage them. Here's what you need to know to take control of your sweating.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-4">1. Wearing Synthetic Fabrics</h2>
                <p className="mb-4">
                  <strong className="text-primary">The Problem:</strong> Synthetic materials like polyester, nylon, and rayon trap heat and moisture against your skin, creating the perfect environment for increased sweating.
                </p>
                <p className="mb-6">
                  <strong className="text-primary">The Solution:</strong> Opt for breathable, natural fabrics like 100% cotton, linen, or moisture-wicking materials specifically designed for sweat management. For underarms, apply a strong antiperspirant like SweatBlock Deodorant Antiperspirant before dressing to create a barrier between your skin and clothing.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-4">2. Consuming Spicy Foods and Caffeine</h2>
                <p className="mb-4">
                  <strong className="text-primary">The Problem:</strong> Spicy foods, caffeine, and alcohol can trigger your body's sweat response by activating the central nervous system and increasing body temperature.
                </p>
                <p className="mb-6">
                  <strong className="text-primary">The Solution:</strong> Limit these triggers when you have important events. If you can't avoid them, keep Duradry Antiperspirant Wipes in your bag for quick application after meals to help manage unexpected sweating episodes.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-4">3. Hot Showers and Baths</h2>
                <p className="mb-4">
                  <strong className="text-primary">The Problem:</strong> While relaxing, hot showers raise your core body temperature, which can trigger excessive sweating that continues long after you've dried off.
                </p>
                <p className="mb-6">
                  <strong className="text-primary">The Solution:</strong> Switch to lukewarm showers, especially in the morning. After showering, apply Carpe Antiperspirant Hand Lotion to palms and Carpe Antiperspirant Foot Lotion to feet while skin is completely dry for maximum effectiveness.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-4">4. Skipping Antiperspirant Application Timing</h2>
                <p className="mb-4">
                  <strong className="text-primary">The Problem:</strong> Applying antiperspirant right before going out doesn't give the active ingredients enough time to form proper sweat-blocking plugs in your sweat ducts.
                </p>
                <p className="mb-6">
                  <strong className="text-primary">The Solution:</strong> Apply clinical-strength antiperspirants like Certain Dri Clinical Antiperspirant Roll-On at night before bed when sweat glands are less active. This allows the product to work overnight, providing better protection the next day.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-4">5. Using the Wrong Skincare Products</h2>
                <p className="mb-4">
                  <strong className="text-primary">The Problem:</strong> Heavy moisturizers and oil-based skincare products can clog pores and increase the sensation of facial sweating and shine.
                </p>
                <p className="mb-6">
                  <strong className="text-primary">The Solution:</strong> Switch to oil-free, non-comedogenic products, and incorporate Carpe Sweat Absorbing Face Gel into your morning routine to keep facial sweating under control throughout the day.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-4">6. Skipping Regular Exercise</h2>
                <p className="mb-4">
                  <strong className="text-primary">The Problem:</strong> While it might seem counterintuitive, avoiding exercise can actually worsen hyperhidrosis in the long run. Regular physical activity helps regulate your body's sweat response over time.
                </p>
                <p className="mb-6">
                  <strong className="text-primary">The Solution:</strong> Establish a consistent exercise routine in temperature-controlled environments. Use FOOT SENSE All-Natural in your shoes before workouts to manage foot sweat and prevent odor.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-4">7. High-Stress Lifestyle Without Management Techniques</h2>
                <p className="mb-4">
                  <strong className="text-primary">The Problem:</strong> Stress is a major trigger for hyperhidrosis, creating a vicious cycle of sweating, anxiety about the sweating, and then more sweating.
                </p>
                <p className="mb-6">
                  <strong className="text-primary">The Solution:</strong> Practice stress reduction techniques like deep breathing and meditation. For immediate relief during stressful situations, keep Duradry Antiperspirant Wipes handy for quick application to palms before important handshakes or presentations.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-4">8. Irregular Sleep Patterns</h2>
                <p className="mb-4">
                  <strong className="text-primary">The Problem:</strong> Poor sleep disrupts your body's hormonal balance, potentially triggering increased sweating during waking hours.
                </p>
                <p className="mb-6">
                  <strong className="text-primary">The Solution:</strong> Establish a consistent sleep schedule and create a cool sleeping environment. Use moisture-wicking sheets and apply Certain Dri Antiperspirant at night to manage night sweats.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-4">9. Using Deodorant Instead of Antiperspirant</h2>
                <p className="mb-4">
                  <strong className="text-primary">The Problem:</strong> Many people use deodorants thinking they address sweating, when they only mask odor without reducing perspiration.
                </p>
                <p className="mb-6">
                  <strong className="text-primary">The Solution:</strong> Make sure you're using actual antiperspirants that contain aluminum compounds to block sweat ducts. For those who prefer natural options, Kopari Aluminum-Free Coconut Deodorant won't stop sweating but provides excellent odor control with natural ingredients.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-4">10. Inconsistent Product Application</h2>
                <p className="mb-4">
                  <strong className="text-primary">The Problem:</strong> Applying antiperspirants sporadically or stopping use when sweating seems under control often leads to the return of symptoms.
                </p>
                <p className="mb-6">
                  <strong className="text-primary">The Solution:</strong> Consistency is key with hyperhidrosis management. Create a daily routine incorporating targeted products like Carpe Hand for palms and SweatBlock for underarms, even on days when sweating seems minimal.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-4">Final Thoughts</h2>
                <p className="mb-6">
                  Managing hyperhidrosis effectively requires awareness of these common triggers and consistent application of solutions. By adjusting these daily habits and incorporating specialized products into your routine, you can significantly reduce excessive sweating and improve your quality of life.
                </p>
                <p className="mb-6">
                  Remember that hyperhidrosis management is highly personal—what works for one person may not work for another. Don't be afraid to experiment with different combinations of the products mentioned to find your perfect sweat management system.
                </p>
                <p className="text-center text-lg font-semibold text-primary">
                  For more hyperhidrosis management tips and product recommendations, visit <a href="https://beyondsweat.life" className="underline hover:text-primary-dark">beyondsweat.life</a>
                </p>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="mb-6 opacity-90">
                  Connect with others who understand your journey and get access to more resources, support, and information about hyperhidrosis.
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
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
