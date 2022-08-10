<script setup>
defineProps({
  canLogin: Boolean,
  canRegister: Boolean,
  laravelVersion: String,
  phpVersion: String,
  AppName: String,
});
</script>

<template>
  <div class="overlay-contact"></div>
  <div class="container">
    <div
      class="
        row
        text-center
        d-flex
        justify-content-center
        align-items-center
        row-height
      "
    >
      <div class="col-12">
        <h1 class="main-heading font-weight-bold green-color">
          Admin<span class="blue-color"> Dashboard!</span>
        </h1>
        <div
          class="d-flex justify-content-around border-bottom border-light py-3"
        >
          <div class="text-light">
            <Link
              href="/dashboard"
              class="font-weight-bold text-decoration-none"
              style="font-size: 1.3em"
              :class="
                $page.component === 'Admin/Dashboard'
                  ? 'text-primary'
                  : 'text-light'
              "
              >Dashboard</Link
            >
          </div>
          <div class="text-lightt">
            <Link
              href="/admin/users"
              class="font-weight-bold text-decoration-none"
              style="font-size: 1.3em"
              :class="
                $page.component === 'Admin/Users'
                  ? 'text-primary'
                  : 'text-light'
              "
              >Users</Link
            >
          </div>
          <div class="text-lightt">
            <Link
              href="/admin/courses"
              class="font-weight-bold text-decoration-none"
              style="font-size: 1.3em"
              :class="
                $page.component === 'Admin/courses/Courses' || $page.component === 'Admin/courses/AddCourse'
                  ? 'text-primary'
                  : 'text-light'
              "
              >Courses</Link
            >
          </div>
          <div class="text-lightt">
            <Link
              href="#"
              class="font-weight-bold text-decoration-none text-light"
              style="font-size: 1.3em"
              :class="{ active: $page.component === '' }"
              >More</Link
            >
          </div>
          <div class="text-lightt">
            <Link
              href="#"
              class="font-weight-bold text-decoration-none text-light"
              style="font-size: 1.3em"
              :class="{ active: $page.component === '' }"
              >More</Link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>