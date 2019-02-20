class ApiService {
    constructor() {

    }

    getUserById(userId) {
        let url = 'http://977051ba.ngrok.io/users/' + userId;
        console.log(url);

        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            
            resp.json();
            
        });
    }
}

export default new ApiService;
