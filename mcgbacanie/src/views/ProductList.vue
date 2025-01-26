<template>
  <div class="container mt-4">
    <!-- Titlul paginii -->
    <h2 class="text-center">Lista Produse</h2>

    <!-- Lista de produse -->
    <ul class="list-group">
      <!-- Iteram prin lista de produse din Vuex -->
      <li
        v-for="product in getProducts"
        :key="product.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <!-- Afisam numele si pretul fiecarui produs -->
          <p><strong>{{ product.name }}</strong> - {{ product.price }} RON</p>
        </div>
        <div>
          <!-- Link catre detaliile produsului -->
          <router-link :to="`/products/${product.id}/details`" class="btn btn-primary btn-sm me-2">
            Detalii
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // Mapam getter-ul pentru lista de produse din Vuex
  computed: {
    ...mapGetters('products', ['getProducts']),
  },
};
</script>
