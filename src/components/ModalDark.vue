<template>
    <teleport to=".modals-container">
        <div 
            v-if="modelValue"
            class="modal-dark"
        >
            <h1>{{ title }}</h1>
            <slot />
            <button @click="handleButtonClick">Hide modal</button>
        </div>
    </teleport>
</template>

<script setup>
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
</script>

<style>
.modal-dark{
    background: #333;
    color: white;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>