import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    Welcome Back!
                </h2>
                <p className="text-slate-500 text-sm">
                    Login to your account to continue.
                </p>
            </div>
            {status && (
                <div className="mb-4 font-medium text-sm text-emerald-600 bg-emerald-50 p-3 rounded-lg">
                    {status}
                </div>
            )}
            <form onSubmit={submit} className="space-y-5">
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
                <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm text-slate-600">
                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                            className="rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="ml-2">Remember me</span>
                    </label>
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="text-sm text-orange-600 hover:text-orange-500 font-medium"
                        >
                            Forgot Password?
                        </Link>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 mt-2"
                >
                    {processing ? "Logging in..." : "Login"}
                </button>
            </form>
            <div className="mt-6 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                    href={route("register")}
                    className="text-orange-600 hover:text-orange-500 font-bold"
                >
                    Register
                </Link>
            </div>
        </GuestLayout>
    );
}
