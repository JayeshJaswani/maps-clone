var _0xa742 = ['NavigationControl', '1069581dqjZvj', 'coords', '1336703dnjidP', 'pk.eyJ1IjoiamF5ZXNoamFzd2FuaSIsImEiOiJja29xdjRyMDcwOGdsMnZvaDhibGN6MXN6In0.VJXnYJh3bqxSyKZkzzzqyg', '5eRfghc', 'getCurrentPosition', '177QNuRSv', '202ypSYGL', '7653utRYfM', '1zNZhRw', '156102pRzjzZ', 'longitude', '833774zhaHmR', 'Map', 'latitude', '2nKKoUq', '5358fEhHWz', 'mapbox://styles/mapbox/streets-v11', 'addControl', '1093BzKpSc'];
var _0x2ba1a0 = _0x340c;
(function(_0xf5e11f, _0x44e3a8) {
    var _0x1a7cca = _0x340c;
    while (!![]) {
        try {
            var _0x2fa494 = -parseInt(_0x1a7cca(0xc7)) * -parseInt(_0x1a7cca(0xcd)) + -parseInt(_0x1a7cca(0xd5)) * -parseInt(_0x1a7cca(0xd2)) + parseInt(_0x1a7cca(0xcf)) * -parseInt(_0x1a7cca(0xc4)) + parseInt(_0x1a7cca(0xd0)) * parseInt(_0x1a7cca(0xd1)) + parseInt(_0x1a7cca(0xd3)) + parseInt(_0x1a7cca(0xcb)) + -parseInt(_0x1a7cca(0xc9)) * parseInt(_0x1a7cca(0xc3));
            if (_0x2fa494 === _0x44e3a8) break;
            else _0xf5e11f['push'](_0xf5e11f['shift']());
        } catch (_0x566bec) { _0xf5e11f['push'](_0xf5e11f['shift']()); }
    }
}(_0xa742, 0xc0f96), mapboxgl['accessToken'] = _0x2ba1a0(0xcc), navigator['geolocation'][_0x2ba1a0(0xce)](successLocation, errorLocation, { 'enableHighAccuracy': !![] }));

function successLocation(_0x14bafc) {
    var _0x4cc5b4 = _0x2ba1a0;
    console['log'](_0x14bafc), setupMap([_0x14bafc[_0x4cc5b4(0xca)][_0x4cc5b4(0xd4)], _0x14bafc[_0x4cc5b4(0xca)][_0x4cc5b4(0xd7)]]);
}

function _0x340c(_0x260dff, _0x13f71e) { _0x260dff = _0x260dff - 0xc3; var _0xa7426d = _0xa742[_0x260dff]; return _0xa7426d; }

function errorLocation() { setupMap([25.2048, 55.2708]); }

function setupMap(_0x522074) {
    var _0x1cef43 = _0x2ba1a0,
        _0x93dd89 = new mapboxgl[(_0x1cef43(0xd6))]({ 'container': 'map', 'style': _0x1cef43(0xc5), 'center': _0x522074, 'zoom': 0xf });
    _0x93dd89[_0x1cef43(0xc6)](new mapboxgl[(_0x1cef43(0xc8))]());
    var _0x35205c = new MapboxDirections({ 'accessToken': mapboxgl['accessToken'] });
    _0x93dd89['addControl'](_0x35205c, 'top-left');

    var draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
            polygon: true,
            trash: true
        },
        defaultMode: 'draw_polygon'
    });

    map.addControl(draw);

    map.on('draw.create', updateArea);
    map.on('draw.delete', updateArea);
    map.on('draw.update', updateArea);

    function updateArea(e) {
        var data = draw.getAll();
        var answer = document.getElementById('calculated-area');
        if (data.features.length > 0) {
            var area = turf.area(data);
            // restrict to area to 2 decimal points
            var rounded_area = Math.round(area * 100) / 100;
            answer.innerHTML =
                '<p><strong>' +
                rounded_area +
                '</strong></p><p>square meters</p>';
        } else {
            answer.innerHTML = '';
            if (e.type !== 'draw.delete')
                alert('Use the draw tools to draw a polygon!');
        }
    }
}