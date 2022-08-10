
<script>
import Layout from "../shared/Layout";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  layout: Layout,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    AppName: String,
  },

  data() {
    return {
      form: useForm({
        login: "",
        password: "",
      }),
    };
  },

  methods: {
    submit() {
      this.form.post("login");
    },
  },
};
</script>

<template>
  <Head>
    <title>Login</title>
  </Head>
  <section id="contactus-header" class="bg-courses-img">
    <div class="overlay-contact"></div>
    <div class="container">
      <div
        class="row text-center d-flex justify-content-center align-items-center"
        style="height: 40vh"
      >
        <div class="col-12">
          <h1 class="font-weight-bold green-color main-heading">
            Login<span class="blue-color"> Now!</span>
          </h1>
        </div>
      </div>
    </div>
  </section>

  <section id="content-courses pt-0 mt-0">
    <div class="container">
      <div class="row justify-content-center shadow">
        <div class="col-md-5 mt-4 shadow rounded border border-primary">
          <form
            @submit.prevent="submit"
            class="appointment-form contact-form"
            autocomplete="off"
          >
            <div class="col-12" id="quote_result"></div>
            <div class="form-group-1">
              <small
                class="text-danger"
                v-if="form.errors.email"
                v-text="form.errors.email"
              >
              </small>
              <small
                class="text-danger"
                v-if="form.errors.phone"
                v-text="form.errors.phone"
              >
              </small>
              <input
                v-model="form.login"
                type="text"
                name="login"
                id="login"
                placeholder="Email or Phone"
              />

              <small
                class="text-danger"
                v-if="form.errors.password"
                v-text="form.errors.password"
              ></small>
              <input
                v-model="form.password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <!-- <div class="select-list">
                <select name="course" id="course_type" class="la-angle-down">
                  <option value="course">Course to Apply</option>
                  <option value="society">Society</option>
                  <option value="language">Language</option>
                </select>
              </div> -->
            </div>

            <button
              type="submit"
              class="
                btn btn-large btn-primary
                contact-btn
                w-100
                text-white
                modal_contact_btn
              "
              id="submit_btn"
              :disabled="form.processing"
            >
              <i
                class="fa fa-spinner fa-spin mr-2 d-none"
                aria-hidden="true"
              ></i
              ><b>LOGIN</b>
            </button>
          </form>
          <div class="d-flex justify-content-between mb-3">
            <Link href="/register"
              ><strong>Don't have an account?</strong></Link
            >
            <Link href="/forget"><strong>Forget password?</strong></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
