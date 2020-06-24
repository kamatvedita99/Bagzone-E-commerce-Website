<template>
  <q-layout view="hHh lpR fFf">
    <q-header container style="height: 100px" elevated class="bg-grey-10 text-white">
      <q-tabs align="center" :breakpoint="0">
        <q-route-tab label="all-products" to="/" exact />
        <q-route-tab label="handbags
        " to="/handbags" exact />
        <q-route-tab label="backpacks" to="/backpacks" exact />
      </q-tabs>
      <slot></slot>
    </q-header>
    
    <q-footer reveal elevated class="bg-grey-10 text-white">
      
        <router-link to="/checkout">
          <q-btn color="secondary">View cart</q-btn>
        </router-link>
      
      <q-tabs align="center" :breakpoint="0">
        <q-route-tab label="About" icon="info" to="/aboutus" exact clickable />
        <q-route-tab label="Gallery" icon="collections" to="/productgallery" exact clickable />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


  



<script>
export default {
  components: {}
};
</script>

<style scoped>
.q-drawer.q-router-link--exact-active {
  color: white !important;
}

</style>
