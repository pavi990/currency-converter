const generateRate = () => {
    let rate = 1.1
    let change = (Math.random() * (0.05 - (-0.05))) + (-0.05)
    return rate + change
}

export default generateRate;