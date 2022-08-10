<script>
export default {
    props: {
        active: Boolean,
    },
};
</script>

<template>
    <Link  class="nav-link" :class="{'active': active}">
    <slot />
    </Link>
</template>

