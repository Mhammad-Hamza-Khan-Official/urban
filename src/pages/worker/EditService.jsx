
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowLeft, CheckCircle2, Save } from "lucide-react";

const sampleServices = {
    "service-1": {
        title: "Home Cleaning",
        category: "Cleaning",
        price: 2500,
        duration: "2–4 hours",
        description:
            "Professional home cleaning including rooms, kitchen surfaces, bathrooms, and floors.",
    },
    "service-2": {
        title: "AC Repair",
        category: "Repair",
        price: 1500,
        duration: "1–2 hours",
        description:
            "AC inspection, troubleshooting, and common maintenance and repair services.",
    },
};

const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-ink outline-none placeholder:text-muted focus:border-primary";

export default function EditService() {
    const { serviceId } = useParams();
    const service = sampleServices[serviceId];

    const [saved, setSaved] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            title: "",
            category: "",
            price: "",
            duration: "",
            description: "",
        },
    });

    useEffect(() => {
        if (service) {
            reset(service);
        }
    }, [service, reset]);

    const onSubmit = async (data) => {
        // TODO: PUT/PATCH your service API using serviceId.
        console.log("Updated service:", serviceId, data);
        setSaved(true);
    };

    if (!service) {
        return (
            <main className="grid min-h-[60vh] place-items-center bg-background p-6 text-ink">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Service not found</h1>
                    <p className="mt-2 text-muted">
                        This sample service ID does not exist.
                    </p>
                    <Link
                        to="/worker/dashboard"
                        className="mt-5 inline-block text-primary"
                    >
                        Back to dashboard
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background p-4 text-ink sm:p-6 lg:p-8">
            <div className="mx-auto max-w-3xl">
                <Link
                    to="/worker/dashboard"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary"
                >
                    <ArrowLeft size={17} /> Dashboard
                </Link>

                <section className="mt-6 rounded-card border border-border bg-surface p-5 shadow-soft sm:p-8">
                    <h1 className="text-2xl font-bold sm:text-3xl">Edit service</h1>
                    <p className="mt-2 text-sm text-muted">
                        Update the information customers see on your service listing.
                    </p>

                    {saved && (
                        <div className="mt-6 flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 p-4 text-sm text-success">
                            <CheckCircle2 size={19} />
                            Changes submitted in demo mode. They are not saved to the database.
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                        <div>
                            <label htmlFor="title" className="text-sm font-medium">
                                Service title *
                            </label>
                            <input
                                id="title"
                                className={inputClass}
                                {...register("title", {
                                    required: "Service title is required.",
                                    minLength: {
                                        value: 3,
                                        message: "Enter at least 3 characters.",
                                    },
                                })}
                            />
                            {errors.title && (
                                <p className="mt-1 text-sm text-danger">
                                    {errors.title.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="category" className="text-sm font-medium">
                                Category *
                            </label>
                            <select
                                id="category"
                                className={inputClass}
                                {...register("category", {
                                    required: "Select a category.",
                                })}
                            >
                                <option value="">Select category</option>
                                <option value="Cleaning">Cleaning</option>
                                <option value="Repair">Repair & Maintenance</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Plumbing">Plumbing</option>
                                <option value="Home Improvement">Home Improvement</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.category && (
                                <p className="mt-1 text-sm text-danger">
                                    {errors.category.message}
                                </p>
                            )}
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="price" className="text-sm font-medium">
                                    Price (PKR) *
                                </label>
                                <input
                                    id="price"
                                    type="number"
                                    min="1"
                                    className={inputClass}
                                    {...register("price", {
                                        required: "Price is required.",
                                        valueAsNumber: true,
                                        min: { value: 1, message: "Price must be positive." },
                                    })}
                                />
                                {errors.price && (
                                    <p className="mt-1 text-sm text-danger">
                                        {errors.price.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="duration" className="text-sm font-medium">
                                    Duration *
                                </label>
                                <select
                                    id="duration"
                                    className={inputClass}
                                    {...register("duration", {
                                        required: "Select a duration.",
                                    })}
                                >
                                    <option value="">Select duration</option>
                                    <option value="Under 1 hour">Under 1 hour</option>
                                    <option value="1–2 hours">1–2 hours</option>
                                    <option value="2–4 hours">2–4 hours</option>
                                    <option value="Half day">Half day</option>
                                    <option value="Full day">Full day</option>
                                    <option value="Depends on project">Depends on project</option>
                                </select>
                                {errors.duration && (
                                    <p className="mt-1 text-sm text-danger">
                                        {errors.duration.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="text-sm font-medium">
                                Description *
                            </label>
                            <textarea
                                id="description"
                                rows={5}
                                className={inputClass}
                                {...register("description", {
                                    required: "Description is required.",
                                    minLength: {
                                        value: 30,
                                        message: "Enter at least 30 characters.",
                                    },
                                    maxLength: {
                                        value: 1000,
                                        message: "Maximum 1000 characters.",
                                    },
                                })}
                            />
                            {errors.description && (
                                <p className="mt-1 text-sm text-danger">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        <button
                            disabled={isSubmitting}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 font-semibold text-white hover:bg-primary-hover disabled:opacity-60"
                        >
                            <Save size={18} />
                            {isSubmitting ? "Saving..." : "Save Changes"}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}
