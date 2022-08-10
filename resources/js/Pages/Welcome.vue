<script>
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
    <title>Home</title>
  </Head>
  <Nav />

  <section id="background-carousal" class="background-carousal">
    <div class="row">
      <div class="col-12">
        <div class="img-area">
          <div
            id="carouselFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div class="carousel-inner ml-lg-10">
              <div class="carousel-item active"></div>
              <div class="carousel-item"></div>
              <div class="carousel-item"></div>
            </div>
          </div>

          <div class="carousal-overlay">
            <div class="main-content">
              <div class="social_icon">
                <ul class="social-icon">
                  <li class="fb">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li class="twit">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="linkedin">
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                  </li>
                  <li class="insta">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                </ul>
              </div>

              <div class="container">
                <div class="row content-carousal">
                  <div
                    class="
                      col-sm-12 col-lg-6
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                  >
                    <div class="row margin-top-sm">
                      <div class="col-12 mini-slider p-0">
                        <div
                          id="carouselExampleSlidesOnly"
                          class="carousel slide image-div"
                          data-ride="carousel"
                        >
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img
                                class="d-block w-100"
                                src="custom\img\box-img-1.png"
                                alt="First slide"
                              />
                            </div>
                            <div class="carousel-item animation1">
                              <img
                                class="d-block w-100"
                                src="custom/img/box-img-2.png"
                                alt="Second slide"
                              />
                            </div>
                            <div class="carousel-item animation2">
                              <img
                                class="d-block w-100"
                                src="custom/img/box-img-2.png"
                                alt="Second slide"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="
                      col-sm-12 col-lg-6
                      d-flex
                      justify-content-center
                      align-items-center
                      col-height
                      text-left
                    "
                  >
                    <div class="col-1 column-display"></div>

                    <div class="detail-sec">
                      <h1 class="main-heading">
                        Education makes proper humanity.
                      </h1>
                      <Link
                        class="btn btn-primary rounded-pill navbar-btn mt-3"
                        href="/register"
                        >Apply Now</Link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="features">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-8 offset-lg-2 text-center">
          <h1 class="main-heading green-color">Courses</h1>
          <p class="sub-heading text-black">
            Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut quis in
            voluptate velit esse cillum.
          </p>
        </div>
      </div>

      <div class="row mt-4 feature-card">
        <div class="col-sm-12 col-md-6 col-lg-4 col-height-features">
          <div class="card box text-center">
            <a href="javascript:void(0)">
              <div class="card-body box__image">
                <div class="feature-icon green-color">
                  <i class="las la-book-open"></i>
                </div>
                <h2 class="card-title">Course Title</h2>
                <p class="card-text sub-heading">
                  Lorem ipsum dolor sit amet, adipi elit et dolore magna, sed do
                  incididunt
                </p>
                <p class="card-text sub-heading green-color">Watch Video</p>
              </div>
            </a>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4 col-height-features">
          <div class="card box text-center">
            <a href="javascript:void(0)">
              <div class="card-body box__image">
                <div class="feature-icon blue-color">
                  <i class="las la-book-open"></i>
                </div>
                <h2 class="card-title">Course Title</h2>
                <p class="card-text sub-heading">
                  Lorem ipsum dolor sit amet, adipi elit et dolore magna, sed do
                  incididunt
                </p>
                <p class="card-text sub-heading blue-color">Watch Video</p>
              </div>
            </a>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4 col-height-features">
          <div class="card box text-center">
            <a href="javascript:void(0)">
              <div class="card-body box__image">
                <div class="feature-icon green-color">
                  <i class="las la-book-open"></i>
                </div>
                <h2 class="card-title">Course Title</h2>
                <p class="card-text sub-heading">
                  Lorem ipsum dolor sit amet, adipi elit et dolore magna, sed do
                  incididunt
                </p>
                <p class="card-text sub-heading green-color">Watch Video</p>
              </div>
            </a>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4 col-height-features">
          <div class="card box text-center">
            <a href="javascript:void(0)">
              <div class="card-body box__image">
                <div class="feature-icon blue-color">
                  <i class="las la-book-open"></i>
                </div>
                <h2 class="card-title">Course Title</h2>
                <p class="card-text sub-heading">
                  Lorem ipsum dolor sit amet, adipi elit et dolore magna, sed do
                  incididunt
                </p>
                <p class="card-text sub-heading blue-color">Watch Video</p>
              </div>
            </a>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4 col-height-features">
          <div class="card box text-center">
            <a href="javascript:void(0)">
              <div class="card-body box__image">
                <div class="feature-icon green-color">
                  <i class="las la-book-open"></i>
                </div>
                <h2 class="card-title">Course Title</h2>
                <p class="card-text sub-heading">
                  Lorem ipsum dolor sit amet, adipi elit et dolore magna, sed do
                  incididunt
                </p>
                <p class="card-text sub-heading green-color">Watch Video</p>
              </div>
            </a>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4 col-height-features">
          <div class="card box text-center">
            <a href="javascript:void(0)">
              <div class="card-body box__image">
                <div class="feature-icon blue-color">
                  <i class="las la-book-open"></i>
                </div>
                <h2 class="card-title">Course Title</h2>
                <p class="card-text sub-heading">
                  Lorem ipsum dolor sit amet, adipi elit et dolore magna, sed do
                  incididunt
                </p>
                <p class="card-text sub-heading blue-color">Watch Video</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="get-admission" class="bg-admission-img">
    <div class="overlay-admission"></div>

    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <div class="admission-text">
            <p class="sub-heading text-white m-0">
              We Believe that education is for everyone.
            </p>
            <h1 class="main-heading text-white mt-2 mb-4">
              Want To Get Enrolled!
            </h1>
            <a class="btn btn-primary rounded-pill blue-btn" href="/register"
              >Apply Now</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
