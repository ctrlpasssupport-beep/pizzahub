import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Mail, Lock, User as UserIcon, LogIn, UserPlus, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInWithGoogle, signInWithEmail, signUpWithEmail, signOutUser } from "@/lib/auth";
import { useSessionUser } from "@/hooks/use-session";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Subday Pizza Gurugram" },
      {
        name: "description",
        content: "Sign in to Subday Pizza with your Google Account or email.",
      },
      { property: "og:title", content: "Sign in — Subday Pizza" },
      {
        property: "og:description",
        content: "Sign in with Google to access order history and admin dashboard.",
      },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const currentUser = useSessionUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [busy, setBusy] = useState(false);

  // If user is already authenticated, provide smooth redirection
  useEffect(() => {
    if (currentUser) {
      const timer = setTimeout(() => {
        navigate({ to: "/account" });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentUser, navigate]);

  async function handleGoogleSignIn() {
    setBusy(true);
    try {
      const user = await signInWithGoogle();
      toast.success(`Welcome back, ${user.displayName || user.email}!`);
      navigate({ to: "/account" });
    } catch (err: any) {
      console.error(err);
      const code = err?.code || "";
      const msg = err?.message || "";
      if (code === "auth/popup-blocked") {
        toast.error("Google sign-in popup was blocked by your browser. Please allow popups or use email sign-in.");
      } else if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") {
        toast.info("Google sign-in was closed.");
      } else {
        toast.error(msg || "Google sign-in could not be completed.");
      }
    } finally {
      setBusy(false);
    }
  }

  async function handleEmailAuth(e: React.FormEvent) {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    if (isSignUp && password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setBusy(true);
    try {
      if (isSignUp) {
        const user = await signUpWithEmail(cleanEmail, password, displayName.trim());
        toast.success(`Account created! Welcome, ${user.displayName || user.email}!`);
      } else {
        const user = await signInWithEmail(cleanEmail, password);
        toast.success(`Welcome back, ${user.displayName || user.email}!`);
      }
      navigate({ to: "/account" });
    } catch (err: any) {
      console.error(err);
      const code = err?.code || "";
      const msg = err?.message || "Authentication failed.";
      if (code === "auth/operation-not-allowed") {
        toast.error("Email/Password is disabled in Firebase console. Please click 'Continue with Google' above!");
      } else if (
        code === "auth/user-not-found" ||
        code === "auth/wrong-password" ||
        code === "auth/invalid-credential"
      ) {
        toast.error("Invalid email or password.");
      } else if (code === "auth/email-already-in-use") {
        toast.error("An account with this email already exists. Please sign in instead.");
      } else if (code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters.");
      } else if (code === "auth/invalid-email") {
        toast.error("Please enter a valid email address.");
      } else {
        toast.error(msg);
      }
    } finally {
      setBusy(false);
    }
  }

  // Already signed-in view
  if (currentUser) {
    const isAdmin =
      currentUser.email === "ayushsharma80104@gmail.com" ||
      (currentUser.email?.endsWith("@google.com") ?? false);

    return (
      <div className="relative min-h-[85vh] flex items-center justify-center px-4 py-16 bg-[#121618] text-white">
        <div className="relative w-full max-w-md rounded-2xl bg-[#15191b] p-8 sm:p-10 border border-white/10 shadow-2xl text-center">
          <img
            src="/logo.png"
            alt="Subday Pizza"
            className="size-20 mx-auto rounded-full border-2 border-[#fac564] object-cover mb-4 shadow-lg"
          />
          <h1 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
            You are signed in!
          </h1>
          <p className="mt-2 text-sm text-[#fac564] font-semibold">
            {currentUser.displayName || currentUser.email}
          </p>
          <p className="mt-1 text-xs text-white/60">
            {isAdmin ? "Logged in with Administrator privileges" : "Logged in to your customer account"}
          </p>

          <div className="mt-8 space-y-3">
            {isAdmin && (
              <Button variant="hero" size="lg" className="w-full text-xs font-bold uppercase tracking-widest" asChild>
                <Link to="/admin">Go to Admin Dashboard</Link>
              </Button>
            )}
            <Button variant="hero" size="lg" className="w-full text-xs font-bold uppercase tracking-widest" asChild>
              <Link to="/account">View My Account</Link>
            </Button>
            <Button
              variant="outlineWhite"
              size="lg"
              className="w-full text-xs font-bold uppercase tracking-widest"
              onClick={() => signOutUser()}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center px-4 py-16 bg-[#121618] text-white">
      {/* Background with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('/images/bg_1.jpg')" }}
      />

      <div className="relative w-full max-w-md rounded-2xl bg-[#15191b] p-8 sm:p-10 border border-white/10 shadow-2xl">
        <div className="text-center">
          <img
            src="/logo.png"
            alt="Subday Pizza"
            className="size-16 mx-auto rounded-full border-2 border-[#fac564] object-cover mb-4 shadow-lg"
          />
          <span className="font-cursive text-xl text-[#fac564]">
            {isSignUp ? "Join Us" : "Welcome Back"}
          </span>
          <h1 className="font-display text-3xl font-bold uppercase tracking-wider text-white mt-1">
            Subday<span className="text-[#fac564]">Pizza</span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-white/60">
            Sign in with Google to access order history, saved addresses, and restaurant administration.
          </p>
        </div>

        {/* Primary Google Authentication Button */}
        <Button
          type="button"
          variant="hero"
          size="lg"
          className="mt-6 w-full py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(250,197,100,0.3)]"
          disabled={busy}
          onClick={handleGoogleSignIn}
        >
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
            <path
              fill="currentColor"
              d="M21.35 11.1H12v2.98h5.35c-.23 1.4-1.67 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.96S8.78 6.26 12 6.26c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.7 14.55 2.75 12 2.75 6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25c5.34 0 8.88-3.75 8.88-9.04 0-.6-.07-1.06-.15-1.51z"
            />
          </svg>
          {busy ? "Signing In…" : "Continue with Google"}
        </Button>

        <div className="my-6 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/40">
          <span className="h-px flex-1 bg-white/10" /> or email{" "}
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <form onSubmit={handleEmailAuth} className="space-y-4 text-left">
          {isSignUp && (
            <div>
              <label htmlFor="auth-name" className="block text-xs font-semibold text-white/80 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <UserIcon className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                <Input
                  id="auth-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required={isSignUp}
                  maxLength={100}
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-[#0e1113] border-white/20 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:ring-1 focus:ring-[#fac564]"
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="auth-email" className="block text-xs font-semibold text-white/80 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
              <Input
                id="auth-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-[#0e1113] border-white/20 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:ring-1 focus:ring-[#fac564]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="auth-password" className="block text-xs font-semibold text-white/80 mb-1.5">
              Password {isSignUp && <span className="text-white/50 font-normal">(min 6 chars)</span>}
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
              <Input
                id="auth-password"
                name="password"
                type="password"
                autoComplete={isSignUp ? "new-password" : "current-password"}
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#0e1113] border-white/20 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:ring-1 focus:ring-[#fac564]"
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="outlineWhite"
            size="lg"
            className="w-full py-3 text-xs uppercase font-bold tracking-widest mt-2"
            disabled={busy}
          >
            {isSignUp ? (
              <>
                <UserPlus className="size-4 mr-2" />
                {busy ? "Creating Account…" : "Create Account"}
              </>
            ) : (
              <>
                <LogIn className="size-4 mr-2" />
                {busy ? "Signing In…" : "Sign In with Email"}
              </>
            )}
          </Button>
        </form>

        <div className="mt-5 flex items-center justify-between text-xs text-white/60">
          <button
            type="button"
            className="hover:text-[#fac564] transition-colors underline cursor-pointer"
            onClick={() => {
              setIsSignUp(!isSignUp);
            }}
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Need an account? Sign up with email"}
          </button>

          <Link to="/menu" className="hover:text-[#fac564] transition-colors flex items-center gap-1">
            Browse Menu <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
