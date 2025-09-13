import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Filter } from "lucide-react";

interface StateData {
  state: string;
  totalExtractable: number;
  currentExtraction: number;
  utilizationRate: number;
  annualRainfall: number;
  status: "Safe" | "Semi-Critical" | "Critical" | "Over-Exploited";
}

const mockData: StateData[] = [
  {
    state: "Rajasthan",
    totalExtractable: 11.02,
    currentExtraction: 9.5,
    utilizationRate: 86.2,
    annualRainfall: 318,
    status: "Semi-Critical"
  },
  {
    state: "Gujarat",
    totalExtractable: 15.81,
    currentExtraction: 10.2,
    utilizationRate: 64.5,
    annualRainfall: 1107,
    status: "Safe"
  },
  {
    state: "Maharashtra",
    totalExtractable: 32.12,
    currentExtraction: 16.8,
    utilizationRate: 52.3,
    annualRainfall: 1181,
    status: "Safe"
  },
  {
    state: "Punjab",
    totalExtractable: 20.35,
    currentExtraction: 23.4,
    utilizationRate: 115.0,
    annualRainfall: 618,
    status: "Over-Exploited"
  },
  {
    state: "Haryana",
    totalExtractable: 9.52,
    currentExtraction: 11.8,
    utilizationRate: 124.0,
    annualRainfall: 556,
    status: "Over-Exploited"
  }
];

export function StateDataTable() {
  const getStatusColor = (status: StateData["status"]) => {
    switch (status) {
      case "Safe":
        return "bg-success text-success-foreground";
      case "Semi-Critical":
        return "bg-warning text-warning-foreground";
      case "Critical":
        return "bg-destructive text-destructive-foreground";
      case "Over-Exploited":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>State-wise Groundwater Data</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>State</TableHead>
              <TableHead>Total Extractable (BCM)</TableHead>
              <TableHead>Current Extraction (BCM)</TableHead>
              <TableHead>Utilization Rate (%)</TableHead>
              <TableHead>Annual Rainfall (mm)</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((row) => (
              <TableRow key={row.state}>
                <TableCell className="font-medium">{row.state}</TableCell>
                <TableCell>{row.totalExtractable}</TableCell>
                <TableCell>{row.currentExtraction}</TableCell>
                <TableCell>
                  <span className={row.utilizationRate > 90 ? "text-destructive font-medium" : ""}>
                    {row.utilizationRate}%
                  </span>
                </TableCell>
                <TableCell>{row.annualRainfall}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(row.status)}>
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}