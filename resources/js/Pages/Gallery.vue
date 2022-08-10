
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
    <title>Gallery</title>
  </Head>
  <section id="gallery-header" class="bg-gallery-img">
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
            Our<span class="blue-color"> Gallery</span>
          </h1>
          <p class="sub-heading text-white text-width">
            Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod
            tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="portfolio-xe" class="bglight padding portfolio-xe">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2 col-sm-12 text-center">
          <div id="flat-filters" class="cbp-l-filters dark bottom30">
            <div data-filter="*" class="cbp-filter-item">
              <span>All</span>
            </div>
            <div data-filter=".tour" class="cbp-filter-item">
              <span>Tour</span>
            </div>
            <div data-filter=".convocation" class="cbp-filter-item">
              <span>Convocation</span>
            </div>
            <div data-filter=".campus" class="cbp-filter-item">
              <span>Campus</span>
            </div>
            <div data-filter=".study" class="cbp-filter-item">
              <span>Studying</span>
            </div>
          </div>
        </div>
      </div>

      <div id="flat-gallery" class="cbp flat-pictures">
        <div class="cbp-item graphic study">
          <a href="img/gallery/portfolio1.png" data-fancybox="gallery1">
            <img src="img/gallery/portfolio1.png" alt="" />
            <div class="overlay">
              <div class="plus-gallery">
                <i class="las la-plus"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="cbp-item graphic campus">
          <a href="img/gallery/portfolio2.png" data-fancybox="gallery1">
            <img src="img/gallery/portfolio2.png" alt="" />
            <div class="overlay">
              <div class="plus-gallery">
                <i class="las la-plus"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="cbp-item graphic tour">
          <a href="img/gallery/portfolio3.png" data-fancybox="gallery1">
            <img src="img/gallery/portfolio3.png" alt="" />
            <div class="overlay">
              <div class="plus-gallery">
                <i class="las la-plus"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="cbp-item graphic convocation">
          <a href="img/gallery/portfolio4.png" data-fancybox="gallery1">
            <img src="img/gallery/portfolio4.png" alt="" />
            <div class="overlay">
              <div class="plus-gallery">
                <i class="las la-plus"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="cbp-item graphic convocation">
          <a href="img/gallery/portfolio5.png" data-fancybox="gallery1">
            <img src="img/gallery/portfolio5.png" alt="" />
            <div class="overlay">
              <div class="plus-gallery">
                <i class="las la-plus"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="cbp-item graphic">
          <a href="img/gallery/portfolio6.png" data-fancybox="gallery1">
            <img src="img/gallery/portfolio6.png" alt="" />
            <div class="overlay">
              <div class="plus-gallery">
                <i class="las la-plus"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="cbp-item graphic campus">
          <a href="img/gallery/portfolio7.png" data-fancybox="gallery1">
            <img src="img/gallery/portfolio7.png" alt="" />
            <div class="overlay">
              <div class="plus-gallery">
                <i class="las la-plus"></i>
              </div>
            </div>
          </a>
        </div>

        <div class="cbp-item graphic study">
          <a href="img/gallery/portfolio8.png" data-fancybox="gallery1">
            <img src="img/gallery/portfolio8.png" alt="" />
            <div class="overlay">
              <div class="plus-gallery">
                <i class="las la-plus"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
