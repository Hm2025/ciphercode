export interface Course {
  id: string
  title: string
  description: string
  helps: string
}

export const courses: Course[] = [
  {
    id: 'cyber-security',
    title: 'Cyber Security and Ethical Hacking',
    description: 'Learn to protect systems and identify vulnerabilities.',
    helps: 'Build a career in security or protect your own business.',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Automate tasks and workflows with artificial intelligence.',
    helps: 'Save hours every week by automating repetitive work.',
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Create compelling brand identities and guidelines.',
    helps: 'Build recognition and trust for your business.',
  },
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant',
    description: 'Master the tools and skills of a professional VA.',
    helps: 'Start your own VA business or support executives remotely.',
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    description: 'Write effective prompts to get results from AI.',
    helps: 'Maximize the value you get from AI tools like ChatGPT.',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Build modern, responsive websites and web applications.',
    helps: 'Launch your own projects or land high-paying dev roles.',
  },
  {
    id: 'game-development',
    title: 'Game Development',
    description: 'Create games from concept to launch.',
    helps: 'Build a portfolio and start your game dev career.',
  },
  {
    id: 'robotics',
    title: 'Robotics',
    description: 'Program and build intelligent robotic systems.',
    helps: 'Explore a cutting-edge field with huge demand.',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Design user-centered digital experiences.',
    helps: 'Create beautiful, usable products that users love.',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Master social media, content, email and analytics.',
    helps: 'Launch campaigns that reach and convert your audience.',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Lead teams and deliver projects on time and budget.',
    helps: 'Advance to leadership roles and command higher salaries.',
  },
  {
    id: 'business-development',
    title: 'Business Development',
    description: 'Identify opportunities and grow revenue.',
    helps: 'Scale your business or accelerate your company\'s growth.',
  },
]
