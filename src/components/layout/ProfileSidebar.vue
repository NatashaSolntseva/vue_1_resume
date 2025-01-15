<template>
  <div class="profile-sidebar">
    <ProfileCard />
    <SectionDivider />
    <ContactList :contacts="contacts" />
    <SectionDivider />
    <SectionTitle text="Socials" />
    <SocialList :socials="socials" />
    <SectionDivider />
    <SectionTitle text="Languages" />
    <LanguageList :languages="languages" />
    <SectionTitle text="Hobbies & Interests" />
    <HobbyList :hobbies="hobbies" />
  </div>
</template>

<script setup lang="ts">
import ProfileCard from '@/components/sections/ProfileCard.vue'
import SectionDivider from '@/components/shared/SectionDivider.vue'
import ContactList from '@/components/sections/ContactList.vue'
import SocialList from '@/components/sections/SocialList.vue'
import LanguageList from '@/components/sections/LanguageList.vue'
import HobbyList from '@/components/sections/HobbyList.vue'
import SectionTitle from '@/components/shared/ProfileSectionTitle.vue'

import { SOCIALS } from '@/constants/profile/socials'
import { LANGUAGES } from '@/constants/profile/languages'
import { HOBBIES } from '@/constants/profile/hobbies'
import { CONTACTS } from '@/constants/profile/contacts'

const languages = LANGUAGES
const hobbies = HOBBIES
const socials = SOCIALS
const contacts = CONTACTS
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
