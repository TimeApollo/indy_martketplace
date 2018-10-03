export const TAB_CHANGE = 'TAB_CHANGE' 

export const tabChange = (value) => {
    return {
        type: TAB_CHANGE,
        payload: value
    }
}