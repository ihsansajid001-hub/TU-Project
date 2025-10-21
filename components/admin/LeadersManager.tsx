import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { ImageUpload } from './ImageUpload';

interface Leader {
  id: string;
  name: string;
  role: string;
  image_url: string;
}

export function LeadersManager() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<Leader>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchLeaders();
  }, []);

  const fetchLeaders = async () => {
    try {
      const { data, error } = await supabase
        .from('leaders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeaders(data || []);
    } catch (error) {
      console.error('Error fetching leaders:', error);
      alert('Failed to load leaders');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setIsAdding(true);
    setFormData({
      name: '',
      role: '',
      image_url: ''
    });
  };

  const handleEdit = (leader: Leader) => {
    setIsEditing(leader.id);
    setFormData(leader);
  };

  const handleSave = async () => {
    if (saving) return;
    
    setSaving(true);
    try {
      if (isAdding) {
        const { error } = await supabase
          .from('leaders')
          .insert([formData]);

        if (error) throw error;
        alert('Leader added successfully!');
      } else if (isEditing) {
        const { error } = await supabase
          .from('leaders')
          .update(formData)
          .eq('id', isEditing);

        if (error) throw error;
        alert('Leader updated successfully!');
      }

      await fetchLeaders();
      handleCancel();
    } catch (error) {
      console.error('Error saving leader:', error);
      alert('Failed to save leader');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this leader?')) return;

    try {
      const { error } = await supabase
        .from('leaders')
        .delete()
        .eq('id', id);

      if (error) throw error;
      alert('Leader deleted successfully!');
      await fetchLeaders();
    } catch (error) {
      console.error('Error deleting leader:', error);
      alert('Failed to delete leader');
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(null);
    setFormData({});
  };

  if (loading) {
    return <div className="text-center py-8 text-muted-foreground">Loading leaders...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Meet Our Change Leaders</h2>
        {!isAdding && !isEditing && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl transition-colors"
          >
            <Plus size={20} />
            <span>Add Leader</span>
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
            {isAdding ? 'Add New Leader' : 'Edit Leader'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground"
            />
            <input
              type="text"
              placeholder="Role"
              value={formData.role || ''}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground"
            />
            <div className="md:col-span-2">
              <ImageUpload
                value={formData.image_url || ''}
                onChange={(imageUrl) => setFormData({ ...formData, image_url: imageUrl })}
                label="Leader Image"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
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

      {/* Leaders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {leaders.map((leader) => (
          <motion.div
            key={leader.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-xl p-4 border border-primary/20 flex flex-col items-center text-center"
          >
            <img 
              src={leader.image_url} 
              alt={leader.name} 
              className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-primary/30"
            />
            <h3 className="text-lg font-bold text-foreground mb-1">{leader.name}</h3>
            <p className="text-sm text-primary mb-4">{leader.role}</p>
            <div className="flex gap-2 w-full">
              <button
                onClick={() => handleEdit(leader)}
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2 glass rounded-lg hover:bg-primary/10 text-primary transition-colors text-sm"
              >
                <Edit size={16} />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(leader.id)}
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2 glass rounded-lg hover:bg-red-500/10 text-red-500 transition-colors text-sm"
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {leaders.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No leaders yet. Click "Add Leader" to create one.
        </div>
      )}
    </div>
  );
}
