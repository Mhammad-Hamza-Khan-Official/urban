
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    Search,
    MapPin,
    Star,
    ArrowUpRight,
    SlidersHorizontal,
} from "lucide-react";

const services = [
    {
        id: "home-cleaning",
        name: "Home Cleaning",
        category: "Cleaning",
        description: "Keep your home clean with professional cleaning services.",
        price: 2500,
        rating: 4.9,
        reviews: 120,
        provider: "Ahmed Services",
    },
    {
        id: "ac-repair",
        name: "AC Repair",
        category: "Repair",
        description: "Reliable air conditioner inspection and repair.",
        price: 1500,
        rating: 4.8,
        reviews: 95,
        provider: "Cool Tech Solutions",
    },
    {
        id: "plumbing",
        name: "Plumbing",
        category: "Repair",
        description: "Get help with leaking pipes, taps, and installations.",
        price: 1000,
        rating: 4.7,
        reviews: 76,
        provider: "Reliable Plumbing",
    },
    {
        id: "electrician",
        name: "Electrician",
        category: "Electrical",
        description: "Professional help with electrical repairs and fittings.",
        price: 1200,
        rating: 4.8,
        reviews: 88,
        provider: "Safe Electric",
    },
    {
        id: "painting",
        name: "Home Painting",
        category: "Home Improvement",
        description: "Refresh your space with professional painting services.",
        price: 3500,
        rating: 4.6,
        reviews: 54,
        provider: "Color House",
    },
    {
        id: "pest-control",
        name: "Pest Control",
        category: "Cleaning",
        description: "Professional pest inspection and treatment services.",
        price: 2000,
        rating: 4.7,
        reviews: 63,
        provider: "Clean Shield",
    },
];

const categories = [
    "All",
    "Cleaning",
    "Repair",
    "Electrical",
    "Home Improvement",
];

export default function Services() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filteredServices = useMemo(() => {
        const query = search.trim().toLowerCase();

        return services.filter((service) => {
            const matchesCategory =
                category === "All" || service.category === category;

            const matchesSearch = [
                service.name,
                service.category,
                service.provider,
            ].some((value) => value.toLowerCase().includes(query));

            return matchesCategory && matchesSearch;
        });
    }, [search, category]);

    return (
        <main className="min-h-screen bg-background p-4 text-ink sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-7">
                <section>
                    <p className="text-sm font-medium text-primary">Our services</p>
                    <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                        Find the right professional
                    </h1>
                    <p className="mt-3 max-w-2xl text-muted">
                        Discover local professionals for repairs, cleaning, and home
                        improvement.
                    </p>
                </section>

                <section className="rounded-card border border-border bg-surface p-4 shadow-soft sm:p-5">
                    <label className="mb-2 block text-sm font-medium" htmlFor="service-search">
                        Search services
                    </label>
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 focus-within:border-primary">
                        <Search size={20} className="shrink-0 text-muted" />
                        <input
                            id="service-search"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Try cleaning, AC repair, plumbing..."
                            className="w-full bg-transparent py-3 outline-none placeholder:text-muted"
                        />
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-sm text-muted">
                        <SlidersHorizontal size={17} />
                        <span>Filter by category</span>
                    </div>

                    <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                        {categories.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setCategory(item)}
                                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${category === item
                                        ? "border-primary bg-primary text-white"
                                        : "border-border bg-background text-muted hover:border-primary hover:text-ink"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="mb-5 flex items-center justify-between gap-3">
                        <h2 className="text-xl font-bold">Available services</h2>
                        <span className="text-sm text-muted">
                            {filteredServices.length} results
                        </span>
                    </div>

                    {filteredServices.length ? (
                        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                            {filteredServices.map((service) => (
                                <article
                                    key={service.id}
                                    className="flex flex-col rounded-card border border-border bg-surface p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary/50"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                                            {service.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-sm font-semibold">
                                            <Star size={16} className="fill-warning text-warning" />
                                            {service.rating}
                                            <span className="font-normal text-muted">
                                                ({service.reviews})
                                            </span>
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold">{service.name}</h3>
                                    <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                                        {service.description}
                                    </p>

                                    <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                                        <MapPin size={16} />
                                        {service.provider}
                                    </div>

                                    <div className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-4">
                                        <div>
                                            <p className="text-xs text-muted">Starting from</p>
                                            <p className="mt-1 text-xl font-bold">
                                                Rs. {service.price.toLocaleString("en-PK")}
                                            </p>
                                        </div>
                                        <Link
                                            to={`/services/${service.id}`}
                                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover"
                                        >
                                            Details <ArrowUpRight size={16} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-card border border-border bg-surface px-5 py-14 text-center">
                            <Search size={32} className="mx-auto text-muted" />
                            <h3 className="mt-4 text-lg font-semibold">No services found</h3>
                            <p className="mt-2 text-sm text-muted">
                                Try a different search term or category.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearch("");
                                    setCategory("All");
                                }}
                                className="mt-5 font-semibold text-primary hover:text-primary-hover"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
