
/**
 * This file contains basics unit-tests for JSON-schema validation
 */

module.exports = {


    "name": "campaign",
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "name": {
            "type": "string",
            "optional": true
        },
        "type": {
            "type": "number",
            "enum": [
                "1",
                "2",
                "3",
                1,
                2,
                3
            ],
            "optional": true
        },
        "tags": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "optional": true
        },
        "cat": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "optional": true
        },
        "media": {
            "type": "string",
            "format": "mongodbid",
            "description": "Must be a valid media ID",
            "optional": true
        },
        "type1": {
            "description": "Autopilot",
            "type": "object",
            "optional": true,
            "additionalProperties": false,
            "properties": {
                "targ": {
                    "type": "array",
                    "items": {
                        "name": "autopilot",
                        "type": "object",
                        "optional": true,
                        "additionalProperties": false,
                        "properties": {
                            "gen": {
                                "type": "boolean",
                                "enum": [
                                    "0",
                                    "1",
                                    0,
                                    1,
                                    true,
                                    false
                                ],
                                "description": "<1 male | 0 female>",
                                "optional": true
                            },
                            "agerange": {
                                "type": "integer",
                                "enum": [
                                    "0",
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    0,
                                    1,
                                    2,
                                    3,
                                    4
                                ],
                                "description": "<0:undefined, 1:kid, 2:teenager, 3:adult, 4:senior>",
                                "optional": true
                            },
                            "acs": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                },
                                "optional": true
                            }
                        }
                    },
                    "optional": true
                },
                "sched": {
                    "description": "Play schedule is always Billboard local time.",
                    "type": "object",
                    "optional": true,
                    "additionalProperties": false,
                    "properties": {
                        "s": {
                            "description": "start date",
                            "type": "string",
                            "format": "date-time",
                            "optional": true
                        },
                        "e": {
                            "description": "end date",
                            "type": "string",
                            "format": "date-time",
                            "optional": true
                        }
                    }
                },
                "loc": {
                    "type": "array",
                    "items": {
                        "name": "loc",
                        "type": "object",
                        "additionalProperties": false,
                        "optional": true,
                        "properties": {
                            "cntry": {
                                "type": "string",
                                "description": "ISO 3166",
                                "required": true
                            },
                            "city": {
                                "type": "string",
                                "description": "ISO 3166",
                                "required": true
                            }
                        }
                    },
                    "optional": true
                }
            }
        },
        "type2": {
            "description": "AdZone",
            "type": "object",
            "optional": true,
            "additionalProperties": false,
            "properties": {
                "zone": {
                    "type": "array",
                    "items": {
                        "name": "zone",
                        "type": "object",
                        "optional": true,
                        "additionalProperties": false,
                        "properties": {
                            "name": {
                                "type": "string",
                                "required": true
                            },
                            "pt": {
                                "name": "Geoloc",
                                "type": "object",
                                "optional": true,
                                "options": {},
                                "additionalProperties": false,
                                "properties": {
                                    "lat": {
                                        "type": "number",
                                        "maximum": 90,
                                        "minimum": -90,
                                        "pattern": "^(-)?[0-9]?[0-9](.[0-9]+)?$",
                                        "required": true
                                    },
                                    "long": {
                                        "type": "number",
                                        "maximum": 180,
                                        "minimum": -180,
                                        "pattern": "^(-)?[0-1]?[0-9]?[0-9](.[0-9]+)?$",
                                        "required": true
                                    }
                                }
                            },
                            "rad": {
                                "type": "number",
                                "maximum": 180,
                                "minimum": 0,
                                "required": true
                            },
                            "unit": {
                                "type": "string",
                                "enum": [
                                    "degree"
                                ],
                                "optional": true
                            },
                            "sched": {
                                "description": "Play schedule is always Billboard local time.",
                                "type": "array",
                                "required": true,
                                "minItems": 1,
                                "items": {
                                    "type": "object",
                                    "additionalProperties": false,
                                    "properties": {
                                        "day": {
                                            "type": "string",
                                            "format": "date",
                                            "required": true
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "required": true
                }
            }
        },
        "type3": {
            "description": "Spot",
            "type": "object",
            "optional": true,
            "additionalProperties": false,
            "properties": {
                "sel": {
                    "type": "array",
                    "items": {
                        "name": "spot",
                        "type": "object",
                        "optional": true,
                        "additionalProperties": false,
                        "properties": {
                            "ds": {
                                "type": "string",
                                "required": true
                            },
                            "sched": {
                                "description": "Play schedule is always Billboard local time.",
                                "type": "array",
                                "required": true,
                                "minItems": 1,
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "freq": {
                                            "type": "number",
                                            "format": "integer",
                                            "maximum": 180,
                                            "minimum": 1,
                                            "required": true
                                        },
                                        "time": {
                                            "required": true,
                                            "type": "string",
                                            "format": "date-time"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "required": true
                }
            }
        },
        "finc": {
            "type": "object",
            "optional": true,
            "additionalProperties": false,
            "properties": {
                "coupon": {
                    "type": "string",
                    "format": "mongodbid",
                    "description": "Must be a valid coupon ID",
                    "optional": true
                },
                "budg": {
                    "type": "number",
                    "optional": true
                }
            }
        },
        "lay": {
            "type": "string",
            "format": "mongodbid",
            "description": "Must be a valid layout ID",
            "optional": true
        }
    }


};

