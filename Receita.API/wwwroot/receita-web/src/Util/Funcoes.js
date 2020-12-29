export const GetEnumLista = (enumerador) => {
    var keys = Object.keys(enumerador)

    return keys.map((key) => {
        return enumerador[key]
    })
}

export const GetEnumDescricao = (enumerador, valor) => {
    for (const key in enumerador) {
        if (Object.hasOwnProperty.call(enumerador, key)) {
            const element = enumerador[key]

            if (element.valor === valor) {
                return element.descricao
            }
        }
    }

    return "";
}