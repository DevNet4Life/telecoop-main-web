import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";
import { EditorHeader } from "./components/EditorHeader";
import { EditorSidebar } from "./components/EditorSidebar";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { MembershipPage } from "./components/pages/MembershipPage";
import { ContactPage } from "./components/pages/ContactPage";
import { NewsPage } from "./components/pages/NewsPage";
import { MemberInquiryPage } from "./components/pages/MemberInquiryPage";
import { LoginPage } from "./components/pages/LoginPage";
import { AdminDashboard } from "./components/pages/AdminDashboard";
import { EditorDashboard } from "./components/pages/EditorDashboard";
import { ContentManager } from "./components/pages/editor/ContentManager";
import { AuthProvider, useAuth } from "./components/contexts/AuthContext";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { isAuthenticated, user } = useAuth();

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  // Effect to handle authentication redirect
  React.useEffect(() => {
    if (isAuthenticated && currentPage === "login") {
      // Redirect based on user role
      if (user?.role === 'editor') {
        setCurrentPage("editor-dashboard");
      } else {
        setCurrentPage("dashboard");
      }
    }
  }, [isAuthenticated, currentPage, user?.role]);

  // Effect to handle logout - redirect to login when user becomes unauthenticated
  React.useEffect(() => {
    if (!isAuthenticated && currentPage !== "login" && currentPage !== "home" && 
        currentPage !== "about" && currentPage !== "services" && 
        currentPage !== "membership" && currentPage !== "member-inquiry" && 
        currentPage !== "contact" && currentPage !== "news") {
      // User logged out from a protected page, redirect to login
      setCurrentPage("login");
    }
  }, [isAuthenticated, currentPage]);

  const handleBackToPublic = () => {
    setCurrentPage("home");
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Public pages
  const renderPublicPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "membership":
        return <MembershipPage onNavigate={handleNavigate} />;
      case "member-inquiry":
        return <MemberInquiryPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage />;
      case "news":
        return <NewsPage />;
      case "login":
        return <LoginPage onBack={handleBackToPublic} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // Admin pages
  const renderAdminPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <AdminDashboard onNavigate={handleNavigate} />;
      case "members":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Member Management</h1>
            <p>Member management interface coming soon...</p>
          </div>
        );
      case "inquiries":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Member Inquiries</h1>
            <p>Member inquiry management interface coming soon...</p>
          </div>
        );
      case "admin-services":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Service Management</h1>
            <p>Service management interface coming soon...</p>
          </div>
        );
      case "reports":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Reports & Analytics</h1>
            <p>Reports and analytics interface coming soon...</p>
          </div>
        );
      case "settings":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">System Settings</h1>
            <p>System settings interface coming soon...</p>
          </div>
        );
      case "home":
      case "about":
      case "membership":
      case "member-inquiry":
      case "contact":
      case "news":
        // Handle navigation to public pages from admin panel
        return renderPublicPage();
      default:
        return <AdminDashboard onNavigate={handleNavigate} />;
    }
  };

  // Editor pages
  const renderEditorPage = () => {
    switch (currentPage) {
      case "editor-dashboard":
        return <EditorDashboard onNavigate={handleNavigate} />;
      case "content-manager":
        return <ContentManager onNavigate={handleNavigate} />;
      case "page-editor":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Page Editor</h1>
            <p>Rich text page editor coming soon...</p>
          </div>
        );
      case "news-manager":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">News & Articles</h1>
            <p>News management interface coming soon...</p>
          </div>
        );
      case "media-library":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Media Library</h1>
            <p>Media management interface coming soon...</p>
          </div>
        );
      case "seo-manager":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">SEO & Meta Tags</h1>
            <p>SEO management interface coming soon...</p>
          </div>
        );
      case "navigation-manager":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Navigation Manager</h1>
            <p>Navigation management interface coming soon...</p>
          </div>
        );
      case "content-scheduler":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Content Scheduler</h1>
            <p>Content scheduling interface coming soon...</p>
          </div>
        );
      case "content-analytics":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Content Analytics</h1>
            <p>Content analytics interface coming soon...</p>
          </div>
        );
      case "home":
      case "about":
      case "membership":
      case "member-inquiry":
      case "contact":
      case "news":
        // Handle navigation to public pages from editor panel
        return renderPublicPage();
      default:
        return <EditorDashboard onNavigate={handleNavigate} />;
    }
  };

  // Define page categories
  const adminPages = ["dashboard", "members", "inquiries", "admin-services", "reports", "settings", "admins"];
  const editorPages = [
    "editor-dashboard", "content-manager", "page-editor", "news-manager", 
    "media-library", "seo-manager", "navigation-manager", "content-scheduler", "content-analytics"
  ];
  const publicPages = ["home", "about", "services", "membership", "member-inquiry", "contact", "news"];
  
  // Determine current panel type
  const isAdminPage = isAuthenticated && user?.role !== 'editor' && adminPages.includes(currentPage);
  const isEditorPage = isAuthenticated && user?.role === 'editor' && editorPages.includes(currentPage);
  
  // Handle role-based redirects
  const shouldRedirectToRoleDashboard = isAuthenticated && !adminPages.includes(currentPage) && 
    !editorPages.includes(currentPage) && !publicPages.includes(currentPage);

  // Show login page
  if (currentPage === "login") {
    return <LoginPage onBack={handleBackToPublic} />;
  }

  // Redirect users to appropriate dashboard if needed
  if (shouldRedirectToRoleDashboard) {
    if (user?.role === 'editor') {
      setCurrentPage("editor-dashboard");
    } else {
      setCurrentPage("dashboard");
    }
    return null; // Return null to prevent rendering during redirect
  }

  // Show editor layout for editor users
  if (isAuthenticated && isEditorPage) {
    return (
      <div className="min-h-screen flex">
        <EditorSidebar 
          currentPage={currentPage}
          onNavigate={handleNavigate}
          isCollapsed={sidebarCollapsed}
        />
        <div className="flex-1 flex flex-col">
          <EditorHeader 
            currentPage={currentPage}
            onToggleSidebar={toggleSidebar}
            onNavigate={handleNavigate}
          />
          <main className="flex-1 bg-gray-50 overflow-auto">
            <div className="p-6">
              {renderEditorPage()}
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Show admin layout for admin users
  if (isAuthenticated && isAdminPage) {
    return (
      <div className="min-h-screen flex">
        <AdminSidebar 
          currentPage={currentPage}
          onNavigate={handleNavigate}
          isCollapsed={sidebarCollapsed}
        />
        <div className="flex-1 flex flex-col">
          <AdminHeader 
            currentPage={currentPage}
            onToggleSidebar={toggleSidebar}
            onNavigate={handleNavigate}
          />
          <main className="flex-1 bg-gray-50 overflow-auto">
            {renderAdminPage()}
          </main>
        </div>
      </div>
    );
  }

  // Show public layout
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPublicPage()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}