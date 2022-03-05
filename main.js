var arr=[
    {
       image:"https://fptshop.com.vn/Uploads/Thumbs/2021/12/9/637746607810605486_1.jpg",
        name:'Bàn phím Game có dây Zadez G-850K',
        gia:"350.000"
    },
    {
        image:"https://fptshop.com.vn/Uploads/Thumbs/2021/12/9/637746591606404093_00788805.jpg",
        name:'Bàn phím Game không dây Zadez GT-015DK',
        gia:"1.490.000"
    },
    {
        image:"https://fptshop.com.vn/Uploads/Thumbs/2021/12/9/637746497679362641_00788801.jpg",
        name:'Bộ bàn phím chuột Gaming Prolink GMK-6001M',
        gia:"600.000"
    },
    {
        image:"https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/11/27/637420740261268975_iphone-12-12-mini-3.jpg",
        name:'iPhone 12 64GB',
        gia:"18.499.000"
    },
    {
        image:"https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/12/29/637448604780320091_FRT05439-1.jpg",
        name:'Samsung Galaxy A12 4GB-128GB',
        gia:"3.675.000"
    },
    {
        image:"https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/2/14/637804443051497829_HASP-Redmi-Note-11s-34.jpg",
        name:'Xiaomi Redmi Note 11S 6GB - 128GB',
        gia:"5.890.000"
    },
    {
        image:"https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/11/27/637420740261268975_iphone-12-12-mini-3.jpg",
        name:'iPhone 11 64GB',
        gia:"13.999.000"
    },
    {
        image:"https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/11/4/637716443494620866_8.jpg",
        name:'iPhone 13 Pro Max 128GB',
        gia:"30.690.000"
    }
]
var arr2=[];
var htmls= arr.map(function(n){
    return  n.name;
})
var val='';
var input=document.querySelector('input')
var ul=document.querySelector('#list')
input.addEventListener('input',function(e){
     arr2=[];
     val= e.target.value.trim().toLowerCase();
       console.log( val)
       htmls.map(function(a){
           var ds=a.toLowerCase().includes(val)
           if(ds===true&&!arr2.includes(a)){
            return arr2.push(a)
           }
       })
    render(arr2)
})
function render(array){
    ul.innerHTML=''
    array.map(function(mang){
        var renders=  arr.map(function(doituong){
            var sslast=mang.toLowerCase().includes(doituong.name.toLowerCase());
           if(sslast===true){
            return `
            <div class="item">
            <img src="${doituong.image}" alt="">
            <div class="name-money">
                <h4>${mang}</h4>
                <span>${doituong.gia}</span>
            </div>
            </div>
            `
           }
        })
        ul.innerHTML+=renders.join('')
    })
    
}
function render1(){
    var renders1=  arr.map(function(doituong1){
        return `
        <div class="item">
        <img src="${doituong1.image}" alt="">
        <div class="name-money">
            <h4>${doituong1.name}</h4>
            <span>${doituong1.gia}</span>
        </div>
        </div>
        `
    })
    ul.innerHTML=renders1.join('')
}
render1()