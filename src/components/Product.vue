<template>
  <div>
    <div class="product-box">
      <div class="product-image">
        <img :src="currentProduct.image" alt />
      </div>
      <div class="product-info">
        <h3 class="product-title">{{ currentProduct.name }}</h3>
        <h6>{{ currentProduct.details }}</h6>
        <q-rating
          class="adjustalign"
          v-model="currentProduct.ratings"
          size="2em"
          color="yellow"
          readonly
        />
        <span class="product-price">Rs{{ currentProduct.price }}</span>
        <q-btn class="btnppty" @click.native="addProductToCart(currentProduct)">Buy Now</q-btn>
      </div>
    </div>
    <router-link to="/">
      <q-btn color="negative">Back</q-btn>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},

  computed: {
    ...mapGetters({
      currentProduct: "getCurrentProduct"
    })
  },

  methods: {
    ...mapActions(["addProduct"]),
    addProductToCart(product) {
      this.addProduct(product);
    }
  }
};
</script>

<style scoped>
.product-box {
  width: 800px;
  height: 500px;
  margin: 50px auto;
  box-sizing: border-box;
  padding: 1.5em;
  background-color: burlywood;
  border-radius: 7px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.product-image {
  width: 300px;
}

.product-info {
  width: 400px;
  align-self: flex-start;
}

.product-title {
  font-weight: normal;
  font-size: 2.5em;
}

.product-price {
  font-size: 2em;
  font-weight: bolder;
  margin: 0.2em 0.8em;
}

.product-box button {
  width: 300px;
  margin: 0.3em 0;
}

.adjustalign {
  align-items: flex-start;
  margin: 1em 1em;
}

.btnppty {
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 3px;
  color: #fff;
  display: flex;
  justify-content: space-around;
  position: relative;
  background-color: #27ae60;
  padding: 0.7em 5em;
}
</style>
