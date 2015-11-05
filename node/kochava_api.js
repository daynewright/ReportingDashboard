var request = require('request');
var async = require('async');

var requestQueue = [];
var responseBody = [];

module.exports = {
    clear_queue: function() {
        requestQueue = [];
    },
    
    enqueue_get_apps: function(parameters){
        var url = 'http://control.kochava.com/v1/cpi/get_apps'+
                '?account='+parameters.account+
                '&api_key='+parameters.api_key;
        
        var desc = 'App Summary:';
        queue_request(url, desc);            
    },

    enqueue_get_campaign_summary: function(parameters){
        var url = 'http://control.kochava.com/v1/cpi/get_campaign_summary'+
                '?account='+parameters.account+
                
                '&start_date='+parameters.start_date+
                '&end_date='+parameters.end_date+
                '&timezone=pst'+
                '&kochava_app_id='+parameters.app_id+
                
                '&api_key='+parameters.api_key;
        
        var desc = 'Campaign Summary:';
        queue_request(url, desc);
    },   
    
    enqueue_get_installs: function(parameters){
        var url = 'http://control.kochava.com/v1/cpi/get_installs'+
                '?account='+parameters.account+
                
                '&start_date='+parameters.start_date+
                '&end_date='+parameters.end_date+
                '&timezone=pst'+
                '&kochava_app_id='+parameters.app_id+
                
                '&campaign_id='+parameters.campaign_id+
                '&rtn_device_id_type=android_id,imei,udid,idfa,Kochava_device_id'+
                
                '&api_key='+parameters.api_key;
        
        var desc = 'Campaign Specific Installs:'+parameters.campaign_id;
        queue_request(url, desc);
    },
    
    enqueue_get_events: function(parameters){
        var url = 'http://control.kochava.com/v1/cpi/get_events'+
                '?account='+parameters.account+
                
                '&kochava_app_id='+parameters.app_id+
                '&format=json'+
                
                '&api_key='+parameters.api_key;

        var desc = 'Events:'+parameters.app_id;
        queue_request(url, desc);
    },    
    
    enqueue_get_event_data: function(parameters){
        var url = 'http://control.kochava.com/v1/cpi/get_event_data'+
                '?account='+parameters.account+
                
                '&kochava_app_id='+parameters.app_id+
                '&format=json'+
                
                '&date_start='+parameters.start_date+
                '&date_end='+parameters.end_date+
                '&event_name='+parameters.event_name+
                '&max_rows=10000'+
                '&detail=verbose'+
                
                '&api_key='+parameters.api_key;

        var desc = 'Event data:'+parameters.event_name;
        queue_request(url, desc);
    },    
    
    process_queue: function (parameters){
        async.parallel(requestQueue, function(){
            console.log('finished all the requests');
            parameters.callback(parameters.res, responseBody);
        },
        function(err){ console.log('WTF'); });
    },
};

function queue_request(url, desc) {
    requestQueue.push(function(callback){
        request(url, function(error, response, html){
            if (!error) {
                responseBody.push({'TableName':desc, 'Data': JSON.parse(response.body)});
                callback();
            }
            else
            {
                console.log("Error in request for URL: "+url);
                callback();
            }
        });
    });        
}