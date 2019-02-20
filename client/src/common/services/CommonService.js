class CommonService {
    constructor() {

    }

    dateHandler = (date) => {
        if (!date) {
            return ''
        }

        const nowDate = new Date(date)

        return `${nowDate.getMonth() + 1}/${nowDate.getDate()}/${nowDate.getFullYear()}`
    };
}

export default new CommonService();
