import { DoorOpen, Soup, Phone, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=256&auto=format&fit=crop"
              alt="OM SAI HOSTEL Logo"
              className="h-10 w-10 rounded-md object-cover ring-1 ring-neutral-200"
            />
            <div className="leading-tight">
              <p className="text-sm tracking-widest text-rose-600 font-semibold">OM SAI HOSTEL</p>
              <p className="text-xs text-neutral-500">Your home away from home</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#location" className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900"><MapPin className="h-4 w-4" /> Location</a>
            <a href="tel:+919876543210" className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900"><Phone className="h-4 w-4" /> +91 98765 43210</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#signin" className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium border border-neutral-300 text-neutral-700 hover:bg-neutral-100"><DoorOpen className="h-4 w-4" /> Sign In</a>
            <a href="#mess-portal" className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-rose-600 text-white hover:bg-rose-700"><Soup className="h-4 w-4" /> Mess Portal</a>
          </div>
        </div>
      </div>
    </header>
  );
}
