import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Calendar, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/dashboard");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Stellar Student AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your intelligent study companion powered by AI. Get personalized help, track assignments, and access curated resources tailored to your academic journey.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/auth")}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-all">
            <Brain className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-headline font-semibold mb-2">AI-Powered Q&A</h3>
            <p className="text-muted-foreground text-sm">
              Get instant answers to your academic questions with our intelligent AI assistant
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-all">
            <BookOpen className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-lg font-headline font-semibold mb-2">Curated Resources</h3>
            <p className="text-muted-foreground text-sm">
              Access study materials and resources matched to your branch and year
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-all">
            <Calendar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-headline font-semibold mb-2">Assignment Tracking</h3>
            <p className="text-muted-foreground text-sm">
              Never miss a deadline with smart reminders and organization tools
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-all">
            <TrendingUp className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-lg font-headline font-semibold mb-2">Skill Development</h3>
            <p className="text-muted-foreground text-sm">
              Follow personalized learning paths to build industry-relevant skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
