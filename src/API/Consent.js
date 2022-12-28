import axios from 'axios';


axios.defaults.baseURL = "https://hackathon.pirimidtech.com/hackathon/";

class API {

  async getConsent(API_KEY, phone, templateType, trackingID, redirectionURL) {

    console.log(redirectionURL)
    try {
      const response = await axios.post('/init/redirection', {
        "vuaId": phone +"@dashboard-aa-uat",
        "templateType": templateType,
        "trackingId": trackingID,
        "redirectionUrl": redirectionURL,
        "fipIds": []
      },
      {
        headers: {
          "API_KEY": API_KEY
        },
      });

      return { "code": response.status, "data": response.data };

    } catch (error) {

      if (error.response) {
        // Request made and server responded
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        return { "code": error.response.status, "data": error.response.data }
      } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
        return { "code": -1, "data": error.request }
      } else {
        // Something happened in setting up the request that triggered an Error
        return { "code": -2, "data": error.message }
      }
    }

  }

}

export default API;