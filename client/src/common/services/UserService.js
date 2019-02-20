let _instance = null;

class UserService {

    constructor() {
        if (_instance) return _instance;

        _instance = this;
        this.initialize();
    }

    initialize() {
        this.isLogin = true;
        this.userId = '5c6d11eef0de7e4d66b1c9e4';
        this.userData = {};
    }


    isUserLogin() {
        return this.isLogin;
    }
}

export default new UserService();
