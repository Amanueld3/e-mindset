
<script >
import Layout from "./shared/Layout";

export default {
  layout: Layout,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    AppName: String,
  },
};
</script>

<template>
  <Head>
    <title>Courses</title>
  </Head>
  <section id="contactus-header" class="bg-courses-img">
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
            Our<span class="blue-color"> Courses</span>
          </h1>
          <p class="sub-heading text-white text-width">
            Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod
            tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="content-courses">
    <div class="container">
      <div class="row courses">
        <div class="col-sm-12 col-lg-6 mb-sm-0 mb-lg-5">
          <div class="row">
            <div class="col-6">
              <a href="course-detail.html">
                <figure class="snip1295">
                  <img src="custom/img/courses/course1.png" alt="COURSE IMG" />
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
                <a href="course-detail.html" class="text-decoration-none"
                  ><h1 class="main-heading green-color">
                    Bachelors<span class="blue-color"> in Botany</span>
                  </h1></a
                >
                <p class="sub-heading text-black">
                  Lorem ipsum dolor sit amet, dolor sit amet lab et dolore magna
                  aliqua. Ut enim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
                <a href="" class="course-link">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-6 mb-sm-0 mb-lg-5">
          <div class="row">
            <div class="col-6">
              <a href="course-detail.html">
                <figure class="snip1295">
                  <img src="custom/img/courses/course6.png" alt="COURSE IMG" />
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
                <a href="course-detail.html" class="text-decoration-none"
                  ><h1 class="main-heading green-color">
                    Programming<span class="blue-color"> Skills</span>
                  </h1></a
                >
                <p class="sub-heading text-black">
                  Lorem ipsum dolor sit amet, dolor sit amet lab et dolore magna
                  aliqua. Ut enim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
                <a href="course-detail.html" class="course-link">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-6 mb-sm-0 mb-lg-5">
          <div class="row">
            <div class="col-6">
              <a href="course-detail.html">
                <figure class="snip1295">
                  <img src="custom/img/courses/course3.png" alt="COURSE IMG" />
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
                <a href="course-detail.html" class="text-decoration-none"
                  ><h1 class="main-heading green-color">
                    Theory of<span class="blue-color"> Sports</span>
                  </h1></a
                >
                <p class="sub-heading text-black">
                  Lorem ipsum dolor sit amet, dolor sit amet lab et dolore magna
                  aliqua. Ut enim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
                <a href="course-detail.html" class="course-link">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-6 mb-sm-0 mb-lg-5">
          <div class="row">
            <div class="col-6">
              <a href="course-detail.html">
                <figure class="snip1295">
                  <img src="custom/img/courses/course4.png" alt="COURSE IMG" />
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
                <a href="course-detail.html" class="text-decoration-none"
                  ><h1 class="main-heading green-color">
                    Artificial<span class="blue-color"> Intellegnce</span>
                  </h1></a
                >
                <p class="sub-heading text-black">
                  Lorem ipsum dolor sit amet, dolor sit amet lab et dolore magna
                  aliqua. Ut enim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
                <a href="course-detail.html" class="course-link">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-6">
          <div class="row">
            <div class="col-6">
              <a href="course-detail.html">
                <figure class="snip1295">
                  <img src="custom/img/courses/course5.png" alt="COURSE IMG" />
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
              <div class="course-text mt2">
                <a href="course-detail.html" class="text-decoration-none"
                  ><h1 class="main-heading green-color">
                    English<span class="blue-color"> Literature</span>
                  </h1></a
                >
                <p class="sub-heading text-black">
                  Lorem ipsum dolor sit amet, dolor sit amet lab et dolore magna
                  aliqua. Ut enim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
                <a href="course-detail.html" class="course-link">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-6">
          <div class="row">
            <div class="col-6">
              <a href="course-detail.html">
                <figure class="snip1295">
                  <img src="custom/img/courses/course2.png" alt="COURSE IMG" />
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
                <a href="course-detail.html" class="text-decoration-none"
                  ><h1 class="main-heading green-color">
                    Information<span class="blue-color"> Technology</span>
                  </h1></a
                >
                <p class="sub-heading text-black">
                  Lorem ipsum dolor sit amet, dolor sit amet lab et dolore magna
                  aliqua. Ut enim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
                <a href="course-detail.html" class="course-link">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
