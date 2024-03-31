<template>
  <div v-if="!isChildRoute">
    <div class="row">
      <div class="text-h1 inner-headline2 col">相关资讯</div>
      <div class="text-h5 inner-headline2 col">
        在这里浏览有关人工智能安全的新闻资讯，或是联系我们的开发团队
      </div>
    </div>
    <q-separator color="white" size="" />
    <br />

    <div class="row">
      <div class="text-h3 col">前沿技术</div>
      <div class="text-h5 col row justify-end"></div>
    </div>

    <br />
    <div class="row justify-center q-gutter-lg bg-index-font">
      <div class="column col fit">
        <q-card class="col fit" flat bordered>
          <q-img src="../assets/news1.webp" />

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
        <br />
        <q-card class="col fit" flat bordered>
          <q-img src="../assets/news4.jpg" />

          <q-card-section>
            <div class="text-overline text-orange-9">科技向善的另一面</div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              “双面”AIGC：变脸、界线与博弈
            </div>
            <div class="text-caption text-grey">
              然而，无论人工智能如何进化，却始终保留着作为机器的工具属性，它所被赋予的“人性”，取决于投喂“食物”的好坏，以及背后使用它的人。这也意味着，AIGC的自我成长正给当今社会带来双面冲击，有人在通过它“复活”亲人、改变世界，有人在利用它吸金引流、颠倒黑白。
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn
              flat
              color="primary"
              label="详情"
              href="https://www.thepaper.cn/newsDetail_forward_26857966"
              target="_blank"
            />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
      <div class="column col fit">
        <q-card class="col fit" flat bordered>
          <q-img src="../assets/news2.webp" />

          <q-card-section>
            <div class="text-overline text-orange-9"></div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              全国政协委员齐向东：AI威胁网络安全也能赋能网络安全，建议大力发展“AI+安全”创新应用
            </div>
            <div class="text-caption text-grey">
              关于人工智能（AI）的讨论热潮，从去年延续到了今年。2024年全国两会开幕在即，对于人工智能带来的安全方面的担忧，全国政协委员、全国工商联副主席、奇安信集团董事长齐向东告诉红星新闻记者，他今年准备了大力发展“AI+安全”创新应用的提案。
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn
              flat
              color="primary"
              label="详情"
              href="https://baijiahao.baidu.com/s?id=1792384965949548036&wfr=spider&for=pc"
              target="_blank"
            />

            <q-space />
          </q-card-actions>
        </q-card>
        <br />
        <q-card class="col fit" flat bordered>
          <q-img src="../assets/news5.png" />

          <q-card-section>
            <div class="text-overline text-orange-9"></div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              参考 OWASP 10 大 LLM 安全风险，针对生成式 AI
              应用程序构建深度防御安全架构
            </div>
            <div class="text-caption text-grey"></div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn
              flat
              color="primary"
              label="详情"
              href="https://aws.amazon.com/cn/blogs/china/architect-defense-in-depth-security-for-generative-ai-applications-using-the-owasp-top-10-for-llms/"
              target="_blank"
            />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
      <div class="column col fit">
        <q-card class="col fit" flat bordered>
          <q-img src="../assets/news3.jpg" />

          <q-card-section>
            <div class="text-overline text-orange-9"></div>
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
        <br />
        <q-card class="col fit" flat bordered>
          <q-img src="../assets/news6.jpg" />

          <q-card-section>
            <div class="text-overline text-orange-9">By Renuka Nadkarni</div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              2024 年的网络安全：人工智能、可观察性、简单性及其他
            </div>
            <div class="text-caption text-grey">
              回顾过去的一年，网络和安全领域经历了一系列重大进步，也面临着全新的挑战。人工智能
              (AI)
              在网络运营中的创新和日益集成为提高效率和创新创造了新的机会，但也增加了网络架构的复杂性和潜在漏洞。在过去的一年里，还出现了从分散的安全方法到更加统一和简化的解决方案的重大转变，满足了对操作简单性和效率不断增长的需求。
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn
              flat
              color="primary"
              label="详情"
              href="https://www.thefastmode.com/expert-opinion/34768-network-security-in-2024-artificial-intelligence-observability-simplicity-and-beyond"
              target="_blank"
            />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <br />
    <q-separator color="white" size="" />
    <br />

    <div class="row">
      <div class="text-h3 col">专家会议</div>
      <div class="text-h5 col row justify-end"></div>
    </div>

    <br />
    <div class="row justify-center q-gutter-lg bg-index-font">
      <q-card class="col fit" flat bordered>
        <q-img src="../assets/conference1.jpg" />

        <q-card-section>
          <div class="text-overline text-orange-9"></div>
          <div class="text-h5 q-mt-sm q-mb-xs">ACM CCS 2024</div>
          <div class="text-caption text-grey">
            ACM CCS全称为ACM Conference on Computer and Communications
            Security，是国际公认的信息安全领域旗舰会议，与IEEE S&P、USENIX
            Security、NDSS并称为信息安全领域的四大国际顶级学术会议，被中国计算机学会（CCF）列为A类会议，以展示最前沿的安全学术研究及技术创新成果，促进行业交流而享誉全球。
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="分享" />
          <q-btn
            flat
            color="primary"
            label="详情"
            href="https://sigsac.org/ccs/CCS2024/"
            target="_blank"
          />

          <q-space />
        </q-card-actions>
      </q-card>
      <q-card class="col fit" flat bordered>
        <q-img src="../assets/conference2.webp" />

        <q-card-section>
          <div class="text-overline text-orange-9"></div>
          <div class="text-h5 q-mt-sm q-mb-xs">
            Global Forum on the Ethics of Artificial Intelligence 2024
          </div>
          <div class="text-caption text-grey">
            全球人工智能伦理论坛，会议达成了人工智能领域内联合国与私营企业的首次合作。联合国教科文组织与8家全球性科技机构和公司签署了一项人工智能相关协议。协议将结合教科文组织《人工智能伦理问题建议书》中有关人工智能伦理的价值观和原则，规范私营企业设计和使用人工智能系统。本次会议还呼吁建设负责任的人工智能生态系统，并敦促各国推进人工智能监管立法。
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="分享" />
          <q-btn
            flat
            color="primary"
            label="详情"
            href="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics"
            target="_blank"
          />

          <q-space />
        </q-card-actions>
      </q-card>
      <q-card class="col fit" flat bordered>
        <q-img src="../assets/conference3.jpg" />

        <q-card-section>
          <div class="text-overline text-orange-9"></div>
          <div class="text-h5 q-mt-sm q-mb-xs">The AI Safety Summit 2023</div>
          <div class="text-caption text-grey">
            人工智能安全峰会（The AI Safety Summit
            2023）于2023年11月1日~2日在英国巴克斯郡的布莱切利庄园举行，为期两天，吸引了来自世界各地的150名代表，包括政府领导、工业界、学术界和民间社会领袖。这一盛会旨在讨论人工智能（AI）的风险和安全问题，以及如何推动全球合作以确保AI的安全和伦理发展。
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="dark" label="分享" />
          <q-btn
            flat
            color="primary"
            label="详情"
            href="https://uktechbrussels.com/"
            target="_blank"
          />

          <q-space />
        </q-card-actions>
      </q-card>
    </div>
    <br />
    <q-separator color="white" size="" />
    <br />

    <div class="row">
      <div class="text-h3 col">交流活动</div>
      <div class="text-h5 col row justify-end"></div>
    </div>

    <br />
    <div class="row justify-center q-gutter-lg bg-index-font">
      <div class="column col fit">
        <q-card class="col fit" flat bordered>
          <q-card-section>
            <div class="text-overline text-orange-9">
              2024年4月15日 上午9:00 - 下午5:00
            </div>
            <div class="text-overline text-orange-9">线上 - Zoom会议平台</div>
            <div class="text-h5 q-mt-sm q-mb-xs">AI安全前沿研讨会</div>
            <div class="text-caption text-grey">
              本次研讨会旨在探讨AI安全领域的最新进展和挑战。活动将邀请业界专家和学者分享关于AI安全技术、政策、伦理和社会影响的见解和研究成果。参与者将有机会与专家进行互动和讨论，了解AI安全的最新趋势和未来发展方向。
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn flat color="primary" label="详情" target="_blank" />

            <q-space />
          </q-card-actions>
        </q-card>
        <br />
        <q-card class="col fit" flat bordered>
          <q-card-section>
            <div class="text-overline text-orange-9">
              2024年7月5日 上午10:00 - 下午3:00
            </div>
            <div class="text-overline text-orange-9">
              上海市浦东新区张江高科技园区
            </div>
            <div class="text-h5 q-mt-sm q-mb-xs">AI安全企业家圆桌会议</div>
            <div class="text-caption text-grey">
              此次圆桌会议旨在为AI安全领域的企业家和创业者提供一个交流和分享的平台。会议将围绕AI安全创新、商业模式、市场趋势等主题展开讨论。参与者将有机会与行业内的领导者和同行交流经验，探讨AI安全技术的商业应用和发展机遇，促进合作和创新。
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn flat color="primary" label="详情" target="_blank" />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
      <div class="column col fit">
        <q-card class="col fit" flat bordered>
          <q-card-section>
            <div class="text-overline text-orange-9">
              2024年5月20日 上午9:00 - 下午4:00
            </div>
            <div class="text-overline text-orange-9">
              北京市海淀区清华大学计算机科学与技术系
            </div>
            <div class="text-h5 q-mt-sm q-mb-xs">AI安全实践工作坊</div>
            <div class="text-caption text-grey">
              本次工作坊旨在通过实践活动加深参与者对AI安全的理解和应用能力。活动将包括AI安全基础讲解、案例分析、小组讨论和实践操作等环节。参与者将有机会亲自操作AI安全工具，实践如何防御AI系统的安全威胁，并与同行交流心得体会。
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn flat color="primary" label="详情" target="_blank" />

            <q-space />
          </q-card-actions>
        </q-card>
        <br />
        <q-card class="col fit" flat bordered>
          <q-card-section>
            <div class="text-overline text-orange-9">
              2024年8月15日 晚上7:30 - 9:30
            </div>
            <div class="text-overline text-orange-9">
              线上 - Microsoft Teams会议平台
            </div>
            <div class="text-h5 q-mt-sm q-mb-xs">AI安全技术分享会</div>
            <div class="text-caption text-grey">
              本次技术分享会邀请了在AI安全领域有深入研究和丰富经验的技术专家，他们将分享最新的AI安全技术、工具和实践案例。参与者将有机会了解如何有效防御AI系统中的安全威胁，保护数据和隐私，以及如何在开发和部署AI系统时加强安全性。这是一个适合技术人员和研发团队参加的深入交流活动。
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn flat color="primary" label="详情" target="_blank" />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
      <div class="column col fit">
        <q-card class="col fit" flat bordered>
          <q-card-section>
            <div class="text-overline text-orange-9">
              2024年6月10日，下午2:00 - 下午5:00
            </div>
            <div class="text-overline text-orange-9">线上 - Webex会议平台</div>

            <div class="text-h5 q-mt-sm q-mb-xs">AI安全政策与伦理在线论坛</div>
            <div class="text-caption text-grey">
              本次在线论坛聚焦于AI安全的政策制定和伦理考量。活动将邀请政策制定者、伦理学家、技术专家等多方面嘉宾，围绕AI安全的政策框架、伦理指导原则、社会责任等话题进行深入讨论。参与者可以通过线上平台提问和参与讨论，共同探索AI安全领域的道德和政策挑战。
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn flat color="primary" label="详情" target="_blank" />

            <q-space />
          </q-card-actions>
        </q-card>
        <br />
        <q-card class="col fit" flat bordered>
          <q-card-section>
            <div class="text-overline text-orange-9">2024年9月20日 全天</div>
            <div class="text-overline text-orange-9">
              线上 - GoToWebinar平台
            </div>
            <div class="text-h5 q-mt-sm q-mb-xs">AI安全国际在线研讨会</div>
            <div class="text-caption text-grey">
              本次国际研讨会汇集了来自世界各地的AI安全专家和学者，旨在分享全球视角下的AI安全研究进展和挑战。活动内容包括主题演讲、专题报告、小组讨论等，覆盖AI安全的多个方面，如算法鲁棒性、数据保护、跨境合作等。参与者将有机会与国际专家交流，拓宽视野，加深对AI安全全球趋势的理解。
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="分享" />
            <q-btn flat color="primary" label="详情" target="_blank" />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <br />
  </div>
  <router-view />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
// 切换到子路由，隐藏父路由的元素
const isChildRoute = computed(() => {
  return route.matched.length > 2;
});
</script>
<style lang="sass"></style>
