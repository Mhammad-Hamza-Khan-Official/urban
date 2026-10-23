import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Wrench,
} from "lucide-react";
import { ROUTES } from "../../constants/routes";

export default function CustomerRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `${ import.meta.env.VITE_API_URL } /api/auth / register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed.");
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", "customer");

        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        navigate(ROUTES.CUSTOMER_DASHBOARD);
      } else {
        navigate(ROUTES.CUSTOMER_LOGIN);
      }
    } catch (err) {
        console.log(err)
      setError(err.message || "Unable to connect to the server.");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10 text-ink">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-card border border-border bg-surface shadow-soft md:grid-cols-2">
        {/* Promotional section */}
        <section className="hidden flex-col justify-between bg-primary p-10 text-white md:flex lg:p-12">
          <Link to="/" className="flex items-center gap-3 text-xl font-black">
            <span className="flex size-11 items-center justify-center rounded-xl bg-white/15">
              <Wrench size={24} />
            </span>
            LocalFinder
          </Link>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/70">
              Join our community
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight">
              Find help for life's everyday tasks.
            </h1>

            <p className="mt-5 leading-7 text-white/80">
              Create your account to explore local services and submit
              booking requests.
            </p>
          </div>

          <p className="text-sm text-white/65">
            Local help, made simple.
          </p>
        </section>

        {/* Registration form */}
        <section className="p-6 sm:p-10 lg:p-12">
          <Link
            to="/"
            className="flex items-center gap-2 font-black text-primary md:hidden"
          >
            <Wrench size={23} />
            LocalFinder
          </Link>

          <div className="mt-8 md:mt-2">
            <p className="text-sm font-bold text-primary">
              CUSTOMER ACCOUNT
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-ink">
              Create account
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              Get started with LocalFinder today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="customer-register-name"
                className="mb-2 block text-sm font-bold text-ink"
              >
                Full name
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 transition focus-within:border-primary">
                <UserRound size={19} className="shrink-0 text-muted" />

                <input
                  id="customer-register-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent py-3.5 text-sm text-ink outline-none placeholder:text-muted"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="customer-register-email"
                className="mb-2 block text-sm font-bold text-ink"
              >
                Email address
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 transition focus-within:border-primary">
                <Mail size={19} className="shrink-0 text-muted" />

                <input
                  id="customer-register-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent py-3.5 text-sm text-ink outline-none placeholder:text-muted"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="customer-register-password"
                className="mb-2 block text-sm font-bold text-ink"
              >
                Password
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 transition focus-within:border-primary">
                <Lock size={19} className="shrink-0 text-muted" />

                <input
                  id="customer-register-password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={6}
                  autoComplete="new-password"
                  placeholder="At least 6 characters"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full bg-transparent py-3.5 text-sm text-ink outline-none placeholder:text-muted"
                />

                <button
                  type="button"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  onClick={() => setShowPassword(!showPassword)}
                  className="shrink-0 text-muted transition hover:text-primary"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-xl border border-danger/30 bg-surface p-3 text-sm text-danger"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 font-bold text-white transition hover:bg-primary-hover"
            >
              Create account
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-muted">
            Already registered?{" "}
            <Link
              to={ROUTES.WORKER_LOGIN}
              className="font-bold text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>

          <p className="mt-4 text-center text-sm text-muted">
            Want to offer services?{" "}
            <Link
              to={ROUTES.WORKER_REGISTER}
              className="font-bold text-primary hover:underline"
            >
              Register as a worker
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}