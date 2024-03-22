<template>
  <div class="bg-home">
    <q-parallax :height="700" :speed="0.5">
      <template v-slot:media>
        <video autoplay loop muted class="background-video">
          <source src="~assets/BMI_Login.mp4" type="video/mp4" />
        </video>
      </template>
      <div
        style="
          width: 100vw;
          padding: 12px;
          padding-left: 150px;
          padding-right: 150px;
        "
      >
        <div class="text-h1 inner-headline">语镜</div>
        <q-separator color="white" size="" />
        <div class="text-h4">大语言模型安全 检测&防御 系统</div>
      </div>
    </q-parallax>

    <div class="inner-box">
      <div class="text-body1">
        在人工智能飞速发展的今天，大语言模型（LLM）已成为众多应用的核心技术。然而，随着其应用范围的扩大，安全问题也日益凸显。语镜是一款专为大语言模型设计的安全检测和防御系统，旨在为企业和开发者提供全方位的安全解决方案
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
        <img src="https://picsum.photos/id/345/2560/1600" />
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
          <img src="~assets/4.png" style="width: 150px; height: 150px" />
          <div class="text-h3 text-white text-center">语 镜</div>
          <div class="text-h6 text-grey-3 text-center">v{{ $q.version }}</div>
        </div>
      </template>
    </q-parallax>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
