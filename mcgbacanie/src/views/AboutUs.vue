<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4 text-primary">Despre McgBacanie</h2>
    <div class="card shadow">
      <div class="card-body">
        <p class="lead">
          McgBacanie este o aplicatie miniCRM dedicata gestionarii si vanzarii produselor tale. 
          Aceasta iti ofera functionalitati simple si eficiente pentru:
        </p>
        <ul>
          <li>Adaugarea si editarea produselor</li>
          <li>Gestionarea detaliilor produselor</li>
          <li>Stergerea produselor care nu mai sunt disponibile</li>
          <li>Vizualizarea listei de produse</li>
        </ul>
        <p>
          Scopul nostru este sa simplificam procesul de gestionare al produselor tale intr-un mod accesibil si rapid.
        </p>
        <p>
          Multumim ca ai ales McgBacanie!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style scoped>
.text-primary {
  color: #6a1b9a !important;
}

.card {
  border-radius: 10px;
  overflow: hidden;
  border-color: #6a1b9a;
}

.card-body {
  font-size: 16px;
  color: #555;
}
</style>
