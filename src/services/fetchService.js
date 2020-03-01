async function fetchBase (path, opt) {
    const url = new URL('http://btfx.herokuapp.com/')
    const headers = new Headers();

    url.pathname = path
    headers.append('Content-Type', 'application/json')

    const options = {
        credentials: 'include',
        method: opt.method,
        headers,
    }


    if (opt.method === 'get' && opt.body) {
        //TODO: Add params to get
        // const params = encodeURIComponent(JSON.stringify(opt.body))
        // url.search = params
        // console.log('Start')
        // console.log(Object.keys(opt.body).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(opt.body[key])).join('&'))
        // const jsonS = JSON.stringify(opt.body).replace(/^{|"|}$/g, '')
        // console.log(jsonS)
        // console.log(new URLSearchParams(jsonS).toString())
        // url.search = jsonS
    } else if (opt.body) {
        options.body = JSON.stringify(opt.body)
    }

    const response = await fetch(url, options);
    return response.json();
}

export const get = (path = '', body) => {
    const method = 'get'
    return fetchBase(path, {method, body})
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
