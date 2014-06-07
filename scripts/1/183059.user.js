// Generated by CoffeeScript 1.6.3
/*
// ==UserScript==
// @name Xujc Teach File System CAPTCH
// @namespace  http://mutoo.im/
// @version 1.0
// @description auto recognize the verify code
// @match      http://teach.xujc.com/*
// @match      http://teach.xujc.cn/*
// @require    http://code.jquery.com/jquery-latest.js
// @updateURL
// ==/UserScript==
*/


(function() {
  var Arc, CHAR_HEIGHT, CHAR_WIDTH, HiddenNode, IMG_HEIGHT, IMG_WIDTH, InputNode, Net, Node, OutputNode, data, decode, net, parseResult, sigmoidTransfer, threshold,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  sigmoidTransfer = function(value) {
    return 1 / (1 + Math.exp(-value));
  };

  Arc = (function() {
    function Arc(weight) {
      this.weight = typeof weight === "function" ? weight(Math.random(2) - 1) : void 0;
    }

    Arc.prototype.update = function(weight) {
      this.weight = weight;
    };

    Arc.prototype.setInputNode = function(inputNode) {
      this.inputNode = inputNode;
    };

    Arc.prototype.setOutputNode = function(outputNode) {
      this.outputNode = outputNode;
    };

    Arc.prototype.getWeightedInput = function() {
      return this.inputNode.value * this.weight;
    };

    return Arc;

  })();

  Node = (function() {
    function Node(value) {
      this.value = value != null ? value : 0;
      this.inputArcs = [];
      this.outputArcs = [];
    }

    Node.prototype.connectNode = function(node) {
      return this.connectNodeWithArc(new Arc, node);
    };

    Node.prototype.connectNodeWithArc = function(arc, node) {
      arc.setInputNode(this);
      arc.setOutputNode(node);
      node.addInputArc(arc);
      this.addOutputArc(arc);
    };

    Node.prototype.addInputArc = function(arc) {
      return this.inputArcs.push(arc);
    };

    Node.prototype.addOutputArc = function(arc) {
      return this.outputArcs.push(arc);
    };

    Node.prototype.update = function() {
      var arc, result, _i, _len, _ref;
      result = 0;
      _ref = this.inputArcs;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        arc = _ref[_i];
        result += arc.getWeightedInput();
      }
      return this.value = sigmoidTransfer(result);
    };

    return Node;

  })();

  InputNode = (function(_super) {
    __extends(InputNode, _super);

    function InputNode(value) {
      InputNode.__super__.constructor.call(this, value);
    }

    InputNode.prototype.update = function(value) {
      this.value = value;
    };

    return InputNode;

  })(Node);

  HiddenNode = (function(_super) {
    __extends(HiddenNode, _super);

    function HiddenNode() {
      HiddenNode.__super__.constructor.call(this);
    }

    return HiddenNode;

  })(Node);

  OutputNode = (function(_super) {
    __extends(OutputNode, _super);

    function OutputNode() {
      OutputNode.__super__.constructor.call(this);
    }

    return OutputNode;

  })(Node);

  Net = (function() {
    function Net(numOfInputs, numOfHiddens, numOfOutputs) {
      this.numOfInputs = numOfInputs;
      this.numOfHiddens = numOfHiddens;
      this.numOfOutputs = numOfOutputs;
      this.buildNet();
    }

    Net.prototype.buildNet = function() {
      var hiddenNode, i, inputNode, outputNode, _i, _j, _k, _l, _len, _len1, _len2, _m, _n, _o, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
      this.inputNodes = [];
      this.hiddenNodes = [];
      this.outputNodes = [];
      for (i = _i = 1, _ref = this.numOfInputs; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        this.inputNodes.push(new InputNode);
      }
      this.inputNodes.push(new InputNode(-1));
      for (i = _j = 1, _ref1 = this.numOfHiddens; 1 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 1 <= _ref1 ? ++_j : --_j) {
        this.hiddenNodes.push(new HiddenNode);
      }
      this.hiddenNodes.push(new InputNode(-1));
      for (i = _k = 1, _ref2 = this.numOfOutputs; 1 <= _ref2 ? _k <= _ref2 : _k >= _ref2; i = 1 <= _ref2 ? ++_k : --_k) {
        this.outputNodes.push(new OutputNode);
      }
      _ref3 = this.inputNodes;
      for (_l = 0, _len = _ref3.length; _l < _len; _l++) {
        inputNode = _ref3[_l];
        for (i = _m = 0, _ref4 = this.numOfHiddens; 0 <= _ref4 ? _m < _ref4 : _m > _ref4; i = 0 <= _ref4 ? ++_m : --_m) {
          inputNode.connectNode(this.hiddenNodes[i]);
        }
      }
      _ref5 = this.hiddenNodes;
      for (_n = 0, _len1 = _ref5.length; _n < _len1; _n++) {
        hiddenNode = _ref5[_n];
        _ref6 = this.outputNodes;
        for (_o = 0, _len2 = _ref6.length; _o < _len2; _o++) {
          outputNode = _ref6[_o];
          hiddenNode.connectNode(outputNode);
        }
      }
    };

    Net.prototype.load = function(data) {
      var arc, hiddenNode, inputNode, point, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
      point = 0;
      _ref = this.inputNodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        inputNode = _ref[_i];
        _ref1 = inputNode.outputArcs;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          arc = _ref1[_j];
          arc.update(data[point++]);
        }
      }
      _ref2 = this.hiddenNodes;
      _results = [];
      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        hiddenNode = _ref2[_k];
        _results.push((function() {
          var _l, _len3, _ref3, _results1;
          _ref3 = hiddenNode.outputArcs;
          _results1 = [];
          for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
            arc = _ref3[_l];
            _results1.push(arc.update(data[point++]));
          }
          return _results1;
        })());
      }
      return _results;
    };

    Net.prototype.run = function(inputs) {
      var i, outputNode, _i, _j, _k, _len, _ref, _ref1, _ref2, _results;
      if (inputs.length !== this.numOfInputs) {
        throw "wrong number of inputs";
      }
      for (i = _i = 0, _ref = this.numOfInputs; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        this.inputNodes[i].update(inputs[i]);
      }
      for (i = _j = 0, _ref1 = this.numOfHiddens; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
        this.hiddenNodes[i].update();
      }
      _ref2 = this.outputNodes;
      _results = [];
      for (_k = 0, _len = _ref2.length; _k < _len; _k++) {
        outputNode = _ref2[_k];
        _results.push(outputNode.update());
      }
      return _results;
    };

    return Net;

  })();

  Net.create = function(numOfInputs, numOfHiddens, numOfOutputs) {
    return new Net(numOfInputs, numOfHiddens, numOfOutputs);
  };

  Net.createWithData = function(data) {
    var net, numOfHiddens, numOfInputs, numOfOutputs, point;
    point = 0;
    numOfInputs = data[point++];
    numOfHiddens = data[point++];
    numOfOutputs = data[point++];
    net = new Net(numOfInputs, numOfHiddens, numOfOutputs);
    net.load(data.slice(3));
    return net;
  };

  data = [18, 3, 26, 4.470576, 2.7355769, -6.5390086, -13.101406, -5.9211597, 6.667446, 9.22045, 5.2305045, -3.4738727, -4.7141204, 12.937106, -4.6152735, 4.621963, -18.154024, 1.5861913, 1.7433782, -9.3908205, -3.4764493, -8.704641, -1.9202846, 0.7354568, 3.6340122, 5.748247, 5.636461, 13.02596, 2.0759354, -10.997512, -0.6902169, 4.8752866, -23.330648, 0.7211854, -9.06602, 4.532581, -8.392522, -6.002599, 13.928483, 12.361175, 16.01484, 8.387604, -4.2942247, -1.6765488, 13.035718, 6.4948993, -3.47155, -10.260907, 7.961886, -6.131321, -2.622574, -4.488799, -8.651039, 8.874655, -21.977839, 0.4411778, -5.0922227, -7.1307387, -7.5753045, -3.6616912, -10.373778, 30.547338, 0.81036043, 8.443948, 27.203302, -23.769861, 16.727873, -12.419982, 16.993464, 5.292304, 11.594804, -1.1777647, -2.228593, -26.839905, -45.538723, -11.65957, 15.827081, 7.909621, -1.0737777, -33.409515, 16.233444, -1.7445779, -43.29539, -16.988482, -13.311783, -9.079687, -8.782504, -11.85278, -37.20242, -11.251744, -12.368148, 13.499519, 2.752592, 27.085585, 2.0348134, -42.859417, 20.247005, -3.0802624, -0.29604116, -10.368679, 7.4814277, -39.947617, -42.293667, -11.858528, 23.27455, -4.1166687, 20.538832, 24.490065, -14.808113, 10.000519, -18.431803, -28.147999, -40.68395, -11.115686, -21.371428, 29.165455, 8.255461, 10.391819, -32.657097, -3.2285986, 20.580618, 13.14405, 7.7376523, 7.8338003, 12.926984, 20.6577, -5.860448, 4.406302, -3.402267, -41.755882, 14.001027, -18.048203, -8.207912, -26.153135, -0.77600145, -29.4237, -10.8358965, 24.803003, -7.5253325, 24.592216, -4.272933, 31.007652, 29.060694, 18.152813, 16.453743, 21.932446, 35.898216, 11.555321, 35.4501, 7.866686, 13.871775, 14.064404, 1.5232842, -1.2746866, 10.479545, 1.8933352, 34.733418, -7.8495693, 33.48177, 20.721031, -5.150589, 1.1920105, -6.9500947, 15.963367, 1.4481915];

  net = Net.createWithData(data);

  IMG_WIDTH = 50;

  IMG_HEIGHT = 18;

  CHAR_WIDTH = 8;

  CHAR_HEIGHT = 10;

  threshold = function(r, g, b) {
    return ((r >> 2) + (g >> 1) + (b >> 2)) > 200;
  };

  parseResult = function(result) {
    var flag, i, max, _i, _ref;
    max = -1;
    flag = -1;
    for (i = _i = 0, _ref = result.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      if (result[i] > max) {
        max = result[i];
        flag = i;
      }
    }
    return String.fromCharCode(65 + (26 - flag - 1));
  };

  decode = function(img) {
    var canvas, char, code, ctx, feature, i, p, result, x, _i, _j, _ref;
    canvas = document.createElement("canvas");
    canvas.width = IMG_WIDTH;
    canvas.height = IMG_HEIGHT;
    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    code = "";
    for (i = _i = 0; _i <= 3; i = ++_i) {
      feature = (function() {
        var _j, _ref, _results;
        _results = [];
        for (x = _j = 0, _ref = CHAR_WIDTH + CHAR_HEIGHT; 0 <= _ref ? _j < _ref : _j > _ref; x = 0 <= _ref ? ++_j : --_j) {
          _results.push(0);
        }
        return _results;
      })();
      char = ctx.getImageData(3 + i * 12, 4, CHAR_WIDTH, CHAR_HEIGHT);
      for (p = _j = 0, _ref = CHAR_WIDTH * CHAR_HEIGHT * 4; _j < _ref; p = _j += 4) {
        if (threshold(char.data[p + 0], char.data[p + 1], char.data[p + 2])) {
          feature[(p / 4 >> 0) % CHAR_WIDTH]++;
          feature[CHAR_WIDTH + (p / 4 >> 0) / CHAR_WIDTH >> 0]++;
        }
      }
      result = net.run((function() {
        var _k, _len, _results;
        _results = [];
        for (_k = 0, _len = feature.length; _k < _len; _k++) {
          x = feature[_k];
          _results.push(x / CHAR_HEIGHT);
        }
        return _results;
      })());
      code += parseResult(result);
    }
    console.log(code);
    return code;
  };

  $(function() {
    return $('input[name="code"]').focus(function() {
      var img;
      console.log("search <img src='image.php'> ...");
      console.log($('img[src="image.php"]'));
      img = $('img[src="image.php"]').get(0);
      if (img.complete) {
        return $(this).val(decode(img));
      }
    });
  });

}).call(this);