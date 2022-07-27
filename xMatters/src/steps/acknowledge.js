console.log('------------[Start] LogicMonitor - Acknowledge-------------');
var CryptoJS = require('CryptoJS');
var Base64 = require('Base64');

let accessKey = input['Access Key'];
let accessId = input['Access ID'];
let alertId = input['Internal ID'];

let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date + ' ' + time;

let comment = '';
let newComment = input['Comment'] ? dateTime + ":" + input['Comment'] : dateTime + ": Alert acknowledge from xMatters";
let currentComment = getAlertComment(accessKey, accessId, alertId);

if(currentComment){
    comment += currentComment + '\n' + newComment;
} else {
    comment = newComment;
}

let payload = {
    "ackComment": comment
};

let http_verb = 'POST';
let resource_path = "/alert/alerts/" + alertId + "/ack";
let parameters = "";

let request = http.request({
    'endpoint': 'LogicMonitor',
    'method': http_verb,
    'path': resource_path + parameters,
    'headers': {
        'Content-Type': 'application/json',
        'X-Version': 2,
        'Authorization': generateAuthKey(accessKey, accessId, http_verb, resource_path, payload)
    }
});

let response = request.write(payload);

if(response.statusCode == 200){
    output['Result'] = 'Success';
} else {
    output['Result'] = 'Failure';
}
console.log('------------[End] LogicMonitor - Acknowledge-------------');

function generateAuthKey(accessKey, accessId, http_verb, resource_path, payload) {
    let epoch = (new Date()).getTime();

    let request_vars = http_verb + epoch + JSON.stringify(payload) + resource_path;
    let hash = CryptoJS.lib.HmacSHA256(request_vars, accessKey).toString();
    let signature = Base64.toBase64(Base64.stringToArrayUnicode(hash));

    let authorization = "LMv1 " + accessId + ":" + signature + ":" + epoch;

    return authorization;
}

function getAlertComment(accessKey, accessId, alertId) {
    try {
        let comment = '';
        let http_verb = 'GET';
        let resource_path = "/alert/alerts/" + alertId;
        let parameters = "";

        let request = http.request({
            'endpoint': 'LogicMonitor',
            'method': http_verb,
            'path': resource_path + parameters,
            'headers': {
                'Content-Type': 'application/json',
                'X-Version': 2,
                'Authorization': generateAuthKey(accessKey, accessId, http_verb, resource_path, payload)
            }
        });

        let response = request.write();

        if (response.statusCode == 200) {
            let lmAlert = JSON.parse(response.body);
            comment = lmAlert.ackComment ? lmAlert.ackComment : '';
        }
        return comment;
    } catch (e) {
        return '';
    }
}