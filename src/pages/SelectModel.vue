<template>
  <div class="bg-home">
    <q-parallax :height="1100" :speed="0.5">
      <template v-slot:media>
        <video autoplay loop muted class="background-video">
          <source src="~assets/BMI_Login.mp4" type="video/mp4" />
        </video>
      </template>
      <div :class="windowClass">
        <div class="text-h1 inner-headline">
          Trustworthiness in Large Language Models
        </div>
        <!-- <q-separator color="white" size="" /> -->
        <br />
        <div class="text-h4">大语言模型安全 检测&防御系统</div>
      </div>
    </q-parallax>
    <div class="fit row justify-center">
      <div :class="windowClass">
        <br /><br /><br />
        <q-separator color="white" size="" />
        <br />

        <div class="row">
          <div class="text-h3 col">安全检测</div>
          <div class="text-h5 col row justify-end">
            采用全面的数据集，能够识别大语言模型中的安全漏洞，如数据泄露、模型欺骗……
          </div>
        </div>

        <br /><br /><br />
        <div class="row justify-center q-gutter-xl">
          <div class="col column items-center justify-center q-pa-xl">
            <q-icon size="100px" name="dataset" />

            <div class="text-h6">数据集</div>
          </div>
          <div class="col column items-center justify-center q-pa-xl">
            <q-icon size="100px" name="find_in_page" />

            <div class="text-h6">检测</div>
          </div>
          <div class="col column items-center justify-center q-pa-xl">
            <q-icon size="100px" name="analytics" />

            <div class="text-h6">评估</div>
          </div>
          <div class="col column items-center justify-center q-pa-xl">
            <q-icon size="100px" name="leaderboard" />

            <div class="text-h6">排行榜</div>
          </div>
        </div>
        <br /><br /><br />

        <q-separator color="white" size="" />
        <br />
        <div class="row">
          <div class="text-h3 col">威胁防御</div>
          <div class="text-h5 col row justify-end">
            系统提供多层防御机制，实时监测并有效阻止恶意攻击，保护模型免受损害
          </div>
        </div>
        <br /><br /><br />

        <div class="row justify-center q-gutter-xl">
          <div class="col column items-center justify-center q-pa-xl">
            <q-icon size="100px" name="security" />

            <div class="text-h6">模式</div>
          </div>
          <div class="col column items-center justify-center q-pa-xl">
            <q-icon size="100px" name="question_answer" />

            <div class="text-h6">防御效果</div>
          </div>
          <div class="col column items-center justify-center q-pa-xl">
            <q-icon size="100px" name="edit_note" />

            <div class="text-h6">输入识别</div>
          </div>
          <div class="col column items-center justify-center q-pa-xl">
            <q-icon size="100px" name="subtitles" />

            <div class="text-h6">输出识别</div>
          </div>
        </div>
        <br /><br /><br />

        <q-separator color="white" size="" />
        <br />
        <div class="text-h3">聚焦</div>
        <br /><br /><br />

        <div class="row q-gutter-xl">
          <div class="col">
            <q-parallax :height="300" :speed="0.5">
              <template v-slot:media>
                <img src="https://picsum.photos/id/400/2560/1600" />
              </template>
              <div class="text-white text-h2 inner-subtitle">强适应性</div>
            </q-parallax>
            <div class="text-subtitle1 q-pt-sm">
              系统支持多种大语言模型和应用场景，可根据用户需求灵活配置
            </div>
          </div>
          <div class="col">
            <q-parallax :height="300" :speed="0.5">
              <template v-slot:media>
                <img src="https://picsum.photos/id/1/1920/1080" />
              </template>
              <div class="text-white text-h2 inner-subtitle">软件服务</div>
            </q-parallax>
            <div class="text-subtitle1 q-pt-sm">dddd</div>
          </div>
          <div class="col">
            <q-parallax :height="300" :speed="0.5">
              <template v-slot:media>
                <img src="https://picsum.photos/id/11/2560/1600" />
              </template>
              <div class="text-white text-h2 inner-subtitle">应用场景</div>
            </q-parallax>
            <div class="text-subtitle1 q-pt-sm">
              企业级大语言模型部署/开放域对话系统/自然语言处理应用/AI辅助写作和内容生成
            </div>
          </div>
        </div>
        <br /><br /><br />
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
    <br /><br />
    <div class="row justify-center">
      <a href="https://beian.miit.gov.cn" target="_blank" style="color: #ccc"
        >浙ICP备2024078542号</a
      >
      <!-- <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010202009747"
        style="margin-right: 10px"
      >
        <img
          src="https://t1.chei.com.cn/chsi/images/jgwab.png"
          style="float: left"
        />
        <span style="float: left; color: #ccc; margin-left: 5px"
          >京公网安备11010202009747号</span
        >
      </a> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useResponsiveClass } from 'src/mixin/ResponsiveMixin';
const { windowClass } = useResponsiveClass();
</script>

<style></style>
