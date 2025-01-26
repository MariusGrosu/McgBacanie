<template>
  <div class="container mt-5">
    <!-- Sectiunea de bun venit -->
    <div class="text-center">
      <h1 class="display-4 text-primary">Bine ai venit pe McgBacanie</h1>
      <p class="lead mt-3 text-secondary">
        Un hot dog clasic? Un snack cald? Le gasesti la McgBacanie!
      </p>
    </div>

    <!-- Sectiunea cu carduri -->
    <div class="row mt-5">
      <!-- Card 1: Produse de Calitate -->
      <div class="col-md-4">
        <div class="card shadow" style="border-color: #6a1b9a;">
          <div class="card-body">
            <h5 class="card-title text-primary">Produse de Calitate</h5>
            <p class="card-text text-muted">
              Fa cunostinta cu: Meniuri Combo, Direct din cuptor, Hot Dog, Kebab
            </p>
            <!-- Link catre lista de produse -->
            <router-link to="/products" class="btn" style="background-color: #6a1b9a; color: white;">
              Vezi Produsele
            </router-link>
          </div>
        </div>
      </div>

      <!-- Card 2: Adauga Produs -->
      <div class="col-md-4">
        <div class="card shadow" style="border-color: #1565c0;">
          <div class="card-body">
            <h5 class="card-title text-primary">Adauga Produs</h5>
            <p class="card-text text-muted">
              Adaugare produse!
            </p>
            <!-- Link catre formularul de adaugare produse -->
            <router-link to="/product-form" class="btn" style="background-color: #1565c0; color: white;">
              Adauga Produse
            </router-link>
          </div>
        </div>
      </div>

      <!-- Card 3: Editare Produse -->
      <div class="col-md-4">
        <div class="card shadow" style="border-color: #7e57c2;">
          <div class="card-body">
            <h5 class="card-title text-primary">Editare Produse</h5>
            <p class="card-text text-muted">
              Modifica produsele existente in lista.
            </p>
            <!-- Link catre pagina de editare produse -->
            <router-link to="/product-edit" class="btn" style="background-color: #7e57c2; color: white;">
              Editeaza Produse
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage', // Numele componentei
};
</script>

<style scoped>
/* Culoare principala utilizata in titluri */
.text-primary {
  color: #6a1b9a !important;
}

/* Culoare secundara pentru subtitluri */
.text-secondary {
  color: #9c27b0 !important;
}

/* Stilizare carduri */
.card {
  border-radius: 10px; /* Colturile rotunjite ale cardurilor */
  overflow: hidden; /* Asigura ca orice continut care depaseste este ascuns */
}

/* Titlurile cardurilor */
.card-title {
  font-weight: bold; /* Titluri ingrosate */
}

/* Dimensiunea textului din carduri */
.card-text {
  font-size: 14px;
}
</style>
