class Global {
    
    constructor(){
        this._env = this._getEnv();
        this._path = "";
        this._server = "";
        if(this._env == "DEV"){
            this._path = "http://localhost:3000";
        }else{
            this._host = (new URL(window.location.href)).hostname;
            this._path = `https://${this._host}`;
        }

        this._server = this._path;
        
        console.log(this._path);
    }

    _getEnv(){
        if(window.location.href.indexOf("heroku") !== -1)return "PROD";
        return "DEV";
    }

    _getPath(file){
        return this._path + file; 
    }

    _redirect(){
        if(document.cookie != "" && $.cookie().username != "null")return;
        let loc = window.location.href;
        if(loc.indexOf("index.html") == -1){
            window.location.href = this._path + "/index.html";
        }
    
    }
    
}

let global = new Global();

$(document).ready(function (e) {
    global._redirect();
});
