
module.exports =



{
          "name": "user",
          "type": "object",
          "additionalProperties": false,
          "properties": {
                    "gen": {
                              "type": "boolean",
                              "description": "<1 male | 0 female>",
                              "optional": true,
                              "required": false
                    },
                    "fn": {
                              "type": "string",
                              "description": "<firstname>",
                              "optional": true,
                              "required": false
                    },
                    "ln": {
                              "type": "string",
                              "description": "<lastname>",
                              "optional": true,
                              "required": false
                    },
                    "bdate": {
                              "type": "string",
                              "format": "date-time",
                              "optional": true,
                              "required": false
                    },
                    "links": {
                              "type": "array",
                              "items": {
                                        "name": "links",
                                        "type": "object",
                                        "optional": true,
                                        "additionalProperties": false,
                                        "properties": {
                                                  "desc": {
                                                            "optional": true,
                                                            "type": "string"
                                                  },
                                                  "url": {
                                                            "type": "string",
                                                            "format": "uri",
                                                            "required": true
                                                  }
                                        }
                              },
                              "optional": true,
                              "required": false
                    },
                    "social": {
                              "name": "social",
                              "type": "object",
                              "optional": true,
                              "additionalProperties": false,
                              "properties": {
                                        "yt": {
                                                  "type": "string",
                                                  "optional": true,
                                                  "descr": "<youtube channel>",
                                                  "required": false
                                        },
                                        "fb": {
                                                  "type": "string",
                                                  "optional": true,
                                                  "descr": "<facebook profile link>",
                                                  "required": false
                                        },
                                        "twi": {
                                                  "type": "string",
                                                  "optional": true,
                                                  "descr": "<@twitter id>",
                                                  "required": false
                                        },
                                        "fli": {
                                                  "type": "string",
                                                  "optional": true,
                                                  "descr": "<flickr id>",
                                                  "required": false
                                        },
                                        "vim": {
                                                  "type": "string",
                                                  "optional": true,
                                                  "descr": "<vimeo channel>",
                                                  "required": false
                                        }
                              },
                              "required": false
                    },
                    "settings": {
                              "type": "object",
                              "additionalProperties": false,
                              "optional": true,
                              "properties": {
                                        "loc": {
                                                  "type": "object",
                                                  "additionalProperties": false,
                                                  "optional": true,
                                                  "properties": {
                                                            "lang": {
                                                                      "type": "string",
                                                                      "format": "ISO-639",
                                                                      "optional": true,
                                                                      "required": false
                                                            },
                                                            "numeric": {
                                                                      "type": "string",
                                                                      "enum": [
                                                                                "M",
                                                                                "I"
                                                                      ],
                                                                      "optional": true,
                                                                      "required": false
                                                            },
                                                            "currency": {
                                                                      "type": "string",
                                                                      "format": "ISO-4217",
                                                                      "optional": true,
                                                                      "required": false
                                                            }
                                                  },
                                                  "required": false
                                        },
                                        "email_notifications": {
                                                  "type": "object",
                                                  "additionalProperties": false,
                                                  "optional": true,
                                                  "properties": {
                                                            "ds_status": {
                                                                      "type": "boolean",
                                                                      "optional": true,
                                                                      "required": false
                                                            },
                                                            "media_status": {
                                                                      "type": "boolean",
                                                                      "optional": true,
                                                                      "required": false
                                                            },
                                                            "camp_status": {
                                                                      "type": "boolean",
                                                                      "optional": true,
                                                                      "required": false
                                                            },
                                                            "camp_warning": {
                                                                      "type": "boolean",
                                                                      "optional": true,
                                                                      "required": false
                                                            }
                                                  },
                                                  "required": false
                                        }
                              },
                              "required": false
                    }
          },
          "required": false,
          "optional": true
}






