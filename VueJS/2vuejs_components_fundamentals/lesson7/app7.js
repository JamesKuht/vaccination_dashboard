let PlanPickerItemComponent = {
    template: '#plan-picker-item-template',
    props:{
        name: {type: String,  required: true},
        selected: {type: Boolean, default: false}
    },
    methods:{
        select(){
            //this is a custom event. The second argument is the data we want to pass along with the event - the event data is often called the 'payload'
            this.$emit('select', this.name)
        }
    }
}

let PlanPickerComponent = {
    components:{'plan-picker-item': PlanPickerItemComponent},
    template: '#plan-picker-template',
    data(){
        return {
            plans:['The Single', 'The Curious', 'The Addict'],
            selectedPlan:null
        }
    },
    methods:{
        selectPlan(plan){
            this.selectedPlan = plan
        }

    }
}

const app = Vue.createApp({
    components: { PlanPicker: PlanPickerComponent }
})
.mount('#app')