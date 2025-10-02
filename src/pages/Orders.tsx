import { useState } from 'react';
import Navbar from '@/components/Navbar';
import AIAssistant from '@/components/AIAssistant';
import Background3D from '@/components/Background3D';
import { orders } from '@/data/dummyData';
import { FileText, Search, Filter, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-destructive/10 text-destructive border-destructive/30';
      case 'Medium':
        return 'bg-warning/10 text-warning border-warning/30';
      case 'Low':
        return 'bg-info/10 text-info border-info/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-success/10 text-success border-success/30';
      case 'In Progress':
        return 'bg-secondary/10 text-secondary border-secondary/30';
      case 'Pending':
        return 'bg-muted text-muted-foreground border-border';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = priorityFilter === 'all' || order.priority === priorityFilter;
    return matchesSearch && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-background relative">
      <Background3D />
      <Navbar />
      <AIAssistant />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold font-montserrat text-foreground mb-2 flex items-center gap-3">
            <FileText className="w-10 h-10 text-accent" />
            Orders
          </h1>
          <p className="text-muted-foreground">Manage and track all customer orders with AI insights</p>
        </div>

        {/* Filters */}
        <div className="card-premium p-6 mb-6 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by customer, material, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11 bg-background border-border focus:border-accent transition-all"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="pl-10 h-11 bg-background border-border">
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="High">High Priority</SelectItem>
                  <SelectItem value="Medium">Medium Priority</SelectItem>
                  <SelectItem value="Low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="font-medium text-foreground">{filteredOrders.length}</span> orders found
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="card-premium overflow-hidden animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Order ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Customer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Material</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Quantity (tons)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Priority</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Delivery Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Stockyard</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">AI Insight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredOrders.map((order, index) => (
                  <tr
                    key={order.id}
                    className="hover:bg-muted/30 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{order.id}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{order.customer}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{order.material}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{order.quantity.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(order.priority)}`}>
                        {order.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{order.deliveryDate}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{order.stockyard}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-secondary cursor-help hover:scale-110 transition-transform" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs bg-card border-secondary/50 shadow-premium">
                            <p className="text-sm font-medium mb-1">AI Recommendation</p>
                            <p className="text-xs">Best stockyard: {order.stockyard}</p>
                            <p className="text-xs">Estimated load: {Math.floor(order.quantity / 60)} wagons</p>
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

export default Orders;
