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

var css = ".dv-border-box-1 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-1 .border {\n  position: absolute;\n  display: block;\n}\n.dv-border-box-1 .right-top {\n  right: 0px;\n  transform: rotateY(180deg);\n}\n.dv-border-box-1 .left-bottom {\n  bottom: 0px;\n  transform: rotateX(180deg);\n}\n.dv-border-box-1 .right-bottom {\n  right: 0px;\n  bottom: 0px;\n  transform: rotateX(180deg) rotateY(180deg);\n}\n.dv-border-box-1 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
styleInject_es.styleInject(css);

var border = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];
var defaultColor = ['#4fd2dd', '#235fa7'];

var BorderBox = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
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
    return index$1.classnames('dv-border-box-1', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      { className: 'border', width: width, height: height },
      React__default.createElement('polygon', { fill: backgroundColor, points: '10, 27 10, ' + (height - 27) + ' 13, ' + (height - 24) + ' 13, ' + (height - 21) + ' 24, ' + (height - 11) + '\n        38, ' + (height - 11) + ' 41, ' + (height - 8) + ' 73, ' + (height - 8) + ' 75, ' + (height - 10) + ' 81, ' + (height - 10) + '\n        85, ' + (height - 6) + ' ' + (width - 85) + ', ' + (height - 6) + ' ' + (width - 81) + ', ' + (height - 10) + ' ' + (width - 75) + ', ' + (height - 10) + '\n        ' + (width - 73) + ', ' + (height - 8) + ' ' + (width - 41) + ', ' + (height - 8) + ' ' + (width - 38) + ', ' + (height - 11) + '\n        ' + (width - 24) + ', ' + (height - 11) + ' ' + (width - 13) + ', ' + (height - 21) + ' ' + (width - 13) + ', ' + (height - 24) + '\n        ' + (width - 10) + ', ' + (height - 27) + ' ' + (width - 10) + ', 27 ' + (width - 13) + ', 25 ' + (width - 13) + ', 21\n        ' + (width - 24) + ', 11 ' + (width - 38) + ', 11 ' + (width - 41) + ', 8 ' + (width - 73) + ', 8 ' + (width - 75) + ', 10\n        ' + (width - 81) + ', 10 ' + (width - 85) + ', 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24' })
    ),
    border.map(function (borderName) {
      return React__default.createElement(
        'svg',
        {
          width: '150px',
          height: '150px',
          key: borderName,
          className: borderName + ' border'
        },
        React__default.createElement(
          'polygon',
          {
            fill: mergedColor[0],
            points: '6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63'
          },
          React__default.createElement('animate', {
            attributeName: 'fill',
            values: mergedColor[0] + ';' + mergedColor[1] + ';' + mergedColor[0],
            dur: '0.5s',
            begin: '0s',
            repeatCount: 'indefinite'
          })
        ),
        React__default.createElement(
          'polygon',
          {
            fill: mergedColor[1],
            points: '27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8'
          },
          React__default.createElement('animate', {
            attributeName: 'fill',
            values: mergedColor[1] + ';' + mergedColor[0] + ';' + mergedColor[1],
            dur: '0.5s',
            begin: '0s',
            repeatCount: 'indefinite'
          })
        ),
        React__default.createElement(
          'polygon',
          {
            fill: mergedColor[0],
            points: '9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54'
          },
          React__default.createElement('animate', {
            attributeName: 'fill',
            values: mergedColor[0] + ';' + mergedColor[1] + ';transparent',
            dur: '1s',
            begin: '0s',
            repeatCount: 'indefinite'
          })
        )
      );
    }),
    React__default.createElement(
      'div',
      { className: 'border-box-content' },
      children
    )
  );
});

BorderBox.propTypes = {
  children: styleInject_es.PropTypes.node,
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object,
  color: styleInject_es.PropTypes.array,
  backgroundColor: styleInject_es.PropTypes.string
};

module.exports = BorderBox;
//# sourceMappingURL=index.js.map
