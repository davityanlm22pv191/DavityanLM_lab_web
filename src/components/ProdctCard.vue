<template>
  <div class="col-xl-4 col-md-6 col-sm-12 mb-5">
    <div class="card" style="width: 18rem;">
      <img src="../assets/cake-lemon.jpg" class="card-img-top" alt="Пирог лимонный">
      <div class="card-body">
        <h5 class="card-title">Лимонный пирог</h5>
        <p class="card-text">Вес: 1800<br>Цена: 2240₽</p>
        <a href="#" class="btn btn-secondary">Купить</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdctCard",
  props: null,
  mounted() {
    axios
        .get('http://localhost:3000/api/products')
        .then(response => (this.props = response));
  }
}
</script>

<style scoped>

</style>