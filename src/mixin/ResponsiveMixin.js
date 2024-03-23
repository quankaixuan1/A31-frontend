import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

export function useResponsiveClass() {
  const windowWidth = ref(window.innerWidth);
  const headerBackgroundColor = ref('transparent');
  const showTopbar = ref(true);

  const handleResize = () => {
    windowWidth.value = window.innerWidth;
  };

  const windowClass = computed(() => {
    if (windowWidth.value > 1500) {
      return 'window-xl';
    }
    // else if (windowWidth.value > 900) {
    //   return 'margin-lg';
    // } else if (windowWidth.value > 600) {
    //   return 'margin-md';
    // }
    else {
      return 'window-lg';
    }
  });



  onMounted(() => {
    window.addEventListener('resize', handleResize);

  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return { windowClass, headerBackgroundColor, showTopbar };
}
