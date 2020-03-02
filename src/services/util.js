export function parsePoints(raw = []) {
    const points = []
    const max = raw.length
    let i = 0

    while (i < max) {
        points.push({
            lat: raw[i].origin_latitude,
            lng: raw[i].origin_longitude,
            status: raw[i].status
        })

        i += 1
    }

    return points
}

export function jsonToUriSearch (jsonSearch) {
    const uriString = Object.keys(jsonSearch).map(key => {
        let tempUri = ''
        const value = jsonSearch[key]
        if (value === null) {
            return ''
        }

        if (['String', 'Number', 'Boolean'].indexOf(value.constructor.name) >= 0) {
            tempUri += `${key}=${value}`
        } else if (value.constructor.name === 'Array') {
            tempUri += value.map(item => (`${key}[]=${value}`)).join(';')
        }

        return tempUri
    }).join('&')

    return uriString.replace(/&$/g, '')
}