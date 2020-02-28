// Actions type

export const OPEN_SIDE_MENU = 'UI_OPEN_SIDE_MENU'
export const CLOSE_SIDE_MENU = 'UI_CLOSE_SIDE_MENU'

// Actions creators

export const openSideMenu = () => ({
    type: OPEN_SIDE_MENU
})

export const closeSideMenu = () => ({
    type: CLOSE_SIDE_MENU
})
