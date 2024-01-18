export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) {
    // every retorna valor verdadeiro apenas se a função callback retornar verdadeiro para todos os itens da lista 1 
    return lista1.every((itemLista1) => lista2.includes(itemLista1)) 
}