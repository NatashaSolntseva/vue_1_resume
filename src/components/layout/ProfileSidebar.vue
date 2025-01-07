<template>
  <div class="profile-sidebar">
    <ProfileCard />
    <Divider />
    <ContactList :contacts="contacts" />
    <Divider />
    <SectionTitle text="Socials" />
    <SocialList :socials="socials" />
    <Divider />
    <SectionTitle text="Languages" />
    <LanguageList :languages="languages" />
    <SectionTitle text="Hobbies & Interests" />
    <HobbyList :hobbies="hobbies" />
  </div>
</template>

<script>
import ProfileCard from '@/components/sections/ProfileCard.vue'
import Divider from '@/components/shared/Divider.vue'
import ContactList from '@/components/sections/ContactList.vue'
import SocialList from '@/components/sections/SocialList.vue'
import LanguageList from '@/components/sections/LanguageList.vue'
import HobbyList from '@/components/sections/HobbyList.vue'
import SectionTitle from '@/components/shared/ProfileSectionTitle.vue'

import { SOCIALS } from '@/constants/profile/socials.ts'
import { LANGUAGES } from '@/constants/profile/languages.ts'
import { HOBBIES } from '@/constants/profile/hobbies.ts'
import { CONTACTS } from '@/constants/profile/contacts.ts'

export default {
  name: 'ProfileSidebar',
  components: {
    ProfileCard,
    Divider,
    ContactList,
    SocialList,
    LanguageList,
    HobbyList,
    SectionTitle
  },
  data() {
    return {
      languages: LANGUAGES,
      hobbies: HOBBIES,
      socials: SOCIALS,
      contacts: CONTACTS
    }
  }
}
</script>

<style scoped>
.profile-sidebar {
  flex: 0 0 355px;
  background-color: var(--primary-color);
  padding: 48px 8px 48px 48px;
}

@media (max-width: 1000px) {
  .profile-sidebar {
    flex: 0 0 300px;
    background-color: var(--primary-color);
    padding: 30px 10px 25px 30px;
  }
}
</style>
