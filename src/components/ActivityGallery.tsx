export default function ActivityGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Life at EL-FADH
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            From our Big Try Out to our field trips at Museum Rispa.
          </p>
        </div>

        {/* Placeholder for the gallery since we don't have the FOTO folder yet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-200 aspect-[4/3] rounded-lg flex items-center justify-center overflow-hidden relative group">
              <span className="text-gray-400 font-medium">Authentic Photo {item}</span>
              {/* This will be replaced with next/image once FOTO folder is available */}
              {/* <Image src={`/FOTO/photo-${item}.jpg`} fill className="object-cover" alt="EL-FADH Activity" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
