import { CONTACT_MESSAGE, MAKE_REQUEST, NEWSLETER_EMAIL } from "../actions/ActionType";

const initialState = {
    loading: true,
    userList: [],
    userObj: {},
    errMessage: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CONTACT_MESSAGE:
            return {
                ...state,
                loading: false
            }
        case NEWSLETER_EMAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}