<template>
  <div class="content-main">
    <SectionContainer title="Education">
      <EducationList :education="education" />
    </SectionContainer>
    <SectionContainer title="Achievements">
      <AchievementList :achievements="achievements" />
    </SectionContainer>
    <SectionContainer title="Tools/Skills">
      <ToolList :tools="tools" />
    </SectionContainer>
    <SectionContainer title="Latest projects">
      <ProjectList :projects="projects" />
    </SectionContainer>
    <SectionContainer title="Certificates & Awards">
      <CertificateList :certificates="certificates" />
    </SectionContainer>
  </div>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/shared/SectionContainer.vue'
import EducationList from '@/components/sections/EducationList.vue'
import CertificateList from '@/components/sections/CertificateList.vue'
import ProjectList from '@/components/sections/ProjectList.vue'
import ToolList from '@/components/sections/ToolList.vue'
import AchievementList from '@/components/sections/AchievementList.vue'

import { EDUCATION } from '@/constants/content/education'
import { ACHIEVEMENTS } from '@/constants/content/achievements'
import { CERTIFICATES } from '@//constants/content/certificates'
import { PROJECTS } from '@/constants/content/projects'
import { TOOLS } from '@/constants/content/tools'

const education = EDUCATION
const certificates = CERTIFICATES
const projects = PROJECTS
const tools = TOOLS
const achievements = ACHIEVEMENTS
</script>

<style scoped>
.content-main {
  flex: 1;
  padding: 64px 47px 0 45px;
}

@media (max-width: 1000px) {
  .content-main {
    padding: 30px 30px 0 25px;
  }
}
</style>
