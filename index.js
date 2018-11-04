let linebot = require('linebot'),
    express = require('express');
const config = require('./config.json'),
    util = require('util');
let bot = linebot({
    channelId: '1619589985',
    channelSecret: '27496611e942dde794f2982623502dcf',
    channelAccessToken: 'aXQrKbP4QyAZZ8nYzd1NoKjGCPS0NBkj1F4qgnbg9VEUTzkJoOBO+WDvNT2UNBDvJWyT4RO1qV2dyMvQKCkCs5c74TvWt4Z5QFSTPL2DwNX8iBom1P2DcSpS3g1j2k0jhjnYsFmjy7FJT7FlUJrulgdB04t89/1O/w1cDnyilFU='
});
const linebotParser = bot.parser(),
    app = express();
bot.on('message', function(event) {
    // 把收到訊息的 event 印出來
    console.log(event);
});
app.post('/webhook', linebotParser);
// 在 localhost 走 8080 port
let server = app.listen(process.env.PORT || 8080, function() {
    let port = server.address().port;
    console.log("My Line bot App running on port", port);
});