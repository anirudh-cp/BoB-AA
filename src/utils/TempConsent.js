import { useState } from "react";

import API from "../API/TempConsent"
import useIdentStore from "../storages/IdentStore";
import useDataStore from "../storages/DataStore";

import * as Linking from 'expo-linking';

import {API_KEY} from '@env'


export default function useConsent() {

    const [loading, setLoading] = useState(false);
    const [authStatus, setAuthStatus] = useState(false);

    const apiObject = new API();
    const { setTrackingID, setReferenceID, trackingID, referenceID } = useIdentStore();
    const { setData } = useDataStore();


    function makeID(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    return {

        loading, authStatus,

        async getConsent(phone, FIType) {
            setLoading(true);
            //console.log(API_KEY)
            const response = await apiObject.getConsent(API_KEY, phone, FIType, makeID(16), makeID(16));
            setLoading(false);

            if (response['code'] === 200) {
                setAuthStatus(true);
                setReferenceID(response.data.referenceId);
                setTrackingID(response.data.trackingId);
                setData(response.data.data)
            }
            return response
        },
    }
}
