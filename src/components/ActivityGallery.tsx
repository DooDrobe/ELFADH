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
          {/* Item 1 */}
          <div className="relative flex-none w-full sm:w-[400px] h-72 snap-center rounded-2xl overflow-hidden shadow-lg group">
            {/* Fallback gradient if image not found */}
            <div className="absolute inset-0 bg-gradient-to-br from-madani-blue to-elfadh-red opacity-80" />
            <Image 
              src="/gallery/try-out.jpg" 
              alt="Big Try Out" 
              fill
              className="object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-white font-bold text-xl drop-shadow-md">Big Try Out</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex-none w-full sm:w-[400px] h-72 snap-center rounded-2xl overflow-hidden shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-br from-madani-orange to-red-500 opacity-80" />
            <Image 
              src="/gallery/museum.jpg" 
              alt="Museum Rispa" 
              fill
              className="object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-white font-bold text-xl drop-shadow-md">Museum Rispa Field Trip</p>
            </div>
          </div>
          
          {/* Add more items following the same structure when you have more photos in /public/gallery/ */}
          {[3, 4, 5].map((item) => (
             <div key={item} className="relative flex-none w-full sm:w-[400px] h-72 snap-center rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
               <span className="text-gray-400 font-medium">{dict.activity} {item}</span>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
