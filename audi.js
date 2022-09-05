const car=[{
    color:'Black',
    sped:'120Kmph',
    brand:'Audi',
    start: function(){
        console.log('Car started');
    },
    stop : function(){
        console.log('Cae stopped');
    },
},    
    {
        color:'Red',
        speed: '100Kmph',
        brand:'BMW',
        start:function(){
            console.log('Car Started');

        },
        stop : function(){
            console.log('Cae stopped');
    },

},]
for ([key.value]of Object.entries(car)){
    console.log(`My car is ${value.brand}' and color is ${value.color}`)
}