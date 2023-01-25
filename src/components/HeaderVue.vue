<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="">CoffeeBean</a>
        <div>
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link mx-2" aria-current="page" href="">Меню</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'DeliveryPage'}">Доставка</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="">О нас</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="">Отзыв</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>



<script>


export default {}

</script>