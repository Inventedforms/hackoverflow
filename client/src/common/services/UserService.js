let _instance = null;

class UserService {

    constructor() {
        if (_instance) return _instance;

        _instance = this;
        this.initialize();
    }

    initialize() {
        this.isLogin = true;
        this.userToken = '';
        this.userData = {};
    }


    isUserLogin() {
        return this.isLogin;
    }
}

export default new UserService;
