"use strict";

var util = require("util");
var NodeGit = require("../");

var MODE = {
  SINGLE: 1,
  RANGE: 2,
  MERGE_BASE: 4
};

NodeGit.Revparse.MODE = {};
Object.keys(MODE).forEach(function (key) {
  Object.defineProperty(NodeGit.Revparse.MODE, key, {
    get: util.deprecate(function () {
      return MODE[key];
    }, "Use NodeGit.Revspec.TYPE." + key + " instead of NodeGit.Revparse.MODE." + key + ".")
  });
});