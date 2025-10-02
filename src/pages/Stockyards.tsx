import Navbar from '@/components/Navbar';
import { stockyards } from '@/data/dummyData';
import { Warehouse, TrendingUp } from 'lucide-react';

const Stockyards = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Full':
        return 'bg-destructive/10 text-destructive border-destructive/30';
      case 'Medium':
        return 'bg-warning/10 text-warning border-warning/30';
      case 'Low':
        return 'bg-success/10 text-success border-success/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold font-montserrat text-foreground mb-2 flex items-center gap-3">
            <Warehouse className="w-10 h-10 text-accent" />
            Stockyards
          </h1>
          <p className="text-muted-foreground">Real-time stockyard monitoring with AI capacity optimization</p>
        </div>

        {/* Stockyard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stockyards.map((stockyard, index) => {
            const utilizationPercent = (stockyard.currentLoad / stockyard.capacity) * 100;
            
            return (
              <div
                key={stockyard.id}
                className="card-premium p-6 hover:scale-105 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{stockyard.name}</h3>
                    <p className="text-sm text-muted-foreground">{stockyard.location}</p>
                  </div>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(stockyard.status)}`}>
                    {stockyard.status}
                  </span>
                </div>

                {/* Capacity Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Capacity</span>
                    <span className="font-semibold text-foreground">
                      {stockyard.currentLoad.toLocaleString()} / {stockyard.capacity.toLocaleString()} tons
                    </span>
                  </div>
                  <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ${
                        utilizationPercent >= 80
                          ? 'bg-destructive'
                          : utilizationPercent >= 60
                          ? 'bg-warning'
                          : 'bg-success'
                      }`}
                      style={{ width: `${utilizationPercent}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{utilizationPercent.toFixed(1)}% utilized</p>
                </div>

                {/* Materials */}
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-2">Materials Available:</p>
                  <div className="flex flex-wrap gap-2">
                    {stockyard.materials.map((material) => (
                      <span
                        key={material}
                        className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md font-medium border border-secondary/20"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI Insight */}
                <div className="mt-4 p-3 bg-secondary/5 border border-secondary/20 rounded-lg">
                  <p className="text-xs text-secondary-foreground flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span className="font-medium">AI Insight:</span>
                    {stockyard.status === 'Full' && ' Consider rerouting to nearby stockyards'}
                    {stockyard.status === 'Medium' && ' Optimal loading capacity available'}
                    {stockyard.status === 'Low' && ' High capacity available for new orders'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Stockyards;
