<template>
    <div class="modals" >
        <h1>Modals</h1>
        <button @click="showModal = true">Show modal</button>
        <Modal 
            v-model="showModal"
            @hideModal = "showModal = false"
            title="My modal title (via prop)"
        >
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit nisi dolorum architecto,
                quos, voluptate nemo itaque rerum beatae quo hic. Nobis alias eligendi quidem quasi adipisci
                expedita libero explicabo.</p>
        </Modal>

    </div>
</template>

<script setup>
/*
    imports
*/
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

/*
    modals
*/

const showModal = ref(false)

</script>

