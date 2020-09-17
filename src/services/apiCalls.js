import axios from 'axios';

class apiCalls {

    getOptions(method, apiURL, context, headerParams, data) {
        let headers = headerParams || {
            Accept: '*/*',
        };
        let body = data ? JSON.stringify(data) : ``;
        const options = {
            method,
            url: apiURL,
            data: body,
            headers,
            // mode: 'cors',
            // withCredentials: true,
            timeout: 10000,
        };
        return options;
    }

    async postWithAPI(apiURL, context, headerParams, data) {
        const options = this.getOptions('post', apiURL, context, headerParams, data);

        try {
            const response = await axios(options);
            return response.data;
        } catch (error) {
            if (error.response) {

            } else if (error.request) {

            } else {

            }
            return Promise.reject(error);
        }

    }

    async getWithAPI(apiURL, context, headerParams, data) {
        const options = this.getOptions('get', apiURL, context, headerParams, data);

        try {
            const response = await axios(options);
            return response.data;
        } catch (error) {
            if (error.response) {

            } else if (error.request) {

            } else {

            }
            return Promise.reject(error);
        }

    }

    loadUserDetails(accessToken) {
        const url = 'https://dev-634748.okta.com/oauth2/default/v1/userinfo';
        let headerParams = {
            Authorization: 'Bearer ' + accessToken
        }
        return this.postWithAPI(url, 'userDetailsFromOkta', headerParams);
    }

    fetchLocationDetails(latitude, longitude) {
        const url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyBu-OgqVbC4X761LHLduYtwzT5caWAAwEs';
        return this.getWithAPI(url, 'locationDetails');
    }
}

export default new apiCalls();