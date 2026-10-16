import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    Create an Account
                </h2>
                <p className="text-slate-500 text-sm">
                    Join ChopDash and start ordering.
                </p>
            </div>
            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-slate-800"
                        placeholder="Juan Dela Cruz"
                    />
                    {errors.name && (
                        <p className="text-rose-500 text-xs mt-1">
                            {errors.name}
                        </p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-slate-800"
                        placeholder="admin@chopdash.com"
                    />
                    {errors.email && (
                        <p className="text-rose-500 text-xs mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-slate-800"
                        placeholder="••••••••"
                    />
                    {errors.password && (
                        <p className="text-rose-500 text-xs mt-1">
                            {errors.password}
                        </p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-slate-800"
                        placeholder="••••••••"
                    />
                    {errors.password_confirmation && (
                        <p className="text-rose-500 text-xs mt-1">
                            {errors.password_confirmation}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 mt-2"
                >
                    {processing ? "Registering..." : "Register"}
                </button>
            </form>
            <div className="mt-6 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                    href={route("login")}
                    className="text-orange-600 hover:text-orange-500 font-bold"
                >
                    Login
                </Link>
            </div>
        </GuestLayout>
    );
}
