<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title> Swiper </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper">
        <swiper-slide>
          <img
            class="banner"
            src="https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa224df9195bd8c86b7a_6181ae8222cefae4ebee33fe_flash-sale-banner-example.png"
            alt="image 1"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="banner"
            src="https://cdn.prod.website-files.com/5b5729421aca332c60585f78/6181a854fe9af42fcf3acd8d_maje-flash-sale-banner-example.png"
            alt="image 2"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="banner"
            src="https://cdn.prod.website-files.com/5b5729421aca332c60585f78/6181aa9c8bf3871751b271b3_resident-flash-sale-banner-example.png"
            alt="image 3"
          />
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { menu, home, person } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import {
  IonBackButton,
  IonButtons,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonPage,
  IonContent,
  IonIcon,
  IonRouterOutlet,
} from '@ionic/vue';

export default defineComponent({
  name: 'swiperScreen',
  components: {
    IonBackButton,
    IonButtons,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonPage,
    IonContent,
    IonIcon,
    IonRouterOutlet,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: {} as any,
    };
  },
  methods: {
    async onSwiper(event: any) {
      this.swiper = event;
    },
  },
  setup() {
    return {
      menu,
      home,
      person,
    };
  },
});
</script>

<style scoped>
.banner {
  width: 100vw;
  height: 260px;
  object-fit: cover;
  object-position: center;
}
</style>
