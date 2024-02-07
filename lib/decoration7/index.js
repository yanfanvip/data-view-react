'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('../style-inject.es-55d78dad.js');
var index$1 = require('../index-4a59a5ac.js');
var index$2 = require('../index-8aeda36a.js');

var css = ".dv-decoration-7 {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n";
styleInject_es.styleInject(css);

var defaultColor = ['#1dc1f5', '#1dc1f5'];

var Decoration = function Decoration(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? [] : _ref$color;

  var mergedColor = React.useMemo(function () {
    return index$2.util_2(index$2.util_1(defaultColor, true), color || []);
  }, [color]);

  var classNames = React.useMemo(function () {
    return index$1.classnames('dv-decoration-7', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style },
    React__default.createElement(
      'svg',
      { width: '21px', height: '20px' },
      React__default.createElement('polyline', {
        strokeWidth: '4',
        fill: 'transparent',
        stroke: mergedColor[0],
        points: '10, 0 19, 10 10, 20'
      }),
      React__default.createElement('polyline', {
        strokeWidth: '2',
        fill: 'transparent',
        stroke: mergedColor[1],
        points: '2, 0 11, 10 2, 20'
      })
    ),
    children,
    React__default.createElement(
      'svg',
      { width: '21px', height: '20px' },
      React__default.createElement('polyline', {
        strokeWidth: '4',
        fill: 'transparent',
        stroke: mergedColor[0],
        points: '11, 0 2, 10 11, 20'
      }),
      React__default.createElement('polyline', {
        strokeWidth: '2',
        fill: 'transparent',
        stroke: mergedColor[1],
        points: '19, 0 10, 10 19, 20'
      })
    )
  );
};

Decoration.propTypes = {
  children: styleInject_es.PropTypes.node,
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object,
  color: styleInject_es.PropTypes.array
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map
