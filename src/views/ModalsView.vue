<template>
    <div class="modals" >
        <h1>Modals</h1>
        <div>
            <label>
                Show dark modals?
                <input v-model="showDarkModals" type="checkbox" />
            </label>
        </div>
        <button @click="showModal = true">Show modal</button>
        <component
            v-model="showModal"
            :is="showDarkModals ? ModalDark : Modal"
            title="My modal title (via prop)"
        >
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit nisi dolorum architecto,
                quos, voluptate nemo itaque rerum beatae quo hic. Nobis alias eligendi quidem quasi adipisci
                expedita libero explicabo.</p>
        </component>

    </div>
</template>

<script setup>
/*
    imports
*/
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'

/*
    modals
*/
const showDarkModals= ref(false)
const showModal = ref(false)

</script>

