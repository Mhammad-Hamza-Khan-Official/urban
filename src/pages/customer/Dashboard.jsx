
import { Link } from "react-router-dom";
import {
    CalendarDays,
    CheckCircle2,
    Clock3,
    Search,
    ArrowRight,
    MapPin,
} from "lucide-react";

const stats = [
    { label: "Total Bookings", value: "12", icon: CalendarDays },
    { label: "Completed", value: "8", icon: CheckCircle2 },
    { label: "Upcoming", value: "2", icon: Clock3 },
];

const bookings = [
    {
        id: 1,
        service: "Home Cleaning",
        provider: "Ahmed Services",
        date: "Oct 25, 2026",
        status: "Confirmed",
        price: "Rs. 2,500",
    },
    {
        id: 2,
        service: "AC Repair",
        provider: "Cool Tech Solutions",
        date: "Oct 28, 2026",
        status: "Pending",
        price: "Rs. 1,500",
    },
];

export default function Dashboard() {
    return (
        <main className="min-h-screen bg-background p-4 text-ink sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-sm text-muted">Customer dashboard</p>
                        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                            Welcome back!
                        </h1>
                        <p className="mt-2 text-muted">
                            Manage your services and upcoming bookings.
                        </p>
                    </div>

                    <Link
                        to="/services"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover"
                    >
                        <Search size={18} />
                        Find a Service
                    </Link>
                </section>

                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map(({ label, value, icon: Icon }) => (
                        <div
                            key={label}
                            className="rounded-card border border-border bg-surface p-5 shadow-soft"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-muted">{label}</p>
                                <div className="rounded-xl bg-primary-soft p-3 text-primary">
                                    <Icon size={21} />
                                </div>
                            </div>
                            <p className="mt-4 text-3xl font-bold">{value}</p>
                        </div>
                    ))}
                </section>

                <section className="rounded-card border border-border bg-surface p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-bold">Recent bookings</h2>
                            <p className="mt-1 text-sm text-muted">
                                Keep track of your service appointments.
                            </p>
                        </div>
                        <Link
                            to="/my-bookings"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
                        >
                            View all <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="mt-5 space-y-3">
                        {bookings.map((booking) => (
                            <div
                                key={booking.id}
                                className="flex flex-col gap-4 rounded-xl border border-border p-4 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div>
                                    <h3 className="font-semibold">{booking.service}</h3>
                                    <p className="mt-1 text-sm text-muted">
                                        {booking.provider}
                                    </p>
                                    <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                                        <CalendarDays size={15} /> {booking.date}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${booking.status === "Confirmed"
                                                ? "bg-success/10 text-success"
                                                : "bg-warning/10 text-warning"
                                            }`}
                                    >
                                        {booking.status}
                                    </span>
                                    <span className="font-semibold">{booking.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col gap-4 rounded-card border border-border bg-surface-hover p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-xl font-bold">Need help around your home?</h2>
                        <p className="mt-2 text-sm text-muted">
                            Explore trusted professionals for your everyday needs.
                        </p>
                    </div>
                    <Link
                        to="/services"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-hover"
                    >
                        Explore Services <ArrowRight size={18} />
                    </Link>
                </section>
            </div>
        </main>
    );
}
