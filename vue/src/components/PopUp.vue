<template>
    <div class="popup">
        <div class="popup__content">
            content here
        </div>
    </div>
</template>
<style lang="scss">
.popup {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 9999;
    background-color: rgba($color-black, .8);
 
    &__content {
        @include absoluteCenter;
        width: 60%;
        height: 40%;
        background-color: $color-white;
        box-shadow: 0 1rem 3rem rgba($color-gray-dark-1, .2);


    }
}
</style>