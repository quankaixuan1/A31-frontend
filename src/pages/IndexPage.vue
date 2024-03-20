<template>
  <div v-if="!isChildRoute">
    <div class="inner-box">
      <div class="text-h1 inner-headline">语镜</div>
      <q-separator dark />

      <div class="text-h6">大语言模型安全 检测&防御 系统</div>
      <br />
      <div class="text-body1">
        在人工智能飞速发展的今天，大语言模型（LLM）已成为众多应用的核心技术。然而，随着其应用范围的扩大，安全问题也日益凸显。LMSafeGuard是一款专为大语言模型设计的安全检测和防御系统，旨在为企业和开发者提供全方位的安全解决方案
      </div>
    </div>

    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </template>
      <div class="text-white text-h2 inner-subtitle">安全检测</div>
    </q-parallax>

    <div class="inner-box">
      <div class="text-h6 text-black">这里可以放业务流程图</div>

      <div class="text-body1">
        采用先进的算法，能够实时监测并识别大语言模型中的安全威胁，如数据泄露、模型欺骗等
      </div>
    </div>

    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />
      </template>
      <div class="text-white text-h2 inner-subtitle">威胁防御</div>
    </q-parallax>

    <div class="inner-box">
      <div class="text-h6 text-black">这里可以放业务流程图</div>

      <div class="text-body1">
        系统提供多层防御机制，能够有效阻止恶意攻击，保护模型免受损害
      </div>
    </div>

    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="https://picsum.photos/id/400/2560/1600" />
      </template>
      <div class="text-white text-h2 inner-subtitle">强适应性</div>
    </q-parallax>

    <div class="inner-box">
      <div class="text-h6 text-black">这里可以放业务流程图</div>

      <div class="text-body1">
        系统支持多种大语言模型和应用场景，可根据用户需求灵活配置
      </div>
    </div>

    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="https://picsum.photos/id/1/1920/1080" />
      </template>
      <div class="text-white text-h2 inner-subtitle">软件集成</div>
    </q-parallax>

    <div class="inner-box">
      <div class="text-h6 text-black">这里可以放业务流程图</div>

      <div class="text-body1">
        提供简洁的API接口，方便用户快速集成到现有系统中
      </div>
    </div>

    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="https://picsum.photos/id/11/2560/1600" />
      </template>
      <div class="text-white text-h2 inner-subtitle">应用场景</div>
    </q-parallax>

    <div class="inner-box">
      <div class="text-h6 text-black">这里可以放业务流程图</div>

      <div class="text-body1">
        企业级大语言模型部署/开放域对话系统/自然语言处理应用/AI辅助写作和内容生成
        <br />
        致力于为大语言模型提供全方位的安全防护，助力企业和开发者安心构建和部署智能应用。
      </div>
    </div>

    <q-parallax>
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: scope.percentScrolled * 60 + '%',
            left: 0,
            right: 0,
          }"
        >
          <img src="/public/img/4.png" style="width: 150px; height: 150px" />
          <div class="text-h3 text-white text-center">语 镜</div>
          <div class="text-h6 text-grey-3 text-center">v{{ $q.version }}</div>
        </div>
      </template>
    </q-parallax>
  </div>

  <!-- <div style="height: 50px; width: 100px; background-color: blue"></div>
  <q-option-group
    v-model="panel"
    inline
    :options="[
      { label: 'Mails', value: 'mails' },
      { label: 'Alarms', value: 'alarms' },
      { label: 'Movies', value: 'movies' },
    ]"
  />
  <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
    <q-tab-panel name="mails">
      <div class="text-h6">Mails</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="alarms">
      <div class="text-h6">Alarms</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="movies">
      <div class="text-h6">Movies</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
  </q-tab-panels>
  <transition-group
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <p key="text">Lorem Ipsum</p>
    <q-btn key="email-button" color="secondary" icon="mail" label="Email" />
  </transition-group> -->
  <router-view />
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// const panel = ref('movies');

import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
// 切换到子路由，隐藏父路由的元素
const isChildRoute = computed(() => {
  return route.matched.length > 2;
});
</script>
<style lang="sass">
.inner-headline
  padding-top: 50px

.inner-box
  //text-align: center
  width: 100vw
  padding: 12px
  padding-left: 150px
  padding-right: 150px
  color: white
  background-color: rgba(0, 0, 0, .3)

.inner-subtitle
  padding-bottom: 10px
</style>
