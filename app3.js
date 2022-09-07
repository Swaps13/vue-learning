const myAss3=Vue.createApp({
    data()
    {
        return {
            Name:'',
            Finalname:''

        };
    },
    methods:
    {
        finaloutput()
        {
       this.Finalname=this.Name;
        },
        outputoftext(event)
        {
this.Name=event.target.value;

        }
        ,
        clickalerts()
        {
            alert('yes excuted succesfully');
        }
    }
});

myAss3.mount('#assignment');
