import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { stories as initialStories, Testimonial } from '../../lib/mockData';
import { ImageUpload } from './ImageUpload';

type Story = Testimonial;

export function StoryManager() {
  const [stories, setStories] = useState<Story[]>(initialStories);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<Story>>({});

  const handleAdd = () => {
    setIsAdding(true);
    setFormData({
      id: 0,
      name: '',
      location: '',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      project: '',
      story: '',
      quote: '',
      impact: ''
    });
  };

  const handleEdit = (story: Story) => {
    setIsEditing(String(story.id));
    setFormData(story);
  };

  const handleSave = () => {
    if (isAdding) {
      const newStory = {
        ...formData,
        id: Date.now(),
      } as Story;
      setStories([...stories, newStory]);
      setIsAdding(false);
    } else if (isEditing) {
      setStories(stories.map(s => String(s.id) === isEditing ? { ...s, ...formData } : s));
      setIsEditing(null);
    }
    setFormData({});
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this story?')) {
      setStories(stories.filter(s => s.id !== id));
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
        <h2 className="text-2xl font-bold text-foreground">Manage Stories</h2>
        {!isAdding && !isEditing && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl transition-colors"
          >
            <Plus size={20} />
            <span>Add Story</span>
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
            {isAdding ? 'Add New Story' : 'Edit Story'}
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
              placeholder="Location"
              value={formData.location || ''}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground"
            />
            <input
              type="text"
              placeholder="Project"
              value={formData.project || ''}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground md:col-span-2"
            />
            <div className="md:col-span-2">
              <ImageUpload
                value={formData.image || ''}
                onChange={(imageUrl) => setFormData({ ...formData, image: imageUrl })}
                label="Profile Image"
              />
            </div>
            <textarea
              placeholder="Quote"
              value={formData.quote || ''}
              onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground md:col-span-2"
              rows={2}
            />
            <textarea
              placeholder="Story"
              value={formData.story || ''}
              onChange={(e) => setFormData({ ...formData, story: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground md:col-span-2"
              rows={4}
            />
            <textarea
              placeholder="Impact"
              value={formData.impact || ''}
              onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground md:col-span-2"
              rows={2}
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

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-xl p-4 border border-primary/20 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <img 
                src={story.image} 
                alt={story.name} 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-foreground line-clamp-1">{story.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-1">{story.location}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-1 font-semibold">{story.project}</p>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2 italic">"{story.quote}"</p>
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-1">{story.story}</p>
            <p className="text-xs text-primary mb-3 line-clamp-1">Impact: {story.impact}</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(story)}
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2 glass rounded-lg hover:bg-primary/10 text-primary transition-colors text-sm"
              >
                <Edit size={16} />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(story.id)}
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2 glass rounded-lg hover:bg-red-500/10 text-red-500 transition-colors text-sm"
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
