//import Router from "vue-router";
import AllProducts from "../components/AllProducts";
import AllBackpacks from "../components/AllBackpacks";
import AllHandbags from "../components/AllHandbags";
import Product from "../components/Product";
import CartCheckout from "../components/CartCheckout";
import ProductGallery from "../pages/ProductGallery.vue";
import AboutUs from "../pages/AboutUs.vue";
//import FirstPage from "../components/FirstPage.vue";
const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "", name: "All Products", component: AllProducts },
      {
        path: "/backpacks",
        name: "backpacks",
        component: AllBackpacks
      },
      {
        path: "/handbags",
        name: "handbags",
        component: AllHandbags
      },
      {
        path: "/product-details",
        name: "Product",
        component: Product
      },
      {
        path: "/productgallery",
        name: "ProductGallery",
        component: ProductGallery
      },
      {
        path: "/aboutus",
        name: "AboutUs",
        component: AboutUs
      },
      {
        path: "/checkout",
        name: "CartCheckout",
        component: CartCheckout
      }
    ]
  }
];

// Always leave this as last on
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
//export default routes;
