import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, restaurants }) {
    return (
        <>
            <Head title="ChopDash - Delicious Food, Delivered Fast" />

            <div className="min-h-screen bg-slate-50 font-sans">
                {/* NAVBAR */}
                <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-20 items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                    C
                                </div>
                                <h1 className="text-2xl font-bold text-slate-900 tracking-widest">
                                    ChopDash
                                </h1>
                            </div>

                            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                                <Link
                                    href="#"
                                    className="text-orange-600 border-b-2 border-orange-600 pb-1"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Restaurants
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Categories
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Offers
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    About Us
                                </Link>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="text-slate-500 hover:text-slate-800">
                                    🔍
                                </button>
                                <button className="text-slate-500 hover:text-slate-800 relative">
                                    🛒{" "}
                                    <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                        0
                                    </span>
                                </button>
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-md"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <Link
                                        href={route("register")}
                                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-md"
                                    >
                                        Sign Up
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* HERO SECTION */}
                <section className="relative bg-white py-20 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
                                <span className="text-xs text-orange-500">
                                    🔥
                                </span>
                                <span className="text-xs font-semibold text-orange-600 tracking-wide uppercase">
                                    Fast Delivery • Best Prices
                                </span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                                Delicious Food, <br />
                                <span className="text-orange-500">
                                    Delivered Fast
                                </span>
                            </h1>
                            <p className="text-lg text-slate-500 mb-10 max-w-lg">
                                Order from your favorite restaurants near you.
                            </p>

                            <div className="bg-white rounded-xl shadow-lg p-2 flex items-center gap-2 max-w-lg border border-slate-200">
                                <span className="pl-4 text-slate-400">📍</span>
                                <input
                                    type="text"
                                    placeholder="Enter your location"
                                    className="flex-1 text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400 py-3"
                                />
                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                                    Find Food
                                </button>
                            </div>

                            <div className="flex items-center gap-4 mt-8">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"
                                        ></div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">
                                        Join 10,000+ happy customers
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        ⭐ 4.8 Rating
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image Placeholder */}
                        <div className="relative hidden lg:block">
                            <div className="w-full h-[450px] bg-orange-100 rounded-full flex items-center justify-center overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
                                    alt="Burger"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                <div className="absolute top-10 right-10 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2">
                                    <span className="text-orange-500 text-xl">
                                        ⏱️
                                    </span>
                                    <div>
                                        <p className="text-xs font-bold text-slate-800">
                                            25 mins
                                        </p>
                                        <p className="text-[10px] text-slate-500">
                                            Delivery Time
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute bottom-10 left-10 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2">
                                    <span className="text-yellow-500 text-xl">
                                        ⭐
                                    </span>
                                    <div>
                                        <p className="text-xs font-bold text-slate-800">
                                            4.7
                                        </p>
                                        <p className="text-[10px] text-slate-500">
                                            Avg Rating
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* POPULAR RESTAURANTS SECTION */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-end mb-10">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">
                                    Popular Restaurants
                                </h2>
                            </div>
                            <Link
                                href="#"
                                className="text-orange-500 font-semibold hover:text-orange-600 hidden sm:block"
                            >
                                View all &rarr;
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {restaurants && restaurants.length > 0 ? (
                                restaurants.map((restaurant) => (
                                    <div
                                        key={restaurant.id}
                                        className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
                                    >
                                        <div className="h-48 bg-slate-200 overflow-hidden relative">
                                            <img
                                                src={
                                                    restaurant.image_url ||
                                                    "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop"
                                                }
                                                alt={restaurant.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg text-xs font-bold text-slate-800 flex items-center gap-1">
                                                ⭐ {restaurant.rating}
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-slate-800 mb-1">
                                                {restaurant.name}
                                            </h3>
                                            <p className="text-sm text-slate-500 mb-3">
                                                {restaurant.category} •{" "}
                                                {restaurant.delivery_time}
                                            </p>
                                            <button className="w-full bg-orange-50 hover:bg-orange-100 text-orange-600 font-bold py-2 rounded-lg transition-colors text-sm">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-10 bg-white rounded-xl border border-slate-200">
                                    <p className="text-slate-500">
                                        Wala pay restaurants nga na-add.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* APP DOWNLOAD SECTION */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 overflow-hidden relative shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop"
                                    alt="App"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
                                    <div className="w-16 h-1 bg-white/50 rounded-full mx-auto"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-2 block">
                                Get the App
                            </span>
                            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                                Download our <br />
                                mobile app
                            </h2>
                            <p className="text-slate-500 mb-8">
                                Enjoy faster ordering, exclusive offers, and
                                real-time tracking.
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2">
                                    <span>🍎</span> App Store
                                </button>
                                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2">
                                    <span>▶️</span> Google Play
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="bg-slate-900 py-12 text-slate-400 text-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                    C
                                </div>
                                <h1 className="text-lg font-bold text-white tracking-widest">
                                    ChopDash
                                </h1>
                            </div>
                            <p className="text-xs text-slate-500">
                                © 2024 ChopDash. All rights reserved.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">
                                Company
                            </h4>
                            <ul className="space-y-2 text-xs">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">
                                For Restaurants
                            </h4>
                            <ul className="space-y-2 text-xs">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Partner with us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Apps
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">
                                Follow Us
                            </h4>
                            <div className="flex gap-4 text-lg">
                                <a href="#" className="hover:text-white">
                                    📘
                                </a>
                                <a href="#" className="hover:text-white">
                                    📸
                                </a>
                                <a href="#" className="hover:text-white">
                                    🐦
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
