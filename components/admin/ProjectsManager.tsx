import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { projects as initialProjects, Project } from '../../lib/mockData';

export function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<Project>>({});

  const handleAdd = () => {
    setIsAdding(true);
    setFormData({
      id: 0,
      title: '',
      description: '',
      category: 'Education',
      status: 'ongoing',
      date: new Date().toISOString().split('T')[0],
      location: '',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800'
    });
  };

  const handleEdit = (project: Project) => {
    setIsEditing(String(project.id));
    setFormData(project);
  };

  const handleSave = () => {
    if (isAdding) {
      const newProject = {
        ...formData,
        id: Date.now(),
      } as Project;
      setProjects([...projects, newProject]);
      setIsAdding(false);
    } else if (isEditing) {
      setProjects(projects.map(p => String(p.id) === isEditing ? { ...p, ...formData } : p));
      setIsEditing(null);
    }
    setFormData({});
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
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
        <h2 className="text-2xl font-bold text-foreground">Manage Projects</h2>
        {!isAdding && !isEditing && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl transition-colors"
          >
            <Plus size={20} />
            <span>Add Project</span>
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
            {isAdding ? 'Add New Project' : 'Edit Project'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground"
            />
            <input
              type="text"
              placeholder="Location"
              value={formData.location || ''}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground"
            />
            <select
              value={formData.category || 'Education'}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground"
            >
              <option>Education</option>
              <option>Environment</option>
              <option>Charity</option>
              <option>Technology</option>
            </select>
            <select
              value={formData.status || 'ongoing'}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'completed' | 'ongoing' })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground"
            >
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
            <input
              type="date"
              value={formData.date || ''}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground"
            />
            <input
              type="url"
              placeholder="Image URL"
              value={formData.image || ''}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="px-4 py-2 glass rounded-xl border border-primary/20 bg-background text-foreground"
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-xl p-4 border border-primary/20 flex flex-col"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-1 text-xs mb-3">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-md">{project.category}</span>
              <span className="px-2 py-1 glass rounded-md text-foreground">{project.status}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(project)}
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2 glass rounded-lg hover:bg-primary/10 text-primary transition-colors text-sm"
              >
                <Edit size={16} />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(project.id)}
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
