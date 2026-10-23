
import { Link } from "react-router-dom";
import {
    BriefcaseBusiness,
    CalendarDays,
    CircleDollarSign,
    Clock3,
    Plus,
    ArrowRight,
    MapPin,
} from "lucide-react";

const stats = [
    {
        title: "Total Earnings",
        value: "Rs. 24,500",
        subtitle: "Sample total",
        icon: CircleDollarSign,
        color: "text-success bg-success/10",
    },
    {
        title: "Active Services",
        value: "4",
        subtitle: "Published listings",
        icon: BriefcaseBusiness,
        color: "text-primary bg-primary-soft",
    },
    {
        title: "New Requests",
        value: "3",
        subtitle: "Awaiting response",
        icon: CalendarDays,
        color: "text-warning bg-warning/10",
    },
];

const requests = [
    {
        id: "BK-201",
        customer: "Ali Ahmed",
        service: "AC Repair",
        date: "Oct 25, 2026",
        price: "Rs. 1,500",
        status: "Pending",
    },
    {
        id: "BK-202",
        customer: "Sara Khan",
        service: "Home Cleaning",
        date: "Oct 26, 2026",
        price: "Rs. 2,500",
        status: "Confirmed",
    },
    {
        id: "BK-203",
        customer: "Usman Ali",
        service: "Plumbing",
        date: "Oct 28, 2026",
        price: "Rs. 1,000",
        status: "Pending",
    },
];

export default function DashboardWorker() {
    return (
        <main className="min-h-screen bg-background p-4 text-ink sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-sm font-medium text-primary">
                            Worker workspace
                        </p>
                        <h1 className="mt-2 text-3xl font-bold">Worker Dashboard</h1>
                        <p className="mt-2 text-muted">
                            Manage your services, bookings, and business activity.
                        </p>
                    </div>

                    <Link
                        to="/worker/create-service"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-hover"
                    >
                        <Plus size={19} /> Add Service
                    </Link>
                </section>

                <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {stats.map(({ title, value, subtitle, icon: Icon, color }) => (
                        <article
                            key={title}
                            className="rounded-card border border-border bg-surface p-5 shadow-soft"
                        >
                            <div className="flex items-center justify-between">
                                <div className={`rounded-xl p-3 ${color}`}>
                                    <Icon size={22} />
                                </div>
                                <span className="text-xs text-muted">{subtitle}</span>
                            </div>
                            <p className="mt-5 text-sm text-muted">{title}</p>
                            <p className="mt-1 text-2xl font-bold">{value}</p>
                        </article>
                    ))}
                </section>

                <section className="grid gap-6 xl:grid-cols-[1fr_300px]">
                    <div className="rounded-card border border-border bg-surface p-5 shadow-soft sm:p-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <h2 className="text-xl font-bold">Recent booking requests</h2>
                                <p className="mt-1 text-sm text-muted">
                                    Review your latest customer appointments.
                                </p>
                            </div>
                            <Link
                                to="/worker/bookings"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
                            >
                                View all <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="mt-5 space-y-3">
                            {requests.map((request) => (
                                <article
                                    key={request.id}
                                    className="rounded-xl border border-border p-4"
                                >
                                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                                        <div>
                                            <h3 className="font-semibold">{request.service}</h3>
                                            <p className="mt-1 text-sm text-muted">
                                                Customer: {request.customer}
                                            </p>
                                            <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                                                <CalendarDays size={15} /> {request.date}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${request.status === "Confirmed"
                                                        ? "bg-success/10 text-success"
                                                        : "bg-warning/10 text-warning"
                                                    }`}
                                            >
                                                {request.status}
                                            </span>
                                            <span className="font-semibold">{request.price}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <aside className="space-y-4">
                        <div className="rounded-card border border-border bg-surface p-5">
                            <h2 className="font-bold">Quick actions</h2>
                            <div className="mt-4 space-y-2">
                                <Link
                                    to="/worker/create-profile"
                                    className="flex items-center gap-3 rounded-xl border border-border p-3 text-sm hover:bg-surface-hover"
                                >
                                    <BriefcaseBusiness size={18} className="text-primary" />
                                    Create / update profile
                                </Link>
                                <Link
                                    to="/worker/create-service"
                                    className="flex items-center gap-3 rounded-xl border border-border p-3 text-sm hover:bg-surface-hover"
                                >
                                    <Plus size={18} className="text-primary" />
                                    Create a service
                                </Link>
                                <Link
                                    to="/worker/profile"
                                    className="flex items-center gap-3 rounded-xl border border-border p-3 text-sm hover:bg-surface-hover"
                                >
                                    <MapPin size={18} className="text-primary" />
                                    View public profile
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-card border border-border bg-surface-hover p-5">
                            <div className="flex items-center gap-3">
                                <Clock3 size={21} className="text-primary" />
                                <h3 className="font-bold">Stay responsive</h3>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-muted">
                                Respond to booking requests promptly and keep your service
                                information up to date.
                            </p>
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    );
}
