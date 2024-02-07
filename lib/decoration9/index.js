'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('../style-inject.es-55d78dad.js');
var index = require('../index-92c36402.js');
require('../_babelHelpers-1c35d3ad.js');
var autoResize = require('../autoResize-4af58baf.js');
var index$1 = require('../index-4a59a5ac.js');
var index$2 = require('../index-8aeda36a.js');
var index$3 = require('../index-19aa5843.js');

var css = ".dv-decoration-9 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dv-decoration-9 svg {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  transform-origin: left top;\n}\n";
styleInject_es.styleInject(css);

var defaultColor = ['rgba(3, 166, 224, 0.8)', 'rgba(3, 166, 224, 0.5)'];

var svgWH = [100, 100];

var Decoration = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? [] : _ref$color,
      _ref$dur = _ref.dur,
      dur = _ref$dur === undefined ? 3 : _ref$dur;

  var _useAutoResize = autoResize.useAutoResize(ref),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var polygonIdRef = React.useRef('decoration-9-polygon-' + index.uuid());

  var mergedColor = React.useMemo(function () {
    return index$2.util_2(index$2.util_1(defaultColor, true), color || []);
  }, [color]);

  var svgScale = React.useMemo(function () {
    var w = svgWH[0],
        h = svgWH[1];


    return [width / w, height / h];
  }, [width, height]);

  var classNames = React.useMemo(function () {
    return index$1.classnames('dv-decoration-9', className);
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
      React__default.createElement(
        'defs',
        null,
        React__default.createElement('polygon', {
          id: polygonIdRef.current,
          points: '15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5'
        })
      ),
      React__default.createElement(
        'circle',
        {
          cx: '50',
          cy: '50',
          r: '45',
          fill: 'transparent',
          stroke: mergedColor[1],
          strokeWidth: '10',
          strokeDasharray: '80, 100, 30, 100'
        },
        React__default.createElement('animateTransform', {
          attributeName: 'transform',
          type: 'rotate',
          values: '0 50 50;360 50 50',
          dur: dur + 's',
          repeatCount: 'indefinite'
        })
      ),
      React__default.createElement(
        'circle',
        {
          cx: '50',
          cy: '50',
          r: '45',
          fill: 'transparent',
          stroke: mergedColor[0],
          strokeWidth: '6',
          strokeDasharray: '50, 66, 100, 66'
        },
        React__default.createElement('animateTransform', {
          attributeName: 'transform',
          type: 'rotate',
          values: '0 50 50;-360 50 50',
          dur: dur + 's',
          repeatCount: 'indefinite'
        })
      ),
      React__default.createElement('circle', {
        cx: '50',
        cy: '50',
        r: '38',
        fill: 'transparent',
        stroke: index$3.lib_9(mergedColor[1] || defaultColor[1], 30),
        strokeWidth: '1',
        strokeDasharray: '5, 1'
      }),
      new Array(20).fill(0).map(function (foo, i) {
        return React__default.createElement(
          'use',
          {
            key: i,
            href: '#' + polygonIdRef.current,
            stroke: mergedColor[1],
            fill: Math.random() > 0.4 ? 'transparent' : mergedColor[0]
          },
          React__default.createElement('animateTransform', {
            attributeName: 'transform',
            type: 'rotate',
            values: '0 50 50;360 50 50',
            dur: dur + 's',
            begin: i * dur / 20 + 's',
            repeatCount: 'indefinite'
          })
        );
      }),
      React__default.createElement('circle', {
        cx: '50',
        cy: '50',
        r: '26',
        fill: 'transparent',
        stroke: index$3.lib_9(mergedColor[1] || defaultColor[1], 30),
        strokeWidth: '1',
        strokeDasharray: '5, 1'
      })
    ),
    children
  );
});

Decoration.propTypes = {
  children: styleInject_es.PropTypes.node,
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object,
  color: styleInject_es.PropTypes.array,
  dur: styleInject_es.PropTypes.number
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map
