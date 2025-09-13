import { GroundwaterHeader } from "@/components/GroundwaterHeader";
import { MetricCard } from "@/components/MetricCard";
import { StateDataTable } from "@/components/StateDataTable";
import { ChartSection } from "@/components/ChartSection";
import { Droplets, TrendingUp, AlertTriangle, Database } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GroundwaterHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Overview Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <MetricCard
            title="Total Extractable Resources"
            value="432.5 BCM"
            change="+2.1% from last year"
            changeType="positive"
            icon={Database}
            subtitle="Billion Cubic Meters"
          />
          <MetricCard
            title="Current Extraction"
            value="245.8 BCM"
            change="+1.8% from last year"
            changeType="neutral"
            icon={TrendingUp}
            subtitle="Annual extraction rate"
          />
          <MetricCard
            title="National Utilization"
            value="56.8%"
            change="-0.5% from last year"
            changeType="positive"
            icon={Droplets}
            subtitle="Overall extraction rate"
          />
          <MetricCard
            title="Critical States"
            value="12"
            change="2 new this year"
            changeType="negative"
            icon={AlertTriangle}
            subtitle="Requiring immediate attention"
          />
        </div>

        {/* Charts Section */}
        <div className="mb-8">
          <ChartSection />
        </div>

        {/* State Data Table */}
        <StateDataTable />
      </main>
    </div>
  );
};

export default Index;
