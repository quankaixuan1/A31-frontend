<template>
  <div class="row">
    <div class="text-h2 inner-headline2 col">新闻</div>
  </div>
  <q-page class="">
    <div class="fit column bg-index-r q-px-xl" style="border-radius: 8px">
      <br /><br />
      <div class="fit row">
        <q-card class="my-card col" flat bordered>
          <q-img src="../../../assets/news1.webp" />

          <q-card-section>
            <div class="text-overline text-orange-9"></div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              2024年数字安全呈现九大趋势 AI大模型正在重构安全
            </div>
            <div class="text-caption text-grey">
              大模型“智能涌现”冲击了传统安全理念，数据要素的乘数效应带给安全新活力，安全边界正在一步一步被打破……2024年安全趋势将迎来哪些新变化？
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn
              flat
              color="primary"
              label="详情"
              href="https://baijiahao.baidu.com/s?id=1788693954987682081&wfr=spider&for=pc"
              target="_blank"
            />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
      <br /><br />

      <div class="fit row">
        <q-card class="my-card col" flat bordered>
          <q-img src="../../../assets/news2.webp" />

          <q-card-section>
            <div class="text-overline text-orange-9">红星新闻</div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              全国政协委员齐向东：AI威胁网络安全也能赋能网络安全，建议大力发展“AI+安全”创新应用
            </div>
            <div class="text-caption text-grey">
              关于人工智能（AI）的讨论热潮，从去年延续到了今年。2024年全国两会开幕在即，对于人工智能带来的安全方面的担忧，全国政协委员、全国工商联副主席、奇安信集团董事长齐向东告诉红星新闻记者，他今年准备了大力发展“AI+安全”创新应用的提案。
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn flat color="primary" label="详情" href="https://baijiahao.baidu.com/s?id=1792384965949548036&wfr=spider&for=pc" target="_blank" />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
      <br /><br />

      <div class="fit row">
        <q-card class="my-card col" flat bordered>
          <q-img src="../../../assets/news3.jpg" />

          <q-card-section>
            <div class="text-overline text-orange-9">雷锋网</div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              “人工智能 + ”打开数字安全变革大门
            </div>
            <div class="text-caption text-grey">
              2024 年 Sora
              的横空出世，再次将人工智能推向了又一个新高度。今年两会期间，"
              人工智能 +"
              首次被写入政府工作报告。报告提出，深化大数据、人工智能等研发应用，开展
              " 人工智能 +" 行动，打造具有国际竞争力的数字产业集群。
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn
              flat
              color="primary"
              label="详情"
              href="http://www.myzaker.com/article/65f2a1438e9f093cce587465"
              target="_blank"
            />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
      <br /><br />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import axios from 'axios';
</script>
