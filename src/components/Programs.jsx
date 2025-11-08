import { BookOpen, FlaskConical, Palette, Globe } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: 'Primary School',
    desc: 'Foundational learning focused on curiosity, literacy, and numeracy for Grades 1-5.',
  },
  {
    icon: FlaskConical,
    title: 'Middle School',
    desc: 'STEM-forward curriculum with labs, projects, and clubs for Grades 6-8.',
  },
  {
    icon: Palette,
    title: 'High School',
    desc: 'College-prep tracks, AP offerings, and comprehensive career guidance.',
  },
  {
    icon: Globe,
    title: 'International Program',
    desc: 'Global exchange, Model UN, and language immersion opportunities.',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Programs</h2>
          <p className="mt-3 text-gray-600">A holistic curriculum designed to nurture every learner’s potential.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
