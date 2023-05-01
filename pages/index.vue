<script setup lang="ts">
  const { t, tm, rt } = useI18n()

  useHead({
    title: `${t('firstName')} ${t('lastName')} - Este Soy Yo`,
    meta: [{ name: 'description', content: t('metaDescription') }],
  })
</script>

<template>
  <div class="container">
    <TheHeader />
    <div class="content">
      <aside>
        <CardContent :title="$t('profileTitle')">
          <ProfileContent />
        </CardContent>
        <CardContent :title="$t('studiesTitle')">
          <ul>
            <StudiesCard
              v-for="item in tm('studies')"
              :key="item"
              :title="$rt(item.title)"
              :date="$rt(item.date)"
              :location="$rt(item.location)"
            />
          </ul>
        </CardContent>
        <CardContent :title="$t('languagesTitle')">
          <ul class="languages__list">
            <li
              v-for="item in tm('languages')"
              :key="item"
            >
              {{ rt(item.name) }}: {{ rt(item.level) }}
            </li>
          </ul>
        </CardContent>
      </aside>
      <main>
        <CardContent :title="$t('experienceTitle')">
          <JobContent />
        </CardContent>
        <CardContent :title="$t('projectsTitle')">
          <ul class="projects__list">
            <li
              v-for="item in tm('projects')"
              :key="item"
            >
              <a
                :href="rt(item.name)"
                target="_blank"
                >{{ rt(item.name) }}</a
              >
            </li>
          </ul>
        </CardContent>
        <CardContent :title="$t('skillsTitle')">
          <ul class="skills__list">
            <li
              v-for="item in tm('skills')"
              :key="item"
            >
              {{ rt(item.name) }}
            </li>
          </ul>
        </CardContent>
        <CardContent :title="$t('hobbiesTitle')">
          <ul class="hobbies__list">
            <li
              v-for="item in tm('hobbies')"
              :key="item"
            >
              <HobbyCard :hobby="rt(item.name)" />
            </li>
          </ul>
        </CardContent>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  header,
  .content {
    width: 100%;
    max-width: 1080px;
    margin: 1rem 0;
  }

  .content {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 4rem;
  }

  aside,
  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .hobbies__list {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .languages__list {
    li + li {
      margin-top: 1rem;
    }
  }

  .projects__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    font-size: 0.8rem;
  }

  .skills__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
</style>
