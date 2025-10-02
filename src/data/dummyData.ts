// Preloaded dummy data for the Smart Rake Planner

export interface Order {
  id: string;
  customer: string;
  material: string;
  quantity: number;
  priority: 'High' | 'Medium' | 'Low';
  deliveryDate: string;
  stockyard: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}

export interface Rake {
  id: string;
  loadingPoint: string;
  destination: string;
  material: string;
  wagonCount: number;
  loadPercentage: number;
  cost: number;
  status: 'Optimized' | 'Partial' | 'Alert';
  aiReason: string;
}

export interface Stockyard {
  id: string;
  name: string;
  location: string;
  capacity: number;
  currentLoad: number;
  materials: string[];
  status: 'Low' | 'Medium' | 'Full';
}

export interface KPI {
  totalRakes: number;
  pendingOrders: number;
  loadingEfficiency: number;
  costSaved: number;
}

export const orders: Order[] = [
  { id: 'ORD-001', customer: 'Tata Steel', material: 'Iron Ore', quantity: 5000, priority: 'High', deliveryDate: '2025-10-05', stockyard: 'Bokaro', status: 'Pending' },
  { id: 'ORD-002', customer: 'JSW Steel', material: 'Coal', quantity: 3500, priority: 'Medium', deliveryDate: '2025-10-07', stockyard: 'Rourkela', status: 'Pending' },
  { id: 'ORD-003', customer: 'Hindalco', material: 'Bauxite', quantity: 4200, priority: 'High', deliveryDate: '2025-10-06', stockyard: 'Bhilai', status: 'In Progress' },
  { id: 'ORD-004', customer: 'Vedanta', material: 'Limestone', quantity: 2800, priority: 'Low', deliveryDate: '2025-10-10', stockyard: 'Durgapur', status: 'Pending' },
  { id: 'ORD-005', customer: 'ArcelorMittal', material: 'Iron Ore', quantity: 6000, priority: 'High', deliveryDate: '2025-10-04', stockyard: 'Bokaro', status: 'In Progress' },
  { id: 'ORD-006', customer: 'Essar Steel', material: 'Coal', quantity: 3200, priority: 'Medium', deliveryDate: '2025-10-08', stockyard: 'Rourkela', status: 'Pending' },
  { id: 'ORD-007', customer: 'NMDC', material: 'Iron Ore', quantity: 5500, priority: 'High', deliveryDate: '2025-10-05', stockyard: 'Burnpur', status: 'Pending' },
  { id: 'ORD-008', customer: 'Coal India', material: 'Coal', quantity: 7000, priority: 'High', deliveryDate: '2025-10-03', stockyard: 'Durgapur', status: 'In Progress' },
  { id: 'ORD-009', customer: 'Bhushan Steel', material: 'Limestone', quantity: 3000, priority: 'Medium', deliveryDate: '2025-10-09', stockyard: 'Bhilai', status: 'Pending' },
  { id: 'ORD-010', customer: 'Jindal Steel', material: 'Iron Ore', quantity: 4800, priority: 'High', deliveryDate: '2025-10-06', stockyard: 'Bokaro', status: 'Pending' },
];

export const rakes: Rake[] = [
  { id: 'RAKE-101', loadingPoint: 'Bokaro', destination: 'Kolkata', material: 'Iron Ore', wagonCount: 58, loadPercentage: 95, cost: 85000, status: 'Optimized', aiReason: 'High utilization with optimal route' },
  { id: 'RAKE-102', loadingPoint: 'Rourkela', destination: 'Mumbai', material: 'Coal', wagonCount: 55, loadPercentage: 78, cost: 92000, status: 'Partial', aiReason: 'Can be combined with RAKE-105' },
  { id: 'RAKE-103', loadingPoint: 'Bhilai', destination: 'Delhi', material: 'Bauxite', wagonCount: 60, loadPercentage: 88, cost: 98000, status: 'Optimized', aiReason: 'Optimal load distribution' },
  { id: 'RAKE-104', loadingPoint: 'Durgapur', destination: 'Chennai', material: 'Limestone', wagonCount: 52, loadPercentage: 65, cost: 87000, status: 'Alert', aiReason: 'Low utilization - consider rescheduling' },
  { id: 'RAKE-105', loadingPoint: 'Burnpur', destination: 'Bangalore', material: 'Iron Ore', wagonCount: 58, loadPercentage: 92, cost: 94000, status: 'Optimized', aiReason: 'Efficient route selection' },
  { id: 'RAKE-106', loadingPoint: 'Bokaro', destination: 'Hyderabad', material: 'Coal', wagonCount: 56, loadPercentage: 82, cost: 89000, status: 'Optimized', aiReason: 'Good load balance' },
  { id: 'RAKE-107', loadingPoint: 'Rourkela', destination: 'Pune', material: 'Iron Ore', wagonCount: 60, loadPercentage: 97, cost: 96000, status: 'Optimized', aiReason: 'Maximum efficiency achieved' },
  { id: 'RAKE-108', loadingPoint: 'Bhilai', destination: 'Jamshedpur', material: 'Limestone', wagonCount: 50, loadPercentage: 72, cost: 83000, status: 'Partial', aiReason: 'Additional orders can be included' },
];

export const stockyards: Stockyard[] = [
  { id: 'SY-001', name: 'Bokaro Stockyard', location: 'Bokaro, Jharkhand', capacity: 50000, currentLoad: 38000, materials: ['Iron Ore', 'Coal'], status: 'Medium' },
  { id: 'SY-002', name: 'Rourkela Stockyard', location: 'Rourkela, Odisha', capacity: 45000, currentLoad: 42000, materials: ['Coal', 'Iron Ore'], status: 'Full' },
  { id: 'SY-003', name: 'Bhilai Stockyard', location: 'Bhilai, Chhattisgarh', capacity: 55000, currentLoad: 28000, materials: ['Bauxite', 'Limestone'], status: 'Medium' },
  { id: 'SY-004', name: 'Durgapur Stockyard', location: 'Durgapur, West Bengal', capacity: 40000, currentLoad: 12000, materials: ['Limestone', 'Coal'], status: 'Low' },
  { id: 'SY-005', name: 'Burnpur Stockyard', location: 'Burnpur, West Bengal', capacity: 48000, currentLoad: 35000, materials: ['Iron Ore'], status: 'Medium' },
];

export const kpis: KPI = {
  totalRakes: 24,
  pendingOrders: 47,
  loadingEfficiency: 87.5,
  costSaved: 2450000,
};

export interface AIRecommendation {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  savings: number;
}

export const aiRecommendations: AIRecommendation[] = [
  {
    id: 'AI-001',
    title: 'Combine RAKE-102 and RAKE-105',
    description: 'Merge these two partially loaded rakes to reduce cost by ₹1.2L',
    impact: 'high',
    savings: 120000,
  },
  {
    id: 'AI-002',
    title: 'Prioritize High-Priority Orders',
    description: 'Reschedule RAKE-104 to accommodate ORD-005 delivery',
    impact: 'medium',
    savings: 85000,
  },
  {
    id: 'AI-003',
    title: 'Optimize Durgapur Stockyard',
    description: 'Transfer 500 tons to Bhilai to reduce travel cost by 18%',
    impact: 'medium',
    savings: 95000,
  },
];

export const chartData = {
  stockyardUtilization: [
    { name: 'Bokaro', utilization: 76, fill: 'hsl(170, 100%, 37%)' },
    { name: 'Rourkela', utilization: 93, fill: 'hsl(38, 92%, 50%)' },
    { name: 'Bhilai', utilization: 51, fill: 'hsl(170, 100%, 37%)' },
    { name: 'Durgapur', utilization: 30, fill: 'hsl(199, 89%, 48%)' },
    { name: 'Burnpur', utilization: 73, fill: 'hsl(170, 100%, 37%)' },
  ],
  ordersByPriority: [
    { name: 'High', value: 45, fill: 'hsl(0, 84%, 60%)' },
    { name: 'Medium', value: 35, fill: 'hsl(38, 92%, 50%)' },
    { name: 'Low', value: 20, fill: 'hsl(199, 89%, 48%)' },
  ],
  dispatchTrend: [
    { month: 'Jan', dispatches: 65, fill: 'hsl(170, 100%, 37%)' },
    { month: 'Feb', dispatches: 72, fill: 'hsl(170, 100%, 37%)' },
    { month: 'Mar', dispatches: 68, fill: 'hsl(170, 100%, 37%)' },
    { month: 'Apr', dispatches: 85, fill: 'hsl(170, 100%, 37%)' },
    { month: 'May', dispatches: 78, fill: 'hsl(170, 100%, 37%)' },
    { month: 'Jun', dispatches: 92, fill: 'hsl(170, 100%, 37%)' },
  ],
  costSavings: [
    { month: 'Jan', savings: 180000 },
    { month: 'Feb', savings: 220000 },
    { month: 'Mar', savings: 195000 },
    { month: 'Apr', savings: 285000 },
    { month: 'May', savings: 245000 },
    { month: 'Jun', savings: 310000 },
  ],
};
