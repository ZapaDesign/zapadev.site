<template>
    <div>
        <div class="icon">5</div>
        <div class="icon">H</div>
    </div>
</template>

<script>
export default {
    name: 'VariableFontsAnicon'
}
</script>

<style lang="scss">
    @import 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1581441981/Anicons/anicons-regular.css';
    
    .icon {
        font-family: "Anicons Regular", sans-serif;
        font-variation-settings: "TIME" 1;
        transition: font-variation-settings 0.4s ease;
        cursor: pointer;
    }
    
    .icon:hover {
        font-variation-settings: "TIME" 100;
        color: darkgreen;
    }
    
</style>
