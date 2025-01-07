<template>
  <div class="profile-card">
    <img class="profile-avatar" src="@/assets/images/avatar.png" alt="Profile Avatar" />
    <h2 class="profile-name">Anurag Yadav</h2>
    <p class="profile-description">
      A well-organized, creative and goal-oriented graduate possessing excellent communication,
      problem-solving and leadership skills with a flair to explore Computer Science Engineering.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard'
}
</script>

<style scoped>
.profile-card {
  display: flex;
  flex-direction: column;
}

.profile-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97px;
  height: 97px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
}

.profile-name {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: var(--text-color);
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}

.profile-description {
  font-family: 'OutFit';
  font-weight: 500;
  font-size: 18px;
  color: var(--secondary-color);
  line-height: 24px;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
}
</style>
