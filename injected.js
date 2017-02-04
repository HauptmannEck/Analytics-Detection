/**
 * Created by eckho_000 on 2/4/2017.
 */

function getDataTrack() {
    var dataTrackElements = document.querySelectorAll('[data-track]');
    var dataTracks = [];

    dataTrackElements.forEach(function (element) {
        var dataTrack = {
            tagName: element.tagName,
            innerText: element.innerText,
            attributes: []
        };

        var attributes = element.attributes;

        for (var i = 0; i < attributes.length; i++) {
            var attr = attributes[i];
            dataTrack.attributes.push({
                key: attr.name,
                value: attr.value
            });
        }

        dataTracks.push(dataTrack);
    });

    return dataTracks;
}

function getMeta() {
    var metaElements = document.querySelectorAll('meta[name="analytics"]');
    var metas = [];

    metaElements.forEach(function (element) {
        var meta = [];

        var attributes = element.attributes;

        for (var i = 0; i < attributes.length; i++) {
            var attr = attributes[i];
            meta.push({
                key: attr.name,
                value: attr.value
            })
        }

        metas.push(meta);
    });

    return metas;
}

var data = {
    dataTrack: getDataTrack(),
    meta: getMeta()
};

data;
