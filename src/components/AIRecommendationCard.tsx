import { Brain, TrendingUp, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AIRecommendation } from '@/data/dummyData';

interface AIRecommendationCardProps {
  recommendation: AIRecommendation;
  isAnalyzing?: boolean;
}

const AIRecommendationCard = ({ recommendation, isAnalyzing = false }: AIRecommendationCardProps) => {
  const [applied, setApplied] = useState(false);

  const impactColors = {
    high: 'text-destructive',
    medium: 'text-warning',
    low: 'text-info',
  };

  const handleApply = () => {
    setApplied(true);
    setTimeout(() => setApplied(false), 3000);
  };

  return (
    <div className="card-premium p-6 relative overflow-hidden group hover:shadow-premium-lg transition-all duration-300">
      {/* AI Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-blue-500 to-secondary animate-pulse-glow" />
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-secondary to-blue-500 rounded-lg shadow-ai-glow">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-foreground">{recommendation.title}</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <span className={`font-medium ${impactColors[recommendation.impact]}`}>
                {recommendation.impact.toUpperCase()} IMPACT
              </span>
            </p>
          </div>
        </div>
        {isAnalyzing && (
          <Loader2 className="w-5 h-5 text-secondary animate-spin" />
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {recommendation.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-success" />
          <span className="text-sm font-semibold text-success">
            ₹{(recommendation.savings / 100000).toFixed(1)}L Savings
          </span>
        </div>
        <Button
          onClick={handleApply}
          size="sm"
          className={`${
            applied
              ? 'bg-success hover:bg-success text-white'
              : 'btn-ai'
          } transition-all duration-300`}
          disabled={applied}
        >
          {applied ? 'Applied ✓' : 'Apply Suggestion'}
        </Button>
      </div>
    </div>
  );
};

export default AIRecommendationCard;
