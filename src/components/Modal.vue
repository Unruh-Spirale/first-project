<template>
    <teleport to=".modals-container">
        <div class="modal">
            <h1>This is modal</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit nisi dolorum architecto,
                quos, voluptate nemo itaque rerum beatae quo hic. Nobis alias eligendi quidem quasi adipisci
                expedita libero explicabo.</p>
            <button>Hide modal</button>
        </div>
    </teleport>
</template>
<script setup>
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