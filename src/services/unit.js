const data = [
    {
        id: 1,
        code: "x",
        description: "X"
    },
    {
        id: 2,
        code: "y",
        description: "Y"
    },
    {
        id: 3,
        code: "z",
        description: "Z"
    }
]


export function findById(id) {
    for (let e of data) {
        if (e.id === parseInt(id)) {
            return e
        }
    }
}

export function updated(data) {
    for (let i in data) {
        let e = data[i]
        if (e.id === parseInt(data.id)) {
            data[i] = data
            return true
        }
    }
    return false
}


export function findAll() {
    return data;
}

export function removeById(id) {
    for (let i in data) {
        let e = data[i]
        if (e.id === id) {
            data.splice(i, 1)
            return true;
        }
    }
    return false
}

