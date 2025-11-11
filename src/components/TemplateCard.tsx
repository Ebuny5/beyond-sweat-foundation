import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TemplateCardProps {
  title: string;
  description: string;
  category: string;
  image?: string;
}

export const TemplateCard = ({ title, description, category }: TemplateCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-4xl font-bold text-gray-400">{title.charAt(0)}</div>
      </div>
      <div className="p-4">
        <Badge variant="secondary" className="mb-2 text-xs">
          {category}
        </Badge>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </Card>
  );
};
