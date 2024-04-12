<template>
    <teleport to=".modals-container">
        <div 
            v-if="modelValue"
            class="modal"
        >
            <h1>{{ title }}</h1>
            <slot />
            <button @click="handleButtonClick">Hide modal</button>
            <div>
                Username is {{ userData.username }} jupiii
            </div>
        </div>
    </teleport>
</template>

<script setup>
/*
 imports
*/
import { inject } from 'vue';

/*
    props
*/
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'no title specifed'
    }
})
/*
    emits
*/
const emit = defineEmits(['update:modelValue'])
/*
    handle button click
*/
const handleButtonClick = () => {
    console.log('handleButtonClick')
    emit('update:modelValue', false)
}
/*
 user data
*/
const userData = inject('userData')

</script>

<style>
.modal{
    background: beige;
    color: black;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>