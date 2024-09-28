var danhGiaList = document.querySelectorAll(rating__check)
var mang = []
danhGiaList.forEach(item=>{
    mang.push[{
        src : item.src,
        type : item.getAttribute('type')
    }]
})
console.log(mang);