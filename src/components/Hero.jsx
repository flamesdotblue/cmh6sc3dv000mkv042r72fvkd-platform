export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-rose-50 to-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
            Welcome to OM SAI HOSTEL
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Thoughtfully designed living for students and professionals — your home away from home.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#apply" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-rose-600 text-white font-medium hover:bg-rose-700">Apply for Admission</a>
            <a href="#tour" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-neutral-300 text-neutral-800 font-medium hover:bg-neutral-100">Book a Visit</a>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div className="rounded-md bg-white p-4 ring-1 ring-neutral-200">
              <dt className="text-xs text-neutral-500">Residents served</dt>
              <dd className="text-lg font-semibold">1,200+</dd>
            </div>
            <div className="rounded-md bg-white p-4 ring-1 ring-neutral-200">
              <dt className="text-xs text-neutral-500">Years in care</dt>
              <dd className="text-lg font-semibold">12+</dd>
            </div>
            <div className="rounded-md bg-white p-4 ring-1 ring-neutral-200">
              <dt className="text-xs text-neutral-500">Mess app users</dt>
              <dd className="text-lg font-semibold">700+</dd>
            </div>
          </dl>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop"
              alt="OM SAI HOSTEL Building"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white text-sm">
              Actual photo of the hostel building and entrance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
