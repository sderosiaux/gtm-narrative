'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Intro', icon: '◆' },
  { id: 'context', label: 'Context', icon: '◇' },
  { id: 'characters', label: 'Characters', icon: '◇' },
  { id: 'step-1', label: 'Step 1', subtitle: 'See', icon: '①' },
  { id: 'step-2', label: 'Step 2', subtitle: 'Define', icon: '②' },
  { id: 'step-3', label: 'Step 3', subtitle: 'Enable', icon: '③' },
  { id: 'step-4', label: 'Step 4', subtitle: 'Trust', icon: '④' },
  { id: 'outcome', label: 'Outcome', icon: '★' },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setIsVisible(window.scrollY > 300);

      // Find active section
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 hidden lg:block ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
      }`}
    >
      <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-neutral-200 dark:border-neutral-800">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`group flex items-center gap-2 w-full px-3 py-2 rounded-xl text-left transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                    : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400'
                }`}
              >
                <span className="text-xs font-mono">{section.icon}</span>
                <span className="text-xs font-medium whitespace-nowrap">
                  {section.label}
                </span>
                {section.subtitle && (
                  <span className={`text-[10px] ml-auto ${
                    activeSection === section.id
                      ? 'text-neutral-400 dark:text-neutral-500'
                      : 'text-neutral-400 dark:text-neutral-600'
                  }`}>
                    {section.subtitle}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
