<template>
    <teleport to=".modals-container">
        <div class="modal">
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
    title: {
        type: String,
        default: 'no title specifed'
    }
})
/*
    emits
*/
const emit = defineEmits(['hideModal'])
/*
    handle button click
*/
const handleButtonClick = () => {
    console.log('handleButtonClick')
    emit('hideModal')
}
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