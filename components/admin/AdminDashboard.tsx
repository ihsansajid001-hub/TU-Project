import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, FolderKanban, Image, BookOpen } from 'lucide-react';
import { ProjectsManager } from './ProjectsManager';
import { GalleryManager } from './GalleryManager';
import { StoryManager } from './StoryManager';

interface AdminDashboardProps {
  onLogout: () => void;
}

type Tab = 'projects' | 'gallery' | 'story';

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('projects');

  const tabs = [
    { id: 'projects' as Tab, label: 'Projects', icon: FolderKanban },
    { id: 'gallery' as Tab, label: 'Gallery', icon: Image },
    { id: 'story' as Tab, label: 'Stories', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass border-b border-primary/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Team United Management</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'glass border border-primary/20 text-foreground hover:border-primary/40'
                }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'projects' && <ProjectsManager />}
          {activeTab === 'gallery' && <GalleryManager />}
          {activeTab === 'story' && <StoryManager />}
        </motion.div>
      </div>
    </div>
  );
}
