<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Modal</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-button expand="block" @click="openModal">Open</ion-button>
      <p>{{ message }}</p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  modalController,
} from '@ionic/vue';

import Modal from '@/views/Modal/modal.vue';
import { ref, defineComponent } from 'vue';
import { IonBackButton, IonButtons, IonRouterOutlet } from '@ionic/vue';
import { menu, home, person } from 'ionicons/icons';

export default defineComponent({
  name: 'modalPage',
  components: {
    IonButton,
    IonBackButton,
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonRouterOutlet,
  },
  setup() {
    const message = ref(
      'This modal example uses the modalController to present and dismiss modals.'
    );

    const openModal = async () => {
      const modal = await modalController.create({
        component: Modal,
      });

      await modal.present();

      const { data, role } = await modal.onWillDismiss();

      if (role === 'confirm') {
        message.value = `Hello, ${data}!`;
      }
    };

    return {
      message,
      openModal,
      menu,
      home,
      person,
    };
  },
});
</script>
