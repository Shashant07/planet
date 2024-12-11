import axios from "axios";
import { toast } from "react-toastify";
import { makeRequest, failRequest } from "./userAction";

import { CONTACT_MESSAGE, MAKE_REQUEST, NEWSLETER_EMAIL } from "../actions/ActionType";

export const contactMessage = () => {
    return {
        type: CONTACT_MESSAGE
    }

}

export const newsletterEmail = () => {
    return {
        type: NEWSLETER_EMAIL
    }
}


export const contactDataFun = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        //setTimeout(() => {
        axios.post('https://planet1-json-server.onrender.com/contactUs', data).then(res => {
            dispatch(contactMessage(data));
            toast.success('Message sent successfully.')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        // }, 2000);

    }
}


export const newsletterDataFun = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        //setTimeout(() => {
        axios.post('https://planet1-json-server.onrender.com/newsletters', data).then(res => {
            dispatch(newsletterEmail(data));
            toast.success('Your subscription request has been sent. Thank you!.')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        // }, 2000);

    }
}