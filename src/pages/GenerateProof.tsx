import { ArrowLeft, Shield, FileCheck, Copy, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function GenerateProof() {
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [generatedProof, setGeneratedProof] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateProof = async () => {
    if (!address || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsGenerating(true);
    
    // Simulate proof generation
    setTimeout(() => {
      const mockProof = `0x${Array.from({ length: 128 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`;
      setGeneratedProof(mockProof);
      setIsGenerating(false);
      toast.success("Proof generated successfully!");
    }, 2000);
  };

  const copyProof = () => {
    navigator.clipboard.writeText(generatedProof);
    toast.success("Proof copied to clipboard");
  };

  const downloadProof = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedProof], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "wallet-proof.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success("Proof downloaded");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/app/assets">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Assets
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Generate Proof
            </h1>
            <p className="text-muted-foreground mt-2">
              Generate cryptographic proof of wallet ownership
            </p>
          </div>
        </div>

        {/* Proof Generation Form */}
        <Card className="mb-8 gradient-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-6 h-6 mr-2 text-primary" />
              Wallet Ownership Proof
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="address">Wallet Address</Label>
              <Input
                id="address"
                placeholder="0x..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="font-mono"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message to Sign</Label>
              <Textarea
                id="message"
                placeholder="Enter a custom message to prove ownership..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
              />
            </div>

            <Button 
              onClick={handleGenerateProof}
              disabled={isGenerating}
              className="w-full bg-gradient-primary hover:opacity-90"
            >
              <FileCheck className="w-4 h-4 mr-2" />
              {isGenerating ? "Generating Proof..." : "Generate Proof"}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Proof Display */}
        {generatedProof && (
          <Card className="gradient-border">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileCheck className="w-6 h-6 mr-2 text-green-500" />
                  Generated Proof
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyProof}>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button variant="outline" size="sm" onClick={downloadProof}>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg border">
                <p className="font-mono text-sm break-all text-muted-foreground">
                  {generatedProof}
                </p>
              </div>
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-sm text-green-700 dark:text-green-300">
                  ✓ Proof successfully generated. This cryptographic signature proves ownership of the wallet address.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Info Section */}
        <Card className="mt-8 gradient-border">
          <CardHeader>
            <CardTitle>What is a Wallet Proof?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              A wallet ownership proof is a cryptographic signature that demonstrates you control a specific wallet address 
              without revealing your private key. This is commonly used for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Verifying wallet ownership for DeFi protocols</li>
              <li>Participating in token airdrops and claims</li>
              <li>Authentication for dApps and services</li>
              <li>Proving asset ownership for compliance</li>
            </ul>
            <div className="flex items-start space-x-2 mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Your private key never leaves your wallet. The proof is generated using cryptographic signatures 
                that can be verified by anyone without compromising your security.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}