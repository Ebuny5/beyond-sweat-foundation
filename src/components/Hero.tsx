import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          BUILD SOMETHING<br />LOVABLE
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Create apps and websites by chatting with AI
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base font-medium bg-gray-900 hover:bg-gray-800 px-8 py-6">
            Get started
          </Button>
          <Button size="lg" variant="outline" className="text-base font-medium px-8 py-6">
            Log in
          </Button>
        </div>
      </div>
    </section>
  );
};
