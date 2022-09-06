const MyEvents=Vue.createApp({
    data()
    {
        return{
            Counter :0,
            Name:'',
            Confirmedname:''
        };
    },
    methods:

    {
        confirmname()
        {
            this.Confirmedname=this.Name;
        },

        submitForm(){
            alert('Submitted');
        },
        
        SetName(event,LastName)
        {
            this.Name=event.target.value + ''+LastName;
        },
        Add(num)
        {
            this.Counter=this.Counter+num;
        },
        Minus(num)
        {
            this.Counter=this.Counter-num;
        }
    }
});

MyEvents.mount('#user-goal')