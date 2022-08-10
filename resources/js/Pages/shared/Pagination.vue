<script>

export default {
    props: {
        active: Boolean,
        links: Array,
    },
};
</script>

<template>
<div class="row justify-content-center">
   <div class="col-8">
     <div class="">
    <ul class="pagination mt-10">
       <li class="page-item"   v-for="link in links" :key="link.label" :class="{'disabled': !link.url, 'active': link.active}">
           <Link class="page-link" :href="link.url" v-html="link.label" preserve-scroll />
       </li>
                    
    </ul>
</div>
   </div>
 </div>
</template>

