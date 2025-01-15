import figmaIcon from '@/assets/images/figma.png'
import portfolioIcon from '@/assets/images/portfolio.png'
import figmaSmallIcon from '@/assets/icons/figma_small.svg'
import linkSmallIcon from '@/assets/icons/link_small.svg'

export type Project = {
  icon: string
  title: string
  description: string
  link: string
  linkIcon: string
}

export const PROJECTS: Project[] = [
  {
    icon: figmaIcon,
    title: 'Alexa Dev Community Landing Page',
    description: 'Web UI design for Alexa developers community',
    link: 'https://figma.com',
    linkIcon: figmaSmallIcon
  },
  {
    icon: portfolioIcon,
    title: 'Portfolio Webpage',
    description: 'Personal Portfolio webpage with resume and blog',
    link: 'https://anuragyadav365.github.io',
    linkIcon: linkSmallIcon
  }
]
