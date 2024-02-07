'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('../style-inject.es-55d78dad.js');
require('../index-92c36402.js');
require('../_babelHelpers-1c35d3ad.js');
var autoResize = require('../autoResize-4af58baf.js');
var index$1 = require('../index-4a59a5ac.js');
var index$2 = require('../index-8aeda36a.js');

var css = ".dv-decoration-2 {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n";
styleInject_es.styleInject(css);

var defaultColor = ['#3faacb', '#fff'];

var Decoration = React.forwardRef(function (_ref, ref) {
  var _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      _ref$dur = _ref.dur,
      dur = _ref$dur === undefined ? 6 : _ref$dur,
      className = _ref.className,
      style = _ref.style,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? [] : _ref$color;

  var _useAutoResize = autoResize.useAutoResize(ref),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  function calcSVGData() {
    return reverse ? { w: 1, h: height, x: width / 2, y: 0 } : { w: width, h: 1, x: 0, y: height / 2 };
  }

  var mergedColor = React.useMemo(function () {
    return index$2.util_2(index$2.util_1(defaultColor, true), color || []);
  }, [color]);

  var _useMemo = React.useMemo(calcSVGData, [reverse, width, height]),
      x = _useMemo.x,
      y = _useMemo.y,
      w = _useMemo.w,
      h = _useMemo.h;

  var classNames = React.useMemo(function () {
    return index$1.classnames('dv-decoration-2', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      { width: width + 'px', height: height + 'px' },
      React__default.createElement(
        'rect',
        { x: x, y: y, width: w, height: h, fill: mergedColor[0] },
        React__default.createElement('animate', {
          attributeName: reverse ? 'height' : 'width',
          from: '0',
          to: reverse ? height : width,
          dur: dur + 's',
          calcMode: 'spline',
          keyTimes: '0;1',
          keySplines: '.42,0,.58,1',
          repeatCount: 'indefinite'
        })
      ),
      React__default.createElement(
        'rect',
        { x: x, y: y, width: '1', height: '1', fill: mergedColor[1] },
        React__default.createElement('animate', {
          attributeName: reverse ? 'y' : 'x',
          from: '0',
          to: reverse ? height : width,
          dur: dur + 's',
          calcMode: 'spline',
          keyTimes: '0;1',
          keySplines: '0.42,0,0.58,1',
          repeatCount: 'indefinite'
        })
      )
    )
  );
});

Decoration.propTypes = {
  dur: styleInject_es.PropTypes.number,
  reverse: styleInject_es.PropTypes.bool,
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object,
  color: styleInject_es.PropTypes.array

  // 指定 props 的默认值：
};Decoration.defaultProps = {
  reverse: false,
  dur: 6
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map
