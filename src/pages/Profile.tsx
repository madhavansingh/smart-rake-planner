import { useState } from 'react';
import Navbar from '@/components/Navbar';
import AIAssistant from '@/components/AIAssistant';
import Background3D from '@/components/Background3D';
import { User, Mail, Briefcase, Shield, Bell, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@sail.com',
    role: 'Manager',
    notifications: true,
    aiInsights: true,
  });

  const handleSave = () => {
    console.log('Profile saved:', profile);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Background3D />
      <Navbar />
      <AIAssistant />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold font-montserrat text-foreground mb-2 flex items-center gap-3">
            <User className="w-10 h-10 text-accent" />
            Profile Settings
          </h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="card-premium p-6 animate-slide-up">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent to-yellow-500 rounded-full mb-4 shadow-ai-glow">
                <User className="w-12 h-12 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{profile.name}</h2>
              <p className="text-sm text-muted-foreground">{profile.email}</p>
              <div className="mt-3">
                <span className="inline-flex px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/30">
                  {profile.role}
                </span>
              </div>
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">Notifications</span>
                </div>
                <Switch
                  checked={profile.notifications}
                  onCheckedChange={(checked) =>
                    setProfile({ ...profile, notifications: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-sm text-foreground">AI Insights</span>
                </div>
                <Switch
                  checked={profile.aiInsights}
                  onCheckedChange={(checked) =>
                    setProfile({ ...profile, aiInsights: checked })
                  }
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-secondary/10 border border-secondary/30 rounded-lg bg-white">
              <p className="text-xs text-secondary-foreground flex items-center gap-2 ">
                <Sparkles className="w-3 h-3" />
                Your plan completion rate is <span className="font-bold">87%</span>
              </p>
            </div>
          </div>

          {/* Edit Profile Form */}
          <div className="lg:col-span-2 card-premium p-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-foreground mb-6">Account Information</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="pl-10 h-11 bg-background border-border focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="pl-10 h-11 bg-background border-border focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-sm font-medium">Role</Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="role"
                      type="text"
                      value={profile.role}
                      disabled
                      className="pl-10 h-11 bg-muted border-border cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department" className="text-sm font-medium">Department</Label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="department"
                      type="text"
                      value="Logistics Planning"
                      disabled
                      className="pl-10 h-11 bg-muted border-border cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Change Password</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword" className="text-sm font-medium">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      placeholder="••••••••"
                      className="h-11 bg-background border-border focus:border-accent transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword" className="text-sm font-medium">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        placeholder="••••••••"
                        className="h-11 bg-background border-border focus:border-accent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="h-11 bg-background border-border focus:border-accent transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="border-border hover:bg-muted"
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={handleSave}
                  className="btn-primary-premium"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
