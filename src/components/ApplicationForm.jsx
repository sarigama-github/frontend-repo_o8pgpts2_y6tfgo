import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    studentName: '',
    gradeApplying: 'Grade 9',
    email: '',
    phone: '',
    guardianName: '',
    message: '',
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // No backend yet; simulate submission
    await new Promise((res) => setTimeout(res, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <section id="apply" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
          <h3 className="mt-4 text-2xl font-semibold text-gray-900">Application Started</h3>
          <p className="mt-2 text-gray-600">
            We sent a confirmation to your email. Use the link to continue and complete your full application.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Start Your Application</h2>
          <p className="mt-3 text-gray-600">Fill in the basic details to create your application profile.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-6 max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Student Name</label>
              <input
                type="text"
                name="studentName"
                value={form.studentName}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Applying For</label>
              <select
                name="gradeApplying"
                value={form.gradeApplying}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
              >
                {['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Guardian Name</label>
            <input
              type="text"
              name="guardianName"
              value={form.guardianName}
              onChange={onChange}
              required
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Notes (optional)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={4}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-500 disabled:opacity-60"
            >
              {loading ? 'Submitting...' : 'Create Application'}
            </button>
            <p className="text-sm text-gray-600">You can complete the full form later from the email link.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
