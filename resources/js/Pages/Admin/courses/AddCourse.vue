
<template>

  <Head>
    <title>Admin | Add Course</title>
  </Head>
  <section
    id="contactus-header bg-dark"
    class="bg-courses-img"
  >
    <AdminNav />
  </section>
  <section id="content-courses">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 rounded border border-primary">
          <div class="card shadow">
            <div class="card-header">
              <div class="d-flex justify-content-between">
                <div>Add Course</div>
                <Link
                  class="btn btn-primary btn-sm"
                  href="/admin/courses"
                >Course Lists</Link>
              </div>
            </div>
            <div class="card-body bg">
              <form
                @submit.prevent="submit"
                class="appointment-form contact-form"
                autocomplete="off"
                enctype="multipart/form-data"
              >
                <div
                  class="col-12"
                  id="quote_result"
                ></div>
                <div class="form-group-1">
                <lable class="mt-5">Title</lable>
                  <small
                    class="text-danger"
                    v-if="form.errors.title"
                    v-text="form.errors.title"
                  ></small>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    v-model="form.title"
                    placeholder="Type Course Title ..."
                  />
                 
                  <div class="">
                   <lable class="mt-5">Description</lable>
                  <small
                    class="text-danger"
                    v-if="form.errors.description"
                    v-text="form.errors.description"

                  ></small>
                    <ckeditor
                      id="description"
                      name="description"
                      :editor="editor"
                      v-model="form.description"
                      class="mb-5"
                      :config="editorConfig"
                    ></ckeditor>
                  </div>
                  <div class="mt-4">
                  <lable >Upload Video</lable>
                  <small
                    class="text-danger"
                    v-if="form.errors.courseCover"
                    v-text="form.errors.courseCover"
                  ></small>
                  <input
                    type="file"
                    name="courseCover"
                    id="courseCover"
                    @input="form.courseCover = $event.target.files[0]"
                  />
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
                >
                  <i
                    class="fa fa-spinner fa-spin mr-2 d-none"
                    aria-hidden="true"
                  ></i><b>SUBMIT NOW</b>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script >
import Layout from "../../shared/Layout";
import AdminNav from "../../shared/AdminNav";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  layout: Layout,
  components: { AdminNav },

  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        toolbar: [
          "Heading",
          "|",
          "bold",
          "italic",
          "fontsize",
          "alignment",
          "|",
          "fontColor",
          "fontBackgroundColor",
          "|",
          "link",
          "blockQuote",
          "|",
          "numberedList",
          "bulletedList",
          "todoList",
          "|",
          "insertTable",
          "|",
          "undo",
          "redo",
        ],
        alignment: {
          options: ["left", "right", "center", "justify"],
        },
        shouldNotGroupWhenFull: true,
      },
      dataToSave: "",
      form: useForm({
        title: "",
        description: "",
        courseCover: "",
      }),
    };
  },

  methods: {
    submit() {
      this.form.post("/admin/courses");
    },
  },
};
</script>