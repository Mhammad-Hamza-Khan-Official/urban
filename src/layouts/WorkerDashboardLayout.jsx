import { Outlet, NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    BriefcaseBusiness,
    PlusCircle,
    UserRound,
    Menu,
    Bell,
    MapPin,
} from "lucide-react";
import { useState } from "react";
import { ROUTES as R } from "../constants/routes";

const navigation = [
    { name: "Dashboard", path: R.WORKER_DASHBOARD, icon: LayoutDashboard },
    { name: "My Services", path: R.WORKER_SERVICES, icon: BriefcaseBusiness },
    {
        name: "Create Service",
        path: R.WORKER_CREATE_SERVICE,
        icon: PlusCircle,
    },
    { name: "My Profile", path: R.WORKER_PROFILE, icon: UserRound },
];

export default function WorkerDashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background text-ink">
            {/* Mobile overlay */}
            {sidebarOpen && (
                <button
                    aria-label="Close sidebar"
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/60 md:hidden"
                />
            )}

            {/* Fixed Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-surface transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0`}
            >
                <div className="flex h-20 items-center gap-3 border-b border-border px-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                        <MapPin size={22} />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-tight">LocalFinder</h1>
                        <p className="text-xs text-muted">Provider Portal</p>
                    </div>
                </div>

                <nav className="flex-1 space-y-2 overflow-y-auto p-4">
                    <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
                        Workspace
                    </p>

                    {navigation.map(({ name, path, icon: Icon }) => (
                        <NavLink
                            key={path}
                            to={path}
                            end={path === R.WORKER_DASHBOARD}
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
                                    ? "bg-primary-soft text-primary"
                                    : "text-muted hover:bg-surface-hover hover:text-ink"
                                }`
                            }
                        >
                            <Icon size={19} />
                            {name}
                        </NavLink>
                    ))}

                    <NavLink
                        to={R.WORKER_CREATE_PROFILE}
                        onClick={() => setSidebarOpen(false)}
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
                                ? "bg-primary-soft text-primary"
                                : "text-muted hover:bg-surface-hover hover:text-ink"
                            }`
                        }
                    >
                        <UserRound size={19} />
                        Complete Profile
                    </NavLink>
                </nav>

                <div className="border-t border-border p-4">
                    <div className="rounded-xl bg-background p-4">
                        <p className="text-sm font-semibold">Grow your business</p>
                        <p className="mt-1 text-xs leading-5 text-muted">
                            Keep your services and profile up to date.
                        </p>
                        <NavLink
                            to={R.WORKER_CREATE_SERVICE}
                            className="mt-3 inline-block text-sm font-semibold text-primary hover:text-primary-hover"
                        >
                            Add a service →
                        </NavLink>
                    </div>
                </div>
            </aside>

            {/* Fixed Navbar */}
            <header className="fixed left-0 right-0 top-0 z-30 flex h-20 items-center justify-between border-b border-border bg-surface/95 px-4 backdrop-blur md:left-64 md:px-8">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open sidebar"
                        className="rounded-lg p-2 hover:bg-surface-hover md:hidden"
                    >
                        <Menu size={22} />
                    </button>

                    <div>
                        <h2 className="text-base font-semibold sm:text-lg">
                            Provider Dashboard
                        </h2>
                        <p className="hidden text-xs text-muted sm:block">
                            Manage your services and business
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-5">
                    <button
                        aria-label="Notifications"
                        className="relative rounded-xl border border-border p-2.5 text-muted hover:bg-surface-hover hover:text-ink"
                    >
                        <Bell size={19} />
                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="hidden text-right sm:block">
                            <p className="text-sm font-semibold">Service Provider</p>
                            <p className="text-xs text-muted">Business account</p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-primary-soft text-primary">
                            <UserRound size={20} />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="min-h-screen px-4 pb-8 pt-28 md:ml-64 md:px-8">
                <Outlet />
            </main>
        </div>
    );
}