let http = require("http");
let fs = require("fs");
let indexHtml = fs.readFileSync("../clientSide/index.html", "utf8");
let dataHtml = fs.readFileSync("../clientSide/welcome.html", "utf8");
let styleCss = fs.readFileSync("../clientSide/style.css", "utf8");
let scriptJS = fs.readFileSync("../clientSide/script.js");
let favIcon = fs.readFileSync("../clientSide/foxy.png");
let name = "";
let mobile = "";
let email = "";
let address = "";
http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    // #region 1 GET
    if (req.method == "GET") {
        
            // console.log("not foxy");
            switch (req.url) {
                case "/index.html":
                    res.writeHead(200, "ok", { "content-type": "text/html" })
                    res.writeHead(200, "ok", { "set-cookie": "userName ='Rowan'" })
                    res.write(indexHtml)
                    break;
                    case "/welcome.html":
                        res.writeHead(200, "ok", { "content-type": "text/html" })
                        res.write(dataHtml)
                        break;
                case "/style.css":
                    res.writeHead(200, "ok", { "content-type": "text/css" })
                    res.write(styleCss)
                    break;
                case "/script.js":
                    res.writeHead(200, "ok", { "content-type": "text/javascript" })
                    res.write(scriptJS)
                    break;
                case "/foxy.png" :
                    res.writeHead(200, "ok", { "content-type": "image/vnd.microsoft.icon" })
                    res.write(favIcon)
            }res.end();

    }
    // #end region 1 
    // #region 2 POST
    else if (req.method == "POST") {
        req.once("data", (data) => {
            let myData = data.toString();
            name = myData.split("=")[1].split("&")[0]; //split("=")[1] to get the name after =
            email = decodeURIComponent(myData.split("=")[2].split("&")[0]);
            mobile = myData.split("=")[3].split("&")[0];
            address = myData.split("=")[4].split("&")[0];
           
        })
        req.on("end", () => {
            dataHtml = dataHtml.replace("{name}", name);
            dataHtml = dataHtml.replace("{email}", email);
            dataHtml = dataHtml.replace("{mobile}", mobile);
            dataHtml = dataHtml.replace("{address}", address);
            res.write(dataHtml)
            res.end();
        })
    }
        // #end region 2
        // #region 3 PUT

    else if (req.method == "PUT") { 

    }
        // #end region 4
        // #region 5 DELETE
    else if (req.method == "DELETE") { 

    }
    // #end region 5
    
}).listen("7001", ()=>{
    console.log("http://localhost:7001");
})