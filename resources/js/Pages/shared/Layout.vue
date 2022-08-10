<template>
  <Head>
    <title>E-Mindset</title>
  </Head>

  <Nav />

  <slot />

  <Footer />
</template>
<script setup>
import Nav from "./Nav";
import Footer from "./Footer";
</script>