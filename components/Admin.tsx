import { useState, useEffect } from 'react';
import { AdminLogin } from './admin/AdminLogin';
import { AdminDashboard } from './admin/AdminDashboard';
import { supabase } from '../lib/supabase';

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const auth = localStorage.getItem('adminAuth');
    const savedUsername = localStorage.getItem('adminUsername');
    if (auth === 'true' && savedUsername) {
      setIsAuthenticated(true);
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async (usernameOrEmail: string, password: string) => {
    setLoading(true);
    try {
      // First try database authentication
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', usernameOrEmail)
        .eq('password', password)
        .single();

      if (data && !error) {
        // Database user found
        setIsAuthenticated(true);
        setUsername(data.email);
        localStorage.setItem('adminAuth', 'true');
        localStorage.setItem('adminUsername', data.email);
        return;
      }

      // Fallback to environment variables for backward compatibility
      const validUsername = import.meta.env.VITE_ADMIN_USERNAME || 'admin';
      const validPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'teamunited2024';
      
      if (usernameOrEmail === validUsername && password === validPassword) {
        setIsAuthenticated(true);
        setUsername(usernameOrEmail);
        localStorage.setItem('adminAuth', 'true');
        localStorage.setItem('adminUsername', usernameOrEmail);
      } else {
        alert('Invalid credentials. Please check your email and password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminUsername');
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} loading={loading} />;
  }

  return <AdminDashboard onLogout={handleLogout} username={username} />;
}
