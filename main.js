/**
 * Created by ireoo on 16-11-3.
 */
var needle = require('needle'),
    cheerio = require('cheerio');

var time = 5 * 1000;

needle.defaults({
    open_timeout: time,
    read_timeout: time,
    timeout: time,
    user_agent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 1.1.4322)'
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