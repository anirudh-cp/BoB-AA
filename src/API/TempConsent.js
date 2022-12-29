
class API {

    async getConsent(API_KEY, phone, FIType, trackingID, referenceID) {

        const data = {
            '9987600001': {
                'DEPOSIT': require('./SampleData/Deposit/3742420758.json'),
                'EQUITIES':  require('./SampleData/Equities/3234827890.json')
            },
            '9987600002':{
                'DEPOSIT':  require('./SampleData/Deposit/3742421256.json'),
                'MUTUAL FUND':  require('./SampleData/Mutual Fund/8934157590.json')
            },
            '9987600003':{
                'DEPOSIT':  require('./SampleData/Deposit/3742409078.json'),
            },
            '9987600004': {
                'DEPOSIT':  require('./SampleData/Deposit/3742426345.json'),
            },
            '9987600005': {
                'INSURANCE POLICY':  require('./SampleData/Insurance Policy/5234562290.json'),
                'TERM DEPOSIT':  require('./SampleData/Term Deposit/6134569020.json')
            },
            '9987600006':{
                'NPS':  require('./SampleData/NPS/6134561290.json'),
                'RECURRING DEPOSIT':  require('./SampleData/Recurring Deposit/6134565650.json')
            },
            '9987600007': {
                'OTHER':  require('./SampleData/Other/6134562650.json'),
            }
        }[phone][FIType]

        return { "code": 200, "data": { 'referenceId': referenceID, "trackingId": trackingID, "data": data } }

    }

}

export default API;