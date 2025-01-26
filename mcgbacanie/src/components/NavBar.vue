<template>
  <!-- Navbar principal -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- Link catre pagina principala -->
      <router-link to="/" class="navbar-brand">McgBacanie.ro</router-link>

      <!-- Buton pentru toggling in cazul ecranelor mici -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Sectiunea cu elemente de navigare -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto"> <!-- Elemente mutate la dreapta -->
          <!-- Link catre Lista Produse -->
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Lista Produse</router-link>
          </li>
          <!-- Link catre Adaugare Produs -->
          <li class="nav-item">
            <router-link to="/product-form" class="nav-link">Adauga Produs</router-link>
          </li>
          <!-- Link catre pagina Despre Noi -->
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Despre noi</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
