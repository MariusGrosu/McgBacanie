import { createRouter, createWebHistory } from 'vue-router';

// Importam componentele care vor fi asociate rutelor
import HomePage from '@/views/HomePage.vue';
import ProductList from '@/views/ProductList.vue';
import ProductForm from '@/views/ProductForm.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import ProductEdit from '@/views/ProductEdit.vue';
import AboutUs from '@/views/AboutUs.vue';

// Definim rutele si asociem componentele corespunzatoare
const routes = [
  { path: '/', component: HomePage }, // Ruta principala (acasa)
  { path: '/products', component: ProductList }, // Lista produselor
  { path: '/product-form', component: ProductForm }, // Adaugare produs
  { 
    path: '/products/:id/details', 
    component: ProductDetails, 
    props: true // Permitem transmiterea parametrilor ca props 
  },
  { path: '/product-edit', component: ProductEdit }, // Editare produse
  { path: '/about', component: AboutUs }, // Pagina "Despre noi"
];

// Cream router-ul utilizand modul istoric al browserului
const router = createRouter({
  history: createWebHistory(),
  routes, // Lista rutelor definite mai sus
});

export default router;
