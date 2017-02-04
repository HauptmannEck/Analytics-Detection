function callback(data) {
    document.getElementById('status').textContent = "DOM Searched";

    displayMeta(data[0].meta);
    displayDataTrack(data[0].dataTrack);
}

function displayMeta(metaData) {
    var html = "";
    document.getElementById('meta-count').textContent = metaData.length;
    metaData.forEach(function (meta, index) {
        html += "<h5>Meta " + (index + 1) + "</h5>";
        meta.forEach(function (attr) {
            html += "<li>" + attr.key + ": " + attr.value + "</li>";
        });
    });
    document.getElementById('meta-list').innerHTML = html;
}

function displayDataTrack(trackData) {
    var html = "";
    document.getElementById('track-count').textContent = trackData.length;
    trackData.forEach(function (track) {
        html += "<h5>" + track.innerText + "</h5>";
        html += "<li>Tag: " + track.tagName + "</li>";
        track.attributes.forEach(function (attr) {
            html += "<li>" + attr.key + ": " + attr.value + "</li>";
        });
    });
    document.getElementById('track-list').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('status').textContent = "Starting Search";

    chrome.tabs.executeScript({
        file: 'injected.js'
    }, callback);
});
