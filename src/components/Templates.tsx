import { useState } from "react";
import { TemplateCard } from "./TemplateCard";
import { Button } from "@/components/ui/button";

const categories = [
  "Discover",
  "Internal Tools",
  "Website",
  "Personal",
  "Consumer App",
  "B2B App",
  "Prototype",
];

const templates = [
  {
    id: 1,
    title: "Project Dashboard",
    description: "Track your projects and team progress with this comprehensive dashboard",
    category: "Internal Tools",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Showcase your work with a beautiful, responsive portfolio",
    category: "Website",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Organize your daily tasks and boost productivity",
    category: "Personal",
  },
  {
    id: 4,
    title: "E-commerce Store",
    description: "Launch your online store with product listings and checkout",
    category: "Consumer App",
  },
  {
    id: 5,
    title: "CRM System",
    description: "Manage customer relationships and sales pipeline",
    category: "B2B App",
  },
  {
    id: 6,
    title: "Landing Page",
    description: "Quick prototype for your next big idea",
    category: "Prototype",
  },
  {
    id: 7,
    title: "Blog Platform",
    description: "Share your thoughts with a modern blogging platform",
    category: "Website",
  },
  {
    id: 8,
    title: "Analytics Dashboard",
    description: "Visualize your data with interactive charts and metrics",
    category: "Internal Tools",
  },
];

export const Templates = () => {
  const [selectedCategory, setSelectedCategory] = useState("Discover");

  const filteredTemplates =
    selectedCategory === "Discover"
      ? templates
      : templates.filter((t) => t.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">From the Community</h2>
          <Button variant="link" className="text-gray-600">
            View all →
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "hover:bg-gray-100"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.id} {...template} />
          ))}
        </div>
      </div>
    </section>
  );
};
