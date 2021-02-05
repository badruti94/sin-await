
/* 
cuci panci
cuci piring
isi air
panasin air
masukin mie
siapkan mie

 */

//# JS Biasa

const mulaiBiasa = () => {
    console.log("cuci panci");
    console.log("cuci piring");
    setTimeout(() => {
        console.log('isi air');
    }, 1000);
    console.log('panasin air');
    console.log('masukin mie');
    console.log('siapkan mie');
}

//# Dengan Promise
const cuciPanci = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('log:cuci panci');
            resolve('cuci panci');
        }, 1000)
    });
}

const cuciPiring = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`log:piring dicuci`)
            resolve('piring dicuci')
        }, 1000)
    });
}

const isiAir = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('log: isi air')
            resolve('air diisi');
        }, 1000)
    });
}

const panasinAir = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('log: panasin air')
            resolve('air dipanaskan')
        }, 1000)
    })
}

const masukinMie = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('log: masukin mie')
            resolve('mie dimasukin')
        }, 1000)
    })
}

const siapkanMie = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('log: siapkan mie')
            resolve('mie disiapkan')
        }, 1000)
    })
}

const mulai = () => {
    cuciPanci()
        .then(cuciPiring)
        .then(isiAir)
        .then(panasinAir)
        .then(masukinMie)
        .then(siapkanMie)
        .then(result => {
            console.log(result)
        })
}

//# Dengan Asin Await
async function mulaiAsinAwait() {
    const cucipanci = await cuciPanci();
    const cucipiring = await cuciPiring();
    const isiair = await isiAir();
    const panasinair = await panasinAir()
    const masukinmie = await masukinMie()
    const siapkanmie = await siapkanMie();
    console.log(siapkanmie);
}