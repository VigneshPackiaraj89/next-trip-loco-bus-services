export function salvageError(res) {
    return res.json()
    .then(errJSON => {
        throw new Error(JSON.stringify(errJSON))
    }), _err => {
        throw new Error(JSON.stringify(_err))
    }
}


export function baseFetch(url,  options={}) {
    const baseOptions = {
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json'
        }
    }

    return fetch(url, {...baseOptions, ...options})
    .then((res) => {
        if(res.ok){
            return res.json()
        }
        return salvageError(res)
    })
}