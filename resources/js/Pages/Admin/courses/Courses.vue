


<template>

  <Head>
    <title>Admin | Courses</title>
  </Head>
  <section
    id="contactus-header bg-dark"
    class="bg-courses-img"
  >
    <AdminNav />
  </section>
  <section id="content-courses">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <Link
            class="btn btn-primary btn-sm"
            href="/admin/courses/create"
          >Add Course</Link>
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
      <!-- <div v-if="courses.data > 0"> -->
      <div
        class="row courses justify-content-center"
        v-for="course in courses.data"
        :key="course.id"
      >

        <div class="col-md-9 my-3">
          <div class="row">
            <div class="col-6">
              <a href="#">
                <figure class="snip1295">
                  <video
                    ref="videoRef"
                    :src="course.file_path"
                    id="video-container"
                    width="100%"
                    controls
                  ></video>
                  <div class="border one">
                    <div></div>
                  </div>
                  <div class="border two">
                    <div></div>
                  </div>
                </figure>
              </a>
            </div>
            <div class="col-6">
              <div class="course-text mt-2">
                <a
                  href="course-detail.html"
                  class="text-decoration-none"
                >
                  <h1 class="main-heading green-color">
                    {{ course.title }}
                  </h1>
                </a>
                <p
                  class="sub-heading text-black"
                  v-html="course.description "
                ></p>
                <a
                  href="course-detail.html"
                  class="course-link"
                >Read More</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- </div>
      <div v-else>
        <p>No data retrived</p>
      </div> -->

      <Pagination :links="courses.links" />
    </div>
  </section>
</template>

<script >
import Layout from "../../shared/Layout";
import AdminNav from "../../shared/AdminNav";
import Pagination from "../../shared/Pagination";
import { debounce } from "lodash";

export default {
  layout: Layout,

  components: { Pagination, AdminNav },

  props: {
    courses: Object,
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
        "courses",
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