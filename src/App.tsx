import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { FeatureCards } from "./components/FeatureCards";
import { StatsSection } from "./components/StatsSection";
import { AIAgents } from "./components/AIAgents";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";
import { PrivacyPage } from "./components/PrivacyPage";
import { TermsPage } from "./components/TermsPage";
import { ContactPage } from "./components/ContactPage";
import { CareersPage } from "./components/CareersPage";
import { ApplicationFormPage } from "./components/ApplicationFormPage";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { ArticlesPage } from "./components/ArticlesPage";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";

type PageType = 'home' | 'privacy' | 'terms' | 'contact' | 'careers' | 'apply' | 'login' | 'signup' | 'articles';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setCurrentPage('apply');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'privacy') {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="pro-technology-ui-theme">
        <Navbar onNavigate={handleNavigate} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="pt-20">
          <PrivacyPage onBack={handleBack} />
        </div>
      </ThemeProvider>
    );
  }

  if (currentPage === 'terms') {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="pro-technology-ui-theme">
        <Navbar onNavigate={handleNavigate} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="pt-20">
          <TermsPage onBack={handleBack} />
        </div>
      </ThemeProvider>
    );
  }

  if (currentPage === 'contact') {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="pro-technology-ui-theme">
        <Navbar onNavigate={handleNavigate} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="pt-20">
          <ContactPage onBack={handleBack} />
        </div>
      </ThemeProvider>
    );
  }

  if (currentPage === 'articles') {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="pro-technology-ui-theme">
        <Navbar onNavigate={handleNavigate} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="pt-20">
          <ArticlesPage onBack={handleBack} />
        </div>
      </ThemeProvider>
    );
  }

  if (currentPage === 'careers') {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="pro-technology-ui-theme">
        <Navbar onNavigate={handleNavigate} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="pt-20">
          <CareersPage onBack={handleBack} onApply={handleApply} />
        </div>
      </ThemeProvider>
    );
  }

  if (currentPage === 'apply') {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="pro-technology-ui-theme">
        <Navbar onNavigate={handleNavigate} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="pt-20">
          <ApplicationFormPage jobTitle={selectedJob} onBack={() => handleNavigate('careers')} />
        </div>
      </ThemeProvider>
    );
  }

  if (currentPage === 'login') {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="pro-technology-ui-theme">
        <LoginPage onBack={handleBack} onLoginSuccess={handleLoginSuccess} onSignupClick={() => handleNavigate('signup')} />
      </ThemeProvider>
    );
  }

  if (currentPage === 'signup') {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="pro-technology-ui-theme">
        <SignupPage onBack={() => handleNavigate('login')} onSignupSuccess={handleLoginSuccess} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="pro-technology-ui-theme">
      <main className="min-h-screen bg-white dark:bg-slate-950">
        <Navbar onNavigate={handleNavigate} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        
        <div className="pt-20">
          <HeroSection />
          <FeatureCards />
          <StatsSection />
          <AIAgents />
          <CTABanner />
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
}