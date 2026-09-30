'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  X,
  Mail,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { services } from '@/lib/services'
import { projects, clientLogos } from '@/lib/portfolio'
import { courses } from '@/lib/training'

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`flex items-center gap-2 font-bold tracking-[-0.04em] ${light ? 'text-[#F2F4F0]' : 'text-[#12262A]'}`} aria-label="CIPHER-CODEX home">
      <span className="relative flex h-7 w-8 items-center justify-center">
        <span className="absolute left-0 h-6 w-6 rounded-full border-[3px] border-current border-r-transparent" />
        <span className="absolute right-0 h-6 w-4 rounded-[2px] border-[3px] border-[#D9820B] border-l-0" />
      </span>
      <span className="text-[15px] font-extrabold leading-none">CIPHER<span className="text-[#D9820B]">-</span>CODEX</span>
    </a>
  )
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="mb-8 max-w-2xl sm:mb-12">
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.18em] ${light ? 'text-[#F2A83B]' : 'text-[#D9820B]'}`}>{eyebrow}</p>
      <h2 className={`font-heading text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl md:text-5xl ${light ? 'text-[#F2F4F0]' : 'text-[#12262A]'}`}>{title}</h2>
      {description && <p className={`mt-5 text-base leading-7 ${light ? 'text-[#B7C5C3]' : 'text-[#566668]'}`}>{description}</p>}
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const [galleryImages, setGalleryImages] = useState<{ src: string; category: string; title: string }[]>([])
  const [galleryError, setGalleryError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const galleryCategories = Array.from(new Set(galleryImages.map((image) => image.category)))
  const filteredImages = activeCategory === 'all' ? galleryImages : galleryImages.filter((image) => image.category === activeCategory)

  useEffect(() => {
    fetch('/api/gallery')
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load gallery')
        return response.json()
      })
      .then((images: { src: string; category: string; title: string }[]) => setGalleryImages(images))
      .catch(() => setGalleryError(true))
  }, [])

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error('Submission failed')
      }

      form.reset()
      setSubmitted(true)
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main id="top">
      <header className="sticky top-0 z-50 border-b border-[#12262A]/10 bg-[#F2F4F0]/95 backdrop-blur dark:border-white/10 dark:bg-[#12262A]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {siteConfig.nav.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-[#566668] transition hover:text-[#D9820B] dark:text-[#B7C5C3]">{item.label}</a>)}
          </nav>
          <a href="#contact" className="hidden rounded-md bg-[#D9820B] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#b86e08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9820B] sm:inline-flex">Request a quote</a>
          <button className="flex h-11 w-11 items-center justify-center rounded-md md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-[#12262A]/10 px-5 py-4 md:hidden" aria-label="Mobile navigation">{siteConfig.nav.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block py-3 text-sm font-semibold">{item.label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 block rounded-md bg-[#D9820B] px-5 py-3 text-center text-sm font-bold text-white">Request a quote</a></nav>}
      </header>

      <section className="border-b border-[#12262A]/10 px-5 py-16 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-14 lg:grid-cols-[1.2fr_.8fr] lg:gap-24">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#D9820B]">Digital technology & creative</p>
            <h1 className="font-heading max-w-3xl text-4xl font-extrabold leading-[.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl">Digital work for <span className="text-[#D9820B]">governments,</span> companies and public figures.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#566668] dark:text-[#B7C5C3]">{siteConfig.hero.subtext}</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-[#D9820B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#b86e08]">Request a quote <ArrowUpRight className="h-4 w-4" /></a><a href="#services" className="inline-flex items-center gap-2 rounded-md border border-[#12262A]/20 px-5 py-3 text-sm font-bold transition hover:border-[#D9820B] hover:text-[#D9820B] dark:border-white/20">See services <ArrowRight className="h-4 w-4" /></a></div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-[#0E2A2D] p-6 text-[#F2F4F0] shadow-2xl sm:p-10"><div className="absolute right-0 top-0 h-32 w-32 rounded-full border border-[#D9820B]/30" /><div className="absolute -right-10 top-10 h-32 w-32 rounded-full border border-[#D9820B]/20" /><p className="relative mb-8 text-xs font-bold uppercase tracking-[0.18em] text-[#F2A83B]">Who we work with</p><ul className="relative grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1 sm:space-y-5 sm:gap-y-0">{siteConfig.hero.clients.map((client, i) => <li key={client} className="flex items-center gap-2 border-b border-white/10 pb-3 text-sm sm:gap-4 sm:pb-4 sm:text-lg"><span className="font-mono text-xs text-[#D9820B] sm:text-sm">0{i + 1}</span>{client}</li>)}</ul></div>
        </div>
      </section>

      <section id="about" className="px-5 py-16 sm:py-28 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><SectionHeading eyebrow="About us" title="One capable team for the work that matters." /><div><p className="text-lg leading-8 text-[#566668] dark:text-[#B7C5C3]">{siteConfig.about.description}</p><div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2"><div className="rounded-md border border-[#12262A]/15 p-6 dark:border-white/15"><p className="font-heading text-4xl font-extrabold tracking-[-.05em]">{siteConfig.about.founded}</p><p className="mt-2 text-sm text-[#566668] dark:text-[#B7C5C3]">Founded in {siteConfig.about.foundedMonth}</p></div><div className="rounded-md border border-[#12262A]/15 p-6 dark:border-white/15"><p className="font-heading text-2xl font-extrabold tracking-[-.05em]">Aruna, Emeka and Greg</p><p className="mt-2 text-sm text-[#566668] dark:text-[#B7C5C3]">Co-founders</p></div></div></div></div></section>

      <section id="services" className="bg-[#0e2a2d] px-5 py-16 sm:py-28 dark:bg-[#0e2a2d]"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="What we do" title="Useful work, built to last." description="From your first idea to the finished product and beyond, we bring the right mix of technical and creative thinking." light /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <article key={service.id} className="group flex min-h-0 flex-col rounded-md border border-[#12262A]/10 bg-[#F2F4F0] p-5 transition hover:-translate-y-1 hover:border-[#D9820B] hover:shadow-lg sm:min-h-67.5 sm:p-6 dark:border-white/10 dark:bg-[#12262A]"><div className="mb-5 flex items-center justify-between sm:mb-7"><span className="text-[#D9820B]">{service.icon}</span><span className="font-mono text-xs text-[#83908F]">{String(index + 1).padStart(2, '0')}</span></div><h3 className="font-heading text-xl font-bold tracking-[-.03em]">{service.title}</h3><p className="mt-3 text-sm leading-6 text-[#566668] dark:text-[#B7C5C3]">{service.description}</p><p className="mt-auto border-t border-[#12262A]/10 pt-4 text-sm leading-5 text-[#12262A] dark:border-white/10 dark:text-[#D7E0DE]"><span className="font-bold text-[#D9820B]">How it helps: </span>{service.helps}</p></article>)}</div></div></section>

      <section id="websites-apps" className="border-y border-[#12262A]/10 bg-[#E5EAE6]/60 px-5 py-16 sm:py-24 lg:px-8 dark:border-white/10 dark:bg-[#12262A]/50"><div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Websites & mobile apps" title="Digital products built for real people." description="Explore a selection of websites and mobile apps, with direct links to the live work." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.filter((project) => project.category === 'websites' || project.category === 'mobile-apps').map((project) => <article key={project.id} className="group overflow-hidden rounded-md border border-[#12262A]/10 bg-white dark:border-white/10 dark:bg-[#12262A]">
            <a href={project.url ?? '#'} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title.trim()} (opens in a new tab)`} className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9820B]">
              <div className="relative aspect-3/2 overflow-hidden bg-[#DCE4E0] dark:bg-[#18373A]"><Image src={project.image} alt={project.title.trim()} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-5"><div className="flex items-center justify-between gap-3"><p className="text-xs font-bold uppercase tracking-wider text-[#D9820B]">{project.category.replace('-', ' ')}</p><span className="text-xs text-[#83908F]">{project.client}</span></div><h3 className="mt-3 font-heading text-xl font-bold tracking-[-.03em]">{project.title.trim()}</h3><p className="mt-2 text-sm leading-6 text-[#566668] dark:text-[#B7C5C3]">{project.result}</p></div>
            </a>
            {(project.playStoreUrl || project.appStoreUrl) && <div className="flex flex-wrap gap-2 px-5 pb-5">
              {project.playStoreUrl && <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-md border border-[#12262A]/15 px-3 py-2 text-xs font-bold text-[#12262A] transition hover:border-[#D9820B] hover:text-[#D9820B] dark:border-white/15 dark:text-[#D7E0DE]">Google Play</a>}
              {project.appStoreUrl && <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-md border border-[#12262A]/15 px-3 py-2 text-xs font-bold text-[#12262A] transition hover:border-[#D9820B] hover:text-[#D9820B] dark:border-white/15 dark:text-[#D7E0DE]">App Store</a>}
            </div>}
          </article>)}
        </div>
      </div></section>

      <section id="portfolio" className="px-5 py-20 sm:py-28 lg:px-8"><div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Selected work" title="A closer look at what we make." description="Browse our creative, campaign and brand work, grouped by project folder." />
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filter gallery by category">
          <button key="all" onClick={() => setActiveCategory('all')} aria-pressed={activeCategory === 'all'} className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${activeCategory === 'all' ? 'border-[#D9820B] bg-[#D9820B] text-white' : 'border-[#12262A]/15 hover:border-[#D9820B] dark:border-white/15'}`}>All work <span className="ml-1 opacity-75">{galleryImages.length}</span></button>
          {galleryCategories.map((category) => {
            const count = galleryImages.filter((image) => image.category === category).length
            return <button key={category} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? 'border-[#D9820B] bg-[#D9820B] text-white' : 'border-[#12262A]/15 hover:border-[#D9820B] dark:border-white/15'}`}>{category} <span className="ml-1 opacity-75">{count}</span></button>
          })}
        </div>
        {galleryError ? <p role="alert" className="py-12 text-center text-sm text-[#566668] dark:text-[#B7C5C3]">The work gallery could not be loaded. Please refresh the page to try again.</p> : galleryImages.length === 0 ? <p role="status" className="py-12 text-center text-sm text-[#566668] dark:text-[#B7C5C3]">Loading selected work...</p> : <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((image, index) => <article key={image.src} className="group overflow-hidden rounded-md border border-[#12262A]/10 bg-white dark:border-white/10 dark:bg-[#12262A]">
            <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${image.title} from ${image.category} in a new tab`} className="relative block aspect-square overflow-hidden bg-[#E5EAE6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9820B] sm:aspect-4/3 dark:bg-[#18373A]">
              <Image src={image.src} alt={`${image.category}: ${image.title}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw" className="object-contain p-2 transition duration-500 group-hover:scale-[1.03]" />
            </a>
            <div className="flex flex-col items-start gap-1 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-4 sm:py-3">
              <h3 className="max-w-full truncate text-sm font-semibold capitalize">{image.title}</h3>
              <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-[#D9820B] sm:text-[11px]">{image.category}</span>
            </div>
            <span className="sr-only">Gallery image {index + 1} of {filteredImages.length}</span>
          </article>)}
        </div>}
        <div className="mt-20 border-t border-[#12262A]/10 pt-8 dark:border-white/10"><p className="mb-7 text-xs font-bold uppercase tracking-[0.18em] text-[#83908F]">Trusted by teams doing important work</p><div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{clientLogos.map((logo) => <div key={logo.id} className="flex h-16 items-center justify-center rounded-md border border-[#12262A]/10 bg-[#E5EAE6] px-4 grayscale dark:border-white/10 dark:bg-[#18373A]"><Image src={logo.image} alt={logo.name} width={120} height={48} className="h-8 w-auto object-contain opacity-60" /></div>)}</div></div>
      </div></section>

      <section id="training" className="bg-[#0E2A2D] px-5 py-20 text-[#F2F4F0] sm:py-28 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Training & coaching" title="Learn from people who do the work." description="Live online coaching for individuals, teams and organisations, taught by the people who do this work every day." light /><div className="grid gap-x-12 gap-y-0 md:grid-cols-2">{courses.map((course, index) => <article key={course.id} className="flex gap-5 border-t border-white/15 py-5"><span className="pt-1 font-mono text-xs text-[#F2A83B]">{String(index + 1).padStart(2, '0')}</span><div><h3 className="font-heading text-lg font-bold">{course.title}</h3><p className="mt-1 text-sm text-[#B7C5C3]">{course.description}</p><p className="mt-2 text-sm text-[#F2A83B]">{course.helps}</p></div></article>)}</div></div></section>

      <section id="contact" className="bg-[#0E2A2D] px-5 pb-20 text-[#F2F4F0] lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 border-t border-white/15 pt-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#F2A83B]">Start a conversation</p><h2 className="font-heading text-4xl font-extrabold leading-tight tracking-[-.05em] sm:text-5xl">Need a website, brand or campaign?</h2><p className="mt-6 max-w-md leading-7 text-[#B7C5C3]">Tell us what you are building. We will come back with useful questions, a clear approach and a realistic quote.</p><div className="mt-9 flex flex-wrap gap-3"><a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-3 text-sm font-bold transition hover:border-[#F2A83B] hover:text-[#F2A83B]"><Mail className="h-4 w-4" /> Email us</a><a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with CIPHER-CODEX on WhatsApp (opens in a new tab)" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-3 text-sm font-bold transition hover:border-[#F2A83B] hover:text-[#F2A83B]"><MessageCircle className="h-4 w-4" /> WhatsApp</a></div>
<div className="mt-4 flex flex-col gap-2 text-sm text-[#B7C5C3]">{siteConfig.contact.phone.split('/').map((phone) => { const normalizedPhone = phone.trim(); return <a key={normalizedPhone} href={`tel:${normalizedPhone.replace(/\s/g, '')}`} className="w-fit transition hover:text-[#F2A83B]">{normalizedPhone}</a> })}</div>
</div><form onSubmit={handleContactSubmit} className="space-y-5 rounded-md border border-white/15 bg-white/[.03] p-6 sm:p-8">
  <input type="hidden" name="access_key" value="d0edf76d-51ac-45c2-ac66-d1772953a339" />
  <input type="hidden" name="subject" value="New enquiry from your website" />
  <input type="checkbox" name="botcheck" className="hidden" />
  {submitted ? <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D9820B]"><Check className="h-7 w-7" /></div>
    <h3 className="mt-5 font-heading text-2xl font-bold">Message received.</h3>
    <p className="mt-2 text-[#B7C5C3]">Thanks! We&apos;ll be in touch shortly.</p>
    <button type="button" onClick={() => setSubmitted(false)} className="mt-6 text-sm font-bold text-[#F2A83B] underline">Send another message</button>
  </div> : <><div className="grid gap-5 sm:grid-cols-2">
    <label className="text-sm font-semibold">Name<input required name="name" type="text" className="mt-2 w-full rounded-md border border-white/20 bg-transparent px-4 py-3 font-normal outline-none transition placeholder:text-[#83908F] focus:border-[#F2A83B]" placeholder="Your name" /></label>
    <label className="text-sm font-semibold">Email<input required name="email" type="email" className="mt-2 w-full rounded-md border border-white/20 bg-transparent px-4 py-3 font-normal outline-none transition placeholder:text-[#83908F] focus:border-[#F2A83B]" placeholder="you@company.com" /></label>
  </div>
  <div className="grid gap-5 sm:grid-cols-2">
    <label className="text-sm font-semibold">Phone<input name="phone" type="tel" className="mt-2 w-full rounded-md border border-white/20 bg-transparent px-4 py-3 font-normal outline-none transition placeholder:text-[#83908F] focus:border-[#F2A83B]" placeholder="+234..." /></label>
    <label className="text-sm font-semibold">Service<select name="service" className="mt-2 w-full rounded-md border border-white/20 bg-[#0E2A2D] px-4 py-3 font-normal outline-none focus:border-[#F2A83B]"><option>Choose a service</option>{services.map((service) => <option key={service.id}>{service.title}</option>)}</select></label>
  </div>
  <label className="block text-sm font-semibold">Message<textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-md border border-white/20 bg-transparent px-4 py-3 font-normal outline-none transition placeholder:text-[#83908F] focus:border-[#F2A83B]" placeholder="Tell us a little about your project..." /></label>
  {submitError && <p role="alert" className="text-sm text-red-300">{submitError}</p>}
  <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#D9820B] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#b86e08] disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? 'Sending...' : 'Send enquiry'} {!isSubmitting && <ArrowUpRight className="h-4 w-4" />}</button>
</>}</form></div></section>

      <footer className="bg-[#0E2A2D] px-5 pb-7 text-[#F2F4F0] lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"><Logo light /><p className="text-sm text-[#83908F]">© 2026 CIPHER-CODEX</p></div><p className="mx-auto mt-12 max-w-7xl text-xs leading-5 text-[#607776]">{siteConfig.tutoring}</p></footer>
    </main>
  )
}
