'use client'

import React, { useState } from 'react'
import { CheckCircle2, Send, Sparkles } from 'lucide-react'
import Button from '../ui/Button'

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setStatus('error')
      setErrorMsg('Please enter an email address.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setErrorMsg('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1200)
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden text-center">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-1.5 bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-none text-brand-red font-bold text-[10px] tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" /> Newsletter
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-brand-black">
            GET THE WEEKLY MC VIBE
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            Subscribe to get direct updates on upcoming concert tickets, movies at the Cineplex, exclusive dining deals, and KISS FM atrium events!
          </p>
        </div>

        {status === 'success' ? (
          <div className="flex flex-col items-center gap-3 p-6 bg-emerald-50 border border-emerald-100 rounded-none w-full animate-fade-up">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 animate-bounce" />
            <div className="text-center">
              <p className="font-display font-bold text-lg text-emerald-700">You are on the list!</p>
              <p className="text-emerald-600/75 text-sm mt-1">Thank you! Check your inbox soon for your first MC update.</p>
            </div>
            <button
              onClick={() => setStatus('idle')}
              className="text-xs font-bold text-emerald-600 underline mt-2 hover:text-emerald-500 transition-colors"
            >
              Subscribe with another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-3 mt-2">
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-brand-soft border border-brand-border p-1.5 rounded-none w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error') setStatus('idle')
                }}
                className="bg-transparent w-full px-5 py-3 outline-none border-0 text-sm font-semibold text-brand-black placeholder:text-brand-muted"
                disabled={status === 'loading'}
                aria-label="Email Address"
              />
              <Button
                variant="danger"
                size="md"
                className="w-full sm:w-auto shrink-0 font-bold rounded-none"
                disabled={status === 'loading'}
                icon={status === 'loading' ? null : <Send className="w-4 h-4" />}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            {status === 'error' && (
              <p className="text-brand-red text-xs font-semibold text-left pl-5 animate-shake">
                {errorMsg}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
export default NewsletterSignup
