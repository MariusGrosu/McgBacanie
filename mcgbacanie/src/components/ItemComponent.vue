<template>
  <!-- Element de lista pentru un produs -->
  <li>
    <!-- Afisam numele si pretul produsului -->
    {{ product.name }} - {{ product.price }} RON
    <!-- Buton pentru stergerea produsului -->
    <button @click="$emit('delete-product', product.id)">Sterge produsul</button>
  </li>
</template>

<script>
export default {
  // Definim proprietatea product pentru a primi date despre produs
  props: ["product"],
};
</script>
