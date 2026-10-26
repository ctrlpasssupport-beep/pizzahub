import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDocFromServer, setLogLevel } from "firebase/firestore";
import firebaseConfig from "@/firebase-applet-config.json";

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// CRITICAL: Must pass firestoreDatabaseId
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Silence internal background connection retry messages in console
if (typeof window !== "undefined") {
  try {
    setLogLevel("silent");
  } catch {
    // ignore
  }
}

// Test connection on boot per Firebase guidelines
async function testConnection() {
  if (typeof window === "undefined") return;
  try {
    await getDocFromServer(doc(db, "test", "connection"));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.includes("the client is offline")) {
      console.warn("[Firebase] Operating in offline mode.");
    } else if (
      message.includes("token-service") ||
      message.includes("securetoken") ||
      message.includes("Fetching auth token failed")
    ) {
      console.warn("[Firebase] Auth token service propagating. Operating in guest mode.");
      try {
        if (auth.currentUser) {
          await auth.signOut();
        }
      } catch {
        // ignore
      }
    }
  }
}

testConnection();
