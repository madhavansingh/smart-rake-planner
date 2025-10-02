import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, ArrowLeft, Sparkles, CheckCircle } from 'lucide-react';
import Background3D from '@/components/Background3D';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      <Background3D />

      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-cyan-500 rounded-2xl shadow-ai-glow mb-4 ai-pulse">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-montserrat font-bold text-gradient-gold mb-2">
            Smart Rake Planner
          </h1>
          <p className="text-muted-foreground text-sm">AI-Powered Password Recovery</p>
        </div>

        {/* Reset Card */}
        <div className="bg-card/95 backdrop-blur-xl rounded-2xl shadow-3xl p-8 border border-secondary/20 animate-scale-in">
          {!sent ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-2 font-montserrat">Forgot Password?</h2>
              <p className="text-center text-muted-foreground mb-6">
                No worries, we'll send you reset instructions
              </p>

              <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-3 mb-6 flex items-start space-x-2 animate-pulse-slow">
                <Sparkles className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-xs text-secondary-foreground">
                  AI-generated secure reset link will be sent to your email
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@sail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 bg-background border-border focus:border-accent transition-all"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 btn-primary-premium text-base"
                >
                  Send Reset Link
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h2 className="text-2xl font-bold mb-2 font-montserrat">Check Your Email</h2>
              <p className="text-muted-foreground mb-6">
                We've sent a password reset link to<br />
                <span className="font-medium text-foreground">{email}</span>
              </p>
              <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4 mb-6">
                <p className="text-sm text-secondary-foreground">
                  The link will expire in 1 hour for security reasons
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-accent hover:text-accent/80 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
