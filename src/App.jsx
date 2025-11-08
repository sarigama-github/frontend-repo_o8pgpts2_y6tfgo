import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import ApplicationSteps from './components/ApplicationSteps';
import ApplicationForm from './components/ApplicationForm';

function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Evergreen Academy. All rights reserved.</p>
        <div className="text-sm text-gray-600">Admissions Desk: admissions@evergreen.edu • +1 (555) 123-4567</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <ApplicationSteps />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
}
