<script setup lang="ts">
const { tm, rt } = useI18n()
</script>

<template>
  <div class="container">
    <TheHeader />
    <div class="content">
      <aside>
        <CardContent :title="$t('profileTitle')">
          <BaseTextIcon social="phone" />
          <BaseTextIcon social="email" />
          <BaseTextIcon social="address" />
          <BaseTextIcon social="location" />
        </CardContent>
        <CardContent :title="$t('studiesTitle')">
          <ul>
            <li v-for="item in tm('studies')" :key="item">{{ rt(item.title) }}</li>
          </ul>
        </CardContent>
        <CardContent :title="$t('languagesTitle')">
          <ul>
            <li v-for="item in tm('languages')" :key="item">{{ rt(item.name) }}</li>
          </ul>
        </CardContent>
        <CardContent :title="$t('hobbiesTitle')">
          <ul>
            <li v-for="item in tm('hobbies')" :key="item">{{ rt(item.name) }}</li>
          </ul>
        </CardContent>
      </aside>
      <main>
        <CardContent :title="$t('experienceTitle')">
          <ul>
            <li v-for="item in tm('experience')" :key="item">{{ rt(item.job) }}</li>
          </ul>
        </CardContent>
        <CardContent :title="$t('projectsTitle')">
          <ul>
            <li v-for="item in tm('projects')" :key="item">{{ rt(item.name) }}</li>
          </ul>
        </CardContent>
        <CardContent :title="$t('skillsTitle')">
          <ul>
            <li v-for="item in tm('skills')" :key="item">{{ rt(item.name) }}</li>
          </ul>
        </CardContent>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

header,
.content {
  width: 100%;
  max-width: 1440px;
}

.content {
  display: grid;
  grid-template-columns: 400px 1fr;
}
</style>

