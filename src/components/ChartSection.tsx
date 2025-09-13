import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const rainfallData = [
  { year: "2019", rainfall: 1157, extraction: 251 },
  { year: "2020", rainfall: 1094, extraction: 249 },
  { year: "2021", rainfall: 1221, extraction: 253 },
  { year: "2022", rainfall: 1183, extraction: 256 },
  { year: "2023", rainfall: 1205, extraction: 258 },
];

const utilizationData = [
  { state: "Punjab", utilization: 115 },
  { state: "Haryana", utilization: 124 },
  { state: "Rajasthan", utilization: 86 },
  { state: "Gujarat", utilization: 65 },
  { state: "Maharashtra", utilization: 52 },
];

const statusData = [
  { name: "Safe", value: 35, color: "hsl(var(--success))" },
  { name: "Semi-Critical", value: 25, color: "hsl(var(--warning))" },
  { name: "Critical", value: 20, color: "hsl(var(--destructive))" },
  { name: "Over-Exploited", value: 20, color: "hsl(var(--destructive))" },
];

export function ChartSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Rainfall vs Extraction Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={rainfallData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
              <Line 
                type="monotone" 
                dataKey="rainfall" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={2}
                name="Rainfall (mm)"
              />
              <Line 
                type="monotone" 
                dataKey="extraction" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={2}
                name="Extraction (BCM)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Status Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>State-wise Utilization Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={utilizationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="state" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
              <Bar 
                dataKey="utilization" 
                fill="hsl(var(--chart-1))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}