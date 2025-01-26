<template>
  <div class="container mt-4">
    <!-- Titlul paginii -->
    <h2>Detalii Produs</h2>

    <!-- Afisarea informatiilor despre produs -->
    <div v-if="product">
      <p><strong>Nume:</strong> {{ product.name }}</p>
      <p><strong>Pret:</strong> {{ product.price }} RON</p>
      <p><strong>Detalii:</strong> {{ product.details }}</p>
    </div>

    <!-- Mesaj pentru cazul in care produsul nu este gasit -->
    <div v-else>
      <p>Produsul nu a fost gasit.</p>
      <!-- Link pentru a reveni la lista de produse -->
      <router-link to="/products" class="btn btn-secondary">Inapoi la lista</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // Prop pentru a primi ID-ul produsului din URL
  props: ['id'],
  computed: {
    // Mapam getter-ul pentru a accesa lista de produse din Vuex
    ...mapGetters('products', ['getProducts']),
    // Găsim produsul corespunzator folosind ID-ul transmis
    product() {
      return this.getProducts.find((p) => p.id === Number(this.id));
    },
  },
};
</script>
