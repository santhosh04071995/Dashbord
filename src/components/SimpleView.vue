<template>
    <div><!--main div-->
    <div class="row"> <!--row-->
        <div id="sidebar" class="col-0 col-md-0 col-lg-3">
            <div class="mh-100 mw-100 border">
        <div class="d-flex justify-content-between align-items-center m-2">
            <div class="d-flex">
                <img class="logo ms-2" src="@/assets/logo.png" alt="">
                <div>
                    <p class="text-uppercase">inc</p>
                    <p style="font-weight:bold;">InnovateHub </p>
                </div>
            </div>
            <div>
                <img  src="@/assets/user.jpg" style="width:30px; height:30px" alt="user" class="rounded-circle img-over">
            </div>
        </div>
        <div class="mh-100 mw-50 border m-2 p-2 " ><!--team creator-->
            <div class="d-flex justify-content-between align-items-center m-1 over" v-for="my in mycompute" :key="my"  >
              <p style="font-weight:bold;">{{my.team}} </p> 
              <div>
                <button><i style="font-size:10px" class="fa fa-asterisk"></i>+{{my.score}}</button>
                </div> 
            </div>
           <hr>
            <p>Create a Team</p>
        </div> <!--team creator -->
        <!--folder creater -->
        <div class="d-flex justify-content-between ms-4 me-4">
            <p class="text-uppercase fst-normal ">folders</p>
            <div>
                <i style="font-size:15px" class="fa">&#xf067;</i>
            </div>
        </div>
        <!-- end of folder creator -->
        
        <!--Drop downs -->
        <div>
            <div class="d-flex justify-content-between ms-4 me-4 over">
                <div class="d-flex align-items-center">
                    <i class="fa fa-folder-open"></i>
                    <p style="font-weight:bold;"  data-bs-toggle="collapse" href="#collapseone" role="button" aria-expanded="false" aria-controls="collapseExample">Product </p>
                </div>
                <i class="fa fa-sort-down" data-bs-toggle="collapse" href="#collapseone" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
            </div>  
              
                <div class="collapse ms-4 me-4" id="collapseone">
                    <div class="card card-body" v-for="my in subfolder" :key="my">
                     <p>{{my.name}}</p>   
                    </div>
                </div>
        </div>
        <div>
            <div class="d-flex justify-content-between ms-4 me-4 over">
                <div class="d-flex align-items-center">
                    <i class="fa fa-folder-open"></i>
                    <p style="font-weight:bold;"  data-bs-toggle="collapse" href="#collapsetwo" role="button" aria-expanded="false" aria-controls="collapseExample">Sales </p>
                </div>
                <i class="fa fa-sort-down" data-bs-toggle="collapse" href="#collapsetwo" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
            </div>  
              
                 <div class="collapse ms-4 me-4" id="collapsetwo">
                    <div class="card card-body" v-for="my in subfolder" :key="my">
                     <p>{{my.name}}</p>   
                    </div>
                </div>
        </div>
        <div>
            <div class="d-flex justify-content-between ms-4 me-4 over">
                <div class="d-flex align-items-center">
                    <i class="fa fa-folder-open"></i>
                    <p style="font-weight:bold;"  data-bs-toggle="collapse" href="#collapsethree" role="button" aria-expanded="false" aria-controls="collapseExample">Design </p>
                </div>
                <i class="fa fa-sort-down" data-bs-toggle="collapse" href="#collapsethree" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
            </div>  
              
                 <div class="collapse ms-4 me-4" id="collapsethree">
                    <div class="card card-body" v-for="my in subfolder" :key="my">
                     <p>{{my.name}}</p>   
                    </div>
                </div>
        </div>
        <div>
            <div class="d-flex justify-content-between ms-4 me-4 over">
                <div class="d-flex align-items-center">
                    <i class="fa fa-folder-open"></i>
                    <p style="font-weight:bold;"  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Office </p>
                </div>
                
            </div>  
        </div>
        <div>
            <div class="d-flex justify-content-between ms-4 me-4 over">
                <div class="d-flex align-items-center">
                    <i class="fa fa-folder-open"></i>
                    <p style="font-weight:bold;"  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Legal </p>
                </div>
               
            </div>  
        </div>
        <!--end of folders-->

        <!--last section -->
            <div style="margin-top:100px" class="d-flex justify-content-between ms-4 me-4 over">
                <div class="d-flex align-items-center">
                  <i class="fa fa-user-plus"></i>
                    <p style="font-weight:bold;"  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Invite Teammates </p>
                </div>
            </div>
            <div class="mh-100 mw-50 border m-2 p-2 over" >
            <div class="d-flex justify-content-between align-items-center m-1" >
              <p style="font-weight:bold;">Help and first steps </p> 
              <div>
                <button><i style="font-size:10px" class="fa fa-asterisk"></i>+16</button>
                </div> 
            </div>
            </div>
            <div class="mh-100 mw-50 border m-2 p-2 over" >
            <div class="d-flex justify-content-between align-items-center m-1" >
              <p style="font-weight:bold;">7 days on free trial</p> 
              <div>
               <button type="button" class="btn btn-dark"> Billing</button>
                </div> 
            </div>
            </div>
            </div>
        </div><!--col-lg-3-->
        <div id="content" class=" col-12 col-md-12 col-lg-9 ">
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
        <i style="font-size:15px"  class="fa fa-plus adder"></i>
    </td>
      <td scope="col">Description</td>
      <td scope="col">Member</td>
      <td scope="col">Categories</td>
      <td scope="col">Tags</td>
      <td scope="col">Next meeting</td>
      
    </tr>
  </thead>
  <tbody>
    <tr class="semi-over" v-for="my in mytable" :key="my">
      <td >
        <div class="d-flex justify-content-between align-items-center">
          <div class="sec">
            <input class="form-check-input ms-2" type="checkbox" value="" id="flexCheckDefault">
            <i class="fab fa-amazon ms-1"></i>{{my.brands}}
          </div>
          <i class='far fa-comment adder'>{{my.comment}}</i>
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

        </div><!--col-lg-9-->
    </div><!--end of row-->

    </div><!-- end of main duv-->
</template>

<script>
   import {mapState} from 'vuex'
    export default {
        name: 'SimpleView',
        computed : {
          ...mapState({
             mycompute:(state) => state.myvalue,
              subfolder:(state)=> state.mysubvalue,
               mytable:(state)=>state.mytable,
                count:(state) => state.mytable.length
          }),
       
           
         
        }
        
    }
</script>

<style scoped>
@media (max-width:768px) {       
			#sidebar ,.adder {
				display: none;
			}
            .navbar {
                width: 850px;
            }
            .sec{
                display: contents;
            }
}
           
.logo {

    width: 50px;
    height: 50px;
}
p{
     margin-bottom: unset;
}
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
.over {
     transition: transform .2s; 
}
.over:hover {
     transform: scale(1.1);
}
.semi-over{
    transition: transform .2s; 
}
.semi-over:hover {
    transform: scale(1.06);
}
.img-over{
    transition: transform .2s; 
}
.img-over:hover {
    transform: scale(2.06);
}

</style>