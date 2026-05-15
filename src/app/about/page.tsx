import React from 'react'
import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import ImagePlaceholder, { SOCIAL_GRADIENT } from '@/components/ui/ImagePlaceholder'
import { Landmark, Compass, Award, Heart, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Majestic City',
  description: 'Colombo’s oldest and most beloved retail mall landmark is back! Discover the story of Majestic City Colombo, our history, and our major renovation.'
}

export default function AboutPage() {
  const milestones = [
    {
      icon: <Landmark className="w-5 h-5 text-brand-gold" />,
      title: 'Beloved Since 1990',
      desc: 'Opened as one of Sri Lanka’s very first shopping complexes, introducing generation after generation to modern shopping and cineplex entertainment.'
    },
    {
      icon: <Award className="w-5 h-5 text-brand-gold" />,
      title: 'Major 2026 Renovation',
      desc: 'Reimagined with energetic, warm architectural lines, brand-new centralized AC vents, luxury restrooms, and high-speed elevator arrays.'
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-gold" />,
      title: 'Colombo\'s Everyday Hub',
      desc: 'Catering to families, students, and professionals alike, providing a premium shopping experience without premium price tags.'
    }
  ]

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
      {/* Page Header */}
      <div>
        <SectionHeading
          label="The Majestic Story"
          title="ABOUT MAJESTIC CITY"
          subtitle="Discover the rich heritage of Colombo's most iconic everyday landmark, merging decades of memories with bold, modern renovations."
          align="center"
        />
      </div>

      {/* Hero Split Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Col: Image Placeholder */}
        <div className="lg:col-span-6 relative h-64 sm:h-80 md:h-[400px] overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
          <ImagePlaceholder gradient={SOCIAL_GRADIENT} aspectRatio="h-full" label="Since 1990" />
        </div>

        {/* Right Col: Story Content */}
        <div className="lg:col-span-6 text-left flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-brand-gold font-bold uppercase tracking-widest">Unmistakably Majestic</span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-navy tracking-tight leading-none">
              A LANDMARK REIMAGINED
            </h3>
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-light mt-2">
              For more than thirty years, Majestic City (affectionately known as &quot;MC&quot;) has stood as the ultimate meeting point in Colombo. It was here that many Sri Lankans caught their very first Hollywood film, tasted their first burger, or spent their weekend allowances on fashion and CDs.
            </p>
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-light mt-1">
              Today, MC is completely back. Following our extensive multi-million dollar renovation, we have modernized our structural layouts, optimized security arrays, and invited premium mid-market retail anchors. We have merged our legacy as a cultural hub with Colombo’s modern youth vibe, making us the premier everyday destination.
            </p>
          </div>
        </div>
      </div>

      {/* Core Milestones Grid */}
      <div className="flex flex-col gap-8 border-t border-gray-100 pt-12">
        <div className="text-center">
          <h4 className="font-display font-black text-lg text-brand-navy uppercase tracking-wider mb-6">
            OUR MILESTONES & CORE VALUES
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col gap-4 text-left shadow-sm">
              <div className="w-10 h-10 bg-brand-surface rounded-xl flex items-center justify-center text-brand-gold select-none">
                {m.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="font-display font-bold text-base text-brand-navy">{m.title}</h5>
                <p className="text-brand-muted text-xs leading-relaxed font-light">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
