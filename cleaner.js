"use strict";

var fs=require('fs'),
    $=require('jquery'),
    _u=require('underscore');

//var file =fs.open('sc2baseinfo.html');
var filestring = fs.readFileSync('sc2baseinfo.html','utf8').replace(/\u0000/g,'');

var dom=$(filestring);
var table =dom.find('table').first();
var contentRows = table.find('tbody tr');
var headers=[],records=[];
try{
    table.find('th').each(function(key,val){
      headers.push(val._childNodes[0]._nodeValue);
    });
    contentRows.each(function(key,val){
        var record={};
        $(val).find('td').each(function(key2, val2){
           record[headers[key2]]=val2._childNodes[0]._nodeValue;
        });
        records.push(record);
    });

    _u._.for
    fs.writeSync(JSON.stringify(records));
}catch(ex){
    var b=ex;
    var c=1+1;
}

