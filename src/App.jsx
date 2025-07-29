import React, { useState, useEffect } from 'react';

// Import data (assuming episodesData.js is in src/data)


// Import UI Components
import NavItem from './components/Navitem';
import ThemeToggle from './components/ThemeToggle'; // New import for ThemeToggle

// Import View Orchestration Components
import HomeView from './components/HomeView';
import FullSectionView from './components/FullSectionView';


// --- Main App Component ---
const App = () => {
  // State to manage the currently active section for navigation highlighting
  const [activeSection, setActiveSection] = useState('home');
  // State to manage the current view: 'home' for previews, or a section ID for full view
  const [currentView, setCurrentView] = useState('home');
  // State to manage the theme: 'light' or 'dark'
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'light'
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Effect to apply theme class to html element and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]); // Rerun when theme changes

  // Effect to handle scroll events for highlighting the active navigation item (only on home view)
  useEffect(() => {
    const handleScroll = () => {
      if (currentView !== 'home') return;

      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      if (window.scrollY < headerHeight + 50) {
        setActiveSection('home');
      } else {
        // This part can be simplified or removed if only 'Home' needs dynamic highlighting.
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentView]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Function to handle navigation item click
  const handleNavClick = (sectionId) => {
    if (sectionId === 'home') {
      setCurrentView('home');
      setActiveSection('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView(sectionId);
      setActiveSection(sectionId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Function to navigate to a specific section (used by "More About This" buttons)
  const handleNavigateToSection = (sectionId) => {
    setCurrentView(sectionId);
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to go back to the home view
  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 font-inter text-gray-800 dark:text-gray-100 flex flex-col transition-colors duration-500">
      {/* Header Section */}
      <header className="bg-blue-600 dark:bg-blue-900 shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between sticky top-0 z-50 rounded-b-xl transition-colors duration-500">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 md:mb-0">
          Doraemon Den
        </h1>
        {/* Navigation Bar and Theme Toggle */}
        <div className="flex items-center gap-4">
          <nav className="flex flex-wrap justify-center gap-3 md:gap-3">
            <NavItem label="Home" sectionId="home" activeSection={activeSection} onNavClick={handleNavClick} />
            <NavItem label="About" sectionId="about" activeSection={activeSection} onNavClick={handleNavClick} />
            <NavItem label="Video Episodes" sectionId="video-episodes" activeSection={activeSection} onNavClick={handleNavClick} /> 
            <NavItem label="Characters" sectionId="characters" activeSection={activeSection} onNavClick={handleNavClick} />
            <NavItem label="Places" sectionId="places" activeSection={activeSection} onNavClick={handleNavClick} />
            <NavItem label="Gadgets" sectionId="gadgets" activeSection={activeSection} onNavClick={handleNavClick} />
           <NavItem label="Discussion" sectionId="episodes" activeSection={activeSection} onNavClick={handleNavClick} />
           </nav>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-4 md:p-8">
        {currentView === 'home' ? (
          <HomeView onNavigateToSection={handleNavigateToSection} />
        ) : (
          <FullSectionView sectionId={currentView} onBackToHome={handleBackToHome} />
        )}
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-700 dark:bg-blue-950 text-white p-4 text-center text-sm rounded-t-xl mt-8 transition-colors duration-500">
        <p>&copy; 2025 Doraemon Universe Fan App. All rights reserved. Content for educational purposes only.</p>
      </footer>
    </div>
  );
};

export default App;