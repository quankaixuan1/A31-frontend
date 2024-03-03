<template>
  <h1>Graph</h1>
  <div class="charts-container">
    <div ref="pieChartRef" class="chart"></div>
    <div ref="barChartRef" class="chart"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const pieChartRef = ref(null);
const barChartRef = ref(null);

onMounted(() => {
  // 初始化饼图
  const pieChart = echarts.init(pieChartRef.value);
  const pieOption = {
    title: {
      text: '漏洞比例',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: '漏洞类型',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 335, name: '类型一' },
          { value: 310, name: '类型二' },
          { value: 234, name: '类型三' },
          { value: 135, name: '类型四' },
          { value: 1548, name: '其他' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  pieChart.setOption(pieOption);

  // 初始化柱状图
  const barChart = echarts.init(barChartRef.value);
  const barOption = {
    title: {
      text: '攻击次数',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '被攻击次数',
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130, 220, 190, 300, 250, 270]
      }
    ]
  };
  barChart.setOption(barOption);
});
</script>

<style>
.charts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart {
  width: 600px;
  height: 400px;
  margin-bottom: 20px;
}
</style>

