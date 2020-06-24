<template>
  <q-page class="containerabout">
    <div class="q-pa-sm row items-start q-gutter-xl">
      <q-card class="my-card1">
        <img src="https://i.imgur.com/QALjZ1D.jpg" />

        <q-card-section>
          <div class="text-h4">Opportunities</div>
        </q-card-section>

        <q-card-section>
          <h6>
            From selling globally to locally,
            from making money on your site to expanding
            your business, we provide
            lot of opportuntiies for you to explore.
          </h6>
        </q-card-section>
      </q-card>

      <q-card class="my-card2">
        <img src="https://i.imgur.com/tvsAokf.jpg" />

        <q-card-section>
          <div class="text-h4">We love our customers!</div>
        </q-card-section>

        <q-card-section>
          <h6>We craft our products with love and provide best shipping facilities to keep our customers happy.</h6>
        </q-card-section>
      </q-card>

      <q-card class="my-card1">
        <img src="https://i.imgur.com/1lsFdR5.png" />

        <q-card-section>
          <div class="text-h4">Contact Us</div>
        </q-card-section>

        <q-card-section>
          <h6>
            Address: 17 Kasturba Gandhi Marg, New Delhi, Delhi 110001
            <br />Phone: 01204569000
            <br />Email:Shoppies@gmail.com
          </h6>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style>
body {
  background-image: url("https://i.imgur.com/PwbOfaCh.jpg");
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  image-rendering: crisp-edges;
}

.my-card1 {
  width: 50%;
  max-width: 400px;
}
.my-card2 {
  width: 70%;
  max-width: 500px;
}
h6 {
  font-style: normal;
  font-size: large;
  font-weight: bolder;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>

