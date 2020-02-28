async function fetchBase (path, method, body = null) {
    const baseUrl = '​http://btfx.herokuapp.com/'
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')

    const options = {
        method,
        headers,
    }


    if (body) {
        const raw = JSON.stringify(body)
        options.body = raw
    }

    const response = await fetch(`${baseUrl}${path}`, options);
    console.log('response status', response);
    return response.text();
}

export const get = (path = '') => {
    const method = 'get'
    return fetchBase(path, method)
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
