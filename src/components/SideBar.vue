<template>
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
                <img src="@/assets/user.jpg" style="width:30px; height:30px" alt="user" class="rounded-circle">
            </div>
        </div>
        <div class="mh-100 mw-50 border m-2 p-2" ><!--team creator-->
            <div class="d-flex justify-content-between align-items-center m-1" v-for="my in mycompute" :key="my"  >
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
            <div class="d-flex justify-content-between ms-4 me-4">
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
            <div class="d-flex justify-content-between ms-4 me-4">
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
            <div class="d-flex justify-content-between ms-4 me-4">
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
            <div class="d-flex justify-content-between ms-4 me-4">
                <div class="d-flex align-items-center">
                    <i class="fa fa-folder-open"></i>
                    <p style="font-weight:bold;"  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Office </p>
                </div>
                
            </div>  
        </div>
        <div>
            <div class="d-flex justify-content-between ms-4 me-4">
                <div class="d-flex align-items-center">
                    <i class="fa fa-folder-open"></i>
                    <p style="font-weight:bold;"  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Legal </p>
                </div>
               
            </div>  
        </div>
        <!--end of folders-->

        <!--last section -->
            <div style="margin-top:100px" class="d-flex justify-content-between ms-4 me-4">
                <div class="d-flex align-items-center">
                  <i class="fa fa-user-plus"></i>
                    <p style="font-weight:bold;"  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Invite Teammates </p>
                </div>
            </div>
            <div class="mh-100 mw-50 border m-2 p-2" >
            <div class="d-flex justify-content-between align-items-center m-1" >
              <p style="font-weight:bold;">Help and first steps </p> 
              <div>
                <button><i style="font-size:10px" class="fa fa-asterisk"></i>+16</button>
                </div> 
            </div>
            </div>
            <div class="mh-100 mw-50 border m-2 p-2" >
            <div class="d-flex justify-content-between align-items-center m-1" >
              <p style="font-weight:bold;">7 days on free trial</p> 
              <div>
               <button type="button" class="btn btn-dark"> Billing</button>
                </div> 
            </div>
            </div>

    </div><!--main div-->
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name: 'SideBar',
        computed : {
          ...mapState({
             mycompute:(state) => state.myvalue,
              subfolder:(state)=> state.mysubvalue
          }),
        //   ...mapState({
        //     subfolder:(state)=> state.myfolder
        //   })
           
         
        }
        
    }
</script>

<style scoped>
.logo {

    width: 50px;
    height: 50px;
}
p{
     margin-bottom: unset;
}

</style>