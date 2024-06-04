// import xmlhttprequest from "xhr2";
// const XMLHttpRequest = require("xhr2").XMLHttpRequest;
// var
//import { XMLHttpRequest } from "xhr2";
import { XMLHttpRequest } from "xhr2";
const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/name/India");

request.send();

const data = JSON.parse(this.responseText);
