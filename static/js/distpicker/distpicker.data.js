/*!
 * Distpicker v1.0.4
 * https://github.com/fengyuanchen/distpicker
 *
 * Copyright (c) 2014-2016 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2016-06-01T15:05:52.606Z
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define('menuData', [], factory);
  } else {
    // Browser globals.
    factory();
  }
})(function () {
  var menuData = {
    "level1": {
      "parentMenu1": "一级菜单1",
      "parentMenu2": "一级菜单2",
      "parentMenu3": "一级菜单3",
      "parentMenu4": "一级菜单4"
    },
    "parentMenu1": {
      "parentMenu1-subMenu1": "一级菜单1的子菜单1",
      "parentMenu1-subMenu2": "一级菜单1的子菜单2",
      "parentMenu1-subMenu3": "一级菜单1的子菜单3",
      "parentMenu1-subMenu4": "一级菜单1的子菜单4",
      "parentMenu1-subMenu5": "一级菜单1的子菜单5",
      "parentMenu1-subMenu6": "一级菜单1的子菜单6"
    },
    "parentMenu2": {
      "parentMenu2-subMenu1": "一级菜单2的子菜单1",
      "parentMenu2-subMenu2": "一级菜单2的子菜单2",
      "parentMenu2-subMenu3": "一级菜单2的子菜单3",
      "parentMenu2-subMenu4": "一级菜单2的子菜单4",
      "parentMenu2-subMenu5": "一级菜单2的子菜单5",
      "parentMenu2-subMenu6": "一级菜单2的子菜单6",
    },
    "parentMenu3": {
      "parentMenu3-subMenu1": "一级菜单3的子菜单1",
      "parentMenu3-subMenu2": "一级菜单3的子菜单2",
      "parentMenu3-subMenu3": "一级菜单3的子菜单3",
      "parentMenu3-subMenu4": "一级菜单3的子菜单4",
      "parentMenu3-subMenu5": "一级菜单3的子菜单5",
      "parentMenu3-subMenu6": "一级菜单3的子菜单6",
    },
    "parentMenu4": {
      "parentMenu4-subMenu1": "一级菜单4的子菜单1",
      "parentMenu4-subMenu2": "一级菜单4的子菜单2",
      "parentMenu4-subMenu3": "一级菜单4的子菜单3",
      "parentMenu4-subMenu4": "一级菜单4的子菜单4",
      "parentMenu4-subMenu5": "一级菜单4的子菜单5",
      "parentMenu4-subMenu6": "一级菜单4的子菜单6",
    }
  }
  if (typeof window !== 'undefined') {
    window.menuData = menuData;
  }
  return menuData;
});
