"use client"
import { motion } from 'framer-motion'
import BgLayout from '@/components/layouts/bgLayout'
import React from 'react'
import Link from 'next/link'

function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using the Stronwell Machines website and services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms and conditions may be updated from time to time without prior notice. Your continued use of the website constitutes acceptance of any changes."
      ]
    },
    {
      title: "2. Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials on Stronwell Machines' website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose or for any public display (commercial or non-commercial)",
        "• Attempt to decompile or reverse engineer any software contained on the website",
        "• Remove any copyright or other proprietary notations from the materials"
      ]
    },
    {
      title: "3. Products and Services",
      content: [
        "All products and services offered by Stronwell Machines are subject to availability.",
        "We reserve the right to discontinue any product or service at any time without notice.",
        "Product specifications, prices, and availability are subject to change without notice.",
        "All product descriptions and images are provided for illustration purposes and may vary from actual products."
      ]
    },
    {
      title: "4. Dealer and Partnership Terms",
      content: [
        "Dealer applications are subject to approval and verification of credentials.",
        "Partnership agreements are governed by separate terms and conditions provided upon approval.",
        "All dealer relationships are subject to performance standards and compliance requirements.",
        "Territory and exclusivity rights, if any, will be defined in separate dealer agreements."
      ]
    },
    {
      title: "5. Ordering and Payment",
      content: [
        "All orders are subject to acceptance and product availability.",
        "Prices are quoted in the applicable currency and are subject to change without notice.",
        "Payment terms will be specified in quotations and invoices.",
        "We reserve the right to refuse or cancel any order at our discretion."
      ]
    },
    {
      title: "6. Shipping and Delivery",
      content: [
        "Delivery times are estimates and may vary based on product availability and destination.",
        "Risk of loss and title pass to the buyer upon delivery to the carrier.",
        "Shipping costs and import duties, if applicable, are the responsibility of the buyer.",
        "We are not responsible for delays caused by customs, weather, or other factors beyond our control."
      ]
    },
    {
      title: "7. Warranty and Returns",
      content: [
        "Product warranties are as specified by the manufacturer and may vary by product.",
        "Warranty claims must be submitted in accordance with manufacturer procedures.",
        "Returns are subject to our return policy and may require prior authorization.",
        "All returns must be in original condition and packaging."
      ]
    },
    {
      title: "8. Privacy and Data Protection",
      content: [
        "We collect and process personal information in accordance with our Privacy Policy.",
        "By using our services, you consent to the collection and use of your information as described.",
        "We implement appropriate security measures to protect your personal information.",
        "Your information may be shared with authorized dealers and service providers as necessary."
      ]
    },
    {
      title: "9. Intellectual Property",
      content: [
        "All content, trademarks, and intellectual property on this website are owned by Stronwell Machines or its licensors.",
        "You may not use our trademarks, logos, or proprietary information without written permission.",
        "All product names and brands mentioned are trademarks of their respective owners.",
        "Unauthorized use of our intellectual property may result in legal action."
      ]
    },
    {
      title: "10. Limitation of Liability",
      content: [
        "In no event shall Stronwell Machines be liable for any indirect, incidental, or consequential damages.",
        "Our total liability shall not exceed the amount paid for the specific product or service.",
        "We are not liable for damages resulting from misuse, negligence, or normal wear and tear.",
        "Some jurisdictions may not allow certain limitations, so some restrictions may not apply to you."
      ]
    },
    {
      title: "11. Indemnification",
      content: [
        "You agree to indemnify and hold harmless Stronwell Machines from any claims arising from your use of our products or services.",
        "This includes but is not limited to claims related to personal injury, property damage, or violation of laws.",
        "You are responsible for ensuring compliance with all applicable laws and regulations in your jurisdiction."
      ]
    },
    {
      title: "12. Governing Law",
      content: [
        "These terms and conditions are governed by the laws of the jurisdiction where Stronwell Machines is incorporated.",
        "Any disputes arising from these terms shall be resolved through binding arbitration or in courts of competent jurisdiction.",
        "If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in effect."
      ]
    },
    {
      title: "13. Contact Information",
      content: [
        "For questions regarding these terms and conditions, please contact us at:",
        "Email: crm@stronwell.com",
        "Address: Plot No. 756, 2nd Floor, Udyog Vihar Phase - 5, Gurugram, Haryana, India"
      ]
    }
  ]

  return (
    <BgLayout>
      {/* Header Section */}
      <section className="py-10 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-8">
              <Link href="/" className="hover:text-[#ff4f01] transition-colors duration-200">
                Home
              </Link>
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[#ff4f01] font-medium">Terms & Conditions</span>
            </nav>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Terms & <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Conditions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">Last Updated</h3>
            <p className="text-gray-300">July 30, 2025</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              Introduction
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to Stronwell Machines. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website, 
                products, and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Stronwell Machines is committed to providing high-quality machinery and equipment while maintaining 
                transparent and fair business practices. These terms help ensure a positive experience for all our customers and partners.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6">{section.title}</h3>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative p-12 rounded-3xl overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Questions About Our Terms?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our legal team is available to clarify any questions you may have about these terms and conditions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#ff4f01]/25 transition-all duration-300"
                    >
                      Contact Legal Team
                    </motion.button>
                  </Link>
                  
                  <Link href="/privacy">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-[#ff4f01] hover:bg-[#ff4f01]/10 transition-all duration-300"
                    >
                      Privacy Policy
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#ff4f01]/10 backdrop-blur-sm border border-[#ff4f01]/20 rounded-xl p-6 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#ff4f01] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <h4 className="text-lg font-semibold text-white">Important Notice</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              These terms and conditions constitute the entire agreement between you and Stronwell Machines. 
              By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  )
}

export default TermsPage