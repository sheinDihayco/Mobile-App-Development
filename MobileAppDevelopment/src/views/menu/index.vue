<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Menu Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <h1 class="text-center menu-title">Welcome to the Menu Page</h1>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonBackButton,
  IonButtons,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonPage,
  IonContent,
} from '@ionic/vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MenuPage',
  components: {
    IonBackButton,
    IonButtons,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonPage,
    IonContent,
  },
});
</script>

<style scoped>
.menu-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 24px;
}

.button-container {
  margin: 0 auto;
  max-width: 300px;
}
</style>
