<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="2" img-src="https://i.imgur.com/tvsAokf.jpg" />
      <q-carousel-slide :name="3" img-src="https://i.imgur.com/rIIReDh.jpg" />
      <q-carousel-slide :name="4" img-src="https://i.imgur.com/jS52UL2.jpg" />
    </q-carousel>
    <h4>
      <b>Our Gallery items...</b>
    </h4>
  </div>
</template>
    



<script>
export default {
  data() {
    return { slide: 1 };
  }
};
</script>

<style>
</style>
