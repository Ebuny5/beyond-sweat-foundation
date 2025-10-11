import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const News = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stay informed about our latest initiatives, events, and impact
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">📰</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Coming Soon</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We're preparing to share exciting news about our programs, partnerships, and the impact 
                  we're making in communities across Nigeria and Africa.
                </p>
                <p className="text-muted-foreground">
                  Follow us on social media or subscribe to our newsletter to stay updated.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
