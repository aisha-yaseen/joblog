import React from 'react';
import { Logo } from './Logo';
import { useAuth } from '../context/AuthContext';

export function LoginPage() {
  const { signInWithGoogle, error } = useAuth();
  const [submitting, setSubmitting] = React.useState(false);

  const handleSignIn = async () => {
    setSubmitting(true);
    try {
      await signInWithGoogle();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFEFE] flex flex-col justify-between px-6 py-12">
      <header className="max-w-[1100px] w-full mx-auto flex items-center">
        <Logo />
      </header>

      <main className="max-w-[440px] w-full mx-auto my-auto">
        <div className="bg-[#FEFFFF] border border-[#D2DBDE] rounded-[16px] p-8 sm:p-10">
          <h1
            className="text-[28px] sm:text-[32px] font-bold text-[#060F12] tracking-tight leading-tight mb-3"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Log in to Joblog
          </h1>
          <p className="text-[15px] text-[#373F42] leading-relaxed mb-8">
            Keep track of the jobs you applied to, and see where each one stands.
          </p>

          {error && (
            <div className="mb-6 p-3.5 rounded-[8px] bg-[#FDF2F1] border border-[#EAC2BF] text-[#AF3D36] text-[14px] leading-snug">
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={handleSignIn}
            disabled={submitting}
            className="w-full min-h-[44px] px-6 py-3 rounded-[8px] bg-[#247D99] hover:bg-[#0D6C87] active:translate-y-[1px] text-white text-[15px] font-medium transition-colors flex items-center justify-center gap-3 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {/* Clean SVG Google 'G' icon */}
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="#ffffff"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#ffffff"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#ffffff"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#ffffff"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>{submitting ? 'Connecting...' : 'Sign in with Google'}</span>
          </button>
        </div>
      </main>

      <footer className="max-w-[1100px] w-full mx-auto text-left pt-6 text-[13px] text-[#687074]">
        <span>Joblog</span>
      </footer>
    </div>
  );
}
