
const placas = [{id:1, placa:"3090", marca:"NVIDIA", precio:"1500"},
                {id:2, placa:"3080", marca:"NVIDIA", precio:"1000"},
                {id:3, placa:"3070", marca:"NVIDIA", precio:"750"},
                {id:4, placa:"3060", marca:"NVIDIA", precio:"500"}]

                
export const getFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(placas)
        }, 2000)
    })
}


