
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    Search,
    Plus,
    Pencil,
    BriefcaseBusiness,
    Clock3,
    SlidersHorizontal,
    Eye,
} from "lucide-react";

const initialServices = [
    {
        id: "service-1",
        title: "Home Cleaning",
        category: "Cleaning",
        description:
            "Professional home cleaning, including rooms, kitchen surfaces, bathrooms, and floors.",
        price: 2500,
        duration: "2–4 hours",
        status: "Active",
    },
    {
        id: "service-2",
        title: "AC Repair",
        category: "Repair",
        description:
            "AC inspection, troubleshooting, maintenance, and common repair services.",
        price: 1500,
        duration: "1–2 hours",
        status: "Active",
    },
    {
        id: "service-3",
        title: "Plumbing",
        category: "Plumbing",
        description:
            "Help with leaking pipes, tap repairs, and plumbing installations.",
        price: 1000,
        duration: "1–2 hours",
        status: "Inactive",
    },
];

const categories = [
    "All",
    "Cleaning",
    "Repair",
    "Plumbing",
    "Electrical",
    "Home Improvement",
];

export default function MyServices() {
    const [services] = useState(initialServices);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [status, setStatus] = useState("All");

    const filteredServices = useMemo(() => {
        const query = search.trim().toLowerCase();

        return services.filter((service) => {
            const matchesSearch =
                service.title.toLowerCase().includes(query) ||
                service.description.toLowerCase().includes(query);

            const matchesCategory =
                category === "All" || service.category === category;

            const matchesStatus =
                status === "All" || service.status === status;

            return matchesSearch && matchesCategory && matchesStatus;
        });
    }, [services, search, category, status]);

    const activeCount = services.filter(
        (service) => service.status === "Active"
    ).length;

    return (
        <main className="min-h-screen bg-background p-4 text-ink sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-7">
                {/* Header */}
                <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-sm font-medium text-primary">
                            Worker workspace
                        </p>
                        <h1 className="mt-2 text-3xl font-bold">My Services</h1>
                        <p className="mt-2 text-muted">
                            Manage your service listings, pricing, and availability.
                        </p>
                    </div>

                    <Link
                        to="/worker/create-service"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover"
                    >
                        <Plus size={19} />
                        Create Service
                    </Link>
                </section>

                {/* Statistics */}
                <section className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-card border border-border bg-surface p-5">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-muted">Total Services</p>
                            <BriefcaseBusiness
                                size={21}
                                className="text-primary"
                            />
                        </div>
                        <p className="mt-3 text-3xl font-bold">{services.length}</p>
                    </div>

                    <div className="rounded-card border border-border bg-surface p-5">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-muted">Active Services</p>
                            <span className="size-2.5 rounded-full bg-success" />
                        </div>
                        <p className="mt-3 text-3xl font-bold">{activeCount}</p>
                    </div>

                    <div className="rounded-card border border-border bg-surface p-5">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-muted">Inactive Services</p>
                            <span className="size-2.5 rounded-full bg-warning" />
                        </div>
                        <p className="mt-3 text-3xl font-bold">
                            {services.length - activeCount}
                        </p>
                    </div>
                </section>

                {/* Search and filters */}
                <section className="rounded-card border border-border bg-surface p-4 sm:p-5">
                    <label
                        htmlFor="service-search"
                        className="mb-2 block text-sm font-medium"
                    >
                        Search your services
                    </label>

                    <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 focus-within:border-primary">
                        <Search size={19} className="shrink-0 text-muted" />
                        <input
                            id="service-search"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search by service name or description..."
                            className="w-full bg-transparent py-3 outline-none placeholder:text-muted"
                        />
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-2 text-sm text-muted">
                            <SlidersHorizontal size={17} />
                            Filters
                        </span>

                        <select
                            aria-label="Filter by category"
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                            className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                        >
                            {categories.map((item) => (
                                <option key={item} value={item}>
                                    {item === "All" ? "All categories" : item}
                                </option>
                            ))}
                        </select>

                        <select
                            aria-label="Filter by status"
                            value={status}
                            onChange={(event) => setStatus(event.target.value)}
                            className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                        >
                            <option value="All">All statuses</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>

                        <span className="text-sm text-muted sm:ml-auto">
                            {filteredServices.length} result
                            {filteredServices.length !== 1 ? "s" : ""}
                        </span>
                    </div>
                </section>

                {/* Service cards */}
                <section>
                    {filteredServices.length > 0 ? (
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {filteredServices.map((service) => (
                                <article
                                    key={service.id}
                                    className="flex flex-col rounded-card border border-border bg-surface p-5 shadow-soft transition hover:border-primary/50"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
                                            <BriefcaseBusiness size={23} />
                                        </div>

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${service.status === "Active"
                                                    ? "bg-success/10 text-success"
                                                    : "bg-warning/10 text-warning"
                                                }`}
                                        >
                                            {service.status}
                                        </span>
                                    </div>

                                    <span className="mt-5 w-fit rounded-full border border-border bg-background px-3 py-1 text-xs text-muted">
                                        {service.category}
                                    </span>

                                    <h2 className="mt-3 text-xl font-bold">
                                        {service.title}
                                    </h2>

                                    <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                                        {service.description}
                                    </p>

                                    <div className="mt-5 flex items-center gap-2 text-sm text-muted">
                                        <Clock3 size={16} />
                                        {service.duration}
                                    </div>

                                    <div className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-4">
                                        <div>
                                            <p className="text-xs text-muted">Starting price</p>
                                            <p className="mt-1 text-xl font-bold">
                                                Rs. {service.price.toLocaleString("en-PK")}
                                            </p>
                                        </div>

                                        <Link
                                            to={`/worker/edit-service/${service.id}`}
                                            className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm font-semibold transition hover:border-primary hover:bg-surface-hover"
                                        >
                                            <Pencil size={15} />
                                            Edit
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-card border border-border bg-surface px-5 py-14 text-center">
                            <BriefcaseBusiness
                                size={36}
                                className="mx-auto text-muted"
                            />
                            <h2 className="mt-4 text-lg font-bold">
                                No services found
                            </h2>
                            <p className="mt-2 text-sm text-muted">
                                Try changing your search or filters.
                            </p>

                            <button
                                type="button"
                                onClick={() => {
                                    setSearch("");
                                    setCategory("All");
                                    setStatus("All");
                                }}
                                className="mt-4 font-semibold text-primary hover:text-primary-hover"
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
