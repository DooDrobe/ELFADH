import GradeSelectorTabs from "@/components/GradeSelectorTabs";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";

export default async function ProgramsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            {dict.programs.title}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {dict.programs.description}
          </p>
        </div>

        <GradeSelectorTabs dict={dict.programs} />
      </div>
    </div>
  );
}
