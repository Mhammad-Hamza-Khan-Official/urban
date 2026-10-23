
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    BriefcaseBusiness,
    CheckCircle2,
    IndianRupee,
} from "lucide-react";

const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-ink outline-none placeholder:text-muted focus:border-primary";

export default function CreateService() {
    const [created, setCreated] = useState(false);

    const {
        register,
        handleSubmit,
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

    const onSubmit = async (data) => {
        // TODO: POST data to your backend.
        console.log("New service:", {
            ...data,
            price: Number(data.price),
        });
        setCreated(true);
    };

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
                    <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-primary-soft p-3 text-primary">
                            <BriefcaseBusiness size={25} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold sm:text-3xl">
                                Create a service
                            </h1>
                            <p className="mt-2 text-sm text-muted">
                                Publish a service that customers can discover and book.
                            </p>
                        </div>
                    </div>

                    {created && (
                        <div className="mt-6 flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 p-4 text-sm text-success">
                            <CheckCircle2 size={19} />
                            Demo service submitted. Connect the backend to publish it.
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                        <div>
                            <label htmlFor="title" className="text-sm font-medium">
                                Service title *
                            </label>
                            <input
                                id="title"
                                placeholder="e.g. Professional AC Repair"
                                className={inputClass}
                                {...register("title", {
                                    required: "Service title is required.",
                                    minLength: {
                                        value: 3,
                                        message: "Enter at least 3 characters.",
                                    },
                                    maxLength: {
                                        value: 80,
                                        message: "Maximum 80 characters.",
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
                                <option value="">Select a category</option>
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
                                    Price in PKR *
                                </label>
                                <div className="relative">
                                    <IndianRupee
                                        size={17}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                                    />
                                    <input
                                        id="price"
                                        type="number"
                                        min="1"
                                        placeholder="2500"
                                        className={`${inputClass} pl-10`}
                                        {...register("price", {
                                            required: "Price is required.",
                                            valueAsNumber: true,
                                            min: { value: 1, message: "Price must be positive." },
                                            max: {
                                                value: 10000000,
                                                message: "Enter a valid price.",
                                            },
                                        })}
                                    />
                                </div>
                                {errors.price && (
                                    <p className="mt-1 text-sm text-danger">
                                        {errors.price.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="duration" className="text-sm font-medium">
                                    Estimated duration *
                                </label>
                                <select
                                    id="duration"
                                    className={inputClass}
                                    {...register("duration", {
                                        required: "Select an estimated duration.",
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
                                Service description *
                            </label>
                            <textarea
                                id="description"
                                rows={5}
                                placeholder="Explain what your service includes, your work process, and any important details..."
                                className={inputClass}
                                {...register("description", {
                                    required: "Description is required.",
                                    minLength: {
                                        value: 30,
                                        message: "Write at least 30 characters.",
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
                            className="w-full rounded-xl bg-primary px-5 py-3.5 font-semibold text-white hover:bg-primary-hover disabled:opacity-60"
                        >
                            {isSubmitting ? "Submitting..." : "Create Service"}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}
