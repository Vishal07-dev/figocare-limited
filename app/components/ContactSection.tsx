"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { useToast } from "./Toast";

interface ContactSectionProps {
  variant?: "white" | "primary";
}

export default function ContactSection({ variant = "white" }: ContactSectionProps) {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isPrimary = variant === "primary";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch("https://formsubmit.co/ajax/info@figocare.co.uk", {
        method: "POST",
        body: formData,
      });
      showToast("Thank you! Your message has been sent successfully.");
      form.reset();
    } catch {
      showToast("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`py-24 ${isPrimary ? "bg-primary" : "bg-white"}`} aria-labelledby="contact-section-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="contact-section-heading" className={`text-3xl sm:text-4xl font-bold mb-6 ${isPrimary ? "text-white" : "text-gray-900"}`}>
            Get in Touch
          </h2>
          <p className={`text-lg ${isPrimary ? "text-white/90" : "text-gray-600"}`}>
            Have a question or ready to partner with us? Whether you need workforce support or
            want to explore career opportunities, our team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${isPrimary ? "bg-white" : "bg-gray-50"}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Drop Us a Line
            </h3>
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Enquiry from FIGO CARE Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${isPrimary ? "bg-gray-50" : "bg-white"}`}
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${isPrimary ? "bg-gray-50" : "bg-white"}`}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${isPrimary ? "bg-gray-50" : "bg-white"}`}
                  placeholder="07123 456789"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none ${isPrimary ? "bg-gray-50" : "bg-white"}`}
                  placeholder="Describe your staffing requirements or enquiry..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold mb-6 ${isPrimary ? "text-white" : "text-gray-900"}`}>
              Reach Us Directly
            </h3>
            
            <div className={`p-6 rounded-2xl shadow-sm ${isPrimary ? "bg-white" : "bg-gray-50"}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Our Office</h4>
                  <p className="text-gray-600">
                    128 City Road<br />
                    London, United Kingdom<br />
                    EC1V 2NX
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-2xl shadow-sm ${isPrimary ? "bg-white" : "bg-gray-50"}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <a href="tel:+442081294836" className="text-gray-600 hover:text-primary transition-colors">020 8129 4836</a>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-2xl shadow-sm ${isPrimary ? "bg-white" : "bg-gray-50"}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Enquiries</h4>
                  <a href="mailto:info@figocare.co.uk" className="text-primary hover:text-primary-dark transition-colors">
                    info@figocare.co.uk
                  </a>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-2xl shadow-sm ${isPrimary ? "bg-white" : "bg-gray-50"}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600 font-semibold">Open 24 Hours, 7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
