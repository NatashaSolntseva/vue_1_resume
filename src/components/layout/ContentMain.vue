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
import SectionContainer from "../shared/SectionContainer.vue";
import EducationList from "../sections/EducationList.vue";
import CertificateList from "../sections/CertificateList.vue";
import ProjectList from "../sections/ProjectList.vue";
import ToolList from "../sections/ToolList.vue";
import AchievementList from "../sections/AchievementList.vue";

import { EDUCATION } from "../../constants/education.ts";
import { ACHIEVEMENTS } from "../../constants/achievements.ts";
import { CERTIFICATES } from "../../constants/certificates.ts";
import { PROJECTS } from "../../constants/projects.ts";
import { TOOLS } from "../../constants/tools.ts";

export default {
  name: "ContentMain",
  components: {
    SectionContainer,
    EducationList,
    CertificateList,
    ProjectList,
    ToolList,
    AchievementList,
  },
  data() {
    return {
      education: EDUCATION,
      certificates: CERTIFICATES,
      projects: PROJECTS,
      tools: TOOLS,
      achievements: ACHIEVEMENTS,
    };
  },
};
</script>

<style scoped>
.content-main {
  flex: 1;
  padding: 64px 32px 0 32px;
}
</style>
