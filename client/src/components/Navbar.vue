<template>
  <div>
    <nav>
      <div class="nav">
        <div class="nav-brand">
          <router-link to="/">vue-express</router-link> 
        </div>
        <div class="nav-links">
          <router-link to="/login"><span class="underline-from-center">login</span></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {

    },
    data() {
      return {

      }
    },
    methods: {

    }
}
</script>

<style scoped>
    .show {
        display: block;
    }
    nav {
        position: relative;
        background-color: #0099FF;
        z-index: 2;
    }
    .nav {
        height: 69px;
        width: 90%;
        max-width: 65rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }
    a {
        color: #ffffff;
        padding: 1.5rem;
    }
    span {
        padding-bottom: 2px;
    }
    .nav-brand {
        padding: 1.5rem;
    }
    .nav-links {
        padding: 1.5rem;
    }

</style>