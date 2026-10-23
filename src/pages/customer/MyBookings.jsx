
import { useState } from "react";
import {
    CalendarDays,
    Clock3,
    MapPin,
    ReceiptText,
} from "lucide-react";

const initialBookings = [
    {
        id: "BK-1001",
        service: "Home Cleaning",
        provider: "Ahmed Services",
        date: "2026-10-25",
        time: "10:00 AM",
        price: 2500,
        status: "Confirmed",
    },
    {
        id: "BK-1002",
        service: "AC Repair",
        provider: "Cool Tech Solutions",
        date: "2026-10-28",
        time: "02:00 PM",
        price: 1500,
        status: "Pending",
    },
    {
        id: "BK-1003",
        service: "Plumbing",
        provider: "Reliable Plumbing",
        date: "2026-10-12",
        time: "11:00 AM",
        price: 1000,
        status: "Completed",
    },
];

const filters = ["All", "Pending", "Confirmed", "Completed", "Cancelled"];

const statusStyles = {
    Pending: "bg-warning/10 text-warning",
    Confirmed: "bg-success/10 text-success",
    Completed: "bg-primary-soft text-primary",
    Cancelled: "bg-danger/10 text-danger",
};

export default function MyBookings() {
    const [filter, setFilter] = useState("All");

    const filteredBookings = initialBookings.filter(
        (booking) => filter === "All" || booking.status === filter
    );

    return (
        <main className="min-h-screen bg-background p-4 text-ink sm:p-6 lg:p-8">
            <div className="mx-auto max-w-6xl space-y-7">
                <section>
                    <p className="text-sm font-medium text-primary">Your activity</p>
                    <h1 className="mt-2 text-3xl font-bold">My Bookings</h1>
                    <p className="mt-2 text-muted">
                        View and manage your service appointments.
                    </p>
                </section>

                <section className="rounded-card border border-border bg-surface p-4 sm:p-5">
                    <div className="flex gap-2 overflow-x-auto pb-1">
                        {filters.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setFilter(item)}
                                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${filter === item
                                        ? "border-primary bg-primary text-white"
                                        : "border-border bg-background text-muted hover:border-primary hover:text-ink"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    {filteredBookings.length ? (
                        filteredBookings.map((booking) => (
                            <article
                                key={booking.id}
                                className="rounded-card border border-border bg-surface p-5 shadow-soft sm:p-6"
                            >
                                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h2 className="text-lg font-bold">{booking.service}</h2>
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[booking.status] ||
                                                    "bg-surface-hover text-muted"
                                                    }`}
                                            >
                                                {booking.status}
                                            </span>
                                        </div>

                                        <p className="mt-2 text-sm text-muted">
                                            Booking ID: {booking.id}
                                        </p>
                                        <p className="mt-3 font-medium">{booking.provider}</p>
                                    </div>

                                    <div className="rounded-xl bg-background p-4 sm:min-w-40">
                                        <p className="text-sm text-muted">Total price</p>
                                        <p className="mt-1 text-xl font-bold">
                                            Rs. {booking.price.toLocaleString("en-PK")}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-4 text-sm text-muted">
                                    <span className="flex items-center gap-2">
                                        <CalendarDays size={17} />
                                        {new Date(`${booking.date}T00:00:00`).toLocaleDateString(
                                            "en-PK",
                                            { day: "numeric", month: "short", year: "numeric" }
                                        )}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock3 size={17} /> {booking.time}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <MapPin size={17} /> Local service
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <ReceiptText size={17} /> {booking.id}
                                    </span>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="rounded-card border border-border bg-surface p-10 text-center">
                            <CalendarDays size={34} className="mx-auto text-muted" />
                            <h2 className="mt-4 text-lg font-semibold">No bookings found</h2>
                            <p className="mt-2 text-sm text-muted">
                                There are no bookings in this category yet.
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
