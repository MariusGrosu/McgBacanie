<template>
  <div class="container mt-5">
    <!-- Titlul paginii -->
    <h2 class="text-center">Editare Produse</h2>

    <!-- Tabel pentru afisarea si editarea produselor -->
    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nume</th>
          <th>Pret (RON)</th>
          <th>Detalii</th>
          <th>Actiuni</th>
        </tr>
      </thead>
      <tbody>
        <!-- Iteram prin lista de produse si afisam fiecare produs intr-un rand -->
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <!-- Camp pentru editarea pretului -->
          <td>
            <input
              v-model="product.price"
              type="number"
              class="form-control"
              min="0"
            />
          </td>
          <!-- Camp pentru editarea detaliilor -->
          <td>
            <textarea
              v-model="product.details"
              class="form-control"
              rows="2"
            ></textarea>
          </td>
          <!-- Butoane pentru salvarea si stergerea produsului -->
          <td>
            <button class="btn btn-success btn-sm" @click="saveProduct(product)">
              Salveaza
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="handleDeleteProduct(product.id)"
            >
              Sterge
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductEdit',
  computed: {
    // Mapam getter-ul pentru lista de produse din Vuex
    ...mapGetters('products', ['getProducts']),
    // Returnam o copie a listei de produse pentru a asigura reactivitatea
    products() {
      return [...this.getProducts];
    },
  },
  methods: {
    // Mapam actiunile pentru actualizare si stergere produse
    ...mapActions('products', ['updateProduct', 'deleteProduct']),
    // Metoda pentru salvarea modificarilor unui produs
    saveProduct(product) {
      // Validam campurile produsului
      if (!product.price || product.price < 0 || !product.details.trim()) {
        alert('Toate campurile trebuie completate corect!');
        return;
      }
      // Apelam actiunea Vuex pentru actualizarea produsului
      this.updateProduct(product);
      alert('Produsul a fost actualizat!');
    },
    // Metoda pentru stergerea unui produs
    handleDeleteProduct(productId) {
      if (confirm('Esti sigur ca vrei sa stergi acest produs?')) {
        // Apelam actiunea Vuex pentru stergerea produsului
        this.deleteProduct(productId);
        alert('Produsul a fost sters!');
      }
    },
  },
};
</script>
