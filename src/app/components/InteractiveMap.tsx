import { useState, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Plus, Minus, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface MapLocation {
  id: string;
  name: string;
  type: "office" | "service-area";
  coordinates: { x: number; y: number };
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
  description?: string;
}

export function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapRef = useRef<SVGSVGElement>(null);

  const locations: MapLocation[] = [
    {
      id: "main-office",
      name: "TeleCoop Main Office",
      type: "office",
      coordinates: { x: 300, y: 180 }, // Bulacan area on the map
      address: "Rm 3 2F Klir-Con Building, Rocka Avenue, Rocka Village, Tabang, Plaridel, Bulacan",
      phone: "+63 918-460-0900",
      email: "telecoop.ph@gmail.com",
      hours: "Mon-Fri: 8AM-5PM",
      description: "Our main headquarters serving Central Luzon and nationwide operations."
    },
    {
      id: "metro-manila",
      name: "Metro Manila Service Area",
      type: "service-area",
      coordinates: { x: 320, y: 200 },
      description: "Extended service coverage for Metro Manila communities."
    },
    {
      id: "central-luzon",
      name: "Central Luzon Region",
      type: "service-area",
      coordinates: { x: 280, y: 160 },
      description: "Primary service region including Bulacan, Pampanga, and surrounding provinces."
    },
    {
      id: "northern-luzon",
      name: "Northern Luzon Expansion",
      type: "service-area",
      coordinates: { x: 260, y: 120 },
      description: "Expanding support to northern communities and micro ICT providers."
    }
  ];

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev * 1.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev / 1.2, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setSelectedLocation(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleLocationClick = (location: MapLocation) => {
    setSelectedLocation(location);
  };

  // Simplified Philippines SVG outline
  const philippinesPath = "M280,80 L320,85 L340,110 L355,140 L350,170 L360,200 L340,230 L320,250 L300,270 L280,280 L260,270 L240,250 L230,220 L235,190 L245,160 L255,130 L265,100 L280,80 Z M380,180 L400,185 L410,200 L405,220 L395,235 L385,240 L375,235 L370,220 L375,200 L380,180 Z M200,300 L220,305 L235,320 L230,340 L220,355 L205,360 L190,355 L185,340 L190,320 L200,300 Z";

  return (
    <div className="w-full h-96 bg-slate-50 rounded-lg overflow-hidden relative border">
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
        <Button size="sm" variant="outline" onClick={handleZoomIn} className="bg-white">
          <Plus className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="outline" onClick={handleZoomOut} className="bg-white">
          <Minus className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="outline" onClick={handleReset} className="bg-white">
          <Home className="h-4 w-4" />
        </Button>
      </div>

      {/* Map */}
      <svg
        ref={mapRef}
        className="w-full h-full cursor-move"
        viewBox="0 0 600 400"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <g transform={`translate(${position.x}, ${position.y}) scale(${scale})`}>
          {/* Philippines landmass */}
          <path
            d={philippinesPath}
            fill="#e2e8f0"
            stroke="#94a3b8"
            strokeWidth="2"
            className="transition-colors"
          />
          
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="600" height="400" fill="url(#grid)" opacity="0.5" />

          {/* Location markers */}
          {locations.map((location) => (
            <g key={location.id}>
              {/* Marker */}
              <circle
                cx={location.coordinates.x}
                cy={location.coordinates.y}
                r={location.type === "office" ? "8" : "6"}
                fill={location.type === "office" ? "#dc2626" : "#3b82f6"}
                stroke="white"
                strokeWidth="2"
                className="cursor-pointer hover:scale-110 transition-transform"
                onClick={() => handleLocationClick(location)}
              />
              
              {/* Location icon */}
              {location.type === "office" && (
                <g transform={`translate(${location.coordinates.x - 4}, ${location.coordinates.y - 4})`}>
                  <MapPin className="h-2 w-2 text-white fill-current" />
                </g>
              )}

              {/* Location label */}
              <text
                x={location.coordinates.x}
                y={location.coordinates.y - 15}
                textAnchor="middle"
                className="text-xs fill-slate-700 pointer-events-none"
                fontSize="10"
              >
                {location.name}
              </text>

              {/* Service area circle for non-office locations */}
              {location.type === "service-area" && (
                <circle
                  cx={location.coordinates.x}
                  cy={location.coordinates.y}
                  r="25"
                  fill="rgba(59, 130, 246, 0.1)"
                  stroke="#3b82f6"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="pointer-events-none"
                />
              )}
            </g>
          ))}
        </g>
      </svg>

      {/* Location Info Panel */}
      {selectedLocation && (
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <Card className="shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center space-x-2">
                  {selectedLocation.type === "office" ? (
                    <MapPin className="h-5 w-5 text-primary" />
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  )}
                  <span>{selectedLocation.name}</span>
                </CardTitle>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => setSelectedLocation(null)}
                >
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              {selectedLocation.description && (
                <p className="text-muted-foreground mb-3">{selectedLocation.description}</p>
              )}
              
              {selectedLocation.type === "office" && (
                <div className="space-y-2 text-sm">
                  {selectedLocation.address && (
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5" />
                      <span>{selectedLocation.address}</span>
                    </div>
                  )}
                  {selectedLocation.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{selectedLocation.phone}</span>
                    </div>
                  )}
                  {selectedLocation.email && (
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{selectedLocation.email}</span>
                    </div>
                  )}
                  {selectedLocation.hours && (
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{selectedLocation.hours}</span>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute top-4 left-4 z-10">
        <Card className="shadow-lg">
          <CardContent className="p-3">
            <h4 className="text-sm mb-2">Legend</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span>Main Office</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Service Areas</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 right-4 z-10">
        <Card className="shadow-lg">
          <CardContent className="p-3">
            <p className="text-xs text-muted-foreground">
              Click markers for details • Drag to pan • Use zoom controls
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}