import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=96&auto=format&fit=crop" alt="OM SAI HOSTEL" className="h-10 w-10 rounded-md object-cover ring-1 ring-white/10" />
              <div>
                <p className="text-xs tracking-widest text-rose-400 font-semibold">OM SAI HOSTEL</p>
                <p className="text-[11px] text-neutral-400">Your home away from home</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-400">
              A warm, well-managed residence for students and professionals with modern facilities, homelike food, and a caring community.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#facilities" className="hover:text-white">Facilities</a></li>
              <li><a href="#why-us" className="hover:text-white">Why Choose Us</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#community" className="hover:text-white">Our Community</a></li>
              <li><a href="#location" className="hover:text-white">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> 21 Orchid Lane, Near Metro Gate 2, City Center, 400001</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5" /> +91 98765 43210 (WhatsApp available)</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5" /> hello@omsaipg.com</li>
              <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5" /> Office Hours: Mon–Sat, 9:30 am – 7:00 pm</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Follow Us</h4>
            <div className="mt-3 flex items-center gap-3 text-neutral-300">
              <a href="#" aria-label="Instagram" className="hover:text-white">IG</a>
              <a href="#" aria-label="Facebook" className="hover:text-white">FB</a>
              <a href="#" aria-label="Twitter" className="hover:text-white">TW</a>
            </div>
            <form className="mt-4">
              <label className="text-xs text-neutral-400">Get updates</label>
              <div className="mt-1 flex">
                <input type="email" placeholder="Your email" className="w-full px-3 py-2 rounded-l-md bg-neutral-800 text-neutral-100 placeholder-neutral-500 border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-rose-500" />
                <button type="button" className="px-3 py-2 rounded-r-md bg-rose-600 hover:bg-rose-700 text-white text-sm">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-neutral-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} OM SAI HOSTEL. All rights reserved.</p>
          <p>Built with care for students and professionals.</p>
        </div>
      </div>
    </footer>
  );
}
