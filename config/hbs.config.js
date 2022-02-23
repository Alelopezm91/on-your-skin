const hbs = require("hbs");

hbs.registerPartials("./views/partials");

hbs.registerHelper("times", function (n, block){
    let accum="";
    for (let i=1 ; i<=n ; ++i){
    accum += block.fn(i)
    }
 return accum
})

hbs.registerHelper("compare", function (currentPage, comparePage, className) {
    console.log({currentPage, comparePage, className})
    if(currentPage === comparePage){
        return className
    }else{
        return ""
    }
})

hbs.registerHelper("add", function(n1, n2) {
    return n1 + n2
})