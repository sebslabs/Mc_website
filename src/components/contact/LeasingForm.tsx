'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, AlertTriangle, Send, CheckCircle2, Building2 } from 'lucide-react'
import Button from '../ui/Button'

export const LeasingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    storeType: 'Fashion',
    area: '250 - 500 sq ft',
    floor: 'Level 1',
    message: ''
  })

  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const validate = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.company.trim()) {
      errors.company = 'Company name is required.'
    }

    if (!formData.contactName.trim()) {
      errors.contactName = 'Contact name is required.'
    }

    if (!formData.email) {
      errors.email = 'Email address is required.'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address.'
      }
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.'
    }

    if (!formData.message.trim()) {
      errors.message = 'Proposal message is required.'
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
    
    setTouched({
      company: true,
      contactName: true,
      email: true,
      phone: true,
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
      company: '',
      contactName: '',
      email: '',
      phone: '',
      storeType: 'Fashion',
      area: '250 - 500 sq ft',
      floor: 'Level 1',
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
          <Building2 className="w-8 h-8" />
        </motion.div>
        <div className="flex flex-col gap-2 max-w-sm mx-auto">
          <h3 className="font-display font-black text-xl text-brand-navy uppercase tracking-wider">
            Proposal Submitted!
          </h3>
          <p className="text-brand-muted text-sm leading-relaxed font-light">
            Thank you! Your leasing inquiry has been submitted to the Majestic City Management office. Our commercial relations executive will contact you within 2 business days.
          </p>
        </div>
        <button
          onClick={resetForm}
          className="text-xs font-bold text-brand-navy hover:text-brand-gold underline uppercase tracking-widest mt-2"
        >
          Submit another proposal
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-sm flex flex-col gap-5 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Company */}
        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="company" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Company / Brand Name</label>
          <div className="relative">
            <input
              id="company"
              type="text"
              placeholder="Moose Clothing Co."
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              onBlur={() => handleBlur('company')}
              disabled={status === 'loading'}
              className={`w-full bg-brand-surface border px-5 py-3 rounded-xl text-sm font-semibold text-brand-navy outline-none transition-all pr-12 ${getFieldClass('company')}`}
            />
            {touched.company && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {errors.company ? <AlertTriangle className="w-4 h-4 text-brand-red" /> : <Check className="w-4 h-4 text-emerald-500" />}
              </div>
            )}
          </div>
          {touched.company && errors.company && <span className="text-[10px] font-bold text-brand-red pl-1">{errors.company}</span>}
        </div>

        {/* Contact Name */}
        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="contactName" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Contact Person</label>
          <div className="relative">
            <input
              id="contactName"
              type="text"
              placeholder="Amal Perera"
              value={formData.contactName}
              onChange={(e) => handleChange('contactName', e.target.value)}
              onBlur={() => handleBlur('contactName')}
              disabled={status === 'loading'}
              className={`w-full bg-brand-surface border px-5 py-3 rounded-xl text-sm font-semibold text-brand-navy outline-none transition-all pr-12 ${getFieldClass('contactName')}`}
            />
            {touched.contactName && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {errors.contactName ? <AlertTriangle className="w-4 h-4 text-brand-red" /> : <Check className="w-4 h-4 text-emerald-500" />}
              </div>
            )}
          </div>
          {touched.contactName && errors.contactName && <span className="text-[10px] font-bold text-brand-red pl-1">{errors.contactName}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="leasing-email" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Email Address</label>
          <div className="relative">
            <input
              id="leasing-email"
              type="email"
              placeholder="amal@moose.lk"
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

        {/* Phone */}
        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="leasing-phone" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Phone Number</label>
          <div className="relative">
            <input
              id="leasing-phone"
              type="text"
              placeholder="+94 77 123 4567"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              disabled={status === 'loading'}
              className={`w-full bg-brand-surface border px-5 py-3 rounded-xl text-sm font-semibold text-brand-navy outline-none transition-all pr-12 ${getFieldClass('phone')}`}
            />
            {touched.phone && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {errors.phone ? <AlertTriangle className="w-4 h-4 text-brand-red" /> : <Check className="w-4 h-4 text-emerald-500" />}
              </div>
            )}
          </div>
          {touched.phone && errors.phone && <span className="text-[10px] font-bold text-brand-red pl-1">{errors.phone}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {/* Store Type */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="storeType" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Retail Category</label>
          <select
            id="storeType"
            value={formData.storeType}
            onChange={(e) => handleChange('storeType', e.target.value)}
            disabled={status === 'loading'}
            className="w-full bg-brand-surface border border-gray-200 px-5 py-3 rounded-xl text-sm font-semibold text-brand-navy outline-none focus:border-brand-gold/60 focus:shadow-md transition-all cursor-pointer"
          >
            <option value="Fashion">Fashion & Apparel</option>
            <option value="Food">Food Court / Dining</option>
            <option value="Electronics">Electronics / Tech</option>
            <option value="Services">Financial Services</option>
            <option value="Beauty">Beauty & Cosmetics</option>
          </select>
        </div>

        {/* Required Area */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="area" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Required Area</label>
          <select
            id="area"
            value={formData.area}
            onChange={(e) => handleChange('area', e.target.value)}
            disabled={status === 'loading'}
            className="w-full bg-brand-surface border border-gray-200 px-5 py-3 rounded-xl text-sm font-semibold text-brand-navy outline-none focus:border-brand-gold/60 focus:shadow-md transition-all cursor-pointer"
          >
            <option value="Under 250 sq ft">Under 250 sq ft</option>
            <option value="250 - 500 sq ft">250 - 500 sq ft</option>
            <option value="500 - 1000 sq ft">500 - 1,000 sq ft</option>
            <option value="1000 - 3000 sq ft">1,000 - 3,000 sq ft</option>
            <option value="Above 3000 sq ft">Above 3,000 sq ft</option>
          </select>
        </div>

        {/* Preferred Floor */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="floor" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Preferred Floor</label>
          <select
            id="floor"
            value={formData.floor}
            onChange={(e) => handleChange('floor', e.target.value)}
            disabled={status === 'loading'}
            className="w-full bg-brand-surface border border-gray-200 px-5 py-3 rounded-xl text-sm font-semibold text-brand-navy outline-none focus:border-brand-gold/60 focus:shadow-md transition-all cursor-pointer"
          >
            <option value="Basement">Basement Level</option>
            <option value="Level 1">Level 1 (Ground)</option>
            <option value="Level 2">Level 2</option>
            <option value="Level 3">Level 3</option>
            <option value="Level 4">Level 4</option>
            <option value="Level 5">Level 5</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5 relative">
        <label htmlFor="leasing-message" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Leasing Proposal Description</label>
        <div className="relative">
          <textarea
            id="leasing-message"
            rows={4}
            placeholder="Describe your store concept, brand presence, and structural requirements (minimum 20 characters)..."
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
        {status === 'loading' ? 'Submitting Proposal...' : 'Submit Proposal'}
      </Button>
    </form>
  )
}
export default LeasingForm
