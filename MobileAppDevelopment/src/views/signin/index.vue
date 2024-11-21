<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-Title> Sign In Screen </ion-Title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <section class="vh-100 px-2 py-3">
        <div class="container-fluid h-custom">
          <div
            class="row d-flex justify-content-center align-items-center g-2 h-100"
          >
            <!-- Image Section -->
            <div class="col-md-6 col-lg-5 col-m-4 text-center">
              <img
                src="../../../image/image.webp"
                class="img-fluid custom-img"
                alt="Sample image"
              />
            </div>

            <!-- Form Section -->
            <div class="col-md-6 col-lg-5 col-m-4 signin">
              <form>
                <!-- Social Login -->
                <div
                  class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-2"
                >
                  <p class="lead fw-normal mb-1 me-2" style="font-size: 0.9rem">
                    Sign in with
                  </p>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-sm btn-primary btn-floating mx-1"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-sm btn-primary btn-floating mx-1"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-sm btn-primary btn-floating mx-1"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <!-- Divider -->
                <div class="divider d-flex align-items-center my-3">
                  <p
                    class="text-center fw-bold mx-2 mb-0"
                    style="font-size: 0.9rem"
                  >
                    Or
                  </p>
                </div>

                <!-- Email Input -->
                <div data-mdb-input-init class="form-outline mb-3">
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control form-control-sm"
                    placeholder="Enter a valid email address"
                    style="font-size: 0.8rem"
                  />
                  <label
                    class="form-label"
                    for="form3Example3"
                    style="font-size: 0.8rem"
                    >Email address</label
                  >
                </div>

                <!-- Password Input -->
                <div data-mdb-input-init class="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control form-control-sm"
                    placeholder="Enter password"
                    style="font-size: 0.8rem"
                  />
                  <label
                    class="form-label"
                    for="form3Example4"
                    style="font-size: 0.8rem"
                    >Password</label
                  >
                </div>

                <!-- Remember Me Checkbox -->
                <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check mb-0">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                      style="width: 0.8rem; height: 0.8rem"
                    />
                    <label
                      class="form-check-label"
                      for="form2Example3"
                      style="font-size: 0.8rem"
                      >Remember me</label
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ion-content>
    <ion-footer>
      <ion-toolbar class="p-1">
        <button slot="end" class="btn btn-primary w-25" @click="nextScreen()">
          Sign In
        </button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonToolbar,
  IonTitle,
  IonHeader,
  IonPage,
  IonContent,
  IonFooter,
} from '@ionic/vue';

export default defineComponent({
  name: 'SignInScreen',
  components: {
    IonToolbar,
    IonTitle,
    IonHeader,
    IonPage,
    IonContent,
    IonFooter,
  },
  methods: {
    async nextScreen() {
      this.$router.push('./index');
    },
  },
});
</script>

<style>
.divider:after,
.divider:before {
  content: '';
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
.custom-img {
  max-width: 75%; /* Adjust this percentage as needed */
  height: auto; /* Maintain aspect ratio */
  margin: 0 auto; /* Center the image if needed */
  display: block; /* Ensure the image is block-level */
  margin-top: -25%;
}
.signin {
  margin-top: -70%;
}
.page {
  width: 100vw;
  height: 100vh;
}
</style>
