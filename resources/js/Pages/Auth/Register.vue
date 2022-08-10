
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
    courses: Object,
  },

  data() {
    return {
      form: useForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        courses: "",
      }),
    };
  },

  methods: {
    submit() {
      this.form.post("register");
    },
  },
};
</script>

<template>
  <Head>
    <title>Register</title>
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
            Apply<span class="blue-color"> Now!</span>
          </h1>
        </div>
      </div>
    </div>
  </section>

  <section id="content-courses pt-0 mt-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 shadow rounded border border-primary">
          <form
            @submit.prevent="submit"
            class="appointment-form contact-form"
            autocomplete="off"
            enctype="multipart/form-data"
          >
            <div class="col-12" id="quote_result"></div>
            <div class="form-group-1">
                     <lable>First Name</lable>
              <small
                class="text-danger"
                v-if="form.errors.firstName"
                v-text="form.errors.firstName"
              ></small>
              <input
                v-model="form.firstName"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Your First Name"
              />
               <lable>Last Name</lable>
              <small
                class="text-danger"
                v-if="form.errors.lastName"
                v-text="form.errors.lastName"
              ></small>
              <input
                v-model="form.lastName"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Your Last Name"
              />
               <lable>Email</lable>
              <small
                class="text-danger"
                v-if="form.errors.email"
                v-text="form.errors.email"
              >
              </small>
              <input
                v-model="form.email"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
               <lable>Phone</lable>
              <small
                class="text-danger"
                v-if="form.errors.phone"
                v-text="form.errors.phone"
              ></small>
              <input
                v-model="form.phone"
                type="number"
                name="phone"
                id="phone"
                placeholder="9.. ... ..."
              />
               <lable>Password</lable>
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
              <div class="select-list">
                  <lable>Select Courses</lable>
                  <select v-model="form.courses" name="courses[]" multiple>
                     <option  v-for="course in courses" :value="course.id">{{course.title}}</option>
                 </select>
              </div> 
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
              ><b>SUBMIT NOW</b>
            </button>
          </form>
          <div class="d-flex justify-content-between mb-3">
            <Link href="/login"><strong>Already have an account?</strong></Link>
            <!-- <Link href="/forget"><strong>Forget password?</strong></Link> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
