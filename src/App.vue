

<template>
  <div id="q-app">
    <div class="container">
      <mainMenu>
        <q-btn class="btnppty" icon="shopping_cart">
          Cart
          <span class="btn-disp" v-if="hasProduct()">{{ getProductsInCart.length }}</span>
        </q-btn>
      </mainMenu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import mainMenu from "./components/Menu";

export default {
  data() {
    return { slide: 1 };
  },
  components: {
    mainMenu
  },
  methods: {
    hasProduct() {
      return this.getProductsInCart.length > 0;
    }
  },
  computed: {
    ...mapGetters(["getProductsInCart"])
  }
};
</script>

<style>
body {
  font-family: cursive;
  background-color: #fafafa;
}

a {
  color: #000;
  text-decoration: none;
}

.container {
  width: 100%;
}

.btn-disp {
  width: 25px;
  height: 25px;
  border-radius: 40%;
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btnppty {
  background-color: #27ae60;
  padding: 0.7em 4.5em;
}
</style>

