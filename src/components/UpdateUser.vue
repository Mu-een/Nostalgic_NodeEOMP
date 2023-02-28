<template>
     <!-- modal -->
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updateModal"><i class="bi bi-pencil-square"></i></button>
<div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="updateModalLabel">Update User Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" class="form-control" placeholder="ID"><br>
        <input type="text" class="form-control" placeholder="First Name"><br>
        <input type="text" class="form-control" placeholder="Last Name"><br>
        <input type="text" class="form-control" placeholder="Gender"><br>
        <input type="text" class="form-control" placeholder="Cellphone Number"><br>
        <input type="text" class="form-control" placeholder="Email"><br>
        <input type="text" class="form-control" placeholder="Password"><br>
        <input type="text" class="form-control" placeholder="Profile URL"><br>
        <input type="date" class="form-control" placeholder="Date Joined">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-warning">Update User</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: 'UpdateUser'
    }
</script>

<style scoped>
h1 {
    color: black;
}
</style>