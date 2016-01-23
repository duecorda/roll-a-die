(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.dice3d = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var table;
var initialized = false;

var initialize = function initialize() {
    table = document.createElement('div');
    table.id = 'dice3d-table';
    document.body.appendChild(table);

    initialized = true;
};

var dice3d = function dice3d(faces, n, callback) {
    if (!initialized) initialize();

    if (faces == 6) {
        var sound = document.getElementById('dice3d-sound');

        var audio = document.createElement('audio');
        audio.src = sound.src;
        audio.volume = sound.volume;
        setTimeout(function () {
            audio.play();
        }, Math.random() * 500);

        var angle = {
            1: [90, 0],
            2: [0, 90],
            3: [180, 0],
            4: [0, 0],
            5: [0, -90],
            6: [-90, 0]
        }[n];
        var outer = document.createElement('div');
        outer.className = 'dice3d-outer';
        table.appendChild(outer);

        var dice = document.createElement('div');
        dice.className = 'dice3d';
        dice.style.transform = 'rotateX(' + angle[0] + 'deg) rotateZ(' + angle[1] + 'deg)';
        outer.appendChild(dice);

        var getFace = function getFace(pips) {
            var XMLNS = "http://www.w3.org/2000/svg";
            var svg = document.createElementNS(XMLNS, 'svg');
            svg.setAttribute('class', 'dice3d-face');
            svg.setAttribute('width', 32);
            svg.setAttribute('height', 32);

            pips.map(function (pip) {
                var circle = document.createElementNS(XMLNS, 'circle');
                Object.keys(pip).forEach(function (key) {
                    return circle.setAttribute(key, pip[key]);
                });
                return circle;
            }).forEach(function (circle) {
                return svg.appendChild(circle);
            });

            return svg;
        };

        [[{ cx: 16, cy: 16, r: 6, fill: 'red' }], [{ cx: 8, cy: 8, r: 3 }, { cx: 24, cy: 24, r: 3 }], [{ cx: 8, cy: 8, r: 3 }, { cx: 16, cy: 16, r: 3 }, { cx: 24, cy: 24, r: 3 }], [{ cx: 8, cy: 8, r: 3 }, { cx: 24, cy: 24, r: 3 }, { cx: 8, cy: 24, r: 3 }, { cx: 24, cy: 8, r: 3 }], [{ cx: 8, cy: 8, r: 3 }, { cx: 16, cy: 16, r: 3 }, { cx: 24, cy: 24, r: 3 }, { cx: 8, cy: 24, r: 3 }, { cx: 24, cy: 8, r: 3 }], [{ cx: 8, cy: 8, r: 3 }, { cx: 24, cy: 24, r: 3 }, { cx: 8, cy: 16, r: 3 }, { cx: 24, cy: 16, r: 3 }, { cx: 8, cy: 24, r: 3 }, { cx: 24, cy: 8, r: 3 }]].map(getFace).forEach(function (face) {
            return dice.appendChild(face);
        });

        setTimeout(function () {
            outer.addEventListener('transitionend', function (e) {
                table.removeChild(this);
                if (callback) {
                    callback();
                }
            });
            outer.style.opacity = 0;;
        }, 3 * 1000);
    } else {
        console.error('Unsupported number of faces: ' + faces);
    }
};

module.exports = dice3d;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcZGljZTNkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsSUFBSSxLQUFKO0FBQ0EsSUFBSSxjQUFjLEtBQWQ7O0FBRUosSUFBSSxhQUFhLFNBQWIsVUFBYSxHQUFXO0FBQ3hCLFlBQVEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVIsQ0FEd0I7QUFFeEIsVUFBTSxFQUFOLEdBQVcsY0FBWCxDQUZ3QjtBQUd4QixhQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLEtBQTFCLEVBSHdCOztBQUt4QixrQkFBYyxJQUFkLENBTHdCO0NBQVg7O0FBUWpCLElBQUksU0FBUyxTQUFULE1BQVMsQ0FBUyxLQUFULEVBQWdCLENBQWhCLEVBQW1CLFFBQW5CLEVBQTZCO0FBQ3RDLFFBQUksQ0FBQyxXQUFELEVBQWMsYUFBbEI7O0FBRUEsUUFBSSxTQUFTLENBQVQsRUFBWTtBQUNaLFlBQUksUUFBUSxTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBUixDQURROztBQUdaLFlBQUksUUFBUSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUixDQUhRO0FBSVosY0FBTSxHQUFOLEdBQVksTUFBTSxHQUFOLENBSkE7QUFLWixjQUFNLE1BQU4sR0FBZSxNQUFNLE1BQU4sQ0FMSDtBQU1aLG1CQUFXLFlBQVc7QUFDbEIsa0JBQU0sSUFBTixHQURrQjtTQUFYLEVBRVIsS0FBSyxNQUFMLEtBQWdCLEdBQWhCLENBRkgsQ0FOWTs7QUFVWixZQUFJLFFBQVE7QUFDUixlQUFHLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBSDtBQUNBLGVBQUcsQ0FBQyxDQUFELEVBQUksRUFBSixDQUFIO0FBQ0EsZUFBRyxDQUFDLEdBQUQsRUFBTSxDQUFOLENBQUg7QUFDQSxlQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBSDtBQUNBLGVBQUcsQ0FBQyxDQUFELEVBQUksQ0FBQyxFQUFELENBQVA7QUFD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b290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdGFibGU7XHJcbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxudmFyIGluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcclxuICAgIHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YWJsZS5pZCA9ICdkaWNlM2QtdGFibGUnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcblxyXG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG59O1xyXG5cclxudmFyIGRpY2UzZCA9IGZ1bmN0aW9uKGZhY2VzLCBuLCBjYWxsYmFjaykge1xyXG4gICAgaWYgKCFpbml0aWFsaXplZCkgaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIGlmIChmYWNlcyA9PSA2KSB7XHJcbiAgICAgICAgdmFyIHNvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpY2UzZC1zb3VuZCcpO1xyXG5cclxuICAgICAgICB2YXIgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgIGF1ZGlvLnNyYyA9IHNvdW5kLnNyYztcclxuICAgICAgICBhdWRpby52b2x1bWUgPSBzb3VuZC52b2x1bWU7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgIH0sIE1hdGgucmFuZG9tKCkgKiA1MDApO1xyXG5cclxuICAgICAgICB2YXIgYW5nbGUgPSB7XHJcbiAgICAgICAgICAgIDE6IFs5MCwgMF0sXHJcbiAgICAgICAgICAgIDI6IFswLCA5MF0sXHJcbiAgICAgICAgICAgIDM6IFsxODAsIDBdLFxyXG4gICAgICAgICAgICA0OiBbMCwgMF0sXHJcbiAgICAgICAgICAgIDU6IFswLCAtOTBdLFxyXG4gICAgICAgICAgICA2OiBbLTkwLCAwXSxcclxuICAgICAgICB9W25dO1xyXG4gICAgICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG91dGVyLmNsYXNzTmFtZSA9ICdkaWNlM2Qtb3V0ZXInO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKG91dGVyKTtcclxuXHJcbiAgICAgICAgdmFyIGRpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaWNlLmNsYXNzTmFtZSA9ICdkaWNlM2QnO1xyXG4gICAgICAgIGRpY2Uuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVgoJHthbmdsZVswXX1kZWcpIHJvdGF0ZVooJHthbmdsZVsxXX1kZWcpYDtcclxuICAgICAgICBvdXRlci5hcHBlbmRDaGlsZChkaWNlKTtcclxuXHJcbiAgICAgICAgdmFyIGdldEZhY2UgPSBmdW5jdGlvbihwaXBzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFhNTE5TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gICAgICAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFhNTE5TLCAnc3ZnJyk7XHJcbiAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RpY2UzZC1mYWNlJyk7XHJcbiAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgMzIpO1xyXG4gICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAzMik7XHJcblxyXG4gICAgICAgICAgICBwaXBzLm1hcChmdW5jdGlvbihwaXApIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoWE1MTlMsICdjaXJjbGUnKTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBpcCkuZm9yRWFjaChrZXkgPT4gY2lyY2xlLnNldEF0dHJpYnV0ZShrZXksIHBpcFtrZXldKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2lyY2xlO1xyXG4gICAgICAgICAgICB9KS5mb3JFYWNoKGNpcmNsZSA9PiBzdmcuYXBwZW5kQ2hpbGQoY2lyY2xlKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3ZnO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgW3sgY3g6IDE2LCBjeTogMTYsIHI6IDYsIGZpbGw6ICdyZWQnIH1dLFxyXG4gICAgICAgICAgICBbeyBjeDogOCwgY3k6IDgsIHI6IDMgfSwgeyBjeDogMjQsIGN5OiAyNCwgcjogMyB9XSxcclxuICAgICAgICAgICAgW3sgY3g6IDgsIGN5OiA4LCByOiAzIH0sIHsgY3g6IDE2LCBjeTogMTYsIHI6IDMgfSwgeyBjeDogMjQsIGN5OiAyNCwgcjogMyB9XSxcclxuICAgICAgICAgICAgW3sgY3g6IDgsIGN5OiA4LCByOiAzIH0sIHsgY3g6IDI0LCBjeTogMjQsIHI6IDMgfSwgeyBjeDogOCwgY3k6IDI0LCByOiAzIH0sIHsgY3g6IDI0LCBjeTogOCwgcjogMyB9XSxcclxuICAgICAgICAgICAgW3sgY3g6IDgsIGN5OiA4LCByOiAzIH0sIHsgY3g6IDE2LCBjeTogMTYsIHI6IDMgfSwgeyBjeDogMjQsIGN5OiAyNCwgcjogMyB9LCB7IGN4OiA4LCBjeTogMjQsIHI6IDMgfSwgeyBjeDogMjQsIGN5OiA4LCByOiAzIH1dLFxyXG4gICAgICAgICAgICBbeyBjeDogOCwgY3k6IDgsIHI6IDMgfSwgeyBjeDogMjQsIGN5OiAyNCwgcjogMyB9LCB7IGN4OiA4LCBjeTogMTYsIHI6IDMgfSwgeyBjeDogMjQsIGN5OiAxNiwgcjogMyB9LCB7IGN4OiA4LCBjeTogMjQsIHI6IDMgfSwgeyBjeDogMjQsIGN5OiA4LCByOiAzIH1dLFxyXG4gICAgICAgIF0ubWFwKGdldEZhY2UpLmZvckVhY2goZmFjZSA9PiBkaWNlLmFwcGVuZENoaWxkKGZhY2UpKTtcclxuXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBvdXRlci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgdGFibGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb3V0ZXIuc3R5bGUub3BhY2l0eSA9IDA7O1xyXG4gICAgICAgIH0sIDMgKiAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignVW5zdXBwb3J0ZWQgbnVtYmVyIG9mIGZhY2VzOiAnICsgZmFjZXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkaWNlM2Q7XHJcbiJdfQ==
