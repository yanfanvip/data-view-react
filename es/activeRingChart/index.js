import React, { useState, useRef, useMemo, useEffect } from 'react';
import { s as styleInject, P as PropTypes } from '../style-inject.es-3bd340c8.js';
import { c as co } from '../index-65ee9985.js';
import { s as slicedToArray, _ as _extends, t as toConsumableArray } from '../_babelHelpers-a63acad8.js';
import { c as classnames } from '../index-bddb7af5.js';
import { u as util_2, a as util_1 } from '../index-989b4d2a.js';
import '../index-bf9f069c.js';
import '../index-b7412e2a.js';
import '../index-c9d89c8c.js';
import { C as Charts } from '../index-dc0cd592.js';
import DigitalFlop from '../digitalFlop/index.js';

var css = ".dv-active-ring-chart {\n  position: relative;\n}\n.dv-active-ring-chart .active-ring-chart-container {\n  width: 100%;\n  height: 100%;\n}\n.dv-active-ring-chart .active-ring-info {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.dv-active-ring-chart .active-ring-info .dv-digital-flop {\n  width: 100px;\n  height: 30px;\n}\n.dv-active-ring-chart .active-ring-info .active-ring-name {\n  width: 100px;\n  height: 30px;\n  color: #fff;\n  text-align: center;\n  vertical-align: middle;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n";
styleInject(css);

var defaultConfig = {
  /**
   * @description Ring radius
   * @type {String|Number}
   * @default radius = '50%'
   * @example radius = '50%' | 100
   */
  radius: '50%',
  /**
   * @description Active ring radius
   * @type {String|Number}
   * @default activeRadius = '55%'
   * @example activeRadius = '55%' | 110
   */
  activeRadius: '55%',
  /**
   * @description Ring data
   * @type {Array<Object>}
   * @default data = [{ name: '', value: 0 }]
   */
  data: [{ name: '', value: 0 }],
  /**
   * @description Ring line width
   * @type {Number}
   * @default lineWidth = 20
   */
  lineWidth: 20,
  /**
   * @description Active time gap (ms)
   * @type {Number}
   * @default activeTimeGap = 3000
   */
  activeTimeGap: 3000,
  /**
   * @description Ring color (hex|rgb|rgba|color keywords)
   * @type {Array<String>}
   * @default color = [Charts Default Color]
   * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
   */
  color: [],
  /**
   * @description Digital flop style
   * @type {Object}
   */
  digitalFlopStyle: {
    fontSize: 25,
    fill: '#fff'
  },
  /**
   * @description Digital flop toFixed
   * @type {Number}
   */
  digitalFlopToFixed: 0,
  /**
   * @description Digital flop unit
   * @type {String}
   */
  digitalFlopUnit: '',
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
  animationFrame: 50,
  /**
   * @description showOriginValue
   * @type {Boolean}
   * @default showOriginValue = false
   */
  showOriginValue: false
};

var ActiveRingChart = function ActiveRingChart(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === undefined ? {} : _ref$config,
      className = _ref.className,
      style = _ref.style;

  var _useState = useState({
    activeIndex: 0,
    mergedConfig: null
  }),
      _useState2 = slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      activeIndex = _useState2$.activeIndex,
      mergedConfig = _useState2$.mergedConfig,
      setState = _useState2[1];

  var domRef = useRef(null);
  var chartRef = useRef(null);

  var digitalFlop = useMemo(function () {
    if (!mergedConfig) return {};

    var digitalFlopStyle = mergedConfig.digitalFlopStyle,
        digitalFlopToFixed = mergedConfig.digitalFlopToFixed,
        data = mergedConfig.data,
        showOriginValue = mergedConfig.showOriginValue,
        digitalFlopUnit = mergedConfig.digitalFlopUnit;


    var value = data.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });

    var displayValue = void 0;

    if (showOriginValue) {
      displayValue = value[activeIndex];
    } else {
      var sum = value.reduce(function (all, v) {
        return all + v;
      }, 0);
      var percent = parseFloat(value[activeIndex] / sum * 100) || 0;

      displayValue = percent;
    }

    return {
      content: showOriginValue ? '{nt}' + digitalFlopUnit : '{nt}' + (digitalFlopUnit || '%'),
      number: [displayValue],
      style: digitalFlopStyle,
      toFixed: digitalFlopToFixed
    };
  }, [mergedConfig, activeIndex]);

  var ringName = useMemo(function () {
    return !mergedConfig ? '' : mergedConfig.data[activeIndex].name;
  }, [mergedConfig, activeIndex]);

  var fontSize = useMemo(function () {
    return !mergedConfig ? {} : { fontSize: mergedConfig.digitalFlopStyle.fontSize + 'px' };
  }, [mergedConfig]);

  function getRingOption(mergedConfig) {
    var radius = getRealRadius(mergedConfig);

    var newMergedConfig = _extends({}, mergedConfig, {
      data: mergedConfig.data.map(function (item) {
        return _extends({}, item, { radius: radius });
      })
    });

    return {
      series: [_extends({
        type: 'pie'
      }, newMergedConfig, {
        outsideLabel: {
          show: false
        }
      })],
      color: newMergedConfig.color
    };
  }

  function getRealRadius(_ref3) {
    var radius = _ref3.radius,
        activeRadius = _ref3.activeRadius,
        lineWidth = _ref3.lineWidth;
    var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var maxRadius = Math.min.apply(Math, toConsumableArray(chartRef.current.render.area)) / 2;

    var halfLineWidth = lineWidth / 2;

    var realRadius = active ? activeRadius : radius;

    if (typeof realRadius !== 'number') {
      realRadius = parseInt(realRadius) / 100 * maxRadius;
    }

    var insideRadius = realRadius - halfLineWidth;
    var outSideRadius = realRadius + halfLineWidth;

    return [insideRadius, outSideRadius];
  }

  function getOption(mergedConfig, activeIndex) {
    var radius = getRealRadius(mergedConfig);
    var active = getRealRadius(mergedConfig, true);

    var option = getRingOption(mergedConfig);

    return _extends({}, option, {
      series: option.series.reduce(function (prev, serie, index) {
        return index !== 0 ? [].concat(toConsumableArray(prev), [serie]) : [].concat(toConsumableArray(prev), [_extends({}, serie, {
          data: serie.data.map(function (item, i) {
            return _extends({}, item, {
              radius: i === activeIndex ? active : radius
            });
          })
        })]);
      }, [])
    });
  }

  useEffect(function () {
    var _marked = /*#__PURE__*/regeneratorRuntime.mark(loop);

    // 第一次时初始化
    chartRef.current || (chartRef.current = new Charts(domRef.current));

    var mergedConfig = util_2(util_1(defaultConfig, true), config || {});

    chartRef.current.setOption(getRingOption(mergedConfig), true);

    var activeIndex = 0;

    function loop() {
      var _this = this;

      var _loop;

      return regeneratorRuntime.wrap(function loop$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                var option, _option$series$, activeTimeGap, data;

                return regeneratorRuntime.wrap(function _loop$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        setState({ mergedConfig: mergedConfig, activeIndex: activeIndex });

                        option = getOption(mergedConfig, activeIndex);


                        chartRef.current.setOption(option, true);

                        _option$series$ = option.series[0], activeTimeGap = _option$series$.activeTimeGap, data = _option$series$.data;
                        _context.next = 6;
                        return new Promise(function (resolve) {
                          return setTimeout(resolve, activeTimeGap);
                        });

                      case 6:

                        activeIndex += 1;

                        if (activeIndex >= data.length) {
                          activeIndex = 0;
                        }

                      case 8:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _loop, _this);
              });

            case 1:

              return _context2.delegateYield(_loop(), 't0', 3);

            case 3:
              _context2.next = 1;
              break;

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _marked, this);
    }

    return co(loop).end;
  }, [config]);

  var classNames = useMemo(function () {
    return classnames('dv-active-ring-chart', className);
  }, [className]);

  return React.createElement(
    'div',
    { className: classNames, style: style },
    React.createElement('div', { className: 'active-ring-chart-container', ref: domRef }),
    React.createElement(
      'div',
      { className: 'active-ring-info' },
      React.createElement(DigitalFlop, { config: digitalFlop }),
      React.createElement(
        'div',
        { className: 'active-ring-name', style: fontSize },
        ringName
      )
    )
  );
};

ActiveRingChart.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
};

export default ActiveRingChart;
//# sourceMappingURL=index.js.map
