import { MapPin, Phone, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 bg-white rounded-md p-1">
                <Image 
                  src="/logo/elfadh-logo.jpg" 
                  alt="EL-FADH Logo" 
                  fill
                  className="object-contain rounded-sm"
                />
              </div>
              <h3 className="text-xl font-bold text-elfadh-red">EL-FADH Bimbel</h3>
            </div>
            <p className="text-gray-300 mb-6">
              {dict.tagline}
            </p>
            <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
               <div className="relative w-10 h-10 shrink-0 bg-white rounded-full p-0.5 overflow-hidden">
                <Image 
                  src="/logo/yayasan-logo.png" 
                  alt="Yayasan Pendidikan Elfadh Madani Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-400 italic">
                {dict.under}
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-madani-blue">{dict.contact_us}</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-madani-orange" />
                <a href="https://wa.me/6281378037428" className="hover:text-white">
                  0813-7803-7428
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Instagram className="w-5 h-5 mr-2 text-pink-500" />
                <a href="https://www.instagram.com/elfadh_ec/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  @elfadh_ec
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-madani-blue">{dict.location}</h3>
            <div className="flex items-start text-gray-300">
              <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-elfadh-red" />
              <div>
                <p>Medan Denai, North Sumatra</p>
                <a 
                  href="https://maps.app.goo.gl/4QfsNJ7nwRx6PPp58" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-madani-blue hover:text-blue-400 text-sm mt-1 inline-block"
                >
                  {dict.view_map}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Yayasan Pendidikan Elfadh Madani. {dict.rights}
        </div>
      </div>
    </footer>
  );
}
