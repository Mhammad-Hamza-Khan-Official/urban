
import { Link } from "react-router-dom";
import {
    MapPin,
    BriefcaseBusiness,
    Star,
    Clock3,
    Pencil,
    Plus,
    CheckCircle2,
} from "lucide-react";

const worker = {
    name: "Ahmed Ali",
    profession: "Home Service Professional",
    city: "Hyderabad, Sindh",
    experience: 4,
    rating: 4.8,
    reviews: 42,
    bio: "Experienced local professional focused on reliable service, clear communication, and customer satisfaction.",
    skills: ["Home Cleaning", "AC Maintenance", "General Repairs"],
};

const services = [
    {
        id: "service-1",
        title: "Home Cleaning",
        category: "Cleaning",
        price: 2500,
        status: "Active",
    },
    {
        id: "service-2",
        title: "AC Repair",
        category: "Repair",
        price: 1500,
        status: "Active",
    },
];

export default function Profile() {
    return (
        <main className="min-h-screen bg-background p-4 text-ink sm:p-6 lg:p-8">
            <div className="mx-auto max-w-6xl space-y-6">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-sm font-medium text-primary">Worker account</p>
                        <h1 className="mt-2 text-3xl font-bold">My Profile</h1>
                        <p className="mt-2 text-muted">
                            Manage your professional information and service listings.
                        </p>
                    </div>

                    <Link
                        to="/worker/create-profile"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-hover"
                    >
                        <Pencil size={17} /> Edit Profile
                    </Link>
                </div>

                <section className="rounded-card border border-border bg-surface p-5 shadow-soft sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                        <div className="grid size-20 shrink-0 place-items-center rounded-2xl bg-primary-soft text-3xl font-bold text-primary">
                            {worker.name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")}
                        </div>

                        <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                                <h2 className="text-2xl font-bold">{worker.name}</h2>
                                <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                                    <CheckCircle2 size={14} /> Sample profile
                                </span>
                            </div>

                            <p className="mt-2 text-muted">{worker.profession}</p>

                            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted">
                                <span className="flex items-center gap-2">
                                    <MapPin size={16} /> {worker.city}
                                </span>
                                <span className="flex items-center gap-2">
                                    <BriefcaseBusiness size={16} /> {worker.experience} years
                                    experience
                                </span>
                                <span className="flex items-center gap-2">
                                    <Star size={16} className="fill-warning text-warning" />
                                    {worker.rating} ({worker.reviews} reviews)
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="my-7 border-t border-border" />

                    <h3 className="text-lg font-bold">About me</h3>
                    <p className="mt-3 max-w-3xl leading-7 text-muted">{worker.bio}</p>

                    <h3 className="mt-7 text-lg font-bold">Skills & expertise</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {worker.skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="rounded-card border border-border bg-surface p-5 shadow-soft sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <h2 className="text-xl font-bold">My Services</h2>
                            <p className="mt-1 text-sm text-muted">
                                Manage the services offered to customers.
                            </p>
                        </div>

                        <Link
                            to="/worker/create-service"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover"
                        >
                            <Plus size={17} /> Add Service
                        </Link>
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        {services.map((service) => (
                            <article
                                key={service.id}
                                className="rounded-xl border border-border bg-background p-4"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                                            {service.category}
                                        </span>
                                        <h3 className="mt-3 text-lg font-bold">{service.title}</h3>
                                    </div>

                                    <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                                        {service.status}
                                    </span>
                                </div>

                                <p className="mt-4 text-xl font-bold">
                                    Rs. {service.price.toLocaleString("en-PK")}
                                </p>
                                <p className="mt-1 flex items-center gap-2 text-xs text-muted">
                                    <Clock3 size={14} /> Price may vary by job requirements
                                </p>

                                <Link
                                    to={`/worker/edit-service/${service.id}`}
                                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold hover:border-primary hover:bg-surface-hover"
                                >
                                    <Pencil size={16} /> Edit Service
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
