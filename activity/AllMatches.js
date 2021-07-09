const request=require("request");
const cheerio=require("cheerio");
const scoreCardObj=require("./score");
function getAllMatchesLink(url){
    request(url,cb);
}
function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else{
        extractAllLinks(html);
    }
}
function extractAllLinks(html){
    let $=cheerio.load(html);
    let scorecardElems=$("a[data-hover='Scorecard']");
    for(let i=0;i<scorecardElems.length;i++){
        let link=$(scorecardElems[i]).attr("href");
        let fullLink="https://www.espncricinfo.com"+link;
        scoreCardObj.ps(fullLink);
    }
}
module.exports={
    gAlmatches:getAllMatchesLink
}