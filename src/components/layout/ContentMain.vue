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

<script>
import SectionContainer from '@/components/shared/SectionContainer.vue'
import EducationList from '@/components/sections/EducationList.vue'
import CertificateList from '@/components/sections/CertificateList.vue'
import ProjectList from '@/components/sections/ProjectList.vue'
import ToolList from '@/components/sections/ToolList.vue'
import AchievementList from '@/components/sections/AchievementList.vue'

import { EDUCATION } from '@/constants/content/education.ts'
import { ACHIEVEMENTS } from '@/constants/content/achievements.ts'
import { CERTIFICATES } from '@/constants/content/certificates.ts'
import { PROJECTS } from '@/constants/content/projects.ts'
import { TOOLS } from '@/constants/content/tools.ts'

export default {
  name: 'ContentMain',
  components: {
    SectionContainer,
    EducationList,
    CertificateList,
    ProjectList,
    ToolList,
    AchievementList
  },
  data() {
    return {
      education: EDUCATION,
      certificates: CERTIFICATES,
      projects: PROJECTS,
      tools: TOOLS,
      achievements: ACHIEVEMENTS
    }
  }
}
</script>

<style scoped>
.content-main {
  flex: 1;
  padding: 64px 32px 0 32px;
}
</style>
