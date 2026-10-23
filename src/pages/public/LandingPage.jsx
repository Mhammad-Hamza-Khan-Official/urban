import { useMemo, useState } from "react";
import {
    ArrowRight,
    Search,
    MapPin,
    Menu,
    X,
    Wrench,
    Zap,
    Sparkles,
    Paintbrush,
    Hammer,
    Star,
    ShieldCheck,
    Clock,
    CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const categories = [
    { name: "All Services", icon: Sparkles },
    { name: "Plumbing", icon: Wrench },
    { name: "Electrical", icon: Zap },
    { name: "Cleaning", icon: Sparkles },
    { name: "Painting", icon: Paintbrush },
    { name: "Carpentry", icon: Hammer },
];

const services = [
    {
        id: 1,
        title: "Plumbing Services",
        description: "Fix leaking pipes, taps, drains, and bathroom fittings.",
        category: "Plumbing",
        price: 1500,
        rating: 4.9,
        city: "Hyderabad",
        icon: Wrench,
        color: "bg-primary/10 text-primary",
    },
    {
        id: 2,
        title: "Electrical Repairs",
        description: "Electrical wiring, installations, and home repairs.",
        category: "Electrical",
        price: 2000,
        rating: 4.8,
        city: "Hyderabad",
        icon: Zap,
        color: "bg-warning/10 text-warning",
    },
    {
        id: 3,
        title: "Home Cleaning",
        description: "Keep your home clean with reliable cleaning services.",
        category: "Cleaning",
        price: 2500,
        rating: 4.7,
        city: "Jamshoro",
        icon: Sparkles,
        color: "bg-success/10 text-success",
    },
    {
        id: 4,
        title: "Wall Painting",
        description: "Refresh your space with professional painting services.",
        category: "Painting",
        price: 3000,
        rating: 4.8,
        city: "Hyderabad",
        icon: Paintbrush,
        color: "bg-primary-soft text-primary",
    },
    {
        id: 5,
        title: "Carpentry Work",
        description: "Furniture assembly, repairs, and woodwork solutions.",
        category: "Carpentry",
        price: 1800,
        rating: 4.6,
        city: "Jamshoro",
        icon: Hammer,
        color: "bg-danger/10 text-danger",
    },
    {
        id: 6,
        title: "Tap & Pipe Repair",
        description: "Quick help with common household plumbing problems.",
        category: "Plumbing",
        price: 1200,
        rating: 4.9,
        city: "Hyderabad",
        icon: Wrench,
        color: "bg-surface-hover text-muted",
    },
];

const benefits = [
    {
        icon: ShieldCheck,
        title: "Trusted local services",
        description: "Discover professionals offering services in your area.",
    },
    {
        icon: Clock,
        title: "Convenient booking",
        description: "Find a service and submit your booking request easily.",
    },
    {
        icon: CheckCircle2,
        title: "Simple experience",
        description: "Explore service options in one convenient place.",
    },
];

export default function LandingPage() {
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Services");
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()

    const filteredServices = useMemo(() => {
        return services.filter((service) => {
            const matchesSearch =
                service.title.toLowerCase().includes(search.toLowerCase()) ||
                service.description.toLowerCase().includes(search.toLowerCase());

            const matchesCity =
                !city || service.city.toLowerCase().includes(city.toLowerCase());

            const matchesCategory =
                selectedCategory === "All Services" ||
                service.category === selectedCategory;

            return matchesSearch && matchesCity && matchesCategory;
        });
    }, [search, city, selectedCategory]);

    return (
        <div className="min-h-screen bg-background text-ink">
            {/* Navbar */}
            <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
                <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
                    <a href="/" className="flex items-center gap-2.5">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-white">
                            <Wrench size={22} />
                        </span>
                        <span className="text-xl font-black tracking-tight">
                            Local<span className="text-primary">Finder</span>
                        </span>
                    </a>

                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#services" className="text-sm font-semibold text-muted transition hover:text-primary">
                            Explore Services
                        </a>
                        <a href="#how-it-works" className="text-sm font-semibold text-muted transition hover:text-primary">
                            How It Works
                        </a>
                        <a href="#become-worker" className="text-sm font-semibold text-muted transition hover:text-primary">
                            Become a Worker
                        </a>
                    </div>

                    <div className="hidden items-center gap-3 md:flex">
                        <button onClick={()=>navigate(ROUTES.CUSTOMER_LOGIN)} className="rounded-xl px-4 py-3 text-sm font-bold transition hover:bg-background">
                            Log In
                        </button>
                        <button onClick={()=>navigate(ROUTES.CUSTOMER_REGISTER)} className="rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-hover">
                            Get Started
                        </button>
                    </div>

                    <button
                        type="button"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="rounded-xl border border-border p-2 md:hidden"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>

                {menuOpen && (
                    <div className="space-y-1 border-t border-border bg-surface p-4 md:hidden">
                        <a onClick={() => setMenuOpen(false)} href="#services" className="block rounded-lg p-3 hover:bg-background">
                            Explore Services
                        </a>
                        <a onClick={() => setMenuOpen(false)} href="#how-it-works" className="block rounded-lg p-3 hover:bg-background">
                            How It Works
                        </a>
                        <button onClick={() => navigate(ROUTES.CUSTOMER_LOGIN)} className="block rounded-lg p-3 hover:bg-background">
                            Log In
                        </button>
                        <button onClick={() => navigate(ROUTES.CUSTOMER_REGISTER)} className="block rounded-xl bg-primary p-3 text-center font-bold text-white">
                            Get Started
                        </button>
                    </div>
                )}
            </header>

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-surface">
                    <div className="pointer-events-none absolute -right-32 -top-24 size-96 rounded-full bg-primary/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-32 left-0 size-80 rounded-full bg-primary-soft/60 blur-3xl" />

                    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-extrabold tracking-wide text-primary">
                                <Sparkles size={15} />
                                YOUR NEIGHBOURHOOD, CONNECTED
                            </div>

                            <h1 className="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                                Find the right help.
                                <span className="mt-2 block text-primary">
                                    Right around you.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
                                From home repairs to everyday tasks, discover local service
                                providers and find the help you need without the hassle.
                            </p>

                            {/* Search */}
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    document.getElementById("services")?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                                className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-surface p-3 shadow-soft sm:flex-row"
                            >
                                <label className="flex min-w-0 flex-1 items-center gap-3 rounded-xl px-3 py-2">
                                    <Search size={20} className="shrink-0 text-muted" />
                                    <input
                                        value={search}
                                        onChange={(event) => setSearch(event.target.value)}
                                        placeholder="What service do you need?"
                                        className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-muted"
                                    />
                                </label>

                                <label className="flex items-center gap-2 rounded-xl bg-background px-3 py-2 sm:max-w-40">
                                    <MapPin size={19} className="shrink-0 text-muted" />
                                    <input
                                        value={city}
                                        onChange={(event) => setCity(event.target.value)}
                                        placeholder="Your city"
                                        className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-muted"
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-hover"
                                >
                                    Search <ArrowRight size={17} />
                                </button>
                            </form>

                            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
                                <span className="flex items-center gap-2">
                                    <ShieldCheck size={17} className="text-success" />
                                    Local providers
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 size={17} className="text-primary" />
                                    Easy booking requests
                                </span>
                            </div>
                        </div>

                        {/* Hero preview card */}
                        <div className="relative mx-auto w-full max-w-lg">
                            <div className="absolute -left-4 top-12 size-24 rounded-card bg-primary/10" />
                            <div className="absolute -right-3 bottom-8 size-28 rounded-full bg-success/10" />

                            <div className="relative rounded-[2rem] border border-border bg-background p-5 shadow-soft sm:p-7">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm text-muted">Discover local talent</p>
                                        <h2 className="mt-1 text-xl font-extrabold">
                                            Popular near you
                                        </h2>
                                    </div>
                                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <MapPin size={22} />
                                    </span>
                                </div>

                                <div className="mt-6 space-y-3">
                                    {services.slice(0, 3).map((service) => {
                                        const Icon = service.icon;

                                        return (
                                            <div
                                                key={service.id}
                                                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4"
                                            >
                                                <span className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${service.color}`}>
                                                    <Icon size={22} />
                                                </span>
                                                <div className="min-w-0 flex-1">
                                                    <h3 className="truncate font-bold">{service.title}</h3>
                                                    <p className="mt-1 text-xs text-muted">
                                                        {service.city} · {service.category}
                                                    </p>
                                                </div>
                                                <span className="flex items-center gap-1 text-sm font-bold">
                                                    <Star size={14} className="fill-warning text-warning" />
                                                    {service.rating}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-5 rounded-2xl bg-primary p-5 text-white">
                                    <p className="text-sm text-white/75">
                                        Your next task starts here
                                    </p>
                                    <p className="mt-1 text-lg font-extrabold">
                                        Find help. Get things done.
                                    </p>
                                    <a href="#services" className="mt-3 inline-flex items-center gap-2 text-sm font-bold">
                                        Browse services <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="border-y border-border bg-background">
                    <div className="mx-auto grid max-w-7xl gap-7 px-5 py-9 sm:grid-cols-3 lg:px-8">
                        {benefits.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="flex items-start gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface text-primary shadow-sm">
                                    <Icon size={22} />
                                </span>
                                <div>
                                    <h3 className="font-extrabold">{title}</h3>
                                    <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-sm font-extrabold uppercase tracking-widest text-primary">
                                Explore our services
                            </p>
                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                                What do you need help with?
                            </h2>
                            <p className="mt-3 text-muted">
                                Explore local services for your everyday needs.
                            </p>
                        </div>
                        <p className="text-sm font-semibold text-muted">
                            {filteredServices.length} services found
                        </p>
                    </div>

                    <div className="mt-8 flex gap-2 overflow-x-auto pb-3">
                        {categories.map(({ name, icon: Icon }) => (
                            <button
                                key={name}
                                type="button"
                                onClick={() => setSelectedCategory(name)}
                                className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition ${selectedCategory === name
                                    ? "border-primary bg-primary text-white"
                                    : "border-border bg-surface text-muted hover:border-primary/40 hover:text-primary"
                                    }`}
                            >
                                <Icon size={17} />
                                {name}
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredServices.map((service) => {
                            const Icon = service.icon;

                            return (
                                <article
                                    key={service.id}
                                    className="group rounded-card border border-border bg-surface p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary/30"
                                >
                                    <div className="flex items-start justify-between">
                                        <span className={`flex size-14 items-center justify-center rounded-2xl ${service.color}`}>
                                            <Icon size={25} />
                                        </span>
                                        <span className="flex items-center gap-1 rounded-lg bg-warning/10 px-2.5 py-1.5 text-sm font-bold text-warning">
                                            <Star size={14} className="fill-warning text-warning" />
                                            {service.rating}
                                        </span>
                                    </div>

                                    <div className="mt-5">
                                        <span className="text-xs font-extrabold uppercase tracking-wider text-primary">
                                            {service.category}
                                        </span>
                                        <h3 className="mt-2 text-xl font-extrabold">
                                            {service.title}
                                        </h3>
                                        <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="mt-5 flex items-center gap-2 text-sm text-muted">
                                        <MapPin size={16} />
                                        {service.city}
                                    </div>

                                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                                        <div>
                                            <span className="text-xs text-muted">Starting from</span>
                                            <p className="mt-1 text-xl font-black">
                                                Rs. {service.price.toLocaleString("en-PK")}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => navigate(ROUTES.CUSTOMER_REGISTER)}
                                            className="flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
                                        >
                                            Book now <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {filteredServices.length === 0 && (
                        <div className="mt-8 rounded-2xl border border-dashed border-border bg-surface p-12 text-center">
                            <Search size={32} className="mx-auto text-muted" />
                            <h3 className="mt-4 text-lg font-extrabold">No services found</h3>
                            <p className="mt-2 text-sm text-muted">
                                Try another service name or city.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearch("");
                                    setCity("");
                                    setSelectedCategory("All Services");
                                }}
                                className="mt-4 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </section>

                {/* How it works */}
                <section id="how-it-works" className="border-y border-border bg-surface py-16 sm:py-20">
                    <div className="mx-auto max-w-7xl px-5 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="text-sm font-extrabold uppercase tracking-widest text-primary">
                                How it works
                            </p>
                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                                Three simple steps
                            </h2>
                            <p className="mt-3 leading-7 text-muted">
                                Finding help for your next task can be straightforward.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    number: "01",
                                    title: "Explore services",
                                    text: "Search by service name and find available options in your city.",
                                },
                                {
                                    number: "02",
                                    title: "Choose a service",
                                    text: "Review the service details and choose the option that suits you.",
                                },
                                {
                                    number: "03",
                                    title: "Request a booking",
                                    text: "Sign in and submit your address and preferred booking date.",
                                },
                            ].map((step) => (
                                <div key={step.number} className="rounded-card border border-border bg-background p-7">
                                    <span className="text-4xl font-black text-primary/25">
                                        {step.number}
                                    </span>
                                    <h3 className="mt-5 text-xl font-extrabold">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Worker CTA */}
                <section id="become-worker" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
                    <div className="flex flex-col items-start justify-between gap-7 rounded-card bg-surface-hover p-8 text-ink sm:flex-row sm:items-center sm:p-12">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-primary">
                                For service providers
                            </p>
                            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                                Turn your skills into opportunities.
                            </h2>
                            <p className="mt-4 max-w-xl leading-7 text-muted">
                                Join LocalFinder, showcase your services and help customers
                                in your area discover your work.
                            </p>
                        </div>
                        <a
                            href="/worker/register"
                            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-surface px-5 py-3.5 font-extrabold text-ink transition hover:bg-primary-soft"
                        >
                            Join as a worker <ArrowRight size={18} />
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-border bg-surface">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <a href="/" className="text-lg font-black text-ink">
                        Local<span className="text-primary">Finder</span>
                    </a>
                    <p>Local help, made simple.</p>
                    <p>© {new Date().getFullYear()} LocalFinder</p>
                </div>
            </footer>
        </div>
    );
}