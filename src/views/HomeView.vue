<template>
  <div class="home">

    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter"> {{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title</h4>
      <input v-model="counterData.title" type="text">
    </div>

  </div>
</template>

<script setup>
import { computed, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onMounted, onUnmounted, onUpdated, reactive, watch } from 'vue'

const appTitle = 'My Amazing Counter App';

const counterData = reactive({
  count: 0,
  title: 'My counter'
})

watch(() => counterData.count, (newCount, oldCount) => {
  console.log('newCount', newCount)
  if (newCount === 20) {
    alert('Way to go! You made it to 20!!!')
  }
  console.log('oldCount', oldCount)
})

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even';
  return 'odd';
})

const decreaseCounter = (amount) => {
  counterData.count -= amount;
}
const increaseCounter = (amount, event) => {
  console.log(event)
  counterData.count += amount;
}
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
onActivated(() => {
  console.log('onActivated')
})
onDeactivated(() => {
  console.log('onDeactivated')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})
</script>

<!--
  OLD COPOSITION API
<script>
import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(10);

    const decreaseCounter = () => {
      counter.value--;
    }
    const increaseCounter = () => {
      counter.value++;
    }

    return {
      counter,
      decreaseCounter,
      increaseCounter
    }
  }
}
</script>
-->
<!--
  OPTIONS API
<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    decreaseCounter() {
      this.counter--
    },
    increaseCounter() {
      this.counter++
    }
  }
}
</script>
-->


<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>
