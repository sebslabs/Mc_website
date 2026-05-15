'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, AlertTriangle, Send, CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button'

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General',
    message: ''
  })

  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const validate = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Full name is required.'
    }

    if (!formData.email) {
      errors.email = 'Email address is required.'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address.'
      }
    }

    if (!formData.message.trim()) {
      errors.message = 'Message content is required.'
    } else if (formData.message.trim().length < 20) {
      errors.message = 'Message must be at least 20 characters long.'
    }

    return errors
  }

  const errors = validate()

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Mark all fields as touched to trigger validation displays
    setTouched({
      name: true,
      email: true,
      message: true
    })

    if (Object.keys(errors).length > 0) {
      return
    }

    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'General',
      message: ''
    })
    setTouched({})
    setStatus('idle')
  }

  const getFieldClass = (field: string) => {
    if (!touched[field]) return 'border-gray-200 focus:border-brand-gold/60 focus:shadow-md'
    if (errors[field]) return 'border-brand-red focus:border-brand-red focus:shadow-sm focus:shadow-brand-red/10'
    return 'border-emerald-500 focus:border-emerald-500 focus:shadow-sm focus:shadow-emerald-500/10'
  }

  if (status === 'success') {
    return (
      <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm text-center flex flex-col items-center gap-6 py-16 animate-fade-up">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="w-16 h-16 bg-emerald-50 border border-emerald-100 text-emerald-500 rounded-full flex items-center justify-center shadow-md shadow-emerald-500/10"
        >
          <CheckCircle2 className="w-9 h-9" />
        </motion.div>
        <div className="flex flex-col gap-2 max-w-sm mx-auto">
          <h3 className="font-display font-black text-xl text-brand-navy uppercase tracking-wider">
            Thank you!
          </h3>
          <p className="text-brand-muted text-sm leading-relaxed font-light">
            Your inquiry has been successfully submitted. We will review your message and get in touch within 2 business days.
          </p>
        </div>
        <button
          onClick={resetForm}
          className="text-xs font-bold text-brand-navy hover:text-brand-gold underline uppercase tracking-widest mt-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-sm flex flex-col gap-5 text-left">
      {/* Name */}
      <div className="flex flex-col gap-1.5 relative">
        <label htmlFor="name" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Full Name</label>
        <div className="relative">
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            disabled={status === 'loading'}
            className={`w-full bg-brand-surface border px-5 py-3 rounded-xl text-sm font-semibold text-brand-navy outline-none transition-all pr-12 ${getFieldClass('name')}`}
          />
          {touched.name && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {errors.name ? <AlertTriangle className="w-4 h-4 text-brand-red" /> : <Check className="w-4 h-4 text-emerald-500" />}
            </div>
          )}
        </div>
        {touched.name && errors.name && <span className="text-[10px] font-bold text-brand-red pl-1">{errors.name}</span>}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5 relative">
        <label htmlFor="email" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Email Address</label>
        <div className="relative">
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            disabled={status === 'loading'}
            className={`w-full bg-brand-surface border px-5 py-3 rounded-xl text-sm font-semibold text-brand-navy outline-none transition-all pr-12 ${getFieldClass('email')}`}
          />
          {touched.email && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {errors.email ? <AlertTriangle className="w-4 h-4 text-brand-red" /> : <Check className="w-4 h-4 text-emerald-500" />}
            </div>
          )}
        </div>
        {touched.email && errors.email && <span className="text-[10px] font-bold text-brand-red pl-1">{errors.email}</span>}
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Subject</label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          disabled={status === 'loading'}
          className="w-full bg-brand-surface border border-gray-200 px-5 py-3 rounded-xl text-sm font-semibold text-brand-navy outline-none focus:border-brand-gold/60 focus:shadow-md transition-all appearance-none cursor-pointer"
        >
          <option value="General">General Inquiry</option>
          <option value="Events">Events & Happenings</option>
          <option value="Leasing">Leasing Opportunities</option>
          <option value="Media">Media & PR</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5 relative">
        <label htmlFor="message" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Message</label>
        <div className="relative">
          <textarea
            id="message"
            rows={4}
            placeholder="Describe your inquiry in detail (minimum 20 characters)..."
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            disabled={status === 'loading'}
            className={`w-full bg-brand-surface border px-5 py-3 rounded-xl text-sm font-semibold text-brand-navy outline-none transition-all pr-12 resize-none ${getFieldClass('message')}`}
          />
          {touched.message && (
            <div className="absolute right-4 top-5">
              {errors.message ? <AlertTriangle className="w-4 h-4 text-brand-red" /> : <Check className="w-4 h-4 text-emerald-500" />}
            </div>
          )}
        </div>
        {touched.message && errors.message && <span className="text-[10px] font-bold text-brand-red pl-1">{errors.message}</span>}
      </div>

      <Button
        variant="primary"
        size="md"
        className="w-full font-bold mt-2"
        disabled={status === 'loading'}
        icon={status === 'loading' ? null : <Send className="w-4 h-4" />}
      >
        {status === 'loading' ? 'Sending Inquiry...' : 'Send Inquiry'}
      </Button>
    </form>
  )
}
export default EnquiryForm
