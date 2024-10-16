<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-Title> Home Screen </ion-Title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <h1 class="px-4 py-5 text-center">Welcome!</h1>
      <div class="px-4 py-5 text-center">
        <h1>Activity 15:</h1>
        <h1>Mobile App Development</h1>
        <h1>using Ionic Framework</h1>
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
