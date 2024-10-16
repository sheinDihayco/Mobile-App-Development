<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-Title> Home Screen </ion-Title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true"> </ion-content>
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
