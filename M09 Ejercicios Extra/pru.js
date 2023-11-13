function buscoInterseccion(array1, array2) {
    // Recibes dos arreglos de números.
    // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
    // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
    // Si no tienen elementos en común, retornar un arreglo vacío.
    // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
    // Tu código:
    res = array1.filter(e => array2.includes(e));


    return res
 }

 array1 = [4,2,3]
 array2 = [1,3,4]

 console.log(buscoInterseccion(array1, array2))


