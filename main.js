/**
 * Created by ireoo on 16-11-3.
 */
var needle = require('needle'),
    cheerio = require('cheerio');

needle.defaults({
    open_timeout: 5000,
    user_agent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:42.0) Gecko/20100101 Firefox/42.0'
});

function jiexi(data) {
    return cheerio.load(data);
}

exports.html = function(url, callback) {
    try {
        needle.get(url, function(err, res) {
            if (!err) {
                try {
                    var $ = jiexi(res.body);
                    callback(null, $);
                } catch (e) {
                    callback(e, null);
                }
            } else {
                callback(err, null);
            }
        });
    } catch (e) {
        callback(e, null);
    }
};

exports.json = function(url, callback) {
    try {
        needle.get(url, function(err, res) {
            if (!err) {
                try {
                    var json = JSON.parse(res.body);
                    callback(null, json);
                } catch (e) {
                    callback(e, null);
                }
            } else {
                callback(err, null);
            }
        });
    } catch (e) {
        callback(e, null);
    }
};