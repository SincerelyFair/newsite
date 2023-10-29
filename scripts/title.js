var i=0;
setInterval(function(){
    var titles=[

"L",
"Lo",
"Los",
"Losi",
"Losin",
"Losing",
"Losing T",
"Losing Ti",
"Losing Tim",
"Losing Time",
"Losing Tim",
"Losing Ti",
"Losing T",
"Losing",
"Losin",
"Losi",
"Los",
"Lo",
"L",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);