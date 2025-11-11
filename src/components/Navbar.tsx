import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Lovable
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#community" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Community
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Pricing
              </a>
              <a href="#enterprise" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Enterprise
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-medium">
              Log in
            </Button>
            <Button className="text-sm font-medium bg-gray-900 hover:bg-gray-800">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
