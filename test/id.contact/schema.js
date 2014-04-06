
module.exports =  




{


    "name": "contact",
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "nickname": {
            "type": "string",
            "optional": true
        },
        "email": {
            "type": "string",
            "format": "email",
            "optional": true
        },
        "invite_if_none": {
            "description": "The the contact email cannot be found in Digbil, send an invitation email to the give address.",
            "type": "boolean",
            "default": true,
            "optional": true
        },
        "user": {
            "type": "string",
            "format": "mongodbid",
            "optional": true
        }
    }

}


