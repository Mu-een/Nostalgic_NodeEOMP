<template>
      <!-- modal -->
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Add User</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add User Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" class="form-control" placeholder="ID"><br>
        <input type="text" class="form-control" placeholder="First Name"><br>
        <input type="text" class="form-control" placeholder="Last Name"><br>
        <input type="text" class="form-control" placeholder="Gender"><br>
        <input type="text" class="form-control" placeholder="Cellphone Number"><br>
        <input type="text" class="form-control" placeholder="Email"><br>
        <input type="text" class="form-control" placeholder="Profile URL">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-warning">Add User</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: 'AddUser'
    }
</script>

<style scoped>
button {
    display: flex;
    margin: auto;
}
</style>