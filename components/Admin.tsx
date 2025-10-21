import { useState, useEffect } from 'react';
import { AdminLogin } from './admin/AdminLogin';
import { AdminDashboard } from './admin/AdminDashboard';

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if user is already logged in
    const auth = localStorage.getItem('adminAuth');
    const savedUsername = localStorage.getItem('adminUsername');
    if (auth === 'true' && savedUsername) {
      setIsAuthenticated(true);
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = (username: string, password: string) => {
    // Simple authentication - in production, use proper backend authentication
    if (username === 'admin' && password === 'teamunited2024') {
      setIsAuthenticated(true);
      setUsername(username);
      localStorage.setItem('adminAuth', 'true');
      localStorage.setItem('adminUsername', username);
    } else {
      alert('Invalid credentials. Use username: admin, password: teamunited2024');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminUsername');
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard onLogout={handleLogout} username={username} />;
}
