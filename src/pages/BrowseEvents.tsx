import { ArrowLeft, Calendar, Filter, Search, ExternalLink, TrendingUp, Zap, ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface Event {
  id: string;
  type: 'swap' | 'transfer' | 'bridge' | 'approval';
  title: string;
  description: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
  amount: string;
  token: string;
  hash: string;
  network: string;
}

const mockEvents: Event[] = [
  {
    id: '1',
    type: 'swap',
    title: 'Token Swap',
    description: 'Swapped 1000 USDC for 0.3 ETH',
    timestamp: '2024-01-20 14:30:25',
    status: 'completed',
    amount: '1000 USDC',
    token: 'USDC → ETH',
    hash: '0x1234...5678',
    network: 'Ethereum'
  },
  {
    id: '2',
    type: 'transfer',
    title: 'Token Transfer',
    description: 'Sent 500 USDT to 0x1234...5678',
    timestamp: '2024-01-20 12:15:42',
    status: 'completed',
    amount: '500 USDT',
    token: 'USDT',
    hash: '0x8765...4321',
    network: 'Polygon'
  },
  {
    id: '3',
    type: 'bridge',
    title: 'Cross-chain Bridge',
    description: 'Bridged 2 ETH from Ethereum to Arbitrum',
    timestamp: '2024-01-19 16:45:18',
    status: 'pending',
    amount: '2 ETH',
    token: 'ETH',
    hash: '0x9999...1111',
    network: 'Ethereum → Arbitrum'
  },
  {
    id: '4',
    type: 'approval',
    title: 'Token Approval',
    description: 'Approved USDC spending for Uniswap V3',
    timestamp: '2024-01-19 10:22:33',
    status: 'completed',
    amount: 'Unlimited',
    token: 'USDC',
    hash: '0x7777...3333',
    network: 'Ethereum'
  }
];

export default function BrowseEvents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'swap': return <ArrowUpDown className="w-4 h-4" />;
      case 'bridge': return <Zap className="w-4 h-4" />;
      case 'transfer': return <TrendingUp className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'failed': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.token.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || event.type === filterType;
    const matchesStatus = filterStatus === 'all' || event.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const openTransaction = (hash: string) => {
    window.open(`https://etherscan.io/tx/${hash}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/app/history">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to History
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Browse Events
            </h1>
            <p className="text-muted-foreground mt-2">
              Explore all your wallet transactions and events
            </p>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8 gradient-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="w-6 h-6 mr-2 text-primary" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="swap">Swaps</SelectItem>
                  <SelectItem value="transfer">Transfers</SelectItem>
                  <SelectItem value="bridge">Bridges</SelectItem>
                  <SelectItem value="approval">Approvals</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Events List */}
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="gradient-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {getEventIcon(event.type)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <Badge 
                          variant="secondary" 
                          className={getStatusColor(event.status)}
                        >
                          {event.status}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-2">{event.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="font-mono">{event.timestamp}</span>
                        <span>•</span>
                        <span>{event.network}</span>
                        <span>•</span>
                        <span className="font-mono">{event.hash}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold">{event.amount}</div>
                      <div className="text-sm text-muted-foreground">{event.token}</div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => openTransaction(event.hash)}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <Card className="gradient-border">
            <CardContent className="text-center py-12">
              <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Events Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find more events.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Stats Summary */}
        <Card className="mt-8 gradient-border">
          <CardHeader>
            <CardTitle>Event Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{mockEvents.length}</div>
                <div className="text-sm text-muted-foreground">Total Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {mockEvents.filter(e => e.status === 'completed').length}
                </div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">
                  {mockEvents.filter(e => e.status === 'pending').length}
                </div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">
                  {mockEvents.filter(e => e.status === 'failed').length}
                </div>
                <div className="text-sm text-muted-foreground">Failed</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}