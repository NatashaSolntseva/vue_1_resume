import freeCodeCampLogo from '@/assets/images/freecodecamp.png'
import googleLogo from '@/assets/icons/google.svg'

export type Certificate = {
  logo: string
  title: string
  organization: string
  date: string
}

export const CERTIFICATES: Certificate[] = [
  {
    logo: freeCodeCampLogo,
    title: 'Responsive Web Design',
    organization: 'freeCodeCamp',
    date: 'Dec 2021 – Feb 2022'
  },
  {
    logo: googleLogo,
    title: 'Data Structure & Algorithms',
    organization: 'Google',
    date: 'Mar 2021 – Jun 2021'
  }
]
