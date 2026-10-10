import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '../firebase';

interface UserProfile {
  name: string;
  email: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const snap = await getDoc(userDocRef);
          if (snap.exists()) {
            setProfile(snap.data() as UserProfile);
          } else {
            const newProfile: UserProfile = {
              name: currentUser.displayName || 'Friend',
              email: currentUser.email || '',
              createdAt: new Date().toISOString(),
            };
            await setDoc(userDocRef, newProfile);
            setProfile(newProfile);
          }
        } catch (err) {
          console.error('Error loading user profile:', err);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const signedInUser = result.user;
      const userDocRef = doc(db, 'users', signedInUser.uid);
      const snap = await getDoc(userDocRef);
      if (!snap.exists()) {
        const newProfile: UserProfile = {
          name: signedInUser.displayName || 'Friend',
          email: signedInUser.email || '',
          createdAt: new Date().toISOString(),
        };
        await setDoc(userDocRef, newProfile);
        setProfile(newProfile);
      } else {
        setProfile(snap.data() as UserProfile);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message.includes('popup-closed-by-user')) {
          setError('Sign in popup closed before finishing. Click below to try again.');
        } else if (err.message.includes('popup-blocked')) {
          setError('The sign in popup was blocked by your browser. Please allow popups for this site.');
        } else {
          setError('Could not sign in with Google. Check your connection and try again.');
        }
      } else {
        setError('An unexpected error stopped sign in. Please try again.');
      }
    }
  };

  const logOut = async () => {
    setError(null);
    try {
      await signOut(auth);
      setUser(null);
      setProfile(null);
    } catch {
      setError('Could not complete log out. Try again.');
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        error,
        signInWithGoogle,
        logOut,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
