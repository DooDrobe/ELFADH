import Link from "next/link";
import HomeworkClinic from "@/components/HomeworkClinic";
import ActivityGallery from "@/components/ActivityGallery";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">English Confidence for</span>{" "}
                  <span className="block text-elfadh-red">School & Beyond</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  From PR Help to Exam Ready. Join EL-FADH Bimbel and watch your English skills transform with our expert guidance and interactive classes.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/programs"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-elfadh-red hover:bg-red-700 md:py-4 md:text-lg transition-colors"
                    >
                      View Programs
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://wa.me/6281378037428"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-elfadh-red bg-red-100 hover:bg-red-200 md:py-4 md:text-lg transition-colors"
                    >
                      Chat via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-100 flex items-center justify-center">
          {/* Hero placeholder until FOTO is available */}
          <div className="text-gray-400 font-medium">
            [Hero Image Placeholder]
          </div>
        </div>
      </section>

      {/* Homework Clinic Section */}
      <HomeworkClinic />

      {/* Activity Gallery */}
      <ActivityGallery />
    </>
  );
}
