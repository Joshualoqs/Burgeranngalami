import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ restaurant }) {
    const { data, setData, put, processing, errors } = useForm({
        name: restaurant.name,
        category: restaurant.category,
        rating: restaurant.rating,
        delivery_time: restaurant.delivery_time,
        image_url: restaurant.image_url || "",
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("restaurants.update", restaurant.id));
    };

    return (
        <AuthenticatedLayout header="Edit Restaurant">
            <Head title="Edit Restaurant" />
            <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-2xl shadow-sm">
                <form onSubmit={submit} className="space-y-5">
                    <div>
                        <label className="block text-slate-600 text-sm font-medium mb-1">
                            Restaurant Name:
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                        {errors.name && (
                            <div className="text-rose-500 text-xs mt-1">
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-slate-600 text-sm font-medium mb-1">
                            Category:
                        </label>
                        <input
                            type="text"
                            value={data.category}
                            onChange={(e) =>
                                setData("category", e.target.value)
                            }
                            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                        {errors.category && (
                            <div className="text-rose-500 text-xs mt-1">
                                {errors.category}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-slate-600 text-sm font-medium mb-1">
                            Rating (0-5):
                        </label>
                        <input
                            type="number"
                            step="0.1"
                            value={data.rating}
                            onChange={(e) => setData("rating", e.target.value)}
                            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                        {errors.rating && (
                            <div className="text-rose-500 text-xs mt-1">
                                {errors.rating}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-slate-600 text-sm font-medium mb-1">
                            Delivery Time:
                        </label>
                        <input
                            type="text"
                            value={data.delivery_time}
                            onChange={(e) =>
                                setData("delivery_time", e.target.value)
                            }
                            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                        {errors.delivery_time && (
                            <div className="text-rose-500 text-xs mt-1">
                                {errors.delivery_time}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-slate-600 text-sm font-medium mb-1">
                            Image URL (Optional):
                        </label>
                        <input
                            type="url"
                            value={data.image_url}
                            onChange={(e) =>
                                setData("image_url", e.target.value)
                            }
                            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                        {errors.image_url && (
                            <div className="text-rose-500 text-xs mt-1">
                                {errors.image_url}
                            </div>
                        )}
                    </div>
                    <div className="flex gap-4 pt-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors"
                        >
                            {processing ? "Updating..." : "Update Restaurant"}
                        </button>
                        <Link
                            href={route("restaurants.index")}
                            className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
