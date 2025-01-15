import hindiFlagIcon from '@/assets/icons/flag_hindi.svg'
import englishFlagIcon from '@/assets/icons/flag_eng.svg'
import spanishFlagIcon from '@/assets/icons/flag_spanish.svg'

export type Language = {
  icon: string
  label: string
  level: string
}

export const LANGUAGES: Language[] = [
  {
    icon: hindiFlagIcon,
    label: 'Hindi',
    level: 'Native'
  },
  {
    icon: englishFlagIcon,
    label: 'English',
    level: 'Professional working'
  },
  {
    icon: spanishFlagIcon,
    label: 'Spanish',
    level: 'Elementary'
  }
]
