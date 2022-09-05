const myapp=Vue.createApp({
    data()
    {
        return {
            FullName:'Swapnil badgu',
            Age:30,
            Images:'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Hindu-Shiva-God-Wallpaper-Free-Download.jpg'
            
        };
    },
    methods:{
        Agecalculate()
        {
            return this.Age +5;
        },
        Randomnumber()
        {
            return Math.random(); 
            
        }

    }
});
myapp.mount('#user-goal');
