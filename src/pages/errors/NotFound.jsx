import { Link, useNavigate } from "react-router-dom";
import { SearchX, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10 text-ink">
            <div className="w-full max-w-lg rounded-card border border-border bg-surface p-8 text-center shadow-soft sm:p-12">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft">
                    <SearchX className="h-10 w-10 text-primary" />
                </div>

                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                    Error 404
                </p>

                <h1 className="mb-3 text-3xl font-bold sm:text-4xl">
                    Page Not Found
                </h1>

                <p className="mx-auto mb-8 max-w-sm leading-7 text-muted">
                    The page you're looking for doesn't exist, may have been moved,
                    or the URL might be incorrect.
                </p>

                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 font-medium transition hover:bg-surface-hover"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>

                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover"
                    >
                        <Home size={18} />
                        Home Page
                    </Link>
                </div>
            </div>
        </div>
    );
}