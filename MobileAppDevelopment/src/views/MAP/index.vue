<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title> Map </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="map"></div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { menu, home, person } from 'ionicons/icons';
import { GoogleMap } from '@capacitor/google-maps';

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
  name: 'mapScreen',
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
  },
  data() {
    return {
      apiKey: 'PRIVATE',
    };
  },
  methods: {
    async initMap() {
      const mapRef = document.getElementById('map') as HTMLElement;

      const newMap = await GoogleMap.create({
        id: 'my-map',
        element: mapRef,
        apiKey: this.apiKey,
        config: {
          center: {
            lat: 10.231442099819981,
            lng: 123.76719314420394,
          },
          zoom: 16,
        },
      });
    },
  },
  setup() {
    return {
      menu,
      home,
      person,
    };
  },
  async mounted() {
    this.initMap();
  },
});
</script>

<style scoped>
#map {
  display: inline-block;
  width: 100vw;
  height: 100vh;
}
</style>
