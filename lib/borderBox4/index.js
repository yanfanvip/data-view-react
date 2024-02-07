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

var css = ".dv-border-box-4 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-4 .dv-reverse {\n  transform: rotate(180deg);\n}\n.dv-border-box-4 .dv-border-svg-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.dv-border-box-4 .dv-border-svg-container > polyline {\n  fill: none;\n}\n.dv-border-box-4 .sw1 {\n  stroke-width: 1;\n}\n.dv-border-box-4 .sw3 {\n  stroke-width: 3px;\n  stroke-linecap: round;\n}\n.dv-border-box-4 .dv-bb4-line-1 {\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-2 {\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-3 {\n  stroke-width: 3px;\n  stroke-linecap: round;\n}\n.dv-border-box-4 .dv-bb4-line-4 {\n  stroke-width: 3px;\n  stroke-linecap: round;\n}\n.dv-border-box-4 .dv-bb4-line-5 {\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-6 {\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-7 {\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-8 {\n  stroke-width: 3px;\n  stroke-linecap: round;\n}\n.dv-border-box-4 .dv-bb4-line-9 {\n  stroke-width: 3px;\n  stroke-linecap: round;\n  stroke-dasharray: 100 250;\n}\n.dv-border-box-4 .dv-bb4-line-10 {\n  stroke-width: 1;\n  stroke-dasharray: 80 270;\n}\n.dv-border-box-4 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
styleInject_es.styleInject(css);

var defaultColor = ['red', 'rgba(0,0,255,0.8)'];

var BorderBox = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      className = _ref.className,
      style = _ref.style,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? [] : _ref$color,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === undefined ? 'transparent' : _ref$backgroundColor;

  var _useAutoResize = autoResize.useAutoResize(ref),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var mergedColor = React.useMemo(function () {
    return index$2.util_2(index$2.util_1(defaultColor, true), color || []);
  }, [color]);

  var classNames = React.useMemo(function () {
    return index$1.classnames('dv-border-box-4', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      {
        className: 'dv-border-svg-container ' + (reverse && 'dv-reverse'),
        width: width,
        height: height
      },
      React__default.createElement('polygon', { fill: backgroundColor, points: '\n          ' + (width - 15) + ', 22 170, 22 150, 7 40, 7 28, 21 32, 24\n          16, 42 16, ' + (height - 32) + ' 41, ' + (height - 7) + ' ' + (width - 15) + ', ' + (height - 7) + '\n        ' }),
      React__default.createElement('polyline', {
        className: 'dv-bb4-line-1',
        stroke: mergedColor[0],
        points: '145, ' + (height - 5) + ' 40, ' + (height - 5) + ' 10, ' + (height - 35) + '\n          10, 40 40, 5 150, 5 170, 20 ' + (width - 15) + ', 20'
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb4-line-2',
        stroke: mergedColor[1],
        points: '245, ' + (height - 1) + ' 36, ' + (height - 1) + ' 14, ' + (height - 23) + '\n          14, ' + (height - 100)
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb4-line-3',
        stroke: mergedColor[0],
        points: '7, ' + (height - 40) + ' 7, ' + (height - 75)
      }),
      React__default.createElement('polyline', { className: 'dv-bb4-line-4', stroke: mergedColor[0], points: '28, 24 13, 41 13, 64' }),
      React__default.createElement('polyline', { className: 'dv-bb4-line-5', stroke: mergedColor[0], points: '5, 45 5, 140' }),
      React__default.createElement('polyline', { className: 'dv-bb4-line-6', stroke: mergedColor[1], points: '14, 75 14, 180' }),
      React__default.createElement('polyline', {
        className: 'dv-bb4-line-7',
        stroke: mergedColor[1],
        points: '55, 11 147, 11 167, 26 250, 26'
      }),
      React__default.createElement('polyline', { className: 'dv-bb4-line-8', stroke: mergedColor[1], points: '158, 5 173, 16' }),
      React__default.createElement('polyline', {
        className: 'dv-bb4-line-9',
        stroke: mergedColor[0],
        points: '200, 17 ' + (width - 10) + ', 17'
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb4-line-10',
        stroke: mergedColor[1],
        points: '385, 17 ' + (width - 10) + ', 17'
      })
    ),
    React__default.createElement(
      'div',
      { className: 'border-box-content' },
      children
    )
  );
});

BorderBox.propTypes = {
  children: styleInject_es.PropTypes.node,
  reverse: styleInject_es.PropTypes.bool,
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object,
  color: styleInject_es.PropTypes.array,
  backgroundColor: styleInject_es.PropTypes.string

  // 指定 props 的默认值：
};BorderBox.defaultProps = {
  reverse: false,
  backgroundColor: 'transparent'
};

module.exports = BorderBox;
//# sourceMappingURL=index.js.map
