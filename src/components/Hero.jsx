import { useEffect, useState, Suspense, lazy } from 'react';
import { ArrowRight } from 'lucide-react';

// Lazy-load Spline so the page doesn't crash if the package or scene fails
const LazySpline = lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
  const [splineOk, setSplineOk] = useState(true);

  // If lazy import fails, show a graceful fallback
  useEffect(() => {
    // Preload attempt to catch errors early
    import('@splinetool/react-spline').catch(() => setSplineOk(false));
  }, []);

  return (
    <section id="home" className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        {splineOk ? (
          <Suspense fallback={<div className="h-full w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50" />}>
            <LazySpline
              scene="https://prod.spline.design/6g1Ew2gQ0pV5ERg1/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </Suspense>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        )}
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

      {/* Make sure overlay doesn't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </section>
  );
}
