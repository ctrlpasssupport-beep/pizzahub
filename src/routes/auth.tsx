import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock, User, LogIn, UserPlus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { signInWithGoogle, signInWithEmail, signUpWithEmail } from "@/lib/auth";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleGoogleSignIn() {
    setBusy(true);
    try {
      const user = await signInWithGoogle();
      toast.success(`Welcome back, ${user.displayName || user.email}!`);
      navigate({ to: "/account" });
    } catch (err: unknown) {
      console.error(err);
      toast.error("Google sign-in was canceled or could not be completed.");
    } finally {
      setBusy(false);
    }
  }

  async function handleEmailAuth(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please provide both email and password.");
      return;
    }
    if (isSignUp && password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setBusy(true);
    try {
      if (isSignUp) {
        const user = await signUpWithEmail(email, password, displayName);
        toast.success(`Account created! Welcome, ${user.displayName || user.email}!`);
      } else {
        const user = await signInWithEmail(email, password);
        toast.success(`Welcome back, ${user.displayName || user.email}!`);
      }
      navigate({ to: "/account" });
    } catch (err: any) {
      console.error(err);
      const msg = err?.message || "Authentication failed.";
      if (
        msg.includes("user-not-found") ||
        msg.includes("wrong-password") ||
        msg.includes("invalid-credential")
      ) {
        toast.error("Invalid email or password.");
      } else if (msg.includes("email-already-in-use")) {
        toast.error("An account with this email already exists. Try signing in.");
      } else {
        toast.error(msg);
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center px-4 py-16 bg-[#121618] text-white">
      {/* Background with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('/images/bg_1.jpg')" }}
      />

      <div className="relative w-full max-w-md rounded-xl bg-[#15191b] p-8 sm:p-10 border border-white/10 shadow-2xl">
        <div className="text-center">
          <span className="grid size-14 mx-auto place-items-center rounded-full bg-[#fac564] text-2xl text-[#121618] mb-4 shadow-lg">
            🍕
          </span>
          <span className="font-cursive text-xl text-[#fac564]">
            {isSignUp ? "Join Us" : "Welcome Back"}
          </span>
          <h1 className="font-display text-3xl font-bold uppercase tracking-wider text-white mt-1">
            Subday<span className="text-[#fac564]">Pizza</span> Account
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-white/60">
            Sign in with Google or email to access live orders, table reservations, and administrator controls.
          </p>
        </div>

        {/* Google Authentication Button */}
        <Button
          type="button"
          variant="hero"
          size="lg"
          className="mt-8 w-full py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(250,197,100,0.3)]"
          disabled={busy}
          onClick={handleGoogleSignIn}
        >
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
            <path
              fill="currentColor"
              d="M21.35 11.1H12v2.98h5.35c-.23 1.4-1.67 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.96S8.78 6.26 12 6.26c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.7 14.55 2.75 12 2.75 6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25c5.34 0 8.88-3.75 8.88-9.04 0-.6-.07-1.06-.15-1.51z"
            />
          </svg>
          Continue with Google
        </Button>

        <div className="my-6 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/40">
          <span className="h-px flex-1 bg-white/10" /> or email{" "}
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <form onSubmit={handleEmailAuth} className="space-y-4">
          {isSignUp && (
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
              <input
                type="text"
                required={isSignUp}
                maxLength={100}
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your Full Name"
                className="w-full bg-[#0e1113] border border-white/15 pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none rounded"
                aria-label="Name"
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
            <input
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-[#0e1113] border border-white/15 pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none rounded"
              aria-label="Email"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={isSignUp ? "Password (min 6 characters)" : "Password"}
              className="w-full bg-[#0e1113] border border-white/15 pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none rounded"
              aria-label="Password"
            />
          </div>

          <Button
            type="submit"
            variant="outlineWhite"
            size="lg"
            className="w-full py-3 text-xs uppercase font-bold tracking-widest"
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

        <div className="mt-5 text-center">
          <button
            type="button"
            className="text-xs text-white/60 hover:text-[#fac564] transition-colors"
            onClick={() => {
              setIsSignUp(!isSignUp);
            }}
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign up with email"}
          </button>
        </div>
      </div>
    </div>
  );
}
