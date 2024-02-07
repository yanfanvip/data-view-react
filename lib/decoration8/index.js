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

var css = ".dv-decoration-8 {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n";
styleInject_es.styleInject(css);

var defaultColor = ['#3f96a5', '#3f96a5'];

var Decoration = React.forwardRef(function (_ref, ref) {
  var _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      className = _ref.className,
      style = _ref.style,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? [] : _ref$color;

  var _useAutoResize = autoResize.useAutoResize(ref),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var xPos = function xPos(pos) {
    return !reverse ? pos : width - pos;
  };

  var mergedColor = React.useMemo(function () {
    return index$2.util_2(index$2.util_1(defaultColor, true), color || []);
  }, [color]);

  var _useMemo = React.useMemo(function () {
    return [xPos(0) + ', 0 ' + xPos(30) + ', ' + height / 2, xPos(20) + ', 0 ' + xPos(50) + ', ' + height / 2 + ' ' + xPos(width) + ', ' + height / 2, xPos(0) + ', ' + (height - 3) + ', ' + xPos(200) + ', ' + (height - 3)];
  }, [reverse, width, height]),
      _useMemo2 = _babelHelpers.slicedToArray(_useMemo, 3),
      pointsOne = _useMemo2[0],
      pointsTwo = _useMemo2[1],
      pointsThree = _useMemo2[2];

  var classNames = React.useMemo(function () {
    return index$1.classnames('dv-decoration-8', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      { width: width, height: height },
      React__default.createElement('polyline', {
        stroke: mergedColor[0],
        strokeWidth: '2',
        fill: 'transparent',
        points: pointsOne
      }),
      React__default.createElement('polyline', {
        stroke: mergedColor[0],
        strokeWidth: '2',
        fill: 'transparent',
        points: pointsTwo
      }),
      React__default.createElement('polyline', {
        stroke: mergedColor[1],
        fill: 'transparent',
        strokeWidth: '3',
        points: pointsThree
      })
    )
  );
});

Decoration.propTypes = {
  reverse: styleInject_es.PropTypes.bool,
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object,
  color: styleInject_es.PropTypes.array

  // 指定 props 的默认值：
};Decoration.defaultProps = {
  reverse: false
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map
