import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ChevronDown, Heart, TrendingUp, Clock, Star, Github, Globe, Zap } from "lucide-react";
import { useState } from "react";

const Lovable = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeFilter, setActiveFilter] = useState("Popular");

  const projectCategories = [
    "Internal Tools",
    "Website",
    "Personal",
    "Consumer App",
    "B2B App",
    "Prototype"
  ];

  const filterOptions = ["Popular", "Trending", "Recent", "Featured"];

  const communityProjects = [
    {
      title: "TaskFlow Pro",
      description: "Project management tool with AI-powered task prioritization",
      category: "Internal Tools",
      likes: 234,
      trending: true
    },
    {
      title: "HealthTracker",
      description: "Personal health monitoring dashboard with ML insights",
      category: "Personal",
      likes: 189,
      trending: false
    },
    {
      title: "ShopSmart",
      description: "E-commerce platform with intelligent product recommendations",
      category: "Consumer App",
      likes: 456,
      trending: true
    },
    {
      title: "DataViz Studio",
      description: "Business intelligence dashboard for B2B analytics",
      category: "B2B App",
      likes: 312,
      trending: false
    },
    {
      title: "Portfolio Site",
      description: "Creative portfolio website with animations and interactive elements",
      category: "Website",
      likes: 278,
      trending: true
    },
    {
      title: "Quick Prototype",
      description: "Rapid prototyping tool for design validation",
      category: "Prototype",
      likes: 145,
      trending: false
    }
  ];

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-slate-900"}`}>
      {/* Grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 ${theme === "dark" ? "bg-slate-900/80" : "bg-white/80"} backdrop-blur-lg border-b ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="#home" className="flex items-center gap-2 font-bold text-xl">
                <div className={`w-10 h-10 rounded-lg ${theme === "dark" ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-purple-600 to-pink-600"} flex items-center justify-center text-white font-bold shadow-lg`}>
                  L
                </div>
                <span>Lovable</span>
              </a>

              <div className="hidden lg:flex items-center gap-6">
                <a href="#community" className={`${theme === "dark" ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors`}>
                  Community
                </a>
                <a href="#pricing" className={`${theme === "dark" ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors`}>
                  Pricing
                </a>
                <a href="#enterprise" className={`${theme === "dark" ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors`}>
                  Enterprise
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`hidden md:flex px-3 py-2 rounded-lg ${theme === "dark" ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-100 hover:bg-slate-200"} transition-colors`}
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </button>

              <div className="hidden md:flex items-center gap-3">
                <Button variant="ghost" className={theme === "dark" ? "text-slate-300 hover:text-white" : ""}>
                  Log in
                </Button>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  Get started
                </Button>
              </div>

              <button
                className={`md:hidden ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="mt-4 pb-4 space-y-3 md:hidden">
              <a href="#community" className="block py-2">Community</a>
              <a href="#pricing" className="block py-2">Pricing</a>
              <a href="#enterprise" className="block py-2">Enterprise</a>
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <Button variant="ghost" className="w-full justify-start">Log in</Button>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Get started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build something{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Lovable
              </span>
            </h1>
            <p className={`text-xl md:text-2xl ${theme === "dark" ? "text-slate-300" : "text-slate-600"} mb-8 max-w-3xl mx-auto`}>
              Create apps and websites by chatting with AI
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-6">
              Start Building for Free
            </Button>
            <Button size="lg" variant="outline" className={`text-lg px-8 py-6 ${theme === "dark" ? "border-slate-700 hover:bg-slate-800" : ""}`}>
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <Badge variant="secondary" className={`px-4 py-2 text-sm ${theme === "dark" ? "bg-slate-800" : ""}`}>
              <Zap size={16} className="mr-2 inline" />
              Ship in minutes, not months
            </Badge>
            <Badge variant="secondary" className={`px-4 py-2 text-sm ${theme === "dark" ? "bg-slate-800" : ""}`}>
              <Github size={16} className="mr-2 inline" />
              Full code ownership
            </Badge>
            <Badge variant="secondary" className={`px-4 py-2 text-sm ${theme === "dark" ? "bg-slate-800" : ""}`}>
              <Globe size={16} className="mr-2 inline" />
              Deploy anywhere
            </Badge>
          </div>

          <div className={`text-lg mb-8 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            <p className="mb-4 font-semibold">What are you building?</p>
            <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Why wait? Ship now.
            </p>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Choose your project type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {projectCategories.map((category) => (
              <Card key={category} className={`${theme === "dark" ? "bg-slate-900 border-slate-800 hover:border-purple-500" : "hover:border-purple-400"} cursor-pointer transition-all hover:shadow-lg hover:scale-105`}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">
                    {category === "Internal Tools" && "🛠️"}
                    {category === "Website" && "🌐"}
                    {category === "Personal" && "👤"}
                    {category === "Consumer App" && "📱"}
                    {category === "B2B App" && "💼"}
                    {category === "Prototype" && "⚡"}
                  </div>
                  <p className="text-sm font-medium">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <section id="community" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Community Projects
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
              Discover what others are building with Lovable
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterOptions.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={activeFilter === filter
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : theme === "dark" ? "border-slate-700 hover:bg-slate-800" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "Popular" && <Heart size={16} className="mr-2" />}
                {filter === "Trending" && <TrendingUp size={16} className="mr-2" />}
                {filter === "Recent" && <Clock size={16} className="mr-2" />}
                {filter === "Featured" && <Star size={16} className="mr-2" />}
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityProjects.map((project) => (
              <Card key={project.title} className={`${theme === "dark" ? "bg-slate-900 border-slate-800 hover:border-purple-500" : "hover:border-purple-400"} cursor-pointer transition-all hover:shadow-xl group`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className={`${theme === "dark" ? "bg-slate-800" : ""}`}>
                      {project.category}
                    </Badge>
                    {project.trending && (
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        <TrendingUp size={14} className="mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"} mb-4`}>
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart size={18} className={theme === "dark" ? "text-slate-400" : "text-slate-500"} />
                      <span className="text-sm font-medium">{project.likes}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-purple-500 hover:text-purple-600">
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className={theme === "dark" ? "border-slate-700 hover:bg-slate-800" : ""}>
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className={`${theme === "dark" ? "bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/50" : "bg-gradient-to-br from-purple-100 to-pink-100"}`}>
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to build something amazing?
              </h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-300" : "text-slate-700"} mb-8 max-w-2xl mx-auto`}>
                Join thousands of developers building the future with AI-powered development
              </p>
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-6">
                Start Building Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme === "dark" ? "bg-slate-900 border-t border-slate-800" : "bg-slate-50 border-t border-slate-200"} py-16 px-6`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                <li><a href="#pricing" className="hover:text-purple-500 transition-colors">Pricing</a></li>
                <li><a href="#templates" className="hover:text-purple-500 transition-colors">Templates</a></li>
                <li><a href="#guides" className="hover:text-purple-500 transition-colors">Guides</a></li>
                <li><a href="#videos" className="hover:text-purple-500 transition-colors">Videos</a></li>
                <li><a href="#blog" className="hover:text-purple-500 transition-colors">Blog</a></li>
                <li><a href="#support" className="hover:text-purple-500 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                <li><a href="#careers" className="hover:text-purple-500 transition-colors">Careers</a></li>
                <li><a href="#press" className="hover:text-purple-500 transition-colors">Press & media</a></li>
                <li><a href="#enterprise" className="hover:text-purple-500 transition-colors">Enterprise</a></li>
                <li><a href="#security" className="hover:text-purple-500 transition-colors">Security</a></li>
                <li><a href="#trust" className="hover:text-purple-500 transition-colors">Trust center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                <li><a href="#docs" className="hover:text-purple-500 transition-colors">Documentation</a></li>
                <li><a href="#integrations" className="hover:text-purple-500 transition-colors">Integrations</a></li>
                <li><a href="#changelog" className="hover:text-purple-500 transition-colors">Changelog</a></li>
                <li><a href="#status" className="hover:text-purple-500 transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                <li><a href="#privacy" className="hover:text-purple-500 transition-colors">Privacy policy</a></li>
                <li><a href="#terms" className="hover:text-purple-500 transition-colors">Terms of Service</a></li>
                <li><a href="#rules" className="hover:text-purple-500 transition-colors">Platform rules</a></li>
                <li><a href="#security-report" className="hover:text-purple-500 transition-colors">Security reporting</a></li>
              </ul>
            </div>
          </div>

          <div className={`pt-8 border-t ${theme === "dark" ? "border-slate-800" : "border-slate-200"} flex flex-col md:flex-row items-center justify-between`}>
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="font-semibold">Lovable</span>
            </div>
            <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
              &copy; {new Date().getFullYear()} Lovable. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Lovable;
