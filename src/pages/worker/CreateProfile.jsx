
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
    UserRound,
    MapPin,
    BriefcaseBusiness,
    ArrowLeft,
    CheckCircle2,
} from "lucide-react";

const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-ink outline-none transition placeholder:text-muted focus:border-primary";

export default function CreateProfile() {
    const [saved, setSaved] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            fullName: "",
            phone: "",
            city: "",
            address: "",
            experience: "",
            skills: "",
            bio: "",
        },
    });

    const onSubmit = async (data) => {
        // TODO: POST data to your worker profile API.
        console.log("Worker profile:", data);
        setSaved(true);
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

                <div className="mt-6 rounded-card border border-border bg-surface p-5 shadow-soft sm:p-8">
                    <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-primary-soft p-3 text-primary">
                            <UserRound size={25} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold sm:text-3xl">
                                Create your profile
                            </h1>
                            <p className="mt-2 text-sm text-muted">
                                Help customers understand your experience and services.
                            </p>
                        </div>
                    </div>

                    {saved && (
                        <div className="mt-6 flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 p-4 text-sm text-success">
                            <CheckCircle2 size={19} />
                            Demo profile submitted. Connect your API to save it permanently.
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                        <div>
                            <label htmlFor="fullName" className="text-sm font-medium">
                                Full name *
                            </label>
                            <input
                                id="fullName"
                                placeholder="Enter your full name"
                                autoComplete="name"
                                className={inputClass}
                                {...register("fullName", {
                                    required: "Full name is required.",
                                    minLength: {
                                        value: 3,
                                        message: "Enter at least 3 characters.",
                                    },
                                })}
                            />
                            {errors.fullName && (
                                <p className="mt-1 text-sm text-danger">
                                    {errors.fullName.message}
                                </p>
                            )}
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="phone" className="text-sm font-medium">
                                    Phone number *
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="03XXXXXXXXX"
                                    autoComplete="tel"
                                    className={inputClass}
                                    {...register("phone", {
                                        required: "Phone number is required.",
                                        pattern: {
                                            value: /^03\d{9}$/,
                                            message: "Enter a valid Pakistani mobile number.",
                                        },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-danger">
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="city" className="text-sm font-medium">
                                    City *
                                </label>
                                <input
                                    id="city"
                                    placeholder="e.g. Hyderabad"
                                    className={inputClass}
                                    {...register("city", {
                                        required: "City is required.",
                                    })}
                                />
                                {errors.city && (
                                    <p className="mt-1 text-sm text-danger">
                                        {errors.city.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className="text-sm font-medium">
                                Service area / address *
                            </label>
                            <input
                                id="address"
                                placeholder="Area, neighborhood, or business address"
                                className={inputClass}
                                {...register("address", {
                                    required: "Service area is required.",
                                    minLength: {
                                        value: 4,
                                        message: "Enter a more specific service area.",
                                    },
                                })}
                            />
                            {errors.address && (
                                <p className="mt-1 text-sm text-danger">
                                    {errors.address.message}
                                </p>
                            )}
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="experience" className="text-sm font-medium">
                                    Experience (years) *
                                </label>
                                <input
                                    id="experience"
                                    type="number"
                                    min="0"
                                    max="60"
                                    placeholder="e.g. 3"
                                    className={inputClass}
                                    {...register("experience", {
                                        required: "Experience is required.",
                                        valueAsNumber: true,
                                        min: { value: 0, message: "Cannot be negative." },
                                        max: { value: 60, message: "Enter a valid experience." },
                                    })}
                                />
                                {errors.experience && (
                                    <p className="mt-1 text-sm text-danger">
                                        {errors.experience.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="skills" className="text-sm font-medium">
                                    Skills *
                                </label>
                                <input
                                    id="skills"
                                    placeholder="AC repair, maintenance..."
                                    className={inputClass}
                                    {...register("skills", {
                                        required: "Enter your skills.",
                                    })}
                                />
                                {errors.skills && (
                                    <p className="mt-1 text-sm text-danger">
                                        {errors.skills.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="bio" className="text-sm font-medium">
                                About you *
                            </label>
                            <textarea
                                id="bio"
                                rows={4}
                                placeholder="Describe your experience and the services you provide..."
                                className={inputClass}
                                {...register("bio", {
                                    required: "Please write a short introduction.",
                                    minLength: {
                                        value: 20,
                                        message: "Write at least 20 characters.",
                                    },
                                    maxLength: {
                                        value: 600,
                                        message: "Maximum 600 characters.",
                                    },
                                })}
                            />
                            {errors.bio && (
                                <p className="mt-1 text-sm text-danger">
                                    {errors.bio.message}
                                </p>
                            )}
                        </div>

                        <button
                            disabled={isSubmitting}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 font-semibold text-white hover:bg-primary-hover disabled:opacity-60"
                        >
                            <BriefcaseBusiness size={18} />
                            {isSubmitting ? "Saving..." : "Create Profile"}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
