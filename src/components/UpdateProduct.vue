<template>
         <!-- modal -->
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updateProductModal"><i class="bi bi-pencil-square"></i></button>
<div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="updateProductModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="updateProductModalLabel">Update Product Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" class="form-control" placeholder="ID"><br>
        <input type="text" class="form-control" placeholder="Product Name"><br>
        <input type="text" class="form-control" placeholder="Product Description"><br>
        <input type="text" class="form-control" placeholder="Category"><br>
        <input type="text" class="form-control" placeholder="Price"><br>
        <input type="text" class="form-control" placeholder="Image URL"><br>
        <input type="text" class="form-control" placeholder="Quantity"><br>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-warning">Update Product</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h1 {
    color: black;
}
</style>