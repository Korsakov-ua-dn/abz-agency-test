const getColumns = (width: number) => {

    let columns;

    if (width < 1024 && width >= 768) {
        columns = 2
    } else if (width < 768) {
        columns = 1
    } else columns = 3

    return columns
}

export default getColumns