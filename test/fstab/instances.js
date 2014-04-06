


module.exports =

[

    {

        desc: "fstab test case/",
        instance: {
            "storage": {
                "type": "disk",
                "device": "/dev/sda1"
            },
            "fstype": "btrfs",
            "readonly": true
        }
    },

    {
        desc: "fstab test case/var",
        instance: {
            "storage": {
                "type": "disk",
                "label": "8f3ba6f4-5c70-46ec-83af-0d5434953e5f"
            },
            "fstype": "ext4",
            "options": ["nosuid"]
        }
    },

    {
        desc: "fstab test case/tmp",
        instance: {
            "storage": {
                "type": "tmpfs",
                "sizeInMB": 64
            }
        }
    },

    {
        desc: "fstab test case/var/www",
        instance: {
            "storage": {
                "type": "nfs",
                "server": "my.nfs.server",
                "remotePath": "/exports/mypath"
            }
        }
    }
]



