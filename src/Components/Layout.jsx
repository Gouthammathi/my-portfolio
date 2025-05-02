import React from 'react';
import Header from './Header'; // Assuming Header component exists
import Footer from './Footer'; // Assuming Footer component exists

// The Layout component now accepts 'children' to render page content
const Layout = ({ children }) => {
  return (
    // Apply base background (navy) and text color (light-gray)
    <div className="bg-navy text-light-gray font-sans min-h-screen flex flex-col">
      <Header />
      {/* Render the page content passed as children */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout