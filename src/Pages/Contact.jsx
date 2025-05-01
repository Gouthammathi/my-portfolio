import React, { useState } from 'react';
import { ScrollAnimation } from '../Components/ScrollAnimation';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa'; // Import icons
// Removed Button3 import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // --- Placeholder for actual form submission logic --- 
    // Replace this with your EmailJS, Formspree, or backend API call
    console.log('Form Data Submitted:', formData);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    // Simulate success/error
    const success = Math.random() > 0.2; // Simulate 80% success rate
    // --- End Placeholder --- 

    if (success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } else {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);

    // Optional: Clear status message after a few seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 lg:px-0 pb-16">
      <ScrollAnimation delay={0.1}>
        <div className="flex flex-col items-start gap-4 mb-10">
          {/* Replaced Button3 with a simple tag */}
          <span className="inline-block px-5 py-1.5 rounded-full bg-gradient-to-r from-[#e2a1f8]/20 to-[#a18cd1]/20 border border-white/20 text-sm font-semibold text-white shadow-md">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-white leading-tight">
            Get In Touch
          </h2>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left Column: Contact Info & Map */}
        <ScrollAnimation delay={0.2}>
          <div className="flex flex-col gap-8">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 text-left">Contact Information</h3>
            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#e6cfff] w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">Address</h4>
                  <p className="text-sm text-white/70">Hyderabad, India</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-[#e6cfff] w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">Phone</h4>
                  <a
                    href="tel:+919603672059"
                    className="text-sm text-white/70 hover:text-white transition border-b border-transparent hover:border-white/50 focus:border-white outline-none"
                    aria-label="Call Goutham Mathi"
                  >
                    +91-9603672059
                  </a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[#e6cfff] w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">Email</h4>
                  <a
                    href="mailto:goouthamm@gmail.com"
                    className="text-sm text-white/70 hover:text-white transition border-b border-transparent hover:border-white/50 focus:border-white outline-none break-all"
                    aria-label="Email Goutham Mathi"
                  >
                    goouthamm@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 text-left">Find Me Here</h3>
              <div className="aspect-video w-full bg-gradient-to-br from-[#232336] to-[#18181b] rounded-xl shadow-lg border border-white/10 flex items-center justify-center text-white/50">
                {/* Replace with actual map embed code */}
                <span>Map Placeholder</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Right Column: Contact Form */}
        <ScrollAnimation delay={0.3}>
          <div className="bg-gradient-to-br from-[#232336]/80 via-[#2e2d2d]/50 to-[#18181b]/80 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-[#a18cd1]/20">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-left">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-[#121212]/50 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#a18cd1] focus:border-transparent transition duration-200"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-[#121212]/50 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#a18cd1] focus:border-transparent transition duration-200"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1.5">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-[#121212]/50 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#a18cd1] focus:border-transparent transition duration-200 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <div className="flex flex-col items-start gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-[#fbc2eb] to-[#a18cd1] text-[#232336] text-sm font-semibold shadow-lg transition-all duration-300 ease-out hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a18cd1] focus:ring-offset-[#121212] disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-[#232336]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-sm text-green-400">Message sent successfully! Thank you.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-400">Failed to send message. Please try again later.</p>
                )}
              </div>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Contact;