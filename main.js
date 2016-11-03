/**
 * Created by ireoo on 16-11-3.
 */
var needle  = require('needle'),
    cheerio = require('cheerio');

needle.defaults({
    open_timeout: 5000,
    user_agent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:42.0) Gecko/20100101 Firefox/42.0'
});

function jiexi(data) {
    return cheerio.load(data);
}

exports.html = function (url, callback) {
    needle.get(url, function(err, res) {
        var $ = jiexi(res.body);
        callback(err, $);
    });
};

exports.json = function (url, callback) {
    needle.get(url, function(err, res) {
        var json = JSON.parse(res.body);
        callback(err, json);
    });
};