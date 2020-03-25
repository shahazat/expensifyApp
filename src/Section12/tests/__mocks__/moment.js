// import moment from "moment"
const moment = require.requireActual('moment'); //this correct way of importing in mocks 

export default (timestamp = 0 ) =>{
    return moment(timestamp);
}