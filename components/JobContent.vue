<script setup lang="ts">
  const { tm, rt } = useI18n()
</script>

<template>
  <ul class="jobcontent">
    <li
      v-for="item in tm('experience')"
      :key="`id-${item}`"
    >
      <p class="jobcontent__job color-dark-gray">{{ rt(item.job) }}</p>
      <div>
        <div class="jobcontent__title">
          <h3 class="color-blue">{{ rt(item.company) }}</h3>
          <div>
            <img
              src="icon-line-dark.svg"
              width="32"
              height="32"
            />
            <p class="jobcontent__date color-dark-gray">{{ rt(item.date) }}</p>
          </div>
        </div>
        <ul>
          <li
            v-for="task in item.tasks"
            :key="`id-${task}`"
          >
            {{ rt(task.name) }}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .jobcontent {
    > li + li {
      margin-top: 4rem;
    }

    > li {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;

      @media (min-width: 1080px) {
        grid-template-columns: 200px 1fr;
      }
    }

    h3 {
      font-size: 1rem;
      max-width: 70%;
    }

    p {
      margin: 0;
    }
  }

  .jobcontent__title {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width: 1080px) {
      flex-direction: row;
    }

    > div {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }
  }

  .jobcontent__job {
    font-weight: 700;
    text-align: left;
    font-family: 'Poppins', sans-serif;

    @media (min-width: 1080px) {
      text-align: right;
    }
  }
</style>
