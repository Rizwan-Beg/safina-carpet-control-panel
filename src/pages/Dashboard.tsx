import { useEffect } from 'react';
import { useAppStore } from '@/store';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { CategoryChart } from '@/components/dashboard/CategoryChart';
import { RecentOrdersTable } from '@/components/dashboard/RecentOrdersTable';
import { 
  mockDashboardStats, 
  mockSalesData, 
  mockCategorySales, 
  mockRecentOrders 
} from '@/data/mockData';
import { 
  ShoppingCart, 
  DollarSign, 
  Clock, 
  XCircle, 
  Users, 
  Package, 
  AlertTriangle, 
  FileText 
} from 'lucide-react';

export default function Dashboard() {
  const { setDashboardStats, dashboardStats } = useAppStore();

  useEffect(() => {
    // Load dashboard data
    setDashboardStats(mockDashboardStats);
  }, [setDashboardStats]);

  if (!dashboardStats) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-48 mb-6"></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to SAFINA CARPETS Admin Panel - Monitor your business at a glance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Orders"
          value={dashboardStats.totalOrders}
          description="All time orders"
          icon={ShoppingCart}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatsCard
          title="Total Revenue"
          value={dashboardStats.totalRevenue}
          description="All time revenue"
          icon={DollarSign}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatsCard
          title="Pending Orders"
          value={dashboardStats.pendingOrders}
          description="Awaiting processing"
          icon={Clock}
          trend={{ value: 3.1, isPositive: false }}
        />
        <StatsCard
          title="Cancelled Orders"
          value={dashboardStats.cancelledOrders}
          description="This month"
          icon={XCircle}
          trend={{ value: 1.8, isPositive: false }}
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Customers"
          value={dashboardStats.totalCustomers}
          description="Registered users"
          icon={Users}
          trend={{ value: 15.3, isPositive: true }}
        />
        <StatsCard
          title="Total Products"
          value={dashboardStats.totalProducts}
          description="In inventory"
          icon={Package}
          trend={{ value: 5.1, isPositive: true }}
        />
        <StatsCard
          title="Low Stock Alert"
          value={dashboardStats.lowStockProducts}
          description="Products below threshold"
          icon={AlertTriangle}
          trend={{ value: 2.4, isPositive: false }}
        />
        <StatsCard
          title="Custom Requests"
          value={dashboardStats.customRequests}
          description="Pending review"
          icon={FileText}
          trend={{ value: 25.0, isPositive: true }}
        />
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <SalesChart data={mockSalesData} />
        <CategoryChart data={mockCategorySales} />
      </div>

      {/* Recent Orders */}
      <RecentOrdersTable orders={mockRecentOrders} />

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="font-semibold text-card-foreground mb-2">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              → Add New Product
            </button>
            <button className="w-full text-left p-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              → Process Pending Orders
            </button>
            <button className="w-full text-left p-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              → Review Custom Requests
            </button>
          </div>
        </div>

        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="font-semibold text-card-foreground mb-2">Recent Activity</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">New order received</span>
              <span className="text-xs text-muted-foreground">2m ago</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Product stock updated</span>
              <span className="text-xs text-muted-foreground">15m ago</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Customer inquiry</span>
              <span className="text-xs text-muted-foreground">1h ago</span>
            </div>
          </div>
        </div>

        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="font-semibold text-card-foreground mb-2">Heritage Quote</h3>
          <blockquote className="text-sm text-muted-foreground italic">
            "Every carpet tells a story of Mughal craftsmanship, woven with threads of tradition and excellence since 1970."
          </blockquote>
          <cite className="text-xs text-primary mt-2 block">- SAFINA CARPETS</cite>
        </div>
      </div>
    </div>
  );
}