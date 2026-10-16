import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ restaurants }) {
    return (
        <AuthenticatedLayout header="Dashboard Overview">
            <Head title="Dashboard" />

            <div className="mb-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 flex justify-between items-center text-white shadow-lg">
                <div>
                    <h1 className="text-2xl font-bold">Welcome back, Admin!</h1>
                    <p className="text-white/80 text-sm mt-1">
                        Manage your restaurants and orders here.
                    </p>
                </div>
                <Link
                    href={route("restaurants.create")}
                    className="bg-white text-orange-600 font-bold py-2 px-6 rounded-lg transition-colors shadow-md hover:bg-slate-100"
                >
                    + Add Restaurant
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                        Total Restaurants
                    </h3>
                    <p className="text-3xl font-extrabold text-slate-800 mt-2">
                        {restaurants.length}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                        Total Orders
                    </h3>
                    <p className="text-3xl font-extrabold text-slate-800 mt-2">
                        124
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                        Revenue
                    </h3>
                    <p className="text-3xl font-extrabold text-slate-800 mt-2">
                        ₱12,450
                    </p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
