import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
import enAbout from './locales/en/about.json';
import enContact from './locales/en/contact.json';
import enExperience from './locales/en/experience.json';
import enHero from './locales/en/hero.json';
import enProjects from './locales/en/projects.json';
import enNavbar from './locales/en/navbar.json';

// Vietnamese translations
import viAbout from './locales/vi/about.json';
import viContact from './locales/vi/contact.json';
import viExperience from './locales/vi/experience.json';
import viHero from './locales/vi/hero.json';
import viProjects from './locales/vi/projects.json';
import viNavbar from './locales/vi/navbar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        about: enAbout,
        contact: enContact,
        experience: enExperience,
        hero: enHero,
        projects: enProjects,
        navbar: enNavbar
      },
      vi: {
        about: viAbout,
        contact: viContact,
        experience: viExperience,
        hero: viHero,
        projects: viProjects,
        navbar: viNavbar
      }
    },
    fallbackLng: 'en',
    debug: false,
    
    // have a common namespace used around the full app
    ns: ['about', 'contact', 'experience', 'hero', 'projects', 'navbar'],
    defaultNS: 'hero',
    
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;