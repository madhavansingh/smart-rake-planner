import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Sparkles, CheckCircle } from 'lucide-react';
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
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      <Background3D />

      <div className="w-full max-w-md relative z-10">
        {/* Removed Logo Section */}

        {/* Reset Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 animate-scale-in">
          {!sent ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-2 font-montserrat text-gray-800">Forgot Password?</h2>
              <p className="text-center text-gray-500 mb-6">
                No worries, we'll send you reset instructions
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 flex items-start space-x-2 animate-pulse-slow">
                <Sparkles className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-yellow-700">
                  AI-generated secure reset link will be sent to your email
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@sail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 bg-white border-gray-300 focus:border-yellow-400 transition-all text-gray-900"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white text-base font-semibold rounded-lg shadow"
                >
                  Send Reset Link
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2 font-montserrat text-gray-800">Check Your Email</h2>
              <p className="text-gray-500 mb-6">
                We've sent a password reset link to<br />
                <span className="font-medium text-gray-900">{email}</span>
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-green-700">
                  The link will expire in 1 hour for security reasons
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-blue-500 hover:text-blue-700 font-medium transition-colors"
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
