import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  type User,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, googleProvider, db } from "./firebase";

async function syncUserProfile(user: User, displayName?: string) {
  try {
    const userRef = doc(db, "users", user.uid);
    const existing = await getDoc(userRef);
    if (!existing.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email ?? "",
        displayName: displayName || user.displayName || "",
        photoURL: user.photoURL ?? "",
        createdAt: serverTimestamp(),
      });
    }
  } catch (err) {
    console.warn("[Auth] Could not sync user profile to Firestore:", err);
  }
}

export async function signInWithGoogle(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;
  await syncUserProfile(user);
  return user;
}

export async function signInWithEmail(email: string, pass: string): Promise<User> {
  const result = await signInWithEmailAndPassword(auth, email, pass);
  await syncUserProfile(result.user);
  return result.user;
}

export async function signUpWithEmail(
  email: string,
  pass: string,
  name?: string
): Promise<User> {
  const result = await createUserWithEmailAndPassword(auth, email, pass);
  if (name && auth.currentUser) {
    try {
      await updateProfile(auth.currentUser, { displayName: name });
    } catch {
      // ignore
    }
  }
  await syncUserProfile(result.user, name);
  return result.user;
}

export async function signOutUser(): Promise<void> {
  await signOut(auth);
}

export function subscribeToAuth(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

export function getCurrentUser(): User | null {
  return auth.currentUser;
}
