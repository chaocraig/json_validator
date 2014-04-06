

module.exports =  



{
    "name": "logs",
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "layout": {
            "type": "string",
            "optional": true
        },
        "level": {
            "type": "string",
            "enum": [
                "TRACE",
                "DEBUG",
                "INFO",
                "WARN",
                "ERROR",
                "FATAL",
                "NOTICE",
                "trace",
                "debug",
                "info",
                "warn",
                "error",
                "notice"
            ],
            "optional": true
        },
        "message": {
            "type": "string",
            "description": "This is the logging message",
            "required": true
        },
        "timestamp": {
            "type": "number",
            "required": true
        },
        "url": {
            "description": "user current url",
            "type": "string",
            "format": "uri",
            "required": true
        }
    }
}





