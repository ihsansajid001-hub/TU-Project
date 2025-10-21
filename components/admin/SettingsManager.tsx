import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X, Eye, EyeOff, Mail, Lock, Shield } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface AdminUser {
  id: string;
  email: string;
  password: string;
  is_admin: boolean;
}

export function SettingsManager() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<AdminUser>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setIsAdding(true);
    setFormData({
      email: '',
      password: '',
      is_admin: true
    });
  };

  const handleEdit = (user: AdminUser) => {
    setIsEditing(user.id);
    setFormData(user);
  };

  const handleSave = async () => {
    if (saving) return;
    
    if (!formData.email || !formData.password) {
      alert('Email and password are required');
      return;
    }

    setSaving(true);
    try {
      if (isAdding) {
        const { error } = await supabase
          .from('admin_users')
          .insert([formData]);

        if (error) throw error;
        alert('Admin user added successfully!');
      } else if (isEditing) {
        const { error } = await supabase
          .from('admin_users')
          .update(formData)
          .eq('id', isEditing);

        if (error) throw error;
        alert('Admin user updated successfully!');
      }

      await fetchUsers();
      handleCancel();
    } catch (error: any) {
      console.error('Error saving user:', error);
      if (error.code === '23505') {
        alert('This email already exists');
      } else {
        alert('Failed to save user');
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this admin user?')) return;

    try {
      const { error } = await supabase
        .from('admin_users')
        .delete()
        .eq('id', id);

      if (error) throw error;
      alert('Admin user deleted successfully!');
      await fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(null);
    setFormData({});
  };

  const togglePasswordVisibility = (id: string) => {
    setShowPassword(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) {
    return <div className="text-center py-8 text-muted-foreground">Loading settings...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Admin Settings</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage admin users and access</p>
        </div>
        {!isAdding && !isEditing && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl transition-colors"
          >
            <Plus size={20} />
            <span>Add Admin User</span>
          </motion.button>
        )}
      </div>

      {/* Add/Edit Form */}
      {(isAdding || isEditing) && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-6 border border-primary/20"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">
            {isAdding ? 'Add New Admin User' : 'Edit Admin User'}
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Mail size={16} className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                placeholder="admin@example.com"
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Lock size={16} className="inline mr-2" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword['form'] ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={formData.password || ''}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-2 pr-12 glass rounded-xl border border-primary/20 bg-background text-foreground"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('form')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword['form'] ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="is_admin"
                checked={formData.is_admin || false}
                onChange={(e) => setFormData({ ...formData, is_admin: e.target.checked })}
                className="w-4 h-4 text-primary rounded"
              />
              <label htmlFor="is_admin" className="text-sm text-foreground flex items-center gap-2">
                <Shield size={16} className="text-primary" />
                Admin Access
              </label>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save size={20} />
              <span>{saving ? 'Saving...' : 'Save'}</span>
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 glass border border-primary/20 text-foreground rounded-xl hover:border-primary/40 transition-colors"
            >
              <X size={20} />
              <span>Cancel</span>
            </button>
          </div>
        </motion.div>
      )}

      {/* Users List */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-foreground">Admin Users</h3>
        {users.map((user) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-xl p-4 border border-primary/20 flex items-center justify-between"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={18} className="text-primary" />
                <span className="font-semibold text-foreground">{user.email}</span>
                {user.is_admin && (
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full flex items-center gap-1">
                    <Shield size={12} />
                    Admin
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock size={14} />
                <span className="font-mono">
                  {showPassword[user.id] ? user.password : '••••••••'}
                </span>
                <button
                  onClick={() => togglePasswordVisibility(user.id)}
                  className="text-primary hover:text-primary-dark"
                >
                  {showPassword[user.id] ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(user)}
                className="flex items-center gap-1 px-3 py-2 glass rounded-lg hover:bg-primary/10 text-primary transition-colors text-sm"
              >
                <Edit size={16} />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="flex items-center gap-1 px-3 py-2 glass rounded-lg hover:bg-red-500/10 text-red-500 transition-colors text-sm"
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {users.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No admin users yet. Click "Add Admin User" to create one.
        </div>
      )}
    </div>
  );
}
