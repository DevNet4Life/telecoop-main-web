import { useState } from 'react';
import { Eye, EyeOff, Shield, Users, Wifi, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { useAuth } from '../contexts/AuthContext';

interface LoginPageProps {
  onBack: () => void;
}

export function LoginPage({ onBack }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const result = await login(email, password);
    if (!result.success) {
      setError(result.error || 'Login failed');
    }
  };

  const demoCredentials = [
    { role: 'Admin', email: 'admin@telecoop.ph', password: 'admin123', description: 'Full system access' },
    { role: 'Super Admin', email: 'superadmin@telecoop.ph', password: 'super123', description: 'Complete control' },
    { role: 'Editor', email: 'editor@telecoop.ph', password: 'editor123', description: 'Content management' },
    { role: 'Member', email: 'member@telecoop.ph', password: 'member123', description: 'Member portal' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Wifi className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">
                TELEC<span className="text-primary">OO</span>P
              </span>
            </div>
            <p className="text-muted-foreground">
              Philippines' First Registered Telecommunications Service Cooperative
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-lg">
              <Shield className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Secure Access</h3>
                <p className="text-sm text-muted-foreground">
                  Protected portal with role-based permissions
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-lg">
              <Users className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Multi-Role System</h3>
                <p className="text-sm text-muted-foreground">
                  Admin, Editor, and Member access levels
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Website
          </Button>

          <Card>
            <CardHeader className="text-center">
              <CardTitle>TeleCoop Portal Login</CardTitle>
              <CardDescription>
                Access your account based on your role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      disabled={isLoading}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoading}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Forgot your password?
                </p>
                <Button variant="link" className="text-sm">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Demo Credentials */}
          <Card className="mt-6 bg-amber-50 border-amber-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-amber-800">Demo Credentials</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                {demoCredentials.map((cred, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-xs bg-white/50 p-2 rounded cursor-pointer hover:bg-white/70 transition-colors"
                    onClick={() => {
                      setEmail(cred.email);
                      setPassword(cred.password);
                    }}
                  >
                    <div>
                      <span className="font-medium text-amber-800">{cred.role}:</span>
                      <p className="text-amber-700">{cred.email}</p>
                    </div>
                    <span className="text-amber-600 text-xs">{cred.description}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-amber-700 mt-2 text-center">
                Click any credential to auto-fill the form
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}