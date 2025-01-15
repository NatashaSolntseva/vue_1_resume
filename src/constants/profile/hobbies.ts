import gamingIcon from '@/assets/icons/gaming.svg'
import travelIcon from '@/assets/icons/travel.svg'
import drawIcon from '@/assets/icons/draw.svg'
import bloggingIcon from '@/assets/icons/blogging.svg'

export type Hobby = {
  icon: string
  label: string
}

export const HOBBIES: Hobby[] = [
  {
    icon: gamingIcon,
    label: 'Gaming'
  },
  {
    icon: travelIcon,
    label: 'Travelling'
  },
  {
    icon: drawIcon,
    label: 'Sketching/Graffiti'
  },
  {
    icon: bloggingIcon,
    label: 'Blogging'
  }
]
