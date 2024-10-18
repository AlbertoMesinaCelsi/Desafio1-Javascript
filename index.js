precioUnitario = 400000

precioInicial = document.querySelector(".precio-inicial");
precioInicial.innerHTML = (precioUnitario).toLocaleString() 

cantidad = document.querySelector('.cantidad')

contador = Number(cantidad.innerHTML)

precioTotal = document.querySelector('.valor-total')