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
import ProfileCard from "../sections/ProfileCard.vue";
import Divider from "../shared/Divider.vue";
import ContactList from "../sections/ContactList.vue";
import SocialList from "../sections/SocialList.vue";
import LanguageList from "../sections/LanguageList.vue";
import HobbyList from "../sections/HobbyList.vue";
import SectionTitle from "../shared/ProfileSectionTitle.vue";

import { SOCIALS } from "../../constants/socials.ts";
import { LANGUAGES } from "../../constants/languages.ts";
import { HOBBIES } from "../../constants/hobbies.ts";
import { CONTACTS } from "../../constants/contacts.ts";

//TODO alias не работает

export default {
  name: "ProfileSidebar",
  components: {
    ProfileCard,
    Divider,
    ContactList,
    SocialList,
    LanguageList,
    HobbyList,
    SectionTitle,
  },
  data() {
    return {
      languages: LANGUAGES,
      hobbies: HOBBIES,
      socials: SOCIALS,
      contacts: CONTACTS,
    };
  },
};
</script>

<style scoped>
.profile-sidebar {
  flex: 0 0 360px;
  background-color: #f7f9fc;
  padding: 48px;
}
</style>
