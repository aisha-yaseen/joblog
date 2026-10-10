import React from 'react';
import { Logo } from './Logo';
import { useAuth } from '../context/AuthContext';

export function Dashboard() {
  const { user, profile, logOut } = useAuth();
  const [loggingOut, setLoggingOut] = React.useState(false);

  // Extract first name or display name cleanly
  const displayName = profile?.name || user?.displayName || 'there';
  const firstName = displayName.trim().split(' ')[0] || displayName;

  const handleLogOut = async () => {
    setLoggingOut(true);
    try {
      await logOut();
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFEFE] text-[#373F42]">
      {/* Top Navigation */}
      <header className="border-b border-[#D2DBDE] bg-[#FEFFFF]">
        <div className="max-w-[1100px] mx-auto px-6 h-18 flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4">
            <span className="text-[14px] text-[#687074] hidden sm:inline">
              {profile?.email || user?.email}
            </span>
            <button
              type="button"
              onClick={handleLogOut}
              disabled={loggingOut}
              className="min-h-[44px] px-4 py-2 rounded-[8px] bg-[#FEFFFF] hover:bg-[#F4F6F7] active:translate-y-[1px] border border-[#B7C1C6] text-[#373F42] text-[14px] font-medium transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loggingOut ? 'Logging out...' : 'Log out'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1100px] mx-auto px-6 py-10 sm:py-12">
        {/* Hello greeting with the person's name */}
        <div className="mb-10">
          <h1
            className="text-[32px] sm:text-[36px] font-bold text-[#060F12] tracking-tight leading-tight mb-2"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Hello, {firstName}.
          </h1>
          <p className="text-[16px] text-[#687074]">
            Here is your job application overview.
          </p>
        </div>

        {/* Empty dashboard container */}
        <div className="bg-[#FEFFFF] border border-[#D2DBDE] rounded-[16px] p-8 sm:p-12 text-left">
          <p className="text-[16px] text-[#373F42] leading-relaxed">
            No applications yet.
          </p>
        </div>
      </main>
    </div>
  );
}
