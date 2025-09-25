import { ArrowLeft, Shield, Zap, Globe, Database, TrendingUp, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              About OneWallet
            </h1>
            <p className="text-muted-foreground mt-2">
              Your unified multi-chain crypto wallet dashboard
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <Card className="mb-8 gradient-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              OneWallet provides a unified dashboard for managing multiple blockchain wallets with seamless multi-chain support. 
              Our platform enables users to track their crypto portfolio, execute token swaps, bridge assets across chains, 
              and monitor transaction history all in one place. Built with cutting-edge DeFi integrations and industry-leading 
              APIs, we deliver the most comprehensive and user-friendly crypto wallet experience.
            </p>
          </CardContent>
        </Card>

        {/* Features Section */}
        <Card className="mb-8 gradient-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="w-6 h-6 mr-2 text-primary" />
              Platform Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Real-time Price Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Live cryptocurrency prices and portfolio tracking with advanced analytics
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Database className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">DeFi Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Seamless token swapping and cross-chain bridging capabilities
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Multi-chain Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Coverage across Ethereum, Polygon, Arbitrum, and Base networks
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Expert Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    In-depth market analysis and trend predictions from industry experts
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sponsor APIs Section */}
        <Card className="mb-8 gradient-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="w-6 h-6 mr-2 text-primary" />
              Powered by Leading APIs
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Our platform leverages industry-leading APIs to provide comprehensive DeFi and blockchain services
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Covalent */}
              <div className="p-6 rounded-lg bg-card/50 border border-border/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">C</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Covalent API</h3>
                      <Badge variant="secondary" className="text-xs">Blockchain Data</Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open('https://www.covalenthq.com/', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Powers our <strong>portfolio tracking</strong> and <strong>transaction history</strong> features. 
                  Provides comprehensive blockchain data across multiple networks for real-time balance updates 
                  and detailed transaction analysis.
                </p>
              </div>

              {/* 1inch */}
              <div className="p-6 rounded-lg bg-card/50 border border-border/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">1inch API</h3>
                      <Badge variant="secondary" className="text-xs">DEX Aggregator</Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open('https://1inch.io/', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Enables our <strong>token swapping</strong> functionality. Aggregates liquidity from multiple 
                  DEXs to find the best rates and lowest slippage for users trading cryptocurrencies 
                  across supported networks.
                </p>
              </div>

              {/* Socket */}
              <div className="p-6 rounded-lg bg-card/50 border border-border/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Socket API</h3>
                      <Badge variant="secondary" className="text-xs">Cross-chain Bridge</Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open('https://socket.tech/', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Powers our <strong>cross-chain bridging</strong> capabilities. Enables seamless asset 
                  transfers between different blockchain networks including Ethereum, Polygon, Arbitrum, 
                  and Base with optimal routing and fees.
                </p>
              </div>

              {/* Supabase */}
              <div className="p-6 rounded-lg bg-card/50 border border-border/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Supabase</h3>
                      <Badge variant="secondary" className="text-xs">Backend & Database</Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open('https://supabase.com/', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Provides our <strong>backend infrastructure</strong> including user authentication, 
                  data storage, and real-time features. Handles news article management, user preferences, 
                  and secure API key storage for seamless platform operations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <Card className="mb-8 gradient-border">
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <Badge variant="outline" className="mb-2">React</Badge>
                <p className="text-xs text-muted-foreground">Frontend Framework</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">TypeScript</Badge>
                <p className="text-xs text-muted-foreground">Type Safety</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">Tailwind CSS</Badge>
                <p className="text-xs text-muted-foreground">Styling</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">Vite</Badge>
                <p className="text-xs text-muted-foreground">Build Tool</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">Wagmi</Badge>
                <p className="text-xs text-muted-foreground">Web3 Integration</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">Zustand</Badge>
                <p className="text-xs text-muted-foreground">State Management</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">Radix UI</Badge>
                <p className="text-xs text-muted-foreground">UI Components</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">Vercel</Badge>
                <p className="text-xs text-muted-foreground">Deployment</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="gradient-border">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Stay connected with the latest in DeFi and blockchain technology
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="sm">
                  Newsletter
                </Button>
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  Discord
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}