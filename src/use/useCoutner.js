import { computed, nextTick,  onMounted, reactive, watch } from 'vue'

export function useCounter() {
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
        nextTick(() => {
          console.log('do something when counter is updated in the dom, test next tick')
        })
      }

      onMounted(() => {
        console.log('Do stuff related to Counter')
      })

      return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter
      }
}