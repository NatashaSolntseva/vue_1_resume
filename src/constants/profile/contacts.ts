import emailIcon from '@/assets/icons/email.svg'
import webIcon from '@/assets/icons/web.svg'
import phoneIcon from '@/assets/icons/phone.svg'
import locationIcon from '@/assets/icons/location.svg'

export type Contact = {
  icon: string
  label: string
  value: string
  link: string | null
}

export const CONTACTS: Contact[] = [
  {
    icon: emailIcon,
    label: 'Email',
    value: 'anuragyadavmnp@gmail.com',
    link: 'mailto:anuragyadavmnp@gmail.com'
  },
  {
    icon: webIcon,
    label: 'Website',
    value: 'https://anuragyadav365.github.io/portfolio.html',
    link: 'https://anuragyadav365.github.io/portfolio.html'
  },
  {
    icon: phoneIcon,
    label: 'Phone',
    value: '(+91) 981 5533 309',
    link: 'tel:+919815533309'
  },
  {
    icon: locationIcon,
    label: 'Address',
    value: 'Hallomajra, Chandigarh, India',
    link: null
  }
]
