const formatDate = (date) => {
    const dt = new Date(date)

    let month = `${dt.getMonth() + 1}`
    let day = `${dt.getDate()}`
    const year = dt.getFullYear()

    if(month.length < 2) {
        month = `0${month}`
    }

    if (day.length < 2) {
      day = `0${day}`
    }

    return [year, month, day].join('-')
}

export default formatDate