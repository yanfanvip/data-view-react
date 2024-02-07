import React, { useState, useEffect, useMemo } from 'react';
import { s as styleInject, P as PropTypes } from '../style-inject.es-3bd340c8.js';
import { s as slicedToArray, t as toConsumableArray } from '../_babelHelpers-a63acad8.js';
import { c as classnames } from '../index-bddb7af5.js';
import { u as util_2, a as util_1 } from '../index-989b4d2a.js';

var css = ".dv-capsule-chart {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  padding: 10px;\n  color: #fff;\n}\n.dv-capsule-chart .label-column {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding-right: 10px;\n  text-align: right;\n  font-size: 12px;\n}\n.dv-capsule-chart .label-column div {\n  height: 20px;\n  line-height: 20px;\n}\n.dv-capsule-chart .capsule-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.dv-capsule-chart .capsule-item {\n  box-shadow: 0 0 3px #999;\n  height: 10px;\n  margin: 5px 0px;\n  border-radius: 5px;\n}\n.dv-capsule-chart .capsule-item .capsule-item-column {\n  position: relative;\n  height: 8px;\n  margin-top: 1px;\n  border-radius: 5px;\n  transition: all 0.3s;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.dv-capsule-chart .capsule-item .capsule-item-column .capsule-item-value {\n  font-size: 12px;\n  transform: translateX(100%);\n}\n.dv-capsule-chart .unit-label {\n  height: 20px;\n  font-size: 12px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.dv-capsule-chart .unit-text {\n  text-align: right;\n  display: flex;\n  align-items: flex-end;\n  font-size: 12px;\n  line-height: 20px;\n  margin-left: 10px;\n}\n";
styleInject(css);

var defaultConfig = {
  /**
   * @description Capsule chart data
   * @type {Array<Object>}
   * @default data = []
   * @example data = [{ name: 'foo1', value: 100 }, { name: 'foo2', value: 100 }]
   */
  data: [],
  /**
   * @description Colors (hex|rgb|rgba|color keywords)
   * @type {Array<String>}
   * @default color = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']
   * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
   */
  colors: ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293'],
  /**
   * @description Chart unit
   * @type {String}
   * @default unit = ''
   */
  unit: '',
  /**
   * @description Show item value
   * @type {Boolean}
   * @default showValue = false
   */
  showValue: false
};

var CapsuleChart = function CapsuleChart(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === undefined ? {} : _ref$config,
      className = _ref.className,
      style = _ref.style;

  var _useState = useState({
    mergedConfig: null,
    labelData: [],
    capsuleLength: [],
    capsuleValue: []
  }),
      _useState2 = slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      mergedConfig = _useState2$.mergedConfig,
      labelData = _useState2$.labelData,
      capsuleLength = _useState2$.capsuleLength,
      capsuleValue = _useState2$.capsuleValue,
      setState = _useState2[1];

  useEffect(function () {
    var mergedConfig = util_2(util_1(defaultConfig, true), config || {});

    var data = mergedConfig.data;


    if (!data.length) return;

    var capsuleValue = data.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });

    var maxValue = Math.max.apply(Math, toConsumableArray(capsuleValue));

    var oneFifth = maxValue / 5;

    setState({
      mergedConfig: mergedConfig,
      capsuleValue: capsuleValue,
      capsuleLength: capsuleValue.map(function (v) {
        return maxValue ? v / maxValue : 0;
      }),
      labelData: [].concat(toConsumableArray(new Set(new Array(6).fill(0).map(function (v, i) {
        return Math.ceil(i * oneFifth);
      }))))
    });
  }, [config]);

  var classNames = useMemo(function () {
    return classnames('dv-capsule-chart', className);
  }, [className]);

  return React.createElement(
    'div',
    { className: classNames, style: style },
    !!mergedConfig && React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'div',
        { className: 'label-column' },
        mergedConfig.data.map(function (_ref3) {
          var name = _ref3.name;
          return React.createElement(
            'div',
            { key: name },
            name
          );
        }),
        React.createElement(
          'div',
          null,
          '\xA0'
        )
      ),
      React.createElement(
        'div',
        { className: 'capsule-container' },
        capsuleLength.map(function (capsule, index) {
          return React.createElement(
            'div',
            { className: 'capsule-item', key: index },
            React.createElement(
              'div',
              {
                className: 'capsule-item-column',
                style: {
                  width: capsule * 100 + '%',
                  backgroundColor: '' + mergedConfig.colors[index % mergedConfig.colors.length]
                }
              },
              mergedConfig.showValue && React.createElement(
                'div',
                { className: 'capsule-item-value' },
                capsuleValue[index]
              )
            )
          );
        }),
        React.createElement(
          'div',
          { className: 'unit-label' },
          labelData.map(function (label, index) {
            return React.createElement(
              'div',
              { key: label + index },
              label
            );
          })
        )
      ),
      !!mergedConfig.unit && React.createElement(
        'div',
        { className: 'unit-text' },
        mergedConfig.unit
      )
    )
  );
};

CapsuleChart.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
};

export default CapsuleChart;
//# sourceMappingURL=index.js.map
