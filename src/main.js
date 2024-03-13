import { createApp } from 'vue'
import App from './App.vue'

//createApp(App).mount('#app')
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            myvalue : [
                {team: 'Design team', score: 1},
                {team: 'marketing team', score: 2},
                {team: 'Developer team', score: 1},
            ],
            mysubvalue : [
                {name: 'Roadmap'},
                {name: 'Feedback'},
                {name: 'Performance'},
                {name: 'Team'},
                {name: 'Analytics'}
            ],
            mytable : [
                {brands : 'wix',comment:27, Description:'developer',category:'automation',tags:'#DigitalTransformation',meet: '30min'},
                {brands : 'shopify',comment:3, Description:'Cloudbased',category:'E-commerce',tags:'#onlineShopping',meet: 'Tommarow'},
                {brands : 'Malchip',comment:12, Description:'Developer',category:'SAAS',tags:'#DaysaleOnline',meet: 'Tommarow'},
                {brands : 'paypal',comment:18, Description:'Programmer',category:'Marketplace',tags:'#SmartFinance',meet: '30min'},
                {brands : 'Disney',comment:0, Description:'B2B',category:'Technology',tags:'#Finance',meet:'30min'},
                {brands : 'Intercorm',comment:2, Description:'AI-driver',category:'Finance',tags:'#UX',meet: '30min'},
                {brands : 'Wix',comment:11, Description:'developer',category:'Transportation',tags:'#onlineShopping',meet: '30min'},
                {brands : 'Google',comment:6,Description:'Cloudbased',category:'Publishing',tags:'#DigitalTransformation',meet: 'Tommarow'},
                {brands : 'wix',comment:3, Description:'developer',category:'Web Services',tags:'#onlineShopping',meet: '30min'},
                {brands : 'shopify',comment:12, Description:'Cloudbased',category:'B2C',tags:'#DigitalTransformation',meet: '30min'},

            ]            
        };
    }
})
const app = createApp(App);
app.use(store);                    
app.mount('#app')