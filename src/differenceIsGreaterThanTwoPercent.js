const differenceIsGreaterThanTwoPercent = (val1, val2) => {
    const difference = Math.abs(val1 - val2)
    const threshold = 0.02 * Math.max(val1, val2)

    return difference > threshold
}

export default differenceIsGreaterThanTwoPercent;