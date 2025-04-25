import { 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
  } from 'firebase/auth';
  import { auth } from '@/firebase';
  
  export const loginAdmin = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };
  
  export const logoutAdmin = async () => {
    await signOut(auth);
  };
  
  export const checkAuthState = (callback: (isAdmin: boolean) => void) => {
    return onAuthStateChanged(auth, (user) => {
      callback(!!user);
    });
  };