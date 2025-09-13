import { Droplets, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function GroundwaterHeader() {
  return (
    <header className="border-b bg-card shadow-sm">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center space-x-4">
          <Droplets className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-foreground">Groundwater Assessment Portal</h1>
            <p className="text-sm text-muted-foreground">National Water Resource Management</p>
          </div>
        </div>
        
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search states, districts..."
              className="w-64 pl-9"
            />
          </div>
          <Button variant="outline" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}