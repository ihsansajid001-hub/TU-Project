import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { works as initialWorks, Work } from '../../lib/mockData';

export function GalleryManager() {
  const [works, setWorks] = useState<Work[]>(initialWorks);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<Work>>({});

  const handleAdd = () => {
    setIsAdding(true);
    setFormData({
      id: 0,
      title: '',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
      description: '',
      link: '#'
    });
  };

  const handleEdit = (work: Work) => {
    setIsEditing(String(work.id));
    setFormData(work);
  };

  const handleSave = () => {
    if (isAdding) {
      const newWork = {
        ...formData,
        id: Date.now(),
      } as Work;
      setWorks([...works, newWork]);
      setIsAdding(false);
    } else if (isEditing) {
      setWorks(works.map(w => String(w.id) === isEditing ? { ...w, ...formData } : w));
      setIsEditing(null);
    }
    setFormData({});
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this gallery item?')) {
      setWorks(works.filter(w => w.id !== id));
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(null);
    setFormData({});
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Manage Gallery</h2>
        {!isAdding && !isEditing && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl transition-colors"
          >
            <Plus size={20} />
            <span>Add Gallery Item</span>
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
            {isAdding ? 'Add New Gallery Item' : 'Edit Gallery Item'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground md:col-span-2"
            />
            <input
              type="url"
              placeholder="Image URL"
              value={formData.image || ''}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground md:col-span-2"
            />
            <input
              type="text"
              placeholder="Link (e.g., #education)"
              value={formData.link || ''}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground md:col-span-2"
            />
            <textarea
              placeholder="Description"
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground md:col-span-2"
              rows={3}
            />
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl transition-colors"
            >
              <Save size={20} />
              <span>Save</span>
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

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl overflow-hidden border border-primary/20"
          >
            <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-foreground mb-2">{work.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{work.description}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-3">
                <span className="px-2 py-1 glass rounded-lg text-foreground">{work.link}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(work)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 glass rounded-lg hover:bg-primary/10 text-primary transition-colors"
                >
                  <Edit size={16} />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(work.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 glass rounded-lg hover:bg-red-500/10 text-red-500 transition-colors"
                >
                  <Trash2 size={16} />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
