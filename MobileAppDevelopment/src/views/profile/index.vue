<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-Title> Profile Screen </ion-Title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <h1 class="px-4 py-3">About Me:</h1>

      <div class="px-5">
        <h5>Sheinalie V. Dihayco</h5>
        <h5>BSIT-4</h5>
        <h5>Tuyan, City of Naga, Cebu</h5>
        <h5>21 years old</h5>
        <h5>Female</h5>
        <h5>February 09, 2003</h5>
      </div>
    </ion-content>
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
});
</script>
