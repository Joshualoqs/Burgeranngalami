import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex font-sans bg-slate-50">
            {/* Left Side - Image/Branding */}
            <div className="hidden lg:flex w-1/2 bg-orange-500 items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="relative z-10 text-center px-12">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-500 font-bold text-3xl mx-auto mb-6 shadow-xl">
                        C
                    </div>
                    <h1 className="text-4xl font-extrabold text-white mb-4">
                        ChopDash
                    </h1>
                    <p className="text-xl text-white/90 font-semibold mb-2">
                        Delicious Food, Delivered Fast
                    </p>
                    <p className="text-white/80 text-sm max-w-md mx-auto">
                        Order from your favorite restaurants near you.
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">{children}</div>
            </div>
        </div>
    );
}
