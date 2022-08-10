


<template>
  <Head>
    <title>Admin | Dashboard</title>
  </Head>
  <section id="contactus-header bg-dark" class="bg-courses-img">
    <AdminNav />
  </section>
  <section id="content-courses">
    <div class="container">Admin</div>
  </section>
</template>

<script >
import Layout from "../shared/Layout";
import AdminNav from "../shared/AdminNav";
export default {
  layout: Layout,
  components: { AdminNav },
};
</script>