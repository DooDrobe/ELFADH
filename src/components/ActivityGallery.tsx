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

        {/* Thematic SVGs representing activities before final photos are swapped in */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-50 aspect-[4/3] rounded-lg flex flex-col items-center justify-center overflow-hidden border border-gray-100 group transition-transform hover:scale-105">
              <svg className="w-24 h-24 mb-4 text-madani-blue opacity-50 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span className="text-gray-500 font-medium group-hover:text-elfadh-red transition-colors">Activity {item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
