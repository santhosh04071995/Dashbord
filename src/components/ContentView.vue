<template>
    <div><!--main div-->
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" style="font-weight:bold;" href="#">Products</a>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    <button><i class="fa fa-comments" style="font-size:24px"></i></button>
                    <button><i class="fa fa-cog fa-spin" style="font-size:24px"></i></button>
                </form>

            </div>
        </nav>
        <div>
         
          <div class="d-flex justify-content-between"> <!--sorting-->
           <div class="d-flex" >
            
                <div class="dropdown m-2">
                  <button class="btn bg-white border rounded dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class='fas fa-snowflake ms-1'></i>All Brands
                  </button>
                  <ul class="dropdown-menu text-end" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <div class="dropdown m-2">
                  <button class="btn bg-white border rounded dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Desk
                  </button>
                  <ul class="dropdown-menu text-end" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <div class="dropdown m-2">
                  <button class="btn bg-white border rounded dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Tags
                  </button>
                  <ul class="dropdown-menu text-end" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <div class="dropdown m-2">
                  <button class="btn bg-white border rounded dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-glass"></i> Sort
                  </button>
                </div>
                  <div class="dropdown m-2">
                  <button class="btn bg-white border rounded dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-sliders"></i> Filter
                  </button>
                </div>
            </div>
            <div class="d-flex">
              <div class="dropdown m-2">
                  <button class="btn bg-white border rounded dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                 <i class='far fa-calendar-alt'></i> Meeting
                  </button>
                </div>
                  <div class="dropdown m-2">
                  <button class="btn bg-white border rounded dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                 <i class='fas fa-tasks'></i> Import/Export
                  </button>
                </div>
            </div>


          </div><!--end of sorting-->

          
        <!--table -->
        <table class="table table-bordered">
  <thead>
    <tr>
      <td scope="col" class="d-flex justify-content-between align-items-center">
        <div>
            <input class="form-check-input ms-2" type="checkbox" value="" id="flexCheckDefault">
            Brand
        </div> 
        <i style="font-size:15px"  class="fa fa-plus"></i>
    </td>
      <td scope="col">Description</td>
      <td scope="col">Member</td>
      <td scope="col">Categories</td>
      <td scope="col">Tags</td>
      <td scope="col">Next meeting</td>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="my in mytable" :key="my">
      <td>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <input class="form-check-input ms-2" type="checkbox" value="" id="flexCheckDefault">
            <i class="fab fa-amazon ms-1"></i>{{my.brands}}
          </div>
          <i class='far fa-comment'>{{my.comment}}</i>
        </div>
      </td>
      <td>{{my.Description}}</td>
      <td><img src="@/assets/user.jpg" style="width:30px; height:30px" alt="user" class="rounded-circle">
      <img src="@/assets/user.jpg" style="width:30px; height:30px" alt="user" class="rounded-circle">
      <img src="@/assets/user.jpg" style="width:30px; height:30px" alt="user" class="rounded-circle"></td>
      <td><p id="catlogone" class="border border-2">{{my.category}}</p></td>
      <td><p id="catlogtwo" class="border border-2">{{my.tags}}</p></td>
      <td><p id="catlogthree" class="border border-2">{{my.meet}}</p></td>
    </tr>
    <tr>
      <td class="d-flex justify-content-between">
        <div></div>
        <p>{{count}}count</p>
      </td>
      <td>
        <div class="text-start">
          <i class="fa fa-plus">Add Calculation</i>
        </div>
      </td>
      <td>
        <div class="text-start">
          <i class="fa fa-plus">Add Calculation</i>
        </div>
      </td>
      <td>
        <div class="text-start">
          <i class="fa fa-plus">Add Calculation</i>
        </div>
      </td>
      <td>
        <div class="text-start">
          <i class="fa fa-plus">Add Calculation</i>
        </div>
      </td>
      
    </tr>
       
  </tbody>
</table>

        </div><!--table-->
    </div><!--main div-->
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name : 'ContentView',
        computed : {
            ...mapState({
                mytable:(state)=>state.mytable,
                count:(state) => state.mytable.length
  
            })
        }
    }
</script>

<style scoped>
#catlogone {
  background-color: khaki;
  color: blue ;
  text-align: center;
  width: auto;
    border-radius: 10px;
    
}
#catlogtwo {
      background-color: aqua;
  color: blue ;
  text-align: center;
  width: auto;
    border-radius: 10px;
}
#catlogthree {
      background-color: gold;
  color: blue ;
  text-align: center;
  width: auto;
    border-radius: 10px;
}

</style>