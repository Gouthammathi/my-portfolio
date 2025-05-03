import React, { useState } from 'react';
// Removed ScrollAnimation import
import { motion } from 'framer-motion'; // Import motion
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    console.log('Form Data Submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const success = Math.random() > 0.2;
    if (success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-4xl mx-auto px-4 sm:px-8 lg:px-0 pb-16"
    >
      <div className="flex flex-col items-start gap-4 mb-10">
        {/* Updated tag background, border, text colors */}
        <span className="inline-block px-5 py-1.5 rounded-full bg-dark-gray/50 border border-steel-blue/30 text-sm font-semibold text-accent-blue shadow-md">
          Contact
        </span>
        {/* Updated heading text color */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-off-white leading-tight">
          Get In Touch
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left Column: Contact Info & Map */} 
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-8"
        >
          {/* Updated heading text color */}
          <h3 className="text-xl md:text-2xl font-semibold text-off-white mb-2 text-left">Contact Information</h3>
          <div className="space-y-5">
            {/* Address - Updated icon and text colors */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-accent-blue w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-base font-semibold text-off-white mb-1">Address</h4>
                <p className="text-sm text-light-gray">Hyderabad, India</p>
              </div>
            </div>
            {/* Phone - Updated icon, text, link colors */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-accent-blue w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-base font-semibold text-off-white mb-1">Phone</h4>
                <a
                  href="tel:+919603672059"
                  className="text-sm text-light-gray hover:text-accent-blue transition border-b border-transparent hover:border-accent-blue/50 focus:border-accent-blue outline-none"
                  aria-label="Call Goutham Mathi"
                >
                  +91-9603672059
                </a>
              </div>
            </div>
            {/* Email - Updated icon, text, link colors */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-accent-blue w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-base font-semibold text-off-white mb-1">Email</h4>
                <a
                  href="mailto:goouthamm@gmail.com"
                  className="text-sm text-light-gray hover:text-accent-blue transition border-b border-transparent hover:border-accent-blue/50 focus:border-accent-blue outline-none break-all"
                  aria-label="Email Goutham Mathi"
                >
                  goouthamm@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder - Updated background, border, text */}
          {/* Replace Map Placeholder with Quote */}
          <div className="mt-6">
            <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-r from-dark-gray/80 to-charcoal/60 rounded-lg border border-steel-blue/30 overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10 p-8 text-center max-w-lg">
                <p className="text-lg md:text-xl font-medium text-off-white leading-relaxed">
                  <span className="text-accent-blue">"</span>Innovation is where imagination meets expertise. Connect with me to transform ideas into impactful solutions.<span className="text-accent-blue">"</span>
                </p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-accent-orange via-steel-blue to-accent-blue opacity-50"></div>
                <p className="mt-3 text-sm text-light-gray/80 italic">Goutham Mathi</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */} 
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          // Updated background, border
          className="bg-charcoal/80 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-dark-gray"
        >
          {/* Updated heading text color */}
          <h3 className="text-xl md:text-2xl font-semibold text-off-white mb-6 text-left">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              {/* Updated label text color */}
              <label htmlFor="name" className="block text-sm font-medium text-light-gray mb-1.5">Your Name</label>
              {/* Updated input background, border, text, placeholder, focus ring colors */}
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg bg-dark-gray border border-steel-blue/40 text-off-white placeholder-light-gray/60 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition duration-200"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light-gray mb-1.5">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg bg-dark-gray border border-steel-blue/40 text-off-white placeholder-light-gray/60 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition duration-200"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-light-gray mb-1.5">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg bg-dark-gray border border-steel-blue/40 text-off-white placeholder-light-gray/60 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition duration-200 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="flex flex-col items-start gap-3">
              {/* Updated button gradient, text, focus ring, disabled state colors */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-accent-blue to-accent-orange text-navy text-sm font-semibold shadow-lg transition-all duration-300 ease-out hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue focus:ring-offset-charcoal disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
              {/* Updated status message colors */}
              {submitStatus === 'success' && (
                <p className="text-sm text-green-400">Message sent successfully! Thank you.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-400">Failed to send message. Please try again later.</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
