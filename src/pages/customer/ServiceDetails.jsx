
import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Clock3,
    MapPin,
    ShieldCheck,
    Star,
} from "lucide-react";

const services = [
    {
        id: "home-cleaning",
        name: "Home Cleaning",
        category: "Cleaning",
        description:
            "Get professional help keeping your home clean, comfortable, and organized.",
        price: 2500,
        rating: 4.9,
        reviews: 120,
        provider: "Ahmed Services",
        duration: "2–3 hours",
        features: [
            "Living room and bedroom cleaning",
            "Kitchen surface cleaning",
            "Bathroom cleaning",
            "Dusting and floor cleaning",
        ],
    },
    {
        id: "ac-repair",
        name: "AC Repair",
        category: "Repair",
        description:
            "Book a professional for AC inspection, troubleshooting, and common repairs.",
        price: 1500,
        rating: 4.8,
        reviews: 95,
        provider: "Cool Tech Solutions",
        duration: "1–2 hours",
        features: [
            "Initial AC inspection",
            "Troubleshooting",
            "Basic maintenance",
            "Repair recommendations",
        ],
    },
    {
        id: "plumbing",
        name: "Plumbing",
        category: "Repair",
        description:
            "Get help with common plumbing issues, fixtures, and installations.",
        price: 1000,
        rating: 4.7,
        reviews: 76,
        provider: "Reliable Plumbing",
        duration: "1–2 hours",
        features: [
            "Leak inspection",
            "Tap and fixture repairs",
            "Basic pipe troubleshooting",
            "Installation assistance",
        ],
    },
    {
        id: "electrician",
        name: "Electrician",
        category: "Electrical",
        description:
            "Find professional help for electrical fittings and common electrical repairs.",
        price: 1200,
        rating: 4.8,
        reviews: 88,
        provider: "Safe Electric",
        duration: "1–2 hours",
        features: [
            "Electrical inspection",
            "Switch and socket repairs",
            "Light fitting assistance",
            "Repair recommendations",
        ],
    },
    {
        id: "painting",
        name: "Home Painting",
        category: "Home Improvement",
        description:
            "Plan your home painting project with a local service professional.",
        price: 3500,
        rating: 4.6,
        reviews: 54,
        provider: "Color House",
        duration: "Varies by project",
        features: [
            "Surface assessment",
            "Color and finish discussion",
            "Painting project planning",
            "Estimated project requirements",
        ],
    },
    {
        id: "pest-control",
        name: "Pest Control",
        category: "Cleaning",
        description:
            "Arrange a professional inspection and treatment plan for common pests.",
        price: 2000,
        rating: 4.7,
        reviews: 63,
        provider: "Clean Shield",
        duration: "1–3 hours",
        features: [
            "Initial inspection",
            "Treatment plan discussion",
            "Service-specific treatment",
            "Prevention recommendations",
        ],
    },
];

export default function ServiceDetails() {
    const { serviceId } = useParams();
    const service = services.find((item) => item.id === serviceId);

    if (!service) {
        return (
            <main className="grid min-h-[60vh] place-items-center bg-background p-6 text-ink">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Service not found</h1>
                    <p className="mt-2 text-muted">
                        This service may no longer be available.
                    </p>
                    <Link
                        to="/services"
                        className="mt-5 inline-flex items-center gap-2 font-semibold text-primary"
                    >
                        <ArrowLeft size={17} /> Back to services
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background p-4 text-ink sm:p-6 lg:p-8">
            <div className="mx-auto max-w-6xl">
                <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary"
                >
                    <ArrowLeft size={17} /> Back to services
                </Link>

                <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_340px]">
                    <section className="rounded-card border border-border bg-surface p-5 shadow-soft sm:p-8">
                        <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                            {service.category}
                        </span>

                        <h1 className="mt-5 text-3xl font-bold sm:text-4xl">
                            {service.name}
                        </h1>
                        <p className="mt-4 leading-7 text-muted">{service.description}</p>

                        <div className="mt-5 flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center gap-2">
                                <Star size={17} className="fill-warning text-warning" />
                                <strong>{service.rating}</strong>
                                <span className="text-muted">({service.reviews} reviews)</span>
                            </span>
                            <span className="flex items-center gap-2 text-muted">
                                <Clock3 size={17} /> {service.duration}
                            </span>
                        </div>

                        <div className="my-7 border-t border-border" />

                        <h2 className="text-xl font-bold">What is included</h2>
                        <ul className="mt-4 space-y-3">
                            {service.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                    <CheckCircle2
                                        size={19}
                                        className="mt-0.5 shrink-0 text-success"
                                    />
                                    <span className="text-muted">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 rounded-xl border border-border bg-background p-4">
                            <div className="flex items-center gap-3">
                                <div className="rounded-xl bg-primary-soft p-3 text-primary">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Service information</h3>
                                    <p className="mt-1 text-sm text-muted">
                                        Confirm the final price and service scope with the provider.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <aside className="rounded-card border border-border bg-surface p-5 shadow-soft sm:p-6">
                        <p className="text-sm text-muted">Starting price</p>
                        <p className="mt-2 text-3xl font-bold">
                            Rs. {service.price.toLocaleString("en-PK")}
                        </p>
                        <p className="mt-2 text-sm text-muted">
                            Final cost may depend on your requirements.
                        </p>

                        <div className="my-5 border-t border-border" />

                        <p className="text-sm text-muted">Service provider</p>
                        <h3 className="mt-2 font-semibold">{service.provider}</h3>
                        <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                            <MapPin size={15} /> Local service provider
                        </p>

                        <Link
                            to={`/book-service/${service.id}`}
                            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-semibold text-white hover:bg-primary-hover"
                        >
                            Book this service <ArrowRight size={18} />
                        </Link>

                        <p className="mt-3 text-center text-xs text-muted">
                            Select your preferred date and time.
                        </p>
                    </aside>
                </div>
            </div>
        </main>
    );
}
