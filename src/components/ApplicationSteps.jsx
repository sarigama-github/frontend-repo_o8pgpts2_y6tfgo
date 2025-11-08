import { UserPlus, ClipboardList, FileUp, Clock } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Account',
    desc: 'Sign up with your email to begin your application and save progress.'
  },
  {
    icon: ClipboardList,
    title: 'Fill Application',
    desc: 'Provide student details, academic history, and guardian information.'
  },
  {
    icon: FileUp,
    title: 'Upload Documents',
    desc: 'Submit transcripts, ID, recommendation letters, and other required files.'
  },
  {
    icon: Clock,
    title: 'Track Status',
    desc: 'Receive updates and notifications as your application is reviewed.'
  }
];

export default function ApplicationSteps() {
  return (
    <section id="steps" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How to Apply</h2>
          <p className="mt-3 text-gray-600">Follow these simple steps to complete your application seamlessly.</p>
        </div>
        <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-indigo-600 text-white grid place-items-center text-sm font-bold">
                {idx + 1}
              </div>
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
