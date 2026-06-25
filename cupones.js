const cupones = [

{
categoria:“🔥 Relámpago”,
titulo:“12% OFF”,
descuento:“Tope $260”,
minimo:“Compra mínima $2,000”,
codigo:“MELI12YA”,
link:“https://meli.la/2n7c8Pu”,
activo:true
},

{
categoria:“🏦 Bancario”,
titulo:“10% OFF”,
descuento:“Tope $700”,
minimo:“Compra mínima $4,500”,
codigo:“BBVAGOL”,
link:“https://meli.la/12Wui4z”,
activo:true
}

];

const lista = document.getElementById(“listaCupones”);
const contador = document.getElementById(“contador”);

let total = 0;

cupones.forEach((c,i)=>{

if(!c.activo) return;

total++;

lista.innerHTML += `

<div class="cupon">
<h3>${c.categoria}</h3>
<p><strong>${c.titulo}</strong></p>
<p>${c.descuento}</p>
<p>${c.minimo}</p>
<br>
<div id="cup${i}" style="
font-size:24px;
font-weight:bold;
letter-spacing:3px;
margin-bottom:15px;
">
************
</div>

🚀 Copiar y Activar

</button>
</div>

`;

});

contador.innerHTML =
“🎟️ Cupones activos: “ + total;

function activarCupon(codigo,link,id){

navigator.clipboard.writeText(codigo);

document.getElementById(id).innerHTML = codigo;

setTimeout(function(){

window.location.href = link;

},500);

}