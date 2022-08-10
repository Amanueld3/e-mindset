
<template>
  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center footer-content">
          <ul class="footer-icon">
            <li class="footer_list">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li class="footer_list">
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li class="footer_list">
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li class="footer_list">
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
          <p class="sub-heading footer_text text-black">
            <i class="far fa-copyright"></i>2022 E-Mindset. Powered by Wondimu
            Negash
          </p>

          <p class="sub-heading footer_text text-black">
            Made by Amanuel Desalegn |
            <Link
              href="tel:+251963732919"
              class="font-weight-bolder text-decoration-none"
              >+251963732919</Link
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { Inertia } from "@inertiajs/inertia";

let form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
});

let submit = () => {
  Inertia.post("/users", form);
};
</script>