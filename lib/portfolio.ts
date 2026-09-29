export interface Project {
  id: string
  title: string
  category: 'websites' | 'mobile-apps' | 'branding' | 'campaigns' | 'video' | 'dashboards'
  client: string
  result: string
  image: string
  url?: string
  playStoreUrl?: string
  appStoreUrl?: string
}

export const projects: Project[] = [
  {
    id: 'petro-energy',
    title: 'Oscion Group - Indigenous Consulting and Engineering for Oil & Gas',
    category: 'websites',
    client: 'PetroEnergy Solutions',
    result: 'Increased lead generation by 40% in the first quarter.',
    image: '/Oscion.png',
    url: 'https://osciongroup.com/',
  },
  {
    id: 'gov-dashboard',
    title: 'twitwi Book your next Schdule ',
    category: 'dashboards',
    client: 'Ministry of Commerce',
    result: '2,000+ daily active users managing $50M+ in data.',
    image: '/twitwi.png',
    url: 'https://mytwitwi.com/',
  },
  {
    id: 'fintech-app',
    title: 'Crowwe Africa No1 Native social App',
    category: 'mobile-apps',
    client: 'FinFlow Payments',
    result: '150K+ downloads and 4.8-star rating on app stores.',
    image: '/crowwe3.png',
    url: 'https://crowwe.net/',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.crowwe.app',
    appStoreUrl: 'https://apps.apple.com/us/search?term=Crowwe',
  },
  {
    id: 'campaign-2024',
    title: 'Edonet Connect by Gov Obaseki Campaign project',
    category: 'campaigns',
    client: 'Edo State Govt',
    result: 'Edo State Govt for Obaseki Campaign',
    image: '/ed_3.webp',
  },
  {
    id: 'logistics-brand',
    title: 'Bradama Company profile',
    category: 'branding',
    client: 'Bradama',
    result: 'Brand recognition increased by 65% within 6 months.',
    image: '/bradama.png',
    url: 'https://bradama.com/wp-content/uploads/2026/07/BRADAMA-PROFILE.pdf',
  },
  {
    id: 'campaign-film',
    title: 'Social Justice Campaign Film',
    category: 'video',
    client: 'Civil Rights Initiative',
    result: '5M+ views and 100K+ shares across platforms.',
    image: 'https://picsum.photos/600/400?random=6',
  },
  {
    id: 'tech-startup',
    title: 'CissGroup: # Developing modern spaces in global communities',
    category: 'websites',
    client: 'TechFlow Inc',
    result: 'Seed funding announced with strong investor interest.',
    image: '/Ciss.png',
    url: 'https://cissigroup.com/',
  },
  {
    id: 'corporate-branding',
    title: 'MultiCorp Global Rebrand',
    category: 'branding',
    client: 'MultiCorp International',
    result: 'Unified brand identity across 15 markets.',
    image: 'https://picsum.photos/600/400?random=8',
  },
  {
    id: 'ecommerce-platform',
    title: 'Turtle and Bloom Story and online books',
    category: 'websites',
    client: 'Turtle and Bloom',
    result: '$2.5M revenue in first year of launch.',
    image: '/turtleandbloom.png',
    url: 'https://turtleandbloom.com/',
  },
]

export const clientLogos = [
  { id: 1, name: 'CissGroup', image: '/CISSI-LOGO-WHITE-1.png' },
  { id: 2, name: 'Bradama', image: '/brandama-_logo-1.png' },
  { id: 3, name: 'twitwi', image: '/Colored-BPexolyV.png' },
  { id: 4, name: 'Client D', image: '/Oscion_logo.webp' },
  { id: 5, name: 'turtleandbloom', image: '/Group 89-DM55hG18.png' },
  { id: 6, name: 'edonet', image: '/images.png' },
]
