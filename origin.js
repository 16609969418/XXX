var vn = Object.create;
var zr = Object.defineProperty;
var wn = Object.getOwnPropertyDescriptor;
var _n = Object.getOwnPropertyNames;
var Sn = Object.getPrototypeOf, kn = Object.prototype.hasOwnProperty;

// 定义模块缓存
var moduleCache = {};

// 模块定义函数
function defineModule(moduleId, factory) {
    if (!moduleCache[moduleId]) {
        var module = { exports: {} };
        factory(module.exports, module);
        moduleCache[moduleId] = module.exports;
    }
}

// 模块导入函数
function requireModule(moduleId) {
    if (kn.call(moduleCache, moduleId)) {
        return moduleCache[moduleId];
    } else {
        throw new Error('Module ' + moduleId + ' is not defined');
    }
}

// 示例模块定义
defineModule('math', function(exports, module) {
    exports.add = function(a, b) {
        return a + b;
    };

    exports.subtract = function(a, b) {
        return a - b;
    };
});

// 使用示例
try {
    var math = requireModule('math');
    console.log(math.add(5, 3)); // 输出: 8
    console.log(math.subtract(5, 3)); // 输出: 2
} catch (e) {
    console.error(e.message);
}


