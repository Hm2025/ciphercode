import {
  Globe,
  Smartphone,
  Apple,
  Palette,
  Megaphone,
  Pen,
  Film,
  Share2,
  Search,
  BarChart3,
  Lock,
  Sparkles,
} from 'lucide-react'

export interface Service {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  helps: string
}

export const services: Service[] = [
  {
    id: 'web-development',
    icon: <Globe className="w-6 h-6" />,
    title: 'Website Development',
    description: 'CMS sites, full web apps, e-commerce, dashboards, company websites, campaign sites and personal portfolios.',
    helps: 'A fast, secure, professional home online that clients fully control.',
  },
  {
    id: 'mobile-app',
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile App Development',
    description: 'Mobile-responsive apps from UI/UX design, frontend and backend to native builds and production release.',
    helps: 'Puts your service in customers\' pockets.',
  },
  {
    id: 'ios-app',
    icon: <Apple className="w-6 h-6" />,
    title: 'iOS App Development',
    description: 'Native iPhone and iPad apps in Swift, built to Apple guidelines through App Store launch.',
    helps: 'Reaches iPhone users with a smooth, secure app.',
  },
  {
    id: 'branding',
    icon: <Palette className="w-6 h-6" />,
    title: 'Branding',
    description: 'Logo, colours, typography, tone of voice and brand guidelines.',
    helps: 'Builds recognition and trust.',
  },
  {
    id: 'campaigns',
    icon: <Megaphone className="w-6 h-6" />,
    title: 'Campaigns',
    description: 'Strategy, messaging, creative and rollout for government agencies, companies and political candidates.',
    helps: 'Turns a clear message into public support.',
  },
  {
    id: 'graphic-design',
    icon: <Pen className="w-6 h-6" />,
    title: 'Graphic Design',
    description: 'Logos, brochures, company profiles, flyers, posters, banners, social graphics, presentation decks.',
    helps: 'Makes your message clear and professional.',
  },
  {
    id: 'video-editing',
    icon: <Film className="w-6 h-6" />,
    title: 'Video Editing',
    description: 'Promo videos, campaign films, event highlights, explainers, social clips, motion graphics.',
    helps: 'Holds attention and helps audiences remember you.',
  },
  {
    id: 'digital-marketing',
    icon: <Share2 className="w-6 h-6" />,
    title: 'Digital Marketing',
    description: 'Social media management, content planning, email marketing, audience growth, monthly reports.',
    helps: 'Keeps you visible to the right people.',
  },
  {
    id: 'seo',
    icon: <Search className="w-6 h-6" />,
    title: 'SEO',
    description: 'Keyword research, on-page and technical optimisation, content strategy, local search.',
    helps: 'Steady, free traffic from people already searching.',
  },
  {
    id: 'ads',
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Ads',
    description: 'Paid campaigns on Google, Facebook, Instagram, TikTok and YouTube with targeting, creative and reporting.',
    helps: 'Reaches the right audience quickly with measurable results.',
  },
  {
    id: 'security',
    icon: <Lock className="w-6 h-6" />,
    title: 'Data Protection & Cyber Security',
    description: 'Security audits, vulnerability testing, secure setup of websites and accounts, data protection policies, staff awareness training.',
    helps: 'Protects customer and staff data, and helps politicians and public figures guard against hacked accounts, leaks and impersonation.',
  },
  {
    id: 'ai-automation',
    icon: <Sparkles className="w-6 h-6" />,
    title: 'AI Automation',
    description: 'Automating enquiries, reports, scheduling and follow-ups, plus AI chatbots and election situation rooms that bring results, field reports and media monitoring into one live dashboard.',
    helps: 'Saves staff hours, answers people around the clock, and supports fast campaign decisions.',
  },
]
