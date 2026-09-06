import { PenTool, CheckCircle, Trophy } from "lucide-react";

export default function HomeworkClinic() {
  const steps = [
    {
      title: "Bring Your PR",
      description: "Students bring their English homework from school to our clinic sessions.",
      icon: <PenTool className="w-8 h-8 text-white" />,
      color: "bg-elfadh-red"
    },
    {
      title: "Learn the Concepts",
      description: "Our tutors explain the underlying grammar and vocabulary clearly.",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      color: "bg-madani-blue"
    },
    {
      title: "Ace the Subject",
      description: "Students submit perfect homework and gain confidence in class.",
      icon: <Trophy className="w-8 h-8 text-white" />,
      color: "bg-madani-orange"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Struggling with School English?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our Homework Clinic is here to help you get better grades and understand English perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 ${step.color}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
