import Image from "next/image";

export default function ActivityGallery({ dict }: { dict: any }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {dict.description}
          </p>
        </div>

        {/* Thematic SVGs representing activities before final photos are swapped in */}
        <div className="flex overflow-x-auto whitespace-nowrap gap-6 pb-8 snap-x snap-mandatory no-scrollbar">
          {/* Big Try Out Photos */}
          {[
            { src: "/gallery/Big Try Out/DSC_0623.JPG", alt: "Big Try Out - Students taking exam", label: "Big Try Out" },
            { src: "/gallery/Big Try Out/DSC_0637.JPG", alt: "Big Try Out - Exam in progress", label: "Big Try Out" },
            { src: "/gallery/Big Try Out/DSC_0640.JPG", alt: "Big Try Out - Classroom view", label: "Big Try Out" }
          ].map((photo, idx) => (
            <div key={`tryout-${idx}`} className="relative flex-none w-[80vw] sm:w-[400px] h-72 snap-center rounded-2xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-madani-blue to-elfadh-red opacity-80" />
              <Image 
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-bold text-xl drop-shadow-md">{photo.label}</p>
              </div>
            </div>
          ))}

          {/* Museum Rispa Photos */}
          {[
            { src: "/gallery/Museum Rispa/IMG-20200308-WA0000.jpeg", alt: "Museum Rispa Field Trip", label: "Museum Rispa" },
            { src: "/gallery/Museum Rispa/IMG-20200308-WA0019.jpg", alt: "Students at Museum", label: "Museum Rispa" },
            { src: "/gallery/Museum Rispa/IMG-20200308-WA0031.jpg", alt: "Museum Tour", label: "Museum Rispa" },
            { src: "/gallery/Museum Rispa/IMG20200308092053.jpg", alt: "Group Photo at Museum", label: "Museum Rispa" }
          ].map((photo, idx) => (
            <div key={`museum-${idx}`} className="relative flex-none w-[80vw] sm:w-[400px] h-72 snap-center rounded-2xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-madani-orange to-red-500 opacity-80" />
              <Image 
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-bold text-xl drop-shadow-md">{photo.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
