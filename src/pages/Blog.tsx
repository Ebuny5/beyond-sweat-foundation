import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import blogHeroImage from "@/assets/blog-hero.jpg";
import warriorHero from "@/assets/blog-warrior-hero.jpg";
import logo from "@/assets/logo.png";

const posts = [
  {
    slug: "why-am-i-always-soaking-hyperhidrosis-in-africa",
    title: "Why Am I Always Soaking? The Truth About Hyperhidrosis in Africa",
    author: "Gifty Aruwajoye",
    date: "May 2026",
    excerpt:
      "Breaking myths, naming the silent handicap, and reclaiming power as a Warrior living with hyperhidrosis in Africa.",
    cover: warriorHero,
  },
  {
    slug: "10-daily-habits-that-make-hyperhidrosis-worse",
    title: "10 Daily Habits That Make Hyperhidrosis Worse—And How to Fix Them",
    author: "Beyond Sweat Foundation",
    date: "March 2025",
    excerpt:
      "Common daily triggers that worsen excessive sweating and the practical fixes that bring real relief.",
    cover: blogHeroImage,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
              <img src={logo} alt="Beyond Sweat Foundation Logo" className="w-10 h-10 rounded-full object-cover" />
              <span className="hidden sm:inline">Beyond Sweat Foundation</span>
            </a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stories, science, and strategies from the global hyperhidrosis community.
          </p>
        </div>
      </section>

      {/* Posts list */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            {posts.map((p) => (
              <Card key={p.slug} className="overflow-hidden flex flex-col">
                <a href={`/blog/${p.slug}`} className="block">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform"
                  />
                </a>
                <CardContent className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground mb-2">
                    {p.date} · {p.author}
                  </p>
                  <h2 className="text-2xl font-bold text-primary mb-3">
                    <a href={`/blog/${p.slug}`} className="hover:underline">
                      {p.title}
                    </a>
                  </h2>
                  <p className="text-muted-foreground mb-6 flex-1">{p.excerpt}</p>
                  <Button asChild className="w-fit">
                    <a href={`/blog/${p.slug}`}>Read article</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
