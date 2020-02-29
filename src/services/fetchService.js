async function fetchBase (path, opt) {
    const url = encodeURI('http://btfx.herokuapp.com/' + path)
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')

    const options = {
        // ...opt,
        method: opt.method,
        headers,
    }


    if (opt.body) {
        options.body = JSON.stringify(opt.body)
    }

    const response = await fetch(url, options);
    return response.json();
}

export const get = (path = '') => {
    const method = 'get'
    return fetchBase(path, {method})
}

export const post = (path = '', body) => {
    const method = 'post'
    return fetchBase(path, {method, body})
}

export const put = (path = '', body) => {
    const method = 'put'
    return fetchBase(path, {method, body})
}

export const del = (path = '', body) => {
    const method = 'delete'
    return fetchBase(path, {method, body})
}
