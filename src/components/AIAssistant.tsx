import { useState, useEffect } from 'react';
import { Brain, X, Sparkles, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Hello! I\'m your AI assistant. I\'m analyzing your logistics data in real-time.' },
    { type: 'ai', text: '✓ Detected optimization opportunity: Combine RAKE-102 with RAKE-105 for ₹1.2L savings' },
  ]);

  const insights = [
    { icon: TrendingUp, text: 'Cost efficiency up 18% this quarter', color: 'text-success' },
    { icon: AlertCircle, text: 'Rourkela stockyard at 93% capacity', color: 'text-warning' },
    { icon: Sparkles, text: 'AI processing 47 pending orders', color: 'text-secondary' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomInsights = [
        'Analyzing dispatch patterns...',
        'Optimizing rake utilization...',
        'Detecting cost-saving opportunities...',
        'Monitoring stockyard capacities...',
      ];
      const randomInsight = randomInsights[Math.floor(Math.random() * randomInsights.length)];
      
      setMessages(prev => [...prev.slice(-5), { type: 'ai', text: randomInsight }]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* AI Assistant Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-secondary via-cyan-500 to-blue-500 rounded-full shadow-2xl ai-glow ai-pulse flex items-center justify-center hover:scale-110 transition-all duration-300"
      >
        <Brain className="w-8 h-8 text-white" />
      </button>

      {/* AI Assistant Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 animate-slide-up">
          <div className="card-premium p-6 glass-effect border-secondary/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-blue-500 rounded-full flex items-center justify-center ai-pulse">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">AI Assistant</h3>
                  <p className="text-xs text-secondary flex items-center gap-1">
                    <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    Active & Learning
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Quick Insights */}
            <div className="space-y-2 mb-4">
              {insights.map((insight, idx) => {
                const Icon = insight.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 bg-muted/50 rounded-lg border border-border/50 hover:border-secondary/50 transition-all animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <p className={`text-sm flex items-center gap-2 ${insight.color}`}>
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      {insight.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Message Stream */}
            <div className="space-y-2 max-h-48 overflow-y-auto mb-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-secondary/10 rounded-lg border border-secondary/20 animate-fade-in"
                >
                  <p className="text-xs text-foreground flex items-start gap-2">
                    <Sparkles className="w-3 h-3 text-secondary mt-0.5 flex-shrink-0" />
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>

            <Button className="w-full btn-ai text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Ask AI a Question
            </Button>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(var(--muted));
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--secondary));
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default AIAssistant;
