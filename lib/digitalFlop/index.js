'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('../style-inject.es-55d78dad.js');
var _babelHelpers = require('../_babelHelpers-1c35d3ad.js');
var index$1 = require('../index-4a59a5ac.js');
var index$2 = require('../index-8aeda36a.js');
require('../index-19aa5843.js');
var index$4 = require('../index-cd27b7f6.js');
require('../index-13c4b549.js');

var css = ".dv-digital-flop canvas {\n  width: 100%;\n  height: 100%;\n}\n";
styleInject_es.styleInject(css);

var defaultConfig = {
  /**
   * @description Number for digital flop
   * @type {Array<Number>}
   * @default number = []
   * @example number = [10]
   */
  number: [],
  /**
   * @description Content formatter
   * @type {String}
   * @default content = ''
   * @example content = '{nt}个'
   */
  content: '',
  /**
   * @description Number toFixed
   * @type {Number}
   * @default toFixed = 0
   */
  toFixed: 0,
  /**
   * @description Text align
   * @type {String}
   * @default textAlign = 'center'
   * @example textAlign = 'center' | 'left' | 'right'
   */
  textAlign: 'center',
  /**
   * @description rowGap
   * @type {Number}
   *@default rowGap = 0
   */
  rowGap: 0,
  /**
   * @description Text style configuration
   * @type {Object} {CRender Class Style}
   */
  style: {
    fontSize: 30,
    fill: '#3de7c9'
  },
  /**
   * @description Number formatter
   * @type {Null|Function}
   */
  formatter: undefined,
  /**
   * @description CRender animationCurve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',
  /**
   * @description CRender animationFrame
   * @type {String}
   * @default animationFrame = 50
   */
  animationFrame: 50
};

var DigitalFlop = function DigitalFlop(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === undefined ? {} : _ref$config,
      className = _ref.className,
      style = _ref.style;

  var domRef = React.useRef(null);
  var rendererRef = React.useRef(null);
  var graphRef = React.useRef(null);

  function getGraph(mergedConfig) {
    var animationCurve = mergedConfig.animationCurve,
        animationFrame = mergedConfig.animationFrame;


    return rendererRef.current.add({
      name: 'numberText',
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getShape(mergedConfig),
      style: getStyle(mergedConfig)
    });
  }

  function getShape(_ref2) {
    var number = _ref2.number,
        content = _ref2.content,
        toFixed = _ref2.toFixed,
        textAlign = _ref2.textAlign,
        rowGap = _ref2.rowGap,
        formatter = _ref2.formatter;

    var _rendererRef$current$ = _babelHelpers.slicedToArray(rendererRef.current.area, 2),
        w = _rendererRef$current$[0],
        h = _rendererRef$current$[1];

    var position = [w / 2, h / 2];

    if (textAlign === 'left') position[0] = 0;
    if (textAlign === 'right') position[0] = w;

    return { number: number, content: content, toFixed: toFixed, position: position, rowGap: rowGap, formatter: formatter };
  }

  function getStyle(_ref3) {
    var style = _ref3.style,
        textAlign = _ref3.textAlign;

    return index$2.util_2(style, {
      textAlign: textAlign,
      textBaseline: 'middle'
    });
  }

  React.useEffect(function () {
    var mergedConfig = index$2.util_2(index$2.util_1(defaultConfig, true), config || {});

    if (!rendererRef.current) {
      rendererRef.current = new index$4.CRender(domRef.current);

      graphRef.current = getGraph(mergedConfig);
    }

    var graph = graphRef.current;
    graph.animationEnd();

    var shape = getShape(mergedConfig);

    var cacheNum = graph.shape.number.length;
    var shapeNum = shape.number.length;

    cacheNum !== shapeNum && (graph.shape.number = shape.number);

    var animationCurve = mergedConfig.animationCurve,
        animationFrame = mergedConfig.animationFrame;


    Object.assign(graph, { animationCurve: animationCurve, animationFrame: animationFrame });

    graph.animation('style', getStyle(mergedConfig), true);
    graph.animation('shape', shape);
  }, [config]);

  var classNames = React.useMemo(function () {
    return index$1.classnames('dv-digital-flop', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style },
    React__default.createElement('canvas', { ref: domRef })
  );
};

DigitalFlop.propTypes = {
  config: styleInject_es.PropTypes.object,
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object
};

module.exports = DigitalFlop;
//# sourceMappingURL=index.js.map
