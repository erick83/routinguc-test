const SESION_NAME = 'routinguc-test-user'

export function getSesionData() {
    const sesionData = sessionStorage.getItem(SESION_NAME)
    if (sesionData) {
        return JSON.parse(sesionData)
    }
    return null
}

export function setSesionData(data) {
    sessionStorage.setItem(SESION_NAME, JSON.stringify(data))
}

export function clearSesion() {
    sessionStorage.removeItem(SESION_NAME)
}
