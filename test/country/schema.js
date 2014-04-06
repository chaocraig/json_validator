
module.exports =  


{
      "name": "Country Parameters",
"properties": {

    "access_token": {
        "type": "string",
        "optional": true,
        "description": "Required for accessing user resources."
    },
    "select": {
        "type": "array",
        "minItems": 1,
        "items": {
            "type": "string",
            "enum": [
                "_id",
                "code",
                "time_zone",
                "time_zone.offset",
                "time_zone.dst",
                "time_zone.dst.start",
                "time_zone.dst.end",
                "flag",
                "location",
                "location.lat",
                "location.long",
                "name",
                "name.lan",
                "name.name",
                "cities",
                "cities._id",
                "cities.time_zone",
                "cities.time_zone.offset",
                "cities.time_zone.dst",
                "cities.time_zone.dst.start",
                "cities.time_zone.dst.end",
                "cities.location",
                "cities.location.lat",
                "cities.location.long",
                "cities.name",
                "cities.name.lan",
                "cities.name.name"
            ],
            "optional": true
        },
        "optional": true,
        "description": "Fields list to return."
    },
    "where": {
        "type": "object",
        "optional": true,
        "description": "list of field to query on. Embedded field path is sepatated by '.' ex: attribute1.sub_att!",
        "additionalProperties": false,
        "properties": {
            "$or": {
                "type": "array",
                "items": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "_id": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "string",
                                "object"
                            ],
                            "properties": {
                                "$regex": {
                                    "type": "string",
                                    "format": "regex",
                                    "optional": true,
                                    "description": "Match a regular expression!"
                                },
                                "$gt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater than! (<)",
                                    "format": "mongodbid"
                                },
                                "$lt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser than! (>)",
                                    "format": "mongodbid"
                                },
                                "$gte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)",
                                    "format": "mongodbid"
                                },
                                "$lte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)",
                                    "format": "mongodbid"
                                },
                                "$eq": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Match the content!",
                                    "format": "mongodbid"
                                },
                                "$ne": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Not match the content!",
                                    "format": "mongodbid"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "mongodbid"
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "mongodbid"
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "format": "mongodbid"
                        },
                        "code": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "string",
                                "object"
                            ],
                            "properties": {
                                "$regex": {
                                    "type": "string",
                                    "format": "regex",
                                    "optional": true,
                                    "description": "Match a regular expression!"
                                },
                                "$gt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater than! (<)"
                                },
                                "$lt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser than! (>)"
                                },
                                "$gte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)"
                                },
                                "$lte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)"
                                },
                                "$eq": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            }
                        },
                        "time_zone": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "object"
                            ],
                            "properties": {
                                "$eq": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "additionalProperties": false
                        },
                        "time_zone.offset": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "number",
                                "object"
                            ],
                            "properties": {
                                "$gt": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Greater than! (<)"
                                },
                                "$lt": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Lesser than! (>)"
                                },
                                "$gte": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)"
                                },
                                "$lte": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)"
                                },
                                "$eq": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "number",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "number",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            }
                        },
                        "time_zone.dst": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "object"
                            ],
                            "properties": {
                                "$eq": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "additionalProperties": false
                        },
                        "time_zone.dst.start": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "string",
                                "object"
                            ],
                            "properties": {
                                "$regex": {
                                    "type": "string",
                                    "format": "regex",
                                    "optional": true,
                                    "description": "Match a regular expression!"
                                },
                                "$gt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater than! (<)",
                                    "format": "date-time"
                                },
                                "$lt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser than! (>)",
                                    "format": "date-time"
                                },
                                "$gte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)",
                                    "format": "date-time"
                                },
                                "$lte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)",
                                    "format": "date-time"
                                },
                                "$eq": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Match the content!",
                                    "format": "date-time"
                                },
                                "$ne": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Not match the content!",
                                    "format": "date-time"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "date-time"
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "date-time"
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "format": "date-time"
                        },
                        "time_zone.dst.end": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "string",
                                "object"
                            ],
                            "properties": {
                                "$regex": {
                                    "type": "string",
                                    "format": "regex",
                                    "optional": true,
                                    "description": "Match a regular expression!"
                                },
                                "$gt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater than! (<)",
                                    "format": "date-time"
                                },
                                "$lt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser than! (>)",
                                    "format": "date-time"
                                },
                                "$gte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)",
                                    "format": "date-time"
                                },
                                "$lte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)",
                                    "format": "date-time"
                                },
                                "$eq": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Match the content!",
                                    "format": "date-time"
                                },
                                "$ne": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Not match the content!",
                                    "format": "date-time"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "date-time"
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "date-time"
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "format": "date-time"
                        },
                        "flag": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "string",
                                "object"
                            ],
                            "properties": {
                                "$regex": {
                                    "type": "string",
                                    "format": "regex",
                                    "optional": true,
                                    "description": "Match a regular expression!"
                                },
                                "$gt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater than! (<)",
                                    "format": "uri"
                                },
                                "$lt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser than! (>)",
                                    "format": "uri"
                                },
                                "$gte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)",
                                    "format": "uri"
                                },
                                "$lte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)",
                                    "format": "uri"
                                },
                                "$eq": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Match the content!",
                                    "format": "uri"
                                },
                                "$ne": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Not match the content!",
                                    "format": "uri"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "uri"
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "uri"
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "format": "uri"
                        },
                        "location": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "object"
                            ],
                            "properties": {
                                "$near": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "In the shape!",
                                    "additionalProperties": false,
                                    "properties": {
                                        "$point": {
                                            "type": "array",
                                            "items": {
                                                "type": "number",
                                                "format": "number",
                                                "maximum": 180,
                                                "minimum": -180,
                                                "pattern": {}
                                            },
                                            "minItems": 2,
                                            "maxItems": 2,
                                            "optional": false,
                                            "required": true,
                                            "description": "Point location [longitue,latitude]!"
                                        },
                                        "$maxDistance": {
                                            "type": "number",
                                            "format": "number",
                                            "maximum": 10000,
                                            "minimum": 0,
                                            "pattern": {},
                                            "optional": true,
                                            "required": false,
                                            "description": "Maximum distance from the point in Degree"
                                        }
                                    }
                                },
                                "$within": {
                                    "optional": true,
                                    "description": "In the shape! 2 points : in a box, 3+ : polygon search",
                                    "type": "array",
                                    "minItems": 2,
                                    "items": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "format": "number",
                                            "maximum": 180,
                                            "minimum": -180,
                                            "pattern": {}
                                        },
                                        "minItems": 2,
                                        "maxItems": 2
                                    }
                                },
                                "$eq": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "additionalProperties": false
                        },
                        "location.lat": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "number",
                                "object"
                            ],
                            "properties": {
                                "$gt": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Greater than! (<)"
                                },
                                "$lt": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Lesser than! (>)"
                                },
                                "$gte": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)"
                                },
                                "$lte": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)"
                                },
                                "$eq": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "number",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "number",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            }
                        },
                        "location.long": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "number",
                                "object"
                            ],
                            "properties": {
                                "$gt": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Greater than! (<)"
                                },
                                "$lt": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Lesser than! (>)"
                                },
                                "$gte": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)"
                                },
                                "$lte": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)"
                                },
                                "$eq": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "number",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "number",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            }
                        },
                        "name": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "array",
                                "object"
                            ],
                            "properties": {
                                "$elemMatch": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Match one specific array element.",
                                    "properties": {
                                        "lan": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "string",
                                                "object"
                                            ],
                                            "properties": {
                                                "$regex": {
                                                    "type": "string",
                                                    "format": "regex",
                                                    "optional": true,
                                                    "description": "Match a regular expression!"
                                                },
                                                "$gt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater than! (<)",
                                                    "format": "ISO-639-source"
                                                },
                                                "$lt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser than! (>)",
                                                    "format": "ISO-639-source"
                                                },
                                                "$gte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater or equal to! (<=)",
                                                    "format": "ISO-639-source"
                                                },
                                                "$lte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser or equal to! (>=)",
                                                    "format": "ISO-639-source"
                                                },
                                                "$eq": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Match the content!",
                                                    "format": "ISO-639-source"
                                                },
                                                "$ne": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Not match the content!",
                                                    "format": "ISO-639-source"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "format": "ISO-639-source"
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "format": "ISO-639-source"
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            },
                                            "format": "ISO-639-source"
                                        },
                                        "name": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "string",
                                                "object"
                                            ],
                                            "properties": {
                                                "$regex": {
                                                    "type": "string",
                                                    "format": "regex",
                                                    "optional": true,
                                                    "description": "Match a regular expression!"
                                                },
                                                "$gt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater than! (<)"
                                                },
                                                "$lt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser than! (>)"
                                                },
                                                "$gte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater or equal to! (<=)"
                                                },
                                                "$lte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser or equal to! (>=)"
                                                },
                                                "$eq": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Match the content!"
                                                },
                                                "$ne": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Not match the content!"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            }
                                        }
                                    }
                                },
                                "$size": {
                                    "type": "integer",
                                    "optional": true,
                                    "minimum": 0,
                                    "description": "Match elements with the exact number of element in the array."
                                },
                                "$eq": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            }
                        },
                        "name.lan": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "string",
                                "object"
                            ],
                            "properties": {
                                "$regex": {
                                    "type": "string",
                                    "format": "regex",
                                    "optional": true,
                                    "description": "Match a regular expression!"
                                },
                                "$gt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater than! (<)",
                                    "format": "ISO-639-source"
                                },
                                "$lt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser than! (>)",
                                    "format": "ISO-639-source"
                                },
                                "$gte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)",
                                    "format": "ISO-639-source"
                                },
                                "$lte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)",
                                    "format": "ISO-639-source"
                                },
                                "$eq": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Match the content!",
                                    "format": "ISO-639-source"
                                },
                                "$ne": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Not match the content!",
                                    "format": "ISO-639-source"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "ISO-639-source"
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "ISO-639-source"
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "format": "ISO-639-source"
                        },
                        "name.name": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "string",
                                "object"
                            ],
                            "properties": {
                                "$regex": {
                                    "type": "string",
                                    "format": "regex",
                                    "optional": true,
                                    "description": "Match a regular expression!"
                                },
                                "$gt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater than! (<)"
                                },
                                "$lt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser than! (>)"
                                },
                                "$gte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)"
                                },
                                "$lte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)"
                                },
                                "$eq": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            }
                        },
                        "cities": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "array",
                                "object"
                            ],
                            "properties": {
                                "$elemMatch": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Match one specific array element.",
                                    "properties": {
                                        "_id": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "string",
                                                "object"
                                            ],
                                            "properties": {
                                                "$regex": {
                                                    "type": "string",
                                                    "format": "regex",
                                                    "optional": true,
                                                    "description": "Match a regular expression!"
                                                },
                                                "$gt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater than! (<)",
                                                    "format": "mongodbid"
                                                },
                                                "$lt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser than! (>)",
                                                    "format": "mongodbid"
                                                },
                                                "$gte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater or equal to! (<=)",
                                                    "format": "mongodbid"
                                                },
                                                "$lte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser or equal to! (>=)",
                                                    "format": "mongodbid"
                                                },
                                                "$eq": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Match the content!",
                                                    "format": "mongodbid"
                                                },
                                                "$ne": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Not match the content!",
                                                    "format": "mongodbid"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "format": "mongodbid"
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "format": "mongodbid"
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            },
                                            "format": "mongodbid"
                                        },
                                        "time_zone": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "object"
                                            ],
                                            "properties": {
                                                "$eq": {
                                                    "type": "object",
                                                    "optional": true,
                                                    "description": "Match the content!"
                                                },
                                                "$ne": {
                                                    "type": "object",
                                                    "optional": true,
                                                    "description": "Not match the content!"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "object",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "object",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            },
                                            "additionalProperties": false
                                        },
                                        "time_zone.offset": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "number",
                                                "object"
                                            ],
                                            "properties": {
                                                "$gt": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Greater than! (<)"
                                                },
                                                "$lt": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Lesser than! (>)"
                                                },
                                                "$gte": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Greater or equal to! (<=)"
                                                },
                                                "$lte": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Lesser or equal to! (>=)"
                                                },
                                                "$eq": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Match the content!"
                                                },
                                                "$ne": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Not match the content!"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "number",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "number",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            }
                                        },
                                        "time_zone.dst": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "object"
                                            ],
                                            "properties": {
                                                "$eq": {
                                                    "type": "object",
                                                    "optional": true,
                                                    "description": "Match the content!"
                                                },
                                                "$ne": {
                                                    "type": "object",
                                                    "optional": true,
                                                    "description": "Not match the content!"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "object",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "object",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            },
                                            "additionalProperties": false
                                        },
                                        "time_zone.dst.start": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "string",
                                                "object"
                                            ],
                                            "properties": {
                                                "$regex": {
                                                    "type": "string",
                                                    "format": "regex",
                                                    "optional": true,
                                                    "description": "Match a regular expression!"
                                                },
                                                "$gt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater than! (<)",
                                                    "format": "date-time"
                                                },
                                                "$lt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser than! (>)",
                                                    "format": "date-time"
                                                },
                                                "$gte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater or equal to! (<=)",
                                                    "format": "date-time"
                                                },
                                                "$lte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser or equal to! (>=)",
                                                    "format": "date-time"
                                                },
                                                "$eq": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Match the content!",
                                                    "format": "date-time"
                                                },
                                                "$ne": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Not match the content!",
                                                    "format": "date-time"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "format": "date-time"
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "format": "date-time"
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            },
                                            "format": "date-time"
                                        },
                                        "time_zone.dst.end": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "string",
                                                "object"
                                            ],
                                            "properties": {
                                                "$regex": {
                                                    "type": "string",
                                                    "format": "regex",
                                                    "optional": true,
                                                    "description": "Match a regular expression!"
                                                },
                                                "$gt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater than! (<)",
                                                    "format": "date-time"
                                                },
                                                "$lt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser than! (>)",
                                                    "format": "date-time"
                                                },
                                                "$gte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater or equal to! (<=)",
                                                    "format": "date-time"
                                                },
                                                "$lte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser or equal to! (>=)",
                                                    "format": "date-time"
                                                },
                                                "$eq": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Match the content!",
                                                    "format": "date-time"
                                                },
                                                "$ne": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Not match the content!",
                                                    "format": "date-time"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "format": "date-time"
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "format": "date-time"
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            },
                                            "format": "date-time"
                                        },
                                        "location": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "object"
                                            ],
                                            "properties": {
                                                "$near": {
                                                    "type": "object",
                                                    "optional": true,
                                                    "description": "In the shape!",
                                                    "additionalProperties": false,
                                                    "properties": {
                                                        "$point": {
                                                            "type": "array",
                                                            "items": {
                                                                "type": "number",
                                                                "format": "number",
                                                                "maximum": 180,
                                                                "minimum": -180,
                                                                "pattern": {}
                                                            },
                                                            "minItems": 2,
                                                            "maxItems": 2,
                                                            "optional": false,
                                                            "required": true,
                                                            "description": "Point location [longitue,latitude]!"
                                                        },
                                                        "$maxDistance": {
                                                            "type": "number",
                                                            "format": "number",
                                                            "maximum": 10000,
                                                            "minimum": 0,
                                                            "pattern": {},
                                                            "optional": true,
                                                            "required": false,
                                                            "description": "Maximum distance from the point in Degree"
                                                        }
                                                    }
                                                },
                                                "$within": {
                                                    "optional": true,
                                                    "description": "In the shape! 2 points : in a box, 3+ : polygon search",
                                                    "type": "array",
                                                    "minItems": 2,
                                                    "items": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "number",
                                                            "format": "number",
                                                            "maximum": 180,
                                                            "minimum": -180,
                                                            "pattern": {}
                                                        },
                                                        "minItems": 2,
                                                        "maxItems": 2
                                                    }
                                                },
                                                "$eq": {
                                                    "type": "object",
                                                    "optional": true,
                                                    "description": "Match the content!"
                                                },
                                                "$ne": {
                                                    "type": "object",
                                                    "optional": true,
                                                    "description": "Not match the content!"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "object",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "object",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            },
                                            "additionalProperties": false
                                        },
                                        "location.lat": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "number",
                                                "object"
                                            ],
                                            "properties": {
                                                "$gt": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Greater than! (<)"
                                                },
                                                "$lt": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Lesser than! (>)"
                                                },
                                                "$gte": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Greater or equal to! (<=)"
                                                },
                                                "$lte": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Lesser or equal to! (>=)"
                                                },
                                                "$eq": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Match the content!"
                                                },
                                                "$ne": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Not match the content!"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "number",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "number",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            }
                                        },
                                        "location.long": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "number",
                                                "object"
                                            ],
                                            "properties": {
                                                "$gt": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Greater than! (<)"
                                                },
                                                "$lt": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Lesser than! (>)"
                                                },
                                                "$gte": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Greater or equal to! (<=)"
                                                },
                                                "$lte": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Lesser or equal to! (>=)"
                                                },
                                                "$eq": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Match the content!"
                                                },
                                                "$ne": {
                                                    "type": "number",
                                                    "optional": true,
                                                    "description": "Not match the content!"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "number",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "number",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            }
                                        },
                                        "name": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "array",
                                                "object"
                                            ],
                                            "properties": {
                                                "$elemMatch": {
                                                    "type": "object",
                                                    "optional": true,
                                                    "description": "Match one specific array element.",
                                                    "properties": {
                                                        "lan": {
                                                            "optional": true,
                                                            "description": "Query opperators to select specific documents.",
                                                            "type": [
                                                                "string",
                                                                "object"
                                                            ],
                                                            "properties": {
                                                                "$regex": {
                                                                    "type": "string",
                                                                    "format": "regex",
                                                                    "optional": true,
                                                                    "description": "Match a regular expression!"
                                                                },
                                                                "$gt": {
                                                                    "type": "string",
                                                                    "optional": true,
                                                                    "description": "Greater than! (<)",
                                                                    "format": "ISO-639-source"
                                                                },
                                                                "$lt": {
                                                                    "type": "string",
                                                                    "optional": true,
                                                                    "description": "Lesser than! (>)",
                                                                    "format": "ISO-639-source"
                                                                },
                                                                "$gte": {
                                                                    "type": "string",
                                                                    "optional": true,
                                                                    "description": "Greater or equal to! (<=)",
                                                                    "format": "ISO-639-source"
                                                                },
                                                                "$lte": {
                                                                    "type": "string",
                                                                    "optional": true,
                                                                    "description": "Lesser or equal to! (>=)",
                                                                    "format": "ISO-639-source"
                                                                },
                                                                "$eq": {
                                                                    "type": "string",
                                                                    "optional": true,
                                                                    "description": "Match the content!",
                                                                    "format": "ISO-639-source"
                                                                },
                                                                "$ne": {
                                                                    "type": "string",
                                                                    "optional": true,
                                                                    "description": "Not match the content!",
                                                                    "format": "ISO-639-source"
                                                                },
                                                                "$in": {
                                                                    "type": "array",
                                                                    "items": {
                                                                        "type": "string",
                                                                        "optional": true,
                                                                        "format": "ISO-639-source"
                                                                    },
                                                                    "optional": true,
                                                                    "description": "In the specified list!"
                                                                },
                                                                "$nin": {
                                                                    "type": "array",
                                                                    "items": {
                                                                        "type": "string",
                                                                        "optional": true,
                                                                        "format": "ISO-639-source"
                                                                    },
                                                                    "optional": true,
                                                                    "description": "Not in the specified list!"
                                                                }
                                                            },
                                                            "format": "ISO-639-source"
                                                        },
                                                        "name": {
                                                            "optional": true,
                                                            "description": "Query opperators to select specific documents.",
                                                            "type": [
                                                                "string",
                                                                "object"
                                                            ],
                                                            "properties": {
                                                                "$regex": {
                                                                    "type": "string",
                                                                    "format": "regex",
                                                                    "optional": true,
                                                                    "description": "Match a regular expression!"
                                                                },
                                                                "$gt": {
                                                                    "type": "string",
                                                                    "optional": true,
                                                                    "description": "Greater than! (<)"
                                                                },
                                                                "$lt": {
                                                                    "type": "string",
                                                                    "optional": true,
                                                                    "description": "Lesser than! (>)"
                                                                },
                                                                "$gte": {
                                                                    "type": "string",
                                                                    "optional": true,
                                                                    "description": "Greater or equal to! (<=)"
                                                                },
                                                                "$lte": {
                                                                    "type": "string",
                                                                    "optional": true,
                                                                    "description": "Lesser or equal to! (>=)"
                                                                },
                                                                "$eq": {
                                                                    "type": "string",
                                                                    "optional": true,
                                                                    "description": "Match the content!"
                                                                },
                                                                "$ne": {
                                                                    "type": "string",
                                                                    "optional": true,
                                                                    "description": "Not match the content!"
                                                                },
                                                                "$in": {
                                                                    "type": "array",
                                                                    "items": {
                                                                        "type": "string",
                                                                        "optional": true
                                                                    },
                                                                    "optional": true,
                                                                    "description": "In the specified list!"
                                                                },
                                                                "$nin": {
                                                                    "type": "array",
                                                                    "items": {
                                                                        "type": "string",
                                                                        "optional": true
                                                                    },
                                                                    "optional": true,
                                                                    "description": "Not in the specified list!"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "$size": {
                                                    "type": "integer",
                                                    "optional": true,
                                                    "minimum": 0,
                                                    "description": "Match elements with the exact number of element in the array."
                                                },
                                                "$eq": {
                                                    "type": "object",
                                                    "optional": true,
                                                    "description": "Match the content!"
                                                },
                                                "$ne": {
                                                    "type": "object",
                                                    "optional": true,
                                                    "description": "Not match the content!"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "object",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "object",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            }
                                        },
                                        "name.lan": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "string",
                                                "object"
                                            ],
                                            "properties": {
                                                "$regex": {
                                                    "type": "string",
                                                    "format": "regex",
                                                    "optional": true,
                                                    "description": "Match a regular expression!"
                                                },
                                                "$gt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater than! (<)",
                                                    "format": "ISO-639-source"
                                                },
                                                "$lt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser than! (>)",
                                                    "format": "ISO-639-source"
                                                },
                                                "$gte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater or equal to! (<=)",
                                                    "format": "ISO-639-source"
                                                },
                                                "$lte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser or equal to! (>=)",
                                                    "format": "ISO-639-source"
                                                },
                                                "$eq": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Match the content!",
                                                    "format": "ISO-639-source"
                                                },
                                                "$ne": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Not match the content!",
                                                    "format": "ISO-639-source"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "format": "ISO-639-source"
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "format": "ISO-639-source"
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            },
                                            "format": "ISO-639-source"
                                        },
                                        "name.name": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "string",
                                                "object"
                                            ],
                                            "properties": {
                                                "$regex": {
                                                    "type": "string",
                                                    "format": "regex",
                                                    "optional": true,
                                                    "description": "Match a regular expression!"
                                                },
                                                "$gt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater than! (<)"
                                                },
                                                "$lt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser than! (>)"
                                                },
                                                "$gte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater or equal to! (<=)"
                                                },
                                                "$lte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser or equal to! (>=)"
                                                },
                                                "$eq": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Match the content!"
                                                },
                                                "$ne": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Not match the content!"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            }
                                        }
                                    }
                                },
                                "$size": {
                                    "type": "integer",
                                    "optional": true,
                                    "minimum": 0,
                                    "description": "Match elements with the exact number of element in the array."
                                },
                                "$eq": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            }
                        },
                        "cities._id": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "string",
                                "object"
                            ],
                            "properties": {
                                "$regex": {
                                    "type": "string",
                                    "format": "regex",
                                    "optional": true,
                                    "description": "Match a regular expression!"
                                },
                                "$gt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater than! (<)",
                                    "format": "mongodbid"
                                },
                                "$lt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser than! (>)",
                                    "format": "mongodbid"
                                },
                                "$gte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)",
                                    "format": "mongodbid"
                                },
                                "$lte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)",
                                    "format": "mongodbid"
                                },
                                "$eq": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Match the content!",
                                    "format": "mongodbid"
                                },
                                "$ne": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Not match the content!",
                                    "format": "mongodbid"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "mongodbid"
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "mongodbid"
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "format": "mongodbid"
                        },
                        "cities.time_zone": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "object"
                            ],
                            "properties": {
                                "$eq": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "additionalProperties": false
                        },
                        "cities.time_zone.offset": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "number",
                                "object"
                            ],
                            "properties": {
                                "$gt": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Greater than! (<)"
                                },
                                "$lt": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Lesser than! (>)"
                                },
                                "$gte": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)"
                                },
                                "$lte": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)"
                                },
                                "$eq": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "number",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "number",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            }
                        },
                        "cities.time_zone.dst": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "object"
                            ],
                            "properties": {
                                "$eq": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "additionalProperties": false
                        },
                        "cities.time_zone.dst.start": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "string",
                                "object"
                            ],
                            "properties": {
                                "$regex": {
                                    "type": "string",
                                    "format": "regex",
                                    "optional": true,
                                    "description": "Match a regular expression!"
                                },
                                "$gt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater than! (<)",
                                    "format": "date-time"
                                },
                                "$lt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser than! (>)",
                                    "format": "date-time"
                                },
                                "$gte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)",
                                    "format": "date-time"
                                },
                                "$lte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)",
                                    "format": "date-time"
                                },
                                "$eq": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Match the content!",
                                    "format": "date-time"
                                },
                                "$ne": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Not match the content!",
                                    "format": "date-time"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "date-time"
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "date-time"
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "format": "date-time"
                        },
                        "cities.time_zone.dst.end": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "string",
                                "object"
                            ],
                            "properties": {
                                "$regex": {
                                    "type": "string",
                                    "format": "regex",
                                    "optional": true,
                                    "description": "Match a regular expression!"
                                },
                                "$gt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater than! (<)",
                                    "format": "date-time"
                                },
                                "$lt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser than! (>)",
                                    "format": "date-time"
                                },
                                "$gte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)",
                                    "format": "date-time"
                                },
                                "$lte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)",
                                    "format": "date-time"
                                },
                                "$eq": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Match the content!",
                                    "format": "date-time"
                                },
                                "$ne": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Not match the content!",
                                    "format": "date-time"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "date-time"
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "date-time"
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "format": "date-time"
                        },
                        "cities.location": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "object"
                            ],
                            "properties": {
                                "$near": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "In the shape!",
                                    "additionalProperties": false,
                                    "properties": {
                                        "$point": {
                                            "type": "array",
                                            "items": {
                                                "type": "number",
                                                "format": "number",
                                                "maximum": 180,
                                                "minimum": -180,
                                                "pattern": {}
                                            },
                                            "minItems": 2,
                                            "maxItems": 2,
                                            "optional": false,
                                            "required": true,
                                            "description": "Point location [longitue,latitude]!"
                                        },
                                        "$maxDistance": {
                                            "type": "number",
                                            "format": "number",
                                            "maximum": 10000,
                                            "minimum": 0,
                                            "pattern": {},
                                            "optional": true,
                                            "required": false,
                                            "description": "Maximum distance from the point in Degree"
                                        }
                                    }
                                },
                                "$within": {
                                    "optional": true,
                                    "description": "In the shape! 2 points : in a box, 3+ : polygon search",
                                    "type": "array",
                                    "minItems": 2,
                                    "items": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "format": "number",
                                            "maximum": 180,
                                            "minimum": -180,
                                            "pattern": {}
                                        },
                                        "minItems": 2,
                                        "maxItems": 2
                                    }
                                },
                                "$eq": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "additionalProperties": false
                        },
                        "cities.location.lat": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "number",
                                "object"
                            ],
                            "properties": {
                                "$gt": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Greater than! (<)"
                                },
                                "$lt": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Lesser than! (>)"
                                },
                                "$gte": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)"
                                },
                                "$lte": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)"
                                },
                                "$eq": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "number",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "number",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            }
                        },
                        "cities.location.long": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "number",
                                "object"
                            ],
                            "properties": {
                                "$gt": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Greater than! (<)"
                                },
                                "$lt": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Lesser than! (>)"
                                },
                                "$gte": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)"
                                },
                                "$lte": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)"
                                },
                                "$eq": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "number",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "number",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "number",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            }
                        },
                        "cities.name": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "array",
                                "object"
                            ],
                            "properties": {
                                "$elemMatch": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Match one specific array element.",
                                    "properties": {
                                        "lan": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "string",
                                                "object"
                                            ],
                                            "properties": {
                                                "$regex": {
                                                    "type": "string",
                                                    "format": "regex",
                                                    "optional": true,
                                                    "description": "Match a regular expression!"
                                                },
                                                "$gt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater than! (<)",
                                                    "format": "ISO-639-source"
                                                },
                                                "$lt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser than! (>)",
                                                    "format": "ISO-639-source"
                                                },
                                                "$gte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater or equal to! (<=)",
                                                    "format": "ISO-639-source"
                                                },
                                                "$lte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser or equal to! (>=)",
                                                    "format": "ISO-639-source"
                                                },
                                                "$eq": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Match the content!",
                                                    "format": "ISO-639-source"
                                                },
                                                "$ne": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Not match the content!",
                                                    "format": "ISO-639-source"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "format": "ISO-639-source"
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "format": "ISO-639-source"
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            },
                                            "format": "ISO-639-source"
                                        },
                                        "name": {
                                            "optional": true,
                                            "description": "Query opperators to select specific documents.",
                                            "type": [
                                                "string",
                                                "object"
                                            ],
                                            "properties": {
                                                "$regex": {
                                                    "type": "string",
                                                    "format": "regex",
                                                    "optional": true,
                                                    "description": "Match a regular expression!"
                                                },
                                                "$gt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater than! (<)"
                                                },
                                                "$lt": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser than! (>)"
                                                },
                                                "$gte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Greater or equal to! (<=)"
                                                },
                                                "$lte": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Lesser or equal to! (>=)"
                                                },
                                                "$eq": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Match the content!"
                                                },
                                                "$ne": {
                                                    "type": "string",
                                                    "optional": true,
                                                    "description": "Not match the content!"
                                                },
                                                "$in": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "In the specified list!"
                                                },
                                                "$nin": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string",
                                                        "optional": true
                                                    },
                                                    "optional": true,
                                                    "description": "Not in the specified list!"
                                                }
                                            }
                                        }
                                    }
                                },
                                "$size": {
                                    "type": "integer",
                                    "optional": true,
                                    "minimum": 0,
                                    "description": "Match elements with the exact number of element in the array."
                                },
                                "$eq": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "object",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            }
                        },
                        "cities.name.lan": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "string",
                                "object"
                            ],
                            "properties": {
                                "$regex": {
                                    "type": "string",
                                    "format": "regex",
                                    "optional": true,
                                    "description": "Match a regular expression!"
                                },
                                "$gt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater than! (<)",
                                    "format": "ISO-639-source"
                                },
                                "$lt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser than! (>)",
                                    "format": "ISO-639-source"
                                },
                                "$gte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)",
                                    "format": "ISO-639-source"
                                },
                                "$lte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)",
                                    "format": "ISO-639-source"
                                },
                                "$eq": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Match the content!",
                                    "format": "ISO-639-source"
                                },
                                "$ne": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Not match the content!",
                                    "format": "ISO-639-source"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "ISO-639-source"
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true,
                                        "format": "ISO-639-source"
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            },
                            "format": "ISO-639-source"
                        },
                        "cities.name.name": {
                            "optional": true,
                            "description": "Query opperators to select specific documents.",
                            "type": [
                                "string",
                                "object"
                            ],
                            "properties": {
                                "$regex": {
                                    "type": "string",
                                    "format": "regex",
                                    "optional": true,
                                    "description": "Match a regular expression!"
                                },
                                "$gt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater than! (<)"
                                },
                                "$lt": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser than! (>)"
                                },
                                "$gte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Greater or equal to! (<=)"
                                },
                                "$lte": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Lesser or equal to! (>=)"
                                },
                                "$eq": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Match the content!"
                                },
                                "$ne": {
                                    "type": "string",
                                    "optional": true,
                                    "description": "Not match the content!"
                                },
                                "$in": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "In the specified list!"
                                },
                                "$nin": {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "optional": true
                                    },
                                    "optional": true,
                                    "description": "Not in the specified list!"
                                }
                            }
                        }
                    }
                },
                "optional": true
            },
            "_id": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "mongodbid"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "mongodbid"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "mongodbid"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "mongodbid"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "mongodbid"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "mongodbid"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "mongodbid"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "mongodbid"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "mongodbid"
            },
            "code": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "time_zone": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "object"
                ],
                "properties": {
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "additionalProperties": false
            },
            "time_zone.offset": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "number",
                    "object"
                ],
                "properties": {
                    "$gt": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "number",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "number",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "time_zone.dst": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "object"
                ],
                "properties": {
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "additionalProperties": false
            },
            "time_zone.dst.start": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "date-time"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "date-time"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "date-time"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "date-time"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "date-time"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "date-time"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "date-time"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "date-time"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "date-time"
            },
            "time_zone.dst.end": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "date-time"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "date-time"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "date-time"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "date-time"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "date-time"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "date-time"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "date-time"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "date-time"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "date-time"
            },
            "flag": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "uri"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "uri"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "uri"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "uri"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "uri"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "uri"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "uri"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "uri"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "uri"
            },
            "location": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "object"
                ],
                "properties": {
                    "$near": {
                        "type": "object",
                        "optional": true,
                        "description": "In the shape!",
                        "additionalProperties": false,
                        "properties": {
                            "$point": {
                                "type": "array",
                                "items": {
                                    "type": "number",
                                    "format": "number",
                                    "maximum": 180,
                                    "minimum": -180,
                                    "pattern": {}
                                },
                                "minItems": 2,
                                "maxItems": 2,
                                "optional": false,
                                "required": true,
                                "description": "Point location [longitue,latitude]!"
                            },
                            "$maxDistance": {
                                "type": "number",
                                "format": "number",
                                "maximum": 10000,
                                "minimum": 0,
                                "pattern": {},
                                "optional": true,
                                "required": false,
                                "description": "Maximum distance from the point in Degree"
                            }
                        }
                    },
                    "$within": {
                        "optional": true,
                        "description": "In the shape! 2 points : in a box, 3+ : polygon search",
                        "type": "array",
                        "minItems": 2,
                        "items": {
                            "type": "array",
                            "items": {
                                "type": "number",
                                "format": "number",
                                "maximum": 180,
                                "minimum": -180,
                                "pattern": {}
                            },
                            "minItems": 2,
                            "maxItems": 2
                        }
                    },
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "additionalProperties": false
            },
            "location.lat": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "number",
                    "object"
                ],
                "properties": {
                    "$gt": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "number",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "number",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "location.long": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "number",
                    "object"
                ],
                "properties": {
                    "$gt": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "number",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "number",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "name": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "array",
                    "object"
                ],
                "properties": {
                    "$elemMatch": {
                        "type": "object",
                        "optional": true,
                        "description": "Match one specific array element.",
                        "properties": {
                            "lan": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "ISO-639-source"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "ISO-639-source"
                            },
                            "name": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            }
                        }
                    },
                    "$size": {
                        "type": "integer",
                        "optional": true,
                        "minimum": 0,
                        "description": "Match elements with the exact number of element in the array."
                    },
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "name.lan": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "ISO-639-source"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "ISO-639-source"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "ISO-639-source"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "ISO-639-source"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "ISO-639-source"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "ISO-639-source"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "ISO-639-source"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "ISO-639-source"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "ISO-639-source"
            },
            "name.name": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "cities": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "array",
                    "object"
                ],
                "properties": {
                    "$elemMatch": {
                        "type": "object",
                        "optional": true,
                        "description": "Match one specific array element.",
                        "properties": {
                            "_id": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "mongodbid"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "mongodbid"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "mongodbid"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "mongodbid"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "mongodbid"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "mongodbid"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "mongodbid"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "mongodbid"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "mongodbid"
                            },
                            "time_zone": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "object"
                                ],
                                "properties": {
                                    "$eq": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "additionalProperties": false
                            },
                            "time_zone.offset": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "number",
                                    "object"
                                ],
                                "properties": {
                                    "$gt": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            },
                            "time_zone.dst": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "object"
                                ],
                                "properties": {
                                    "$eq": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "additionalProperties": false
                            },
                            "time_zone.dst.start": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "date-time"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "date-time"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "date-time"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "date-time"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "date-time"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "date-time"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "date-time"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "date-time"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "date-time"
                            },
                            "time_zone.dst.end": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "date-time"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "date-time"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "date-time"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "date-time"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "date-time"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "date-time"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "date-time"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "date-time"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "date-time"
                            },
                            "location": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "object"
                                ],
                                "properties": {
                                    "$near": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "In the shape!",
                                        "additionalProperties": false,
                                        "properties": {
                                            "$point": {
                                                "type": "array",
                                                "items": {
                                                    "type": "number",
                                                    "format": "number",
                                                    "maximum": 180,
                                                    "minimum": -180,
                                                    "pattern": {}
                                                },
                                                "minItems": 2,
                                                "maxItems": 2,
                                                "optional": false,
                                                "required": true,
                                                "description": "Point location [longitue,latitude]!"
                                            },
                                            "$maxDistance": {
                                                "type": "number",
                                                "format": "number",
                                                "maximum": 10000,
                                                "minimum": 0,
                                                "pattern": {},
                                                "optional": true,
                                                "required": false,
                                                "description": "Maximum distance from the point in Degree"
                                            }
                                        }
                                    },
                                    "$within": {
                                        "optional": true,
                                        "description": "In the shape! 2 points : in a box, 3+ : polygon search",
                                        "type": "array",
                                        "minItems": 2,
                                        "items": {
                                            "type": "array",
                                            "items": {
                                                "type": "number",
                                                "format": "number",
                                                "maximum": 180,
                                                "minimum": -180,
                                                "pattern": {}
                                            },
                                            "minItems": 2,
                                            "maxItems": 2
                                        }
                                    },
                                    "$eq": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "additionalProperties": false
                            },
                            "location.lat": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "number",
                                    "object"
                                ],
                                "properties": {
                                    "$gt": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            },
                            "location.long": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "number",
                                    "object"
                                ],
                                "properties": {
                                    "$gt": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            },
                            "name": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "array",
                                    "object"
                                ],
                                "properties": {
                                    "$elemMatch": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Match one specific array element.",
                                        "properties": {
                                            "lan": {
                                                "optional": true,
                                                "description": "Query opperators to select specific documents.",
                                                "type": [
                                                    "string",
                                                    "object"
                                                ],
                                                "properties": {
                                                    "$regex": {
                                                        "type": "string",
                                                        "format": "regex",
                                                        "optional": true,
                                                        "description": "Match a regular expression!"
                                                    },
                                                    "$gt": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Greater than! (<)",
                                                        "format": "ISO-639-source"
                                                    },
                                                    "$lt": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Lesser than! (>)",
                                                        "format": "ISO-639-source"
                                                    },
                                                    "$gte": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Greater or equal to! (<=)",
                                                        "format": "ISO-639-source"
                                                    },
                                                    "$lte": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Lesser or equal to! (>=)",
                                                        "format": "ISO-639-source"
                                                    },
                                                    "$eq": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Match the content!",
                                                        "format": "ISO-639-source"
                                                    },
                                                    "$ne": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Not match the content!",
                                                        "format": "ISO-639-source"
                                                    },
                                                    "$in": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string",
                                                            "optional": true,
                                                            "format": "ISO-639-source"
                                                        },
                                                        "optional": true,
                                                        "description": "In the specified list!"
                                                    },
                                                    "$nin": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string",
                                                            "optional": true,
                                                            "format": "ISO-639-source"
                                                        },
                                                        "optional": true,
                                                        "description": "Not in the specified list!"
                                                    }
                                                },
                                                "format": "ISO-639-source"
                                            },
                                            "name": {
                                                "optional": true,
                                                "description": "Query opperators to select specific documents.",
                                                "type": [
                                                    "string",
                                                    "object"
                                                ],
                                                "properties": {
                                                    "$regex": {
                                                        "type": "string",
                                                        "format": "regex",
                                                        "optional": true,
                                                        "description": "Match a regular expression!"
                                                    },
                                                    "$gt": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Greater than! (<)"
                                                    },
                                                    "$lt": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Lesser than! (>)"
                                                    },
                                                    "$gte": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Greater or equal to! (<=)"
                                                    },
                                                    "$lte": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Lesser or equal to! (>=)"
                                                    },
                                                    "$eq": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Match the content!"
                                                    },
                                                    "$ne": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Not match the content!"
                                                    },
                                                    "$in": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string",
                                                            "optional": true
                                                        },
                                                        "optional": true,
                                                        "description": "In the specified list!"
                                                    },
                                                    "$nin": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string",
                                                            "optional": true
                                                        },
                                                        "optional": true,
                                                        "description": "Not in the specified list!"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "$size": {
                                        "type": "integer",
                                        "optional": true,
                                        "minimum": 0,
                                        "description": "Match elements with the exact number of element in the array."
                                    },
                                    "$eq": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            },
                            "name.lan": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "ISO-639-source"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "ISO-639-source"
                            },
                            "name.name": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            }
                        }
                    },
                    "$size": {
                        "type": "integer",
                        "optional": true,
                        "minimum": 0,
                        "description": "Match elements with the exact number of element in the array."
                    },
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "cities._id": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "mongodbid"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "mongodbid"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "mongodbid"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "mongodbid"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "mongodbid"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "mongodbid"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "mongodbid"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "mongodbid"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "mongodbid"
            },
            "cities.time_zone": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "object"
                ],
                "properties": {
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "additionalProperties": false
            },
            "cities.time_zone.offset": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "number",
                    "object"
                ],
                "properties": {
                    "$gt": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "number",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "number",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "cities.time_zone.dst": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "object"
                ],
                "properties": {
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "additionalProperties": false
            },
            "cities.time_zone.dst.start": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "date-time"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "date-time"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "date-time"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "date-time"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "date-time"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "date-time"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "date-time"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "date-time"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "date-time"
            },
            "cities.time_zone.dst.end": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "date-time"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "date-time"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "date-time"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "date-time"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "date-time"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "date-time"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "date-time"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "date-time"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "date-time"
            },
            "cities.location": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "object"
                ],
                "properties": {
                    "$near": {
                        "type": "object",
                        "optional": true,
                        "description": "In the shape!",
                        "additionalProperties": false,
                        "properties": {
                            "$point": {
                                "type": "array",
                                "items": {
                                    "type": "number",
                                    "format": "number",
                                    "maximum": 180,
                                    "minimum": -180,
                                    "pattern": {}
                                },
                                "minItems": 2,
                                "maxItems": 2,
                                "optional": false,
                                "required": true,
                                "description": "Point location [longitue,latitude]!"
                            },
                            "$maxDistance": {
                                "type": "number",
                                "format": "number",
                                "maximum": 10000,
                                "minimum": 0,
                                "pattern": {},
                                "optional": true,
                                "required": false,
                                "description": "Maximum distance from the point in Degree"
                            }
                        }
                    },
                    "$within": {
                        "optional": true,
                        "description": "In the shape! 2 points : in a box, 3+ : polygon search",
                        "type": "array",
                        "minItems": 2,
                        "items": {
                            "type": "array",
                            "items": {
                                "type": "number",
                                "format": "number",
                                "maximum": 180,
                                "minimum": -180,
                                "pattern": {}
                            },
                            "minItems": 2,
                            "maxItems": 2
                        }
                    },
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "additionalProperties": false
            },
            "cities.location.lat": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "number",
                    "object"
                ],
                "properties": {
                    "$gt": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "number",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "number",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "cities.location.long": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "number",
                    "object"
                ],
                "properties": {
                    "$gt": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "number",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "number",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "cities.name": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "array",
                    "object"
                ],
                "properties": {
                    "$elemMatch": {
                        "type": "object",
                        "optional": true,
                        "description": "Match one specific array element.",
                        "properties": {
                            "lan": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "ISO-639-source"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "ISO-639-source"
                            },
                            "name": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            }
                        }
                    },
                    "$size": {
                        "type": "integer",
                        "optional": true,
                        "minimum": 0,
                        "description": "Match elements with the exact number of element in the array."
                    },
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "cities.name.lan": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "ISO-639-source"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "ISO-639-source"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "ISO-639-source"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "ISO-639-source"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "ISO-639-source"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "ISO-639-source"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "ISO-639-source"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "ISO-639-source"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "ISO-639-source"
            },
            "cities.name.name": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            }
        },
        "patternProperties": {
            "^name.d+$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "array",
                    "object"
                ],
                "properties": {
                    "$elemMatch": {
                        "type": "object",
                        "optional": true,
                        "description": "Match one specific array element.",
                        "properties": {
                            "lan": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "ISO-639-source"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "ISO-639-source"
                            },
                            "name": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            }
                        }
                    },
                    "$size": {
                        "type": "integer",
                        "optional": true,
                        "minimum": 0,
                        "description": "Match elements with the exact number of element in the array."
                    },
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "^name.d+.lan$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "ISO-639-source"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "ISO-639-source"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "ISO-639-source"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "ISO-639-source"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "ISO-639-source"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "ISO-639-source"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "ISO-639-source"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "ISO-639-source"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "ISO-639-source"
            },
            "^name.d+.name$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "^cities.d+$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "array",
                    "object"
                ],
                "properties": {
                    "$elemMatch": {
                        "type": "object",
                        "optional": true,
                        "description": "Match one specific array element.",
                        "properties": {
                            "_id": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "mongodbid"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "mongodbid"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "mongodbid"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "mongodbid"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "mongodbid"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "mongodbid"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "mongodbid"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "mongodbid"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "mongodbid"
                            },
                            "time_zone": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "object"
                                ],
                                "properties": {
                                    "$eq": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "additionalProperties": false
                            },
                            "time_zone.offset": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "number",
                                    "object"
                                ],
                                "properties": {
                                    "$gt": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            },
                            "time_zone.dst": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "object"
                                ],
                                "properties": {
                                    "$eq": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "additionalProperties": false
                            },
                            "time_zone.dst.start": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "date-time"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "date-time"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "date-time"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "date-time"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "date-time"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "date-time"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "date-time"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "date-time"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "date-time"
                            },
                            "time_zone.dst.end": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "date-time"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "date-time"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "date-time"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "date-time"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "date-time"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "date-time"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "date-time"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "date-time"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "date-time"
                            },
                            "location": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "object"
                                ],
                                "properties": {
                                    "$near": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "In the shape!",
                                        "additionalProperties": false,
                                        "properties": {
                                            "$point": {
                                                "type": "array",
                                                "items": {
                                                    "type": "number",
                                                    "format": "number",
                                                    "maximum": 180,
                                                    "minimum": -180,
                                                    "pattern": {}
                                                },
                                                "minItems": 2,
                                                "maxItems": 2,
                                                "optional": false,
                                                "required": true,
                                                "description": "Point location [longitue,latitude]!"
                                            },
                                            "$maxDistance": {
                                                "type": "number",
                                                "format": "number",
                                                "maximum": 10000,
                                                "minimum": 0,
                                                "pattern": {},
                                                "optional": true,
                                                "required": false,
                                                "description": "Maximum distance from the point in Degree"
                                            }
                                        }
                                    },
                                    "$within": {
                                        "optional": true,
                                        "description": "In the shape! 2 points : in a box, 3+ : polygon search",
                                        "type": "array",
                                        "minItems": 2,
                                        "items": {
                                            "type": "array",
                                            "items": {
                                                "type": "number",
                                                "format": "number",
                                                "maximum": 180,
                                                "minimum": -180,
                                                "pattern": {}
                                            },
                                            "minItems": 2,
                                            "maxItems": 2
                                        }
                                    },
                                    "$eq": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "additionalProperties": false
                            },
                            "location.lat": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "number",
                                    "object"
                                ],
                                "properties": {
                                    "$gt": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            },
                            "location.long": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "number",
                                    "object"
                                ],
                                "properties": {
                                    "$gt": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "number",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "number",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            },
                            "name": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "array",
                                    "object"
                                ],
                                "properties": {
                                    "$elemMatch": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Match one specific array element.",
                                        "properties": {
                                            "lan": {
                                                "optional": true,
                                                "description": "Query opperators to select specific documents.",
                                                "type": [
                                                    "string",
                                                    "object"
                                                ],
                                                "properties": {
                                                    "$regex": {
                                                        "type": "string",
                                                        "format": "regex",
                                                        "optional": true,
                                                        "description": "Match a regular expression!"
                                                    },
                                                    "$gt": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Greater than! (<)",
                                                        "format": "ISO-639-source"
                                                    },
                                                    "$lt": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Lesser than! (>)",
                                                        "format": "ISO-639-source"
                                                    },
                                                    "$gte": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Greater or equal to! (<=)",
                                                        "format": "ISO-639-source"
                                                    },
                                                    "$lte": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Lesser or equal to! (>=)",
                                                        "format": "ISO-639-source"
                                                    },
                                                    "$eq": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Match the content!",
                                                        "format": "ISO-639-source"
                                                    },
                                                    "$ne": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Not match the content!",
                                                        "format": "ISO-639-source"
                                                    },
                                                    "$in": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string",
                                                            "optional": true,
                                                            "format": "ISO-639-source"
                                                        },
                                                        "optional": true,
                                                        "description": "In the specified list!"
                                                    },
                                                    "$nin": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string",
                                                            "optional": true,
                                                            "format": "ISO-639-source"
                                                        },
                                                        "optional": true,
                                                        "description": "Not in the specified list!"
                                                    }
                                                },
                                                "format": "ISO-639-source"
                                            },
                                            "name": {
                                                "optional": true,
                                                "description": "Query opperators to select specific documents.",
                                                "type": [
                                                    "string",
                                                    "object"
                                                ],
                                                "properties": {
                                                    "$regex": {
                                                        "type": "string",
                                                        "format": "regex",
                                                        "optional": true,
                                                        "description": "Match a regular expression!"
                                                    },
                                                    "$gt": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Greater than! (<)"
                                                    },
                                                    "$lt": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Lesser than! (>)"
                                                    },
                                                    "$gte": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Greater or equal to! (<=)"
                                                    },
                                                    "$lte": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Lesser or equal to! (>=)"
                                                    },
                                                    "$eq": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Match the content!"
                                                    },
                                                    "$ne": {
                                                        "type": "string",
                                                        "optional": true,
                                                        "description": "Not match the content!"
                                                    },
                                                    "$in": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string",
                                                            "optional": true
                                                        },
                                                        "optional": true,
                                                        "description": "In the specified list!"
                                                    },
                                                    "$nin": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string",
                                                            "optional": true
                                                        },
                                                        "optional": true,
                                                        "description": "Not in the specified list!"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "$size": {
                                        "type": "integer",
                                        "optional": true,
                                        "minimum": 0,
                                        "description": "Match elements with the exact number of element in the array."
                                    },
                                    "$eq": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            },
                            "name.lan": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "ISO-639-source"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "ISO-639-source"
                            },
                            "name.name": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            }
                        }
                    },
                    "$size": {
                        "type": "integer",
                        "optional": true,
                        "minimum": 0,
                        "description": "Match elements with the exact number of element in the array."
                    },
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "^cities.d+._id$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "mongodbid"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "mongodbid"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "mongodbid"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "mongodbid"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "mongodbid"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "mongodbid"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "mongodbid"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "mongodbid"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "mongodbid"
            },
            "^cities.d+.time_zone$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "object"
                ],
                "properties": {
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "additionalProperties": false
            },
            "^cities.d+.time_zone.offset$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "number",
                    "object"
                ],
                "properties": {
                    "$gt": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "number",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "number",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "^cities.d+.time_zone.dst$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "object"
                ],
                "properties": {
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "additionalProperties": false
            },
            "^cities.d+.time_zone.dst.start$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "date-time"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "date-time"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "date-time"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "date-time"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "date-time"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "date-time"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "date-time"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "date-time"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "date-time"
            },
            "^cities.d+.time_zone.dst.end$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "date-time"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "date-time"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "date-time"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "date-time"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "date-time"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "date-time"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "date-time"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "date-time"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "date-time"
            },
            "^cities.d+.location$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "object"
                ],
                "properties": {
                    "$near": {
                        "type": "object",
                        "optional": true,
                        "description": "In the shape!",
                        "additionalProperties": false,
                        "properties": {
                            "$point": {
                                "type": "array",
                                "items": {
                                    "type": "number",
                                    "format": "number",
                                    "maximum": 180,
                                    "minimum": -180,
                                    "pattern": {}
                                },
                                "minItems": 2,
                                "maxItems": 2,
                                "optional": false,
                                "required": true,
                                "description": "Point location [longitue,latitude]!"
                            },
                            "$maxDistance": {
                                "type": "number",
                                "format": "number",
                                "maximum": 10000,
                                "minimum": 0,
                                "pattern": {},
                                "optional": true,
                                "required": false,
                                "description": "Maximum distance from the point in Degree"
                            }
                        }
                    },
                    "$within": {
                        "optional": true,
                        "description": "In the shape! 2 points : in a box, 3+ : polygon search",
                        "type": "array",
                        "minItems": 2,
                        "items": {
                            "type": "array",
                            "items": {
                                "type": "number",
                                "format": "number",
                                "maximum": 180,
                                "minimum": -180,
                                "pattern": {}
                            },
                            "minItems": 2,
                            "maxItems": 2
                        }
                    },
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "additionalProperties": false
            },
            "^cities.d+.location.lat$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "number",
                    "object"
                ],
                "properties": {
                    "$gt": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "number",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "number",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "^cities.d+.location.long$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "number",
                    "object"
                ],
                "properties": {
                    "$gt": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "number",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "number",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "number",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "number",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "^cities.d+.name$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "array",
                    "object"
                ],
                "properties": {
                    "$elemMatch": {
                        "type": "object",
                        "optional": true,
                        "description": "Match one specific array element.",
                        "properties": {
                            "lan": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "ISO-639-source"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "ISO-639-source"
                            },
                            "name": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            }
                        }
                    },
                    "$size": {
                        "type": "integer",
                        "optional": true,
                        "minimum": 0,
                        "description": "Match elements with the exact number of element in the array."
                    },
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "^cities.d+.name.lan$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "ISO-639-source"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "ISO-639-source"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "ISO-639-source"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "ISO-639-source"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "ISO-639-source"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "ISO-639-source"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "ISO-639-source"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "ISO-639-source"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "ISO-639-source"
            },
            "^cities.d+.name.name$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "^cities.name.d+$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "array",
                    "object"
                ],
                "properties": {
                    "$elemMatch": {
                        "type": "object",
                        "optional": true,
                        "description": "Match one specific array element.",
                        "properties": {
                            "lan": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)",
                                        "format": "ISO-639-source"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)",
                                        "format": "ISO-639-source"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!",
                                        "format": "ISO-639-source"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true,
                                            "format": "ISO-639-source"
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                },
                                "format": "ISO-639-source"
                            },
                            "name": {
                                "optional": true,
                                "description": "Query opperators to select specific documents.",
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "properties": {
                                    "$regex": {
                                        "type": "string",
                                        "format": "regex",
                                        "optional": true,
                                        "description": "Match a regular expression!"
                                    },
                                    "$gt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater than! (<)"
                                    },
                                    "$lt": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser than! (>)"
                                    },
                                    "$gte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Greater or equal to! (<=)"
                                    },
                                    "$lte": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Lesser or equal to! (>=)"
                                    },
                                    "$eq": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Match the content!"
                                    },
                                    "$ne": {
                                        "type": "string",
                                        "optional": true,
                                        "description": "Not match the content!"
                                    },
                                    "$in": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "In the specified list!"
                                    },
                                    "$nin": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "optional": true
                                        },
                                        "optional": true,
                                        "description": "Not in the specified list!"
                                    }
                                }
                            }
                        }
                    },
                    "$size": {
                        "type": "integer",
                        "optional": true,
                        "minimum": 0,
                        "description": "Match elements with the exact number of element in the array."
                    },
                    "$eq": {
                        "type": "object",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "object",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            },
            "^cities.name.d+.lan$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)",
                        "format": "ISO-639-source"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)",
                        "format": "ISO-639-source"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)",
                        "format": "ISO-639-source"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)",
                        "format": "ISO-639-source"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!",
                        "format": "ISO-639-source"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!",
                        "format": "ISO-639-source"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "ISO-639-source"
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true,
                            "format": "ISO-639-source"
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                },
                "format": "ISO-639-source"
            },
            "^cities.name.d+.name$": {
                "optional": true,
                "description": "Query opperators to select specific documents.",
                "type": [
                    "string",
                    "object"
                ],
                "properties": {
                    "$regex": {
                        "type": "string",
                        "format": "regex",
                        "optional": true,
                        "description": "Match a regular expression!"
                    },
                    "$gt": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater than! (<)"
                    },
                    "$lt": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser than! (>)"
                    },
                    "$gte": {
                        "type": "string",
                        "optional": true,
                        "description": "Greater or equal to! (<=)"
                    },
                    "$lte": {
                        "type": "string",
                        "optional": true,
                        "description": "Lesser or equal to! (>=)"
                    },
                    "$eq": {
                        "type": "string",
                        "optional": true,
                        "description": "Match the content!"
                    },
                    "$ne": {
                        "type": "string",
                        "optional": true,
                        "description": "Not match the content!"
                    },
                    "$in": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true
                        },
                        "optional": true,
                        "description": "In the specified list!"
                    },
                    "$nin": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "optional": true
                        },
                        "optional": true,
                        "description": "Not in the specified list!"
                    }
                }
            }
        }
    },
    "sort": {
        "type": "object",
        "optional": true,
        "description": "Sort results by option. Embedded field path is sepatated by '.' ex: attribute1.sub_att!",
        "additionalProperties": false,
        "properties": {
            "_id": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "code": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "time_zone": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "time_zone.offset": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "time_zone.dst": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "time_zone.dst.start": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "time_zone.dst.end": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "flag": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "location": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "location.lat": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "location.long": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "name": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "name.lan": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "name.name": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities._id": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities.time_zone": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities.time_zone.offset": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities.time_zone.dst": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities.time_zone.dst.start": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities.time_zone.dst.end": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities.location": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities.location.lat": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities.location.long": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities.name": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities.name.lan": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            },
            "cities.name.name": {
                "type": "string",
                "optional": true,
                "description": "Sorting option : ascendent(1) or descendent(-1)!",
                "enum": [
                    "asc",
                    "desc",
                    "1",
                    "-1"
                ]
            }
        }
    },
    "groupby": {
        "type": "object",
        "optional": true,
        "description": "Groupe result & build basic statistics on desired fields. Field path is sepatated by '.' ex: attribute1.sub_att! Warning : this function doesnt work on Array.",
        "additionalProperties": false,
        "properties": {
            "key": {
                "type": "string",
                "enum": [
                    "code",
                    "time_zone.offset",
                    "time_zone.dst.start:Y",
                    "time_zone.dst.start:M",
                    "time_zone.dst.start:D",
                    "time_zone.dst.start:h",
                    "time_zone.dst.end:Y",
                    "time_zone.dst.end:M",
                    "time_zone.dst.end:D",
                    "time_zone.dst.end:h",
                    "flag",
                    "location.lat",
                    "location.long",
                    "name.lan",
                    "name.name",
                    "cities.time_zone.offset",
                    "cities.time_zone.dst.start:Y",
                    "cities.time_zone.dst.start:M",
                    "cities.time_zone.dst.start:D",
                    "cities.time_zone.dst.start:h",
                    "cities.time_zone.dst.end:Y",
                    "cities.time_zone.dst.end:M",
                    "cities.time_zone.dst.end:D",
                    "cities.time_zone.dst.end:h",
                    "cities.location.lat",
                    "cities.location.long",
                    "cities.name.lan",
                    "cities.name.name"
                ],
                "optional": true
            },
            "values": {
                "type": "object",
                "optional": true,
                "description": "Values to process during the groupby.",
                "additionalProperties": false,
                "properties": {
                    "_id": {
                        "type": "string",
                        "enum": [
                            "$cct"
                        ],
                        "description": "Possible value operation : '$cct' : Concatenate all string in a semi colon separated super-string",
                        "optional": true
                    },
                    "code": {
                        "type": "string",
                        "enum": [
                            "$cct"
                        ],
                        "description": "Possible value operation : '$cct' : Concatenate all string in a semi colon separated super-string",
                        "optional": true
                    },
                    "time_zone.offset": {
                        "type": "string",
                        "enum": [
                            "$min",
                            "$max",
                            "$sum",
                            "$avg"
                        ],
                        "description": "Possible value operation : '$min' : Smallest number, '$max' : Biggest number, '$sum' : Sum all values, '$avg' : Average value",
                        "optional": true
                    },
                    "time_zone.dst.start": {
                        "type": "string",
                        "enum": [
                            "$min",
                            "$max"
                        ],
                        "description": "Possible value operation : '$min' : First date, '$max' : Last date",
                        "optional": true
                    },
                    "time_zone.dst.end": {
                        "type": "string",
                        "enum": [
                            "$min",
                            "$max"
                        ],
                        "description": "Possible value operation : '$min' : First date, '$max' : Last date",
                        "optional": true
                    },
                    "flag": {
                        "type": "string",
                        "enum": [
                            "$cct"
                        ],
                        "description": "Possible value operation : '$cct' : Concatenate all string in a semi colon separated super-string",
                        "optional": true
                    },
                    "location.lat": {
                        "type": "string",
                        "enum": [
                            "$min",
                            "$max",
                            "$sum",
                            "$avg"
                        ],
                        "description": "Possible value operation : '$min' : Smallest number, '$max' : Biggest number, '$sum' : Sum all values, '$avg' : Average value",
                        "optional": true
                    },
                    "location.long": {
                        "type": "string",
                        "enum": [
                            "$min",
                            "$max",
                            "$sum",
                            "$avg"
                        ],
                        "description": "Possible value operation : '$min' : Smallest number, '$max' : Biggest number, '$sum' : Sum all values, '$avg' : Average value",
                        "optional": true
                    },
                    "name.lan": {
                        "type": "string",
                        "enum": [
                            "$cct"
                        ],
                        "description": "Possible value operation : '$cct' : Concatenate all string in a semi colon separated super-string",
                        "optional": true
                    },
                    "name.name": {
                        "type": "string",
                        "enum": [
                            "$cct"
                        ],
                        "description": "Possible value operation : '$cct' : Concatenate all string in a semi colon separated super-string",
                        "optional": true
                    },
                    "cities._id": {
                        "type": "string",
                        "enum": [
                            "$cct"
                        ],
                        "description": "Possible value operation : '$cct' : Concatenate all string in a semi colon separated super-string",
                        "optional": true
                    },
                    "cities.time_zone.offset": {
                        "type": "string",
                        "enum": [
                            "$min",
                            "$max",
                            "$sum",
                            "$avg"
                        ],
                        "description": "Possible value operation : '$min' : Smallest number, '$max' : Biggest number, '$sum' : Sum all values, '$avg' : Average value",
                        "optional": true
                    },
                    "cities.time_zone.dst.start": {
                        "type": "string",
                        "enum": [
                            "$min",
                            "$max"
                        ],
                        "description": "Possible value operation : '$min' : First date, '$max' : Last date",
                        "optional": true
                    },
                    "cities.time_zone.dst.end": {
                        "type": "string",
                        "enum": [
                            "$min",
                            "$max"
                        ],
                        "description": "Possible value operation : '$min' : First date, '$max' : Last date",
                        "optional": true
                    },
                    "cities.location.lat": {
                        "type": "string",
                        "enum": [
                            "$min",
                            "$max",
                            "$sum",
                            "$avg"
                        ],
                        "description": "Possible value operation : '$min' : Smallest number, '$max' : Biggest number, '$sum' : Sum all values, '$avg' : Average value",
                        "optional": true
                    },
                    "cities.location.long": {
                        "type": "string",
                        "enum": [
                            "$min",
                            "$max",
                            "$sum",
                            "$avg"
                        ],
                        "description": "Possible value operation : '$min' : Smallest number, '$max' : Biggest number, '$sum' : Sum all values, '$avg' : Average value",
                        "optional": true
                    },
                    "cities.name.lan": {
                        "type": "string",
                        "enum": [
                            "$cct"
                        ],
                        "description": "Possible value operation : '$cct' : Concatenate all string in a semi colon separated super-string",
                        "optional": true
                    },
                    "cities.name.name": {
                        "type": "string",
                        "enum": [
                            "$cct"
                        ],
                        "description": "Possible value operation : '$cct' : Concatenate all string in a semi colon separated super-string",
                        "optional": true
                    }
                }
            }
        }
    },
    "limit": {
        "type": [
            "number",
            "integer",
            "string"
        ],
        "format": "integer",
        "optional": true,
        "description": "Maximum number of documents to return.",
        "minimum": 0,
        "maximum": 40
    },
    "offset": {
        "type": [
            "number",
            "integer",
            "string"
        ],
        "format": "integer",
        "optional": true,
        "description": "Number of documents to skip.",
        "minimum": 0
    }

 }

}



