import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Index({ restaurants }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm("Sigurado ka ba nga gusto nimo papason ni?")) {
            destroy(route("restaurants.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout header="Manage Restaurants">
            <Head title="Restaurants" />
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-800">
                        Restaurant List
                    </h3>
                    <Link
                        href={route("restaurants.create")}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors"
                    >
                        + Add Restaurant
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Rating</th>
                                <th className="px-6 py-4">Delivery Time</th>
                                <th className="px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {restaurants.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center p-6 text-slate-500"
                                    >
                                        Wala pay restaurants.
                                    </td>
                                </tr>
                            ) : (
                                restaurants.map((restaurant) => (
                                    <tr
                                        key={restaurant.id}
                                        className="hover:bg-slate-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 font-medium text-slate-800">
                                            {restaurant.name}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                            {restaurant.category}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                            ⭐ {restaurant.rating}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                            {restaurant.delivery_time}
                                        </td>
                                        <td className="px-6 py-4 flex gap-2">
                                            <Link
                                                href={route(
                                                    "restaurants.edit",
                                                    restaurant.id,
                                                )}
                                                className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-lg text-sm transition-colors"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(restaurant.id)
                                                }
                                                className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1.5 rounded-lg text-sm transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
