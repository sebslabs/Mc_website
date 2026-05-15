'use client'

import React, { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import EnquiryForm from '@/components/contact/EnquiryForm'
import LeasingForm from '@/components/contact/LeasingForm'
import { MapPin, Phone, Mail, Clock, HelpCircle, Building2 } from 'lucide-react'

export default function ContactPage() {
  const [activeFormTab, setActiveFormTab] = useState<'enquiry' | 'leasing'>('enquiry')

  const contacts = [
    {
      icon: <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />,
      title: 'Our Location',
      lines: ['Majestic City Management Office', 'Station Road, Colombo 04, Sri Lanka']
    },
    {
      icon: <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />,
      title: 'Phone Lines',
      lines: ['+94 11 250 1444', '+94 11 258 1222']
    },
    {
      icon: <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />,
      title: 'Email Address',
      lines: ['info@majesticcity.lk', 'leasing@majesticcity.lk']
    }
  ]

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 animate-fade-up">
      {/* Page Header */}
      <div>
        <SectionHeading
          label="Get In Touch"
          title="CONTACT & LEASING"
          subtitle="Have a question or looking to launch your brand at Colombo’s favorite retail destination? Contact our management office or submit a leasing proposal instantly."
          align="center"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Col: Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-left">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-brand-gold font-bold uppercase tracking-widest">Management Office</span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-navy tracking-tight leading-none">
              WE&apos;D LOVE TO HEAR FROM YOU
            </h3>
            <p className="text-brand-muted text-sm font-light leading-relaxed mt-2">
              For general retail assistance, lost and found, or support regarding our services, drop by our management desks or contact us directly via phone or email. Our leasing relations team reviews proposals daily.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-2">
            {contacts.map((c, idx) => (
              <div key={idx} className="flex gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="w-10 h-10 bg-brand-surface rounded-xl flex items-center justify-center text-brand-gold select-none shrink-0">
                  {c.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display font-bold text-sm text-brand-navy">{c.title}</h4>
                  {c.lines.map((line, lIdx) => (
                    <span key={lIdx} className="text-brand-muted text-xs leading-relaxed font-light mt-0.5">{line}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Forms Container */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Form Tabs */}
          <div className="flex border-b border-gray-100 pb-1.5 gap-6">
            <button
              onClick={() => setActiveFormTab('enquiry')}
              className={`pb-3 text-sm font-bold uppercase tracking-wider relative whitespace-nowrap transition-colors cursor-pointer focus:outline-none ${
                activeFormTab === 'enquiry' ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-navy'
              }`}
            >
              <span className="flex items-center gap-2"><HelpCircle className="w-4 h-4" /> General Enquiry</span>
              {activeFormTab === 'enquiry' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
              )}
            </button>
            
            <button
              onClick={() => setActiveFormTab('leasing')}
              className={`pb-3 text-sm font-bold uppercase tracking-wider relative whitespace-nowrap transition-colors cursor-pointer focus:outline-none ${
                activeFormTab === 'leasing' ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-navy'
              }`}
            >
              <span className="flex items-center gap-2"><Building2 className="w-4 h-4" /> Leasing Proposals</span>
              {activeFormTab === 'leasing' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
              )}
            </button>
          </div>

          {/* Render Active Form */}
          <div className="min-h-[400px]">
            {activeFormTab === 'enquiry' ? <EnquiryForm /> : <LeasingForm />}
          </div>
        </div>
      </div>
    </div>
  )
}
