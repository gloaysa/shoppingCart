<template>
    <div class="app-total-counter">
        <div class="fa-stack app-total-counter-basket">
            <span class="fas fa-shopping-cart fa-stack-2x"></span>
            <span class="fa-stack-1x app-total-counter-basket--number ">
                {{totalItems}}
            </span>
        </div>
        <div class="app-total-counter--price">Total: <strong>${{totalPriceFixed()}}</strong></div>
    </div>
</template>

<script>

    export default {
        name: 'app-total-counter',
        props: ['totalItems', 'totalPrice'],
        methods: {
            totalPriceFixed: function() {
                return this.totalPrice.toFixed(2)
            }
        }
    }
</script>
<style lang="scss">
    .app-total-counter {
        display: flex;
        font-size: 26px;
        padding: 20px;
        border: 1px solid black;

        &-basket {
            display: block;

            &--number {
                $icon-size: 25px;

                font-size: 20px;
                height: $icon-size;
                width: $icon-size;
                background-color: white;
                border-radius: 50%;
                margin-left: $icon-size;
                line-height: $icon-size;
            }
        }

        &--price {
            margin-left: 40%;
        }
    }
</style>
