import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Works } from './components/Works';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { ProjectsPreview } from './components/ProjectsPreview';
import { AboutPreview } from './components/AboutPreview';
import { GalleryPreview } from './components/GalleryPreview';
import { StoryPreview } from './components/StoryPreview';
import { Leaders } from './components/Leaders';
import { Partners } from './components/Partners';
import { Story } from './components/Story';
import { StoryDetail } from './components/StoryDetail';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BecomePartner } from './components/BecomePartner';
import { BecomeVolunteer } from './components/BecomeVolunteer';
import { ShareStory } from './components/ShareStory';

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      <AboutPreview />
      <GalleryPreview />
      <StoryPreview />
      <Leaders />
      <Partners />
    </>
  );
}

// Wrapper for page content
function PageWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <>{children}</>;
}

export default function App() {
  // Apply dark mode immediately on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    // Default to dark mode if no preference is stored
    if (stored !== 'light') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/projects/:id" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><Works /></PageWrapper>} />
            <Route path="/story" element={<PageWrapper><Story /></PageWrapper>} />
            <Route path="/story/:id" element={<PageWrapper><StoryDetail /></PageWrapper>} />
            <Route path="/get-in-touch" element={<PageWrapper><Contact /></PageWrapper>} />
            
            {/* Join Us Pages (Not in navbar - accessible from footer/buttons) */}
            <Route path="/become-partner" element={<PageWrapper><BecomePartner /></PageWrapper>} />
            <Route path="/become-volunteer" element={<PageWrapper><BecomeVolunteer /></PageWrapper>} />
            <Route path="/share-story" element={<PageWrapper><ShareStory /></PageWrapper>} />
            
            {/* Catch all unmatched routes and redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
