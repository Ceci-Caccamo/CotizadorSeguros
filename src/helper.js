//Obtiene la diferencia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

//Calcula el total a pagar segun la marca
export function calcularMarca(marca) {
  let incremento;
  switch (marca) {
    case "Renault":
      incremento = 1.3;
      break;
    case "Audi":
      incremento = 1.15;
      break;
    case "Fiat":
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
}

//Calcula el tipo de seguro
export function obtenerPlan(plan) {
  return plan === "Terceros" ? 1.2 : 1.5;
}

//Muestra primer letra en mayuscula

export function primerMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
