const getSomething = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(13)
        }, 1000)
    })
}

const system = () => {
    console.log('init')
    const prom = getSomething()
    prom.then (some => {
        console.log (`something is ${some}`)
    })
    console.log('end')
}

system()