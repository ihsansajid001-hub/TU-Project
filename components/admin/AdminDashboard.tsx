import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogOut, FolderKanban, Image, BookOpen, Home, Sun, Moon, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectsManager } from './ProjectsManager';
import { GalleryManager } from './GalleryManager';
import { StoryManager } from './StoryManager';
import { LeadersManager } from './LeadersManager';

interface AdminDashboardProps {
  onLogout: () => void;
  username: string;
}

type Tab = 'projects' | 'gallery' | 'story' | 'leaders';

export function AdminDashboard({ onLogout, username }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('projects');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const shouldBeDark = stored === 'light' ? false : true;
    setIsDark(shouldBeDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const tabs = [
    { id: 'projects' as Tab, label: 'Projects', icon: FolderKanban },
    { id: 'gallery' as Tab, label: 'Gallery', icon: Image },
    { id: 'story' as Tab, label: 'Stories', icon: BookOpen },
    { id: 'leaders' as Tab, label: 'Leaders', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass border-b border-primary/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back, <span className="text-primary font-semibold">{username}</span>!</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 glass border border-primary/20 hover:border-primary/40 text-foreground rounded-xl transition-colors"
                >
                  <Home size={20} />
                  <span className="hidden sm:inline">Back to Website</span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="p-2 glass border border-primary/20 hover:border-primary/40 rounded-xl transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} className="text-foreground" /> : <Moon size={20} className="text-foreground" />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-colors"
              >
                <LogOut size={20} />
                <span className="hidden sm:inline">Logout</span>
              </motion.button>
            </div>
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
          {activeTab === 'leaders' && <LeadersManager />}
        </motion.div>
      </div>
    </div>
  );
}
