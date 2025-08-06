import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Phone, Zap, CheckCircle } from "lucide-react";
import heroImage from "@/assets/ai-simulator-hero.png";

export const AISimulator = () => {
  const [candidateName, setCandidateName] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("");

  const isFormValid = candidateName.trim() !== "" && candidatePhone.trim() !== "" && selectedVoice !== "";

  const voices = [
    { id: "aria", name: "Aria - Professional Female" },
    { id: "roger", name: "Roger - Confident Male" },
    { id: "sarah", name: "Sarah - Friendly Female" },
    { id: "charlie", name: "Charlie - Warm Male" },
    { id: "laura", name: "Laura - Experienced Female" }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src={heroImage} 
              alt="AI Customer Simulator" 
              className="w-32 h-24 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            AI Customer Simulator
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Practice your sales skills with AI-powered customer conversations
          </p>
        </div>

        {/* Main Card */}
        <Card className="bg-gradient-card shadow-uplift border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
              <Headphones className="h-6 w-6 text-primary" />
              Setup Your Simulation
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Fill in the details below to start your personalized training session
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Candidate Info Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">👤</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Candidate Information</h3>
              </div>

              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="candidateName" className="text-sm font-medium text-foreground">
                    Candidate Name *
                  </Label>
                  <Input
                    id="candidateName"
                    placeholder="Enter full name"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    className="bg-background border-border focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="candidatePhone" className="text-sm font-medium text-foreground">
                    Phone Number *
                  </Label>
                  <Input
                    id="candidatePhone"
                    placeholder="+91 98765 43210"
                    value={candidatePhone}
                    onChange={(e) => setCandidatePhone(e.target.value)}
                    className="bg-background border-border focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="voiceSelect" className="text-sm font-medium text-foreground">
                    Select AI Voice *
                  </Label>
                  <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                    <SelectTrigger className="bg-background border-border focus:ring-primary">
                      <SelectValue placeholder="Choose a voice for your AI customer" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      {voices.map((voice) => (
                        <SelectItem key={voice.id} value={voice.id} className="hover:bg-accent">
                          {voice.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Simulation Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Simulation Setup</h3>
              </div>

              <div className="bg-accent/50 p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">Simulation Type</span>
                </div>
                <p className="text-muted-foreground">
                  Mutual Fund Sales Simulation - Practice your pitch with realistic customer scenarios
                </p>
              </div>

              <Button 
                size="lg" 
                disabled={!isFormValid}
                className={`w-full h-14 text-lg font-semibold transition-all duration-200 ${
                  isFormValid 
                    ? "bg-primary hover:bg-primary-hover text-primary-foreground shadow-soft hover:shadow-lg" 
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                {isFormValid ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Start Simulation
                  </>
                ) : (
                  "Complete all fields to start"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Info Box */}
        <Card className="mt-8 bg-card/50 border border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xs font-bold text-primary">💡</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">How the Simulation Works</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• The AI customer will respond naturally to your sales approach</p>
                  <p>• Practice handling objections and closing techniques</p>
                  <p>• Receive real-time feedback on your performance</p>
                  <p>• Sessions are recorded for your review and improvement</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};