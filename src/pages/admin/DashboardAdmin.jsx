import {
    Users,
    BriefcaseBusiness,
    CalendarCheck,
    Wallet,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Clock,
    CheckCircle2,
    XCircle,
    UserRoundCheck,
} from "lucide-react";

const stats = [
    {
        title: "Total Users",
        value: "1,248",
        change: "+12.5%",
        positive: true,
        icon: Users,
    },
    {
        title: "Service Providers",
        value: "326",
        change: "+8.2%",
        positive: true,
        icon: BriefcaseBusiness,
    },
    {
        title: "Total Bookings",
        value: "892",
        change: "+18.4%",
        positive: true,
        icon: CalendarCheck,
    },
    {
        title: "Platform Revenue",
        value: "Rs. 245K",
        change: "-2.4%",
        positive: false,
        icon: Wallet,
    },
];

const recentBookings = [
    {
        id: "#BK-1001",
        customer: "Ali Ahmed",
        service: "Home Cleaning",
        provider: "Usman Services",
        amount: "Rs. 2,500",
        status: "Completed",
    },
    {
        id: "#BK-1002",
        customer: "Sara Khan",
        service: "AC Repair",
        provider: "Cool Care",
        amount: "Rs. 1,500",
        status: "Pending",
    },
    {
        id: "#BK-1003",
        customer: "Ahmed Raza",
        service: "Plumbing",
        provider: "Quick Fix",
        amount: "Rs. 1,000",
        status: "Cancelled",
    },
    {
        id: "#BK-1004",
        customer: "Ayesha Noor",
        service: "Electrical Repair",
        provider: "Power Solutions",
        amount: "Rs. 2,000",
        status: "Completed",
    },
];

const statusStyles = {
    Completed: "bg-success/10 text-success",
    Pending: "bg-warning/10 text-warning",
    Cancelled: "bg-danger/10 text-danger",
};

const statusIcons = {
    Completed: CheckCircle2,
    Pending: Clock,
    Cancelled: XCircle,
};

export default function DashboardAdmin() {
    return (
        <main className="min-h-screen bg-background p-4 text-ink sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                {/* Header */}
                <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="mb-2 text-sm font-medium text-primary">
                            ADMINISTRATION
                        </p>
                        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                            Admin Dashboard
                        </h1>
                        <p className="mt-2 text-sm text-muted">
                            Monitor your LocalFinder platform at a glance.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft">
                            <UserRoundCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Administrator</p>
                            <p className="text-xs text-muted">Platform overview</p>
                        </div>
                    </div>
                </header>

                {/* Stats */}
                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        const ChangeIcon = stat.positive
                            ? ArrowUpRight
                            : ArrowDownRight;

                        return (
                            <article
                                key={stat.title}
                                className="rounded-card border border-border bg-surface p-5 shadow-soft transition hover:border-primary/40"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <span
                                        className={`flex items-center gap-1 text-xs font-semibold ${stat.positive ? "text-success" : "text-danger"
                                            }`}
                                    >
                                        <ChangeIcon size={15} />
                                        {stat.change}
                                    </span>
                                </div>

                                <p className="mt-5 text-sm text-muted">{stat.title}</p>
                                <h2 className="mt-1 text-2xl font-bold">{stat.value}</h2>
                                <p className="mt-2 text-xs text-muted">
                                    Compared with the previous month
                                </p>
                            </article>
                        );
                    })}
                </section>

                {/* Overview and quick actions */}
                <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                    <div className="rounded-card border border-border bg-surface p-5 sm:p-6 xl:col-span-2">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <h2 className="text-lg font-bold">Platform Overview</h2>
                                <p className="mt-1 text-sm text-muted">
                                    Booking activity and service performance
                                </p>
                            </div>
                            <span className="rounded-lg border border-border px-3 py-2 text-xs text-muted">
                                Last 7 days
                            </span>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="rounded-xl bg-background p-4">
                                <div className="flex items-center gap-2 text-muted">
                                    <CalendarCheck size={18} />
                                    <span className="text-sm">Bookings</span>
                                </div>
                                <p className="mt-3 text-2xl font-bold">184</p>
                                <p className="mt-1 text-xs text-success">
                                    <TrendingUp className="mr-1 inline h-3.5 w-3.5" />
                                    Activity summary
                                </p>
                            </div>

                            <div className="rounded-xl bg-background p-4">
                                <div className="flex items-center gap-2 text-muted">
                                    <Wallet size={18} />
                                    <span className="text-sm">Revenue</span>
                                </div>
                                <p className="mt-3 text-2xl font-bold">Rs. 48,500</p>
                                <p className="mt-1 text-xs text-muted">
                                    Recorded revenue
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 rounded-xl border border-dashed border-border p-6 text-center">
                            <TrendingUp className="mx-auto h-8 w-8 text-primary" />
                            <p className="mt-3 font-semibold">Analytics chart</p>
                            <p className="mt-1 text-sm text-muted">
                                Connect your booking and revenue data to display a real chart.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-card border border-border bg-surface p-5 sm:p-6">
                        <h2 className="text-lg font-bold">Quick Overview</h2>
                        <p className="mt-1 text-sm text-muted">
                            Important platform tasks
                        </p>

                        <div className="mt-5 space-y-3">
                            <div className="flex items-center gap-3 rounded-xl border border-border p-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warning/10">
                                    <Clock className="h-5 w-5 text-warning" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-semibold">Pending bookings</p>
                                    <p className="text-xs text-muted">Require attention</p>
                                </div>
                                <span className="font-bold">24</span>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl border border-border p-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
                                    <BriefcaseBusiness className="h-5 w-5 text-primary" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-semibold">New providers</p>
                                    <p className="text-xs text-muted">This month</p>
                                </div>
                                <span className="font-bold">18</span>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl border border-border p-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-success/10">
                                    <Users className="h-5 w-5 text-success" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-semibold">Active users</p>
                                    <p className="text-xs text-muted">Platform members</p>
                                </div>
                                <span className="font-bold">1.2K</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent bookings */}
                <section className="overflow-hidden rounded-card border border-border bg-surface shadow-soft">
                    <div className="flex flex-col justify-between gap-3 border-b border-border p-5 sm:flex-row sm:items-center sm:px-6">
                        <div>
                            <h2 className="text-lg font-bold">Recent Bookings</h2>
                            <p className="mt-1 text-sm text-muted">
                                Latest activity across the platform
                            </p>
                        </div>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-border px-4 py-2 text-sm font-medium transition hover:bg-surface-hover sm:self-auto"
                        >
                            View all
                            <ArrowUpRight size={16} />
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[760px] text-left text-sm">
                            <thead className="bg-background text-muted">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Booking ID</th>
                                    <th className="px-6 py-4 font-medium">Customer</th>
                                    <th className="px-6 py-4 font-medium">Service</th>
                                    <th className="px-6 py-4 font-medium">Provider</th>
                                    <th className="px-6 py-4 font-medium">Amount</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {recentBookings.map((booking) => {
                                    const StatusIcon = statusIcons[booking.status];

                                    return (
                                        <tr
                                            key={booking.id}
                                            className="transition hover:bg-surface-hover/60"
                                        >
                                            <td className="whitespace-nowrap px-6 py-4 font-semibold text-primary">
                                                {booking.id}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {booking.customer}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-muted">
                                                {booking.service}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-muted">
                                                {booking.provider}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                {booking.amount}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${statusStyles[booking.status]}`}
                                                >
                                                    <StatusIcon size={14} />
                                                    {booking.status}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
}