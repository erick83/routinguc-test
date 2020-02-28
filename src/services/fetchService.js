const baseUrl = '​http://btfx.herokuapp.com/'

const fetchBase = (path, params) => {
    const options = {
        ...params,
    }
    return fetch(`${baseUrl}${path}`, options)
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
