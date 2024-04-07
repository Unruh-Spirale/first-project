<template>
  <div class="home">

    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter"> {{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title</h4>
      <input v-model="counterData.title" type="text">
    </div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const appTitle = 'My Amazing Counter App';

const counter = ref(10);
const counterTitle = ref('My counter');

const counterData = reactive({
  count: 0,
  title: 'My counter'
})

const decreaseCounter = () => {
  counterData.count--;
}
const increaseCounter = () => {
  counterData.count++;
}
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
