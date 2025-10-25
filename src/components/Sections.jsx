import { Bed, Shield, Wifi, Utensils, BookOpen, Gamepad2, Zap, Droplets, ParkingCircle, MapPin, Hospital, Calendar, Smartphone, Star, Users, Clock } from 'lucide-react';

export default function Sections() {
  return (
    <div className="">
      <About />
      <Facilities />
      <WhyChoose />
      <Pricing />
      <DayInLife />
      <Testimonials />
      <Rules />
      <Location />
      <CTA />
    </div>
  );
}

function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="py-14 sm:py-16 lg:py-20 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && <p className="text-xs tracking-widest uppercase text-rose-600 font-semibold">{eyebrow}</p>}
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-neutral-900">{title}</h2>
        <div className="mt-6 prose prose-neutral max-w-none prose-p:leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About Us" title="Where care meets comfort and community">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <p>
            OM SAI HOSTEL was established in 2013 by Mrs. Anuradha Patil and Mr. Raghav Patil, a mother–son duo with a shared dream of building a safe, nurturing, and professionally run living space for students and young professionals moving away from home. Inspired by Anuradha ji’s two decades of experience running a family mess and Raghav’s background in hospitality management, they envisioned a place where residents would be cared for like family—without compromising on modern standards.
          </p>
          <p>
            From a modest 18-room building to a full-fledged facility today, our core philosophy remains unchanged: people before profit. We greet new residents by name, celebrate festivals together, and maintain an open-door policy that encourages conversation, feedback, and continuous improvement. Every decision—from food sourcing to safety protocols—is guided by the belief that trust is earned through transparent systems and everyday care.
          </p>
          <p>
            With 12+ years of hands-on experience in hospitality and student care, the management team brings together professional processes and heartfelt service. Our digital mess management system, responsive maintenance, and community-first approach have helped more than 1,200 residents find their rhythm, focus on academics and careers, and feel at home.
          </p>
        </div>
        <div className="grid gap-4">
          <img className="rounded-lg ring-1 ring-neutral-200 object-cover w-full h-44" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop" alt="Bright and airy sharing room with beds and study tables" />
          <img className="rounded-lg ring-1 ring-neutral-200 object-cover w-full h-44" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" alt="Clean mess and dining area" />
        </div>
      </div>
    </Section>
  );
}

function Facilities() {
  return (
    <Section id="facilities" eyebrow="Facilities" title="Thoughtful amenities designed for real life">
      <div className="space-y-10">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-3 flex items-start gap-3">
            <div className="p-2 rounded-md bg-rose-50 text-rose-700 ring-1 ring-rose-100"><Bed className="h-5 w-5" /></div>
            <h3 className="font-semibold mt-1">Accommodation & Living Spaces</h3>
          </div>
          <div className="md:col-span-9 space-y-3">
            <p>
              Choose from single, double, and triple-sharing rooms. Standard rooms measure 120–160 sq. ft. with large windows for cross-ventilation; select rooms offer air-conditioning. Each resident gets a full-size bed with orthopedic mattress, study table with task lamp, ergonomic chair, individual wardrobe with lock, and under-bed storage. Rooms are well-lit, airy, and designed to support long study hours and restful sleep.
            </p>
            <p>
              Cleanliness is non-negotiable: housekeeping is provided on alternate days with deep cleaning every fortnight. Common areas are sanitized daily. A professional on-premise laundry is available with same-day return for express service; weekly laundry plans are also offered for convenience.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-3 flex items-start gap-3">
            <div className="p-2 rounded-md bg-rose-50 text-rose-700 ring-1 ring-rose-100"><Utensils className="h-5 w-5" /></div>
            <h3 className="font-semibold mt-1">Mess & Dining Facilities</h3>
          </div>
          <div className="md:col-span-9 space-y-3">
            <p>
              Our in-house kitchen is run by trained chefs following FSSAI-compliant processes. Meal timings: Breakfast 7:00–9:00 am, Lunch 12:00–2:00 pm, Dinner 7:00–9:00 pm. Menus rotate weekly across North and South Indian cuisines with balanced nutrition—think poha/idli mornings, wholesome thalis at lunch, and a comforting dal–sabzi–roti spread for dinner with weekend specials.
            </p>
            <p>
              We use RO-filtered water, fresh locally sourced produce, and maintain hygiene logs visible to residents. Vegetarian menu by default; egg options available on select days. We accommodate medical and religious dietary needs on request.
            </p>
            <p>
              Outside students can book meals digitally at ₹60 per meal. Our mess management app lets you pre-book meals, view upcoming menus, track consumption, skip meals during outings, and manage payments with full transparency—including monthly statements and instant refunds for canceled pre-bookings within the cut-off window.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-3 flex items-start gap-3">
            <div className="p-2 rounded-md bg-rose-50 text-rose-700 ring-1 ring-rose-100"><Shield className="h-5 w-5" /></div>
            <h3 className="font-semibold mt-1">Security & Safety Measures</h3>
          </div>
          <div className="md:col-span-9 space-y-3">
            <p>
              Safety is built into the facility: 24/7 CCTV coverage with 36 cameras covering entrances, corridors, common areas, and parking. Security guards are on duty round-the-clock with enhanced staffing from 7 pm to 7 am. Biometric + RFID card access ensures only authorized entry. Separate wings and floors for male and female residents maintain privacy and comfort.
            </p>
            <p>
              Visitor policy: 10:00 am–7:00 pm in designated areas with ID verification. Emergency protocols include on-call warden, night supervisor, and evacuation plans displayed on each floor. Fire extinguishers and smoke detectors are installed at every level; first-aid kits are available at reception and each wing. We have tie-ups with CityCare Hospital (1.1 km) and Lotus Multispeciality (2.3 km) for quick assistance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-3 flex items-start gap-3">
            <div className="p-2 rounded-md bg-rose-50 text-rose-700 ring-1 ring-rose-100"><BookOpen className="h-5 w-5" /></div>
            <h3 className="font-semibold mt-1">Study & Recreation Areas</h3>
          </div>
          <div className="md:col-span-9 space-y-3">
            <p>
              Dedicated quiet study rooms on each floor offer individual desks with bright, flicker-free lighting and high-back chairs suitable for long prep sessions. A compact reference library stocks previous year papers, standard textbooks, and competitive exam guides. WiFi signal is boosted for these rooms to minimize latency during online classes.
            </p>
            <p>
              For downtime, our common rooms feature a large-screen TV and indoor games like carrom, chess, and table tennis. A small outdoor courtyard and rooftop seating provide fresh air and informal hangouts. These shared spaces foster focused learning as well as healthy social interaction and friendships.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-3 flex items-start gap-3">
            <div className="p-2 rounded-md bg-rose-50 text-rose-700 ring-1 ring-rose-100"><Wifi className="h-5 w-5" /></div>
            <h3 className="font-semibold mt-1">Modern Amenities</h3>
          </div>
          <div className="md:col-span-9 space-y-3">
            <p>
              High-speed WiFi with dual-ISP setup delivering 300 Mbps bandwidth and smart failover keeps classes and work calls uninterrupted. 24/7 power backup via 40 kVA generator covers all rooms, study areas, and essential services so you can stay productive during outages.
            </p>
            <p>
              Secure parking for two-wheelers and limited four-wheeler slots, monitored by CCTV. Continuous water supply with RO-filtered drinking stations on every floor. Additional conveniences include printing/scanning at reception and parcel handling with app-based notifications.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WhyChoose() {
  return (
    <Section id="why-us" eyebrow="Why Choose OM SAI HOSTEL" title="More than a hostel—your support system in the city">
      <p>
        Located in a prime, well-connected neighborhood, OM SAI HOSTEL sits 450 m from Metro Gate 2, 600 m from City University’s Science Campus, 1.2 km from Tech Park Phase 1, and 300 m from the main market and bus stop. With 1,200+ alumni thriving in universities and companies across the country, our reputation rests on consistent care, responsive management, and a warm community culture. We celebrate festivals together, host monthly game nights, and run career guidance sessions with alumni mentors. Transparent pricing means no hidden charges—ever. And our innovative digital mess management system gives you full control over meals and expenses, setting us apart from traditional hostels.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: <MapPin className="h-5 w-5" />, label: 'Prime location' },
          { icon: <Users className="h-5 w-5" />, label: 'Community-first culture' },
          { icon: <Smartphone className="h-5 w-5" />, label: 'Digital mess app' },
          { icon: <Star className="h-5 w-5" />, label: 'Trusted by 1,200+ residents' },
        ].map((it, idx) => (
          <div key={idx} className="flex items-center gap-3 rounded-lg bg-rose-50 text-rose-800 px-3 py-2 ring-1 ring-rose-100">
            <span className="shrink-0">{it.icon}</span>
            <span className="text-sm font-medium">{it.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section id="pricing" eyebrow="Pricing" title="Simple, transparent plans with everything you need">
      <div className="grid md:grid-cols-3 gap-6">
        <Plan
          name="Triple Sharing"
          price="₹6,500/mo"
          features={['Bed + wardrobe + study setup', 'All meals included', 'Housekeeping (alt days)', 'Laundry (up to 12 kg/mo)', '300 Mbps WiFi', 'Power backup', 'RO drinking water']}
          extras={['AC add-on: +₹800/mo', 'Parking: +₹300/twowheeler, +₹900/fourwheeler']}
        />
        <Plan
          name="Double Sharing"
          price="₹7,800/mo"
          featured
          features={['Bed + wardrobe + study setup', 'All meals included', 'Housekeeping (alt days)', 'Laundry (up to 15 kg/mo)', '300 Mbps WiFi', 'Power backup', 'RO drinking water']}
          extras={['AC add-on: +₹600/mo', 'Parking: +₹300/twowheeler, +₹900/fourwheeler']}
        />
        <Plan
          name="Single Room"
          price="₹9,900/mo"
          features={['Private room + full furniture', 'All meals included', 'Housekeeping (alt days)', 'Laundry (up to 18 kg/mo)', '300 Mbps WiFi', 'Power backup', 'RO drinking water']}
          extras={['AC included where available', 'Parking: +₹300/twowheeler, +₹900/fourwheeler']}
        />
      </div>
      <p className="mt-4 text-sm text-neutral-600">
        Security deposit: one month rent (refundable). No hidden charges. Mess for outside students: ₹60/meal via app. Special dietary requirements may have nominal add-ons.
      </p>
    </Section>
  );
}

function Plan({ name, price, features, extras, featured }) {
  return (
    <div className={`rounded-xl ring-1 ${featured ? 'ring-rose-300 bg-rose-50' : 'ring-neutral-200 bg-white'} p-6 flex flex-col`}>
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold text-neutral-900">{name}</h3>
        <span className="text-rose-700 font-semibold">{price}</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-600" />{f}</li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-neutral-200 text-xs text-neutral-600">
        <p className="font-medium mb-1">Extras</p>
        <ul className="space-y-1">
          {extras.map((e, i) => (
            <li key={i}>• {e}</li>
          ))}
        </ul>
      </div>
      <a href="#apply" className="mt-6 inline-flex justify-center items-center px-4 py-2 rounded-md bg-rose-600 text-white text-sm font-medium hover:bg-rose-700">Apply Now</a>
    </div>
  );
}

function DayInLife() {
  return (
    <Section id="day" eyebrow="Day in the Life" title="A balanced routine that supports focus and wellbeing">
      <p>
        Your day at OM SAI HOSTEL starts with a fresh morning—hot water showers and a hearty breakfast between 7–9 am. Many residents head to classes or work by 9:30 am, while others settle into the quiet study rooms. Lunch is served 12–2 pm, with enough variety to keep things interesting through the week. Late afternoons are for library time, gym visits nearby, or a power nap. Evenings bring people together—table tennis matches, rooftop chai, or just catching the sunset. Dinner from 7–9 pm feels like a family meal, and by 10 pm most switch to focused study sessions. Quiet hours begin at 10:30 pm, and the building settles into a calm rhythm before night curfew at 11 pm, ensuring rest for another productive day.
      </p>
    </Section>
  );
}

function Testimonials() {
  const items = [
    {
      name: 'Priya Nair',
      role: 'B.Tech Student, City University',
      duration: 'Stayed 18 months',
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop',
      text:
        'During my GATE prep, the study rooms were a blessing—quiet, well-lit, and the WiFi never dropped. The warden checked in before every exam week, and the kitchen sent me curd rice when I was unwell. It truly felt like family looking out for me.'
    },
    {
      name: 'Rahul Verma',
      role: 'Software Intern, Tech Park Phase 1',
      duration: 'Stayed 10 months',
      img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop',
      text:
        'The mess app is brilliant—I could pre-book dinners on late office days and skip lunches when I traveled. End-of-month statements made budgeting easy, and refunds for canceled meals were instant.'
    },
    {
      name: 'Sana Sheikh',
      role: 'MBA Candidate',
      duration: 'Stayed 2 years',
      img: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=300&auto=format&fit=crop',
      text:
        'Festivals here are special. We celebrated Eid, Diwali, and Pongal together—potluck style! I met my best friends over carrom games and late-night chai on the terrace. The community vibe kept homesickness away.'
    },
    {
      name: 'Arjun Iyer',
      role: 'Civil Services Aspirant',
      duration: 'Stayed 14 months',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop',
      text:
        'I appreciated the discipline—quiet hours were respected and the staff took feedback seriously. When a light flickered in my room, maintenance fixed it the same day. Small things add up when you are preparing full-time.'
    },
    {
      name: 'Neha Gupta',
      role: 'Chartered Accountancy Trainee',
      duration: 'Stayed 8 months',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
      text:
        'As someone with dietary restrictions, I was nervous, but the kitchen prepared separate Jain meals when needed. The transparency around ingredients and hygiene made me trust the mess completely.'
    },
  ];

  return (
    <Section id="community" eyebrow="Our Community" title="Stories from residents who made this place home">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <div key={i} className="rounded-xl bg-white ring-1 ring-neutral-200 p-5">
            <div className="flex items-center gap-3">
              <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover ring-1 ring-neutral-200" />
              <div>
                <p className="font-semibold text-neutral-900">{t.name}</p>
                <p className="text-xs text-neutral-600">{t.role}</p>
                <p className="text-xs text-neutral-500">{t.duration}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-neutral-800 leading-relaxed">“{t.text}”</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Rules() {
  return (
    <Section id="rules" eyebrow="Rules & Guidelines" title="Friendly guidelines to ensure everyone’s comfort">
      <p>
        We keep things simple and respectful. Entry/exit is logged digitally; night curfew is 11:00 pm with exceptions approved by the warden for exams or late work. Guests are welcome in common areas 10:00 am–7:00 pm and must register at reception. Quiet hours start 10:30 pm—please use headphones and keep phone calls soft. Maintain cleanliness in rooms and shared spaces; housekeeping visits alternate days. For mess planning, pre-book or cancel meals on the app at least 2 hours before the slot so the kitchen can minimize waste and serve fresh food for everyone.
      </p>
    </Section>
  );
}

function Location() {
  return (
    <Section id="location" eyebrow="Location & Connectivity" title="Close to campuses, offices, markets, and transit">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          <p>
            Our neighborhood is safe, well-lit, and convenient. City University (Science Campus) is a 7-minute walk (600 m). Metro Station Gate 2 is 5 minutes away (450 m). Tech Park Phase 1 is 1.2 km by a quick shuttle or bike. Daily needs are covered by the main market (300 m), with a pharmacy and ATM across the street. CityCare Hospital is 1.1 km and Lotus Multispeciality is 2.3 km—both on partner lists for faster support.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-rose-700" /> City University Gate 3 — 600 m</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-rose-700" /> Metro Station Gate 2 — 450 m</li>
            <li className="flex items-start gap-2"><Hospital className="h-4 w-4 mt-0.5 text-rose-700" /> CityCare Hospital — 1.1 km</li>
            <li className="flex items-start gap-2"><ParkingCircle className="h-4 w-4 mt-0.5 text-rose-700" /> Tech Park Phase 1 — 1.2 km</li>
          </ul>
          <p className="text-sm text-neutral-600">
            Exact address: 21 Orchid Lane, Near Metro Gate 2, City Center, 400001
          </p>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-xl ring-1 ring-neutral-200">
          <iframe
            title="OM SAI HOSTEL Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1161000026!2d72.741099!3d19.082197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzU2LjAiTiA3MsKwNDQnMzIuMCJF!5e0!3m2!1sen!2sin!4v1689781111111"
          />
        </div>
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <section id="apply" className="py-16 bg-gradient-to-br from-rose-600 to-rose-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">Ready to join the OM SAI family?</h3>
            <p className="mt-3 text-white/90">
              Sign in to access the student portal and mess management system, or apply now in under 3 minutes. Prefer a tour first? We’d love to host you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a id="signin" href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-rose-700 font-semibold hover:bg-rose-50"><Smartphone className="h-5 w-5" /> Sign In</a>
            <a id="mess-portal" href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-rose-50/20 ring-1 ring-white/30 hover:bg-rose-50/30"><Utensils className="h-5 w-5" /> Mess Portal</a>
            <a id="tour" href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-rose-900/30 ring-1 ring-white/30 hover:bg-rose-900/40"><Calendar className="h-5 w-5" /> Book a Tour</a>
          </div>
        </div>
      </div>
    </section>
  );
}
