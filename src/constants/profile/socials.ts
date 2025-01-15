import instagramIcon from '@/assets/icons/instagram.svg'
import gitIcon from '@/assets/icons/git.svg'
import twitterIcon from '@/assets/icons/twitter.svg'
import linkedinIcon from '@/assets/icons/linkedin.svg'

export type Social = {
  icon: string
  label: string
  value: string
  link: string
}

export const SOCIALS: Social[] = [
  {
    icon: instagramIcon,
    label: 'Instagram',
    value: '@anurag.yadav.007',
    link: 'https://instagram.com/anurag.yadav.007'
  },
  {
    icon: gitIcon,
    label: 'GitHub',
    value: '@anuragyadav365',
    link: 'https://github.com/anuragyadav365'
  },
  {
    icon: twitterIcon,
    label: 'Twitter',
    value: '@anuramnp',
    link: 'https://twitter.com/anuramnp'
  },
  {
    icon: linkedinIcon,
    label: 'LinkedIn',
    value: '@anuragyadav',
    link: 'https://linkedin.com/in/anuragyadav'
  }
]
