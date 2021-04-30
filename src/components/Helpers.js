export const findStateObjByCode = (stateOptions = [], stateCode) => {
    return (
        stateOptions.find(stateName => stateName.value === stateCode)
    )
}

export const findUserByUsername = (users = [], username) => {
    return (
        users.find(user => user.username === username)
    )
}


export const findFavParkByParkCode = (FavParks = [], parkCode) => {
    return (
        FavParks.find(elem => elem.parkCode === parkCode)
    )
}


