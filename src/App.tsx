import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-[#FCFEFE] p-6 sm:p-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="h-8 w-32 bg-[#F4F6F7] rounded-[8px] mb-12"></div>
        <div className="h-10 w-64 bg-[#F4F6F7] rounded-[8px] mb-4"></div>
        <div className="h-5 w-48 bg-[#F4F6F7] rounded-[8px] mb-10"></div>
        <div className="h-48 w-full bg-[#F4F6F7] rounded-[16px]"></div>
      </div>
    </div>
  );
}

function MainApp() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!user) {
    return <LoginPage />;
  }

  return <Dashboard />;
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
