function Services() {
  return (
    <section className="bg-(--Egg) min-h-[calc(100vh-96px)] px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="my-10 text-center text-3xl font-bold md:text-4xl">
          Services
        </h2>

        <div className="overflow-hidden rounded-2xl bg-white shadow-md">
          <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-6 p-6 text-base font-semibold sm:text-lg md:text-2xl">
            <p className="border-b pb-2">Men&apos;s Cut:</p>
            <p className="border-b pb-2 text-right">$35</p>

            <p className="border-b pb-2">High School Teen:</p>
            <p className="border-b pb-2 text-right">$30</p>

            <p className="border-b pb-2">Kids 12 &amp; under / Senior Citizen:</p>
            <p className="border-b pb-2 text-right">$25</p>

            <p className="border-b pb-2">Haircut + Beard / Goatee Trim:</p>
            <p className="border-b pb-2 text-right">$45</p>

            <p className="border-b pb-2">Haircut + Hot Towel Shave:</p>
            <p className="border-b pb-2 text-right">$55</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;