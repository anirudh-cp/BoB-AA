import axios from 'axios';


axios.defaults.baseURL = "https://hackathon.pirimidtech.com/hackathon/";
// axios.defaults.headers.common["API_KEY"] = "915d5866ebcdf53684fd37128a"

class API {

  async getConsent(API_KEY, phone, templateType, trackingID, redirectionURL) {

    console.log(redirectionURL);
    try {
      const response = await axios.post('/init/redirection', {
        "vuaId": phone + "@dashboard-aa-uat",
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


  async getAnalytics(API_KEY, trackingID, referenceID) {

    console.log(API_KEY);

    console.log(trackingID, referenceID);
    const response = await fetch(
      'https://hackathon.pirimidtech.com/hackathon/consent/analytics/fetch?referenceId=' + referenceID + '&trackingId=' + trackingID,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "API_KEY": API_KEY,
        },
      }
    ).catch((error) => {
      // Your error is here!
      alert("Cannot connect to server. Please try again later.");
    });

    if (response.status === 200) {
      let data = await response.json();
      console.log("In API");
      return { "code": response.status, "data": data };
      // console.log(data);
      // console.log("End API");
      // return data;
    } else {
      return { "code": response.status, "data": response.data };
    }

  }


  async getDataFetch(API_KEY, trackingID, referenceID) {

    const response = await fetch(
      'https://hackathon.pirimidtech.com/hackathon/consent/data/fetch?referenceId=' + referenceID + '&trackingId=' + trackingID,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "API_KEY": API_KEY,
        },
      }
    ).catch((error) => {
      // Your error is here!
      alert("Cannot connect to server. Please try again later.");
    });

    if (response.status === 200) {
      let data = await response.json();
      console.log("In API data fetch");
      console.log(data);
      // console.log("End API");
      return { "code": response.status, "data": data };
    } else {
      return { "code": response.status, "data": response.data };
    }

  }


}

export default API;