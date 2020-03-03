import { jsonToUriSearch } from "./util";

async function fetchBase (path, opt) {
    const url = new URL('https://btfx.herokuapp.com/')
    const headers = new Headers();

    url.pathname = path
    headers.append('Content-Type', 'application/json')

    const options = {
        credentials: 'include',
        mode: 'no-cors',
        method: opt.method,
        headers,
    }


    if (opt.method === 'get' && opt.search) {
        url.search = jsonToUriSearch(opt.search)
    } else if (opt.body) {
        options.body = JSON.stringify(opt.body)
    }

    try {
        const response = await fetch(url, options);
        return response.json();
    } catch (e) {
        throw e
    }

}

export const get = (path = '', search) => {
    const method = 'get'
    return fetchBase(path, {method, search})
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
