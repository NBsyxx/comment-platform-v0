const http = require("http");
const https = require("https");
const querystring = require("querystring");
const url = require("url");
const port = 8080;

// 1.创建代理服务
const server=http.createServer()
server.on('request',(req,res)=>{
    console.log("request received");
    const originUrl = url.parse(req.url);
    console.log(originUrl);
    const qs = querystring.parse(originUrl.query);
    const targetUrl = qs["target"];
    const target = url.parse(targetUrl);
    console.log(target);
    const options = {
        hostname: target.hostname,
        port: 8080,
        path: url.format(target),
        method: "GET"
    };

    // 2.代发请求
    const proxy = https.request(options, _res => {
        // 3.修改响应头
        const fieldsToRemove = ["x-frame-options", "content-security-policy"];
        Object.keys(_res.headers).forEach(field => {
        if (!fieldsToRemove.includes(field.toLocaleLowerCase())) {
            res.setHeader(field, _res.headers[field]);
        }
        });
        _res.pipe(res, {
        end: true
        });
    });
    req.pipe(proxy, {
        end: true
    });
})

server.listen(port,()=>{
    console.log(`the respnse is exectued at ${port}`)
})