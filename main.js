
var son = prompt ("Son kiriting");


if (son > 0 && son < 11) {
    for ( let i=1; i < 11; ++i ) {
     console.log(`${son} * ${i} = ${ son * i }`);
    }
} else if (son > 11) {
    alert ("siz notogri qiymat kiritingiz")
}