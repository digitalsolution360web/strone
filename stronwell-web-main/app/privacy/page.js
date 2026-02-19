"use client"
import { motion } from 'framer-motion'
import BgLayout from '@/components/layouts/bgLayout'
import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/contexts/TranslationContext'

function PrivacyPage() {
  const { t } = useTranslation()
  
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "We collect information you provide directly to us, such as when you create an account, request a quote, apply for dealership, or contact us.",
        "Personal Information includes: name, email address, phone number, company name, address, and other contact details.",
        "Business Information includes: current brands you represent, business type, territory, and operational details.",
        "Technical Information includes: IP address, browser type, device information, and website usage data."
      ]
    },
    {
      title: "2. How We Collect Information",
      content: [
        "Direct Collection: Information you provide through forms, applications, and communications.",
        "Automatic Collection: Data collected through cookies, analytics tools, and website interactions.",
        "Third-Party Sources: Information from business partners, dealers, and public sources for verification.",
        "Communication Records: Records of your interactions with our customer service team."
      ]
    },
    {
      title: "3. How We Use Your Information",
      content: [
        "Processing and fulfilling your requests for quotes, products, and services.",
        "Evaluating and processing dealer and partnership applications.",
        "Providing customer support and technical assistance.",
        "Sending you important updates about products, services, and business relationships.",
        "Improving our website, products, and services based on usage patterns.",
        "Complying with legal obligations and protecting our business interests."
      ]
    },
    {
      title: "4. Information Sharing and Disclosure",
      content: [
        "Authorized Dealers: We may share your information with our authorized dealers in your region.",
        "Service Providers: Third-party vendors who assist with business operations, analytics, and communications.",
        "Business Partners: Partners who help us provide products and services to you.",
        "Legal Requirements: When required by law, court order, or to protect our rights and safety.",
        "Business Transfers: In connection with mergers, acquisitions, or asset sales."
      ]
    },
    {
      title: "5. Data Security",
      content: [
        "We implement appropriate technical and organizational security measures to protect your information.",
        "Data transmission is protected using SSL encryption and secure protocols.",
        "Access to personal information is limited to authorized personnel only.",
        "Regular security audits and updates are conducted to maintain data protection standards.",
        "However, no method of transmission over the internet is 100% secure."
      ]
    },
    {
      title: "6. Cookies and Tracking Technologies",
      content: [
        "Essential Cookies: Required for basic website functionality and security.",
        "Analytics Cookies: Help us understand how visitors use our website to improve user experience.",
        "Marketing Cookies: Used to deliver relevant advertisements and track campaign effectiveness.",
        "You can control cookie preferences through your browser settings.",
        "Some features may not function properly if certain cookies are disabled."
      ]
    },
    {
      title: "7. Your Rights and Choices",
      content: [
        "Access: Request a copy of the personal information we hold about you.",
        "Correction: Request correction of inaccurate or incomplete information.",
        "Deletion: Request deletion of your personal information, subject to legal and business requirements.",
        "Portability: Request transfer of your data to another service provider.",
        "Opt-out: Unsubscribe from marketing communications at any time."
      ]
    },
    {
      title: "8. Data Retention",
      content: [
        "We retain personal information for as long as necessary to fulfill the purposes outlined in this policy.",
        "Business relationship data is retained for the duration of the relationship plus applicable legal periods.",
        "Marketing data is retained until you opt-out or as required by law.",
        "Some information may be retained longer for legal compliance, dispute resolution, or business records."
      ]
    },
    {
      title: "9. International Data Transfers",
      content: [
        "Your information may be transferred to and processed in countries other than your residence.",
        "We ensure appropriate safeguards are in place for international transfers.",
        "Data protection standards are maintained regardless of processing location.",
        "You consent to such transfers by using our services."
      ]
    },
    {
      title: "10. Third-Party Links",
      content: [
        "Our website may contain links to third-party websites and services.",
        "We are not responsible for the privacy practices of these external sites.",
        "We encourage you to review the privacy policies of any third-party sites you visit.",
        "This privacy policy applies only to information collected by Stronwell Machines."
      ]
    },
    {
      title: "11. Children's Privacy",
      content: [
        "Our services are not intended for children under the age of 16.",
        "We do not knowingly collect personal information from children.",
        "If we become aware of such collection, we will take steps to delete the information.",
        "Parents or guardians should contact us if they believe we have collected information from a child."
      ]
    },
    {
      title: "12. Changes to This Privacy Policy",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices.",
        "We will notify you of any material changes by posting the new policy on our website.",
        "The 'Last Updated' date at the top of this page indicates when the policy was last revised.",
        "Your continued use of our services after changes constitutes acceptance of the updated policy."
      ]
    },
    {
      title: "13. Contact Information",
      content: [
        "If you have questions about this privacy policy or our data practices, please contact us:",
        "Email: crm@stronwell.com",
        "Address: Plot No. 756, 2nd Floor, Udyog Vihar Phase - 5, Gurugram, Haryana, India",
        "We will respond to your inquiries within a reasonable timeframe."
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
                {t('common.home')}
              </Link>
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[#ff4f01] font-medium">{t('privacy.title')}</span>
            </nav>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {t('privacy.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('privacy.subtitle')}
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">{t('privacy.lastUpdated')}</h3>
            <p className="text-gray-300">July 30, 2025</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="pb-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12"
          >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                {t('privacy.commitmentHeading')}
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t('privacy.commitmentPara1')}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {t('privacy.commitmentPara2')}
                </p>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
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
                  {t('privacy.questionsHeading')}
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  {t('privacy.questionsText')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#ff4f01]/25 transition-all duration-300"
                    >
                      {t('privacy.contactPrivacyTeam')}
                    </motion.button>
                  </Link>
                  
                  <Link href="/terms">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-[#ff4f01] hover:bg-[#ff4f01]/10 transition-all duration-300"
                    >
                      {t('privacy.termsConditions')}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-lg font-semibold text-white">{t('privacy.privacyMattersHeading')}</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('privacy.privacyMattersText')}
            </p>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  )
}

export default PrivacyPage