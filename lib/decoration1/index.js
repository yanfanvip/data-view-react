'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('../style-inject.es-55d78dad.js');
require('../index-92c36402.js');
var _babelHelpers = require('../_babelHelpers-1c35d3ad.js');
var autoResize = require('../autoResize-4af58baf.js');
var index$1 = require('../index-4a59a5ac.js');
var index$2 = require('../index-8aeda36a.js');

var css = ".dv-decoration-1 {\n  width: 100%;\n  height: 100%;\n}\n.dv-decoration-1 svg {\n  transform-origin: left top;\n}\n";
styleInject_es.styleInject(css);

var defaultColor = ['#fff', '#0de7c2'];

var pointSideLength = 2.5;

var halfPointSideLength = pointSideLength / 2;

var svgWH = [200, 50];

var rowNum = 4;

var rowPoints = 20;

function getPoints() {
  var w = svgWH[0],
      h = svgWH[1];


  var horizontalGap = w / (rowPoints + 1);
  var verticalGap = h / (rowNum + 1);

  var points = new Array(rowNum).fill(0).map(function (foo, i) {
    return new Array(rowPoints).fill(0).map(function (foo, j) {
      return [horizontalGap * (j + 1), verticalGap * (i + 1)];
    });
  });

  return points.reduce(function (all, item) {
    return [].concat(_babelHelpers.toConsumableArray(all), _babelHelpers.toConsumableArray(item));
  }, []);
}

var Decoration = React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? [] : _ref$color;

  var _useAutoResize = autoResize.useAutoResize(ref),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  function calcSVGData() {
    var points = getPoints();

    return {
      points: points,
      rects: [points[rowPoints * 2 - 1], points[rowPoints * 2 - 3]],
      svgScale: [width / svgWH[0], height / svgWH[1]]
    };
  }

  var mergedColor = React.useMemo(function () {
    return index$2.util_2(index$2.util_1(defaultColor, true), color || []);
  }, [color]);

  var _useMemo = React.useMemo(calcSVGData, [width, height]),
      svgScale = _useMemo.svgScale,
      points = _useMemo.points,
      rects = _useMemo.rects;

  var classNames = React.useMemo(function () {
    return index$1.classnames('dv-decoration-1', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      {
        width: svgWH[0] + 'px',
        height: svgWH[1] + 'px',
        style: { transform: 'scale(' + svgScale[0] + ',' + svgScale[1] + ')' }
      },
      points.reduce(function (prev, point, i) {
        return Math.random() > 0.6 ? [].concat(_babelHelpers.toConsumableArray(prev), [React__default.createElement(
          'rect',
          {
            key: i,
            fill: mergedColor[0],
            x: point[0] - halfPointSideLength,
            y: point[1] - halfPointSideLength,
            width: pointSideLength,
            height: pointSideLength
          },
          Math.random() > 0.6 && React__default.createElement('animate', {
            attributeName: 'fill',
            values: mergedColor[0] + ';transparent',
            dur: '1s',
            begin: Math.random() * 2,
            repeatCount: 'indefinite'
          })
        )]) : prev;
      }, []),
      !!rects[0] && React__default.createElement(
        'rect',
        {
          fill: mergedColor[1],
          x: rects[0][0] - pointSideLength,
          y: rects[0][1] - pointSideLength,
          width: pointSideLength * 2,
          height: pointSideLength * 2
        },
        React__default.createElement('animate', {
          attributeName: 'width',
          values: '0;' + pointSideLength * 2,
          dur: '2s',
          repeatCount: 'indefinite'
        }),
        React__default.createElement('animate', {
          attributeName: 'height',
          values: '0;' + pointSideLength * 2,
          dur: '2s',
          repeatCount: 'indefinite'
        }),
        React__default.createElement('animate', {
          attributeName: 'x',
          values: rects[0][0] + ';' + (rects[0][0] - pointSideLength),
          dur: '2s',
          repeatCount: 'indefinite'
        }),
        React__default.createElement('animate', {
          attributeName: 'y',
          values: rects[0][1] + ';' + (rects[0][1] - pointSideLength),
          dur: '2s',
          repeatCount: 'indefinite'
        })
      ),
      !!rects[1] && React__default.createElement(
        'rect',
        {
          fill: mergedColor[1],
          x: rects[1][0] - 40,
          y: rects[1][1] - pointSideLength,
          width: '40',
          height: pointSideLength * 2
        },
        React__default.createElement('animate', {
          attributeName: 'width',
          values: '0;40;0',
          dur: '2s',
          repeatCount: 'indefinite'
        }),
        React__default.createElement('animate', {
          attributeName: 'x',
          values: rects[1][0] + ';' + (rects[1][0] - 40) + ';' + rects[1][0],
          dur: '2s',
          repeatCount: 'indefinite'
        })
      )
    )
  );
});

Decoration.propTypes = {
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object,
  color: styleInject_es.PropTypes.array
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map
