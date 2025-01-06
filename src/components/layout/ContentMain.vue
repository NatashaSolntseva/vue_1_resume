<template>
  <div class="content-main">
    <SectionContainer title="Education">
      <EducationList :education="education" />
    </SectionContainer>
    <SectionContainer title="Achievements">
      <div></div>
    </SectionContainer>
    <SectionContainer title="Tools/Skills">
      <div></div>
    </SectionContainer>
    <SectionContainer title="Latest projects">
      <div></div>
    </SectionContainer>
    <SectionContainer title="Certificates & Awards">
      <div></div>
    </SectionContainer>
  </div>
</template>

<script>
import SectionContainer from "../shared/SectionContainer.vue";
import EducationList from "../sections/EducationList.vue";
import { EDUCATION } from "../../constants/education.ts";
export default {
  name: "ContentMain",
  components: {
    SectionContainer,
    EducationList,
  },
  data() {
    return {
      education: EDUCATION,
    };
  },
};
</script>

<style scoped>
.content-main {
  flex: 1;
  padding: 64px 32px;
}
</style>
