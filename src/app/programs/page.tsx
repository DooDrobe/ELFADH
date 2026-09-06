import GradeSelectorTabs from "@/components/GradeSelectorTabs";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            Our Curriculums
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored programs for every age group. Whether you need help with school PR, national exams, or university preparation, we have the right class for you.
          </p>
        </div>

        <GradeSelectorTabs />
      </div>
    </div>
  );
}
