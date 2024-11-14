<template>
  <div>
    <p>{{token}}</p>
    <router-link to="/coches" class="btn btn-secondary mb-3"> Volver </router-link>
    <h1>Actualizar Coche</h1>

    <form v-on:submit.prevent="updateCoche()" style="width: 500px; margin: 0 auto">
      <label>Id Coche</label>
      <input type="number" v-model="coche.idCoche" class="form-control" disabled />
      <label class="form-label">Marca</label>
      <input type="text" v-model="coche.marca" class="form-control" />
      <label class="form-label">Modelo</label>
      <input type="text" v-model="coche.modelo" class="form-control" />
      <label class="form-label">Conductor</label>
      <input type="text" v-model="coche.conductor" class="form-control" />
      <label class="form-label">Imagen URL</label>
      <input type="text" v-model="coche.imagen" class="form-control" />
      <button class="btn btn-success">Update</button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from '@/ServiceCoches';
import Global from '@/Global';
const service = new ServiceCoches();

export default {
  name: "UpdateCoche",
  data() {
    return {
      coche: {
        marca: "",
        modelo: "",
        conductor: "",
        imagen: "",
      },
      token: ""
    };
  },
  mounted() {
    let id = this.$route.params.id;

    service.findCoche(id).then((result) => {
      this.coche = result;
    });

    this.token = Global.token;
  },
  methods: {
    updateCoche() {
      service.updateCoche(this.coche).then(() => {
        this.$router.push("/coches");
      });
    },
  },
};
</script>

