import alexaIcon from '@/assets/icons/alexa.svg'
import githubIcon from '@/assets/images/github.png'
import winterOfCodeIcon from '@/assets/images/winter_of_code.png'
import googleIcon from '@/assets/icons/google.svg'

export type Achievement = {
  date: string
  location?: string
  mode?: string
  icon: string
  title: string
  role: string
  description: string
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    date: 'Present',
    location: 'Chandigarh',
    mode: '',
    icon: alexaIcon,
    title: 'Alexa Dev Community',
    role: 'Graphic Designer',
    description:
      "Creatively designing and developing web UI for Chandigarh University's Alexa Developer Community, upcoming big launch of full website."
  },
  {
    date: 'Oct 2021 - Nov 2021',
    location: '',
    mode: 'Online',
    icon: githubIcon,
    title: 'GitHub',
    role: 'Hacktoberfest Contributor',
    description:
      'Contributed 8 PR’s in various open source projects. Great experience and learning about working with GitHub and open-source. Connecting with developers.'
  },
  {
    date: 'Jan 2021 - March 2021',
    location: '',
    mode: 'Online',
    icon: winterOfCodeIcon,
    title: 'Winter of Code',
    role: 'Contributor',
    description:
      'Overwhelming to be a part of DSC NSEC project – DSC NSEC Algorithms for Winter of Code 2020. First introduction to Git and GitHub. How GitHub is used by most of the programmers in order to manage the projects.'
  },
  {
    date: 'Oct 2020 - Dec 2020',
    location: '',
    mode: 'Online',
    icon: googleIcon,
    title: 'Google',
    role: '30Days of Google Cloud',
    description:
      'Hands on practice on Google Cloud Platform – the tool that powers apps like Google Search, Gmail and YouTube. As part of the program had learned the concepts like computing, application development, big data & machine learning using cloud.'
  }
]
