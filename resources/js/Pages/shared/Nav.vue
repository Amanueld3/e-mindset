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
  <header>
    <Link class="scroll-top-arrow" href="#"
      ><i class="fa fa-angle-up"></i
    ></Link>

    <!--    NAVBAR FOR LARGE SCREEN    -->
    <nav
      id="my-nav1"
      class="
        navbar navbar-expand-lg navbar-light
        bg-light
        stroke
        navbar-light-vision
      "
    >
      <div class="container">
        <Link href="/" title="Logo" class="logo text-decoration-none">
          <h1 class="green-color">E-Mindset</h1>
          <span
            class="text-light text-bold"
            style="fonrt-size: 14em"
            v-if="$page.props.authUser"
          >
            {{ $page.props.auth.user.username }}
          </span>
          <h6 class="text-light text-bold" v-if="!$page.props.authUser">
            Guest
          </h6>
        </Link>

        <div class="my-tog-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link
                href="/"
                class="nav-link"
                :class="{ active: $page.component === 'Welcome' }"
                >Home</Link
              >
            </li>

            <li class="nav-item">
              <Link
                href="/courses"
                class="nav-link"
                :class="{ active: $page.component === 'Courses' }"
                >Courses</Link
              >
            </li>
            <!--
            <li class="nav-item">
              <Link
                href="/gallery"
                class="nav-link"
                :class="{ active: $page.component === 'Gallery' }"
                >Gallery</Link
              >
            </li>
-->
            <li class="nav-item">
              <Link
                href="/contact"
                class="nav-link"
                :class="{ active: $page.component === 'Contact' }"
                >Contact</Link
              >
            </li>
            <li class="nav-item" v-if="$page.props.authUser">
              <Link
                href="/dashboard"
                class="nav-link"
                :class="{ active: $page.component === 'Admin/Dashboard' }"
                >Dashboard</Link
              >
            </li>
            <li class="nav-item" v-if="!$page.props.authUser">
              <Link
                href="/login"
                class="nav-link"
                :class="{ active: $page.component === 'Auth/Login' }"
                >Login</Link
              >
            </li>

            <li class="nav-item" v-if="!$page.props.authUser">
              <Link
                href="/register"
                class="btn btn-primary btn-sm rounded-pill green-btn"
                :class="{ active: $page.component === 'Auth/Register' }"
                >Apply Now</Link
              >
            </li>
            <li class="nav-item" v-if="$page.props.authUser">
              <Link href="/logout" method="POST" class="nav-link">Log Out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="outer-window">
      <div class="navbar-content">
        <nav class="navbar1">
          <Link class="close-outerwindow"><i class="las la-times"></i></Link>
          <Link class="logo text-decoration-none">
            <h1 class="green-color">E-Mindset</h1>
          </Link>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link
                href="/"
                class="nav-link"
                :class="{ active: $page.component === 'Welcome' }"
                >Home</Link
              >
            </li>

            <li class="nav-item">
              <Link
                href="/courses"
                class="nav-link"
                :class="{ active: $page.component === 'Courses' }"
                >Courses</Link
              >
            </li>
            <li class="nav-item">
              <Link
                href="/gallery"
                class="nav-link"
                :class="{ active: $page.component === 'Gallery' }"
                >Gallery</Link
              >
            </li>

            <li class="nav-item">
              <Link
                href="/contact active"
                class="nav-link"
                :class="{ active: $page.component === 'Contact' }"
                >Contact</Link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>