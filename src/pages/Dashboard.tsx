import { useState, useEffect } from 'react';
import { TrendingUp, Package, ShoppingCart, Percent, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import KPICard from '@/components/KPICard';
import AIRecommendationCard from '@/components/AIRecommendationCard';
import { kpis, aiRecommendations, chartData } from '@/data/dummyData';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

const Dashboard = () => {
  const [analyzing, setAnalyzing] = useState(true);
  const [userName] = useState('Admin');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnalyzing(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        {/* Greeting Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold font-montserrat text-foreground mb-2">
            {getGreeting()}, {userName}!
          </h1>
          <p className="text-muted-foreground flex items-center gap-2">
            {analyzing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-secondary" />
                AI analyzing data and generating recommendations...
              </>
            ) : (
              <>
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                All systems operational · AI recommendations ready
              </>
            )}
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Rakes Today"
            value={kpis.totalRakes}
            icon={Package}
            trend="↑ 12% from yesterday"
            color="primary"
            delay={0}
          />
          <KPICard
            title="Pending Orders"
            value={kpis.pendingOrders}
            icon={ShoppingCart}
            trend="↓ 8% from yesterday"
            color="secondary"
            delay={200}
          />
          <KPICard
            title="Loading Efficiency"
            value={kpis.loadingEfficiency}
            icon={Percent}
            suffix="%"
            trend="↑ 5% from last week"
            color="success"
            delay={400}
          />
          <KPICard
            title="Cost Saved"
            value={kpis.costSaved / 100000}
            icon={TrendingUp}
            suffix="L"
            trend="↑ ₹85K from last month"
            color="accent"
            delay={600}
          />
        </div>

        {/* AI Recommendations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-montserrat text-foreground mb-4 flex items-center gap-2">
            <span className="text-gradient-ai">AI Recommendations</span>
            {analyzing && <Loader2 className="w-5 h-5 animate-spin text-secondary" />}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aiRecommendations.map((rec, index) => (
              <div key={rec.id} style={{ animationDelay: `${index * 200}ms` }} className="animate-slide-up">
                <AIRecommendationCard recommendation={rec} isAnalyzing={analyzing} />
              </div>
            ))}
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Stockyard Utilization */}
          <div className="card-premium p-6 animate-fade-in">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              Stockyard Utilization
              <span className="text-xs text-muted-foreground font-normal">(AI Monitored)</span>
            </h3>
            <ResponsiveContainer width="100%" height={300}>
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
                <Bar dataKey="utilization" radius={[8, 8, 0, 0]}>
                  {chartData.stockyardUtilization.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Orders by Priority */}
          <div className="card-premium p-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              Orders by Priority
              <span className="text-xs text-muted-foreground font-normal">(Real-time)</span>
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData.ordersByPriority}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  dataKey="value"
                >
                  {chartData.ordersByPriority.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Dispatch Trend */}
          <div className="card-premium p-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              Dispatch Trend
              <span className="text-xs text-muted-foreground font-normal">(6 Months)</span>
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData.dispatchTrend}>
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
                <Line
                  type="monotone"
                  dataKey="dispatches"
                  stroke="hsl(170, 100%, 37%)"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(170, 100%, 37%)', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Cost Savings */}
          <div className="card-premium p-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              AI-Driven Cost Savings
              <span className="text-xs text-success font-normal">↑ Trending Up</span>
            </h3>
            <ResponsiveContainer width="100%" height={300}>
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
