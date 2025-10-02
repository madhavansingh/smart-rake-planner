import Navbar from '@/components/Navbar';
import { rakes } from '@/data/dummyData';
import { Package, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const RakePlans = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Optimized':
        return 'bg-success/10 text-success border-success/30';
      case 'Partial':
        return 'bg-warning/10 text-warning border-warning/30';
      case 'Alert':
        return 'bg-destructive/10 text-destructive border-destructive/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getLoadColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-success';
    if (percentage >= 70) return 'bg-warning';
    return 'bg-destructive';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold font-montserrat text-foreground mb-2 flex items-center gap-3">
            <Package className="w-10 h-10 text-accent" />
            Rake Plans
          </h1>
          <p className="text-muted-foreground">AI-optimized rake configurations and schedules</p>
        </div>

        {/* Rake Table */}
        <div className="card-premium overflow-hidden animate-slide-up">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Rake ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Loading Point</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Destination</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Material</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Wagons</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Load %</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Cost</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">AI Insight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rakes.map((rake, index) => (
                  <tr
                    key={rake.id}
                    className="hover:bg-muted/30 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{rake.id}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{rake.loadingPoint}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{rake.destination}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{rake.material}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{rake.wagonCount}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getLoadColor(rake.loadPercentage)} transition-all duration-1000`}
                            style={{ width: `${rake.loadPercentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground">{rake.loadPercentage}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      ₹{(rake.cost / 1000).toFixed(0)}K
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(rake.status)}`}>
                        {rake.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-secondary cursor-help hover:scale-110 transition-transform" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs bg-card border-secondary/50 shadow-premium">
                            <p className="text-sm">{rake.aiReason}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RakePlans;
