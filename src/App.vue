<template>
<div>
  <!-- <div class="container-fluid row">
    <div class="col-3">
      <SideBar />
    </div>
    <div class="col-9">
        <ContentView />
    </div>
  
  </div> -->
  <SimpleView />
  
</div>
  
</template>

<script>
import SimpleView from './components/SimpleView.vue'
//import ContentView from './components/ContentView.vue'
//import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
  SimpleView
}
}
</script>
