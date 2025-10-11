import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Find answers to common questions about hyperhidrosis and our foundation
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border-2 border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                  What is hyperhidrosis?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Hyperhidrosis is a medical condition characterized by excessive sweating beyond what's necessary 
                  for body temperature regulation. It can affect various parts of the body, including hands, feet, 
                  underarms, and face, significantly impacting daily life and emotional wellbeing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border-2 border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                  How does climate change affect hyperhidrosis?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Rising global temperatures intensify hyperhidrosis symptoms, making the condition more challenging 
                  to manage. Heat stress can trigger more frequent and severe sweating episodes, affecting quality of 
                  life and mental health. This is why we advocate for climate-aware health solutions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border-2 border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                  What is SweatSmart?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  SweatSmart is our climate-aware digital tool for managing hyperhidrosis. It helps users track 
                  symptoms, monitor weather patterns, identify triggers, and receive personalized management tips. 
                  Available as both a web app and Android app, it's designed to empower people with hyperhidrosis 
                  to better understand and manage their condition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border-2 border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                  How can I get involved with Beyond Sweat Foundation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  There are many ways to get involved! You can volunteer your time and skills, participate in our 
                  awareness campaigns, join our WhatsApp community for support, take the Spotlight Nigeria survey, 
                  or support our campaigns financially. Visit our volunteer page or contact us to learn more about 
                  opportunities that match your interests and expertise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border-2 border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                  Is hyperhidrosis curable?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  While there's currently no cure for primary hyperhidrosis, there are many effective treatment 
                  options available. These include topical treatments, oral medications, iontophoresis, Botox 
                  injections, and in severe cases, surgical procedures. The best approach varies by individual, 
                  which is why we advocate for better diagnosis and personalized care plans.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border-2 border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                  What is the Spotlight Nigeria initiative?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Spotlight Nigeria is our research initiative to build the first comprehensive national dataset 
                  on hyperhidrosis in Nigeria. By collecting anonymous survey data from people living with the 
                  condition, we're generating evidence that will inform policy, advocacy, clinical research, and 
                  funding decisions. Your participation helps make hyperhidrosis visible in healthcare planning.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                We're here to help. Reach out to us and we'll get back to you as soon as possible.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-dark" asChild>
                <a href="/#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
