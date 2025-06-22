import { useState, useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("success");
      form.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    })
    .catch(() => {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    });
  };

  return (
    <section id="contacts" className="min-h-screen py-24 px-4 bg-gradient-to-br from-[#0f0f0f] via-[#151515] to-[#0f0f0f] border-t border-neutral-900">
      <motion.div 
        className="max-w-xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-xl shadow-indigo-500/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-white mb-10 tracking-wider">
          Contact <span className="text-indigo-400">Me</span>
        </h2>

        {/* Status Message */}
        {status === "success" && (
          <div className="flex items-center gap-2 bg-green-700/20 text-green-300 px-4 py-3 rounded-lg mb-6 shadow shadow-green-500/20">
            <CheckCircle className="w-5 h-5" />
            <span>Message sent successfully! Thank you 🎉</span>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 bg-red-700/20 text-red-400 px-4 py-3 rounded-lg mb-6 shadow shadow-red-500/20">
            <XCircle className="w-5 h-5" />
            <span>Something went wrong. Please try again later.</span>
          </div>
        )}

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-white text-lg font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full mt-2 rounded-md bg-neutral-900 text-white px-4 py-3 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-white text-lg font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full mt-2 rounded-md bg-neutral-900 text-white px-4 py-3 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-white text-lg font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full mt-2 rounded-md bg-neutral-900 text-white px-4 py-3 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full flex items-center justify-center gap-2 bg-indigo-600 text-white text-lg py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-xl
              ${status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:bg-indigo-700"}
            `}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
