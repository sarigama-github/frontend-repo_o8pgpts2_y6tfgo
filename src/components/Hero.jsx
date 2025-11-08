import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6g1Ew2gQ0pV5ERg1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Seamless Online Admissions
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Apply to Evergreen Academy in minutes. Create an account, fill your details, upload documents, and track your application status all in one place.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-500"
          >
            Start Application
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 font-semibold shadow ring-1 ring-gray-200 hover:bg-gray-50"
          >
            Explore Programs
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </section>
  );
}
