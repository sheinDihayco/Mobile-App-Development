<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Profile Screen</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <section class="about-me">
        <h1 class="about-title">About Me</h1>
        <div class="details">
          <p><strong>Name:</strong> Sheinalie V. Dihayco</p>
          <p>
            <strong>Course:</strong> Bachelor of Science in Information
            Technology, Year 4
          </p>
          <p><strong>Address:</strong> Tuyan, City of Naga, Cebu</p>
          <p><strong>Age:</strong> 21 years old</p>
          <p><strong>Gender:</strong> Female</p>
          <p><strong>Date of Birth:</strong> February 09, 2003</p>
        </div>
      </section>
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
} from '@ionic/vue';

export default defineComponent({
  name: 'ProfileScreen',
  components: {
    IonToolbar,
    IonTitle,
    IonHeader,
    IonPage,
    IonContent,
  },
});
</script>

<style scoped>
.about-me {
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.about-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
}

.details p {
  font-size: 1rem;
  margin: 8px 0;
  color: #555;
}

.details p strong {
  color: #000;
}
</style>
