'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('../style-inject.es-55d78dad.js');
var index = require('../index-92c36402.js');
var _babelHelpers = require('../_babelHelpers-1c35d3ad.js');
var autoResize = require('../autoResize-4af58baf.js');
var index$1 = require('../index-4a59a5ac.js');
var index$2 = require('../index-8aeda36a.js');

var css = ".dv-scroll-board {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n}\n.dv-scroll-board .text {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dv-scroll-board .header {\n  display: flex;\n  flex-direction: row;\n  font-size: 15px;\n}\n.dv-scroll-board .header .header-item {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 0.3s;\n}\n.dv-scroll-board .rows {\n  overflow: hidden;\n}\n.dv-scroll-board .rows .row-item {\n  display: flex;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.dv-scroll-board .rows .ceil {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dv-scroll-board .rows .index {\n  border-radius: 3px;\n  padding: 0px 3px;\n}\n";
styleInject_es.styleInject(css);

var defaultConfig = {
  /**
   * @description Board header
   * @type {Array<String>}
   * @default header = []
   * @example header = ['column1', 'column2', 'column3']
   */
  header: [],
  /**
   * @description Board data
   * @type {Array<Array>}
   * @default data = []
   */
  data: [],
  /**
   * @description Row num
   * @type {Number}
   * @default rowNum = 5
   */
  rowNum: 5,
  /**
   * @description Header background color
   * @type {String}
   * @default headerBGC = '#00BAFF'
   */
  headerBGC: '#00BAFF',
  /**
   * @description Odd row background color
   * @type {String}
   * @default oddRowBGC = '#003B51'
   */
  oddRowBGC: '#003B51',
  /**
   * @description Even row background color
   * @type {String}
   * @default evenRowBGC = '#003B51'
   */
  evenRowBGC: '#0A2732',
  /**
   * @description Scroll wait time
   * @type {Number}
   * @default waitTime = 2000
   */
  waitTime: 2000,
  /**
   * @description Header height
   * @type {Number}
   * @default headerHeight = 35
   */
  headerHeight: 35,
  /**
   * @description Column width
   * @type {Array<Number>}
   * @default columnWidth = []
   */
  columnWidth: [],
  /**
   * @description Column align
   * @type {Array<String>}
   * @default align = []
   * @example align = ['left', 'center', 'right']
   */
  align: [],
  /**
   * @description Show index
   * @type {Boolean}
   * @default index = false
   */
  index: false,
  /**
   * @description index Header
   * @type {String}
   * @default indexHeader = '#'
   */
  indexHeader: '#',
  /**
   * @description Carousel type
   * @type {String}
   * @default carousel = 'single'
   * @example carousel = 'single' | 'page'
   */
  carousel: 'single',
  /**
   * @description Pause scroll when mouse hovered
   * @type {Boolean}
   * @default hoverPause = true
   * @example hoverPause = true | false
   */
  hoverPause: true
};

function calcHeaderData(_ref) {
  var header = _ref.header,
      index = _ref.index,
      indexHeader = _ref.indexHeader;

  if (!header.length) {
    return [];
  }

  header = [].concat(_babelHelpers.toConsumableArray(header));

  if (index) header.unshift(indexHeader);

  return header;
}

function calcRows(_ref2) {
  var data = _ref2.data,
      index = _ref2.index,
      headerBGC = _ref2.headerBGC,
      rowNum = _ref2.rowNum;

  if (index) {
    data = data.map(function (row, i) {
      row = [].concat(_babelHelpers.toConsumableArray(row));

      var indexTag = '<span class="index" style="background-color: ' + headerBGC + ';">' + (i + 1) + '</span>';

      row.unshift(indexTag);

      return row;
    });
  }

  data = data.map(function (ceils, i) {
    return { ceils: ceils, rowIndex: i };
  });

  var rowLength = data.length;

  if (rowLength > rowNum && rowLength < 2 * rowNum) {
    data = [].concat(_babelHelpers.toConsumableArray(data), _babelHelpers.toConsumableArray(data));
  }

  return data.map(function (d, i) {
    return _babelHelpers._extends({}, d, { scroll: i });
  });
}

function calcAligns(mergedConfig, header) {
  var columnNum = header.length;

  var aligns = new Array(columnNum).fill('left');

  var align = mergedConfig.align;


  return index$2.util_2(aligns, align);
}

var ScrollBoard = React.forwardRef(function (_ref3, ref) {
  var _onClick = _ref3.onClick,
      _ref3$config = _ref3.config,
      config = _ref3$config === undefined ? {} : _ref3$config,
      className = _ref3.className,
      style = _ref3.style,
      onMouseOver = _ref3.onMouseOver;

  var _marked = /*#__PURE__*/regeneratorRuntime.mark(animation);

  var _useAutoResize = autoResize.useAutoResize(ref),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = React.useState({
    mergedConfig: null,

    header: [],

    rows: [],

    widths: [],

    heights: [],

    aligns: []
  }),
      _useState2 = _babelHelpers.slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var mergedConfig = state.mergedConfig,
      header = state.header,
      rows = state.rows,
      widths = state.widths,
      heights = state.heights,
      aligns = state.aligns;


  var stateRef = React.useRef(_babelHelpers._extends({}, state, {
    rowsData: [],
    avgHeight: 0,
    animationIndex: 0
  }));

  Object.assign(stateRef.current, state);

  function onResize() {
    if (!mergedConfig) return;

    var widths = calcWidths(mergedConfig, stateRef.current.rowsData);

    var heights = calcHeights(mergedConfig, header);

    var data = { widths: widths, heights: heights };

    Object.assign(stateRef.current, data);
    setState(function (state) {
      return _babelHelpers._extends({}, state, data);
    });
  }

  function calcData() {
    var mergedConfig = index$2.util_2(index$2.util_1(defaultConfig, true), config || {});

    var header = calcHeaderData(mergedConfig);

    var rows = calcRows(mergedConfig);

    var widths = calcWidths(mergedConfig, stateRef.current.rowsData);

    var heights = calcHeights(mergedConfig, header);

    var aligns = calcAligns(mergedConfig, header);

    var data = {
      mergedConfig: mergedConfig,
      header: header,
      rows: rows,
      widths: widths,
      aligns: aligns,
      heights: heights
    };

    Object.assign(stateRef.current, data, {
      rowsData: rows,
      animationIndex: 0
    });

    setState(function (state) {
      return _babelHelpers._extends({}, state, data);
    });
  }

  function calcWidths(_ref4, rowsData) {
    var columnWidth = _ref4.columnWidth,
        header = _ref4.header;

    var usedWidth = columnWidth.reduce(function (all, w) {
      return all + w;
    }, 0);

    var columnNum = 0;
    if (rowsData[0]) {
      columnNum = rowsData[0].ceils.length;
    } else if (header.length) {
      columnNum = header.length;
    }

    var avgWidth = (width - usedWidth) / (columnNum - columnWidth.length);

    var widths = new Array(columnNum).fill(avgWidth);

    return index$2.util_2(widths, columnWidth);
  }

  function calcHeights(_ref5, header) {
    var headerHeight = _ref5.headerHeight,
        rowNum = _ref5.rowNum,
        data = _ref5.data;

    var allHeight = height;

    if (header.length) allHeight -= headerHeight;

    var avgHeight = allHeight / rowNum;

    Object.assign(stateRef.current, { avgHeight: avgHeight });

    return new Array(data.length).fill(avgHeight);
  }

  function animation() {
    var _rows;

    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var _stateRef$current, avgHeight, animationIndex, _stateRef$current$mer, waitTime, carousel, rowNum, rowsData, rowLength, animationNum, rows, heights, back, newHeights;

    return regeneratorRuntime.wrap(function animation$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _stateRef$current = stateRef.current, avgHeight = _stateRef$current.avgHeight, animationIndex = _stateRef$current.animationIndex, _stateRef$current$mer = _stateRef$current.mergedConfig, waitTime = _stateRef$current$mer.waitTime, carousel = _stateRef$current$mer.carousel, rowNum = _stateRef$current$mer.rowNum, rowsData = _stateRef$current.rowsData;
            rowLength = rowsData.length;

            if (!start) {
              _context.next = 5;
              break;
            }

            _context.next = 5;
            return new Promise(function (resolve) {
              return setTimeout(resolve, waitTime);
            });

          case 5:
            animationNum = carousel === 'single' ? 1 : rowNum;
            rows = rowsData.slice(animationIndex);

            (_rows = rows).push.apply(_rows, _babelHelpers.toConsumableArray(rowsData.slice(0, animationIndex)));
            rows = rows.slice(0, carousel === 'page' ? rowNum * 2 : rowNum + 1);

            heights = new Array(rowLength).fill(avgHeight);

            setState(function (state) {
              return _babelHelpers._extends({}, state, { rows: rows, heights: heights });
            });

            _context.next = 13;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 300);
            });

          case 13:

            animationIndex += animationNum;

            back = animationIndex - rowLength;

            if (back >= 0) animationIndex = back;

            newHeights = [].concat(_babelHelpers.toConsumableArray(heights));

            newHeights.splice.apply(newHeights, [0, animationNum].concat(_babelHelpers.toConsumableArray(new Array(animationNum).fill(0))));

            Object.assign(stateRef.current, { animationIndex: animationIndex });
            setState(function (state) {
              return _babelHelpers._extends({}, state, { heights: newHeights });
            });

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  function emitEvent(handle, ri, ci, row, ceil) {
    var ceils = row.ceils,
        rowIndex = row.rowIndex;


    handle && handle({ row: ceils, ceil: ceil, rowIndex: rowIndex, columnIndex: ci });
  }

  function handleHover(enter, ri, ci, row, ceil) {
    if (enter) emitEvent(onMouseOver, ri, ci, row, ceil);

    if (!mergedConfig.hoverPause) return;

    var _task$current = task.current,
        pause = _task$current.pause,
        resume = _task$current.resume;


    enter && pause && resume ? pause() : resume();
  }

  var getBackgroundColor = function getBackgroundColor(rowIndex) {
    return mergedConfig[rowIndex % 2 === 0 ? 'evenRowBGC' : 'oddRowBGC'];
  };

  var task = React.useRef({});

  React.useEffect(function () {
    var _marked2 = /*#__PURE__*/regeneratorRuntime.mark(loop);

    calcData();

    var start = true;

    function loop() {
      var _this = this;

      var _loop;

      return regeneratorRuntime.wrap(function loop$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                var waitTime;
                return regeneratorRuntime.wrap(function _loop$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        return _context2.delegateYield(animation(start), 't0', 1);

                      case 1:

                        start = false;

                        waitTime = stateRef.current.mergedConfig.waitTime;
                        _context2.next = 5;
                        return new Promise(function (resolve) {
                          return setTimeout(resolve, waitTime - 300);
                        });

                      case 5:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _loop, _this);
              });

            case 1:

              return _context3.delegateYield(_loop(), 't0', 3);

            case 3:
              _context3.next = 1;
              break;

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _marked2, this);
    }

    var _stateRef$current2 = stateRef.current,
        rowNum = _stateRef$current2.mergedConfig.rowNum,
        rowsData = _stateRef$current2.rows;


    var rowLength = rowsData.length;

    if (rowNum >= rowLength) return;

    task.current = index.co(loop);

    return task.current.end;
  }, [config, domRef.current]);

  React.useEffect(onResize, [width, height, domRef.current]);

  var classNames = React.useMemo(function () {
    return index$1.classnames('dv-scroll-board', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    !!header.length && !!mergedConfig && React__default.createElement(
      'div',
      {
        className: 'header',
        style: { backgroundColor: '' + mergedConfig.headerBGC }
      },
      header.map(function (headerItem, i) {
        return React__default.createElement('div', {
          className: 'header-item',
          key: headerItem + '-' + i,
          style: {
            height: mergedConfig.headerHeight + 'px',
            lineHeight: mergedConfig.headerHeight + 'px',
            width: widths[i] + 'px'
          },
          align: aligns[i],
          dangerouslySetInnerHTML: { __html: headerItem }
        });
      })
    ),
    !!mergedConfig && React__default.createElement(
      'div',
      {
        className: 'rows',
        style: {
          height: height - (header.length ? mergedConfig.headerHeight : 0) + 'px'
        }
      },
      rows.map(function (row, ri) {
        return React__default.createElement(
          'div',
          {
            className: 'row-item',
            key: row.toString() + '-' + row.scroll,
            style: {
              height: heights[ri] + 'px',
              lineHeight: heights[ri] + 'px',
              backgroundColor: '' + getBackgroundColor(row.rowIndex)
            }
          },
          row.ceils.map(function (ceil, ci) {
            return React__default.createElement('div', {
              className: 'ceil',
              key: ceil + '-' + ri + '-' + ci,
              style: { width: widths[ci] + 'px' },
              align: aligns[ci],
              dangerouslySetInnerHTML: { __html: ceil },
              onClick: function onClick() {
                return emitEvent(_onClick, ri, ci, row, ceil);
              },
              onMouseEnter: function onMouseEnter() {
                return handleHover(true, ri, ci, row, ceil);
              },
              onMouseLeave: function onMouseLeave() {
                return handleHover(false);
              }
            });
          })
        );
      })
    )
  );
});

ScrollBoard.propTypes = {
  config: styleInject_es.PropTypes.object,
  onClick: styleInject_es.PropTypes.func,
  onMouseOver: styleInject_es.PropTypes.func,
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object
};

module.exports = ScrollBoard;
//# sourceMappingURL=index.js.map
