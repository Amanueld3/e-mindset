


<template>
  <Head>
    <title>Admin | Users</title>
  </Head>
  <section id="contactus-header bg-dark" class="bg-courses-img">
    <AdminNav />
  </section>

  <section id="content-courses">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <h1>Users</h1>
        </div>
        <div class="col-sm-4">
          <input
            v-model="search"
            type="text"
            placeholder="Search..."
            class="form-control form-control-sm rounded"
          />
        </div>
      </div>
    </div>

    <div class="container">
      <table class="table table-striped table-sm table-borderless table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Created at</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users.data" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.firstName + " " + user.lastName }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :links="users.links" />
  </section>
</template>

<script >
import Layout from "../shared/Layout";
import Pagination from "../shared/Pagination";
import AdminNav from "../shared/AdminNav";
import { debounce } from "lodash";

export default {
  layout: Layout,

  components: { Pagination, AdminNav },
  props: {
    users: Object,
    filters: Object,
  },
  data() {
    return {
      search: this.filters.search,
    };
  },
  watch: {
    search: debounce(function (value) {
      this.$inertia.get(
        "users",
        { search: value },
        {
          preserveState: true,
          replace: true,
        }
      );
    }, 500),
  },
};
</script>