import { supabase } from "./supabase";
import type { User, Session, AuthError } from "@supabase/supabase-js";

export const authUtils = {
  // Get current session
  async getCurrentSession(): Promise<Session | null> {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting session:", error);
        return null;
      }
      return session;
    } catch (error) {
      console.error("Failed to get session:", error);
      return null;
    }
  },

  // Sign in with email and password
  async signIn(email: string, password: string): Promise<{
    user: User | null;
    session: Session | null;
    error: AuthError | null;
  }> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      return {
        user: data.user,
        session: data.session,
        error,
      };
    } catch (error) {
      console.error("Sign in error:", error);
      return {
        user: null,
        session: null,
        error: error as AuthError,
      };
    }
  },

  // Sign up with email and password
  async signUp(email: string, password: string): Promise<{
    user: User | null;
    session: Session | null;
    error: AuthError | null;
  }> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      return {
        user: data.user,
        session: data.session,
        error,
      };
    } catch (error) {
      console.error("Sign up error:", error);
      return {
        user: null,
        session: null,
        error: error as AuthError,
      };
    }
  },

  // Sign out
  async signOut(): Promise<{ error: AuthError | null }> {
    try {
      const { error } = await supabase.auth.signOut();
      return { error };
    } catch (error) {
      console.error("Sign out error:", error);
      return { error: error as AuthError };
    }
  },

  // Get current user
  async getCurrentUser(): Promise<User | null> {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error getting user:", error);
        return null;
      }
      return user;
    } catch (error) {
      console.error("Failed to get user:", error);
      return null;
    }
  },
};

export { supabase };
