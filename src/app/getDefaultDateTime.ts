export const getDefaultDateTime = (date: Date): Date => {
    const minutes = date.getMinutes() + 30
    const timings = [15, 30, 45, 60, 75, 90]
    let index = 0
    while (index < timings.length) {
        if (minutes <= timings[index]) {
            date.setMinutes(timings[index])
            break
        }
        index++
    }
    return date
}
