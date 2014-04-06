
/**
 * This file contains basics unit-tests for JSON-schema validation
 */

module.exports = {

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
                                                "pattern": ''
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
                                            "pattern": '',
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
                                            "pattern": ''
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
                                                                "pattern": ''
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
                                                            "pattern": '',
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
                                                            "pattern": ''
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
                                                "pattern": ''
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
                                            "pattern": '',
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
                                            "pattern": ''
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
                                    "pattern": ''
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
                                "pattern": '',
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
                                "pattern": ''
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
                                                    "pattern": ''
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
                                                "pattern": '',
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
                                                "pattern": ''
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
                                    "pattern": ''
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
                                "pattern": '',
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
                                "pattern": ''
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
                                                    "pattern": ''
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
                                                "pattern": '',
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
                                                "pattern": ''
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
                                    "pattern": ''
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
                                "pattern": '',
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
                                "pattern": ''
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
};

