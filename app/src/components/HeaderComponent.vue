<template>
    <div class="app-header">
        <h1 class="app-product-list__title">{{title}}</h1>
        <hr class="hr-styled">
    </div>
</template>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>
