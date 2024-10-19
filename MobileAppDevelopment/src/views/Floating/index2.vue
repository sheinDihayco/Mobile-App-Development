<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>Floating Buttons</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <!-- Floating buttons in different positions -->
    <ion-fab v-if="showFab" slot="fixed" vertical="top" horizontal="start">
      <ion-fab-button>
        <ion-icon :icon="chevronForwardCircle"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="end">
        <ion-fab-button>
          <ion-icon :icon="document"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
          <ion-icon :icon="colorPalette"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
          <ion-icon :icon="globe"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>

    <ion-fab
      v-if="showFab"
      slot="fixed"
      vertical="top"
      horizontal="end"
      :edge="true"
    >
      <ion-fab-button>
        <ion-icon :icon="chevronDownCircle"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="bottom">
        <ion-fab-button>
          <ion-icon :icon="document"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
          <ion-icon :icon="colorPalette"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
          <ion-icon :icon="globe"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>

    <ion-fab v-if="showFab" slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button>
        <ion-icon :icon="chevronUpCircle"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="top">
        <ion-fab-button>
          <ion-icon :icon="document"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
          <ion-icon :icon="colorPalette"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
          <ion-icon :icon="globe"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </ion-content>

  <ion-footer>
    <ion-toolbar class="p-1">
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/home">
            <ion-icon aria-hidden="true" :icon="home" />
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/profile">
            <ion-icon aria-hidden="true" :icon="person" />
            <ion-label>Profile</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/tabs/menu">
            <ion-icon aria-hidden="true" :icon="menu" />
            <ion-label>Menu</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
} from '@ionic/vue';
import {
  chevronDownCircle,
  chevronForwardCircle,
  chevronUpCircle,
  colorPalette,
  document,
  globe,
  home,
  person,
  menu,
} from 'ionicons/icons';

export default defineComponent({
  name: 'float',
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
  },
  setup() {
    const router = useRouter();
    const showFab = ref(true);

    const goBack = () => {
      showFab.value = false;
      router.push('/');
    };

    return {
      showFab,
      chevronDownCircle,
      chevronForwardCircle,
      chevronUpCircle,
      colorPalette,
      document,
      globe,
      home,
      person,
      menu,
      goBack,
    };
  },
});
</script>

<style scoped>
ion-fab {
  margin-top: var(--ion-safe-area-top, 0);
  margin-bottom: var(--ion-safe-area-bottom, 0); /* Combined styles */
}
</style>
