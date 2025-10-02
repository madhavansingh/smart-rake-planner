import Navbar from '@/components/Navbar';
import { BarChart3, Download, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { chartData } from '@/data/dummyData';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const handleDownload = (reportName: string) => {
    console.log(`Downloading ${reportName} report...`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold font-montserrat text-foreground mb-2 flex items-center gap-3">
            <BarChart3 className="w-10 h-10 text-accent" />
            Reports & Analytics
          </h1>
          <p className="text-muted-foreground">Comprehensive insights and AI-generated reports</p>
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Cost Savings Report */}
          <div className="card-premium p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Cost Savings Analysis</h3>
                <p className="text-sm text-muted-foreground">6-month trend with AI predictions</p>
              </div>
              <Button
                onClick={() => handleDownload('Cost Savings')}
                size="sm"
                className="btn-ai"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData.costSavings}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                  formatter={(value: number) => `₹${(value / 100000).toFixed(1)}L`}
                />
                <Line
                  type="monotone"
                  dataKey="savings"
                  stroke="hsl(51, 100%, 50%)"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(51, 100%, 50%)', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-success/10 border border-success/30 rounded-lg">
              <p className="text-sm text-success flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">AI Insight:</span>
                Cost savings trending up by 18% this quarter
              </p>
            </div>
          </div>

          {/* Dispatch Efficiency Report */}
          <div className="card-premium p-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Dispatch Efficiency</h3>
                <p className="text-sm text-muted-foreground">Monthly performance metrics</p>
              </div>
              <Button
                onClick={() => handleDownload('Dispatch Efficiency')}
                size="sm"
                className="btn-ai"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData.dispatchTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="dispatches" fill="hsl(170, 100%, 37%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-secondary/10 border border-secondary/30 rounded-lg">
              <p className="text-sm text-secondary-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">AI Insight:</span>
                Peak efficiency reached in June with 92 dispatches
              </p>
            </div>
          </div>

          {/* Utilization Report */}
          <div className="card-premium p-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Stockyard Utilization</h3>
                <p className="text-sm text-muted-foreground">Real-time capacity analysis</p>
              </div>
              <Button
                onClick={() => handleDownload('Utilization')}
                size="sm"
                className="btn-ai"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData.stockyardUtilization}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="utilization" fill="hsl(170, 100%, 37%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-warning/10 border border-warning/30 rounded-lg">
              <p className="text-sm text-warning flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">AI Insight:</span>
                Rourkela at 93% - consider load balancing
              </p>
            </div>
          </div>

          {/* AI Predictions Card */}
          <div className="card-premium p-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">AI Predictions</h3>
                <p className="text-sm text-muted-foreground">Next month forecasts</p>
              </div>
              <Button
                onClick={() => handleDownload('Predictions')}
                size="sm"
                className="btn-ai"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-lg border border-secondary/30">
                <p className="text-sm font-medium text-foreground mb-1">Expected Dispatches</p>
                <p className="text-3xl font-bold text-gradient-ai">98</p>
                <p className="text-xs text-muted-foreground mt-1">↑ 6% from current month</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/30">
                <p className="text-sm font-medium text-foreground mb-1">Projected Savings</p>
                <p className="text-3xl font-bold text-gradient-gold">₹3.4L</p>
                <p className="text-xs text-muted-foreground mt-1">↑ 12% improvement</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-success/10 to-success/5 rounded-lg border border-success/30">
                <p className="text-sm font-medium text-foreground mb-1">Efficiency Target</p>
                <p className="text-3xl font-bold text-success">92%</p>
                <p className="text-xs text-muted-foreground mt-1">AI recommended target</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
