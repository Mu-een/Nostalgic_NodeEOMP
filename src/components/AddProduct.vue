<template>
    <!-- modal -->
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#addProductModal">Add Product</button>
<div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addProductLabel">Add Product Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" class="form-control" placeholder="ID"><br>
        <input type="text" class="form-control" placeholder="Product Name"><br>
        <input type="text" class="form-control" placeholder="Product Description"><br>
        <input type="text" class="form-control" placeholder="Category"><br>
        <input type="text" class="form-control" placeholder="Price"><br>
        <input type="text" class="form-control" placeholder="Image URL"><br>
        <input type="text" class="form-control" placeholder="Quantity">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-warning">Add Product</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: 'AddProduct'
    }
</script>

<style scoped>
button {
    display: flex;
    margin: auto;
}
</style>