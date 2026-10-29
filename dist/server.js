#!/usr/bin/env node
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/vscode-languageserver/lib/common/utils/is.js
var require_is = __commonJS({
  "node_modules/vscode-languageserver/lib/common/utils/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.thenable = exports2.typedArray = exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports2.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports2.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports2.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports2.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports2.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports2.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports2.stringArray = stringArray;
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    exports2.typedArray = typedArray;
    function thenable(value) {
      return value && func(value.then);
    }
    exports2.thenable = thenable;
  }
});

// node_modules/vscode-jsonrpc/lib/common/is.js
var require_is2 = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports2.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports2.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports2.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports2.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports2.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports2.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports2.stringArray = stringArray;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Message = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType = exports2.RequestType0 = exports2.AbstractMessageSignature = exports2.ParameterStructures = exports2.ResponseError = exports2.ErrorCodes = void 0;
    var is = require_is2();
    var ErrorCodes;
    (function(ErrorCodes2) {
      ErrorCodes2.ParseError = -32700;
      ErrorCodes2.InvalidRequest = -32600;
      ErrorCodes2.MethodNotFound = -32601;
      ErrorCodes2.InvalidParams = -32602;
      ErrorCodes2.InternalError = -32603;
      ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
      ErrorCodes2.serverErrorStart = -32099;
      ErrorCodes2.MessageWriteError = -32099;
      ErrorCodes2.MessageReadError = -32098;
      ErrorCodes2.PendingResponseRejected = -32097;
      ErrorCodes2.ConnectionInactive = -32096;
      ErrorCodes2.ServerNotInitialized = -32002;
      ErrorCodes2.UnknownErrorCode = -32001;
      ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
      ErrorCodes2.serverErrorEnd = -32e3;
    })(ErrorCodes || (exports2.ErrorCodes = ErrorCodes = {}));
    var ResponseError = class _ResponseError extends Error {
      constructor(code, message, data) {
        super(message);
        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, _ResponseError.prototype);
      }
      toJson() {
        const result = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          result.data = this.data;
        }
        return result;
      }
    };
    exports2.ResponseError = ResponseError;
    var ParameterStructures = class _ParameterStructures {
      constructor(kind) {
        this.kind = kind;
      }
      static is(value) {
        return value === _ParameterStructures.auto || value === _ParameterStructures.byName || value === _ParameterStructures.byPosition;
      }
      toString() {
        return this.kind;
      }
    };
    exports2.ParameterStructures = ParameterStructures;
    ParameterStructures.auto = new ParameterStructures("auto");
    ParameterStructures.byPosition = new ParameterStructures("byPosition");
    ParameterStructures.byName = new ParameterStructures("byName");
    var AbstractMessageSignature = class {
      constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
      }
      get parameterStructures() {
        return ParameterStructures.auto;
      }
    };
    exports2.AbstractMessageSignature = AbstractMessageSignature;
    var RequestType0 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.RequestType0 = RequestType0;
    var RequestType = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType = RequestType;
    var RequestType1 = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType1 = RequestType1;
    var RequestType2 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.RequestType2 = RequestType2;
    var RequestType3 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.RequestType3 = RequestType3;
    var RequestType4 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.RequestType4 = RequestType4;
    var RequestType5 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.RequestType5 = RequestType5;
    var RequestType6 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.RequestType6 = RequestType6;
    var RequestType7 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.RequestType7 = RequestType7;
    var RequestType8 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.RequestType8 = RequestType8;
    var RequestType9 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.RequestType9 = RequestType9;
    var NotificationType = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType = NotificationType;
    var NotificationType0 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.NotificationType0 = NotificationType0;
    var NotificationType1 = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType1 = NotificationType1;
    var NotificationType2 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.NotificationType2 = NotificationType2;
    var NotificationType3 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.NotificationType3 = NotificationType3;
    var NotificationType4 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.NotificationType4 = NotificationType4;
    var NotificationType5 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.NotificationType5 = NotificationType5;
    var NotificationType6 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.NotificationType6 = NotificationType6;
    var NotificationType7 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.NotificationType7 = NotificationType7;
    var NotificationType8 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.NotificationType8 = NotificationType8;
    var NotificationType9 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.NotificationType9 = NotificationType9;
    var Message;
    (function(Message2) {
      function isRequest(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
      }
      Message2.isRequest = isRequest;
      function isNotification(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
      }
      Message2.isNotification = isNotification;
      function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
      }
      Message2.isResponse = isResponse;
    })(Message || (exports2.Message = Message = {}));
  }
});

// node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(exports2) {
    "use strict";
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LRUCache = exports2.LinkedMap = exports2.Touch = void 0;
    var Touch;
    (function(Touch2) {
      Touch2.None = 0;
      Touch2.First = 1;
      Touch2.AsOld = Touch2.First;
      Touch2.Last = 2;
      Touch2.AsNew = Touch2.Last;
    })(Touch || (exports2.Touch = Touch = {}));
    var LinkedMap = class {
      constructor() {
        this[_a] = "LinkedMap";
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        if (touch !== Touch.None) {
          this.touch(item, touch);
        }
        return item.value;
      }
      set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
          item.value = value;
          if (touch !== Touch.None) {
            this.touch(item, touch);
          }
        } else {
          item = { key, value, next: void 0, previous: void 0 };
          switch (touch) {
            case Touch.None:
              this.addItemLast(item);
              break;
            case Touch.First:
              this.addItemFirst(item);
              break;
            case Touch.Last:
              this.addItemLast(item);
              break;
            default:
              this.addItemLast(item);
              break;
          }
          this._map.set(key, item);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.key, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.value, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: [current.key, current.value], done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [(_a = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      addItemFirst(item) {
        if (!this._head && !this._tail) {
          this._tail = item;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item.next = this._head;
          this._head.previous = item;
        }
        this._head = item;
        this._state++;
      }
      addItemLast(item) {
        if (!this._head && !this._tail) {
          this._head = item;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item.previous = this._tail;
          this._tail.next = item;
        }
        this._tail = item;
        this._state++;
      }
      removeItem(item) {
        if (item === this._head && item === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item === this._head) {
          if (!item.next) {
            throw new Error("Invalid list");
          }
          item.next.previous = void 0;
          this._head = item.next;
        } else if (item === this._tail) {
          if (!item.previous) {
            throw new Error("Invalid list");
          }
          item.previous.next = void 0;
          this._tail = item.previous;
        } else {
          const next = item.next;
          const previous = item.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = void 0;
        this._state++;
      }
      touch(item, touch) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch !== Touch.First && touch !== Touch.Last) {
          return;
        }
        if (touch === Touch.First) {
          if (item === this._head) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.previous = void 0;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (touch === Touch.Last) {
          if (item === this._tail) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    };
    exports2.LinkedMap = LinkedMap;
    var LRUCache = class extends LinkedMap {
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
      }
      peek(key) {
        return super.get(key, Touch.None);
      }
      set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trimOld(Math.round(this._limit * this._ratio));
        }
      }
    };
    exports2.LRUCache = LRUCache;
  }
});

// node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/disposable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Disposable = void 0;
    var Disposable;
    (function(Disposable2) {
      function create(func) {
        return {
          dispose: func
        };
      }
      Disposable2.create = create;
    })(Disposable || (exports2.Disposable = Disposable = {}));
  }
});

// node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/ral.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var _ral;
    function RAL() {
      if (_ral === void 0) {
        throw new Error(`No runtime abstraction layer installed`);
      }
      return _ral;
    }
    (function(RAL2) {
      function install(ral) {
        if (ral === void 0) {
          throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
      }
      RAL2.install = install;
    })(RAL || (RAL = {}));
    exports2.default = RAL;
  }
});

// node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/events.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Emitter = exports2.Event = void 0;
    var ral_1 = require_ral();
    var Event;
    (function(Event2) {
      const _disposable = { dispose() {
      } };
      Event2.None = function() {
        return _disposable;
      };
    })(Event || (exports2.Event = Event = {}));
    var CallbackList = class {
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i = 0, len = this._callbacks.length; i < len; i++) {
          if (this._callbacks[i] === callback) {
            if (this._contexts[i] === context) {
              this._callbacks.splice(i, 1);
              this._contexts.splice(i, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i = 0, len = callbacks.length; i < len; i++) {
          try {
            ret.push(callbacks[i].apply(contexts[i], args));
          } catch (e) {
            (0, ral_1.default)().console.error(e);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    };
    var Emitter = class _Emitter {
      constructor(_options) {
        this._options = _options;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result.dispose = _Emitter._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result);
            }
            return result;
          };
        }
        return this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    };
    exports2.Emitter = Emitter;
    Emitter._noop = function() {
    };
  }
});

// node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CancellationTokenSource = exports2.CancellationToken = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var events_1 = require_events();
    var CancellationToken;
    (function(CancellationToken2) {
      CancellationToken2.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken2.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken2.None || candidate === CancellationToken2.Cancelled || Is.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken2.is = is;
    })(CancellationToken || (exports2.CancellationToken = CancellationToken = {}));
    var shortcutEvent = Object.freeze(function(callback, context) {
      const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle.dispose();
      } };
    });
    var MutableToken = class {
      constructor() {
        this._isCancelled = false;
      }
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    };
    var CancellationTokenSource = class {
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
    exports2.CancellationTokenSource = CancellationTokenSource;
  }
});

// node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js
var require_sharedArrayCancellation = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = void 0;
    var cancellation_1 = require_cancellation();
    var CancellationState;
    (function(CancellationState2) {
      CancellationState2.Continue = 0;
      CancellationState2.Cancelled = 1;
    })(CancellationState || (CancellationState = {}));
    var SharedArraySenderStrategy = class {
      constructor() {
        this.buffers = /* @__PURE__ */ new Map();
      }
      enableCancellation(request) {
        if (request.id === null) {
          return;
        }
        const buffer = new SharedArrayBuffer(4);
        const data = new Int32Array(buffer, 0, 1);
        data[0] = CancellationState.Continue;
        this.buffers.set(request.id, buffer);
        request.$cancellationData = buffer;
      }
      async sendCancellation(_conn, id) {
        const buffer = this.buffers.get(id);
        if (buffer === void 0) {
          return;
        }
        const data = new Int32Array(buffer, 0, 1);
        Atomics.store(data, 0, CancellationState.Cancelled);
      }
      cleanup(id) {
        this.buffers.delete(id);
      }
      dispose() {
        this.buffers.clear();
      }
    };
    exports2.SharedArraySenderStrategy = SharedArraySenderStrategy;
    var SharedArrayBufferCancellationToken = class {
      constructor(buffer) {
        this.data = new Int32Array(buffer, 0, 1);
      }
      get isCancellationRequested() {
        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
      }
      get onCancellationRequested() {
        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
      }
    };
    var SharedArrayBufferCancellationTokenSource = class {
      constructor(buffer) {
        this.token = new SharedArrayBufferCancellationToken(buffer);
      }
      cancel() {
      }
      dispose() {
      }
    };
    var SharedArrayReceiverStrategy = class {
      constructor() {
        this.kind = "request";
      }
      createCancellationTokenSource(request) {
        const buffer = request.$cancellationData;
        if (buffer === void 0) {
          return new cancellation_1.CancellationTokenSource();
        }
        return new SharedArrayBufferCancellationTokenSource(buffer);
      }
    };
    exports2.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
  }
});

// node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/semaphore.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Semaphore = void 0;
    var ral_1 = require_ral();
    var Semaphore = class {
      constructor(capacity = 1) {
        if (capacity <= 0) {
          throw new Error("Capacity must be greater than 0");
        }
        this._capacity = capacity;
        this._active = 0;
        this._waiting = [];
      }
      lock(thunk) {
        return new Promise((resolve, reject) => {
          this._waiting.push({ thunk, resolve, reject });
          this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        const next = this._waiting.shift();
        this._active++;
        if (this._active > this._capacity) {
          throw new Error(`To many thunks active`);
        }
        try {
          const result = next.thunk();
          if (result instanceof Promise) {
            result.then((value) => {
              this._active--;
              next.resolve(value);
              this.runNext();
            }, (err) => {
              this._active--;
              next.reject(err);
              this.runNext();
            });
          } else {
            this._active--;
            next.resolve(result);
            this.runNext();
          }
        } catch (err) {
          this._active--;
          next.reject(err);
          this.runNext();
        }
      }
    };
    exports2.Semaphore = Semaphore;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageReader.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var events_1 = require_events();
    var semaphore_1 = require_semaphore();
    var MessageReader;
    (function(MessageReader2) {
      function is(value) {
        let candidate = value;
        return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) && Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
      }
      MessageReader2.is = is;
    })(MessageReader || (exports2.MessageReader = MessageReader = {}));
    var AbstractMessageReader = class {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error) {
        this.errorEmitter.fire(this.asError(error));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(info) {
        this.partialMessageEmitter.fire(info);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Reader received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageReader = AbstractMessageReader;
    var ResolvedMessageReaderOptions;
    (function(ResolvedMessageReaderOptions2) {
      function fromOptions(options) {
        let charset;
        let result;
        let contentDecoder;
        const contentDecoders = /* @__PURE__ */ new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = /* @__PURE__ */ new Map();
        if (options === void 0 || typeof options === "string") {
          charset = options ?? "utf-8";
        } else {
          charset = options.charset ?? "utf-8";
          if (options.contentDecoder !== void 0) {
            contentDecoder = options.contentDecoder;
            contentDecoders.set(contentDecoder.name, contentDecoder);
          }
          if (options.contentDecoders !== void 0) {
            for (const decoder of options.contentDecoders) {
              contentDecoders.set(decoder.name, decoder);
            }
          }
          if (options.contentTypeDecoder !== void 0) {
            contentTypeDecoder = options.contentTypeDecoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          if (options.contentTypeDecoders !== void 0) {
            for (const decoder of options.contentTypeDecoders) {
              contentTypeDecoders.set(decoder.name, decoder);
            }
          }
        }
        if (contentTypeDecoder === void 0) {
          contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
      }
      ResolvedMessageReaderOptions2.fromOptions = fromOptions;
    })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
    var ReadableStreamMessageReader = class extends AbstractMessageReader {
      constructor(readable, options) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 1e4;
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.readSemaphore = new semaphore_1.Semaphore(1);
      }
      set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = void 0;
        this.callback = callback;
        const result = this.readable.onData((data) => {
          this.onData(data);
        });
        this.readable.onError((error) => this.fireError(error));
        this.readable.onClose(() => this.fireClose());
        return result;
      }
      onData(data) {
        try {
          this.buffer.append(data);
          while (true) {
            if (this.nextMessageLength === -1) {
              const headers = this.buffer.tryReadHeaders(true);
              if (!headers) {
                return;
              }
              const contentLength = headers.get("content-length");
              if (!contentLength) {
                this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(headers))}`));
                return;
              }
              const length = parseInt(contentLength);
              if (isNaN(length)) {
                this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
                return;
              }
              this.nextMessageLength = length;
            }
            const body = this.buffer.tryReadBody(this.nextMessageLength);
            if (body === void 0) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer();
            this.nextMessageLength = -1;
            this.readSemaphore.lock(async () => {
              const bytes = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(body) : body;
              const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
              this.callback(message);
            }).catch((error) => {
              this.fireError(error);
            });
          }
        } catch (error) {
          this.fireError(error);
        }
      }
      clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
          this.partialMessageTimer.dispose();
          this.partialMessageTimer = void 0;
        }
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
          return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
          this.partialMessageTimer = void 0;
          if (token === this.messageToken) {
            this.firePartialMessage({ messageToken: token, waitingTime: timeout });
            this.setPartialMessageTimer();
          }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
      }
    };
    exports2.ReadableStreamMessageReader = ReadableStreamMessageReader;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var semaphore_1 = require_semaphore();
    var events_1 = require_events();
    var ContentLength = "Content-Length: ";
    var CRLF = "\r\n";
    var MessageWriter;
    (function(MessageWriter2) {
      function is(value) {
        let candidate = value;
        return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) && Is.func(candidate.onError) && Is.func(candidate.write);
      }
      MessageWriter2.is = is;
    })(MessageWriter || (exports2.MessageWriter = MessageWriter = {}));
    var AbstractMessageWriter = class {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Writer received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageWriter = AbstractMessageWriter;
    var ResolvedMessageWriterOptions;
    (function(ResolvedMessageWriterOptions2) {
      function fromOptions(options) {
        if (options === void 0 || typeof options === "string") {
          return { charset: options ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        } else {
          return { charset: options.charset ?? "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
      }
      ResolvedMessageWriterOptions2.fromOptions = fromOptions;
    })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
    var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
      constructor(writable, options) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error) => this.fireError(error));
        this.writable.onClose(() => this.fireClose());
      }
      async write(msg) {
        return this.writeSemaphore.lock(async () => {
          const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
            if (this.options.contentEncoder !== void 0) {
              return this.options.contentEncoder.encode(buffer);
            } else {
              return buffer;
            }
          });
          return payload.then((buffer) => {
            const headers = [];
            headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
            headers.push(CRLF);
            return this.doWrite(msg, headers, buffer);
          }, (error) => {
            this.fireError(error);
            throw error;
          });
        });
      }
      async doWrite(msg, headers, data) {
        try {
          await this.writable.write(headers.join(""), "ascii");
          return this.writable.write(data);
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    };
    exports2.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractMessageBuffer = void 0;
    var CR = 13;
    var LF = 10;
    var CRLF = "\r\n";
    var AbstractMessageBuffer = class {
      constructor(encoding = "utf-8") {
        this._encoding = encoding;
        this._chunks = [];
        this._totalLength = 0;
      }
      get encoding() {
        return this._encoding;
      }
      append(chunk) {
        const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
        this._chunks.push(toAppend);
        this._totalLength += toAppend.byteLength;
      }
      tryReadHeaders(lowerCaseKeys = false) {
        if (this._chunks.length === 0) {
          return void 0;
        }
        let state = 0;
        let chunkIndex = 0;
        let offset = 0;
        let chunkBytesRead = 0;
        row: while (chunkIndex < this._chunks.length) {
          const chunk = this._chunks[chunkIndex];
          offset = 0;
          column: while (offset < chunk.length) {
            const value = chunk[offset];
            switch (value) {
              case CR:
                switch (state) {
                  case 0:
                    state = 1;
                    break;
                  case 2:
                    state = 3;
                    break;
                  default:
                    state = 0;
                }
                break;
              case LF:
                switch (state) {
                  case 1:
                    state = 2;
                    break;
                  case 3:
                    state = 4;
                    offset++;
                    break row;
                  default:
                    state = 0;
                }
                break;
              default:
                state = 0;
            }
            offset++;
          }
          chunkBytesRead += chunk.byteLength;
          chunkIndex++;
        }
        if (state !== 4) {
          return void 0;
        }
        const buffer = this._read(chunkBytesRead + offset);
        const result = /* @__PURE__ */ new Map();
        const headers = this.toString(buffer, "ascii").split(CRLF);
        if (headers.length < 2) {
          return result;
        }
        for (let i = 0; i < headers.length - 2; i++) {
          const header = headers[i];
          const index = header.indexOf(":");
          if (index === -1) {
            throw new Error(`Message header must separate key and value using ':'
${header}`);
          }
          const key = header.substr(0, index);
          const value = header.substr(index + 1).trim();
          result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
        }
        return result;
      }
      tryReadBody(length) {
        if (this._totalLength < length) {
          return void 0;
        }
        return this._read(length);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(byteCount) {
        if (byteCount === 0) {
          return this.emptyBuffer();
        }
        if (byteCount > this._totalLength) {
          throw new Error(`Cannot read so many bytes!`);
        }
        if (this._chunks[0].byteLength === byteCount) {
          const chunk = this._chunks[0];
          this._chunks.shift();
          this._totalLength -= byteCount;
          return this.asNative(chunk);
        }
        if (this._chunks[0].byteLength > byteCount) {
          const chunk = this._chunks[0];
          const result2 = this.asNative(chunk, byteCount);
          this._chunks[0] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          return result2;
        }
        const result = this.allocNative(byteCount);
        let resultOffset = 0;
        let chunkIndex = 0;
        while (byteCount > 0) {
          const chunk = this._chunks[chunkIndex];
          if (chunk.byteLength > byteCount) {
            const chunkPart = chunk.slice(0, byteCount);
            result.set(chunkPart, resultOffset);
            resultOffset += byteCount;
            this._chunks[chunkIndex] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            byteCount -= byteCount;
          } else {
            result.set(chunk, resultOffset);
            resultOffset += chunk.byteLength;
            this._chunks.shift();
            this._totalLength -= chunk.byteLength;
            byteCount -= chunk.byteLength;
          }
        }
        return result;
      }
    };
    exports2.AbstractMessageBuffer = AbstractMessageBuffer;
  }
});

// node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/connection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createMessageConnection = exports2.ConnectionOptions = exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.RequestCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy = exports2.ConnectionStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.Trace = exports2.NullLogger = exports2.ProgressType = exports2.ProgressToken = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var messages_1 = require_messages();
    var linkedMap_1 = require_linkedMap();
    var events_1 = require_events();
    var cancellation_1 = require_cancellation();
    var CancelNotification;
    (function(CancelNotification2) {
      CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
    })(CancelNotification || (CancelNotification = {}));
    var ProgressToken;
    (function(ProgressToken2) {
      function is(value) {
        return typeof value === "string" || typeof value === "number";
      }
      ProgressToken2.is = is;
    })(ProgressToken || (exports2.ProgressToken = ProgressToken = {}));
    var ProgressNotification;
    (function(ProgressNotification2) {
      ProgressNotification2.type = new messages_1.NotificationType("$/progress");
    })(ProgressNotification || (ProgressNotification = {}));
    var ProgressType = class {
      constructor() {
      }
    };
    exports2.ProgressType = ProgressType;
    var StarRequestHandler;
    (function(StarRequestHandler2) {
      function is(value) {
        return Is.func(value);
      }
      StarRequestHandler2.is = is;
    })(StarRequestHandler || (StarRequestHandler = {}));
    exports2.NullLogger = Object.freeze({
      error: () => {
      },
      warn: () => {
      },
      info: () => {
      },
      log: () => {
      }
    });
    var Trace;
    (function(Trace2) {
      Trace2[Trace2["Off"] = 0] = "Off";
      Trace2[Trace2["Messages"] = 1] = "Messages";
      Trace2[Trace2["Compact"] = 2] = "Compact";
      Trace2[Trace2["Verbose"] = 3] = "Verbose";
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceValues;
    (function(TraceValues2) {
      TraceValues2.Off = "off";
      TraceValues2.Messages = "messages";
      TraceValues2.Compact = "compact";
      TraceValues2.Verbose = "verbose";
    })(TraceValues || (exports2.TraceValues = TraceValues = {}));
    (function(Trace2) {
      function fromString(value) {
        if (!Is.string(value)) {
          return Trace2.Off;
        }
        value = value.toLowerCase();
        switch (value) {
          case "off":
            return Trace2.Off;
          case "messages":
            return Trace2.Messages;
          case "compact":
            return Trace2.Compact;
          case "verbose":
            return Trace2.Verbose;
          default:
            return Trace2.Off;
        }
      }
      Trace2.fromString = fromString;
      function toString(value) {
        switch (value) {
          case Trace2.Off:
            return "off";
          case Trace2.Messages:
            return "messages";
          case Trace2.Compact:
            return "compact";
          case Trace2.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      Trace2.toString = toString;
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceFormat;
    (function(TraceFormat2) {
      TraceFormat2["Text"] = "text";
      TraceFormat2["JSON"] = "json";
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    (function(TraceFormat2) {
      function fromString(value) {
        if (!Is.string(value)) {
          return TraceFormat2.Text;
        }
        value = value.toLowerCase();
        if (value === "json") {
          return TraceFormat2.JSON;
        } else {
          return TraceFormat2.Text;
        }
      }
      TraceFormat2.fromString = fromString;
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    var SetTraceNotification;
    (function(SetTraceNotification2) {
      SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
    })(SetTraceNotification || (exports2.SetTraceNotification = SetTraceNotification = {}));
    var LogTraceNotification;
    (function(LogTraceNotification2) {
      LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
    })(LogTraceNotification || (exports2.LogTraceNotification = LogTraceNotification = {}));
    var ConnectionErrors;
    (function(ConnectionErrors2) {
      ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
      ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
      ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
    })(ConnectionErrors || (exports2.ConnectionErrors = ConnectionErrors = {}));
    var ConnectionError = class _ConnectionError extends Error {
      constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, _ConnectionError.prototype);
      }
    };
    exports2.ConnectionError = ConnectionError;
    var ConnectionStrategy;
    (function(ConnectionStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.cancelUndispatched);
      }
      ConnectionStrategy2.is = is;
    })(ConnectionStrategy || (exports2.ConnectionStrategy = ConnectionStrategy = {}));
    var IdCancellationReceiverStrategy;
    (function(IdCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.kind === void 0 || candidate.kind === "id") && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
      }
      IdCancellationReceiverStrategy2.is = is;
    })(IdCancellationReceiverStrategy || (exports2.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
    var RequestCancellationReceiverStrategy;
    (function(RequestCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "request" && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
      }
      RequestCancellationReceiverStrategy2.is = is;
    })(RequestCancellationReceiverStrategy || (exports2.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
    var CancellationReceiverStrategy;
    (function(CancellationReceiverStrategy2) {
      CancellationReceiverStrategy2.Message = Object.freeze({
        createCancellationTokenSource(_) {
          return new cancellation_1.CancellationTokenSource();
        }
      });
      function is(value) {
        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
      }
      CancellationReceiverStrategy2.is = is;
    })(CancellationReceiverStrategy || (exports2.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
    var CancellationSenderStrategy;
    (function(CancellationSenderStrategy2) {
      CancellationSenderStrategy2.Message = Object.freeze({
        sendCancellation(conn, id) {
          return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_) {
        }
      });
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.sendCancellation) && Is.func(candidate.cleanup);
      }
      CancellationSenderStrategy2.is = is;
    })(CancellationSenderStrategy || (exports2.CancellationSenderStrategy = CancellationSenderStrategy = {}));
    var CancellationStrategy;
    (function(CancellationStrategy2) {
      CancellationStrategy2.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
      });
      function is(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
      }
      CancellationStrategy2.is = is;
    })(CancellationStrategy || (exports2.CancellationStrategy = CancellationStrategy = {}));
    var MessageStrategy;
    (function(MessageStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.handleMessage);
      }
      MessageStrategy2.is = is;
    })(MessageStrategy || (exports2.MessageStrategy = MessageStrategy = {}));
    var ConnectionOptions;
    (function(ConnectionOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy));
      }
      ConnectionOptions2.is = is;
    })(ConnectionOptions || (exports2.ConnectionOptions = ConnectionOptions = {}));
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["New"] = 1] = "New";
      ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
      ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
      ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
    })(ConnectionState || (ConnectionState = {}));
    function createMessageConnection(messageReader, messageWriter, _logger, options) {
      const logger = _logger !== void 0 ? _logger : exports2.NullLogger;
      let sequenceNumber = 0;
      let notificationSequenceNumber = 0;
      let unknownResponseSequenceNumber = 0;
      const version = "2.0";
      let starRequestHandler = void 0;
      const requestHandlers = /* @__PURE__ */ new Map();
      let starNotificationHandler = void 0;
      const notificationHandlers = /* @__PURE__ */ new Map();
      const progressHandlers = /* @__PURE__ */ new Map();
      let timer;
      let messageQueue = new linkedMap_1.LinkedMap();
      let responsePromises = /* @__PURE__ */ new Map();
      let knownCanceledRequests = /* @__PURE__ */ new Set();
      let requestTokens = /* @__PURE__ */ new Map();
      let trace = Trace.Off;
      let traceFormat = TraceFormat.Text;
      let tracer;
      let state = ConnectionState.New;
      const errorEmitter = new events_1.Emitter();
      const closeEmitter = new events_1.Emitter();
      const unhandledNotificationEmitter = new events_1.Emitter();
      const unhandledProgressEmitter = new events_1.Emitter();
      const disposeEmitter = new events_1.Emitter();
      const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
      function createRequestQueueKey(id) {
        if (id === null) {
          throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return "req-" + id.toString();
      }
      function createResponseQueueKey(id) {
        if (id === null) {
          return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
        } else {
          return "res-" + id.toString();
        }
      }
      function createNotificationQueueKey() {
        return "not-" + (++notificationSequenceNumber).toString();
      }
      function addMessageToQueue(queue, message) {
        if (messages_1.Message.isRequest(message)) {
          queue.set(createRequestQueueKey(message.id), message);
        } else if (messages_1.Message.isResponse(message)) {
          queue.set(createResponseQueueKey(message.id), message);
        } else {
          queue.set(createNotificationQueueKey(), message);
        }
      }
      function cancelUndispatched(_message) {
        return void 0;
      }
      function isListening() {
        return state === ConnectionState.Listening;
      }
      function isClosed() {
        return state === ConnectionState.Closed;
      }
      function isDisposed() {
        return state === ConnectionState.Disposed;
      }
      function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
          state = ConnectionState.Closed;
          closeEmitter.fire(void 0);
        }
      }
      function readErrorHandler(error) {
        errorEmitter.fire([error, void 0, void 0]);
      }
      function writeErrorHandler(data) {
        errorEmitter.fire(data);
      }
      messageReader.onClose(closeHandler);
      messageReader.onError(readErrorHandler);
      messageWriter.onClose(closeHandler);
      messageWriter.onError(writeErrorHandler);
      function triggerMessageQueue() {
        if (timer || messageQueue.size === 0) {
          return;
        }
        timer = (0, ral_1.default)().timer.setImmediate(() => {
          timer = void 0;
          processMessageQueue();
        });
      }
      function handleMessage(message) {
        if (messages_1.Message.isRequest(message)) {
          handleRequest(message);
        } else if (messages_1.Message.isNotification(message)) {
          handleNotification(message);
        } else if (messages_1.Message.isResponse(message)) {
          handleResponse(message);
        } else {
          handleInvalidMessage(message);
        }
      }
      function processMessageQueue() {
        if (messageQueue.size === 0) {
          return;
        }
        const message = messageQueue.shift();
        try {
          const messageStrategy = options?.messageStrategy;
          if (MessageStrategy.is(messageStrategy)) {
            messageStrategy.handleMessage(message, handleMessage);
          } else {
            handleMessage(message);
          }
        } finally {
          triggerMessageQueue();
        }
      }
      const callback = (message) => {
        try {
          if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            const key = createRequestQueueKey(cancelId);
            const toCancel = messageQueue.get(key);
            if (messages_1.Message.isRequest(toCancel)) {
              const strategy = options?.connectionStrategy;
              const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
              if (response && (response.error !== void 0 || response.result !== void 0)) {
                messageQueue.delete(key);
                requestTokens.delete(cancelId);
                response.id = toCancel.id;
                traceSendingResponse(response, message.method, Date.now());
                messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                return;
              }
            }
            const cancellationToken = requestTokens.get(cancelId);
            if (cancellationToken !== void 0) {
              cancellationToken.cancel();
              traceReceivedNotification(message);
              return;
            } else {
              knownCanceledRequests.add(cancelId);
            }
          }
          addMessageToQueue(messageQueue, message);
        } finally {
          triggerMessageQueue();
        }
      };
      function handleRequest(requestMessage) {
        if (isDisposed()) {
          return;
        }
        function reply(resultOrError, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id
          };
          if (resultOrError instanceof messages_1.ResponseError) {
            message.error = resultOrError.toJson();
          } else {
            message.result = resultOrError === void 0 ? null : resultOrError;
          }
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replyError(error, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            error: error.toJson()
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replySuccess(result, method, startTime2) {
          if (result === void 0) {
            result = null;
          }
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            result
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
          type = element.type;
          requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
          const tokenKey = requestMessage.id ?? String(Date.now());
          const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
          if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
            cancellationSource.cancel();
          }
          if (requestMessage.id !== null) {
            requestTokens.set(tokenKey, cancellationSource);
          }
          try {
            let handlerResult;
            if (requestHandler) {
              if (requestMessage.params === void 0) {
                if (type !== void 0 && type.numberOfParams !== 0) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(cancellationSource.token);
              } else if (Array.isArray(requestMessage.params)) {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
              }
            } else if (starRequestHandler) {
              handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
            }
            const promise = handlerResult;
            if (!handlerResult) {
              requestTokens.delete(tokenKey);
              replySuccess(handlerResult, requestMessage.method, startTime);
            } else if (promise.then) {
              promise.then((resultOrError) => {
                requestTokens.delete(tokenKey);
                reply(resultOrError, requestMessage.method, startTime);
              }, (error) => {
                requestTokens.delete(tokenKey);
                if (error instanceof messages_1.ResponseError) {
                  replyError(error, requestMessage.method, startTime);
                } else if (error && Is.string(error.message)) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
                } else {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
                }
              });
            } else {
              requestTokens.delete(tokenKey);
              reply(handlerResult, requestMessage.method, startTime);
            }
          } catch (error) {
            requestTokens.delete(tokenKey);
            if (error instanceof messages_1.ResponseError) {
              reply(error, requestMessage.method, startTime);
            } else if (error && Is.string(error.message)) {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
            } else {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
            }
          }
        } else {
          replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
      }
      function handleResponse(responseMessage) {
        if (isDisposed()) {
          return;
        }
        if (responseMessage.id === null) {
          if (responseMessage.error) {
            logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
          } else {
            logger.error(`Received response message without id. No further error information provided.`);
          }
        } else {
          const key = responseMessage.id;
          const responsePromise = responsePromises.get(key);
          traceReceivedResponse(responseMessage, responsePromise);
          if (responsePromise !== void 0) {
            responsePromises.delete(key);
            try {
              if (responseMessage.error) {
                const error = responseMessage.error;
                responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
              } else if (responseMessage.result !== void 0) {
                responsePromise.resolve(responseMessage.result);
              } else {
                throw new Error("Should never happen.");
              }
            } catch (error) {
              if (error.message) {
                logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
              } else {
                logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
              }
            }
          }
        }
      }
      function handleNotification(message) {
        if (isDisposed()) {
          return;
        }
        let type = void 0;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          knownCanceledRequests.delete(cancelId);
          traceReceivedNotification(message);
          return;
        } else {
          const element = notificationHandlers.get(message.method);
          if (element) {
            notificationHandler = element.handler;
            type = element.type;
          }
        }
        if (notificationHandler || starNotificationHandler) {
          try {
            traceReceivedNotification(message);
            if (notificationHandler) {
              if (message.params === void 0) {
                if (type !== void 0) {
                  if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                  }
                }
                notificationHandler();
              } else if (Array.isArray(message.params)) {
                const params = message.params;
                if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                  notificationHandler({ token: params[0], value: params[1] });
                } else {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                    }
                  }
                  notificationHandler(...params);
                }
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                }
                notificationHandler(message.params);
              }
            } else if (starNotificationHandler) {
              starNotificationHandler(message.method, message.params);
            }
          } catch (error) {
            if (error.message) {
              logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
            } else {
              logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
            }
          }
        } else {
          unhandledNotificationEmitter.fire(message);
        }
      }
      function handleInvalidMessage(message) {
        if (!message) {
          logger.error("Received empty message.");
          return;
        }
        logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
        const responseMessage = message;
        if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
          const key = responseMessage.id;
          const responseHandler = responsePromises.get(key);
          if (responseHandler) {
            responseHandler.reject(new Error("The received response has neither a result nor an error property."));
          }
        }
      }
      function stringifyTrace(params) {
        if (params === void 0 || params === null) {
          return void 0;
        }
        switch (trace) {
          case Trace.Verbose:
            return JSON.stringify(params, null, 4);
          case Trace.Compact:
            return JSON.stringify(params);
          default:
            return void 0;
        }
      }
      function traceSendingRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("send-request", message);
        }
      }
      function traceSendingNotification(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Sending notification '${message.method}'.`, data);
        } else {
          logLSPMessage("send-notification", message);
        }
      }
      function traceSendingResponse(message, method, startTime) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
        } else {
          logLSPMessage("send-response", message);
        }
      }
      function traceReceivedRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("receive-request", message);
        }
      }
      function traceReceivedNotification(message) {
        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Received notification '${message.method}'.`, data);
        } else {
          logLSPMessage("receive-notification", message);
        }
      }
      function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          if (responsePromise) {
            const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
            tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
          } else {
            tracer.log(`Received response ${message.id} without active response promise.`, data);
          }
        } else {
          logLSPMessage("receive-response", message);
        }
      }
      function logLSPMessage(type, message) {
        if (!tracer || trace === Trace.Off) {
          return;
        }
        const lspMessage = {
          isLSPMessage: true,
          type,
          message,
          timestamp: Date.now()
        };
        tracer.log(lspMessage);
      }
      function throwIfClosedOrDisposed() {
        if (isClosed()) {
          throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
        }
        if (isDisposed()) {
          throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
        }
      }
      function throwIfListening() {
        if (isListening()) {
          throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
        }
      }
      function throwIfNotListening() {
        if (!isListening()) {
          throw new Error("Call listen() first.");
        }
      }
      function undefinedToNull(param) {
        if (param === void 0) {
          return null;
        } else {
          return param;
        }
      }
      function nullToUndefined(param) {
        if (param === null) {
          return void 0;
        } else {
          return param;
        }
      }
      function isNamedParam(param) {
        return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
      }
      function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
          case messages_1.ParameterStructures.auto:
            if (isNamedParam(param)) {
              return nullToUndefined(param);
            } else {
              return [undefinedToNull(param)];
            }
          case messages_1.ParameterStructures.byName:
            if (!isNamedParam(param)) {
              throw new Error(`Received parameters by name but param is not an object literal.`);
            }
            return nullToUndefined(param);
          case messages_1.ParameterStructures.byPosition:
            return [undefinedToNull(param)];
          default:
            throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
      }
      function computeMessageParams(type, params) {
        let result;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
          case 0:
            result = void 0;
            break;
          case 1:
            result = computeSingleParam(type.parameterStructures, params[0]);
            break;
          default:
            result = [];
            for (let i = 0; i < params.length && i < numberOfParams; i++) {
              result.push(undefinedToNull(params[i]));
            }
            if (params.length < numberOfParams) {
              for (let i = params.length; i < numberOfParams; i++) {
                result.push(null);
              }
            }
            break;
        }
        return result;
      }
      const connection = {
        sendNotification: (type, ...args) => {
          throwIfClosedOrDisposed();
          let method;
          let messageParams;
          if (Is.string(type)) {
            method = type;
            const first = args[0];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
          }
          const notificationMessage = {
            jsonrpc: version,
            method,
            params: messageParams
          };
          traceSendingNotification(notificationMessage);
          return messageWriter.write(notificationMessage).catch((error) => {
            logger.error(`Sending notification failed.`);
            throw error;
          });
        },
        onNotification: (type, handler) => {
          throwIfClosedOrDisposed();
          let method;
          if (Is.func(type)) {
            starNotificationHandler = type;
          } else if (handler) {
            if (Is.string(type)) {
              method = type;
              notificationHandlers.set(type, { type: void 0, handler });
            } else {
              method = type.method;
              notificationHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method !== void 0) {
                notificationHandlers.delete(method);
              } else {
                starNotificationHandler = void 0;
              }
            }
          };
        },
        onProgress: (_type, token, handler) => {
          if (progressHandlers.has(token)) {
            throw new Error(`Progress handler for token ${token} already registered`);
          }
          progressHandlers.set(token, handler);
          return {
            dispose: () => {
              progressHandlers.delete(token);
            }
          };
        },
        sendProgress: (_type, token, value) => {
          return connection.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args) => {
          throwIfClosedOrDisposed();
          throwIfNotListening();
          let method;
          let messageParams;
          let token = void 0;
          if (Is.string(type)) {
            method = type;
            const first = args[0];
            const last = args[args.length - 1];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            if (cancellation_1.CancellationToken.is(last)) {
              paramEnd = paramEnd - 1;
              token = last;
            }
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
            const numberOfParams = type.numberOfParams;
            token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
          }
          const id = sequenceNumber++;
          let disposable;
          if (token) {
            disposable = token.onCancellationRequested(() => {
              const p = cancellationStrategy.sender.sendCancellation(connection, id);
              if (p === void 0) {
                logger.log(`Received no promise from cancellation strategy when cancelling id ${id}`);
                return Promise.resolve();
              } else {
                return p.catch(() => {
                  logger.log(`Sending cancellation messages for id ${id} failed`);
                });
              }
            });
          }
          const requestMessage = {
            jsonrpc: version,
            id,
            method,
            params: messageParams
          };
          traceSendingRequest(requestMessage);
          if (typeof cancellationStrategy.sender.enableCancellation === "function") {
            cancellationStrategy.sender.enableCancellation(requestMessage);
          }
          return new Promise(async (resolve, reject) => {
            const resolveWithCleanup = (r) => {
              resolve(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const rejectWithCleanup = (r) => {
              reject(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
            try {
              await messageWriter.write(requestMessage);
              responsePromises.set(id, responsePromise);
            } catch (error) {
              logger.error(`Sending request failed.`);
              responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : "Unknown reason"));
              throw error;
            }
          });
        },
        onRequest: (type, handler) => {
          throwIfClosedOrDisposed();
          let method = null;
          if (StarRequestHandler.is(type)) {
            method = void 0;
            starRequestHandler = type;
          } else if (Is.string(type)) {
            method = null;
            if (handler !== void 0) {
              method = type;
              requestHandlers.set(type, { handler, type: void 0 });
            }
          } else {
            if (handler !== void 0) {
              method = type.method;
              requestHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method === null) {
                return;
              }
              if (method !== void 0) {
                requestHandlers.delete(method);
              } else {
                starRequestHandler = void 0;
              }
            }
          };
        },
        hasPendingResponse: () => {
          return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
          let _sendNotification = false;
          let _traceFormat = TraceFormat.Text;
          if (sendNotificationOrTraceOptions !== void 0) {
            if (Is.boolean(sendNotificationOrTraceOptions)) {
              _sendNotification = sendNotificationOrTraceOptions;
            } else {
              _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
              _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
            }
          }
          trace = _value;
          traceFormat = _traceFormat;
          if (trace === Trace.Off) {
            tracer = void 0;
          } else {
            tracer = _tracer;
          }
          if (_sendNotification && !isClosed() && !isDisposed()) {
            await connection.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
          }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
          messageWriter.end();
        },
        dispose: () => {
          if (isDisposed()) {
            return;
          }
          state = ConnectionState.Disposed;
          disposeEmitter.fire(void 0);
          const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const promise of responsePromises.values()) {
            promise.reject(error);
          }
          responsePromises = /* @__PURE__ */ new Map();
          requestTokens = /* @__PURE__ */ new Map();
          knownCanceledRequests = /* @__PURE__ */ new Set();
          messageQueue = new linkedMap_1.LinkedMap();
          if (Is.func(messageWriter.dispose)) {
            messageWriter.dispose();
          }
          if (Is.func(messageReader.dispose)) {
            messageReader.dispose();
          }
        },
        listen: () => {
          throwIfClosedOrDisposed();
          throwIfListening();
          state = ConnectionState.Listening;
          messageReader.listen(callback);
        },
        inspect: () => {
          (0, ral_1.default)().console.log("inspect");
        }
      };
      connection.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
        tracer.log(params.message, verbose ? params.verbose : void 0);
      });
      connection.onNotification(ProgressNotification.type, (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
          handler(params.value);
        } else {
          unhandledProgressEmitter.fire(params);
        }
      });
      return connection;
    }
    exports2.createMessageConnection = createMessageConnection;
  }
});

// node_modules/vscode-jsonrpc/lib/common/api.js
var require_api = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/api.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProgressType = exports2.ProgressToken = exports2.createMessageConnection = exports2.NullLogger = exports2.ConnectionOptions = exports2.ConnectionStrategy = exports2.AbstractMessageBuffer = exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = exports2.CancellationToken = exports2.CancellationTokenSource = exports2.Emitter = exports2.Event = exports2.Disposable = exports2.LRUCache = exports2.Touch = exports2.LinkedMap = exports2.ParameterStructures = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.ErrorCodes = exports2.ResponseError = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType0 = exports2.RequestType = exports2.Message = exports2.RAL = void 0;
    exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.Trace = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports2, "Message", { enumerable: true, get: function() {
      return messages_1.Message;
    } });
    Object.defineProperty(exports2, "RequestType", { enumerable: true, get: function() {
      return messages_1.RequestType;
    } });
    Object.defineProperty(exports2, "RequestType0", { enumerable: true, get: function() {
      return messages_1.RequestType0;
    } });
    Object.defineProperty(exports2, "RequestType1", { enumerable: true, get: function() {
      return messages_1.RequestType1;
    } });
    Object.defineProperty(exports2, "RequestType2", { enumerable: true, get: function() {
      return messages_1.RequestType2;
    } });
    Object.defineProperty(exports2, "RequestType3", { enumerable: true, get: function() {
      return messages_1.RequestType3;
    } });
    Object.defineProperty(exports2, "RequestType4", { enumerable: true, get: function() {
      return messages_1.RequestType4;
    } });
    Object.defineProperty(exports2, "RequestType5", { enumerable: true, get: function() {
      return messages_1.RequestType5;
    } });
    Object.defineProperty(exports2, "RequestType6", { enumerable: true, get: function() {
      return messages_1.RequestType6;
    } });
    Object.defineProperty(exports2, "RequestType7", { enumerable: true, get: function() {
      return messages_1.RequestType7;
    } });
    Object.defineProperty(exports2, "RequestType8", { enumerable: true, get: function() {
      return messages_1.RequestType8;
    } });
    Object.defineProperty(exports2, "RequestType9", { enumerable: true, get: function() {
      return messages_1.RequestType9;
    } });
    Object.defineProperty(exports2, "ResponseError", { enumerable: true, get: function() {
      return messages_1.ResponseError;
    } });
    Object.defineProperty(exports2, "ErrorCodes", { enumerable: true, get: function() {
      return messages_1.ErrorCodes;
    } });
    Object.defineProperty(exports2, "NotificationType", { enumerable: true, get: function() {
      return messages_1.NotificationType;
    } });
    Object.defineProperty(exports2, "NotificationType0", { enumerable: true, get: function() {
      return messages_1.NotificationType0;
    } });
    Object.defineProperty(exports2, "NotificationType1", { enumerable: true, get: function() {
      return messages_1.NotificationType1;
    } });
    Object.defineProperty(exports2, "NotificationType2", { enumerable: true, get: function() {
      return messages_1.NotificationType2;
    } });
    Object.defineProperty(exports2, "NotificationType3", { enumerable: true, get: function() {
      return messages_1.NotificationType3;
    } });
    Object.defineProperty(exports2, "NotificationType4", { enumerable: true, get: function() {
      return messages_1.NotificationType4;
    } });
    Object.defineProperty(exports2, "NotificationType5", { enumerable: true, get: function() {
      return messages_1.NotificationType5;
    } });
    Object.defineProperty(exports2, "NotificationType6", { enumerable: true, get: function() {
      return messages_1.NotificationType6;
    } });
    Object.defineProperty(exports2, "NotificationType7", { enumerable: true, get: function() {
      return messages_1.NotificationType7;
    } });
    Object.defineProperty(exports2, "NotificationType8", { enumerable: true, get: function() {
      return messages_1.NotificationType8;
    } });
    Object.defineProperty(exports2, "NotificationType9", { enumerable: true, get: function() {
      return messages_1.NotificationType9;
    } });
    Object.defineProperty(exports2, "ParameterStructures", { enumerable: true, get: function() {
      return messages_1.ParameterStructures;
    } });
    var linkedMap_1 = require_linkedMap();
    Object.defineProperty(exports2, "LinkedMap", { enumerable: true, get: function() {
      return linkedMap_1.LinkedMap;
    } });
    Object.defineProperty(exports2, "LRUCache", { enumerable: true, get: function() {
      return linkedMap_1.LRUCache;
    } });
    Object.defineProperty(exports2, "Touch", { enumerable: true, get: function() {
      return linkedMap_1.Touch;
    } });
    var disposable_1 = require_disposable();
    Object.defineProperty(exports2, "Disposable", { enumerable: true, get: function() {
      return disposable_1.Disposable;
    } });
    var events_1 = require_events();
    Object.defineProperty(exports2, "Event", { enumerable: true, get: function() {
      return events_1.Event;
    } });
    Object.defineProperty(exports2, "Emitter", { enumerable: true, get: function() {
      return events_1.Emitter;
    } });
    var cancellation_1 = require_cancellation();
    Object.defineProperty(exports2, "CancellationTokenSource", { enumerable: true, get: function() {
      return cancellation_1.CancellationTokenSource;
    } });
    Object.defineProperty(exports2, "CancellationToken", { enumerable: true, get: function() {
      return cancellation_1.CancellationToken;
    } });
    var sharedArrayCancellation_1 = require_sharedArrayCancellation();
    Object.defineProperty(exports2, "SharedArraySenderStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArraySenderStrategy;
    } });
    Object.defineProperty(exports2, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
    } });
    var messageReader_1 = require_messageReader();
    Object.defineProperty(exports2, "MessageReader", { enumerable: true, get: function() {
      return messageReader_1.MessageReader;
    } });
    Object.defineProperty(exports2, "AbstractMessageReader", { enumerable: true, get: function() {
      return messageReader_1.AbstractMessageReader;
    } });
    Object.defineProperty(exports2, "ReadableStreamMessageReader", { enumerable: true, get: function() {
      return messageReader_1.ReadableStreamMessageReader;
    } });
    var messageWriter_1 = require_messageWriter();
    Object.defineProperty(exports2, "MessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.MessageWriter;
    } });
    Object.defineProperty(exports2, "AbstractMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.AbstractMessageWriter;
    } });
    Object.defineProperty(exports2, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.WriteableStreamMessageWriter;
    } });
    var messageBuffer_1 = require_messageBuffer();
    Object.defineProperty(exports2, "AbstractMessageBuffer", { enumerable: true, get: function() {
      return messageBuffer_1.AbstractMessageBuffer;
    } });
    var connection_1 = require_connection();
    Object.defineProperty(exports2, "ConnectionStrategy", { enumerable: true, get: function() {
      return connection_1.ConnectionStrategy;
    } });
    Object.defineProperty(exports2, "ConnectionOptions", { enumerable: true, get: function() {
      return connection_1.ConnectionOptions;
    } });
    Object.defineProperty(exports2, "NullLogger", { enumerable: true, get: function() {
      return connection_1.NullLogger;
    } });
    Object.defineProperty(exports2, "createMessageConnection", { enumerable: true, get: function() {
      return connection_1.createMessageConnection;
    } });
    Object.defineProperty(exports2, "ProgressToken", { enumerable: true, get: function() {
      return connection_1.ProgressToken;
    } });
    Object.defineProperty(exports2, "ProgressType", { enumerable: true, get: function() {
      return connection_1.ProgressType;
    } });
    Object.defineProperty(exports2, "Trace", { enumerable: true, get: function() {
      return connection_1.Trace;
    } });
    Object.defineProperty(exports2, "TraceValues", { enumerable: true, get: function() {
      return connection_1.TraceValues;
    } });
    Object.defineProperty(exports2, "TraceFormat", { enumerable: true, get: function() {
      return connection_1.TraceFormat;
    } });
    Object.defineProperty(exports2, "SetTraceNotification", { enumerable: true, get: function() {
      return connection_1.SetTraceNotification;
    } });
    Object.defineProperty(exports2, "LogTraceNotification", { enumerable: true, get: function() {
      return connection_1.LogTraceNotification;
    } });
    Object.defineProperty(exports2, "ConnectionErrors", { enumerable: true, get: function() {
      return connection_1.ConnectionErrors;
    } });
    Object.defineProperty(exports2, "ConnectionError", { enumerable: true, get: function() {
      return connection_1.ConnectionError;
    } });
    Object.defineProperty(exports2, "CancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "CancellationSenderStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationSenderStrategy;
    } });
    Object.defineProperty(exports2, "CancellationStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationStrategy;
    } });
    Object.defineProperty(exports2, "MessageStrategy", { enumerable: true, get: function() {
      return connection_1.MessageStrategy;
    } });
    var ral_1 = require_ral();
    exports2.RAL = ral_1.default;
  }
});

// node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = __commonJS({
  "node_modules/vscode-jsonrpc/lib/node/ril.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var util_1 = require("util");
    var api_1 = require_api();
    var MessageBuffer = class _MessageBuffer extends api_1.AbstractMessageBuffer {
      constructor(encoding = "utf-8") {
        super(encoding);
      }
      emptyBuffer() {
        return _MessageBuffer.emptyBuffer;
      }
      fromString(value, encoding) {
        return Buffer.from(value, encoding);
      }
      toString(value, encoding) {
        if (value instanceof Buffer) {
          return value.toString(encoding);
        } else {
          return new util_1.TextDecoder(encoding).decode(value);
        }
      }
      asNative(buffer, length) {
        if (length === void 0) {
          return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        } else {
          return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
        }
      }
      allocNative(length) {
        return Buffer.allocUnsafe(length);
      }
    };
    MessageBuffer.emptyBuffer = Buffer.allocUnsafe(0);
    var ReadableStreamWrapper = class {
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      onData(listener) {
        this.stream.on("data", listener);
        return api_1.Disposable.create(() => this.stream.off("data", listener));
      }
    };
    var WritableStreamWrapper = class {
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      write(data, encoding) {
        return new Promise((resolve, reject) => {
          const callback = (error) => {
            if (error === void 0 || error === null) {
              resolve();
            } else {
              reject(error);
            }
          };
          if (typeof data === "string") {
            this.stream.write(data, encoding, callback);
          } else {
            this.stream.write(data, callback);
          }
        });
      }
      end() {
        this.stream.end();
      }
    };
    var _ril = Object.freeze({
      messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
      }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: (msg, options) => {
            try {
              return Promise.resolve(Buffer.from(JSON.stringify(msg, void 0, 0), options.charset));
            } catch (err) {
              return Promise.reject(err);
            }
          }
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: (buffer, options) => {
            try {
              if (buffer instanceof Buffer) {
                return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
              } else {
                return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
              }
            } catch (err) {
              return Promise.reject(err);
            }
          }
        })
      }),
      stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
      }),
      console,
      timer: Object.freeze({
        setTimeout(callback, ms, ...args) {
          const handle = setTimeout(callback, ms, ...args);
          return { dispose: () => clearTimeout(handle) };
        },
        setImmediate(callback, ...args) {
          const handle = setImmediate(callback, ...args);
          return { dispose: () => clearImmediate(handle) };
        },
        setInterval(callback, ms, ...args) {
          const handle = setInterval(callback, ms, ...args);
          return { dispose: () => clearInterval(handle) };
        }
      })
    });
    function RIL() {
      return _ril;
    }
    (function(RIL2) {
      function install() {
        api_1.RAL.install(_ril);
      }
      RIL2.install = install;
    })(RIL || (RIL = {}));
    exports2.default = RIL;
  }
});

// node_modules/vscode-jsonrpc/lib/node/main.js
var require_main = __commonJS({
  "node_modules/vscode-jsonrpc/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createMessageConnection = exports2.createServerSocketTransport = exports2.createClientSocketTransport = exports2.createServerPipeTransport = exports2.createClientPipeTransport = exports2.generateRandomPipeName = exports2.StreamMessageWriter = exports2.StreamMessageReader = exports2.SocketMessageWriter = exports2.SocketMessageReader = exports2.PortMessageWriter = exports2.PortMessageReader = exports2.IPCMessageWriter = exports2.IPCMessageReader = void 0;
    var ril_1 = require_ril();
    ril_1.default.install();
    var path = require("path");
    var os = require("os");
    var crypto_1 = require("crypto");
    var net_1 = require("net");
    var api_1 = require_api();
    __exportStar(require_api(), exports2);
    var IPCMessageReader = class extends api_1.AbstractMessageReader {
      constructor(process2) {
        super();
        this.process = process2;
        let eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose());
      }
      listen(callback) {
        this.process.on("message", callback);
        return api_1.Disposable.create(() => this.process.off("message", callback));
      }
    };
    exports2.IPCMessageReader = IPCMessageReader;
    var IPCMessageWriter = class extends api_1.AbstractMessageWriter {
      constructor(process2) {
        super();
        this.process = process2;
        this.errorCount = 0;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose);
      }
      write(msg) {
        try {
          if (typeof this.process.send === "function") {
            this.process.send(msg, void 0, void 0, (error) => {
              if (error) {
                this.errorCount++;
                this.handleError(error, msg);
              } else {
                this.errorCount = 0;
              }
            });
          }
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.IPCMessageWriter = IPCMessageWriter;
    var PortMessageReader = class extends api_1.AbstractMessageReader {
      constructor(port) {
        super();
        this.onData = new api_1.Emitter();
        port.on("close", () => this.fireClose);
        port.on("error", (error) => this.fireError(error));
        port.on("message", (message) => {
          this.onData.fire(message);
        });
      }
      listen(callback) {
        return this.onData.event(callback);
      }
    };
    exports2.PortMessageReader = PortMessageReader;
    var PortMessageWriter = class extends api_1.AbstractMessageWriter {
      constructor(port) {
        super();
        this.port = port;
        this.errorCount = 0;
        port.on("close", () => this.fireClose());
        port.on("error", (error) => this.fireError(error));
      }
      write(msg) {
        try {
          this.port.postMessage(msg);
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.PortMessageWriter = PortMessageWriter;
    var SocketMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(socket, encoding = "utf-8") {
        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
      }
    };
    exports2.SocketMessageReader = SocketMessageReader;
    var SocketMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(socket, options) {
        super((0, ril_1.default)().stream.asWritableStream(socket), options);
        this.socket = socket;
      }
      dispose() {
        super.dispose();
        this.socket.destroy();
      }
    };
    exports2.SocketMessageWriter = SocketMessageWriter;
    var StreamMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(readable, encoding) {
        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
      }
    };
    exports2.StreamMessageReader = StreamMessageReader;
    var StreamMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(writable, options) {
        super((0, ril_1.default)().stream.asWritableStream(writable), options);
      }
    };
    exports2.StreamMessageWriter = StreamMessageWriter;
    var XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
    var safeIpcPathLengths = /* @__PURE__ */ new Map([
      ["linux", 107],
      ["darwin", 103]
    ]);
    function generateRandomPipeName() {
      const randomSuffix = (0, crypto_1.randomBytes)(21).toString("hex");
      if (process.platform === "win32") {
        return `\\\\.\\pipe\\vscode-jsonrpc-${randomSuffix}-sock`;
      }
      let result;
      if (XDG_RUNTIME_DIR) {
        result = path.join(XDG_RUNTIME_DIR, `vscode-ipc-${randomSuffix}.sock`);
      } else {
        result = path.join(os.tmpdir(), `vscode-${randomSuffix}.sock`);
      }
      const limit = safeIpcPathLengths.get(process.platform);
      if (limit !== void 0 && result.length > limit) {
        (0, ril_1.default)().console.warn(`WARNING: IPC handle "${result}" is longer than ${limit} characters.`);
      }
      return result;
    }
    exports2.generateRandomPipeName = generateRandomPipeName;
    function createClientPipeTransport(pipeName, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        let server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(pipeName, () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    exports2.createClientPipeTransport = createClientPipeTransport;
    function createServerPipeTransport(pipeName, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(pipeName);
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    exports2.createServerPipeTransport = createServerPipeTransport;
    function createClientSocketTransport(port, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(port, "127.0.0.1", () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    exports2.createClientSocketTransport = createClientSocketTransport;
    function createServerSocketTransport(port, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(port, "127.0.0.1");
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    exports2.createServerSocketTransport = createServerSocketTransport;
    function isReadableStream(value) {
      const candidate = value;
      return candidate.read !== void 0 && candidate.addListener !== void 0;
    }
    function isWritableStream(value) {
      const candidate = value;
      return candidate.write !== void 0 && candidate.addListener !== void 0;
    }
    function createMessageConnection(input, output, logger, options) {
      if (!logger) {
        logger = api_1.NullLogger;
      }
      const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
      const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
      if (api_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, api_1.createMessageConnection)(reader, writer, logger, options);
    }
    exports2.createMessageConnection = createMessageConnection;
  }
});

// node_modules/vscode-jsonrpc/node.js
var require_node = __commonJS({
  "node_modules/vscode-jsonrpc/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require_main();
  }
});

// node_modules/vscode-languageserver-types/lib/umd/main.js
var require_main2 = __commonJS({
  "node_modules/vscode-languageserver-types/lib/umd/main.js"(exports2, module2) {
    (function(factory) {
      if (typeof module2 === "object" && typeof module2.exports === "object") {
        var v = factory(require, exports2);
        if (v !== void 0) module2.exports = v;
      } else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
      }
    })(function(require2, exports3) {
      "use strict";
      Object.defineProperty(exports3, "__esModule", { value: true });
      exports3.TextDocument = exports3.EOL = exports3.WorkspaceFolder = exports3.InlineCompletionContext = exports3.SelectedCompletionInfo = exports3.InlineCompletionTriggerKind = exports3.InlineCompletionList = exports3.InlineCompletionItem = exports3.StringValue = exports3.InlayHint = exports3.InlayHintLabelPart = exports3.InlayHintKind = exports3.InlineValueContext = exports3.InlineValueEvaluatableExpression = exports3.InlineValueVariableLookup = exports3.InlineValueText = exports3.SemanticTokens = exports3.SemanticTokenModifiers = exports3.SemanticTokenTypes = exports3.SelectionRange = exports3.DocumentLink = exports3.FormattingOptions = exports3.CodeLens = exports3.CodeAction = exports3.CodeActionContext = exports3.CodeActionTriggerKind = exports3.CodeActionKind = exports3.DocumentSymbol = exports3.WorkspaceSymbol = exports3.SymbolInformation = exports3.SymbolTag = exports3.SymbolKind = exports3.DocumentHighlight = exports3.DocumentHighlightKind = exports3.SignatureInformation = exports3.ParameterInformation = exports3.Hover = exports3.MarkedString = exports3.CompletionList = exports3.CompletionItem = exports3.CompletionItemLabelDetails = exports3.InsertTextMode = exports3.InsertReplaceEdit = exports3.CompletionItemTag = exports3.InsertTextFormat = exports3.CompletionItemKind = exports3.MarkupContent = exports3.MarkupKind = exports3.TextDocumentItem = exports3.OptionalVersionedTextDocumentIdentifier = exports3.VersionedTextDocumentIdentifier = exports3.TextDocumentIdentifier = exports3.WorkspaceChange = exports3.WorkspaceEdit = exports3.DeleteFile = exports3.RenameFile = exports3.CreateFile = exports3.TextDocumentEdit = exports3.AnnotatedTextEdit = exports3.ChangeAnnotationIdentifier = exports3.ChangeAnnotation = exports3.TextEdit = exports3.Command = exports3.Diagnostic = exports3.CodeDescription = exports3.DiagnosticTag = exports3.DiagnosticSeverity = exports3.DiagnosticRelatedInformation = exports3.FoldingRange = exports3.FoldingRangeKind = exports3.ColorPresentation = exports3.ColorInformation = exports3.Color = exports3.LocationLink = exports3.Location = exports3.Range = exports3.Position = exports3.uinteger = exports3.integer = exports3.URI = exports3.DocumentUri = void 0;
      var DocumentUri;
      (function(DocumentUri2) {
        function is(value) {
          return typeof value === "string";
        }
        DocumentUri2.is = is;
      })(DocumentUri || (exports3.DocumentUri = DocumentUri = {}));
      var URI;
      (function(URI2) {
        function is(value) {
          return typeof value === "string";
        }
        URI2.is = is;
      })(URI || (exports3.URI = URI = {}));
      var integer;
      (function(integer2) {
        integer2.MIN_VALUE = -2147483648;
        integer2.MAX_VALUE = 2147483647;
        function is(value) {
          return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
        }
        integer2.is = is;
      })(integer || (exports3.integer = integer = {}));
      var uinteger;
      (function(uinteger2) {
        uinteger2.MIN_VALUE = 0;
        uinteger2.MAX_VALUE = 2147483647;
        function is(value) {
          return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
        }
        uinteger2.is = is;
      })(uinteger || (exports3.uinteger = uinteger = {}));
      var Position;
      (function(Position2) {
        function create(line, character) {
          if (line === Number.MAX_VALUE) {
            line = uinteger.MAX_VALUE;
          }
          if (character === Number.MAX_VALUE) {
            character = uinteger.MAX_VALUE;
          }
          return { line, character };
        }
        Position2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
        }
        Position2.is = is;
      })(Position || (exports3.Position = Position = {}));
      var Range;
      (function(Range2) {
        function create(one, two, three, four) {
          if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
            return { start: Position.create(one, two), end: Position.create(three, four) };
          } else if (Position.is(one) && Position.is(two)) {
            return { start: one, end: two };
          } else {
            throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
          }
        }
        Range2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
        }
        Range2.is = is;
      })(Range || (exports3.Range = Range = {}));
      var Location;
      (function(Location2) {
        function create(uri, range) {
          return { uri, range };
        }
        Location2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
        }
        Location2.is = is;
      })(Location || (exports3.Location = Location = {}));
      var LocationLink;
      (function(LocationLink2) {
        function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
          return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
        }
        LocationLink2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
        }
        LocationLink2.is = is;
      })(LocationLink || (exports3.LocationLink = LocationLink = {}));
      var Color;
      (function(Color2) {
        function create(red, green, blue, alpha) {
          return {
            red,
            green,
            blue,
            alpha
          };
        }
        Color2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
        }
        Color2.is = is;
      })(Color || (exports3.Color = Color = {}));
      var ColorInformation;
      (function(ColorInformation2) {
        function create(range, color) {
          return {
            range,
            color
          };
        }
        ColorInformation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
        }
        ColorInformation2.is = is;
      })(ColorInformation || (exports3.ColorInformation = ColorInformation = {}));
      var ColorPresentation;
      (function(ColorPresentation2) {
        function create(label, textEdit, additionalTextEdits) {
          return {
            label,
            textEdit,
            additionalTextEdits
          };
        }
        ColorPresentation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
        }
        ColorPresentation2.is = is;
      })(ColorPresentation || (exports3.ColorPresentation = ColorPresentation = {}));
      var FoldingRangeKind;
      (function(FoldingRangeKind2) {
        FoldingRangeKind2.Comment = "comment";
        FoldingRangeKind2.Imports = "imports";
        FoldingRangeKind2.Region = "region";
      })(FoldingRangeKind || (exports3.FoldingRangeKind = FoldingRangeKind = {}));
      var FoldingRange;
      (function(FoldingRange2) {
        function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
          var result = {
            startLine,
            endLine
          };
          if (Is.defined(startCharacter)) {
            result.startCharacter = startCharacter;
          }
          if (Is.defined(endCharacter)) {
            result.endCharacter = endCharacter;
          }
          if (Is.defined(kind)) {
            result.kind = kind;
          }
          if (Is.defined(collapsedText)) {
            result.collapsedText = collapsedText;
          }
          return result;
        }
        FoldingRange2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
        }
        FoldingRange2.is = is;
      })(FoldingRange || (exports3.FoldingRange = FoldingRange = {}));
      var DiagnosticRelatedInformation;
      (function(DiagnosticRelatedInformation2) {
        function create(location, message) {
          return {
            location,
            message
          };
        }
        DiagnosticRelatedInformation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
        }
        DiagnosticRelatedInformation2.is = is;
      })(DiagnosticRelatedInformation || (exports3.DiagnosticRelatedInformation = DiagnosticRelatedInformation = {}));
      var DiagnosticSeverity;
      (function(DiagnosticSeverity2) {
        DiagnosticSeverity2.Error = 1;
        DiagnosticSeverity2.Warning = 2;
        DiagnosticSeverity2.Information = 3;
        DiagnosticSeverity2.Hint = 4;
      })(DiagnosticSeverity || (exports3.DiagnosticSeverity = DiagnosticSeverity = {}));
      var DiagnosticTag;
      (function(DiagnosticTag2) {
        DiagnosticTag2.Unnecessary = 1;
        DiagnosticTag2.Deprecated = 2;
      })(DiagnosticTag || (exports3.DiagnosticTag = DiagnosticTag = {}));
      var CodeDescription;
      (function(CodeDescription2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.href);
        }
        CodeDescription2.is = is;
      })(CodeDescription || (exports3.CodeDescription = CodeDescription = {}));
      var Diagnostic;
      (function(Diagnostic2) {
        function create(range, message, severity, code, source, relatedInformation) {
          var result = { range, message };
          if (Is.defined(severity)) {
            result.severity = severity;
          }
          if (Is.defined(code)) {
            result.code = code;
          }
          if (Is.defined(source)) {
            result.source = source;
          }
          if (Is.defined(relatedInformation)) {
            result.relatedInformation = relatedInformation;
          }
          return result;
        }
        Diagnostic2.create = create;
        function is(value) {
          var _a;
          var candidate = value;
          return Is.defined(candidate) && Range.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
        }
        Diagnostic2.is = is;
      })(Diagnostic || (exports3.Diagnostic = Diagnostic = {}));
      var Command;
      (function(Command2) {
        function create(title, command) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
          }
          var result = { title, command };
          if (Is.defined(args) && args.length > 0) {
            result.arguments = args;
          }
          return result;
        }
        Command2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
        }
        Command2.is = is;
      })(Command || (exports3.Command = Command = {}));
      var TextEdit;
      (function(TextEdit2) {
        function replace(range, newText) {
          return { range, newText };
        }
        TextEdit2.replace = replace;
        function insert(position, newText) {
          return { range: { start: position, end: position }, newText };
        }
        TextEdit2.insert = insert;
        function del(range) {
          return { range, newText: "" };
        }
        TextEdit2.del = del;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
        }
        TextEdit2.is = is;
      })(TextEdit || (exports3.TextEdit = TextEdit = {}));
      var ChangeAnnotation;
      (function(ChangeAnnotation2) {
        function create(label, needsConfirmation, description) {
          var result = { label };
          if (needsConfirmation !== void 0) {
            result.needsConfirmation = needsConfirmation;
          }
          if (description !== void 0) {
            result.description = description;
          }
          return result;
        }
        ChangeAnnotation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
        }
        ChangeAnnotation2.is = is;
      })(ChangeAnnotation || (exports3.ChangeAnnotation = ChangeAnnotation = {}));
      var ChangeAnnotationIdentifier;
      (function(ChangeAnnotationIdentifier2) {
        function is(value) {
          var candidate = value;
          return Is.string(candidate);
        }
        ChangeAnnotationIdentifier2.is = is;
      })(ChangeAnnotationIdentifier || (exports3.ChangeAnnotationIdentifier = ChangeAnnotationIdentifier = {}));
      var AnnotatedTextEdit;
      (function(AnnotatedTextEdit2) {
        function replace(range, newText, annotation) {
          return { range, newText, annotationId: annotation };
        }
        AnnotatedTextEdit2.replace = replace;
        function insert(position, newText, annotation) {
          return { range: { start: position, end: position }, newText, annotationId: annotation };
        }
        AnnotatedTextEdit2.insert = insert;
        function del(range, annotation) {
          return { range, newText: "", annotationId: annotation };
        }
        AnnotatedTextEdit2.del = del;
        function is(value) {
          var candidate = value;
          return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        AnnotatedTextEdit2.is = is;
      })(AnnotatedTextEdit || (exports3.AnnotatedTextEdit = AnnotatedTextEdit = {}));
      var TextDocumentEdit;
      (function(TextDocumentEdit2) {
        function create(textDocument, edits) {
          return { textDocument, edits };
        }
        TextDocumentEdit2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
        }
        TextDocumentEdit2.is = is;
      })(TextDocumentEdit || (exports3.TextDocumentEdit = TextDocumentEdit = {}));
      var CreateFile;
      (function(CreateFile2) {
        function create(uri, options, annotation) {
          var result = {
            kind: "create",
            uri
          };
          if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        CreateFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        CreateFile2.is = is;
      })(CreateFile || (exports3.CreateFile = CreateFile = {}));
      var RenameFile;
      (function(RenameFile2) {
        function create(oldUri, newUri, options, annotation) {
          var result = {
            kind: "rename",
            oldUri,
            newUri
          };
          if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        RenameFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        RenameFile2.is = is;
      })(RenameFile || (exports3.RenameFile = RenameFile = {}));
      var DeleteFile;
      (function(DeleteFile2) {
        function create(uri, options, annotation) {
          var result = {
            kind: "delete",
            uri
          };
          if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        DeleteFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        DeleteFile2.is = is;
      })(DeleteFile || (exports3.DeleteFile = DeleteFile = {}));
      var WorkspaceEdit;
      (function(WorkspaceEdit2) {
        function is(value) {
          var candidate = value;
          return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
            if (Is.string(change.kind)) {
              return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
            } else {
              return TextDocumentEdit.is(change);
            }
          }));
        }
        WorkspaceEdit2.is = is;
      })(WorkspaceEdit || (exports3.WorkspaceEdit = WorkspaceEdit = {}));
      var TextEditChangeImpl = (
        /** @class */
        (function() {
          function TextEditChangeImpl2(edits, changeAnnotations) {
            this.edits = edits;
            this.changeAnnotations = changeAnnotations;
          }
          TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.insert(position, newText);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.insert(position, newText, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.insert(position, newText, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.replace(range, newText);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.replace(range, newText, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.replace(range, newText, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.delete = function(range, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.del(range);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.del(range, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.del(range, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.add = function(edit) {
            this.edits.push(edit);
          };
          TextEditChangeImpl2.prototype.all = function() {
            return this.edits;
          };
          TextEditChangeImpl2.prototype.clear = function() {
            this.edits.splice(0, this.edits.length);
          };
          TextEditChangeImpl2.prototype.assertChangeAnnotations = function(value) {
            if (value === void 0) {
              throw new Error("Text edit change is not configured to manage change annotations.");
            }
          };
          return TextEditChangeImpl2;
        })()
      );
      var ChangeAnnotations = (
        /** @class */
        (function() {
          function ChangeAnnotations2(annotations) {
            this._annotations = annotations === void 0 ? /* @__PURE__ */ Object.create(null) : annotations;
            this._counter = 0;
            this._size = 0;
          }
          ChangeAnnotations2.prototype.all = function() {
            return this._annotations;
          };
          Object.defineProperty(ChangeAnnotations2.prototype, "size", {
            get: function() {
              return this._size;
            },
            enumerable: false,
            configurable: true
          });
          ChangeAnnotations2.prototype.manage = function(idOrAnnotation, annotation) {
            var id;
            if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
              id = idOrAnnotation;
            } else {
              id = this.nextId();
              annotation = idOrAnnotation;
            }
            if (this._annotations[id] !== void 0) {
              throw new Error("Id ".concat(id, " is already in use."));
            }
            if (annotation === void 0) {
              throw new Error("No annotation provided for id ".concat(id));
            }
            this._annotations[id] = annotation;
            this._size++;
            return id;
          };
          ChangeAnnotations2.prototype.nextId = function() {
            this._counter++;
            return this._counter.toString();
          };
          return ChangeAnnotations2;
        })()
      );
      var WorkspaceChange = (
        /** @class */
        (function() {
          function WorkspaceChange2(workspaceEdit) {
            var _this = this;
            this._textEditChanges = /* @__PURE__ */ Object.create(null);
            if (workspaceEdit !== void 0) {
              this._workspaceEdit = workspaceEdit;
              if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function(change) {
                  if (TextDocumentEdit.is(change)) {
                    var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                    _this._textEditChanges[change.textDocument.uri] = textEditChange;
                  }
                });
              } else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach(function(key) {
                  var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                  _this._textEditChanges[key] = textEditChange;
                });
              }
            } else {
              this._workspaceEdit = {};
            }
          }
          Object.defineProperty(WorkspaceChange2.prototype, "edit", {
            /**
             * Returns the underlying {@link WorkspaceEdit} literal
             * use to be returned from a workspace edit operation like rename.
             */
            get: function() {
              this.initDocumentChanges();
              if (this._changeAnnotations !== void 0) {
                if (this._changeAnnotations.size === 0) {
                  this._workspaceEdit.changeAnnotations = void 0;
                } else {
                  this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                }
              }
              return this._workspaceEdit;
            },
            enumerable: false,
            configurable: true
          });
          WorkspaceChange2.prototype.getTextEditChange = function(key) {
            if (OptionalVersionedTextDocumentIdentifier.is(key)) {
              this.initDocumentChanges();
              if (this._workspaceEdit.documentChanges === void 0) {
                throw new Error("Workspace edit is not configured for document changes.");
              }
              var textDocument = { uri: key.uri, version: key.version };
              var result = this._textEditChanges[textDocument.uri];
              if (!result) {
                var edits = [];
                var textDocumentEdit = {
                  textDocument,
                  edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new TextEditChangeImpl(edits, this._changeAnnotations);
                this._textEditChanges[textDocument.uri] = result;
              }
              return result;
            } else {
              this.initChanges();
              if (this._workspaceEdit.changes === void 0) {
                throw new Error("Workspace edit is not configured for normal text edit changes.");
              }
              var result = this._textEditChanges[key];
              if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
              }
              return result;
            }
          };
          WorkspaceChange2.prototype.initDocumentChanges = function() {
            if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
              this._changeAnnotations = new ChangeAnnotations();
              this._workspaceEdit.documentChanges = [];
              this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
          };
          WorkspaceChange2.prototype.initChanges = function() {
            if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
              this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null);
            }
          };
          WorkspaceChange2.prototype.createFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = CreateFile.create(uri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = CreateFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = RenameFile.create(oldUri, newUri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = RenameFile.create(oldUri, newUri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = DeleteFile.create(uri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = DeleteFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          return WorkspaceChange2;
        })()
      );
      exports3.WorkspaceChange = WorkspaceChange;
      var TextDocumentIdentifier;
      (function(TextDocumentIdentifier2) {
        function create(uri) {
          return { uri };
        }
        TextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri);
        }
        TextDocumentIdentifier2.is = is;
      })(TextDocumentIdentifier || (exports3.TextDocumentIdentifier = TextDocumentIdentifier = {}));
      var VersionedTextDocumentIdentifier;
      (function(VersionedTextDocumentIdentifier2) {
        function create(uri, version) {
          return { uri, version };
        }
        VersionedTextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
        }
        VersionedTextDocumentIdentifier2.is = is;
      })(VersionedTextDocumentIdentifier || (exports3.VersionedTextDocumentIdentifier = VersionedTextDocumentIdentifier = {}));
      var OptionalVersionedTextDocumentIdentifier;
      (function(OptionalVersionedTextDocumentIdentifier2) {
        function create(uri, version) {
          return { uri, version };
        }
        OptionalVersionedTextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
        }
        OptionalVersionedTextDocumentIdentifier2.is = is;
      })(OptionalVersionedTextDocumentIdentifier || (exports3.OptionalVersionedTextDocumentIdentifier = OptionalVersionedTextDocumentIdentifier = {}));
      var TextDocumentItem;
      (function(TextDocumentItem2) {
        function create(uri, languageId, version, text) {
          return { uri, languageId, version, text };
        }
        TextDocumentItem2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
        }
        TextDocumentItem2.is = is;
      })(TextDocumentItem || (exports3.TextDocumentItem = TextDocumentItem = {}));
      var MarkupKind;
      (function(MarkupKind2) {
        MarkupKind2.PlainText = "plaintext";
        MarkupKind2.Markdown = "markdown";
        function is(value) {
          var candidate = value;
          return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
        }
        MarkupKind2.is = is;
      })(MarkupKind || (exports3.MarkupKind = MarkupKind = {}));
      var MarkupContent;
      (function(MarkupContent2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
        }
        MarkupContent2.is = is;
      })(MarkupContent || (exports3.MarkupContent = MarkupContent = {}));
      var CompletionItemKind;
      (function(CompletionItemKind2) {
        CompletionItemKind2.Text = 1;
        CompletionItemKind2.Method = 2;
        CompletionItemKind2.Function = 3;
        CompletionItemKind2.Constructor = 4;
        CompletionItemKind2.Field = 5;
        CompletionItemKind2.Variable = 6;
        CompletionItemKind2.Class = 7;
        CompletionItemKind2.Interface = 8;
        CompletionItemKind2.Module = 9;
        CompletionItemKind2.Property = 10;
        CompletionItemKind2.Unit = 11;
        CompletionItemKind2.Value = 12;
        CompletionItemKind2.Enum = 13;
        CompletionItemKind2.Keyword = 14;
        CompletionItemKind2.Snippet = 15;
        CompletionItemKind2.Color = 16;
        CompletionItemKind2.File = 17;
        CompletionItemKind2.Reference = 18;
        CompletionItemKind2.Folder = 19;
        CompletionItemKind2.EnumMember = 20;
        CompletionItemKind2.Constant = 21;
        CompletionItemKind2.Struct = 22;
        CompletionItemKind2.Event = 23;
        CompletionItemKind2.Operator = 24;
        CompletionItemKind2.TypeParameter = 25;
      })(CompletionItemKind || (exports3.CompletionItemKind = CompletionItemKind = {}));
      var InsertTextFormat;
      (function(InsertTextFormat2) {
        InsertTextFormat2.PlainText = 1;
        InsertTextFormat2.Snippet = 2;
      })(InsertTextFormat || (exports3.InsertTextFormat = InsertTextFormat = {}));
      var CompletionItemTag;
      (function(CompletionItemTag2) {
        CompletionItemTag2.Deprecated = 1;
      })(CompletionItemTag || (exports3.CompletionItemTag = CompletionItemTag = {}));
      var InsertReplaceEdit;
      (function(InsertReplaceEdit2) {
        function create(newText, insert, replace) {
          return { newText, insert, replace };
        }
        InsertReplaceEdit2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
        }
        InsertReplaceEdit2.is = is;
      })(InsertReplaceEdit || (exports3.InsertReplaceEdit = InsertReplaceEdit = {}));
      var InsertTextMode;
      (function(InsertTextMode2) {
        InsertTextMode2.asIs = 1;
        InsertTextMode2.adjustIndentation = 2;
      })(InsertTextMode || (exports3.InsertTextMode = InsertTextMode = {}));
      var CompletionItemLabelDetails;
      (function(CompletionItemLabelDetails2) {
        function is(value) {
          var candidate = value;
          return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
        }
        CompletionItemLabelDetails2.is = is;
      })(CompletionItemLabelDetails || (exports3.CompletionItemLabelDetails = CompletionItemLabelDetails = {}));
      var CompletionItem;
      (function(CompletionItem2) {
        function create(label) {
          return { label };
        }
        CompletionItem2.create = create;
      })(CompletionItem || (exports3.CompletionItem = CompletionItem = {}));
      var CompletionList;
      (function(CompletionList2) {
        function create(items, isIncomplete) {
          return { items: items ? items : [], isIncomplete: !!isIncomplete };
        }
        CompletionList2.create = create;
      })(CompletionList || (exports3.CompletionList = CompletionList = {}));
      var MarkedString;
      (function(MarkedString2) {
        function fromPlainText(plainText) {
          return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
        }
        MarkedString2.fromPlainText = fromPlainText;
        function is(value) {
          var candidate = value;
          return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
        }
        MarkedString2.is = is;
      })(MarkedString || (exports3.MarkedString = MarkedString = {}));
      var Hover;
      (function(Hover2) {
        function is(value) {
          var candidate = value;
          return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
        }
        Hover2.is = is;
      })(Hover || (exports3.Hover = Hover = {}));
      var ParameterInformation;
      (function(ParameterInformation2) {
        function create(label, documentation) {
          return documentation ? { label, documentation } : { label };
        }
        ParameterInformation2.create = create;
      })(ParameterInformation || (exports3.ParameterInformation = ParameterInformation = {}));
      var SignatureInformation;
      (function(SignatureInformation2) {
        function create(label, documentation) {
          var parameters = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            parameters[_i - 2] = arguments[_i];
          }
          var result = { label };
          if (Is.defined(documentation)) {
            result.documentation = documentation;
          }
          if (Is.defined(parameters)) {
            result.parameters = parameters;
          } else {
            result.parameters = [];
          }
          return result;
        }
        SignatureInformation2.create = create;
      })(SignatureInformation || (exports3.SignatureInformation = SignatureInformation = {}));
      var DocumentHighlightKind;
      (function(DocumentHighlightKind2) {
        DocumentHighlightKind2.Text = 1;
        DocumentHighlightKind2.Read = 2;
        DocumentHighlightKind2.Write = 3;
      })(DocumentHighlightKind || (exports3.DocumentHighlightKind = DocumentHighlightKind = {}));
      var DocumentHighlight;
      (function(DocumentHighlight2) {
        function create(range, kind) {
          var result = { range };
          if (Is.number(kind)) {
            result.kind = kind;
          }
          return result;
        }
        DocumentHighlight2.create = create;
      })(DocumentHighlight || (exports3.DocumentHighlight = DocumentHighlight = {}));
      var SymbolKind;
      (function(SymbolKind2) {
        SymbolKind2.File = 1;
        SymbolKind2.Module = 2;
        SymbolKind2.Namespace = 3;
        SymbolKind2.Package = 4;
        SymbolKind2.Class = 5;
        SymbolKind2.Method = 6;
        SymbolKind2.Property = 7;
        SymbolKind2.Field = 8;
        SymbolKind2.Constructor = 9;
        SymbolKind2.Enum = 10;
        SymbolKind2.Interface = 11;
        SymbolKind2.Function = 12;
        SymbolKind2.Variable = 13;
        SymbolKind2.Constant = 14;
        SymbolKind2.String = 15;
        SymbolKind2.Number = 16;
        SymbolKind2.Boolean = 17;
        SymbolKind2.Array = 18;
        SymbolKind2.Object = 19;
        SymbolKind2.Key = 20;
        SymbolKind2.Null = 21;
        SymbolKind2.EnumMember = 22;
        SymbolKind2.Struct = 23;
        SymbolKind2.Event = 24;
        SymbolKind2.Operator = 25;
        SymbolKind2.TypeParameter = 26;
      })(SymbolKind || (exports3.SymbolKind = SymbolKind = {}));
      var SymbolTag;
      (function(SymbolTag2) {
        SymbolTag2.Deprecated = 1;
      })(SymbolTag || (exports3.SymbolTag = SymbolTag = {}));
      var SymbolInformation;
      (function(SymbolInformation2) {
        function create(name, kind, range, uri, containerName) {
          var result = {
            name,
            kind,
            location: { uri, range }
          };
          if (containerName) {
            result.containerName = containerName;
          }
          return result;
        }
        SymbolInformation2.create = create;
      })(SymbolInformation || (exports3.SymbolInformation = SymbolInformation = {}));
      var WorkspaceSymbol;
      (function(WorkspaceSymbol2) {
        function create(name, kind, uri, range) {
          return range !== void 0 ? { name, kind, location: { uri, range } } : { name, kind, location: { uri } };
        }
        WorkspaceSymbol2.create = create;
      })(WorkspaceSymbol || (exports3.WorkspaceSymbol = WorkspaceSymbol = {}));
      var DocumentSymbol;
      (function(DocumentSymbol2) {
        function create(name, detail, kind, range, selectionRange, children) {
          var result = {
            name,
            detail,
            kind,
            range,
            selectionRange
          };
          if (children !== void 0) {
            result.children = children;
          }
          return result;
        }
        DocumentSymbol2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
        }
        DocumentSymbol2.is = is;
      })(DocumentSymbol || (exports3.DocumentSymbol = DocumentSymbol = {}));
      var CodeActionKind;
      (function(CodeActionKind2) {
        CodeActionKind2.Empty = "";
        CodeActionKind2.QuickFix = "quickfix";
        CodeActionKind2.Refactor = "refactor";
        CodeActionKind2.RefactorExtract = "refactor.extract";
        CodeActionKind2.RefactorInline = "refactor.inline";
        CodeActionKind2.RefactorRewrite = "refactor.rewrite";
        CodeActionKind2.Source = "source";
        CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
        CodeActionKind2.SourceFixAll = "source.fixAll";
      })(CodeActionKind || (exports3.CodeActionKind = CodeActionKind = {}));
      var CodeActionTriggerKind;
      (function(CodeActionTriggerKind2) {
        CodeActionTriggerKind2.Invoked = 1;
        CodeActionTriggerKind2.Automatic = 2;
      })(CodeActionTriggerKind || (exports3.CodeActionTriggerKind = CodeActionTriggerKind = {}));
      var CodeActionContext;
      (function(CodeActionContext2) {
        function create(diagnostics, only, triggerKind) {
          var result = { diagnostics };
          if (only !== void 0 && only !== null) {
            result.only = only;
          }
          if (triggerKind !== void 0 && triggerKind !== null) {
            result.triggerKind = triggerKind;
          }
          return result;
        }
        CodeActionContext2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
        }
        CodeActionContext2.is = is;
      })(CodeActionContext || (exports3.CodeActionContext = CodeActionContext = {}));
      var CodeAction;
      (function(CodeAction2) {
        function create(title, kindOrCommandOrEdit, kind) {
          var result = { title };
          var checkKind = true;
          if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
          } else if (Command.is(kindOrCommandOrEdit)) {
            result.command = kindOrCommandOrEdit;
          } else {
            result.edit = kindOrCommandOrEdit;
          }
          if (checkKind && kind !== void 0) {
            result.kind = kind;
          }
          return result;
        }
        CodeAction2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
        }
        CodeAction2.is = is;
      })(CodeAction || (exports3.CodeAction = CodeAction = {}));
      var CodeLens;
      (function(CodeLens2) {
        function create(range, data) {
          var result = { range };
          if (Is.defined(data)) {
            result.data = data;
          }
          return result;
        }
        CodeLens2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
        }
        CodeLens2.is = is;
      })(CodeLens || (exports3.CodeLens = CodeLens = {}));
      var FormattingOptions;
      (function(FormattingOptions2) {
        function create(tabSize, insertSpaces) {
          return { tabSize, insertSpaces };
        }
        FormattingOptions2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
        }
        FormattingOptions2.is = is;
      })(FormattingOptions || (exports3.FormattingOptions = FormattingOptions = {}));
      var DocumentLink;
      (function(DocumentLink2) {
        function create(range, target, data) {
          return { range, target, data };
        }
        DocumentLink2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
        }
        DocumentLink2.is = is;
      })(DocumentLink || (exports3.DocumentLink = DocumentLink = {}));
      var SelectionRange;
      (function(SelectionRange2) {
        function create(range, parent) {
          return { range, parent };
        }
        SelectionRange2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
        }
        SelectionRange2.is = is;
      })(SelectionRange || (exports3.SelectionRange = SelectionRange = {}));
      var SemanticTokenTypes;
      (function(SemanticTokenTypes2) {
        SemanticTokenTypes2["namespace"] = "namespace";
        SemanticTokenTypes2["type"] = "type";
        SemanticTokenTypes2["class"] = "class";
        SemanticTokenTypes2["enum"] = "enum";
        SemanticTokenTypes2["interface"] = "interface";
        SemanticTokenTypes2["struct"] = "struct";
        SemanticTokenTypes2["typeParameter"] = "typeParameter";
        SemanticTokenTypes2["parameter"] = "parameter";
        SemanticTokenTypes2["variable"] = "variable";
        SemanticTokenTypes2["property"] = "property";
        SemanticTokenTypes2["enumMember"] = "enumMember";
        SemanticTokenTypes2["event"] = "event";
        SemanticTokenTypes2["function"] = "function";
        SemanticTokenTypes2["method"] = "method";
        SemanticTokenTypes2["macro"] = "macro";
        SemanticTokenTypes2["keyword"] = "keyword";
        SemanticTokenTypes2["modifier"] = "modifier";
        SemanticTokenTypes2["comment"] = "comment";
        SemanticTokenTypes2["string"] = "string";
        SemanticTokenTypes2["number"] = "number";
        SemanticTokenTypes2["regexp"] = "regexp";
        SemanticTokenTypes2["operator"] = "operator";
        SemanticTokenTypes2["decorator"] = "decorator";
      })(SemanticTokenTypes || (exports3.SemanticTokenTypes = SemanticTokenTypes = {}));
      var SemanticTokenModifiers;
      (function(SemanticTokenModifiers2) {
        SemanticTokenModifiers2["declaration"] = "declaration";
        SemanticTokenModifiers2["definition"] = "definition";
        SemanticTokenModifiers2["readonly"] = "readonly";
        SemanticTokenModifiers2["static"] = "static";
        SemanticTokenModifiers2["deprecated"] = "deprecated";
        SemanticTokenModifiers2["abstract"] = "abstract";
        SemanticTokenModifiers2["async"] = "async";
        SemanticTokenModifiers2["modification"] = "modification";
        SemanticTokenModifiers2["documentation"] = "documentation";
        SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
      })(SemanticTokenModifiers || (exports3.SemanticTokenModifiers = SemanticTokenModifiers = {}));
      var SemanticTokens;
      (function(SemanticTokens2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
        }
        SemanticTokens2.is = is;
      })(SemanticTokens || (exports3.SemanticTokens = SemanticTokens = {}));
      var InlineValueText;
      (function(InlineValueText2) {
        function create(range, text) {
          return { range, text };
        }
        InlineValueText2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
        }
        InlineValueText2.is = is;
      })(InlineValueText || (exports3.InlineValueText = InlineValueText = {}));
      var InlineValueVariableLookup;
      (function(InlineValueVariableLookup2) {
        function create(range, variableName, caseSensitiveLookup) {
          return { range, variableName, caseSensitiveLookup };
        }
        InlineValueVariableLookup2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
        }
        InlineValueVariableLookup2.is = is;
      })(InlineValueVariableLookup || (exports3.InlineValueVariableLookup = InlineValueVariableLookup = {}));
      var InlineValueEvaluatableExpression;
      (function(InlineValueEvaluatableExpression2) {
        function create(range, expression) {
          return { range, expression };
        }
        InlineValueEvaluatableExpression2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
        }
        InlineValueEvaluatableExpression2.is = is;
      })(InlineValueEvaluatableExpression || (exports3.InlineValueEvaluatableExpression = InlineValueEvaluatableExpression = {}));
      var InlineValueContext;
      (function(InlineValueContext2) {
        function create(frameId, stoppedLocation) {
          return { frameId, stoppedLocation };
        }
        InlineValueContext2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range.is(value.stoppedLocation);
        }
        InlineValueContext2.is = is;
      })(InlineValueContext || (exports3.InlineValueContext = InlineValueContext = {}));
      var InlayHintKind;
      (function(InlayHintKind2) {
        InlayHintKind2.Type = 1;
        InlayHintKind2.Parameter = 2;
        function is(value) {
          return value === 1 || value === 2;
        }
        InlayHintKind2.is = is;
      })(InlayHintKind || (exports3.InlayHintKind = InlayHintKind = {}));
      var InlayHintLabelPart;
      (function(InlayHintLabelPart2) {
        function create(value) {
          return { value };
        }
        InlayHintLabelPart2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
        }
        InlayHintLabelPart2.is = is;
      })(InlayHintLabelPart || (exports3.InlayHintLabelPart = InlayHintLabelPart = {}));
      var InlayHint;
      (function(InlayHint2) {
        function create(position, label, kind) {
          var result = { position, label };
          if (kind !== void 0) {
            result.kind = kind;
          }
          return result;
        }
        InlayHint2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
        }
        InlayHint2.is = is;
      })(InlayHint || (exports3.InlayHint = InlayHint = {}));
      var StringValue;
      (function(StringValue2) {
        function createSnippet(value) {
          return { kind: "snippet", value };
        }
        StringValue2.createSnippet = createSnippet;
      })(StringValue || (exports3.StringValue = StringValue = {}));
      var InlineCompletionItem;
      (function(InlineCompletionItem2) {
        function create(insertText, filterText, range, command) {
          return { insertText, filterText, range, command };
        }
        InlineCompletionItem2.create = create;
      })(InlineCompletionItem || (exports3.InlineCompletionItem = InlineCompletionItem = {}));
      var InlineCompletionList;
      (function(InlineCompletionList2) {
        function create(items) {
          return { items };
        }
        InlineCompletionList2.create = create;
      })(InlineCompletionList || (exports3.InlineCompletionList = InlineCompletionList = {}));
      var InlineCompletionTriggerKind;
      (function(InlineCompletionTriggerKind2) {
        InlineCompletionTriggerKind2.Invoked = 0;
        InlineCompletionTriggerKind2.Automatic = 1;
      })(InlineCompletionTriggerKind || (exports3.InlineCompletionTriggerKind = InlineCompletionTriggerKind = {}));
      var SelectedCompletionInfo;
      (function(SelectedCompletionInfo2) {
        function create(range, text) {
          return { range, text };
        }
        SelectedCompletionInfo2.create = create;
      })(SelectedCompletionInfo || (exports3.SelectedCompletionInfo = SelectedCompletionInfo = {}));
      var InlineCompletionContext;
      (function(InlineCompletionContext2) {
        function create(triggerKind, selectedCompletionInfo) {
          return { triggerKind, selectedCompletionInfo };
        }
        InlineCompletionContext2.create = create;
      })(InlineCompletionContext || (exports3.InlineCompletionContext = InlineCompletionContext = {}));
      var WorkspaceFolder;
      (function(WorkspaceFolder2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
        }
        WorkspaceFolder2.is = is;
      })(WorkspaceFolder || (exports3.WorkspaceFolder = WorkspaceFolder = {}));
      exports3.EOL = ["\n", "\r\n", "\r"];
      var TextDocument2;
      (function(TextDocument3) {
        function create(uri, languageId, version, content) {
          return new FullTextDocument2(uri, languageId, version, content);
        }
        TextDocument3.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
        }
        TextDocument3.is = is;
        function applyEdits(document, edits) {
          var text = document.getText();
          var sortedEdits = mergeSort2(edits, function(a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
              return a.range.start.character - b.range.start.character;
            }
            return diff;
          });
          var lastModifiedOffset = text.length;
          for (var i = sortedEdits.length - 1; i >= 0; i--) {
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) {
              text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            } else {
              throw new Error("Overlapping edit");
            }
            lastModifiedOffset = startOffset;
          }
          return text;
        }
        TextDocument3.applyEdits = applyEdits;
        function mergeSort2(data, compare) {
          if (data.length <= 1) {
            return data;
          }
          var p = data.length / 2 | 0;
          var left = data.slice(0, p);
          var right = data.slice(p);
          mergeSort2(left, compare);
          mergeSort2(right, compare);
          var leftIdx = 0;
          var rightIdx = 0;
          var i = 0;
          while (leftIdx < left.length && rightIdx < right.length) {
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) {
              data[i++] = left[leftIdx++];
            } else {
              data[i++] = right[rightIdx++];
            }
          }
          while (leftIdx < left.length) {
            data[i++] = left[leftIdx++];
          }
          while (rightIdx < right.length) {
            data[i++] = right[rightIdx++];
          }
          return data;
        }
      })(TextDocument2 || (exports3.TextDocument = TextDocument2 = {}));
      var FullTextDocument2 = (
        /** @class */
        (function() {
          function FullTextDocument3(uri, languageId, version, content) {
            this._uri = uri;
            this._languageId = languageId;
            this._version = version;
            this._content = content;
            this._lineOffsets = void 0;
          }
          Object.defineProperty(FullTextDocument3.prototype, "uri", {
            get: function() {
              return this._uri;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FullTextDocument3.prototype, "languageId", {
            get: function() {
              return this._languageId;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FullTextDocument3.prototype, "version", {
            get: function() {
              return this._version;
            },
            enumerable: false,
            configurable: true
          });
          FullTextDocument3.prototype.getText = function(range) {
            if (range) {
              var start = this.offsetAt(range.start);
              var end = this.offsetAt(range.end);
              return this._content.substring(start, end);
            }
            return this._content;
          };
          FullTextDocument3.prototype.update = function(event, version) {
            this._content = event.text;
            this._version = version;
            this._lineOffsets = void 0;
          };
          FullTextDocument3.prototype.getLineOffsets = function() {
            if (this._lineOffsets === void 0) {
              var lineOffsets = [];
              var text = this._content;
              var isLineStart = true;
              for (var i = 0; i < text.length; i++) {
                if (isLineStart) {
                  lineOffsets.push(i);
                  isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = ch === "\r" || ch === "\n";
                if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
                  i++;
                }
              }
              if (isLineStart && text.length > 0) {
                lineOffsets.push(text.length);
              }
              this._lineOffsets = lineOffsets;
            }
            return this._lineOffsets;
          };
          FullTextDocument3.prototype.positionAt = function(offset) {
            offset = Math.max(Math.min(offset, this._content.length), 0);
            var lineOffsets = this.getLineOffsets();
            var low = 0, high = lineOffsets.length;
            if (high === 0) {
              return Position.create(0, offset);
            }
            while (low < high) {
              var mid = Math.floor((low + high) / 2);
              if (lineOffsets[mid] > offset) {
                high = mid;
              } else {
                low = mid + 1;
              }
            }
            var line = low - 1;
            return Position.create(line, offset - lineOffsets[line]);
          };
          FullTextDocument3.prototype.offsetAt = function(position) {
            var lineOffsets = this.getLineOffsets();
            if (position.line >= lineOffsets.length) {
              return this._content.length;
            } else if (position.line < 0) {
              return 0;
            }
            var lineOffset = lineOffsets[position.line];
            var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
            return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
          };
          Object.defineProperty(FullTextDocument3.prototype, "lineCount", {
            get: function() {
              return this.getLineOffsets().length;
            },
            enumerable: false,
            configurable: true
          });
          return FullTextDocument3;
        })()
      );
      var Is;
      (function(Is2) {
        var toString = Object.prototype.toString;
        function defined(value) {
          return typeof value !== "undefined";
        }
        Is2.defined = defined;
        function undefined2(value) {
          return typeof value === "undefined";
        }
        Is2.undefined = undefined2;
        function boolean(value) {
          return value === true || value === false;
        }
        Is2.boolean = boolean;
        function string(value) {
          return toString.call(value) === "[object String]";
        }
        Is2.string = string;
        function number(value) {
          return toString.call(value) === "[object Number]";
        }
        Is2.number = number;
        function numberRange(value, min, max) {
          return toString.call(value) === "[object Number]" && min <= value && value <= max;
        }
        Is2.numberRange = numberRange;
        function integer2(value) {
          return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
        }
        Is2.integer = integer2;
        function uinteger2(value) {
          return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
        }
        Is2.uinteger = uinteger2;
        function func(value) {
          return toString.call(value) === "[object Function]";
        }
        Is2.func = func;
        function objectLiteral(value) {
          return value !== null && typeof value === "object";
        }
        Is2.objectLiteral = objectLiteral;
        function typedArray(value, check) {
          return Array.isArray(value) && value.every(check);
        }
        Is2.typedArray = typedArray;
      })(Is || (Is = {}));
    });
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/messages.js
var require_messages2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProtocolNotificationType = exports2.ProtocolNotificationType0 = exports2.ProtocolRequestType = exports2.ProtocolRequestType0 = exports2.RegistrationType = exports2.MessageDirection = void 0;
    var vscode_jsonrpc_1 = require_main();
    var MessageDirection;
    (function(MessageDirection2) {
      MessageDirection2["clientToServer"] = "clientToServer";
      MessageDirection2["serverToClient"] = "serverToClient";
      MessageDirection2["both"] = "both";
    })(MessageDirection || (exports2.MessageDirection = MessageDirection = {}));
    var RegistrationType = class {
      constructor(method) {
        this.method = method;
      }
    };
    exports2.RegistrationType = RegistrationType;
    var ProtocolRequestType0 = class extends vscode_jsonrpc_1.RequestType0 {
      constructor(method) {
        super(method);
      }
    };
    exports2.ProtocolRequestType0 = ProtocolRequestType0;
    var ProtocolRequestType = class extends vscode_jsonrpc_1.RequestType {
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports2.ProtocolRequestType = ProtocolRequestType;
    var ProtocolNotificationType0 = class extends vscode_jsonrpc_1.NotificationType0 {
      constructor(method) {
        super(method);
      }
    };
    exports2.ProtocolNotificationType0 = ProtocolNotificationType0;
    var ProtocolNotificationType = class extends vscode_jsonrpc_1.NotificationType {
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports2.ProtocolNotificationType = ProtocolNotificationType;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
var require_is3 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.objectLiteral = exports2.typedArray = exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports2.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports2.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports2.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports2.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports2.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports2.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports2.stringArray = stringArray;
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    exports2.typedArray = typedArray;
    function objectLiteral(value) {
      return value !== null && typeof value === "object";
    }
    exports2.objectLiteral = objectLiteral;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
var require_protocol_implementation = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImplementationRequest = void 0;
    var messages_1 = require_messages2();
    var ImplementationRequest;
    (function(ImplementationRequest2) {
      ImplementationRequest2.method = "textDocument/implementation";
      ImplementationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ImplementationRequest2.type = new messages_1.ProtocolRequestType(ImplementationRequest2.method);
    })(ImplementationRequest || (exports2.ImplementationRequest = ImplementationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
var require_protocol_typeDefinition = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeDefinitionRequest = void 0;
    var messages_1 = require_messages2();
    var TypeDefinitionRequest;
    (function(TypeDefinitionRequest2) {
      TypeDefinitionRequest2.method = "textDocument/typeDefinition";
      TypeDefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeDefinitionRequest2.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest2.method);
    })(TypeDefinitionRequest || (exports2.TypeDefinitionRequest = TypeDefinitionRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js
var require_protocol_workspaceFolder = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = void 0;
    var messages_1 = require_messages2();
    var WorkspaceFoldersRequest;
    (function(WorkspaceFoldersRequest2) {
      WorkspaceFoldersRequest2.method = "workspace/workspaceFolders";
      WorkspaceFoldersRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkspaceFoldersRequest2.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest2.method);
    })(WorkspaceFoldersRequest || (exports2.WorkspaceFoldersRequest = WorkspaceFoldersRequest = {}));
    var DidChangeWorkspaceFoldersNotification;
    (function(DidChangeWorkspaceFoldersNotification2) {
      DidChangeWorkspaceFoldersNotification2.method = "workspace/didChangeWorkspaceFolders";
      DidChangeWorkspaceFoldersNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWorkspaceFoldersNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification2.method);
    })(DidChangeWorkspaceFoldersNotification || (exports2.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
var require_protocol_configuration = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigurationRequest = void 0;
    var messages_1 = require_messages2();
    var ConfigurationRequest;
    (function(ConfigurationRequest2) {
      ConfigurationRequest2.method = "workspace/configuration";
      ConfigurationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ConfigurationRequest2.type = new messages_1.ProtocolRequestType(ConfigurationRequest2.method);
    })(ConfigurationRequest || (exports2.ConfigurationRequest = ConfigurationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
var require_protocol_colorProvider = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ColorPresentationRequest = exports2.DocumentColorRequest = void 0;
    var messages_1 = require_messages2();
    var DocumentColorRequest;
    (function(DocumentColorRequest2) {
      DocumentColorRequest2.method = "textDocument/documentColor";
      DocumentColorRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentColorRequest2.type = new messages_1.ProtocolRequestType(DocumentColorRequest2.method);
    })(DocumentColorRequest || (exports2.DocumentColorRequest = DocumentColorRequest = {}));
    var ColorPresentationRequest;
    (function(ColorPresentationRequest2) {
      ColorPresentationRequest2.method = "textDocument/colorPresentation";
      ColorPresentationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ColorPresentationRequest2.type = new messages_1.ProtocolRequestType(ColorPresentationRequest2.method);
    })(ColorPresentationRequest || (exports2.ColorPresentationRequest = ColorPresentationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
var require_protocol_foldingRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var FoldingRangeRequest;
    (function(FoldingRangeRequest2) {
      FoldingRangeRequest2.method = "textDocument/foldingRange";
      FoldingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      FoldingRangeRequest2.type = new messages_1.ProtocolRequestType(FoldingRangeRequest2.method);
    })(FoldingRangeRequest || (exports2.FoldingRangeRequest = FoldingRangeRequest = {}));
    var FoldingRangeRefreshRequest;
    (function(FoldingRangeRefreshRequest2) {
      FoldingRangeRefreshRequest2.method = `workspace/foldingRange/refresh`;
      FoldingRangeRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      FoldingRangeRefreshRequest2.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest2.method);
    })(FoldingRangeRefreshRequest || (exports2.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
var require_protocol_declaration = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DeclarationRequest = void 0;
    var messages_1 = require_messages2();
    var DeclarationRequest;
    (function(DeclarationRequest2) {
      DeclarationRequest2.method = "textDocument/declaration";
      DeclarationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DeclarationRequest2.type = new messages_1.ProtocolRequestType(DeclarationRequest2.method);
    })(DeclarationRequest || (exports2.DeclarationRequest = DeclarationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
var require_protocol_selectionRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SelectionRangeRequest = void 0;
    var messages_1 = require_messages2();
    var SelectionRangeRequest;
    (function(SelectionRangeRequest2) {
      SelectionRangeRequest2.method = "textDocument/selectionRange";
      SelectionRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SelectionRangeRequest2.type = new messages_1.ProtocolRequestType(SelectionRangeRequest2.method);
    })(SelectionRangeRequest || (exports2.SelectionRangeRequest = SelectionRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
var require_protocol_progress = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = void 0;
    var vscode_jsonrpc_1 = require_main();
    var messages_1 = require_messages2();
    var WorkDoneProgress;
    (function(WorkDoneProgress2) {
      WorkDoneProgress2.type = new vscode_jsonrpc_1.ProgressType();
      function is(value) {
        return value === WorkDoneProgress2.type;
      }
      WorkDoneProgress2.is = is;
    })(WorkDoneProgress || (exports2.WorkDoneProgress = WorkDoneProgress = {}));
    var WorkDoneProgressCreateRequest;
    (function(WorkDoneProgressCreateRequest2) {
      WorkDoneProgressCreateRequest2.method = "window/workDoneProgress/create";
      WorkDoneProgressCreateRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkDoneProgressCreateRequest2.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest2.method);
    })(WorkDoneProgressCreateRequest || (exports2.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest = {}));
    var WorkDoneProgressCancelNotification;
    (function(WorkDoneProgressCancelNotification2) {
      WorkDoneProgressCancelNotification2.method = "window/workDoneProgress/cancel";
      WorkDoneProgressCancelNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkDoneProgressCancelNotification2.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification2.method);
    })(WorkDoneProgressCancelNotification || (exports2.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
var require_protocol_callHierarchy = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.CallHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var CallHierarchyPrepareRequest;
    (function(CallHierarchyPrepareRequest2) {
      CallHierarchyPrepareRequest2.method = "textDocument/prepareCallHierarchy";
      CallHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest2.method);
    })(CallHierarchyPrepareRequest || (exports2.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest = {}));
    var CallHierarchyIncomingCallsRequest;
    (function(CallHierarchyIncomingCallsRequest2) {
      CallHierarchyIncomingCallsRequest2.method = "callHierarchy/incomingCalls";
      CallHierarchyIncomingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyIncomingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest2.method);
    })(CallHierarchyIncomingCallsRequest || (exports2.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest = {}));
    var CallHierarchyOutgoingCallsRequest;
    (function(CallHierarchyOutgoingCallsRequest2) {
      CallHierarchyOutgoingCallsRequest2.method = "callHierarchy/outgoingCalls";
      CallHierarchyOutgoingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyOutgoingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest2.method);
    })(CallHierarchyOutgoingCallsRequest || (exports2.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
var require_protocol_semanticTokens = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.SemanticTokensRegistrationType = exports2.TokenFormat = void 0;
    var messages_1 = require_messages2();
    var TokenFormat;
    (function(TokenFormat2) {
      TokenFormat2.Relative = "relative";
    })(TokenFormat || (exports2.TokenFormat = TokenFormat = {}));
    var SemanticTokensRegistrationType;
    (function(SemanticTokensRegistrationType2) {
      SemanticTokensRegistrationType2.method = "textDocument/semanticTokens";
      SemanticTokensRegistrationType2.type = new messages_1.RegistrationType(SemanticTokensRegistrationType2.method);
    })(SemanticTokensRegistrationType || (exports2.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
    var SemanticTokensRequest;
    (function(SemanticTokensRequest2) {
      SemanticTokensRequest2.method = "textDocument/semanticTokens/full";
      SemanticTokensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRequest2.method);
      SemanticTokensRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensRequest || (exports2.SemanticTokensRequest = SemanticTokensRequest = {}));
    var SemanticTokensDeltaRequest;
    (function(SemanticTokensDeltaRequest2) {
      SemanticTokensDeltaRequest2.method = "textDocument/semanticTokens/full/delta";
      SemanticTokensDeltaRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensDeltaRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest2.method);
      SemanticTokensDeltaRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensDeltaRequest || (exports2.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
    var SemanticTokensRangeRequest;
    (function(SemanticTokensRangeRequest2) {
      SemanticTokensRangeRequest2.method = "textDocument/semanticTokens/range";
      SemanticTokensRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRangeRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest2.method);
      SemanticTokensRangeRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensRangeRequest || (exports2.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
    var SemanticTokensRefreshRequest;
    (function(SemanticTokensRefreshRequest2) {
      SemanticTokensRefreshRequest2.method = `workspace/semanticTokens/refresh`;
      SemanticTokensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      SemanticTokensRefreshRequest2.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest2.method);
    })(SemanticTokensRefreshRequest || (exports2.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
var require_protocol_showDocument = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShowDocumentRequest = void 0;
    var messages_1 = require_messages2();
    var ShowDocumentRequest;
    (function(ShowDocumentRequest2) {
      ShowDocumentRequest2.method = "window/showDocument";
      ShowDocumentRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowDocumentRequest2.type = new messages_1.ProtocolRequestType(ShowDocumentRequest2.method);
    })(ShowDocumentRequest || (exports2.ShowDocumentRequest = ShowDocumentRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
var require_protocol_linkedEditingRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LinkedEditingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var LinkedEditingRangeRequest;
    (function(LinkedEditingRangeRequest2) {
      LinkedEditingRangeRequest2.method = "textDocument/linkedEditingRange";
      LinkedEditingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      LinkedEditingRangeRequest2.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest2.method);
    })(LinkedEditingRangeRequest || (exports2.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
var require_protocol_fileOperations = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.DidRenameFilesNotification = exports2.WillRenameFilesRequest = exports2.DidCreateFilesNotification = exports2.WillCreateFilesRequest = exports2.FileOperationPatternKind = void 0;
    var messages_1 = require_messages2();
    var FileOperationPatternKind;
    (function(FileOperationPatternKind2) {
      FileOperationPatternKind2.file = "file";
      FileOperationPatternKind2.folder = "folder";
    })(FileOperationPatternKind || (exports2.FileOperationPatternKind = FileOperationPatternKind = {}));
    var WillCreateFilesRequest;
    (function(WillCreateFilesRequest2) {
      WillCreateFilesRequest2.method = "workspace/willCreateFiles";
      WillCreateFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillCreateFilesRequest2.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest2.method);
    })(WillCreateFilesRequest || (exports2.WillCreateFilesRequest = WillCreateFilesRequest = {}));
    var DidCreateFilesNotification;
    (function(DidCreateFilesNotification2) {
      DidCreateFilesNotification2.method = "workspace/didCreateFiles";
      DidCreateFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCreateFilesNotification2.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification2.method);
    })(DidCreateFilesNotification || (exports2.DidCreateFilesNotification = DidCreateFilesNotification = {}));
    var WillRenameFilesRequest;
    (function(WillRenameFilesRequest2) {
      WillRenameFilesRequest2.method = "workspace/willRenameFiles";
      WillRenameFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillRenameFilesRequest2.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest2.method);
    })(WillRenameFilesRequest || (exports2.WillRenameFilesRequest = WillRenameFilesRequest = {}));
    var DidRenameFilesNotification;
    (function(DidRenameFilesNotification2) {
      DidRenameFilesNotification2.method = "workspace/didRenameFiles";
      DidRenameFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidRenameFilesNotification2.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification2.method);
    })(DidRenameFilesNotification || (exports2.DidRenameFilesNotification = DidRenameFilesNotification = {}));
    var DidDeleteFilesNotification;
    (function(DidDeleteFilesNotification2) {
      DidDeleteFilesNotification2.method = "workspace/didDeleteFiles";
      DidDeleteFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidDeleteFilesNotification2.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification2.method);
    })(DidDeleteFilesNotification || (exports2.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
    var WillDeleteFilesRequest;
    (function(WillDeleteFilesRequest2) {
      WillDeleteFilesRequest2.method = "workspace/willDeleteFiles";
      WillDeleteFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillDeleteFilesRequest2.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest2.method);
    })(WillDeleteFilesRequest || (exports2.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
var require_protocol_moniker = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = void 0;
    var messages_1 = require_messages2();
    var UniquenessLevel;
    (function(UniquenessLevel2) {
      UniquenessLevel2.document = "document";
      UniquenessLevel2.project = "project";
      UniquenessLevel2.group = "group";
      UniquenessLevel2.scheme = "scheme";
      UniquenessLevel2.global = "global";
    })(UniquenessLevel || (exports2.UniquenessLevel = UniquenessLevel = {}));
    var MonikerKind;
    (function(MonikerKind2) {
      MonikerKind2.$import = "import";
      MonikerKind2.$export = "export";
      MonikerKind2.local = "local";
    })(MonikerKind || (exports2.MonikerKind = MonikerKind = {}));
    var MonikerRequest;
    (function(MonikerRequest2) {
      MonikerRequest2.method = "textDocument/moniker";
      MonikerRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      MonikerRequest2.type = new messages_1.ProtocolRequestType(MonikerRequest2.method);
    })(MonikerRequest || (exports2.MonikerRequest = MonikerRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js
var require_protocol_typeHierarchy = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var TypeHierarchyPrepareRequest;
    (function(TypeHierarchyPrepareRequest2) {
      TypeHierarchyPrepareRequest2.method = "textDocument/prepareTypeHierarchy";
      TypeHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest2.method);
    })(TypeHierarchyPrepareRequest || (exports2.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest = {}));
    var TypeHierarchySupertypesRequest;
    (function(TypeHierarchySupertypesRequest2) {
      TypeHierarchySupertypesRequest2.method = "typeHierarchy/supertypes";
      TypeHierarchySupertypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySupertypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest2.method);
    })(TypeHierarchySupertypesRequest || (exports2.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest = {}));
    var TypeHierarchySubtypesRequest;
    (function(TypeHierarchySubtypesRequest2) {
      TypeHierarchySubtypesRequest2.method = "typeHierarchy/subtypes";
      TypeHierarchySubtypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySubtypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest2.method);
    })(TypeHierarchySubtypesRequest || (exports2.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js
var require_protocol_inlineValue = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = void 0;
    var messages_1 = require_messages2();
    var InlineValueRequest;
    (function(InlineValueRequest2) {
      InlineValueRequest2.method = "textDocument/inlineValue";
      InlineValueRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineValueRequest2.type = new messages_1.ProtocolRequestType(InlineValueRequest2.method);
    })(InlineValueRequest || (exports2.InlineValueRequest = InlineValueRequest = {}));
    var InlineValueRefreshRequest;
    (function(InlineValueRefreshRequest2) {
      InlineValueRefreshRequest2.method = `workspace/inlineValue/refresh`;
      InlineValueRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlineValueRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest2.method);
    })(InlineValueRefreshRequest || (exports2.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js
var require_protocol_inlayHint = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = void 0;
    var messages_1 = require_messages2();
    var InlayHintRequest;
    (function(InlayHintRequest2) {
      InlayHintRequest2.method = "textDocument/inlayHint";
      InlayHintRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintRequest2.type = new messages_1.ProtocolRequestType(InlayHintRequest2.method);
    })(InlayHintRequest || (exports2.InlayHintRequest = InlayHintRequest = {}));
    var InlayHintResolveRequest;
    (function(InlayHintResolveRequest2) {
      InlayHintResolveRequest2.method = "inlayHint/resolve";
      InlayHintResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintResolveRequest2.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest2.method);
    })(InlayHintResolveRequest || (exports2.InlayHintResolveRequest = InlayHintResolveRequest = {}));
    var InlayHintRefreshRequest;
    (function(InlayHintRefreshRequest2) {
      InlayHintRefreshRequest2.method = `workspace/inlayHint/refresh`;
      InlayHintRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlayHintRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest2.method);
    })(InlayHintRefreshRequest || (exports2.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js
var require_protocol_diagnostic = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = void 0;
    var vscode_jsonrpc_1 = require_main();
    var Is = require_is3();
    var messages_1 = require_messages2();
    var DiagnosticServerCancellationData;
    (function(DiagnosticServerCancellationData2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.boolean(candidate.retriggerRequest);
      }
      DiagnosticServerCancellationData2.is = is;
    })(DiagnosticServerCancellationData || (exports2.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
    var DocumentDiagnosticReportKind;
    (function(DocumentDiagnosticReportKind2) {
      DocumentDiagnosticReportKind2.Full = "full";
      DocumentDiagnosticReportKind2.Unchanged = "unchanged";
    })(DocumentDiagnosticReportKind || (exports2.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind = {}));
    var DocumentDiagnosticRequest;
    (function(DocumentDiagnosticRequest2) {
      DocumentDiagnosticRequest2.method = "textDocument/diagnostic";
      DocumentDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentDiagnosticRequest2.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest2.method);
      DocumentDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
    })(DocumentDiagnosticRequest || (exports2.DocumentDiagnosticRequest = DocumentDiagnosticRequest = {}));
    var WorkspaceDiagnosticRequest;
    (function(WorkspaceDiagnosticRequest2) {
      WorkspaceDiagnosticRequest2.method = "workspace/diagnostic";
      WorkspaceDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceDiagnosticRequest2.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest2.method);
      WorkspaceDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
    })(WorkspaceDiagnosticRequest || (exports2.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest = {}));
    var DiagnosticRefreshRequest;
    (function(DiagnosticRefreshRequest2) {
      DiagnosticRefreshRequest2.method = `workspace/diagnostic/refresh`;
      DiagnosticRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      DiagnosticRefreshRequest2.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest2.method);
    })(DiagnosticRefreshRequest || (exports2.DiagnosticRefreshRequest = DiagnosticRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js
var require_protocol_notebook = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = void 0;
    var vscode_languageserver_types_1 = require_main2();
    var Is = require_is3();
    var messages_1 = require_messages2();
    var NotebookCellKind;
    (function(NotebookCellKind2) {
      NotebookCellKind2.Markup = 1;
      NotebookCellKind2.Code = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      NotebookCellKind2.is = is;
    })(NotebookCellKind || (exports2.NotebookCellKind = NotebookCellKind = {}));
    var ExecutionSummary;
    (function(ExecutionSummary2) {
      function create(executionOrder, success) {
        const result = { executionOrder };
        if (success === true || success === false) {
          result.success = success;
        }
        return result;
      }
      ExecutionSummary2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === void 0 || Is.boolean(candidate.success));
      }
      ExecutionSummary2.is = is;
      function equals(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        return one.executionOrder === other.executionOrder && one.success === other.success;
      }
      ExecutionSummary2.equals = equals;
    })(ExecutionSummary || (exports2.ExecutionSummary = ExecutionSummary = {}));
    var NotebookCell;
    (function(NotebookCell2) {
      function create(kind, document) {
        return { kind, document };
      }
      NotebookCell2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === void 0 || Is.objectLiteral(candidate.metadata));
      }
      NotebookCell2.is = is;
      function diff(one, two) {
        const result = /* @__PURE__ */ new Set();
        if (one.document !== two.document) {
          result.add("document");
        }
        if (one.kind !== two.kind) {
          result.add("kind");
        }
        if (one.executionSummary !== two.executionSummary) {
          result.add("executionSummary");
        }
        if ((one.metadata !== void 0 || two.metadata !== void 0) && !equalsMetadata(one.metadata, two.metadata)) {
          result.add("metadata");
        }
        if ((one.executionSummary !== void 0 || two.executionSummary !== void 0) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
          result.add("executionSummary");
        }
        return result;
      }
      NotebookCell2.diff = diff;
      function equalsMetadata(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        if (typeof one !== typeof other) {
          return false;
        }
        if (typeof one !== "object") {
          return false;
        }
        const oneArray = Array.isArray(one);
        const otherArray = Array.isArray(other);
        if (oneArray !== otherArray) {
          return false;
        }
        if (oneArray && otherArray) {
          if (one.length !== other.length) {
            return false;
          }
          for (let i = 0; i < one.length; i++) {
            if (!equalsMetadata(one[i], other[i])) {
              return false;
            }
          }
        }
        if (Is.objectLiteral(one) && Is.objectLiteral(other)) {
          const oneKeys = Object.keys(one);
          const otherKeys = Object.keys(other);
          if (oneKeys.length !== otherKeys.length) {
            return false;
          }
          oneKeys.sort();
          otherKeys.sort();
          if (!equalsMetadata(oneKeys, otherKeys)) {
            return false;
          }
          for (let i = 0; i < oneKeys.length; i++) {
            const prop = oneKeys[i];
            if (!equalsMetadata(one[prop], other[prop])) {
              return false;
            }
          }
        }
        return true;
      }
    })(NotebookCell || (exports2.NotebookCell = NotebookCell = {}));
    var NotebookDocument;
    (function(NotebookDocument2) {
      function create(uri, notebookType, version, cells) {
        return { uri, notebookType, version, cells };
      }
      NotebookDocument2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is.typedArray(candidate.cells, NotebookCell.is);
      }
      NotebookDocument2.is = is;
    })(NotebookDocument || (exports2.NotebookDocument = NotebookDocument = {}));
    var NotebookDocumentSyncRegistrationType;
    (function(NotebookDocumentSyncRegistrationType2) {
      NotebookDocumentSyncRegistrationType2.method = "notebookDocument/sync";
      NotebookDocumentSyncRegistrationType2.messageDirection = messages_1.MessageDirection.clientToServer;
      NotebookDocumentSyncRegistrationType2.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType2.method);
    })(NotebookDocumentSyncRegistrationType || (exports2.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
    var DidOpenNotebookDocumentNotification;
    (function(DidOpenNotebookDocumentNotification2) {
      DidOpenNotebookDocumentNotification2.method = "notebookDocument/didOpen";
      DidOpenNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification2.method);
      DidOpenNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidOpenNotebookDocumentNotification || (exports2.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
    var NotebookCellArrayChange;
    (function(NotebookCellArrayChange2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === void 0 || Is.typedArray(candidate.cells, NotebookCell.is));
      }
      NotebookCellArrayChange2.is = is;
      function create(start, deleteCount, cells) {
        const result = { start, deleteCount };
        if (cells !== void 0) {
          result.cells = cells;
        }
        return result;
      }
      NotebookCellArrayChange2.create = create;
    })(NotebookCellArrayChange || (exports2.NotebookCellArrayChange = NotebookCellArrayChange = {}));
    var DidChangeNotebookDocumentNotification;
    (function(DidChangeNotebookDocumentNotification2) {
      DidChangeNotebookDocumentNotification2.method = "notebookDocument/didChange";
      DidChangeNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification2.method);
      DidChangeNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidChangeNotebookDocumentNotification || (exports2.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
    var DidSaveNotebookDocumentNotification;
    (function(DidSaveNotebookDocumentNotification2) {
      DidSaveNotebookDocumentNotification2.method = "notebookDocument/didSave";
      DidSaveNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification2.method);
      DidSaveNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidSaveNotebookDocumentNotification || (exports2.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
    var DidCloseNotebookDocumentNotification;
    (function(DidCloseNotebookDocumentNotification2) {
      DidCloseNotebookDocumentNotification2.method = "notebookDocument/didClose";
      DidCloseNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification2.method);
      DidCloseNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidCloseNotebookDocumentNotification || (exports2.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js
var require_protocol_inlineCompletion = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineCompletionRequest = void 0;
    var messages_1 = require_messages2();
    var InlineCompletionRequest;
    (function(InlineCompletionRequest2) {
      InlineCompletionRequest2.method = "textDocument/inlineCompletion";
      InlineCompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineCompletionRequest2.type = new messages_1.ProtocolRequestType(InlineCompletionRequest2.method);
    })(InlineCompletionRequest || (exports2.InlineCompletionRequest = InlineCompletionRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.js
var require_protocol = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkspaceSymbolRequest = exports2.CodeActionResolveRequest = exports2.CodeActionRequest = exports2.DocumentSymbolRequest = exports2.DocumentHighlightRequest = exports2.ReferencesRequest = exports2.DefinitionRequest = exports2.SignatureHelpRequest = exports2.SignatureHelpTriggerKind = exports2.HoverRequest = exports2.CompletionResolveRequest = exports2.CompletionRequest = exports2.CompletionTriggerKind = exports2.PublishDiagnosticsNotification = exports2.WatchKind = exports2.RelativePattern = exports2.FileChangeType = exports2.DidChangeWatchedFilesNotification = exports2.WillSaveTextDocumentWaitUntilRequest = exports2.WillSaveTextDocumentNotification = exports2.TextDocumentSaveReason = exports2.DidSaveTextDocumentNotification = exports2.DidCloseTextDocumentNotification = exports2.DidChangeTextDocumentNotification = exports2.TextDocumentContentChangeEvent = exports2.DidOpenTextDocumentNotification = exports2.TextDocumentSyncKind = exports2.TelemetryEventNotification = exports2.LogMessageNotification = exports2.ShowMessageRequest = exports2.ShowMessageNotification = exports2.MessageType = exports2.DidChangeConfigurationNotification = exports2.ExitNotification = exports2.ShutdownRequest = exports2.InitializedNotification = exports2.InitializeErrorCodes = exports2.InitializeRequest = exports2.WorkDoneProgressOptions = exports2.TextDocumentRegistrationOptions = exports2.StaticRegistrationOptions = exports2.PositionEncodingKind = exports2.FailureHandlingKind = exports2.ResourceOperationKind = exports2.UnregistrationRequest = exports2.RegistrationRequest = exports2.DocumentSelector = exports2.NotebookCellTextDocumentFilter = exports2.NotebookDocumentFilter = exports2.TextDocumentFilter = void 0;
    exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.WillRenameFilesRequest = exports2.DidRenameFilesNotification = exports2.WillCreateFilesRequest = exports2.DidCreateFilesNotification = exports2.FileOperationPatternKind = exports2.LinkedEditingRangeRequest = exports2.ShowDocumentRequest = exports2.SemanticTokensRegistrationType = exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.TokenFormat = exports2.CallHierarchyPrepareRequest = exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = exports2.SelectionRangeRequest = exports2.DeclarationRequest = exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = exports2.ColorPresentationRequest = exports2.DocumentColorRequest = exports2.ConfigurationRequest = exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = exports2.TypeDefinitionRequest = exports2.ImplementationRequest = exports2.ApplyWorkspaceEditRequest = exports2.ExecuteCommandRequest = exports2.PrepareRenameRequest = exports2.RenameRequest = exports2.PrepareSupportDefaultBehavior = exports2.DocumentOnTypeFormattingRequest = exports2.DocumentRangesFormattingRequest = exports2.DocumentRangeFormattingRequest = exports2.DocumentFormattingRequest = exports2.DocumentLinkResolveRequest = exports2.DocumentLinkRequest = exports2.CodeLensRefreshRequest = exports2.CodeLensResolveRequest = exports2.CodeLensRequest = exports2.WorkspaceSymbolResolveRequest = void 0;
    exports2.InlineCompletionRequest = exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var vscode_languageserver_types_1 = require_main2();
    var Is = require_is3();
    var protocol_implementation_1 = require_protocol_implementation();
    Object.defineProperty(exports2, "ImplementationRequest", { enumerable: true, get: function() {
      return protocol_implementation_1.ImplementationRequest;
    } });
    var protocol_typeDefinition_1 = require_protocol_typeDefinition();
    Object.defineProperty(exports2, "TypeDefinitionRequest", { enumerable: true, get: function() {
      return protocol_typeDefinition_1.TypeDefinitionRequest;
    } });
    var protocol_workspaceFolder_1 = require_protocol_workspaceFolder();
    Object.defineProperty(exports2, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
    } });
    Object.defineProperty(exports2, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
    } });
    var protocol_configuration_1 = require_protocol_configuration();
    Object.defineProperty(exports2, "ConfigurationRequest", { enumerable: true, get: function() {
      return protocol_configuration_1.ConfigurationRequest;
    } });
    var protocol_colorProvider_1 = require_protocol_colorProvider();
    Object.defineProperty(exports2, "DocumentColorRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.DocumentColorRequest;
    } });
    Object.defineProperty(exports2, "ColorPresentationRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.ColorPresentationRequest;
    } });
    var protocol_foldingRange_1 = require_protocol_foldingRange();
    Object.defineProperty(exports2, "FoldingRangeRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRequest;
    } });
    Object.defineProperty(exports2, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRefreshRequest;
    } });
    var protocol_declaration_1 = require_protocol_declaration();
    Object.defineProperty(exports2, "DeclarationRequest", { enumerable: true, get: function() {
      return protocol_declaration_1.DeclarationRequest;
    } });
    var protocol_selectionRange_1 = require_protocol_selectionRange();
    Object.defineProperty(exports2, "SelectionRangeRequest", { enumerable: true, get: function() {
      return protocol_selectionRange_1.SelectionRangeRequest;
    } });
    var protocol_progress_1 = require_protocol_progress();
    Object.defineProperty(exports2, "WorkDoneProgress", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgress;
    } });
    Object.defineProperty(exports2, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCreateRequest;
    } });
    Object.defineProperty(exports2, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCancelNotification;
    } });
    var protocol_callHierarchy_1 = require_protocol_callHierarchy();
    Object.defineProperty(exports2, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
    } });
    Object.defineProperty(exports2, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
    } });
    Object.defineProperty(exports2, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
    } });
    var protocol_semanticTokens_1 = require_protocol_semanticTokens();
    Object.defineProperty(exports2, "TokenFormat", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.TokenFormat;
    } });
    Object.defineProperty(exports2, "SemanticTokensRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRangeRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRegistrationType;
    } });
    var protocol_showDocument_1 = require_protocol_showDocument();
    Object.defineProperty(exports2, "ShowDocumentRequest", { enumerable: true, get: function() {
      return protocol_showDocument_1.ShowDocumentRequest;
    } });
    var protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
    Object.defineProperty(exports2, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
      return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
    } });
    var protocol_fileOperations_1 = require_protocol_fileOperations();
    Object.defineProperty(exports2, "FileOperationPatternKind", { enumerable: true, get: function() {
      return protocol_fileOperations_1.FileOperationPatternKind;
    } });
    Object.defineProperty(exports2, "DidCreateFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidCreateFilesNotification;
    } });
    Object.defineProperty(exports2, "WillCreateFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillCreateFilesRequest;
    } });
    Object.defineProperty(exports2, "DidRenameFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidRenameFilesNotification;
    } });
    Object.defineProperty(exports2, "WillRenameFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillRenameFilesRequest;
    } });
    Object.defineProperty(exports2, "DidDeleteFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidDeleteFilesNotification;
    } });
    Object.defineProperty(exports2, "WillDeleteFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillDeleteFilesRequest;
    } });
    var protocol_moniker_1 = require_protocol_moniker();
    Object.defineProperty(exports2, "UniquenessLevel", { enumerable: true, get: function() {
      return protocol_moniker_1.UniquenessLevel;
    } });
    Object.defineProperty(exports2, "MonikerKind", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerKind;
    } });
    Object.defineProperty(exports2, "MonikerRequest", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerRequest;
    } });
    var protocol_typeHierarchy_1 = require_protocol_typeHierarchy();
    Object.defineProperty(exports2, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
    } });
    Object.defineProperty(exports2, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
    } });
    Object.defineProperty(exports2, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
    } });
    var protocol_inlineValue_1 = require_protocol_inlineValue();
    Object.defineProperty(exports2, "InlineValueRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRequest;
    } });
    Object.defineProperty(exports2, "InlineValueRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRefreshRequest;
    } });
    var protocol_inlayHint_1 = require_protocol_inlayHint();
    Object.defineProperty(exports2, "InlayHintRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRequest;
    } });
    Object.defineProperty(exports2, "InlayHintResolveRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintResolveRequest;
    } });
    Object.defineProperty(exports2, "InlayHintRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRefreshRequest;
    } });
    var protocol_diagnostic_1 = require_protocol_diagnostic();
    Object.defineProperty(exports2, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticServerCancellationData;
    } });
    Object.defineProperty(exports2, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticReportKind;
    } });
    Object.defineProperty(exports2, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticRequest;
    } });
    Object.defineProperty(exports2, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
    } });
    Object.defineProperty(exports2, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticRefreshRequest;
    } });
    var protocol_notebook_1 = require_protocol_notebook();
    Object.defineProperty(exports2, "NotebookCellKind", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellKind;
    } });
    Object.defineProperty(exports2, "ExecutionSummary", { enumerable: true, get: function() {
      return protocol_notebook_1.ExecutionSummary;
    } });
    Object.defineProperty(exports2, "NotebookCell", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCell;
    } });
    Object.defineProperty(exports2, "NotebookDocument", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocument;
    } });
    Object.defineProperty(exports2, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
    } });
    Object.defineProperty(exports2, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidOpenNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "NotebookCellArrayChange", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellArrayChange;
    } });
    Object.defineProperty(exports2, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidChangeNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidSaveNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidCloseNotebookDocumentNotification;
    } });
    var protocol_inlineCompletion_1 = require_protocol_inlineCompletion();
    Object.defineProperty(exports2, "InlineCompletionRequest", { enumerable: true, get: function() {
      return protocol_inlineCompletion_1.InlineCompletionRequest;
    } });
    var TextDocumentFilter;
    (function(TextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.string(candidate) || (Is.string(candidate.language) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
      }
      TextDocumentFilter2.is = is;
    })(TextDocumentFilter || (exports2.TextDocumentFilter = TextDocumentFilter = {}));
    var NotebookDocumentFilter;
    (function(NotebookDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (Is.string(candidate.notebookType) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
      }
      NotebookDocumentFilter2.is = is;
    })(NotebookDocumentFilter || (exports2.NotebookDocumentFilter = NotebookDocumentFilter = {}));
    var NotebookCellTextDocumentFilter;
    (function(NotebookCellTextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (Is.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === void 0 || Is.string(candidate.language));
      }
      NotebookCellTextDocumentFilter2.is = is;
    })(NotebookCellTextDocumentFilter || (exports2.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
    var DocumentSelector;
    (function(DocumentSelector2) {
      function is(value) {
        if (!Array.isArray(value)) {
          return false;
        }
        for (let elem of value) {
          if (!Is.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
            return false;
          }
        }
        return true;
      }
      DocumentSelector2.is = is;
    })(DocumentSelector || (exports2.DocumentSelector = DocumentSelector = {}));
    var RegistrationRequest;
    (function(RegistrationRequest2) {
      RegistrationRequest2.method = "client/registerCapability";
      RegistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      RegistrationRequest2.type = new messages_1.ProtocolRequestType(RegistrationRequest2.method);
    })(RegistrationRequest || (exports2.RegistrationRequest = RegistrationRequest = {}));
    var UnregistrationRequest;
    (function(UnregistrationRequest2) {
      UnregistrationRequest2.method = "client/unregisterCapability";
      UnregistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      UnregistrationRequest2.type = new messages_1.ProtocolRequestType(UnregistrationRequest2.method);
    })(UnregistrationRequest || (exports2.UnregistrationRequest = UnregistrationRequest = {}));
    var ResourceOperationKind;
    (function(ResourceOperationKind2) {
      ResourceOperationKind2.Create = "create";
      ResourceOperationKind2.Rename = "rename";
      ResourceOperationKind2.Delete = "delete";
    })(ResourceOperationKind || (exports2.ResourceOperationKind = ResourceOperationKind = {}));
    var FailureHandlingKind;
    (function(FailureHandlingKind2) {
      FailureHandlingKind2.Abort = "abort";
      FailureHandlingKind2.Transactional = "transactional";
      FailureHandlingKind2.TextOnlyTransactional = "textOnlyTransactional";
      FailureHandlingKind2.Undo = "undo";
    })(FailureHandlingKind || (exports2.FailureHandlingKind = FailureHandlingKind = {}));
    var PositionEncodingKind;
    (function(PositionEncodingKind2) {
      PositionEncodingKind2.UTF8 = "utf-8";
      PositionEncodingKind2.UTF16 = "utf-16";
      PositionEncodingKind2.UTF32 = "utf-32";
    })(PositionEncodingKind || (exports2.PositionEncodingKind = PositionEncodingKind = {}));
    var StaticRegistrationOptions;
    (function(StaticRegistrationOptions2) {
      function hasId(value) {
        const candidate = value;
        return candidate && Is.string(candidate.id) && candidate.id.length > 0;
      }
      StaticRegistrationOptions2.hasId = hasId;
    })(StaticRegistrationOptions || (exports2.StaticRegistrationOptions = StaticRegistrationOptions = {}));
    var TextDocumentRegistrationOptions;
    (function(TextDocumentRegistrationOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
      }
      TextDocumentRegistrationOptions2.is = is;
    })(TextDocumentRegistrationOptions || (exports2.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
    var WorkDoneProgressOptions;
    (function(WorkDoneProgressOptions2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is.boolean(candidate.workDoneProgress));
      }
      WorkDoneProgressOptions2.is = is;
      function hasWorkDoneProgress(value) {
        const candidate = value;
        return candidate && Is.boolean(candidate.workDoneProgress);
      }
      WorkDoneProgressOptions2.hasWorkDoneProgress = hasWorkDoneProgress;
    })(WorkDoneProgressOptions || (exports2.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
    var InitializeRequest;
    (function(InitializeRequest2) {
      InitializeRequest2.method = "initialize";
      InitializeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializeRequest2.type = new messages_1.ProtocolRequestType(InitializeRequest2.method);
    })(InitializeRequest || (exports2.InitializeRequest = InitializeRequest = {}));
    var InitializeErrorCodes;
    (function(InitializeErrorCodes2) {
      InitializeErrorCodes2.unknownProtocolVersion = 1;
    })(InitializeErrorCodes || (exports2.InitializeErrorCodes = InitializeErrorCodes = {}));
    var InitializedNotification;
    (function(InitializedNotification2) {
      InitializedNotification2.method = "initialized";
      InitializedNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializedNotification2.type = new messages_1.ProtocolNotificationType(InitializedNotification2.method);
    })(InitializedNotification || (exports2.InitializedNotification = InitializedNotification = {}));
    var ShutdownRequest;
    (function(ShutdownRequest2) {
      ShutdownRequest2.method = "shutdown";
      ShutdownRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ShutdownRequest2.type = new messages_1.ProtocolRequestType0(ShutdownRequest2.method);
    })(ShutdownRequest || (exports2.ShutdownRequest = ShutdownRequest = {}));
    var ExitNotification;
    (function(ExitNotification2) {
      ExitNotification2.method = "exit";
      ExitNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExitNotification2.type = new messages_1.ProtocolNotificationType0(ExitNotification2.method);
    })(ExitNotification || (exports2.ExitNotification = ExitNotification = {}));
    var DidChangeConfigurationNotification;
    (function(DidChangeConfigurationNotification2) {
      DidChangeConfigurationNotification2.method = "workspace/didChangeConfiguration";
      DidChangeConfigurationNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeConfigurationNotification2.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification2.method);
    })(DidChangeConfigurationNotification || (exports2.DidChangeConfigurationNotification = DidChangeConfigurationNotification = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2.Error = 1;
      MessageType2.Warning = 2;
      MessageType2.Info = 3;
      MessageType2.Log = 4;
      MessageType2.Debug = 5;
    })(MessageType || (exports2.MessageType = MessageType = {}));
    var ShowMessageNotification;
    (function(ShowMessageNotification2) {
      ShowMessageNotification2.method = "window/showMessage";
      ShowMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageNotification2.type = new messages_1.ProtocolNotificationType(ShowMessageNotification2.method);
    })(ShowMessageNotification || (exports2.ShowMessageNotification = ShowMessageNotification = {}));
    var ShowMessageRequest;
    (function(ShowMessageRequest2) {
      ShowMessageRequest2.method = "window/showMessageRequest";
      ShowMessageRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageRequest2.type = new messages_1.ProtocolRequestType(ShowMessageRequest2.method);
    })(ShowMessageRequest || (exports2.ShowMessageRequest = ShowMessageRequest = {}));
    var LogMessageNotification;
    (function(LogMessageNotification2) {
      LogMessageNotification2.method = "window/logMessage";
      LogMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      LogMessageNotification2.type = new messages_1.ProtocolNotificationType(LogMessageNotification2.method);
    })(LogMessageNotification || (exports2.LogMessageNotification = LogMessageNotification = {}));
    var TelemetryEventNotification;
    (function(TelemetryEventNotification2) {
      TelemetryEventNotification2.method = "telemetry/event";
      TelemetryEventNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      TelemetryEventNotification2.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification2.method);
    })(TelemetryEventNotification || (exports2.TelemetryEventNotification = TelemetryEventNotification = {}));
    var TextDocumentSyncKind;
    (function(TextDocumentSyncKind2) {
      TextDocumentSyncKind2.None = 0;
      TextDocumentSyncKind2.Full = 1;
      TextDocumentSyncKind2.Incremental = 2;
    })(TextDocumentSyncKind || (exports2.TextDocumentSyncKind = TextDocumentSyncKind = {}));
    var DidOpenTextDocumentNotification;
    (function(DidOpenTextDocumentNotification2) {
      DidOpenTextDocumentNotification2.method = "textDocument/didOpen";
      DidOpenTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification2.method);
    })(DidOpenTextDocumentNotification || (exports2.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification = {}));
    var TextDocumentContentChangeEvent;
    (function(TextDocumentContentChangeEvent2) {
      function isIncremental(event) {
        let candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      TextDocumentContentChangeEvent2.isIncremental = isIncremental;
      function isFull(event) {
        let candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
      TextDocumentContentChangeEvent2.isFull = isFull;
    })(TextDocumentContentChangeEvent || (exports2.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
    var DidChangeTextDocumentNotification;
    (function(DidChangeTextDocumentNotification2) {
      DidChangeTextDocumentNotification2.method = "textDocument/didChange";
      DidChangeTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification2.method);
    })(DidChangeTextDocumentNotification || (exports2.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification = {}));
    var DidCloseTextDocumentNotification;
    (function(DidCloseTextDocumentNotification2) {
      DidCloseTextDocumentNotification2.method = "textDocument/didClose";
      DidCloseTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification2.method);
    })(DidCloseTextDocumentNotification || (exports2.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification = {}));
    var DidSaveTextDocumentNotification;
    (function(DidSaveTextDocumentNotification2) {
      DidSaveTextDocumentNotification2.method = "textDocument/didSave";
      DidSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification2.method);
    })(DidSaveTextDocumentNotification || (exports2.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification = {}));
    var TextDocumentSaveReason;
    (function(TextDocumentSaveReason2) {
      TextDocumentSaveReason2.Manual = 1;
      TextDocumentSaveReason2.AfterDelay = 2;
      TextDocumentSaveReason2.FocusOut = 3;
    })(TextDocumentSaveReason || (exports2.TextDocumentSaveReason = TextDocumentSaveReason = {}));
    var WillSaveTextDocumentNotification;
    (function(WillSaveTextDocumentNotification2) {
      WillSaveTextDocumentNotification2.method = "textDocument/willSave";
      WillSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification2.method);
    })(WillSaveTextDocumentNotification || (exports2.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
    var WillSaveTextDocumentWaitUntilRequest;
    (function(WillSaveTextDocumentWaitUntilRequest2) {
      WillSaveTextDocumentWaitUntilRequest2.method = "textDocument/willSaveWaitUntil";
      WillSaveTextDocumentWaitUntilRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentWaitUntilRequest2.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest2.method);
    })(WillSaveTextDocumentWaitUntilRequest || (exports2.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
    var DidChangeWatchedFilesNotification;
    (function(DidChangeWatchedFilesNotification2) {
      DidChangeWatchedFilesNotification2.method = "workspace/didChangeWatchedFiles";
      DidChangeWatchedFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWatchedFilesNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification2.method);
    })(DidChangeWatchedFilesNotification || (exports2.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification = {}));
    var FileChangeType;
    (function(FileChangeType2) {
      FileChangeType2.Created = 1;
      FileChangeType2.Changed = 2;
      FileChangeType2.Deleted = 3;
    })(FileChangeType || (exports2.FileChangeType = FileChangeType = {}));
    var RelativePattern;
    (function(RelativePattern2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is.string(candidate.pattern);
      }
      RelativePattern2.is = is;
    })(RelativePattern || (exports2.RelativePattern = RelativePattern = {}));
    var WatchKind;
    (function(WatchKind2) {
      WatchKind2.Create = 1;
      WatchKind2.Change = 2;
      WatchKind2.Delete = 4;
    })(WatchKind || (exports2.WatchKind = WatchKind = {}));
    var PublishDiagnosticsNotification;
    (function(PublishDiagnosticsNotification2) {
      PublishDiagnosticsNotification2.method = "textDocument/publishDiagnostics";
      PublishDiagnosticsNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      PublishDiagnosticsNotification2.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification2.method);
    })(PublishDiagnosticsNotification || (exports2.PublishDiagnosticsNotification = PublishDiagnosticsNotification = {}));
    var CompletionTriggerKind;
    (function(CompletionTriggerKind2) {
      CompletionTriggerKind2.Invoked = 1;
      CompletionTriggerKind2.TriggerCharacter = 2;
      CompletionTriggerKind2.TriggerForIncompleteCompletions = 3;
    })(CompletionTriggerKind || (exports2.CompletionTriggerKind = CompletionTriggerKind = {}));
    var CompletionRequest;
    (function(CompletionRequest2) {
      CompletionRequest2.method = "textDocument/completion";
      CompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionRequest2.type = new messages_1.ProtocolRequestType(CompletionRequest2.method);
    })(CompletionRequest || (exports2.CompletionRequest = CompletionRequest = {}));
    var CompletionResolveRequest;
    (function(CompletionResolveRequest2) {
      CompletionResolveRequest2.method = "completionItem/resolve";
      CompletionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionResolveRequest2.type = new messages_1.ProtocolRequestType(CompletionResolveRequest2.method);
    })(CompletionResolveRequest || (exports2.CompletionResolveRequest = CompletionResolveRequest = {}));
    var HoverRequest;
    (function(HoverRequest2) {
      HoverRequest2.method = "textDocument/hover";
      HoverRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      HoverRequest2.type = new messages_1.ProtocolRequestType(HoverRequest2.method);
    })(HoverRequest || (exports2.HoverRequest = HoverRequest = {}));
    var SignatureHelpTriggerKind;
    (function(SignatureHelpTriggerKind2) {
      SignatureHelpTriggerKind2.Invoked = 1;
      SignatureHelpTriggerKind2.TriggerCharacter = 2;
      SignatureHelpTriggerKind2.ContentChange = 3;
    })(SignatureHelpTriggerKind || (exports2.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
    var SignatureHelpRequest;
    (function(SignatureHelpRequest2) {
      SignatureHelpRequest2.method = "textDocument/signatureHelp";
      SignatureHelpRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SignatureHelpRequest2.type = new messages_1.ProtocolRequestType(SignatureHelpRequest2.method);
    })(SignatureHelpRequest || (exports2.SignatureHelpRequest = SignatureHelpRequest = {}));
    var DefinitionRequest;
    (function(DefinitionRequest2) {
      DefinitionRequest2.method = "textDocument/definition";
      DefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DefinitionRequest2.type = new messages_1.ProtocolRequestType(DefinitionRequest2.method);
    })(DefinitionRequest || (exports2.DefinitionRequest = DefinitionRequest = {}));
    var ReferencesRequest;
    (function(ReferencesRequest2) {
      ReferencesRequest2.method = "textDocument/references";
      ReferencesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ReferencesRequest2.type = new messages_1.ProtocolRequestType(ReferencesRequest2.method);
    })(ReferencesRequest || (exports2.ReferencesRequest = ReferencesRequest = {}));
    var DocumentHighlightRequest;
    (function(DocumentHighlightRequest2) {
      DocumentHighlightRequest2.method = "textDocument/documentHighlight";
      DocumentHighlightRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentHighlightRequest2.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest2.method);
    })(DocumentHighlightRequest || (exports2.DocumentHighlightRequest = DocumentHighlightRequest = {}));
    var DocumentSymbolRequest;
    (function(DocumentSymbolRequest2) {
      DocumentSymbolRequest2.method = "textDocument/documentSymbol";
      DocumentSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentSymbolRequest2.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest2.method);
    })(DocumentSymbolRequest || (exports2.DocumentSymbolRequest = DocumentSymbolRequest = {}));
    var CodeActionRequest;
    (function(CodeActionRequest2) {
      CodeActionRequest2.method = "textDocument/codeAction";
      CodeActionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionRequest2.type = new messages_1.ProtocolRequestType(CodeActionRequest2.method);
    })(CodeActionRequest || (exports2.CodeActionRequest = CodeActionRequest = {}));
    var CodeActionResolveRequest;
    (function(CodeActionResolveRequest2) {
      CodeActionResolveRequest2.method = "codeAction/resolve";
      CodeActionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionResolveRequest2.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest2.method);
    })(CodeActionResolveRequest || (exports2.CodeActionResolveRequest = CodeActionResolveRequest = {}));
    var WorkspaceSymbolRequest;
    (function(WorkspaceSymbolRequest2) {
      WorkspaceSymbolRequest2.method = "workspace/symbol";
      WorkspaceSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest2.method);
    })(WorkspaceSymbolRequest || (exports2.WorkspaceSymbolRequest = WorkspaceSymbolRequest = {}));
    var WorkspaceSymbolResolveRequest;
    (function(WorkspaceSymbolResolveRequest2) {
      WorkspaceSymbolResolveRequest2.method = "workspaceSymbol/resolve";
      WorkspaceSymbolResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolResolveRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest2.method);
    })(WorkspaceSymbolResolveRequest || (exports2.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest = {}));
    var CodeLensRequest;
    (function(CodeLensRequest2) {
      CodeLensRequest2.method = "textDocument/codeLens";
      CodeLensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensRequest2.type = new messages_1.ProtocolRequestType(CodeLensRequest2.method);
    })(CodeLensRequest || (exports2.CodeLensRequest = CodeLensRequest = {}));
    var CodeLensResolveRequest;
    (function(CodeLensResolveRequest2) {
      CodeLensResolveRequest2.method = "codeLens/resolve";
      CodeLensResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensResolveRequest2.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest2.method);
    })(CodeLensResolveRequest || (exports2.CodeLensResolveRequest = CodeLensResolveRequest = {}));
    var CodeLensRefreshRequest;
    (function(CodeLensRefreshRequest2) {
      CodeLensRefreshRequest2.method = `workspace/codeLens/refresh`;
      CodeLensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      CodeLensRefreshRequest2.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest2.method);
    })(CodeLensRefreshRequest || (exports2.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
    var DocumentLinkRequest;
    (function(DocumentLinkRequest2) {
      DocumentLinkRequest2.method = "textDocument/documentLink";
      DocumentLinkRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkRequest2.method);
    })(DocumentLinkRequest || (exports2.DocumentLinkRequest = DocumentLinkRequest = {}));
    var DocumentLinkResolveRequest;
    (function(DocumentLinkResolveRequest2) {
      DocumentLinkResolveRequest2.method = "documentLink/resolve";
      DocumentLinkResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkResolveRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest2.method);
    })(DocumentLinkResolveRequest || (exports2.DocumentLinkResolveRequest = DocumentLinkResolveRequest = {}));
    var DocumentFormattingRequest;
    (function(DocumentFormattingRequest2) {
      DocumentFormattingRequest2.method = "textDocument/formatting";
      DocumentFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest2.method);
    })(DocumentFormattingRequest || (exports2.DocumentFormattingRequest = DocumentFormattingRequest = {}));
    var DocumentRangeFormattingRequest;
    (function(DocumentRangeFormattingRequest2) {
      DocumentRangeFormattingRequest2.method = "textDocument/rangeFormatting";
      DocumentRangeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest2.method);
    })(DocumentRangeFormattingRequest || (exports2.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest = {}));
    var DocumentRangesFormattingRequest;
    (function(DocumentRangesFormattingRequest2) {
      DocumentRangesFormattingRequest2.method = "textDocument/rangesFormatting";
      DocumentRangesFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangesFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest2.method);
    })(DocumentRangesFormattingRequest || (exports2.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
    var DocumentOnTypeFormattingRequest;
    (function(DocumentOnTypeFormattingRequest2) {
      DocumentOnTypeFormattingRequest2.method = "textDocument/onTypeFormatting";
      DocumentOnTypeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentOnTypeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest2.method);
    })(DocumentOnTypeFormattingRequest || (exports2.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest = {}));
    var PrepareSupportDefaultBehavior;
    (function(PrepareSupportDefaultBehavior2) {
      PrepareSupportDefaultBehavior2.Identifier = 1;
    })(PrepareSupportDefaultBehavior || (exports2.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
    var RenameRequest;
    (function(RenameRequest2) {
      RenameRequest2.method = "textDocument/rename";
      RenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      RenameRequest2.type = new messages_1.ProtocolRequestType(RenameRequest2.method);
    })(RenameRequest || (exports2.RenameRequest = RenameRequest = {}));
    var PrepareRenameRequest;
    (function(PrepareRenameRequest2) {
      PrepareRenameRequest2.method = "textDocument/prepareRename";
      PrepareRenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      PrepareRenameRequest2.type = new messages_1.ProtocolRequestType(PrepareRenameRequest2.method);
    })(PrepareRenameRequest || (exports2.PrepareRenameRequest = PrepareRenameRequest = {}));
    var ExecuteCommandRequest;
    (function(ExecuteCommandRequest2) {
      ExecuteCommandRequest2.method = "workspace/executeCommand";
      ExecuteCommandRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExecuteCommandRequest2.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest2.method);
    })(ExecuteCommandRequest || (exports2.ExecuteCommandRequest = ExecuteCommandRequest = {}));
    var ApplyWorkspaceEditRequest;
    (function(ApplyWorkspaceEditRequest2) {
      ApplyWorkspaceEditRequest2.method = "workspace/applyEdit";
      ApplyWorkspaceEditRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ApplyWorkspaceEditRequest2.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
    })(ApplyWorkspaceEditRequest || (exports2.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/connection.js
var require_connection2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/connection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createProtocolConnection = void 0;
    var vscode_jsonrpc_1 = require_main();
    function createProtocolConnection(input, output, logger, options) {
      if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
    }
    exports2.createProtocolConnection = createProtocolConnection;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/api.js
var require_api2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/api.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LSPErrorCodes = exports2.createProtocolConnection = void 0;
    __exportStar(require_main(), exports2);
    __exportStar(require_main2(), exports2);
    __exportStar(require_messages2(), exports2);
    __exportStar(require_protocol(), exports2);
    var connection_1 = require_connection2();
    Object.defineProperty(exports2, "createProtocolConnection", { enumerable: true, get: function() {
      return connection_1.createProtocolConnection;
    } });
    var LSPErrorCodes;
    (function(LSPErrorCodes2) {
      LSPErrorCodes2.lspReservedErrorRangeStart = -32899;
      LSPErrorCodes2.RequestFailed = -32803;
      LSPErrorCodes2.ServerCancelled = -32802;
      LSPErrorCodes2.ContentModified = -32801;
      LSPErrorCodes2.RequestCancelled = -32800;
      LSPErrorCodes2.lspReservedErrorRangeEnd = -32800;
    })(LSPErrorCodes || (exports2.LSPErrorCodes = LSPErrorCodes = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/node/main.js
var require_main3 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createProtocolConnection = void 0;
    var node_1 = require_node();
    __exportStar(require_node(), exports2);
    __exportStar(require_api2(), exports2);
    function createProtocolConnection(input, output, logger, options) {
      return (0, node_1.createMessageConnection)(input, output, logger, options);
    }
    exports2.createProtocolConnection = createProtocolConnection;
  }
});

// node_modules/vscode-languageserver/lib/common/utils/uuid.js
var require_uuid = __commonJS({
  "node_modules/vscode-languageserver/lib/common/utils/uuid.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generateUuid = exports2.parse = exports2.isUUID = exports2.v4 = exports2.empty = void 0;
    var ValueUUID = class {
      constructor(_value) {
        this._value = _value;
      }
      asHex() {
        return this._value;
      }
      equals(other) {
        return this.asHex() === other.asHex();
      }
    };
    var V4UUID = class _V4UUID extends ValueUUID {
      static _oneOf(array) {
        return array[Math.floor(array.length * Math.random())];
      }
      static _randomHex() {
        return _V4UUID._oneOf(_V4UUID._chars);
      }
      constructor() {
        super([
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          "4",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._oneOf(_V4UUID._timeHighBits),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex()
        ].join(""));
      }
    };
    V4UUID._chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    V4UUID._timeHighBits = ["8", "9", "a", "b"];
    exports2.empty = new ValueUUID("00000000-0000-0000-0000-000000000000");
    function v4() {
      return new V4UUID();
    }
    exports2.v4 = v4;
    var _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function isUUID(value) {
      return _UUIDPattern.test(value);
    }
    exports2.isUUID = isUUID;
    function parse(value) {
      if (!isUUID(value)) {
        throw new Error("invalid uuid");
      }
      return new ValueUUID(value);
    }
    exports2.parse = parse;
    function generateUuid() {
      return v4().asHex();
    }
    exports2.generateUuid = generateUuid;
  }
});

// node_modules/vscode-languageserver/lib/common/progress.js
var require_progress = __commonJS({
  "node_modules/vscode-languageserver/lib/common/progress.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.attachPartialResult = exports2.ProgressFeature = exports2.attachWorkDone = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var uuid_1 = require_uuid();
    var WorkDoneProgressReporterImpl = class _WorkDoneProgressReporterImpl {
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
        _WorkDoneProgressReporterImpl.Instances.set(this._token, this);
      }
      begin(title, percentage, message, cancellable) {
        let param = {
          kind: "begin",
          title,
          percentage,
          message,
          cancellable
        };
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      report(arg0, arg1) {
        let param = {
          kind: "report"
        };
        if (typeof arg0 === "number") {
          param.percentage = arg0;
          if (arg1 !== void 0) {
            param.message = arg1;
          }
        } else {
          param.message = arg0;
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      done() {
        _WorkDoneProgressReporterImpl.Instances.delete(this._token);
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, { kind: "end" });
      }
    };
    WorkDoneProgressReporterImpl.Instances = /* @__PURE__ */ new Map();
    var WorkDoneProgressServerReporterImpl = class extends WorkDoneProgressReporterImpl {
      constructor(connection, token) {
        super(connection, token);
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
        super.done();
      }
      cancel() {
        this._source.cancel();
      }
    };
    var NullProgressReporter = class {
      constructor() {
      }
      begin() {
      }
      report() {
      }
      done() {
      }
    };
    var NullProgressServerReporter = class extends NullProgressReporter {
      constructor() {
        super();
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
      }
      cancel() {
        this._source.cancel();
      }
    };
    function attachWorkDone(connection, params) {
      if (params === void 0 || params.workDoneToken === void 0) {
        return new NullProgressReporter();
      }
      const token = params.workDoneToken;
      delete params.workDoneToken;
      return new WorkDoneProgressReporterImpl(connection, token);
    }
    exports2.attachWorkDone = attachWorkDone;
    var ProgressFeature = (Base) => {
      return class extends Base {
        constructor() {
          super();
          this._progressSupported = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          if (capabilities?.window?.workDoneProgress === true) {
            this._progressSupported = true;
            this.connection.onNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, (params) => {
              let progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
              if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) {
                progress.cancel();
              }
            });
          }
        }
        attachWorkDoneProgress(token) {
          if (token === void 0) {
            return new NullProgressReporter();
          } else {
            return new WorkDoneProgressReporterImpl(this.connection, token);
          }
        }
        createWorkDoneProgress() {
          if (this._progressSupported) {
            const token = (0, uuid_1.generateUuid)();
            return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, { token }).then(() => {
              const result = new WorkDoneProgressServerReporterImpl(this.connection, token);
              return result;
            });
          } else {
            return Promise.resolve(new NullProgressServerReporter());
          }
        }
      };
    };
    exports2.ProgressFeature = ProgressFeature;
    var ResultProgress;
    (function(ResultProgress2) {
      ResultProgress2.type = new vscode_languageserver_protocol_1.ProgressType();
    })(ResultProgress || (ResultProgress = {}));
    var ResultProgressReporterImpl = class {
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
      }
      report(data) {
        this._connection.sendProgress(ResultProgress.type, this._token, data);
      }
    };
    function attachPartialResult(connection, params) {
      if (params === void 0 || params.partialResultToken === void 0) {
        return void 0;
      }
      const token = params.partialResultToken;
      delete params.partialResultToken;
      return new ResultProgressReporterImpl(connection, token);
    }
    exports2.attachPartialResult = attachPartialResult;
  }
});

// node_modules/vscode-languageserver/lib/common/configuration.js
var require_configuration = __commonJS({
  "node_modules/vscode-languageserver/lib/common/configuration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigurationFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var Is = require_is();
    var ConfigurationFeature = (Base) => {
      return class extends Base {
        getConfiguration(arg) {
          if (!arg) {
            return this._getConfiguration({});
          } else if (Is.string(arg)) {
            return this._getConfiguration({ section: arg });
          } else {
            return this._getConfiguration(arg);
          }
        }
        _getConfiguration(arg) {
          let params = {
            items: Array.isArray(arg) ? arg : [arg]
          };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, params).then((result) => {
            if (Array.isArray(result)) {
              return Array.isArray(arg) ? result : result[0];
            } else {
              return Array.isArray(arg) ? [] : null;
            }
          });
        }
      };
    };
    exports2.ConfigurationFeature = ConfigurationFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/workspaceFolder.js
var require_workspaceFolder = __commonJS({
  "node_modules/vscode-languageserver/lib/common/workspaceFolder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkspaceFoldersFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var WorkspaceFoldersFeature = (Base) => {
      return class extends Base {
        constructor() {
          super();
          this._notificationIsAutoRegistered = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          let workspaceCapabilities = capabilities.workspace;
          if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
            this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1.Emitter();
            this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, (params) => {
              this._onDidChangeWorkspaceFolders.fire(params.event);
            });
          }
        }
        fillServerCapabilities(capabilities) {
          super.fillServerCapabilities(capabilities);
          const changeNotifications = capabilities.workspace?.workspaceFolders?.changeNotifications;
          this._notificationIsAutoRegistered = changeNotifications === true || typeof changeNotifications === "string";
        }
        getWorkspaceFolders() {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type);
        }
        get onDidChangeWorkspaceFolders() {
          if (!this._onDidChangeWorkspaceFolders) {
            throw new Error("Client doesn't support sending workspace folder change events.");
          }
          if (!this._notificationIsAutoRegistered && !this._unregistration) {
            this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type);
          }
          return this._onDidChangeWorkspaceFolders.event;
        }
      };
    };
    exports2.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/callHierarchy.js
var require_callHierarchy = __commonJS({
  "node_modules/vscode-languageserver/lib/common/callHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var CallHierarchyFeature = (Base) => {
      return class extends Base {
        get callHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onIncomingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onOutgoingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.CallHierarchyFeature = CallHierarchyFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/semanticTokens.js
var require_semanticTokens = __commonJS({
  "node_modules/vscode-languageserver/lib/common/semanticTokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTokensBuilder = exports2.SemanticTokensDiff = exports2.SemanticTokensFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var SemanticTokensFeature = (Base) => {
      return class extends Base {
        get semanticTokens() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onDelta: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onRange: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.SemanticTokensFeature = SemanticTokensFeature;
    var SemanticTokensDiff = class {
      constructor(originalSequence, modifiedSequence) {
        this.originalSequence = originalSequence;
        this.modifiedSequence = modifiedSequence;
      }
      computeDiff() {
        const originalLength = this.originalSequence.length;
        const modifiedLength = this.modifiedSequence.length;
        let startIndex = 0;
        while (startIndex < modifiedLength && startIndex < originalLength && this.originalSequence[startIndex] === this.modifiedSequence[startIndex]) {
          startIndex++;
        }
        if (startIndex < modifiedLength && startIndex < originalLength) {
          let originalEndIndex = originalLength - 1;
          let modifiedEndIndex = modifiedLength - 1;
          while (originalEndIndex >= startIndex && modifiedEndIndex >= startIndex && this.originalSequence[originalEndIndex] === this.modifiedSequence[modifiedEndIndex]) {
            originalEndIndex--;
            modifiedEndIndex--;
          }
          if (originalEndIndex < startIndex || modifiedEndIndex < startIndex) {
            originalEndIndex++;
            modifiedEndIndex++;
          }
          const deleteCount = originalEndIndex - startIndex + 1;
          const newData = this.modifiedSequence.slice(startIndex, modifiedEndIndex + 1);
          if (newData.length === 1 && newData[0] === this.originalSequence[originalEndIndex]) {
            return [
              { start: startIndex, deleteCount: deleteCount - 1 }
            ];
          } else {
            return [
              { start: startIndex, deleteCount, data: newData }
            ];
          }
        } else if (startIndex < modifiedLength) {
          return [
            { start: startIndex, deleteCount: 0, data: this.modifiedSequence.slice(startIndex) }
          ];
        } else if (startIndex < originalLength) {
          return [
            { start: startIndex, deleteCount: originalLength - startIndex }
          ];
        } else {
          return [];
        }
      }
    };
    exports2.SemanticTokensDiff = SemanticTokensDiff;
    var SemanticTokensBuilder = class {
      constructor() {
        this._prevData = void 0;
        this.initialize();
      }
      initialize() {
        this._id = Date.now();
        this._prevLine = 0;
        this._prevChar = 0;
        this._data = [];
        this._dataLen = 0;
      }
      push(line, char, length, tokenType, tokenModifiers) {
        let pushLine = line;
        let pushChar = char;
        if (this._dataLen > 0) {
          pushLine -= this._prevLine;
          if (pushLine === 0) {
            pushChar -= this._prevChar;
          }
        }
        this._data[this._dataLen++] = pushLine;
        this._data[this._dataLen++] = pushChar;
        this._data[this._dataLen++] = length;
        this._data[this._dataLen++] = tokenType;
        this._data[this._dataLen++] = tokenModifiers;
        this._prevLine = line;
        this._prevChar = char;
      }
      get id() {
        return this._id.toString();
      }
      previousResult(id) {
        if (this.id === id) {
          this._prevData = this._data;
        }
        this.initialize();
      }
      build() {
        this._prevData = void 0;
        return {
          resultId: this.id,
          data: this._data
        };
      }
      canBuildEdits() {
        return this._prevData !== void 0;
      }
      buildEdits() {
        if (this._prevData !== void 0) {
          return {
            resultId: this.id,
            edits: new SemanticTokensDiff(this._prevData, this._data).computeDiff()
          };
        } else {
          return this.build();
        }
      }
    };
    exports2.SemanticTokensBuilder = SemanticTokensBuilder;
  }
});

// node_modules/vscode-languageserver/lib/common/showDocument.js
var require_showDocument = __commonJS({
  "node_modules/vscode-languageserver/lib/common/showDocument.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShowDocumentFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var ShowDocumentFeature = (Base) => {
      return class extends Base {
        showDocument(params) {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, params);
        }
      };
    };
    exports2.ShowDocumentFeature = ShowDocumentFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/fileOperations.js
var require_fileOperations = __commonJS({
  "node_modules/vscode-languageserver/lib/common/fileOperations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FileOperationsFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var FileOperationsFeature = (Base) => {
      return class extends Base {
        onDidCreateFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidCreateFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onDidRenameFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidRenameFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onDidDeleteFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidDeleteFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onWillCreateFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillCreateFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillRenameFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillRenameFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillDeleteFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillDeleteFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
      };
    };
    exports2.FileOperationsFeature = FileOperationsFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/linkedEditingRange.js
var require_linkedEditingRange = __commonJS({
  "node_modules/vscode-languageserver/lib/common/linkedEditingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LinkedEditingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var LinkedEditingRangeFeature = (Base) => {
      return class extends Base {
        onLinkedEditingRange(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.LinkedEditingRangeRequest.type, (params, cancel) => {
            return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
          });
        }
      };
    };
    exports2.LinkedEditingRangeFeature = LinkedEditingRangeFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/typeHierarchy.js
var require_typeHierarchy = __commonJS({
  "node_modules/vscode-languageserver/lib/common/typeHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var TypeHierarchyFeature = (Base) => {
      return class extends Base {
        get typeHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onSupertypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onSubtypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.TypeHierarchyFeature = TypeHierarchyFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/inlineValue.js
var require_inlineValue = __commonJS({
  "node_modules/vscode-languageserver/lib/common/inlineValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineValueFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlineValueFeature = (Base) => {
      return class extends Base {
        get inlineValue() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlineValueRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports2.InlineValueFeature = InlineValueFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/foldingRange.js
var require_foldingRange = __commonJS({
  "node_modules/vscode-languageserver/lib/common/foldingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FoldingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var FoldingRangeFeature = (Base) => {
      return class extends Base {
        get foldingRange() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.FoldingRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.FoldingRangeFeature = FoldingRangeFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/inlayHint.js
var require_inlayHint = __commonJS({
  "node_modules/vscode-languageserver/lib/common/inlayHint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlayHintFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlayHintFeature = (Base) => {
      return class extends Base {
        get inlayHint() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            },
            resolve: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, (params, cancel) => {
                return handler(params, cancel);
              });
            }
          };
        }
      };
    };
    exports2.InlayHintFeature = InlayHintFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/diagnostic.js
var require_diagnostic = __commonJS({
  "node_modules/vscode-languageserver/lib/common/diagnostic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiagnosticFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var DiagnosticFeature = (Base) => {
      return class extends Base {
        get diagnostics() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.DiagnosticRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.partialResult, params));
              });
            },
            onWorkspace: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.partialResult, params));
              });
            }
          };
        }
      };
    };
    exports2.DiagnosticFeature = DiagnosticFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/textDocuments.js
var require_textDocuments = __commonJS({
  "node_modules/vscode-languageserver/lib/common/textDocuments.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TextDocuments = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var TextDocuments = class {
      /**
       * Create a new text document manager.
       */
      constructor(configuration) {
        this._configuration = configuration;
        this._syncedDocuments = /* @__PURE__ */ new Map();
        this._onDidChangeContent = new vscode_languageserver_protocol_1.Emitter();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onWillSave = new vscode_languageserver_protocol_1.Emitter();
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened.
       */
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened or the content changes.
       */
      get onDidChangeContent() {
        return this._onDidChangeContent.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * will be saved.
       */
      get onWillSave() {
        return this._onWillSave.event;
      }
      /**
       * Sets a handler that will be called if a participant wants to provide
       * edits during a text document save.
       */
      onWillSaveWaitUntil(handler) {
        this._willSaveWaitUntil = handler;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been saved.
       */
      get onDidSave() {
        return this._onDidSave.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been closed.
       */
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Returns the document for the given URI. Returns undefined if
       * the document is not managed by this instance.
       *
       * @param uri The text document's URI to retrieve.
       * @return the text document or `undefined`.
       */
      get(uri) {
        return this._syncedDocuments.get(uri);
      }
      /**
       * Returns all text documents managed by this instance.
       *
       * @return all text documents.
       */
      all() {
        return Array.from(this._syncedDocuments.values());
      }
      /**
       * Returns the URIs of all text documents managed by this instance.
       *
       * @return the URI's of all text documents.
       */
      keys() {
        return Array.from(this._syncedDocuments.keys());
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the text documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenTextDocument`, `onDidChangeTextDocument`, `onDidCloseTextDocument`,
       * `onWillSaveTextDocument`, `onWillSaveTextDocumentWaitUntil` and `onDidSaveTextDocument`.
       *
       * Use the corresponding events on the TextDocuments instance instead.
       *
       * @param connection The connection to listen on.
       */
      listen(connection) {
        connection.__textDocumentSync = vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental;
        const disposables = [];
        disposables.push(connection.onDidOpenTextDocument((event) => {
          const td = event.textDocument;
          const document = this._configuration.create(td.uri, td.languageId, td.version, td.text);
          this._syncedDocuments.set(td.uri, document);
          const toFire = Object.freeze({ document });
          this._onDidOpen.fire(toFire);
          this._onDidChangeContent.fire(toFire);
        }));
        disposables.push(connection.onDidChangeTextDocument((event) => {
          const td = event.textDocument;
          const changes = event.contentChanges;
          if (changes.length === 0) {
            return;
          }
          const { version } = td;
          if (version === null || version === void 0) {
            throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
          }
          let syncedDocument = this._syncedDocuments.get(td.uri);
          if (syncedDocument !== void 0) {
            syncedDocument = this._configuration.update(syncedDocument, changes, version);
            this._syncedDocuments.set(td.uri, syncedDocument);
            this._onDidChangeContent.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection.onDidCloseTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._syncedDocuments.delete(event.textDocument.uri);
            this._onDidClose.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection.onWillSaveTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onWillSave.fire(Object.freeze({ document: syncedDocument, reason: event.reason }));
          }
        }));
        disposables.push(connection.onWillSaveTextDocumentWaitUntil((event, token) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0 && this._willSaveWaitUntil) {
            return this._willSaveWaitUntil(Object.freeze({ document: syncedDocument, reason: event.reason }), token);
          } else {
            return [];
          }
        }));
        disposables.push(connection.onDidSaveTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onDidSave.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
    };
    exports2.TextDocuments = TextDocuments;
  }
});

// node_modules/vscode-languageserver/lib/common/notebook.js
var require_notebook = __commonJS({
  "node_modules/vscode-languageserver/lib/common/notebook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NotebookDocuments = exports2.NotebookSyncFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var textDocuments_1 = require_textDocuments();
    var NotebookSyncFeature = (Base) => {
      return class extends Base {
        get synchronization() {
          return {
            onDidOpenNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidOpenNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidChangeNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidSaveNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidSaveNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidCloseNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidCloseNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            }
          };
        }
      };
    };
    exports2.NotebookSyncFeature = NotebookSyncFeature;
    var CellTextDocumentConnection = class _CellTextDocumentConnection {
      onDidOpenTextDocument(handler) {
        this.openHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.openHandler = void 0;
        });
      }
      openTextDocument(params) {
        this.openHandler && this.openHandler(params);
      }
      onDidChangeTextDocument(handler) {
        this.changeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.changeHandler = handler;
        });
      }
      changeTextDocument(params) {
        this.changeHandler && this.changeHandler(params);
      }
      onDidCloseTextDocument(handler) {
        this.closeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.closeHandler = void 0;
        });
      }
      closeTextDocument(params) {
        this.closeHandler && this.closeHandler(params);
      }
      onWillSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onWillSaveTextDocumentWaitUntil() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onDidSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
    };
    CellTextDocumentConnection.NULL_DISPOSE = Object.freeze({ dispose: () => {
    } });
    var NotebookDocuments = class {
      constructor(configurationOrTextDocuments) {
        if (configurationOrTextDocuments instanceof textDocuments_1.TextDocuments) {
          this._cellTextDocuments = configurationOrTextDocuments;
        } else {
          this._cellTextDocuments = new textDocuments_1.TextDocuments(configurationOrTextDocuments);
        }
        this.notebookDocuments = /* @__PURE__ */ new Map();
        this.notebookCellMap = /* @__PURE__ */ new Map();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidChange = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
      }
      get cellTextDocuments() {
        return this._cellTextDocuments;
      }
      getCellTextDocument(cell) {
        return this._cellTextDocuments.get(cell.document);
      }
      getNotebookDocument(uri) {
        return this.notebookDocuments.get(uri);
      }
      getNotebookCell(uri) {
        const value = this.notebookCellMap.get(uri);
        return value && value[0];
      }
      findNotebookDocumentForCell(cell) {
        const key = typeof cell === "string" ? cell : cell.document;
        const value = this.notebookCellMap.get(key);
        return value && value[1];
      }
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      get onDidSave() {
        return this._onDidSave.event;
      }
      get onDidChange() {
        return this._onDidChange.event;
      }
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the notebook documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenNotebookDocument`, `onDidChangeNotebookDocument`, `onDidSaveNotebookDocument`,
       *  and `onDidCloseNotebookDocument`.
       *
       * @param connection The connection to listen on.
       */
      listen(connection) {
        const cellTextDocumentConnection = new CellTextDocumentConnection();
        const disposables = [];
        disposables.push(this.cellTextDocuments.listen(cellTextDocumentConnection));
        disposables.push(connection.notebooks.synchronization.onDidOpenNotebookDocument((params) => {
          this.notebookDocuments.set(params.notebookDocument.uri, params.notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            cellTextDocumentConnection.openTextDocument({ textDocument: cellTextDocument });
          }
          this.updateCellMap(params.notebookDocument);
          this._onDidOpen.fire(params.notebookDocument);
        }));
        disposables.push(connection.notebooks.synchronization.onDidChangeNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          notebookDocument.version = params.notebookDocument.version;
          const oldMetadata = notebookDocument.metadata;
          let metadataChanged = false;
          const change = params.change;
          if (change.metadata !== void 0) {
            metadataChanged = true;
            notebookDocument.metadata = change.metadata;
          }
          const opened = [];
          const closed = [];
          const data = [];
          const text = [];
          if (change.cells !== void 0) {
            const changedCells = change.cells;
            if (changedCells.structure !== void 0) {
              const array = changedCells.structure.array;
              notebookDocument.cells.splice(array.start, array.deleteCount, ...array.cells !== void 0 ? array.cells : []);
              if (changedCells.structure.didOpen !== void 0) {
                for (const open of changedCells.structure.didOpen) {
                  cellTextDocumentConnection.openTextDocument({ textDocument: open });
                  opened.push(open.uri);
                }
              }
              if (changedCells.structure.didClose) {
                for (const close of changedCells.structure.didClose) {
                  cellTextDocumentConnection.closeTextDocument({ textDocument: close });
                  closed.push(close.uri);
                }
              }
            }
            if (changedCells.data !== void 0) {
              const cellUpdates = new Map(changedCells.data.map((cell) => [cell.document, cell]));
              for (let i = 0; i <= notebookDocument.cells.length; i++) {
                const change2 = cellUpdates.get(notebookDocument.cells[i].document);
                if (change2 !== void 0) {
                  const old = notebookDocument.cells.splice(i, 1, change2);
                  data.push({ old: old[0], new: change2 });
                  cellUpdates.delete(change2.document);
                  if (cellUpdates.size === 0) {
                    break;
                  }
                }
              }
            }
            if (changedCells.textContent !== void 0) {
              for (const cellTextDocument of changedCells.textContent) {
                cellTextDocumentConnection.changeTextDocument({ textDocument: cellTextDocument.document, contentChanges: cellTextDocument.changes });
                text.push(cellTextDocument.document.uri);
              }
            }
          }
          this.updateCellMap(notebookDocument);
          const changeEvent = { notebookDocument };
          if (metadataChanged) {
            changeEvent.metadata = { old: oldMetadata, new: notebookDocument.metadata };
          }
          const added = [];
          for (const open of opened) {
            added.push(this.getNotebookCell(open));
          }
          const removed = [];
          for (const close of closed) {
            removed.push(this.getNotebookCell(close));
          }
          const textContent = [];
          for (const change2 of text) {
            textContent.push(this.getNotebookCell(change2));
          }
          if (added.length > 0 || removed.length > 0 || data.length > 0 || textContent.length > 0) {
            changeEvent.cells = { added, removed, changed: { data, textContent } };
          }
          if (changeEvent.metadata !== void 0 || changeEvent.cells !== void 0) {
            this._onDidChange.fire(changeEvent);
          }
        }));
        disposables.push(connection.notebooks.synchronization.onDidSaveNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidSave.fire(notebookDocument);
        }));
        disposables.push(connection.notebooks.synchronization.onDidCloseNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidClose.fire(notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            cellTextDocumentConnection.closeTextDocument({ textDocument: cellTextDocument });
          }
          this.notebookDocuments.delete(params.notebookDocument.uri);
          for (const cell of notebookDocument.cells) {
            this.notebookCellMap.delete(cell.document);
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
      updateCellMap(notebookDocument) {
        for (const cell of notebookDocument.cells) {
          this.notebookCellMap.set(cell.document, [cell, notebookDocument]);
        }
      }
    };
    exports2.NotebookDocuments = NotebookDocuments;
  }
});

// node_modules/vscode-languageserver/lib/common/moniker.js
var require_moniker = __commonJS({
  "node_modules/vscode-languageserver/lib/common/moniker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MonikerFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var MonikerFeature = (Base) => {
      return class extends Base {
        get moniker() {
          return {
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.MonikerRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.MonikerFeature = MonikerFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/server.js
var require_server = __commonJS({
  "node_modules/vscode-languageserver/lib/common/server.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createConnection = exports2.combineFeatures = exports2.combineNotebooksFeatures = exports2.combineLanguagesFeatures = exports2.combineWorkspaceFeatures = exports2.combineWindowFeatures = exports2.combineClientFeatures = exports2.combineTracerFeatures = exports2.combineTelemetryFeatures = exports2.combineConsoleFeatures = exports2._NotebooksImpl = exports2._LanguagesImpl = exports2.BulkUnregistration = exports2.BulkRegistration = exports2.ErrorMessageTracker = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var Is = require_is();
    var UUID = require_uuid();
    var progress_1 = require_progress();
    var configuration_1 = require_configuration();
    var workspaceFolder_1 = require_workspaceFolder();
    var callHierarchy_1 = require_callHierarchy();
    var semanticTokens_1 = require_semanticTokens();
    var showDocument_1 = require_showDocument();
    var fileOperations_1 = require_fileOperations();
    var linkedEditingRange_1 = require_linkedEditingRange();
    var typeHierarchy_1 = require_typeHierarchy();
    var inlineValue_1 = require_inlineValue();
    var foldingRange_1 = require_foldingRange();
    var inlayHint_1 = require_inlayHint();
    var diagnostic_1 = require_diagnostic();
    var notebook_1 = require_notebook();
    var moniker_1 = require_moniker();
    function null2Undefined(value) {
      if (value === null) {
        return void 0;
      }
      return value;
    }
    var ErrorMessageTracker = class {
      constructor() {
        this._messages = /* @__PURE__ */ Object.create(null);
      }
      /**
       * Add a message to the tracker.
       *
       * @param message The message to add.
       */
      add(message) {
        let count = this._messages[message];
        if (!count) {
          count = 0;
        }
        count++;
        this._messages[message] = count;
      }
      /**
       * Send all tracked messages to the connection's window.
       *
       * @param connection The connection established between client and server.
       */
      sendErrors(connection) {
        Object.keys(this._messages).forEach((message) => {
          connection.window.showErrorMessage(message);
        });
      }
    };
    exports2.ErrorMessageTracker = ErrorMessageTracker;
    var RemoteConsoleImpl = class {
      constructor() {
      }
      rawAttach(connection) {
        this._rawConnection = connection;
      }
      attach(connection) {
        this._connection = connection;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      fillServerCapabilities(_capabilities) {
      }
      initialize(_capabilities) {
      }
      error(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
      }
      warn(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
      }
      info(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
      }
      log(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
      }
      debug(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Debug, message);
      }
      send(type, message) {
        if (this._rawConnection) {
          this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, { type, message }).catch(() => {
            (0, vscode_languageserver_protocol_1.RAL)().console.error(`Sending log message failed`);
          });
        }
      }
    };
    var _RemoteWindowImpl = class {
      constructor() {
      }
      attach(connection) {
        this._connection = connection;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      showErrorMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Error, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showWarningMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Warning, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showInformationMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Info, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
    };
    var RemoteWindowImpl = (0, showDocument_1.ShowDocumentFeature)((0, progress_1.ProgressFeature)(_RemoteWindowImpl));
    var BulkRegistration;
    (function(BulkRegistration2) {
      function create() {
        return new BulkRegistrationImpl();
      }
      BulkRegistration2.create = create;
    })(BulkRegistration || (exports2.BulkRegistration = BulkRegistration = {}));
    var BulkRegistrationImpl = class {
      constructor() {
        this._registrations = [];
        this._registered = /* @__PURE__ */ new Set();
      }
      add(type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        if (this._registered.has(method)) {
          throw new Error(`${method} is already added to this registration`);
        }
        const id = UUID.generateUuid();
        this._registrations.push({
          id,
          method,
          registerOptions: registerOptions || {}
        });
        this._registered.add(method);
      }
      asRegistrationParams() {
        return {
          registrations: this._registrations
        };
      }
    };
    var BulkUnregistration;
    (function(BulkUnregistration2) {
      function create() {
        return new BulkUnregistrationImpl(void 0, []);
      }
      BulkUnregistration2.create = create;
    })(BulkUnregistration || (exports2.BulkUnregistration = BulkUnregistration = {}));
    var BulkUnregistrationImpl = class {
      constructor(_connection, unregistrations) {
        this._connection = _connection;
        this._unregistrations = /* @__PURE__ */ new Map();
        unregistrations.forEach((unregistration) => {
          this._unregistrations.set(unregistration.method, unregistration);
        });
      }
      get isAttached() {
        return !!this._connection;
      }
      attach(connection) {
        this._connection = connection;
      }
      add(unregistration) {
        this._unregistrations.set(unregistration.method, unregistration);
      }
      dispose() {
        let unregistrations = [];
        for (let unregistration of this._unregistrations.values()) {
          unregistrations.push(unregistration);
        }
        let params = {
          unregisterations: unregistrations
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this._connection.console.info(`Bulk unregistration failed.`);
        });
      }
      disposeSingle(arg) {
        const method = Is.string(arg) ? arg : arg.method;
        const unregistration = this._unregistrations.get(method);
        if (!unregistration) {
          return false;
        }
        let params = {
          unregisterations: [unregistration]
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
          this._unregistrations.delete(method);
        }, (_error) => {
          this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
        });
        return true;
      }
    };
    var RemoteClientImpl = class {
      attach(connection) {
        this._connection = connection;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
        if (typeOrRegistrations instanceof BulkRegistrationImpl) {
          return this.registerMany(typeOrRegistrations);
        } else if (typeOrRegistrations instanceof BulkUnregistrationImpl) {
          return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
        } else {
          return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
        }
      }
      registerSingle1(unregistration, type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        let params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        if (!unregistration.isAttached) {
          unregistration.attach(this.connection);
        }
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          unregistration.add({ id, method });
          return unregistration;
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      registerSingle2(type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        let params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          return vscode_languageserver_protocol_1.Disposable.create(() => {
            this.unregisterSingle(id, method).catch(() => {
              this.connection.console.info(`Un-registering capability with id ${id} failed.`);
            });
          });
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      unregisterSingle(id, method) {
        let params = {
          unregisterations: [{ id, method }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this.connection.console.info(`Un-registering request handler for ${id} failed.`);
        });
      }
      registerMany(registrations) {
        let params = registrations.asRegistrationParams();
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
          return new BulkUnregistrationImpl(this._connection, params.registrations.map((registration) => {
            return { id: registration.id, method: registration.method };
          }));
        }, (_error) => {
          this.connection.console.info(`Bulk registration failed.`);
          return Promise.reject(_error);
        });
      }
    };
    var _RemoteWorkspaceImpl = class {
      constructor() {
      }
      attach(connection) {
        this._connection = connection;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      applyEdit(paramOrEdit) {
        function isApplyWorkspaceEditParams(value) {
          return value && !!value.edit;
        }
        let params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
      }
    };
    var RemoteWorkspaceImpl = (0, fileOperations_1.FileOperationsFeature)((0, workspaceFolder_1.WorkspaceFoldersFeature)((0, configuration_1.ConfigurationFeature)(_RemoteWorkspaceImpl)));
    var TracerImpl = class {
      constructor() {
        this._trace = vscode_languageserver_protocol_1.Trace.Off;
      }
      attach(connection) {
        this._connection = connection;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      set trace(value) {
        this._trace = value;
      }
      log(message, verbose) {
        if (this._trace === vscode_languageserver_protocol_1.Trace.Off) {
          return;
        }
        this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
          message,
          verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : void 0
        }).catch(() => {
        });
      }
    };
    var TelemetryImpl = class {
      constructor() {
      }
      attach(connection) {
        this._connection = connection;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      logEvent(data) {
        this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data).catch(() => {
          this.connection.console.log(`Sending TelemetryEventNotification failed`);
        });
      }
    };
    var _LanguagesImpl = class {
      constructor() {
      }
      attach(connection) {
        this._connection = connection;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports2._LanguagesImpl = _LanguagesImpl;
    var LanguagesImpl = (0, foldingRange_1.FoldingRangeFeature)((0, moniker_1.MonikerFeature)((0, diagnostic_1.DiagnosticFeature)((0, inlayHint_1.InlayHintFeature)((0, inlineValue_1.InlineValueFeature)((0, typeHierarchy_1.TypeHierarchyFeature)((0, linkedEditingRange_1.LinkedEditingRangeFeature)((0, semanticTokens_1.SemanticTokensFeature)((0, callHierarchy_1.CallHierarchyFeature)(_LanguagesImpl)))))))));
    var _NotebooksImpl = class {
      constructor() {
      }
      attach(connection) {
        this._connection = connection;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports2._NotebooksImpl = _NotebooksImpl;
    var NotebooksImpl = (0, notebook_1.NotebookSyncFeature)(_NotebooksImpl);
    function combineConsoleFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineConsoleFeatures = combineConsoleFeatures;
    function combineTelemetryFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineTelemetryFeatures = combineTelemetryFeatures;
    function combineTracerFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineTracerFeatures = combineTracerFeatures;
    function combineClientFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineClientFeatures = combineClientFeatures;
    function combineWindowFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineWindowFeatures = combineWindowFeatures;
    function combineWorkspaceFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineWorkspaceFeatures = combineWorkspaceFeatures;
    function combineLanguagesFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineLanguagesFeatures = combineLanguagesFeatures;
    function combineNotebooksFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineNotebooksFeatures = combineNotebooksFeatures;
    function combineFeatures(one, two) {
      function combine(one2, two2, func) {
        if (one2 && two2) {
          return func(one2, two2);
        } else if (one2) {
          return one2;
        } else {
          return two2;
        }
      }
      let result = {
        __brand: "features",
        console: combine(one.console, two.console, combineConsoleFeatures),
        tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
        telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
        client: combine(one.client, two.client, combineClientFeatures),
        window: combine(one.window, two.window, combineWindowFeatures),
        workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures),
        languages: combine(one.languages, two.languages, combineLanguagesFeatures),
        notebooks: combine(one.notebooks, two.notebooks, combineNotebooksFeatures)
      };
      return result;
    }
    exports2.combineFeatures = combineFeatures;
    function createConnection(connectionFactory, watchDog, factories) {
      const logger = factories && factories.console ? new (factories.console(RemoteConsoleImpl))() : new RemoteConsoleImpl();
      const connection = connectionFactory(logger);
      logger.rawAttach(connection);
      const tracer = factories && factories.tracer ? new (factories.tracer(TracerImpl))() : new TracerImpl();
      const telemetry = factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl))() : new TelemetryImpl();
      const client = factories && factories.client ? new (factories.client(RemoteClientImpl))() : new RemoteClientImpl();
      const remoteWindow = factories && factories.window ? new (factories.window(RemoteWindowImpl))() : new RemoteWindowImpl();
      const workspace = factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl))() : new RemoteWorkspaceImpl();
      const languages = factories && factories.languages ? new (factories.languages(LanguagesImpl))() : new LanguagesImpl();
      const notebooks = factories && factories.notebooks ? new (factories.notebooks(NotebooksImpl))() : new NotebooksImpl();
      const allRemotes = [logger, tracer, telemetry, client, remoteWindow, workspace, languages, notebooks];
      function asPromise(value) {
        if (value instanceof Promise) {
          return value;
        } else if (Is.thenable(value)) {
          return new Promise((resolve, reject) => {
            value.then((resolved) => resolve(resolved), (error) => reject(error));
          });
        } else {
          return Promise.resolve(value);
        }
      }
      let shutdownHandler = void 0;
      let initializeHandler = void 0;
      let exitHandler = void 0;
      let protocolConnection = {
        listen: () => connection.listen(),
        sendRequest: (type, ...params) => connection.sendRequest(Is.string(type) ? type : type.method, ...params),
        onRequest: (type, handler) => connection.onRequest(type, handler),
        sendNotification: (type, param) => {
          const method = Is.string(type) ? type : type.method;
          return connection.sendNotification(method, param);
        },
        onNotification: (type, handler) => connection.onNotification(type, handler),
        onProgress: connection.onProgress,
        sendProgress: connection.sendProgress,
        onInitialize: (handler) => {
          initializeHandler = handler;
          return {
            dispose: () => {
              initializeHandler = void 0;
            }
          };
        },
        onInitialized: (handler) => connection.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
        onShutdown: (handler) => {
          shutdownHandler = handler;
          return {
            dispose: () => {
              shutdownHandler = void 0;
            }
          };
        },
        onExit: (handler) => {
          exitHandler = handler;
          return {
            dispose: () => {
              exitHandler = void 0;
            }
          };
        },
        get console() {
          return logger;
        },
        get telemetry() {
          return telemetry;
        },
        get tracer() {
          return tracer;
        },
        get client() {
          return client;
        },
        get window() {
          return remoteWindow;
        },
        get workspace() {
          return workspace;
        },
        get languages() {
          return languages;
        },
        get notebooks() {
          return notebooks;
        },
        onDidChangeConfiguration: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
        onDidChangeWatchedFiles: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
        __textDocumentSync: void 0,
        onDidOpenTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
        onDidChangeTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
        onDidCloseTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
        onWillSaveTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
        onWillSaveTextDocumentWaitUntil: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
        onDidSaveTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
        sendDiagnostics: (params) => connection.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
        onHover: (handler) => connection.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
        }),
        onCompletion: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onCompletionResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
        onSignatureHelp: (handler) => connection.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
        }),
        onDeclaration: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onDefinition: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onTypeDefinition: (handler) => connection.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onImplementation: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onReferences: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onDocumentHighlight: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onDocumentSymbol: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onWorkspaceSymbol: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onWorkspaceSymbolResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, handler),
        onCodeAction: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onCodeActionResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onCodeLens: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onCodeLensResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
        }),
        onDocumentRangeFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
        }),
        onDocumentOnTypeFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onRenameRequest: (handler) => connection.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
        }),
        onPrepareRename: (handler) => connection.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentLinks: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onDocumentLinkResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentColor: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onColorPresentation: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onFoldingRanges: (handler) => connection.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onSelectionRanges: (handler) => connection.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onExecuteCommand: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
        }),
        dispose: () => connection.dispose()
      };
      for (let remote of allRemotes) {
        remote.attach(protocolConnection);
      }
      connection.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
        watchDog.initialize(params);
        if (Is.string(params.trace)) {
          tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
        }
        for (let remote of allRemotes) {
          remote.initialize(params.capabilities);
        }
        if (initializeHandler) {
          let result = initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, (0, progress_1.attachWorkDone)(connection, params), void 0);
          return asPromise(result).then((value) => {
            if (value instanceof vscode_languageserver_protocol_1.ResponseError) {
              return value;
            }
            let result2 = value;
            if (!result2) {
              result2 = { capabilities: {} };
            }
            let capabilities = result2.capabilities;
            if (!capabilities) {
              capabilities = {};
              result2.capabilities = capabilities;
            }
            if (capabilities.textDocumentSync === void 0 || capabilities.textDocumentSync === null) {
              capabilities.textDocumentSync = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            } else if (!Is.number(capabilities.textDocumentSync) && !Is.number(capabilities.textDocumentSync.change)) {
              capabilities.textDocumentSync.change = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            }
            for (let remote of allRemotes) {
              remote.fillServerCapabilities(capabilities);
            }
            return result2;
          });
        } else {
          let result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
          for (let remote of allRemotes) {
            remote.fillServerCapabilities(result.capabilities);
          }
          return result;
        }
      });
      connection.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
        watchDog.shutdownReceived = true;
        if (shutdownHandler) {
          return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
        } else {
          return void 0;
        }
      });
      connection.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
        try {
          if (exitHandler) {
            exitHandler();
          }
        } finally {
          if (watchDog.shutdownReceived) {
            watchDog.exit(0);
          } else {
            watchDog.exit(1);
          }
        }
      });
      connection.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
        tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
      });
      return protocolConnection;
    }
    exports2.createConnection = createConnection;
  }
});

// node_modules/vscode-languageserver/lib/node/files.js
var require_files = __commonJS({
  "node_modules/vscode-languageserver/lib/node/files.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveModulePath = exports2.FileSystem = exports2.resolveGlobalYarnPath = exports2.resolveGlobalNodePath = exports2.resolve = exports2.uriToFilePath = void 0;
    var url = require("url");
    var path = require("path");
    var fs = require("fs");
    var child_process_1 = require("child_process");
    function uriToFilePath(uri) {
      let parsed = url.parse(uri);
      if (parsed.protocol !== "file:" || !parsed.path) {
        return void 0;
      }
      let segments = parsed.path.split("/");
      for (var i = 0, len = segments.length; i < len; i++) {
        segments[i] = decodeURIComponent(segments[i]);
      }
      if (process.platform === "win32" && segments.length > 1) {
        let first = segments[0];
        let second = segments[1];
        if (first.length === 0 && second.length > 1 && second[1] === ":") {
          segments.shift();
        }
      }
      return path.normalize(segments.join("/"));
    }
    exports2.uriToFilePath = uriToFilePath;
    function isWindows() {
      return process.platform === "win32";
    }
    function resolve(moduleName, nodePath, cwd, tracer) {
      const nodePathKey = "NODE_PATH";
      const app = [
        "var p = process;",
        "p.on('message',function(m){",
        "if(m.c==='e'){",
        "p.exit(0);",
        "}",
        "else if(m.c==='rs'){",
        "try{",
        "var r=require.resolve(m.a);",
        "p.send({c:'r',s:true,r:r});",
        "}",
        "catch(err){",
        "p.send({c:'r',s:false});",
        "}",
        "}",
        "});"
      ].join("");
      return new Promise((resolve2, reject) => {
        let env = process.env;
        let newEnv = /* @__PURE__ */ Object.create(null);
        Object.keys(env).forEach((key) => newEnv[key] = env[key]);
        if (nodePath && fs.existsSync(nodePath)) {
          if (newEnv[nodePathKey]) {
            newEnv[nodePathKey] = nodePath + path.delimiter + newEnv[nodePathKey];
          } else {
            newEnv[nodePathKey] = nodePath;
          }
          if (tracer) {
            tracer(`NODE_PATH value is: ${newEnv[nodePathKey]}`);
          }
        }
        newEnv["ELECTRON_RUN_AS_NODE"] = "1";
        try {
          let cp = (0, child_process_1.fork)("", [], {
            cwd,
            env: newEnv,
            execArgv: ["-e", app]
          });
          if (cp.pid === void 0) {
            reject(new Error(`Starting process to resolve node module  ${moduleName} failed`));
            return;
          }
          cp.on("error", (error) => {
            reject(error);
          });
          cp.on("message", (message2) => {
            if (message2.c === "r") {
              cp.send({ c: "e" });
              if (message2.s) {
                resolve2(message2.r);
              } else {
                reject(new Error(`Failed to resolve module: ${moduleName}`));
              }
            }
          });
          let message = {
            c: "rs",
            a: moduleName
          };
          cp.send(message);
        } catch (error) {
          reject(error);
        }
      });
    }
    exports2.resolve = resolve;
    function resolveGlobalNodePath(tracer) {
      let npmCommand = "npm";
      const env = /* @__PURE__ */ Object.create(null);
      Object.keys(process.env).forEach((key) => env[key] = process.env[key]);
      env["NO_UPDATE_NOTIFIER"] = "true";
      const options = {
        encoding: "utf8",
        env
      };
      if (isWindows()) {
        npmCommand = "npm.cmd";
        options.shell = true;
      }
      let handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        let stdout = (0, child_process_1.spawnSync)(npmCommand, ["config", "get", "prefix"], options).stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'npm config get prefix' didn't return a value.`);
          }
          return void 0;
        }
        let prefix = stdout.trim();
        if (tracer) {
          tracer(`'npm config get prefix' value is: ${prefix}`);
        }
        if (prefix.length > 0) {
          if (isWindows()) {
            return path.join(prefix, "node_modules");
          } else {
            return path.join(prefix, "lib", "node_modules");
          }
        }
        return void 0;
      } catch (err) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    exports2.resolveGlobalNodePath = resolveGlobalNodePath;
    function resolveGlobalYarnPath(tracer) {
      let yarnCommand = "yarn";
      let options = {
        encoding: "utf8"
      };
      if (isWindows()) {
        yarnCommand = "yarn.cmd";
        options.shell = true;
      }
      let handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        let results = (0, child_process_1.spawnSync)(yarnCommand, ["global", "dir", "--json"], options);
        let stdout = results.stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'yarn global dir' didn't return a value.`);
            if (results.stderr) {
              tracer(results.stderr);
            }
          }
          return void 0;
        }
        let lines = stdout.trim().split(/\r?\n/);
        for (let line of lines) {
          try {
            let yarn = JSON.parse(line);
            if (yarn.type === "log") {
              return path.join(yarn.data, "node_modules");
            }
          } catch (e) {
          }
        }
        return void 0;
      } catch (err) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    exports2.resolveGlobalYarnPath = resolveGlobalYarnPath;
    var FileSystem;
    (function(FileSystem2) {
      let _isCaseSensitive = void 0;
      function isCaseSensitive() {
        if (_isCaseSensitive !== void 0) {
          return _isCaseSensitive;
        }
        if (process.platform === "win32") {
          _isCaseSensitive = false;
        } else {
          _isCaseSensitive = !fs.existsSync(__filename.toUpperCase()) || !fs.existsSync(__filename.toLowerCase());
        }
        return _isCaseSensitive;
      }
      FileSystem2.isCaseSensitive = isCaseSensitive;
      function isParent(parent, child) {
        if (isCaseSensitive()) {
          return path.normalize(child).indexOf(path.normalize(parent)) === 0;
        } else {
          return path.normalize(child).toLowerCase().indexOf(path.normalize(parent).toLowerCase()) === 0;
        }
      }
      FileSystem2.isParent = isParent;
    })(FileSystem || (exports2.FileSystem = FileSystem = {}));
    function resolveModulePath(workspaceRoot, moduleName, nodePath, tracer) {
      if (nodePath) {
        if (!path.isAbsolute(nodePath)) {
          nodePath = path.join(workspaceRoot, nodePath);
        }
        return resolve(moduleName, nodePath, nodePath, tracer).then((value) => {
          if (FileSystem.isParent(nodePath, value)) {
            return value;
          } else {
            return Promise.reject(new Error(`Failed to load ${moduleName} from node path location.`));
          }
        }).then(void 0, (_error) => {
          return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
        });
      } else {
        return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
      }
    }
    exports2.resolveModulePath = resolveModulePath;
  }
});

// node_modules/vscode-languageserver-protocol/node.js
var require_node2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require_main3();
  }
});

// node_modules/vscode-languageserver/lib/common/inlineCompletion.proposed.js
var require_inlineCompletion_proposed = __commonJS({
  "node_modules/vscode-languageserver/lib/common/inlineCompletion.proposed.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineCompletionFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlineCompletionFeature = (Base) => {
      return class extends Base {
        get inlineCompletion() {
          return {
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports2.InlineCompletionFeature = InlineCompletionFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/api.js
var require_api3 = __commonJS({
  "node_modules/vscode-languageserver/lib/common/api.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProposedFeatures = exports2.NotebookDocuments = exports2.TextDocuments = exports2.SemanticTokensBuilder = void 0;
    var semanticTokens_1 = require_semanticTokens();
    Object.defineProperty(exports2, "SemanticTokensBuilder", { enumerable: true, get: function() {
      return semanticTokens_1.SemanticTokensBuilder;
    } });
    var ic = require_inlineCompletion_proposed();
    __exportStar(require_main3(), exports2);
    var textDocuments_1 = require_textDocuments();
    Object.defineProperty(exports2, "TextDocuments", { enumerable: true, get: function() {
      return textDocuments_1.TextDocuments;
    } });
    var notebook_1 = require_notebook();
    Object.defineProperty(exports2, "NotebookDocuments", { enumerable: true, get: function() {
      return notebook_1.NotebookDocuments;
    } });
    __exportStar(require_server(), exports2);
    var ProposedFeatures;
    (function(ProposedFeatures2) {
      ProposedFeatures2.all = {
        __brand: "features",
        languages: ic.InlineCompletionFeature
      };
    })(ProposedFeatures || (exports2.ProposedFeatures = ProposedFeatures = {}));
  }
});

// node_modules/vscode-languageserver/lib/node/main.js
var require_main4 = __commonJS({
  "node_modules/vscode-languageserver/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createConnection = exports2.Files = void 0;
    var node_util_1 = require("node:util");
    var Is = require_is();
    var server_1 = require_server();
    var fm = require_files();
    var node_1 = require_node2();
    __exportStar(require_node2(), exports2);
    __exportStar(require_api3(), exports2);
    var Files;
    (function(Files2) {
      Files2.uriToFilePath = fm.uriToFilePath;
      Files2.resolveGlobalNodePath = fm.resolveGlobalNodePath;
      Files2.resolveGlobalYarnPath = fm.resolveGlobalYarnPath;
      Files2.resolve = fm.resolve;
      Files2.resolveModulePath = fm.resolveModulePath;
    })(Files || (exports2.Files = Files = {}));
    var _protocolConnection;
    function endProtocolConnection() {
      if (_protocolConnection === void 0) {
        return;
      }
      try {
        _protocolConnection.end();
      } catch (_err) {
      }
    }
    var _shutdownReceived = false;
    var exitTimer = void 0;
    function setupExitTimer() {
      const argName = "--clientProcessId";
      function runTimer(value) {
        try {
          let processId = parseInt(value);
          if (!isNaN(processId)) {
            exitTimer = setInterval(() => {
              try {
                process.kill(processId, 0);
              } catch (ex) {
                endProtocolConnection();
                process.exit(_shutdownReceived ? 0 : 1);
              }
            }, 3e3);
          }
        } catch (e) {
        }
      }
      for (let i = 2; i < process.argv.length; i++) {
        let arg = process.argv[i];
        if (arg === argName && i + 1 < process.argv.length) {
          runTimer(process.argv[i + 1]);
          return;
        } else {
          let args = arg.split("=");
          if (args[0] === argName) {
            runTimer(args[1]);
          }
        }
      }
    }
    setupExitTimer();
    var watchDog = {
      initialize: (params) => {
        const processId = params.processId;
        if (Is.number(processId) && exitTimer === void 0) {
          setInterval(() => {
            try {
              process.kill(processId, 0);
            } catch (ex) {
              process.exit(_shutdownReceived ? 0 : 1);
            }
          }, 3e3);
        }
      },
      get shutdownReceived() {
        return _shutdownReceived;
      },
      set shutdownReceived(value) {
        _shutdownReceived = value;
      },
      exit: (code) => {
        endProtocolConnection();
        process.exit(code);
      }
    };
    function createConnection(arg1, arg2, arg3, arg4) {
      let factories;
      let input;
      let output;
      let options;
      if (arg1 !== void 0 && arg1.__brand === "features") {
        factories = arg1;
        arg1 = arg2;
        arg2 = arg3;
        arg3 = arg4;
      }
      if (node_1.ConnectionStrategy.is(arg1) || node_1.ConnectionOptions.is(arg1)) {
        options = arg1;
      } else {
        input = arg1;
        output = arg2;
        options = arg3;
      }
      return _createConnection(input, output, options, factories);
    }
    exports2.createConnection = createConnection;
    function _createConnection(input, output, options, factories) {
      let stdio = false;
      if (!input && !output && process.argv.length > 2) {
        let port = void 0;
        let pipeName = void 0;
        let argv = process.argv.slice(2);
        for (let i = 0; i < argv.length; i++) {
          let arg = argv[i];
          if (arg === "--node-ipc") {
            input = new node_1.IPCMessageReader(process);
            output = new node_1.IPCMessageWriter(process);
            break;
          } else if (arg === "--stdio") {
            stdio = true;
            input = process.stdin;
            output = process.stdout;
            break;
          } else if (arg === "--socket") {
            port = parseInt(argv[i + 1]);
            break;
          } else if (arg === "--pipe") {
            pipeName = argv[i + 1];
            break;
          } else {
            var args = arg.split("=");
            if (args[0] === "--socket") {
              port = parseInt(args[1]);
              break;
            } else if (args[0] === "--pipe") {
              pipeName = args[1];
              break;
            }
          }
        }
        if (port) {
          let transport = (0, node_1.createServerSocketTransport)(port);
          input = transport[0];
          output = transport[1];
        } else if (pipeName) {
          let transport = (0, node_1.createServerPipeTransport)(pipeName);
          input = transport[0];
          output = transport[1];
        }
      }
      var commandLineMessage = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
      if (!input) {
        throw new Error("Connection input stream is not set. " + commandLineMessage);
      }
      if (!output) {
        throw new Error("Connection output stream is not set. " + commandLineMessage);
      }
      if (Is.func(input.read) && Is.func(input.on)) {
        let inputStream = input;
        inputStream.on("end", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
        inputStream.on("close", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
      }
      const connectionFactory = (logger) => {
        const result = (0, node_1.createProtocolConnection)(input, output, logger, options);
        if (stdio) {
          patchConsole(logger);
        }
        return result;
      };
      return (0, server_1.createConnection)(connectionFactory, watchDog, factories);
    }
    function patchConsole(logger) {
      function serialize(args) {
        return args.map((arg) => typeof arg === "string" ? arg : (0, node_util_1.inspect)(arg)).join(" ");
      }
      const counters = /* @__PURE__ */ new Map();
      console.assert = function assert(assertion, ...args) {
        if (assertion) {
          return;
        }
        if (args.length === 0) {
          logger.error("Assertion failed");
        } else {
          const [message, ...rest] = args;
          logger.error(`Assertion failed: ${message} ${serialize(rest)}`);
        }
      };
      console.count = function count(label = "default") {
        const message = String(label);
        let counter = counters.get(message) ?? 0;
        counter += 1;
        counters.set(message, counter);
        logger.log(`${message}: ${message}`);
      };
      console.countReset = function countReset(label) {
        if (label === void 0) {
          counters.clear();
        } else {
          counters.delete(String(label));
        }
      };
      console.debug = function debug(...args) {
        logger.log(serialize(args));
      };
      console.dir = function dir(arg, options) {
        logger.log((0, node_util_1.inspect)(arg, options));
      };
      console.log = function log(...args) {
        logger.log(serialize(args));
      };
      console.error = function error(...args) {
        logger.error(serialize(args));
      };
      console.trace = function trace(...args) {
        const stack = new Error().stack.replace(/(.+\n){2}/, "");
        let message = "Trace";
        if (args.length !== 0) {
          message += `: ${serialize(args)}`;
        }
        logger.log(`${message}
${stack}`);
      };
      console.warn = function warn(...args) {
        logger.warn(serialize(args));
      };
    }
  }
});

// node_modules/vscode-languageserver/node.js
var require_node3 = __commonJS({
  "node_modules/vscode-languageserver/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require_main4();
  }
});

// node_modules/vscode-languageserver-textdocument/lib/esm/main.js
var main_exports = {};
__export(main_exports, {
  TextDocument: () => TextDocument
});
function mergeSort(data, compare) {
  if (data.length <= 1) {
    return data;
  }
  const p = data.length / 2 | 0;
  const left = data.slice(0, p);
  const right = data.slice(p);
  mergeSort(left, compare);
  mergeSort(right, compare);
  let leftIdx = 0;
  let rightIdx = 0;
  let i = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    const ret = compare(left[leftIdx], right[rightIdx]);
    if (ret <= 0) {
      data[i++] = left[leftIdx++];
    } else {
      data[i++] = right[rightIdx++];
    }
  }
  while (leftIdx < left.length) {
    data[i++] = left[leftIdx++];
  }
  while (rightIdx < right.length) {
    data[i++] = right[rightIdx++];
  }
  return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
  const result = isAtLineStart ? [textOffset] : [];
  for (let i = 0; i < text.length; i++) {
    const ch = text.charCodeAt(i);
    if (isEOL(ch)) {
      if (ch === 13 && i + 1 < text.length && text.charCodeAt(i + 1) === 10) {
        i++;
      }
      result.push(textOffset + i + 1);
    }
  }
  return result;
}
function isEOL(char) {
  return char === 13 || char === 10;
}
function getWellformedRange(range) {
  const start = range.start;
  const end = range.end;
  if (start.line > end.line || start.line === end.line && start.character > end.character) {
    return { start: end, end: start };
  }
  return range;
}
function getWellformedEdit(textEdit) {
  const range = getWellformedRange(textEdit.range);
  if (range !== textEdit.range) {
    return { newText: textEdit.newText, range };
  }
  return textEdit;
}
var FullTextDocument, TextDocument;
var init_main = __esm({
  "node_modules/vscode-languageserver-textdocument/lib/esm/main.js"() {
    "use strict";
    FullTextDocument = class _FullTextDocument {
      constructor(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = void 0;
      }
      get uri() {
        return this._uri;
      }
      get languageId() {
        return this._languageId;
      }
      get version() {
        return this._version;
      }
      getText(range) {
        if (range) {
          const start = this.offsetAt(range.start);
          const end = this.offsetAt(range.end);
          return this._content.substring(start, end);
        }
        return this._content;
      }
      update(changes, version) {
        for (const change of changes) {
          if (_FullTextDocument.isIncremental(change)) {
            const range = getWellformedRange(change.range);
            const startOffset = this.offsetAt(range.start);
            const endOffset = this.offsetAt(range.end);
            this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
            const startLine = Math.max(range.start.line, 0);
            const endLine = Math.max(range.end.line, 0);
            let lineOffsets = this._lineOffsets;
            const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
            if (endLine - startLine === addedLineOffsets.length) {
              for (let i = 0, len = addedLineOffsets.length; i < len; i++) {
                lineOffsets[i + startLine + 1] = addedLineOffsets[i];
              }
            } else {
              if (addedLineOffsets.length < 1e4) {
                lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
              } else {
                this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
              }
            }
            const diff = change.text.length - (endOffset - startOffset);
            if (diff !== 0) {
              for (let i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
                lineOffsets[i] = lineOffsets[i] + diff;
              }
            }
          } else if (_FullTextDocument.isFull(change)) {
            this._content = change.text;
            this._lineOffsets = void 0;
          } else {
            throw new Error("Unknown change event received");
          }
        }
        this._version = version;
      }
      getLineOffsets() {
        if (this._lineOffsets === void 0) {
          this._lineOffsets = computeLineOffsets(this._content, true);
        }
        return this._lineOffsets;
      }
      positionAt(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        const lineOffsets = this.getLineOffsets();
        let low = 0, high = lineOffsets.length;
        if (high === 0) {
          return { line: 0, character: offset };
        }
        while (low < high) {
          const mid = Math.floor((low + high) / 2);
          if (lineOffsets[mid] > offset) {
            high = mid;
          } else {
            low = mid + 1;
          }
        }
        const line = low - 1;
        offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
        return { line, character: offset - lineOffsets[line] };
      }
      offsetAt(position) {
        const lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
          return this._content.length;
        } else if (position.line < 0) {
          return 0;
        }
        const lineOffset = lineOffsets[position.line];
        if (position.character <= 0) {
          return lineOffset;
        }
        const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
        const offset = Math.min(lineOffset + position.character, nextLineOffset);
        return this.ensureBeforeEOL(offset, lineOffset);
      }
      ensureBeforeEOL(offset, lineOffset) {
        while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) {
          offset--;
        }
        return offset;
      }
      get lineCount() {
        return this.getLineOffsets().length;
      }
      static isIncremental(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      static isFull(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
    };
    (function(TextDocument2) {
      function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
      }
      TextDocument2.create = create;
      function update(document, changes, version) {
        if (document instanceof FullTextDocument) {
          document.update(changes, version);
          return document;
        } else {
          throw new Error("TextDocument.update: document must be created by TextDocument.create");
        }
      }
      TextDocument2.update = update;
      function applyEdits(document, edits) {
        const text = document.getText();
        const sortedEdits = mergeSort(edits.map(getWellformedEdit), (a, b) => {
          const diff = a.range.start.line - b.range.start.line;
          if (diff === 0) {
            return a.range.start.character - b.range.start.character;
          }
          return diff;
        });
        let lastModifiedOffset = 0;
        const spans = [];
        for (const e of sortedEdits) {
          const startOffset = document.offsetAt(e.range.start);
          if (startOffset < lastModifiedOffset) {
            throw new Error("Overlapping edit");
          } else if (startOffset > lastModifiedOffset) {
            spans.push(text.substring(lastModifiedOffset, startOffset));
          }
          if (e.newText.length) {
            spans.push(e.newText);
          }
          lastModifiedOffset = document.offsetAt(e.range.end);
        }
        spans.push(text.substr(lastModifiedOffset));
        return spans.join("");
      }
      TextDocument2.applyEdits = applyEdits;
    })(TextDocument || (TextDocument = {}));
  }
});

// dist/server.js
(function() {
  var shadow$provide = {};
  "use strict";
  var l;
  function aa(a) {
    var b = typeof a;
    return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
  }
  function ba(a) {
    return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa);
  }
  var ea = "closure_uid_" + (1e9 * Math.random() >>> 0), fa = 0;
  function ha(a, b) {
    return 0 == a.lastIndexOf(b, 0);
  }
  var ia = String.prototype.trim ? function(a) {
    return a.trim();
  } : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  };
  function ja(a) {
    const b = [];
    let c = 0;
    for (const d in a) b[c++] = d;
    return b;
  }
  ;
  function ka(a, b) {
    a.sort(b || la);
  }
  function ma(a, b) {
    const c = Array(a.length);
    for (let e = 0; e < a.length; e++) c[e] = { index: e, value: a[e] };
    const d = b || la;
    ka(c, function(e, f) {
      return d(e.value, f.value) || e.index - f.index;
    });
    for (b = 0; b < a.length; b++) a[b] = c[b].value;
  }
  function la(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  ;
  function na(a) {
    return String(a.charAt(0)).toUpperCase() + String(a.slice(1)).toLowerCase();
  }
  ;
  function pa(a, b) {
    null != a && this.append.apply(this, arguments);
  }
  l = pa.prototype;
  l.Xa = "";
  l.set = function(a) {
    this.Xa = "" + a;
  };
  l.append = function(a, b, c) {
    this.Xa += String(a);
    if (null != b) for (let d = 1; d < arguments.length; d++) this.Xa += arguments[d];
    return this;
  };
  l.clear = function() {
    this.Xa = "";
  };
  l.getLength = function() {
    return this.Xa.length;
  };
  l.toString = function() {
    return this.Xa;
  };
  var n = {}, qa = null;
  function sa() {
    return new r(null, 5, [ta, true, va, true, wa, false, xa, false, ya, null], null);
  }
  function u(a) {
    return null != a && false !== a;
  }
  function za(a) {
    return null == a;
  }
  function Aa(a) {
    return Array.isArray(a);
  }
  function Ba(a) {
    return null == a ? true : false === a ? true : false;
  }
  function Ca(a) {
    return null != a;
  }
  function Da(a, b) {
    return a[aa(null == b ? null : b)] ? true : a._ ? true : false;
  }
  function Ea(a) {
    return null == a ? null : a.constructor;
  }
  function Fa(a, b) {
    var c = Ea(b);
    return Error(["No protocol method ", a, " defined for type ", u(u(c) ? c.Jc : c) ? c.ac : aa(b), ": ", b].join(""));
  }
  function Ga(a) {
    var b = a.ac;
    return u(b) ? b : w.g(a);
  }
  var Ha = "undefined" !== typeof Symbol && "function" === aa(Symbol) ? Symbol.iterator : "@@iterator";
  function Ia(a) {
    for (var b = a.length, c = Array(b), d = 0; ; ) if (d < b) c[d] = a[d], d += 1;
    else break;
    return c;
  }
  function Ja(a) {
    function b(d, e) {
      d.push(e);
      return d;
    }
    var c = [];
    return Ka ? Ka(b, c, a) : La.call(null, b, c, a);
  }
  function Ma() {
  }
  function Na(a) {
    if (null != a && null != a.U) a = a.U(a);
    else {
      var b = Na[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Na._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("ICounted.-count", a);
    }
    return a;
  }
  function Oa() {
  }
  function Pa(a) {
    if (null != a && null != a.$) a = a.$(a);
    else {
      var b = Pa[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Pa._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IEmptyableCollection.-empty", a);
    }
    return a;
  }
  function Qa() {
  }
  function Sa(a, b) {
    if (null != a && null != a.aa) a = a.aa(a, b);
    else {
      var c = Sa[aa(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = Sa._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("ICollection.-conj", a);
    }
    return a;
  }
  function Ta() {
  }
  var Wa = (function() {
    function a(d, e, f) {
      var g = Ua[aa(null == d ? null : d)];
      if (null != g) return g.i ? g.i(d, e, f) : g.call(null, d, e, f);
      g = Ua._;
      if (null != g) return g.i ? g.i(d, e, f) : g.call(null, d, e, f);
      throw Fa("IIndexed.-nth", d);
    }
    function b(d, e) {
      var f = Ua[aa(null == d ? null : d)];
      if (null != f) return f.h ? f.h(d, e) : f.call(null, d, e);
      f = Ua._;
      if (null != f) return f.h ? f.h(d, e) : f.call(null, d, e);
      throw Fa("IIndexed.-nth", d);
    }
    var c = null;
    c = function(d, e, f) {
      switch (arguments.length) {
        case 2:
          return b.call(this, d, e);
        case 3:
          return a.call(this, d, e, f);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    c.h = b;
    c.i = a;
    return c;
  })(), Ua = function Ua2(a) {
    switch (arguments.length) {
      case 2:
        return Ua2.h(arguments[0], arguments[1]);
      case 3:
        return Ua2.i(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  };
  Ua.h = function(a, b) {
    return null != a && null != a.H ? a.H(a, b) : Wa(a, b);
  };
  Ua.i = function(a, b, c) {
    return null != a && null != a.ra ? a.ra(a, b, c) : Wa(a, b, c);
  };
  Ua.J = 3;
  function Xa() {
  }
  function Ya(a) {
    if (null != a && null != a.ca) a = a.ca(a);
    else {
      var b = Ya[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Ya._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("ISeq.-first", a);
    }
    return a;
  }
  function Za(a) {
    if (null != a && null != a.ea) a = a.ea(a);
    else {
      var b = Za[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Za._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("ISeq.-rest", a);
    }
    return a;
  }
  function $a() {
  }
  function bb(a) {
    if (null != a && null != a.ba) a = a.ba(a);
    else {
      var b = bb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = bb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("INext.-next", a);
    }
    return a;
  }
  function cb() {
  }
  var eb = (function() {
    function a(d, e, f) {
      var g = db[aa(null == d ? null : d)];
      if (null != g) return g.i ? g.i(d, e, f) : g.call(null, d, e, f);
      g = db._;
      if (null != g) return g.i ? g.i(d, e, f) : g.call(null, d, e, f);
      throw Fa("ILookup.-lookup", d);
    }
    function b(d, e) {
      var f = db[aa(null == d ? null : d)];
      if (null != f) return f.h ? f.h(d, e) : f.call(null, d, e);
      f = db._;
      if (null != f) return f.h ? f.h(d, e) : f.call(null, d, e);
      throw Fa("ILookup.-lookup", d);
    }
    var c = null;
    c = function(d, e, f) {
      switch (arguments.length) {
        case 2:
          return b.call(this, d, e);
        case 3:
          return a.call(
            this,
            d,
            e,
            f
          );
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    c.h = b;
    c.i = a;
    return c;
  })(), db = function db2(a) {
    switch (arguments.length) {
      case 2:
        return db2.h(arguments[0], arguments[1]);
      case 3:
        return db2.i(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  };
  db.h = function(a, b) {
    return null != a && null != a.sa ? a.sa(a, b) : eb(a, b);
  };
  db.i = function(a, b, c) {
    return null != a && null != a.V ? a.V(a, b, c) : eb(a, b, c);
  };
  db.J = 3;
  function fb() {
  }
  function gb(a, b) {
    if (null != a && null != a.fb) a = a.fb(a, b);
    else {
      var c = gb[aa(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = gb._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("IAssociative.-contains-key?", a);
    }
    return a;
  }
  function hb(a, b, c) {
    if (null != a && null != a.Ua) a = a.Ua(a, b, c);
    else {
      var d = hb[aa(null == a ? null : a)];
      if (null != d) a = d.i ? d.i(a, b, c) : d.call(null, a, b, c);
      else if (d = hb._, null != d) a = d.i ? d.i(a, b, c) : d.call(null, a, b, c);
      else throw Fa("IAssociative.-assoc", a);
    }
    return a;
  }
  function ib(a, b) {
    if (null != a && null != a.rb) a = a.rb(a, b);
    else {
      var c = ib[aa(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = ib._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("IFind.-find", a);
    }
    return a;
  }
  function jb() {
  }
  function kb(a) {
    if (null != a && null != a.yc) a = a.key;
    else {
      var b = kb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = kb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IMapEntry.-key", a);
    }
    return a;
  }
  function lb(a) {
    if (null != a && null != a.zc) a = a.I;
    else {
      var b = lb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = lb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IMapEntry.-val", a);
    }
    return a;
  }
  function mb() {
  }
  function nb(a) {
    if (null != a && null != a.gb) a = a.gb(a);
    else {
      var b = nb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = nb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IStack.-peek", a);
    }
    return a;
  }
  function ob(a) {
    if (null != a && null != a.hb) a = a.hb(a);
    else {
      var b = ob[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = ob._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IStack.-pop", a);
    }
    return a;
  }
  function pb() {
  }
  function qb(a, b, c) {
    if (null != a && null != a.ib) a = a.ib(a, b, c);
    else {
      var d = qb[aa(null == a ? null : a)];
      if (null != d) a = d.i ? d.i(a, b, c) : d.call(null, a, b, c);
      else if (d = qb._, null != d) a = d.i ? d.i(a, b, c) : d.call(null, a, b, c);
      else throw Fa("IVector.-assoc-n", a);
    }
    return a;
  }
  function x(a) {
    if (null != a && null != a.ka) a = a.ka(a);
    else {
      var b = x[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = x._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IDeref.-deref", a);
    }
    return a;
  }
  function rb() {
  }
  function tb(a) {
    if (null != a && null != a.X) a = a.X(a);
    else {
      var b = tb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = tb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IMeta.-meta", a);
    }
    return a;
  }
  function ub(a, b) {
    if (null != a && null != a.Z) a = a.Z(a, b);
    else {
      var c = ub[aa(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = ub._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("IWithMeta.-with-meta", a);
    }
    return a;
  }
  function vb() {
  }
  var xb = (function() {
    function a(d, e, f) {
      var g = wb[aa(null == d ? null : d)];
      if (null != g) return g.i ? g.i(d, e, f) : g.call(null, d, e, f);
      g = wb._;
      if (null != g) return g.i ? g.i(d, e, f) : g.call(null, d, e, f);
      throw Fa("IReduce.-reduce", d);
    }
    function b(d, e) {
      var f = wb[aa(null == d ? null : d)];
      if (null != f) return f.h ? f.h(d, e) : f.call(null, d, e);
      f = wb._;
      if (null != f) return f.h ? f.h(d, e) : f.call(null, d, e);
      throw Fa("IReduce.-reduce", d);
    }
    var c = null;
    c = function(d, e, f) {
      switch (arguments.length) {
        case 2:
          return b.call(this, d, e);
        case 3:
          return a.call(
            this,
            d,
            e,
            f
          );
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    c.h = b;
    c.i = a;
    return c;
  })(), wb = function wb2(a) {
    switch (arguments.length) {
      case 2:
        return wb2.h(arguments[0], arguments[1]);
      case 3:
        return wb2.i(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  };
  wb.h = function(a, b) {
    return null != a && null != a.ha ? a.ha(a, b) : xb(a, b);
  };
  wb.i = function(a, b, c) {
    return null != a && null != a.ia ? a.ia(a, b, c) : xb(a, b, c);
  };
  wb.J = 3;
  function yb() {
  }
  function zb(a, b, c) {
    if (null != a && null != a.Cb) a = a.Cb(a, b, c);
    else {
      var d = zb[aa(null == a ? null : a)];
      if (null != d) a = d.i ? d.i(a, b, c) : d.call(null, a, b, c);
      else if (d = zb._, null != d) a = d.i ? d.i(a, b, c) : d.call(null, a, b, c);
      else throw Fa("IKVReduce.-kv-reduce", a);
    }
    return a;
  }
  function Bb(a, b) {
    if (null != a && null != a.S) a = a.S(a, b);
    else {
      var c = Bb[aa(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = Bb._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("IEquiv.-equiv", a);
    }
    return a;
  }
  function Cb(a) {
    if (null != a && null != a.T) a = a.T(a);
    else {
      var b = Cb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Cb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IHash.-hash", a);
    }
    return a;
  }
  function Db() {
  }
  function Eb(a) {
    if (null != a && null != a.R) a = a.R(a);
    else {
      var b = Eb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Eb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("ISeqable.-seq", a);
    }
    return a;
  }
  function Fb() {
  }
  function Gb() {
  }
  function Hb() {
  }
  function Ib() {
  }
  function Jb(a) {
    if (null != a && null != a.Gb) a = a.Gb(a);
    else {
      var b = Jb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Jb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IReversible.-rseq", a);
    }
    return a;
  }
  function Kb(a, b) {
    if (null != a && null != a.hc) a = a.hc(a, b);
    else {
      var c = Kb[aa(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = Kb._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("IWriter.-write", a);
    }
    return a;
  }
  function Lb() {
  }
  function Nb(a, b, c) {
    if (null != a && null != a.P) a = a.P(a, b, c);
    else {
      var d = Nb[aa(null == a ? null : a)];
      if (null != d) a = d.i ? d.i(a, b, c) : d.call(null, a, b, c);
      else if (d = Nb._, null != d) a = d.i ? d.i(a, b, c) : d.call(null, a, b, c);
      else throw Fa("IPrintWithWriter.-pr-writer", a);
    }
    return a;
  }
  function Ob(a) {
    if (null != a && null != a.qb) a = a.qb(a);
    else {
      var b = Ob[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Ob._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IEditableCollection.-as-transient", a);
    }
    return a;
  }
  function Pb(a, b) {
    if (null != a && null != a.ub) a = a.ub(a, b);
    else {
      var c = Pb[aa(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = Pb._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("ITransientCollection.-conj!", a);
    }
    return a;
  }
  function Qb(a) {
    if (null != a && null != a.Hb) a = a.Hb(a);
    else {
      var b = Qb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Qb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("ITransientCollection.-persistent!", a);
    }
    return a;
  }
  function Rb(a, b, c) {
    if (null != a && null != a.tb) a = a.tb(a, b, c);
    else {
      var d = Rb[aa(null == a ? null : a)];
      if (null != d) a = d.i ? d.i(a, b, c) : d.call(null, a, b, c);
      else if (d = Rb._, null != d) a = d.i ? d.i(a, b, c) : d.call(null, a, b, c);
      else throw Fa("ITransientAssociative.-assoc!", a);
    }
    return a;
  }
  function Sb() {
  }
  function Tb(a, b) {
    if (null != a && null != a.Za) a = a.Za(a, b);
    else {
      var c = Tb[aa(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = Tb._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("IComparable.-compare", a);
    }
    return a;
  }
  function Ub(a) {
    if (null != a && null != a.$b) a = a.$b(a);
    else {
      var b = Ub[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Ub._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IChunk.-drop-first", a);
    }
    return a;
  }
  function Vb(a) {
    if (null != a && null != a.Ab) a = a.Ab(a);
    else {
      var b = Vb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Vb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IChunkedSeq.-chunked-first", a);
    }
    return a;
  }
  function Wb(a) {
    if (null != a && null != a.Ya) a = a.Ya(a);
    else {
      var b = Wb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Wb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IChunkedSeq.-chunked-rest", a);
    }
    return a;
  }
  function Xb(a) {
    if (null != a && null != a.Db) a = a.Db(a);
    else {
      var b = Xb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Xb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("INamed.-name", a);
    }
    return a;
  }
  function Yb(a) {
    if (null != a && null != a.Eb) a = a.Eb(a);
    else {
      var b = Yb[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = Yb._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("INamed.-namespace", a);
    }
    return a;
  }
  function Zb(a, b) {
    if (null != a && null != a.Cc) a = a.Cc(a, b);
    else {
      var c = Zb[aa(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = Zb._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("IReset.-reset!", a);
    }
    return a;
  }
  var ac = (function() {
    function a(f, g, h, k, m) {
      var p = $b[aa(null == f ? null : f)];
      if (null != p) return p.O ? p.O(f, g, h, k, m) : p.call(null, f, g, h, k, m);
      p = $b._;
      if (null != p) return p.O ? p.O(f, g, h, k, m) : p.call(null, f, g, h, k, m);
      throw Fa("ISwap.-swap!", f);
    }
    function b(f, g, h, k) {
      var m = $b[aa(null == f ? null : f)];
      if (null != m) return m.B ? m.B(f, g, h, k) : m.call(null, f, g, h, k);
      m = $b._;
      if (null != m) return m.B ? m.B(f, g, h, k) : m.call(null, f, g, h, k);
      throw Fa("ISwap.-swap!", f);
    }
    function c(f, g, h) {
      var k = $b[aa(null == f ? null : f)];
      if (null != k) return k.i ? k.i(f, g, h) : k.call(
        null,
        f,
        g,
        h
      );
      k = $b._;
      if (null != k) return k.i ? k.i(f, g, h) : k.call(null, f, g, h);
      throw Fa("ISwap.-swap!", f);
    }
    function d(f, g) {
      var h = $b[aa(null == f ? null : f)];
      if (null != h) return h.h ? h.h(f, g) : h.call(null, f, g);
      h = $b._;
      if (null != h) return h.h ? h.h(f, g) : h.call(null, f, g);
      throw Fa("ISwap.-swap!", f);
    }
    var e = null;
    e = function(f, g, h, k, m) {
      switch (arguments.length) {
        case 2:
          return d.call(this, f, g);
        case 3:
          return c.call(this, f, g, h);
        case 4:
          return b.call(this, f, g, h, k);
        case 5:
          return a.call(this, f, g, h, k, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.h = d;
    e.i = c;
    e.B = b;
    e.O = a;
    return e;
  })(), $b = function $b2(a) {
    switch (arguments.length) {
      case 2:
        return $b2.h(arguments[0], arguments[1]);
      case 3:
        return $b2.i(arguments[0], arguments[1], arguments[2]);
      case 4:
        return $b2.B(arguments[0], arguments[1], arguments[2], arguments[3]);
      case 5:
        return $b2.O(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  };
  $b.h = function(a, b) {
    return null != a && null != a.Ec ? a.Ec(a, b) : ac(a, b);
  };
  $b.i = function(a, b, c) {
    return null != a && null != a.Fc ? a.Fc(a, b, c) : ac(a, b, c);
  };
  $b.B = function(a, b, c, d) {
    return null != a && null != a.Gc ? a.Gc(a, b, c, d) : ac(a, b, c, d);
  };
  $b.O = function(a, b, c, d, e) {
    return null != a && null != a.Hc ? a.Hc(a, b, c, d, e) : ac(a, b, c, d, e);
  };
  $b.J = 5;
  function bc(a, b) {
    if (null != a && null != a.ma) a = a.ma(a, b);
    else {
      var c = bc[aa(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = bc._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("IVolatile.-vreset!", a);
    }
    return a;
  }
  function cc() {
  }
  function dc(a) {
    if (null != a && null != a.xa) a = a.xa(a);
    else {
      var b = dc[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = dc._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IIterable.-iterator", a);
    }
    return a;
  }
  function ec(a, b) {
    if (null != a && null != a.Va) a = a.Va(a, b);
    else {
      var c = ec[aa(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = ec._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("IDrop.-drop", a);
    }
    return a;
  }
  function gc(a) {
    this.Qc = a;
    this.l = 1073741824;
    this.F = 0;
  }
  gc.prototype.hc = function(a, b) {
    return this.Qc.append(b);
  };
  function hc(a) {
    var b = new pa();
    a.P(null, new gc(b), sa());
    return w.g(b);
  }
  var ic = "undefined" !== typeof Math && "undefined" !== typeof Math.imul ? function(a, b) {
    return Math.imul(a, b);
  } : function(a, b) {
    var c = a & 65535, d = b & 65535;
    return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
  };
  function jc(a) {
    a = ic(a | 0, -862048943);
    return ic(a << 15 | a >>> -15, 461845907);
  }
  function kc(a, b) {
    a = (a | 0) ^ (b | 0);
    return ic(a << 13 | a >>> -13, 5) + -430675100 | 0;
  }
  function lc(a, b) {
    a = (a | 0) ^ b;
    a = ic(a ^ a >>> 16, -2048144789);
    a = ic(a ^ a >>> 13, -1028477387);
    return a ^ a >>> 16;
  }
  function mc(a) {
    a: {
      var b = 1;
      for (var c = 0; ; ) if (b < a.length) c = kc(c, jc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16)), b += 2;
      else {
        b = c;
        break a;
      }
    }
    return lc(1 === (a.length & 1) ? b ^ jc(a.charCodeAt(a.length - 1)) : b, ic(2, a.length));
  }
  var nc = {}, oc = 0;
  function pc(a) {
    255 < oc && (nc = {}, oc = 0);
    if (null == a) return 0;
    var b = nc[a];
    if ("number" === typeof b) a = b;
    else {
      a: if (null != a) if (b = a.length, 0 < b) for (var c = 0, d = 0; ; ) if (c < b) d = ic(31, d) + a.charCodeAt(c), c += 1;
      else {
        b = d;
        break a;
      }
      else b = 0;
      else b = 0;
      nc[a] = b;
      oc += 1;
      a = b;
    }
    return a;
  }
  function qc(a) {
    if (null != a && (a.l & 4194304 || n === a.Wc)) return a.T(null) ^ 0;
    if ("number" === typeof a) {
      if (isFinite(a)) {
        if (Number.isSafeInteger(a)) a = Math.floor(a) % 2147483647;
        else {
          var b = new Float64Array(1);
          b[0] = a;
          b = b.buffer;
          a = new DataView(b, 0, 4).getInt32();
          b = new DataView(b, 4, 4).getInt32();
          a ^= b;
        }
        return a;
      }
      switch (a) {
        case Infinity:
          return 2146435072;
        case -Infinity:
          return -1048576;
        default:
          return 2146959360;
      }
    } else return true === a ? a = 1231 : false === a ? a = 1237 : "string" === typeof a ? (a = pc(a), a = 0 === a ? a : lc(kc(0, jc(a)), 4)) : a = a instanceof Date ? a.valueOf() ^ 0 : null == a ? 0 : Cb(a) ^ 0, a;
  }
  function rc(a, b) {
    return a ^ b + 2654435769 + (a << 6) + (a >> 2);
  }
  function uc(a, b) {
    if (a.Ta === b.Ta) return 0;
    var c = Ba(a.oa);
    if (u(c ? b.oa : c)) return -1;
    if (u(a.oa)) {
      if (Ba(b.oa)) return 1;
      c = la(a.oa, b.oa);
      return 0 === c ? la(a.name, b.name) : c;
    }
    return la(a.name, b.name);
  }
  function vc(a, b, c, d, e) {
    this.oa = a;
    this.name = b;
    this.Ta = c;
    this.ob = d;
    this.Sa = e;
    this.l = 2154168321;
    this.F = 4096;
  }
  l = vc.prototype;
  l.toString = function() {
    return this.Ta;
  };
  l.S = function(a, b) {
    return b instanceof vc ? this.Ta === b.Ta : false;
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.g = function(a) {
    return y ? y(a, this) : wc.call(null, a, this);
  };
  l.h = function(a, b) {
    return xc ? xc(a, this, b) : wc.call(null, a, this, b);
  };
  l.X = function() {
    return this.Sa;
  };
  l.Z = function(a, b) {
    return new vc(this.oa, this.name, this.Ta, this.ob, b);
  };
  l.T = function() {
    var a = this.ob;
    return null != a ? a : this.ob = a = rc(mc(this.name), pc(this.oa));
  };
  l.Db = function() {
    return this.name;
  };
  l.Eb = function() {
    return this.oa;
  };
  l.P = function(a, b) {
    return Kb(b, this.Ta);
  };
  var yc = function yc2(a) {
    switch (arguments.length) {
      case 1:
        return yc2.g(arguments[0]);
      case 2:
        return yc2.h(arguments[0], arguments[1]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  };
  yc.g = function(a) {
    for (; ; ) {
      if (a instanceof vc) return a;
      if ("string" === typeof a) {
        var b = a.indexOf("/");
        return 1 > b ? yc.h(null, a) : yc.h(a.substring(0, b), a.substring(b + 1, a.length));
      }
      if (a instanceof z) a = a.M;
      else throw Error("no conversion to symbol");
    }
  };
  yc.h = function(a, b) {
    var c = null != a ? [w.g(a), "/", w.g(b)].join("") : b;
    return new vc(a, b, c, null, null);
  };
  yc.J = 2;
  function zc(a) {
    return null != a ? a.F & 131072 || n === a.Xc ? true : a.F ? false : Da(cc, a) : Da(cc, a);
  }
  function C(a) {
    if (null == a) return null;
    if (null != a && (a.l & 8388608 || n === a.Dc)) return a.R(null);
    if (Aa(a) || "string" === typeof a) return 0 === a.length ? null : new Ac(a, 0, null);
    if (null != a && null != a[Ha]) return a = (null !== a && Ha in a ? a[Ha] : void 0).call(a), Bc.g ? Bc.g(a) : Bc.call(null, a);
    if (Da(Db, a)) return Eb(a);
    throw Error([w.g(a), " is not ISeqable"].join(""));
  }
  function D(a) {
    if (null == a) return null;
    if (null != a && (a.l & 64 || n === a.sb)) return a.ca(null);
    a = C(a);
    return null == a ? null : Ya(a);
  }
  function F(a) {
    return null != a ? null != a && (a.l & 64 || n === a.sb) ? a.ea(null) : (a = C(a)) ? a.ea(null) : Cc : Cc;
  }
  function G(a) {
    return null == a ? null : null != a && (a.l & 128 || n === a.Fb) ? a.ba(null) : C(F(a));
  }
  var J = function J2(a) {
    switch (arguments.length) {
      case 1:
        return J2.g(arguments[0]);
      case 2:
        return J2.h(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
        else break;
        return J2.u(arguments[0], arguments[1], 2 < c.length ? new Ac(c.slice(2), 0, null) : null);
    }
  };
  J.g = function() {
    return true;
  };
  J.h = function(a, b) {
    return null == a ? null == b : a === b || Bb(a, b);
  };
  J.u = function(a, b, c) {
    for (; ; ) if (J.h(a, b)) if (G(c)) a = b, b = D(c), c = G(c);
    else return J.h(b, D(c));
    else return false;
  };
  J.G = function(a) {
    var b = D(a), c = G(a);
    a = D(c);
    c = G(c);
    return this.u(b, a, c);
  };
  J.J = 2;
  function Dc(a) {
    this.K = a;
  }
  Dc.prototype.next = function() {
    if (null != this.K) {
      var a = D(this.K);
      this.K = G(this.K);
      return { value: a, done: false };
    }
    return { value: null, done: true };
  };
  function Ec(a) {
    return new Dc(C(a));
  }
  function Fc(a, b) {
    this.value = a;
    this.xb = b;
    this.Wb = null;
    this.l = 8388672;
    this.F = 0;
  }
  Fc.prototype.R = function() {
    return this;
  };
  Fc.prototype.ca = function() {
    return this.value;
  };
  Fc.prototype.ea = function() {
    null == this.Wb && (this.Wb = Bc.g ? Bc.g(this.xb) : Bc.call(null, this.xb));
    return this.Wb;
  };
  function Bc(a) {
    var b = a.next();
    return u(b.done) ? null : new Fc(b.value, a);
  }
  function Gc(a) {
    var b = 0, c = 1;
    for (a = C(a); ; ) if (null != a) b += 1, c = ic(31, c) + qc(D(a)) | 0, a = G(a);
    else return lc(kc(0, jc(c)), b);
  }
  var Hc = lc(kc(0, jc(1)), 0);
  function Ic(a) {
    var b = 0, c = 0;
    for (a = C(a); ; ) if (null != a) b += 1, c = c + qc(D(a)) | 0, a = G(a);
    else return lc(kc(0, jc(c)), b);
  }
  var Jc = lc(kc(0, jc(0)), 0);
  Ma["null"] = true;
  Na["null"] = function() {
    return 0;
  };
  Date.prototype.S = function(a, b) {
    return b instanceof Date && this.valueOf() === b.valueOf();
  };
  Date.prototype.pb = n;
  Date.prototype.Za = function(a, b) {
    if (b instanceof Date) return la(this.valueOf(), b.valueOf());
    throw Error(["Cannot compare ", w.g(this), " to ", w.g(b)].join(""));
  };
  Bb.number = function(a, b) {
    return a === b;
  };
  rb["function"] = true;
  tb["function"] = function() {
    return null;
  };
  Cb._ = function(a) {
    return ba(a);
  };
  function Kc(a) {
    return a + 1;
  }
  function Mc(a) {
    this.I = a;
    this.l = 32768;
    this.F = 0;
  }
  Mc.prototype.ka = function() {
    return this.I;
  };
  function Nc(a) {
    return a instanceof Mc;
  }
  function Oc(a) {
    return x(a);
  }
  function Pc(a, b) {
    var c = a.U(null);
    if (0 === c) return b.v ? b.v() : b.call(null);
    for (var d = a.H(null, 0), e = 1; ; ) if (e < c) {
      var f = a.H(null, e);
      d = b.h ? b.h(d, f) : b.call(null, d, f);
      if (Nc(d)) return x(d);
      e += 1;
    } else return d;
  }
  function Qc(a, b, c) {
    var d = a.U(null), e = c;
    for (c = 0; ; ) if (c < d) {
      var f = a.H(null, c);
      e = b.h ? b.h(e, f) : b.call(null, e, f);
      if (Nc(e)) return x(e);
      c += 1;
    } else return e;
  }
  function Rc(a, b) {
    var c = a.length;
    if (0 === a.length) return b.v ? b.v() : b.call(null);
    for (var d = a[0], e = 1; ; ) if (e < c) {
      var f = a[e];
      d = b.h ? b.h(d, f) : b.call(null, d, f);
      if (Nc(d)) return x(d);
      e += 1;
    } else return d;
  }
  function Sc(a, b, c) {
    var d = a.length, e = c;
    for (c = 0; ; ) if (c < d) {
      var f = a[c];
      e = b.h ? b.h(e, f) : b.call(null, e, f);
      if (Nc(e)) return x(e);
      c += 1;
    } else return e;
  }
  function Uc(a, b, c, d) {
    for (var e = a.length; ; ) if (d < e) {
      var f = a[d];
      c = b.h ? b.h(c, f) : b.call(null, c, f);
      if (Nc(c)) return x(c);
      d += 1;
    } else return c;
  }
  function Vc(a) {
    return null != a ? a.l & 2 || n === a.cc ? true : a.l ? false : Da(Ma, a) : Da(Ma, a);
  }
  function Wc(a) {
    return null != a ? a.l & 16 || n === a.dc ? true : a.l ? false : Da(Ta, a) : Da(Ta, a);
  }
  function Xc(a, b, c) {
    var d = K.g ? K.g(a) : K.call(null, a);
    if (c >= d) return -1;
    !(0 < c) && 0 > c && (c += d, c = 0 > c ? 0 : c);
    for (; ; ) if (c < d) {
      if (J.h(Yc ? Yc(a, c) : Zc.call(null, a, c), b)) return c;
      c += 1;
    } else return -1;
  }
  function $c(a, b, c) {
    var d = K.g ? K.g(a) : K.call(null, a);
    if (0 === d) return -1;
    0 < c ? (--d, c = d < c ? d : c) : c = 0 > c ? d + c : c;
    for (; ; ) if (0 <= c) {
      if (J.h(Yc ? Yc(a, c) : Zc.call(null, a, c), b)) return c;
      --c;
    } else return -1;
  }
  function ad(a, b) {
    this.j = a;
    this.s = b;
  }
  ad.prototype.da = function() {
    return this.s < this.j.length;
  };
  ad.prototype.next = function() {
    var a = this.j[this.s];
    this.s += 1;
    return a;
  };
  function Ac(a, b, c) {
    this.j = a;
    this.s = b;
    this.o = c;
    this.l = 166592766;
    this.F = 401408;
  }
  l = Ac.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K.g ? K.g(this) : K.call(null, this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.H = function(a, b) {
    a = b + this.s;
    if (0 <= a && a < this.j.length) return this.j[a];
    throw Error("Index out of bounds");
  };
  l.ra = function(a, b, c) {
    a = b + this.s;
    return 0 <= a && a < this.j.length ? this.j[a] : c;
  };
  l.xa = function() {
    return new ad(this.j, this.s);
  };
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    return this.s + 1 < this.j.length ? new Ac(this.j, this.s + 1, null) : null;
  };
  l.U = function() {
    var a = this.j.length - this.s;
    return 0 > a ? 0 : a;
  };
  l.Gb = function() {
    var a = this.U(null);
    return 0 < a ? new bd(this, a - 1, null) : null;
  };
  l.T = function() {
    return Gc(this);
  };
  l.S = function(a, b) {
    return cd.h ? cd.h(this, b) : cd.call(null, this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ha = function(a, b) {
    return Uc(this.j, b, this.j[this.s], this.s + 1);
  };
  l.ia = function(a, b, c) {
    return Uc(this.j, b, c, this.s);
  };
  l.ca = function() {
    return this.j[this.s];
  };
  l.ea = function() {
    return this.s + 1 < this.j.length ? new Ac(this.j, this.s + 1, null) : Cc;
  };
  l.R = function() {
    return this.s < this.j.length ? this : null;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new Ac(this.j, this.s, b);
  };
  l.aa = function(a, b) {
    return ed.h ? ed.h(b, this) : ed.call(null, b, this);
  };
  l.Va = function(a, b) {
    return 0 < b ? this.s + b < this.j.length ? new Ac(this.j, this.s + b, null) : null : this;
  };
  Ac.prototype[Ha] = function() {
    return Ec(this);
  };
  function fd(a) {
    return 0 < a.length ? new Ac(a, 0, null) : null;
  }
  function bd(a, b, c) {
    this.Rb = a;
    this.s = b;
    this.o = c;
    this.l = 32374990;
    this.F = 8192;
  }
  l = bd.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K.g ? K.g(this) : K.call(null, this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    return 0 < this.s ? new bd(this.Rb, this.s - 1, null) : null;
  };
  l.U = function() {
    return this.s + 1;
  };
  l.T = function() {
    return Gc(this);
  };
  l.S = function(a, b) {
    return cd.h ? cd.h(this, b) : cd.call(null, this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ha = function(a, b) {
    return gd ? gd(b, this) : hd.call(null, b, this);
  };
  l.ia = function(a, b, c) {
    return id ? id(b, c, this) : hd.call(null, b, c, this);
  };
  l.ca = function() {
    return Ua(this.Rb, this.s);
  };
  l.ea = function() {
    return 0 < this.s ? new bd(this.Rb, this.s - 1, null) : Cc;
  };
  l.R = function() {
    return this;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new bd(this.Rb, this.s, b);
  };
  l.aa = function(a, b) {
    return ed.h ? ed.h(b, this) : ed.call(null, b, this);
  };
  bd.prototype[Ha] = function() {
    return Ec(this);
  };
  function jd(a) {
    return D(G(a));
  }
  function kd(a) {
    for (; ; ) {
      var b = G(a);
      if (null != b) a = b;
      else return D(a);
    }
  }
  Bb._ = function(a, b) {
    return a === b;
  };
  var M = function M2(a) {
    switch (arguments.length) {
      case 0:
        return M2.v();
      case 1:
        return M2.g(arguments[0]);
      case 2:
        return M2.h(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
        else break;
        return M2.u(arguments[0], arguments[1], 2 < c.length ? new Ac(c.slice(2), 0, null) : null);
    }
  };
  M.v = function() {
    return ld;
  };
  M.g = function(a) {
    return a;
  };
  M.h = function(a, b) {
    return null != a ? Sa(a, b) : new md(null, b, null, 1, null);
  };
  M.u = function(a, b, c) {
    for (; ; ) if (u(c)) a = M.h(a, b), b = D(c), c = G(c);
    else return M.h(a, b);
  };
  M.G = function(a) {
    var b = D(a), c = G(a);
    a = D(c);
    c = G(c);
    return this.u(b, a, c);
  };
  M.J = 2;
  function nd(a) {
    return null == a ? null : null != a && (a.l & 4 || n === a.sc) ? a.$(null) : (null != a ? a.l & 4 || n === a.sc || (a.l ? 0 : Da(Oa, a)) : Da(Oa, a)) ? Pa(a) : null;
  }
  function K(a) {
    if (null != a) if (null != a && (a.l & 2 || n === a.cc)) a = a.U(null);
    else if (Aa(a)) a = a.length;
    else if ("string" === typeof a) a = a.length;
    else if (null != a && (a.l & 8388608 || n === a.Dc)) a: {
      a = C(a);
      for (var b = 0; ; ) {
        if (Vc(a)) {
          a = b + Na(a);
          break a;
        }
        a = G(a);
        b += 1;
      }
    }
    else a = Na(a);
    else a = 0;
    return a;
  }
  function od(a, b, c) {
    for (; ; ) {
      if (null == a) return c;
      if (0 === b) return C(a) ? D(a) : c;
      if (Wc(a)) return Ua(a, b, c);
      if (C(a)) a = G(a), --b;
      else return c;
    }
  }
  function Zc(a) {
    switch (arguments.length) {
      case 2:
        return Yc(arguments[0], arguments[1]);
      case 3:
        return N(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  }
  function Yc(a, b) {
    if ("number" !== typeof b) throw Error("Index argument to nth must be a number");
    if (null == a) return a;
    if (null != a && (a.l & 16 || n === a.dc)) return a.H(null, b);
    if (Aa(a)) {
      if (-1 < b && b < a.length) return a[b | 0];
      throw Error("Index out of bounds");
    }
    if ("string" === typeof a) {
      if (-1 < b && b < a.length) return a.charAt(b | 0);
      throw Error("Index out of bounds");
    }
    if (null != a && (a.l & 64 || n === a.sb) || null != a && (a.l & 16777216 || n === a.fc)) {
      if (0 > b) throw Error("Index out of bounds");
      a: for (; ; ) {
        if (null == a) throw Error("Index out of bounds");
        if (0 === b) {
          if (C(a)) {
            a = D(a);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (Wc(a)) {
          a = Ua(a, b);
          break a;
        }
        if (C(a)) a = G(a), --b;
        else throw Error("Index out of bounds");
      }
      return a;
    }
    if (Da(Ta, a)) return Ua(a, b);
    throw Error(["nth not supported on this type ", w.g(Ga(Ea(a)))].join(""));
  }
  function N(a, b, c) {
    if ("number" !== typeof b) throw Error("Index argument to nth must be a number.");
    if (null == a) return c;
    if (null != a && (a.l & 16 || n === a.dc)) return a.ra(null, b, c);
    if (Aa(a)) return -1 < b && b < a.length ? a[b | 0] : c;
    if ("string" === typeof a) return -1 < b && b < a.length ? a.charAt(b | 0) : c;
    if (null != a && (a.l & 64 || n === a.sb) || null != a && (a.l & 16777216 || n === a.fc)) return 0 > b ? c : od(a, b, c);
    if (Da(Ta, a)) return Ua(a, b, c);
    throw Error(["nth not supported on this type ", w.g(Ga(Ea(a)))].join(""));
  }
  function wc(a) {
    switch (arguments.length) {
      case 2:
        return y(arguments[0], arguments[1]);
      case 3:
        return xc(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  }
  function y(a, b) {
    return null == a ? null : null != a && (a.l & 256 || n === a.xc) ? a.sa(null, b) : Aa(a) ? null != b && b < a.length ? a[b | 0] : null : "string" === typeof a ? null != b && -1 < b && b < a.length ? a.charAt(b | 0) : null : Da(cb, a) ? db(a, b) : null;
  }
  function xc(a, b, c) {
    return null != a ? null != a && (a.l & 256 || n === a.xc) ? a.V(null, b, c) : Aa(a) ? null != b && -1 < b && b < a.length ? a[b | 0] : c : "string" === typeof a ? null != b && -1 < b && b < a.length ? a.charAt(b | 0) : c : Da(cb, a) ? db(a, b, c) : c : c;
  }
  var qd = function qd2(a) {
    switch (arguments.length) {
      case 3:
        return qd2.i(arguments[0], arguments[1], arguments[2]);
      default:
        for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
        else break;
        return qd2.u(arguments[0], arguments[1], arguments[2], 3 < c.length ? new Ac(c.slice(3), 0, null) : null);
    }
  };
  qd.i = function(a, b, c) {
    return null != a && (a.l & 512 || n === a.qc) ? a.Ua(null, b, c) : null != a ? hb(a, b, c) : rd([b, c]);
  };
  qd.u = function(a, b, c, d) {
    for (; ; ) if (a = qd.i(a, b, c), u(d)) b = D(d), c = jd(d), d = G(G(d));
    else return a;
  };
  qd.G = function(a) {
    var b = D(a), c = G(a);
    a = D(c);
    var d = G(c);
    c = D(d);
    d = G(d);
    return this.u(b, a, c, d);
  };
  qd.J = 3;
  function sd(a, b) {
    this.C = a;
    this.o = b;
    this.l = 393217;
    this.F = 0;
  }
  l = sd.prototype;
  l.X = function() {
    return this.o;
  };
  l.Z = function(a, b) {
    return new sd(this.C, b);
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 0:
        return this.v();
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      case 3:
        return this.i(arguments[1], arguments[2], arguments[3]);
      case 4:
        return this.B(arguments[1], arguments[2], arguments[3], arguments[4]);
      case 5:
        return this.O(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      case 6:
        return this.qa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
      case 7:
        return this.Ka(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7]
        );
      case 8:
        return this.wa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]);
      case 9:
        return this.La(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
      case 10:
        return this.za(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10]);
      case 11:
        return this.Aa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11]);
      case 12:
        return this.Ba(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12]);
      case 13:
        return this.Ca(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13]
        );
      case 14:
        return this.Da(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14]);
      case 15:
        return this.Ea(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15]);
      case 16:
        return this.Fa(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16]
        );
      case 17:
        return this.Ga(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17]);
      case 18:
        return this.Ha(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16],
          arguments[17],
          arguments[18]
        );
      case 19:
        return this.Ia(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19]);
      case 20:
        return this.Ja(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16],
          arguments[17],
          arguments[18],
          arguments[19],
          arguments[20]
        );
      case 21:
        return this.Bb(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16],
          arguments[17],
          arguments[18],
          arguments[19],
          arguments[20],
          arguments[21]
        );
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.v = function() {
    return this.C.v ? this.C.v() : this.C.call(null);
  };
  l.g = function(a) {
    return this.C.g ? this.C.g(a) : this.C.call(null, a);
  };
  l.h = function(a, b) {
    return this.C.h ? this.C.h(a, b) : this.C.call(null, a, b);
  };
  l.i = function(a, b, c) {
    return this.C.i ? this.C.i(a, b, c) : this.C.call(null, a, b, c);
  };
  l.B = function(a, b, c, d) {
    return this.C.B ? this.C.B(a, b, c, d) : this.C.call(null, a, b, c, d);
  };
  l.O = function(a, b, c, d, e) {
    return this.C.O ? this.C.O(a, b, c, d, e) : this.C.call(null, a, b, c, d, e);
  };
  l.qa = function(a, b, c, d, e, f) {
    return this.C.qa ? this.C.qa(a, b, c, d, e, f) : this.C.call(null, a, b, c, d, e, f);
  };
  l.Ka = function(a, b, c, d, e, f, g) {
    return this.C.Ka ? this.C.Ka(a, b, c, d, e, f, g) : this.C.call(null, a, b, c, d, e, f, g);
  };
  l.wa = function(a, b, c, d, e, f, g, h) {
    return this.C.wa ? this.C.wa(a, b, c, d, e, f, g, h) : this.C.call(null, a, b, c, d, e, f, g, h);
  };
  l.La = function(a, b, c, d, e, f, g, h, k) {
    return this.C.La ? this.C.La(a, b, c, d, e, f, g, h, k) : this.C.call(null, a, b, c, d, e, f, g, h, k);
  };
  l.za = function(a, b, c, d, e, f, g, h, k, m) {
    return this.C.za ? this.C.za(a, b, c, d, e, f, g, h, k, m) : this.C.call(null, a, b, c, d, e, f, g, h, k, m);
  };
  l.Aa = function(a, b, c, d, e, f, g, h, k, m, p) {
    return this.C.Aa ? this.C.Aa(a, b, c, d, e, f, g, h, k, m, p) : this.C.call(null, a, b, c, d, e, f, g, h, k, m, p);
  };
  l.Ba = function(a, b, c, d, e, f, g, h, k, m, p, q) {
    return this.C.Ba ? this.C.Ba(a, b, c, d, e, f, g, h, k, m, p, q) : this.C.call(null, a, b, c, d, e, f, g, h, k, m, p, q);
  };
  l.Ca = function(a, b, c, d, e, f, g, h, k, m, p, q, t) {
    return this.C.Ca ? this.C.Ca(a, b, c, d, e, f, g, h, k, m, p, q, t) : this.C.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t);
  };
  l.Da = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v) {
    return this.C.Da ? this.C.Da(a, b, c, d, e, f, g, h, k, m, p, q, t, v) : this.C.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v);
  };
  l.Ea = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A) {
    return this.C.Ea ? this.C.Ea(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A) : this.C.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A);
  };
  l.Fa = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E) {
    return this.C.Fa ? this.C.Fa(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E) : this.C.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E);
  };
  l.Ga = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B) {
    return this.C.Ga ? this.C.Ga(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B) : this.C.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B);
  };
  l.Ha = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I) {
    return this.C.Ha ? this.C.Ha(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I) : this.C.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I);
  };
  l.Ia = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q) {
    return this.C.Ia ? this.C.Ia(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q) : this.C.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q);
  };
  l.Ja = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H) {
    return this.C.Ja ? this.C.Ja(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H) : this.C.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H);
  };
  l.Bb = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H, O) {
    return td.Bb ? td.Bb(this.C, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, new Ac([H, O], 0, null)) : td.call(null, this.C, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H, O);
  };
  function ud(a, b) {
    return "function" === typeof a ? new sd(a, b) : null == a ? null : ub(a, b);
  }
  function vd(a) {
    var b = null != a;
    return (b ? null != a ? a.l & 131072 || n === a.ec || (a.l ? 0 : Da(rb, a)) : Da(rb, a) : b) ? tb(a) : null;
  }
  function wd(a) {
    return null == a ? null : nb(a);
  }
  function xd(a) {
    return null == a ? null : ob(a);
  }
  function yd(a) {
    return null == a ? true : (null != a ? a.l & 2 || n === a.cc || (a.l ? 0 : Da(Ma, a)) : Da(Ma, a)) ? 0 === Na(a) : Ba(C(a));
  }
  function zd(a) {
    return null == a ? false : null != a ? a.l & 8 || n === a.Tc ? true : a.l ? false : Da(Qa, a) : Da(Qa, a);
  }
  function Ad(a) {
    return null == a ? false : null != a ? a.l & 4096 || n === a.cd ? true : a.l ? false : Da(mb, a) : Da(mb, a);
  }
  function Bd(a) {
    return null != a ? a.l & 16777216 || n === a.fc ? true : a.l ? false : Da(Fb, a) : Da(Fb, a);
  }
  function Cd(a) {
    return null == a ? false : null != a ? a.l & 1024 || n === a.Zc ? true : a.l ? false : Da(jb, a) : Da(jb, a);
  }
  function Ed(a) {
    return null != a ? a.l & 67108864 || n === a.ad ? true : a.l ? false : Da(Hb, a) : Da(Hb, a);
  }
  function Fd(a) {
    return null != a ? a.l & 16384 || n === a.dd ? true : a.l ? false : Da(pb, a) : Da(pb, a);
  }
  function Gd(a) {
    return null != a ? a.F & 512 || n === a.Sc ? true : false : false;
  }
  function Hd(a, b, c, d, e) {
    for (; ; ) {
      if (0 === e) return c;
      c[d] = a[b];
      d += 1;
      --e;
      b += 1;
    }
  }
  var Id = {};
  function Jd(a) {
    return null == a ? false : null != a ? a.l & 64 || n === a.sb ? true : a.l ? false : Da(Xa, a) : Da(Xa, a);
  }
  function Kd(a) {
    return null == a ? false : false === a ? false : true;
  }
  function Ld(a) {
    return "number" === typeof a && !isNaN(a) && Infinity !== a && parseFloat(a) === parseInt(a, 10);
  }
  function Md(a, b) {
    return null != a && (a.l & 512 || n === a.qc) ? a.fb(null, b) : Da(fb, a) ? gb(a, b) : xc(a, b, Id) === Id ? false : true;
  }
  function Nd(a, b) {
    if (a === b) return 0;
    if (null == a) return -1;
    if (null == b) return 1;
    if ("number" === typeof a) {
      if ("number" === typeof b) return la(a, b);
      throw Error(["Cannot compare ", w.g(a), " to ", w.g(b)].join(""));
    }
    if (null != a ? a.F & 2048 || n === a.pb || (a.F ? 0 : Da(Sb, a)) : Da(Sb, a)) return Tb(a, b);
    if ("string" !== typeof a && !Aa(a) && true !== a && false !== a || Ea(a) !== Ea(b)) throw Error(["Cannot compare ", w.g(a), " to ", w.g(b)].join(""));
    return la(a, b);
  }
  function Od(a, b) {
    var c = K(a), d = K(b);
    if (c < d) a = -1;
    else if (c > d) a = 1;
    else if (0 === c) a = 0;
    else a: for (d = 0; ; ) {
      var e = Nd(Yc(a, d), Yc(b, d));
      if (0 === e && d + 1 < c) d += 1;
      else {
        a = e;
        break a;
      }
    }
    return a;
  }
  function Pd(a) {
    return J.h(a, Nd) ? Nd : function(b, c) {
      var d = a.h ? a.h(b, c) : a.call(null, b, c);
      return "number" === typeof d ? d : u(d) ? -1 : u(a.h ? a.h(c, b) : a.call(null, c, b)) ? 1 : 0;
    };
  }
  function Qd(a) {
    return Rd(Nd, a);
  }
  function Rd(a, b) {
    if (C(b)) {
      var c = Sd.g ? Sd.g(b) : Sd.call(null, b);
      ma(c, Pd(a));
      return ud(C(c), vd(b));
    }
    return Cc;
  }
  function Wd(a, b) {
    return Xd(a, b);
  }
  function Xd(a, b) {
    return Rd(function(c, d) {
      c = a.g ? a.g(c) : a.call(null, c);
      d = a.g ? a.g(d) : a.call(null, d);
      var e = Pd(Nd);
      return e.h ? e.h(c, d) : e.call(null, c, d);
    }, b);
  }
  function hd(a) {
    switch (arguments.length) {
      case 2:
        return gd(arguments[0], arguments[1]);
      case 3:
        return id(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  }
  function gd(a, b) {
    var c = C(b);
    return c ? (b = D(c), c = G(c), Ka ? Ka(a, b, c) : La.call(null, a, b, c)) : a.v ? a.v() : a.call(null);
  }
  function id(a, b, c) {
    for (c = C(c); ; ) if (c) {
      var d = D(c);
      b = a.h ? a.h(b, d) : a.call(null, b, d);
      if (Nc(b)) return x(b);
      c = G(c);
    } else return b;
  }
  function Yd(a, b) {
    a = dc(a);
    if (u(a.da())) for (var c = a.next(); ; ) if (a.da()) {
      var d = a.next();
      c = b.h ? b.h(c, d) : b.call(null, c, d);
      if (Nc(c)) return x(c);
    } else return c;
    else return b.v ? b.v() : b.call(null);
  }
  function Zd(a, b, c) {
    for (a = dc(a); ; ) if (a.da()) {
      var d = a.next();
      c = b.h ? b.h(c, d) : b.call(null, c, d);
      if (Nc(c)) return x(c);
    } else return c;
  }
  function La(a) {
    switch (arguments.length) {
      case 2:
        return $d(arguments[0], arguments[1]);
      case 3:
        return Ka(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  }
  function $d(a, b) {
    return null != b && (b.l & 524288 || n === b.Bc) ? b.ha(null, a) : Aa(b) ? Rc(b, a) : "string" === typeof b ? Rc(b, a) : Da(vb, b) ? wb(b, a) : zc(b) ? Yd(b, a) : gd(a, b);
  }
  function Ka(a, b, c) {
    return null != c && (c.l & 524288 || n === c.Bc) ? c.ia(null, a, b) : Aa(c) ? Sc(c, a, b) : "string" === typeof c ? Sc(c, a, b) : Da(vb, c) ? wb(c, a, b) : zc(c) ? Zd(c, a, b) : id(a, b, c);
  }
  function ae(a, b, c) {
    return (null != c ? c.l & 1048576 || n === c.wc || (c.l ? 0 : Da(yb, c)) : Da(yb, c)) ? zb(c, a, b) : Ka(function(d, e) {
      var f = kb(e);
      e = lb(e);
      return a.i ? a.i(d, f, e) : a.call(null, d, f, e);
    }, b, c);
  }
  function be(a) {
    return a;
  }
  function ce(a, b, c, d) {
    a = a.g ? a.g(b) : a.call(null, b);
    c = Ka(a, c, d);
    return a.g ? a.g(c) : a.call(null, c);
  }
  var de = function de2(a) {
    switch (arguments.length) {
      case 0:
        return de2.v();
      case 1:
        return de2.g(arguments[0]);
      case 2:
        return de2.h(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
        else break;
        return de2.u(arguments[0], arguments[1], 2 < c.length ? new Ac(c.slice(2), 0, null) : null);
    }
  };
  de.v = function() {
    return 0;
  };
  de.g = function(a) {
    return a;
  };
  de.h = function(a, b) {
    return a + b;
  };
  de.u = function(a, b, c) {
    return Ka(de, a + b, c);
  };
  de.G = function(a) {
    var b = D(a), c = G(a);
    a = D(c);
    c = G(c);
    return this.u(b, a, c);
  };
  de.J = 2;
  var ee = function ee2(a) {
    switch (arguments.length) {
      case 1:
        return ee2.g(arguments[0]);
      case 2:
        return ee2.h(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
        else break;
        return ee2.u(arguments[0], arguments[1], 2 < c.length ? new Ac(c.slice(2), 0, null) : null);
    }
  };
  ee.g = function(a) {
    return a;
  };
  ee.h = function(a, b) {
    return a < b ? a : b;
  };
  ee.u = function(a, b, c) {
    return Ka(ee, a < b ? a : b, c);
  };
  ee.G = function(a) {
    var b = D(a), c = G(a);
    a = D(c);
    c = G(c);
    return this.u(b, a, c);
  };
  ee.J = 2;
  function fe(a) {
    if ("number" === typeof a) return String.fromCharCode(a);
    if ("string" === typeof a && 1 === a.length) return a;
    throw Error("Argument to char must be a character or number");
  }
  function ge(a) {
    a = (a - a % 2) / 2;
    return 0 <= a ? Math.floor(a) : Math.ceil(a);
  }
  function he(a) {
    a -= a >> 1 & 1431655765;
    a = (a & 858993459) + (a >> 2 & 858993459);
    return 16843009 * (a + (a >> 4) & 252645135) >> 24;
  }
  function ie(a) {
    switch (arguments.length) {
      case 1:
        return true;
      case 2:
        return Bb(arguments[0], arguments[1]);
      default:
        for (var b = [], c = arguments.length, d = 0; ; ) if (d < c) b.push(arguments[d]), d += 1;
        else break;
        a: for (c = arguments[0], d = arguments[1], b = 2 < b.length ? new Ac(b.slice(2), 0, null) : null; ; ) if (c === d) if (G(b)) c = d, d = D(b), b = G(b);
        else {
          c = d === D(b);
          break a;
        }
        else {
          c = false;
          break a;
        }
        return c;
    }
  }
  function je(a, b) {
    return Bb(a, b);
  }
  var w = function w2(a) {
    switch (arguments.length) {
      case 0:
        return w2.v();
      case 1:
        return w2.g(arguments[0]);
      default:
        for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
        else break;
        return w2.u(arguments[0], 1 < c.length ? new Ac(c.slice(1), 0, null) : null);
    }
  };
  w.v = function() {
    return "";
  };
  w.g = function(a) {
    return null == a ? "" : [a].join("");
  };
  w.u = function(a, b) {
    for (a = new pa(w.g(a)); ; ) if (u(b)) a = a.append(w.g(D(b))), b = G(b);
    else return a.toString();
  };
  w.G = function(a) {
    var b = D(a);
    a = G(a);
    return this.u(b, a);
  };
  w.J = 1;
  function ke(a, b) {
    return a.substring(b);
  }
  function le(a, b, c) {
    return a.substring(b, c);
  }
  function cd(a, b) {
    if (Bd(b)) if (Vc(a) && Vc(b) && K(a) !== K(b)) a = false;
    else a: for (a = C(a), b = C(b); ; ) {
      if (null == a) {
        a = null == b;
        break a;
      }
      if (null != b && J.h(D(a), D(b))) a = G(a), b = G(b);
      else {
        a = false;
        break a;
      }
    }
    else a = null;
    return Kd(a);
  }
  function md(a, b, c, d, e) {
    this.o = a;
    this.first = b;
    this.Wa = c;
    this.count = d;
    this.A = e;
    this.l = 65937646;
    this.F = 8192;
  }
  l = md.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, this.count);
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    return 1 === this.count ? null : this.Wa;
  };
  l.U = function() {
    return this.count;
  };
  l.gb = function() {
    return this.first;
  };
  l.hb = function() {
    return this.ea(null);
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return ub(Cc, this.o);
  };
  l.ha = function(a, b) {
    return gd(b, this);
  };
  l.ia = function(a, b, c) {
    return id(b, c, this);
  };
  l.ca = function() {
    return this.first;
  };
  l.ea = function() {
    return 1 === this.count ? Cc : this.Wa;
  };
  l.R = function() {
    return this;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new md(b, this.first, this.Wa, this.count, this.A);
  };
  l.aa = function(a, b) {
    return new md(this.o, b, this, this.count + 1, null);
  };
  function me(a) {
    return null != a ? a.l & 33554432 || n === a.Yc ? true : a.l ? false : Da(Gb, a) : Da(Gb, a);
  }
  md.prototype[Ha] = function() {
    return Ec(this);
  };
  function ne(a) {
    this.o = a;
    this.l = 65937614;
    this.F = 8192;
  }
  l = ne.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    return null;
  };
  l.U = function() {
    return 0;
  };
  l.gb = function() {
    return null;
  };
  l.hb = function() {
    throw Error("Can't pop empty list");
  };
  l.T = function() {
    return Hc;
  };
  l.S = function(a, b) {
    return me(b) || Bd(b) ? null == C(b) : false;
  };
  l.$ = function() {
    return this;
  };
  l.ha = function(a, b) {
    return gd(b, this);
  };
  l.ia = function(a, b, c) {
    return id(b, c, this);
  };
  l.ca = function() {
    return null;
  };
  l.ea = function() {
    return Cc;
  };
  l.R = function() {
    return null;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new ne(b);
  };
  l.aa = function(a, b) {
    return new md(this.o, b, null, 1, null);
  };
  var Cc = new ne(null);
  ne.prototype[Ha] = function() {
    return Ec(this);
  };
  function oe(a) {
    return (null != a ? a.l & 134217728 || n === a.bd || (a.l ? 0 : Da(Ib, a)) : Da(Ib, a)) ? (a = Jb(a)) ? a : Cc : Ka(M, Cc, a);
  }
  var pe = function pe2(a) {
    for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
    else break;
    return pe2.u(0 < c.length ? new Ac(c.slice(0), 0, null) : null);
  };
  pe.u = function(a) {
    if (a instanceof Ac && 0 === a.s) var b = a.j;
    else a: for (b = []; ; ) if (null != a) b.push(Ya(a)), a = bb(a);
    else break a;
    a = b.length;
    for (var c = Cc; ; ) if (0 < a) {
      var d = a - 1;
      c = Sa(c, b[a - 1]);
      a = d;
    } else return c;
  };
  pe.J = 0;
  pe.G = function(a) {
    return this.u(C(a));
  };
  function qe(a, b, c, d) {
    this.o = a;
    this.first = b;
    this.Wa = c;
    this.A = d;
    this.l = 65929452;
    this.F = 8192;
  }
  l = qe.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    return null == this.Wa ? null : C(this.Wa);
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ha = function(a, b) {
    return gd(b, this);
  };
  l.ia = function(a, b, c) {
    return id(b, c, this);
  };
  l.ca = function() {
    return this.first;
  };
  l.ea = function() {
    return null == this.Wa ? Cc : this.Wa;
  };
  l.R = function() {
    return this;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new qe(b, this.first, this.Wa, this.A);
  };
  l.aa = function(a, b) {
    return new qe(null, b, this, null);
  };
  qe.prototype[Ha] = function() {
    return Ec(this);
  };
  function ed(a, b) {
    return null == b ? new md(null, a, null, 1, null) : null != b && (b.l & 64 || n === b.sb) ? new qe(null, a, b, null) : new qe(null, a, C(b), null);
  }
  function re(a, b) {
    if (a.M === b.M) return 0;
    var c = Ba(a.oa);
    if (u(c ? b.oa : c)) return -1;
    if (u(a.oa)) {
      if (Ba(b.oa)) return 1;
      c = la(a.oa, b.oa);
      return 0 === c ? la(a.name, b.name) : c;
    }
    return la(a.name, b.name);
  }
  function z(a, b, c, d) {
    this.oa = a;
    this.name = b;
    this.M = c;
    this.ob = d;
    this.l = 2153775105;
    this.F = 4096;
  }
  l = z.prototype;
  l.toString = function() {
    return [":", w.g(this.M)].join("");
  };
  l.S = function(a, b) {
    return b instanceof z ? this.M === b.M : false;
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.g = function(a) {
    return y(a, this);
  };
  l.h = function(a, b) {
    return xc(a, this, b);
  };
  l.T = function() {
    var a = this.ob;
    return null != a ? a : this.ob = a = rc(mc(this.name), pc(this.oa)) + 2654435769 | 0;
  };
  l.Db = function() {
    return this.name;
  };
  l.Eb = function() {
    return this.oa;
  };
  l.P = function(a, b) {
    return Kb(b, [":", w.g(this.M)].join(""));
  };
  function se(a) {
    if (null != a && (a.F & 4096 || n === a.Ac)) return a.Eb(null);
    throw Error(["Doesn't support namespace: ", w.g(a)].join(""));
  }
  var te = function te2(a) {
    switch (arguments.length) {
      case 1:
        return te2.g(arguments[0]);
      case 2:
        return te2.h(arguments[0], arguments[1]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  };
  te.g = function(a) {
    if (a instanceof z) return a;
    if (a instanceof vc) return new z(se(a), ue.g ? ue.g(a) : ue.call(null, a), a.Ta, null);
    if (J.h("/", a)) return new z(null, a, a, null);
    if ("string" === typeof a) {
      var b = a.split("/");
      return 2 === b.length ? new z(b[0], b[1], a, null) : new z(null, b[0], a, null);
    }
    return null;
  };
  te.h = function(a, b) {
    a = a instanceof z ? ue.g ? ue.g(a) : ue.call(null, a) : a instanceof vc ? ue.g ? ue.g(a) : ue.call(null, a) : a;
    b = b instanceof z ? ue.g ? ue.g(b) : ue.call(null, b) : b instanceof vc ? ue.g ? ue.g(b) : ue.call(null, b) : b;
    return new z(a, b, [u(a) ? [w.g(a), "/"].join("") : null, w.g(b)].join(""), null);
  };
  te.J = 2;
  function ve(a, b, c, d) {
    this.o = a;
    this.Jb = b;
    this.K = c;
    this.A = d;
    this.l = 32374988;
    this.F = 1;
  }
  l = ve.prototype;
  l.toString = function() {
    return hc(this);
  };
  function we(a) {
    null != a.Jb && (a.K = a.Jb.v ? a.Jb.v() : a.Jb.call(null), a.Jb = null);
    return a.K;
  }
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    this.R(null);
    return null == this.K ? null : G(this.K);
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return ub(Cc, this.o);
  };
  l.ha = function(a, b) {
    return gd(b, this);
  };
  l.ia = function(a, b, c) {
    return id(b, c, this);
  };
  l.ca = function() {
    this.R(null);
    return null == this.K ? null : D(this.K);
  };
  l.ea = function() {
    this.R(null);
    return null != this.K ? F(this.K) : Cc;
  };
  l.R = function() {
    we(this);
    if (null == this.K) return null;
    for (var a = this.K; ; ) if (a instanceof ve) a = we(a);
    else return this.K = a, C(this.K);
  };
  l.Z = function(a, b) {
    var c = this;
    return b === this.o ? c : new ve(b, function() {
      return c.R(null);
    }, null, this.A);
  };
  l.aa = function(a, b) {
    return ed(b, this);
  };
  ve.prototype[Ha] = function() {
    return Ec(this);
  };
  function xe(a) {
    this.eb = a;
    this.end = 0;
    this.l = 2;
    this.F = 0;
  }
  xe.prototype.add = function(a) {
    this.eb[this.end] = a;
    return this.end += 1;
  };
  xe.prototype.ua = function() {
    var a = new ye(this.eb, 0, this.end);
    this.eb = null;
    return a;
  };
  xe.prototype.U = function() {
    return this.end;
  };
  function ze(a) {
    return new xe(Array(a));
  }
  function ye(a, b, c) {
    this.j = a;
    this.ja = b;
    this.end = c;
    this.l = 524306;
    this.F = 0;
  }
  l = ye.prototype;
  l.U = function() {
    return this.end - this.ja;
  };
  l.H = function(a, b) {
    return this.j[this.ja + b];
  };
  l.ra = function(a, b, c) {
    return 0 <= b && b < this.end - this.ja ? this.j[this.ja + b] : c;
  };
  l.$b = function() {
    if (this.ja === this.end) throw Error("-drop-first of empty chunk");
    return new ye(this.j, this.ja + 1, this.end);
  };
  l.ha = function(a, b) {
    return Uc(this.j, b, this.j[this.ja], this.ja + 1);
  };
  l.ia = function(a, b, c) {
    return Uc(this.j, b, c, this.ja);
  };
  function Ae(a, b, c, d) {
    this.ua = a;
    this.Pa = b;
    this.o = c;
    this.A = d;
    this.l = 31850732;
    this.F = 1536;
  }
  l = Ae.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    return 1 < Na(this.ua) ? new Ae(Ub(this.ua), this.Pa, null, null) : null == this.Pa ? null : Eb(this.Pa);
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ca = function() {
    return Ua(this.ua, 0);
  };
  l.ea = function() {
    return 1 < Na(this.ua) ? new Ae(Ub(this.ua), this.Pa, null, null) : null == this.Pa ? Cc : this.Pa;
  };
  l.R = function() {
    return this;
  };
  l.Ab = function() {
    return this.ua;
  };
  l.Ya = function() {
    return null == this.Pa ? Cc : this.Pa;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new Ae(this.ua, this.Pa, b, this.A);
  };
  l.aa = function(a, b) {
    return ed(b, this);
  };
  l.Sb = function() {
    return null == this.Pa ? null : this.Pa;
  };
  Ae.prototype[Ha] = function() {
    return Ec(this);
  };
  function Be(a, b) {
    return 0 === Na(a) ? b : new Ae(a, b, null, null);
  }
  function Ce(a, b) {
    a.add(b);
  }
  function De(a) {
    return a.ua();
  }
  function Sd(a) {
    var b = [];
    for (a = C(a); ; ) if (null != a) b.push(D(a)), a = G(a);
    else return b;
  }
  function Ee(a, b) {
    if (Vc(b)) return K(b);
    var c = 0;
    for (b = C(b); ; ) if (null != b && c < a) c += 1, b = G(b);
    else return c;
  }
  var Fe = function Fe2(a) {
    if (null == a) return null;
    var c = G(a);
    return null == c ? C(D(a)) : ed(D(a), Fe2.g ? Fe2.g(c) : Fe2.call(null, c));
  }, Ge = function Ge2(a) {
    switch (arguments.length) {
      case 0:
        return Ge2.v();
      case 1:
        return Ge2.g(arguments[0]);
      case 2:
        return Ge2.h(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
        else break;
        return Ge2.u(arguments[0], arguments[1], 2 < c.length ? new Ac(c.slice(2), 0, null) : null);
    }
  };
  Ge.v = function() {
    return new ve(null, function() {
      return null;
    }, null, null);
  };
  Ge.g = function(a) {
    return new ve(null, function() {
      return a;
    }, null, null);
  };
  Ge.h = function(a, b) {
    return new ve(null, function() {
      var c = C(a);
      return c ? Gd(c) ? Be(Vb(c), Ge.h(Wb(c), b)) : ed(D(c), Ge.h(F(c), b)) : b;
    }, null, null);
  };
  Ge.u = function(a, b, c) {
    return (function g(e, f) {
      return new ve(null, function() {
        var h = C(e);
        return h ? Gd(h) ? Be(Vb(h), g(Wb(h), f)) : ed(D(h), g(F(h), f)) : u(f) ? g(D(f), G(f)) : null;
      }, null, null);
    })(Ge.h(a, b), c);
  };
  Ge.G = function(a) {
    var b = D(a), c = G(a);
    a = D(c);
    c = G(c);
    return this.u(b, a, c);
  };
  Ge.J = 2;
  function He(a, b, c) {
    return Rb(a, b, c);
  }
  function Ie(a, b, c) {
    var d = C(c);
    if (0 === b) return a.v ? a.v() : a.call(null);
    c = Ya(d);
    var e = Za(d);
    if (1 === b) return a.g ? a.g(c) : a.call(null, c);
    d = Ya(e);
    var f = Za(e);
    if (2 === b) return a.h ? a.h(c, d) : a.call(null, c, d);
    e = Ya(f);
    var g = Za(f);
    if (3 === b) return a.i ? a.i(c, d, e) : a.call(null, c, d, e);
    f = Ya(g);
    var h = Za(g);
    if (4 === b) return a.B ? a.B(c, d, e, f) : a.call(null, c, d, e, f);
    g = Ya(h);
    var k = Za(h);
    if (5 === b) return a.O ? a.O(c, d, e, f, g) : a.call(null, c, d, e, f, g);
    h = Ya(k);
    var m = Za(k);
    if (6 === b) return a.qa ? a.qa(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
    k = Ya(m);
    var p = Za(m);
    if (7 === b) return a.Ka ? a.Ka(c, d, e, f, g, h, k) : a.call(null, c, d, e, f, g, h, k);
    m = Ya(p);
    var q = Za(p);
    if (8 === b) return a.wa ? a.wa(c, d, e, f, g, h, k, m) : a.call(null, c, d, e, f, g, h, k, m);
    p = Ya(q);
    var t = Za(q);
    if (9 === b) return a.La ? a.La(c, d, e, f, g, h, k, m, p) : a.call(null, c, d, e, f, g, h, k, m, p);
    q = Ya(t);
    var v = Za(t);
    if (10 === b) return a.za ? a.za(c, d, e, f, g, h, k, m, p, q) : a.call(null, c, d, e, f, g, h, k, m, p, q);
    t = Ya(v);
    var A = Za(v);
    if (11 === b) return a.Aa ? a.Aa(c, d, e, f, g, h, k, m, p, q, t) : a.call(null, c, d, e, f, g, h, k, m, p, q, t);
    v = Ya(A);
    var E = Za(A);
    if (12 === b) return a.Ba ? a.Ba(c, d, e, f, g, h, k, m, p, q, t, v) : a.call(null, c, d, e, f, g, h, k, m, p, q, t, v);
    A = Ya(E);
    var B = Za(E);
    if (13 === b) return a.Ca ? a.Ca(c, d, e, f, g, h, k, m, p, q, t, v, A) : a.call(null, c, d, e, f, g, h, k, m, p, q, t, v, A);
    E = Ya(B);
    var I = Za(B);
    if (14 === b) return a.Da ? a.Da(c, d, e, f, g, h, k, m, p, q, t, v, A, E) : a.call(null, c, d, e, f, g, h, k, m, p, q, t, v, A, E);
    B = Ya(I);
    var Q = Za(I);
    if (15 === b) return a.Ea ? a.Ea(c, d, e, f, g, h, k, m, p, q, t, v, A, E, B) : a.call(null, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B);
    I = Ya(Q);
    var H = Za(Q);
    if (16 === b) return a.Fa ? a.Fa(
      c,
      d,
      e,
      f,
      g,
      h,
      k,
      m,
      p,
      q,
      t,
      v,
      A,
      E,
      B,
      I
    ) : a.call(null, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I);
    Q = Ya(H);
    var O = Za(H);
    if (17 === b) return a.Ga ? a.Ga(c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q) : a.call(null, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q);
    H = Ya(O);
    var S = Za(O);
    if (18 === b) return a.Ha ? a.Ha(c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H) : a.call(null, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H);
    O = Ya(S);
    S = Za(S);
    if (19 === b) return a.Ia ? a.Ia(c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H, O) : a.call(null, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H, O);
    var ca = Ya(S);
    Za(S);
    if (20 === b) return a.Ja ? a.Ja(
      c,
      d,
      e,
      f,
      g,
      h,
      k,
      m,
      p,
      q,
      t,
      v,
      A,
      E,
      B,
      I,
      Q,
      H,
      O,
      ca
    ) : a.call(null, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H, O, ca);
    throw Error("Only up to 20 arguments supported on functions");
  }
  function Le(a) {
    return null != a && (a.l & 128 || n === a.Fb) ? a.ba(null) : C(F(a));
  }
  function Me(a, b, c) {
    return null == c ? a.g ? a.g(b) : a.call(a, b) : Ne(a, b, Ya(c), Le(c));
  }
  function Ne(a, b, c, d) {
    return null == d ? a.h ? a.h(b, c) : a.call(a, b, c) : Oe(a, b, c, Ya(d), Le(d));
  }
  function Oe(a, b, c, d, e) {
    return null == e ? a.i ? a.i(b, c, d) : a.call(a, b, c, d) : Pe(a, b, c, d, Ya(e), Le(e));
  }
  function Pe(a, b, c, d, e, f) {
    if (null == f) return a.B ? a.B(b, c, d, e) : a.call(a, b, c, d, e);
    var g = Ya(f), h = G(f);
    if (null == h) return a.O ? a.O(b, c, d, e, g) : a.call(a, b, c, d, e, g);
    f = Ya(h);
    var k = G(h);
    if (null == k) return a.qa ? a.qa(b, c, d, e, g, f) : a.call(a, b, c, d, e, g, f);
    h = Ya(k);
    var m = G(k);
    if (null == m) return a.Ka ? a.Ka(b, c, d, e, g, f, h) : a.call(a, b, c, d, e, g, f, h);
    k = Ya(m);
    var p = G(m);
    if (null == p) return a.wa ? a.wa(b, c, d, e, g, f, h, k) : a.call(a, b, c, d, e, g, f, h, k);
    m = Ya(p);
    var q = G(p);
    if (null == q) return a.La ? a.La(b, c, d, e, g, f, h, k, m) : a.call(
      a,
      b,
      c,
      d,
      e,
      g,
      f,
      h,
      k,
      m
    );
    p = Ya(q);
    var t = G(q);
    if (null == t) return a.za ? a.za(b, c, d, e, g, f, h, k, m, p) : a.call(a, b, c, d, e, g, f, h, k, m, p);
    q = Ya(t);
    var v = G(t);
    if (null == v) return a.Aa ? a.Aa(b, c, d, e, g, f, h, k, m, p, q) : a.call(a, b, c, d, e, g, f, h, k, m, p, q);
    t = Ya(v);
    var A = G(v);
    if (null == A) return a.Ba ? a.Ba(b, c, d, e, g, f, h, k, m, p, q, t) : a.call(a, b, c, d, e, g, f, h, k, m, p, q, t);
    v = Ya(A);
    var E = G(A);
    if (null == E) return a.Ca ? a.Ca(b, c, d, e, g, f, h, k, m, p, q, t, v) : a.call(a, b, c, d, e, g, f, h, k, m, p, q, t, v);
    A = Ya(E);
    var B = G(E);
    if (null == B) return a.Da ? a.Da(b, c, d, e, g, f, h, k, m, p, q, t, v, A) : a.call(
      a,
      b,
      c,
      d,
      e,
      g,
      f,
      h,
      k,
      m,
      p,
      q,
      t,
      v,
      A
    );
    E = Ya(B);
    var I = G(B);
    if (null == I) return a.Ea ? a.Ea(b, c, d, e, g, f, h, k, m, p, q, t, v, A, E) : a.call(a, b, c, d, e, g, f, h, k, m, p, q, t, v, A, E);
    B = Ya(I);
    var Q = G(I);
    if (null == Q) return a.Fa ? a.Fa(b, c, d, e, g, f, h, k, m, p, q, t, v, A, E, B) : a.call(a, b, c, d, e, g, f, h, k, m, p, q, t, v, A, E, B);
    I = Ya(Q);
    var H = G(Q);
    if (null == H) return a.Ga ? a.Ga(b, c, d, e, g, f, h, k, m, p, q, t, v, A, E, B, I) : a.call(a, b, c, d, e, g, f, h, k, m, p, q, t, v, A, E, B, I);
    Q = Ya(H);
    var O = G(H);
    if (null == O) return a.Ha ? a.Ha(b, c, d, e, g, f, h, k, m, p, q, t, v, A, E, B, I, Q) : a.call(
      a,
      b,
      c,
      d,
      e,
      g,
      f,
      h,
      k,
      m,
      p,
      q,
      t,
      v,
      A,
      E,
      B,
      I,
      Q
    );
    H = Ya(O);
    var S = G(O);
    if (null == S) return a.Ia ? a.Ia(b, c, d, e, g, f, h, k, m, p, q, t, v, A, E, B, I, Q, H) : a.call(a, b, c, d, e, g, f, h, k, m, p, q, t, v, A, E, B, I, Q, H);
    O = Ya(S);
    S = G(S);
    if (null == S) return a.Ja ? a.Ja(b, c, d, e, g, f, h, k, m, p, q, t, v, A, E, B, I, Q, H, O) : a.call(a, b, c, d, e, g, f, h, k, m, p, q, t, v, A, E, B, I, Q, H, O);
    b = [b, c, d, e, g, f, h, k, m, p, q, t, v, A, E, B, I, Q, H, O];
    for (c = S; ; ) if (c) b.push(Ya(c)), c = G(c);
    else break;
    return a.apply(a, b);
  }
  function td(a) {
    switch (arguments.length) {
      case 2:
        return Qe(arguments[0], arguments[1]);
      case 3:
        return Re(arguments[0], arguments[1], arguments[2]);
      case 4:
        return Se(arguments[0], arguments[1], arguments[2], arguments[3]);
      case 5:
        return Te(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
      default:
        for (var b = [], c = arguments.length, d = 0; ; ) if (d < c) b.push(arguments[d]), d += 1;
        else break;
        return Ue(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], 5 < b.length ? new Ac(b.slice(5), 0, null) : null);
    }
  }
  function Qe(a, b) {
    if (a.G) {
      var c = a.J, d = Ee(c + 1, b);
      return d <= c ? Ie(a, d, b) : a.G(b);
    }
    b = C(b);
    return null == b ? a.v ? a.v() : a.call(a) : Me(a, Ya(b), Le(b));
  }
  function Re(a, b, c) {
    if (a.G) {
      b = ed(b, c);
      var d = a.J;
      c = Ee(d, c) + 1;
      return c <= d ? Ie(a, c, b) : a.G(b);
    }
    return Me(a, b, C(c));
  }
  function Se(a, b, c, d) {
    return a.G ? (b = ed(b, ed(c, d)), c = a.J, d = 2 + Ee(c - 1, d), d <= c ? Ie(a, d, b) : a.G(b)) : Ne(a, b, c, C(d));
  }
  function Te(a, b, c, d, e) {
    return a.G ? (b = ed(b, ed(c, ed(d, e))), c = a.J, e = 3 + Ee(c - 2, e), e <= c ? Ie(a, e, b) : a.G(b)) : Oe(a, b, c, d, C(e));
  }
  function Ue(a, b, c, d, e, f) {
    return a.G ? (f = Fe(f), b = ed(b, ed(c, ed(d, ed(e, f)))), c = a.J, f = 4 + Ee(c - 3, f), f <= c ? Ie(a, f, b) : a.G(b)) : Pe(a, b, c, d, e, Fe(f));
  }
  function Ve(a) {
    return null != a && (a.l & 64 || n === a.sb) ? G(a) ? rd(Sd(a)) : C(a) ? D(a) : We : a;
  }
  function Xe(a, b) {
    return !J.h(a, b);
  }
  function Ye(a) {
    return C(a) ? a : null;
  }
  function Ze(a) {
    this.Oc = a;
    this.l = 393216;
    this.F = 0;
  }
  l = Ze.prototype;
  l.Z = function(a, b) {
    return new Ze(b);
  };
  l.X = function() {
    return this.Oc;
  };
  l.da = function() {
    return false;
  };
  l.next = function() {
    return Error("No such element");
  };
  l.remove = function() {
    return Error("Unsupported operation");
  };
  var $e = {}, af = {};
  function bf(a) {
    this.zb = $e;
    this.cb = a;
  }
  bf.prototype.da = function() {
    this.zb === $e ? (this.zb = af, this.cb = C(this.cb)) : this.zb === this.cb && (this.cb = G(this.zb));
    return null != this.cb;
  };
  bf.prototype.next = function() {
    if (this.da()) return this.zb = this.cb, D(this.cb);
    throw Error("No such element");
  };
  bf.prototype.remove = function() {
    return Error("Unsupported operation");
  };
  function cf(a, b) {
    for (; ; ) {
      if (null == C(b)) return true;
      var c = D(b);
      c = a.g ? a.g(c) : a.call(null, c);
      if (u(c)) b = G(b);
      else return false;
    }
  }
  function df(a, b) {
    for (; ; ) if (b = C(b)) {
      var c = D(b);
      c = a.g ? a.g(c) : a.call(null, c);
      if (u(c)) return c;
      b = G(b);
    } else return null;
  }
  function ef(a) {
    if (Ld(a)) return 0 === (a & 1);
    throw Error(["Argument must be an integer: ", w.g(a)].join(""));
  }
  function ff(a) {
    return (function() {
      function b(g, h) {
        return Ba(a.h ? a.h(g, h) : a.call(null, g, h));
      }
      function c(g) {
        return Ba(a.g ? a.g(g) : a.call(null, g));
      }
      function d() {
        return Ba(a.v ? a.v() : a.call(null));
      }
      var e = null, f = (function() {
        function g(k, m, p) {
          var q = null;
          if (2 < arguments.length) {
            q = 0;
            for (var t = Array(arguments.length - 2); q < t.length; ) t[q] = arguments[q + 2], ++q;
            q = new Ac(t, 0, null);
          }
          return h.call(this, k, m, q);
        }
        function h(k, m, p) {
          return Ba(Se(a, k, m, p));
        }
        g.J = 2;
        g.G = function(k) {
          var m = D(k);
          k = G(k);
          var p = D(k);
          k = F(k);
          return h(m, p, k);
        };
        g.u = h;
        return g;
      })();
      e = function(g, h, k) {
        switch (arguments.length) {
          case 0:
            return d.call(this);
          case 1:
            return c.call(this, g);
          case 2:
            return b.call(this, g, h);
          default:
            var m = null;
            if (2 < arguments.length) {
              m = 0;
              for (var p = Array(arguments.length - 2); m < p.length; ) p[m] = arguments[m + 2], ++m;
              m = new Ac(p, 0, null);
            }
            return f.u(g, h, m);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      e.J = 2;
      e.G = f.G;
      e.v = d;
      e.g = c;
      e.h = b;
      e.u = f.u;
      return e;
    })();
  }
  var gf = function gf2(a) {
    switch (arguments.length) {
      case 0:
        return gf2.v();
      case 1:
        return gf2.g(arguments[0]);
      case 2:
        return gf2.h(arguments[0], arguments[1]);
      case 3:
        return gf2.i(arguments[0], arguments[1], arguments[2]);
      default:
        for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
        else break;
        return gf2.u(arguments[0], arguments[1], arguments[2], 3 < c.length ? new Ac(c.slice(3), 0, null) : null);
    }
  };
  gf.v = function() {
    return be;
  };
  gf.g = function(a) {
    return a;
  };
  gf.h = function(a, b) {
    return (function() {
      function c(k, m, p) {
        k = b.i ? b.i(k, m, p) : b.call(null, k, m, p);
        return a.g ? a.g(k) : a.call(null, k);
      }
      function d(k, m) {
        k = b.h ? b.h(k, m) : b.call(null, k, m);
        return a.g ? a.g(k) : a.call(null, k);
      }
      function e(k) {
        k = b.g ? b.g(k) : b.call(null, k);
        return a.g ? a.g(k) : a.call(null, k);
      }
      function f() {
        var k = b.v ? b.v() : b.call(null);
        return a.g ? a.g(k) : a.call(null, k);
      }
      var g = null, h = (function() {
        function k(p, q, t, v) {
          var A = null;
          if (3 < arguments.length) {
            A = 0;
            for (var E = Array(arguments.length - 3); A < E.length; ) E[A] = arguments[A + 3], ++A;
            A = new Ac(E, 0, null);
          }
          return m.call(this, p, q, t, A);
        }
        function m(p, q, t, v) {
          p = Te(b, p, q, t, v);
          return a.g ? a.g(p) : a.call(null, p);
        }
        k.J = 3;
        k.G = function(p) {
          var q = D(p);
          p = G(p);
          var t = D(p);
          p = G(p);
          var v = D(p);
          p = F(p);
          return m(q, t, v, p);
        };
        k.u = m;
        return k;
      })();
      g = function(k, m, p, q) {
        switch (arguments.length) {
          case 0:
            return f.call(this);
          case 1:
            return e.call(this, k);
          case 2:
            return d.call(this, k, m);
          case 3:
            return c.call(this, k, m, p);
          default:
            var t = null;
            if (3 < arguments.length) {
              t = 0;
              for (var v = Array(arguments.length - 3); t < v.length; ) v[t] = arguments[t + 3], ++t;
              t = new Ac(v, 0, null);
            }
            return h.u(k, m, p, t);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      g.J = 3;
      g.G = h.G;
      g.v = f;
      g.g = e;
      g.h = d;
      g.i = c;
      g.u = h.u;
      return g;
    })();
  };
  gf.i = function(a, b, c) {
    return (function() {
      function d(m, p, q) {
        m = c.i ? c.i(m, p, q) : c.call(null, m, p, q);
        m = b.g ? b.g(m) : b.call(null, m);
        return a.g ? a.g(m) : a.call(null, m);
      }
      function e(m, p) {
        m = c.h ? c.h(m, p) : c.call(null, m, p);
        m = b.g ? b.g(m) : b.call(null, m);
        return a.g ? a.g(m) : a.call(null, m);
      }
      function f(m) {
        m = c.g ? c.g(m) : c.call(null, m);
        m = b.g ? b.g(m) : b.call(null, m);
        return a.g ? a.g(m) : a.call(null, m);
      }
      function g() {
        var m = c.v ? c.v() : c.call(null);
        m = b.g ? b.g(m) : b.call(null, m);
        return a.g ? a.g(m) : a.call(null, m);
      }
      var h = null, k = (function() {
        function m(q, t, v, A) {
          var E = null;
          if (3 < arguments.length) {
            E = 0;
            for (var B = Array(arguments.length - 3); E < B.length; ) B[E] = arguments[E + 3], ++E;
            E = new Ac(B, 0, null);
          }
          return p.call(this, q, t, v, E);
        }
        function p(q, t, v, A) {
          q = Te(c, q, t, v, A);
          q = b.g ? b.g(q) : b.call(null, q);
          return a.g ? a.g(q) : a.call(null, q);
        }
        m.J = 3;
        m.G = function(q) {
          var t = D(q);
          q = G(q);
          var v = D(q);
          q = G(q);
          var A = D(q);
          q = F(q);
          return p(t, v, A, q);
        };
        m.u = p;
        return m;
      })();
      h = function(m, p, q, t) {
        switch (arguments.length) {
          case 0:
            return g.call(this);
          case 1:
            return f.call(this, m);
          case 2:
            return e.call(
              this,
              m,
              p
            );
          case 3:
            return d.call(this, m, p, q);
          default:
            var v = null;
            if (3 < arguments.length) {
              v = 0;
              for (var A = Array(arguments.length - 3); v < A.length; ) A[v] = arguments[v + 3], ++v;
              v = new Ac(A, 0, null);
            }
            return k.u(m, p, q, v);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      h.J = 3;
      h.G = k.G;
      h.v = g;
      h.g = f;
      h.h = e;
      h.i = d;
      h.u = k.u;
      return h;
    })();
  };
  gf.u = function(a, b, c, d) {
    var e = oe(ed(a, ed(b, ed(c, d))));
    return (function() {
      function f(h) {
        var k = null;
        if (0 < arguments.length) {
          k = 0;
          for (var m = Array(arguments.length - 0); k < m.length; ) m[k] = arguments[k + 0], ++k;
          k = new Ac(m, 0, null);
        }
        return g.call(this, k);
      }
      function g(h) {
        h = Qe(D(e), h);
        for (var k = G(e); ; ) if (k) {
          var m = D(k);
          h = m.g ? m.g(h) : m.call(null, h);
          k = G(k);
        } else return h;
      }
      f.J = 0;
      f.G = function(h) {
        h = C(h);
        return g(h);
      };
      f.u = g;
      return f;
    })();
  };
  gf.G = function(a) {
    var b = D(a), c = G(a);
    a = D(c);
    var d = G(c);
    c = D(d);
    d = G(d);
    return this.u(b, a, c, d);
  };
  gf.J = 3;
  function jf(a, b) {
    return (function() {
      function c(k, m, p) {
        return a.B ? a.B(b, k, m, p) : a.call(null, b, k, m, p);
      }
      function d(k, m) {
        return a.i ? a.i(b, k, m) : a.call(null, b, k, m);
      }
      function e(k) {
        return a.h ? a.h(b, k) : a.call(null, b, k);
      }
      function f() {
        return a.g ? a.g(b) : a.call(null, b);
      }
      var g = null, h = (function() {
        function k(p, q, t, v) {
          var A = null;
          if (3 < arguments.length) {
            A = 0;
            for (var E = Array(arguments.length - 3); A < E.length; ) E[A] = arguments[A + 3], ++A;
            A = new Ac(E, 0, null);
          }
          return m.call(this, p, q, t, A);
        }
        function m(p, q, t, v) {
          return Ue(a, b, p, q, t, fd([v]));
        }
        k.J = 3;
        k.G = function(p) {
          var q = D(p);
          p = G(p);
          var t = D(p);
          p = G(p);
          var v = D(p);
          p = F(p);
          return m(q, t, v, p);
        };
        k.u = m;
        return k;
      })();
      g = function(k, m, p, q) {
        switch (arguments.length) {
          case 0:
            return f.call(this);
          case 1:
            return e.call(this, k);
          case 2:
            return d.call(this, k, m);
          case 3:
            return c.call(this, k, m, p);
          default:
            var t = null;
            if (3 < arguments.length) {
              t = 0;
              for (var v = Array(arguments.length - 3); t < v.length; ) v[t] = arguments[t + 3], ++t;
              t = new Ac(v, 0, null);
            }
            return h.u(k, m, p, t);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      g.J = 3;
      g.G = h.G;
      g.v = f;
      g.g = e;
      g.h = d;
      g.i = c;
      g.u = h.u;
      return g;
    })();
  }
  function kf(a, b, c) {
    var d = lf;
    return (function() {
      function e(p, q, t) {
        return d.qa ? d.qa(a, b, c, p, q, t) : d.call(null, a, b, c, p, q, t);
      }
      function f(p, q) {
        return d.O ? d.O(a, b, c, p, q) : d.call(null, a, b, c, p, q);
      }
      function g(p) {
        return d.B ? d.B(a, b, c, p) : d.call(null, a, b, c, p);
      }
      function h() {
        return d.i ? d.i(a, b, c) : d.call(null, a, b, c);
      }
      var k = null, m = (function() {
        function p(t, v, A, E) {
          var B = null;
          if (3 < arguments.length) {
            B = 0;
            for (var I = Array(arguments.length - 3); B < I.length; ) I[B] = arguments[B + 3], ++B;
            B = new Ac(I, 0, null);
          }
          return q.call(this, t, v, A, B);
        }
        function q(t, v, A, E) {
          return Ue(d, a, b, c, t, fd([v, A, E]));
        }
        p.J = 3;
        p.G = function(t) {
          var v = D(t);
          t = G(t);
          var A = D(t);
          t = G(t);
          var E = D(t);
          t = F(t);
          return q(v, A, E, t);
        };
        p.u = q;
        return p;
      })();
      k = function(p, q, t, v) {
        switch (arguments.length) {
          case 0:
            return h.call(this);
          case 1:
            return g.call(this, p);
          case 2:
            return f.call(this, p, q);
          case 3:
            return e.call(this, p, q, t);
          default:
            var A = null;
            if (3 < arguments.length) {
              A = 0;
              for (var E = Array(arguments.length - 3); A < E.length; ) E[A] = arguments[A + 3], ++A;
              A = new Ac(E, 0, null);
            }
            return m.u(p, q, t, A);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      k.J = 3;
      k.G = m.G;
      k.v = h;
      k.g = g;
      k.h = f;
      k.i = e;
      k.u = m.u;
      return k;
    })();
  }
  function mf(a) {
    return function(b) {
      return (function() {
        function c(g, h) {
          h = a.g ? a.g(h) : a.call(null, h);
          return null == h ? g : b.h ? b.h(g, h) : b.call(null, g, h);
        }
        function d(g) {
          return b.g ? b.g(g) : b.call(null, g);
        }
        function e() {
          return b.v ? b.v() : b.call(null);
        }
        var f = null;
        f = function(g, h) {
          switch (arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return d.call(this, g);
            case 2:
              return c.call(this, g, h);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.v = e;
        f.g = d;
        f.h = c;
        return f;
      })();
    };
  }
  function nf(a, b) {
    return new ve(null, function() {
      var c = C(b);
      if (c) {
        if (Gd(c)) {
          for (var d = Vb(c), e = K(d), f = ze(e), g = 0; ; ) if (g < e) {
            var h = (function() {
              var k = Ua(d, g);
              return a.g ? a.g(k) : a.call(null, k);
            })();
            null != h && f.add(h);
            g += 1;
          } else break;
          return Be(De(f), nf(a, Wb(c)));
        }
        e = (function() {
          var k = D(c);
          return a.g ? a.g(k) : a.call(null, k);
        })();
        return null == e ? nf(a, F(c)) : ed(e, nf(a, F(c)));
      }
      return null;
    }, null, null);
  }
  function of(a) {
    this.state = a;
    this.oc = this.Rc = this.o = null;
    this.F = 16386;
    this.l = 6455296;
  }
  of.prototype.S = function(a, b) {
    return this === b;
  };
  of.prototype.ka = function() {
    return this.state;
  };
  of.prototype.X = function() {
    return this.o;
  };
  of.prototype.T = function() {
    return ba(this);
  };
  function pf(a) {
    return new of(a);
  }
  function qf(a, b) {
    if (a instanceof of) {
      var c = a.Rc;
      if (null != c && !u(c.g ? c.g(b) : c.call(null, b))) throw Error("Validator rejected reference state");
      c = a.state;
      a.state = b;
      if (null != a.oc) a: for (var d = C(a.oc), e = null, f = 0, g = 0; ; ) if (g < f) {
        var h = e.H(null, g), k = N(h, 0, null);
        h = N(h, 1, null);
        h.B ? h.B(k, a, c, b) : h.call(null, k, a, c, b);
        g += 1;
      } else if (d = C(d)) Gd(d) ? (e = Vb(d), d = Wb(d), k = e, f = K(e), e = k) : (e = D(d), k = N(e, 0, null), h = N(e, 1, null), h.B ? h.B(k, a, c, b) : h.call(null, k, a, c, b), d = G(d), e = null, f = 0), g = 0;
      else break a;
      return b;
    }
    return Zb(a, b);
  }
  var rf = function rf2(a) {
    switch (arguments.length) {
      case 2:
        return rf2.h(arguments[0], arguments[1]);
      case 3:
        return rf2.i(arguments[0], arguments[1], arguments[2]);
      case 4:
        return rf2.B(arguments[0], arguments[1], arguments[2], arguments[3]);
      default:
        for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
        else break;
        return rf2.u(arguments[0], arguments[1], arguments[2], arguments[3], 4 < c.length ? new Ac(c.slice(4), 0, null) : null);
    }
  };
  rf.h = function(a, b) {
    if (a instanceof of) {
      var c = a.state;
      b = b.g ? b.g(c) : b.call(null, c);
      a = qf(a, b);
    } else a = $b(a, b);
    return a;
  };
  rf.i = function(a, b, c) {
    if (a instanceof of) {
      var d = a.state;
      b = b.h ? b.h(d, c) : b.call(null, d, c);
      a = qf(a, b);
    } else a = $b(a, b, c);
    return a;
  };
  rf.B = function(a, b, c, d) {
    if (a instanceof of) {
      var e = a.state;
      b = b.i ? b.i(e, c, d) : b.call(null, e, c, d);
      a = qf(a, b);
    } else a = $b(a, b, c, d);
    return a;
  };
  rf.u = function(a, b, c, d, e) {
    return a instanceof of ? qf(a, Te(b, a.state, c, d, e)) : $b(a, b, c, d, e);
  };
  rf.G = function(a) {
    var b = D(a), c = G(a);
    a = D(c);
    var d = G(c);
    c = D(d);
    var e = G(d);
    d = D(e);
    e = G(e);
    return this.u(b, a, c, d, e);
  };
  rf.J = 4;
  function sf(a) {
    this.state = a;
    this.l = 32768;
    this.F = 0;
  }
  sf.prototype.ma = function(a, b) {
    return this.state = b;
  };
  sf.prototype.ka = function() {
    return this.state;
  };
  function tf(a) {
    return new sf(a);
  }
  function uf(a, b) {
    return (function f(d, e) {
      return new ve(null, function() {
        var g = C(e);
        if (g) {
          if (Gd(g)) {
            for (var h = Vb(g), k = K(h), m = ze(k), p = 0; ; ) if (p < k) {
              var q = (function() {
                var t = d + p, v = Ua(h, p);
                return a.h ? a.h(t, v) : a.call(null, t, v);
              })();
              null != q && m.add(q);
              p += 1;
            } else break;
            return Be(De(m), f(d + k, Wb(g)));
          }
          k = (function() {
            var t = D(g);
            return a.h ? a.h(d, t) : a.call(null, d, t);
          })();
          return null == k ? f(d + 1, F(g)) : ed(k, f(d + 1, F(g)));
        }
        return null;
      }, null, null);
    })(0, b);
  }
  var vf = function vf2(a) {
    switch (arguments.length) {
      case 1:
        return vf2.g(arguments[0]);
      case 2:
        return vf2.h(arguments[0], arguments[1]);
      case 3:
        return vf2.i(arguments[0], arguments[1], arguments[2]);
      case 4:
        return vf2.B(arguments[0], arguments[1], arguments[2], arguments[3]);
      default:
        for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
        else break;
        return vf2.u(arguments[0], arguments[1], arguments[2], arguments[3], 4 < c.length ? new Ac(c.slice(4), 0, null) : null);
    }
  };
  vf.g = function(a) {
    return function(b) {
      return (function() {
        function c(h, k) {
          k = a.g ? a.g(k) : a.call(null, k);
          return b.h ? b.h(h, k) : b.call(null, h, k);
        }
        function d(h) {
          return b.g ? b.g(h) : b.call(null, h);
        }
        function e() {
          return b.v ? b.v() : b.call(null);
        }
        var f = null, g = (function() {
          function h(m, p, q) {
            var t = null;
            if (2 < arguments.length) {
              t = 0;
              for (var v = Array(arguments.length - 2); t < v.length; ) v[t] = arguments[t + 2], ++t;
              t = new Ac(v, 0, null);
            }
            return k.call(this, m, p, t);
          }
          function k(m, p, q) {
            p = Re(a, p, q);
            return b.h ? b.h(m, p) : b.call(null, m, p);
          }
          h.J = 2;
          h.G = function(m) {
            var p = D(m);
            m = G(m);
            var q = D(m);
            m = F(m);
            return k(p, q, m);
          };
          h.u = k;
          return h;
        })();
        f = function(h, k, m) {
          switch (arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return d.call(this, h);
            case 2:
              return c.call(this, h, k);
            default:
              var p = null;
              if (2 < arguments.length) {
                p = 0;
                for (var q = Array(arguments.length - 2); p < q.length; ) q[p] = arguments[p + 2], ++p;
                p = new Ac(q, 0, null);
              }
              return g.u(h, k, p);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.J = 2;
        f.G = g.G;
        f.v = e;
        f.g = d;
        f.h = c;
        f.u = g.u;
        return f;
      })();
    };
  };
  vf.h = function(a, b) {
    return new ve(null, function() {
      var c = C(b);
      if (c) {
        if (Gd(c)) {
          for (var d = Vb(c), e = K(d), f = ze(e), g = 0; ; ) if (g < e) Ce(f, (function() {
            var h = Ua(d, g);
            return a.g ? a.g(h) : a.call(null, h);
          })()), g += 1;
          else break;
          return Be(De(f), vf.h(a, Wb(c)));
        }
        return ed((function() {
          var h = D(c);
          return a.g ? a.g(h) : a.call(null, h);
        })(), vf.h(a, F(c)));
      }
      return null;
    }, null, null);
  };
  vf.i = function(a, b, c) {
    return new ve(null, function() {
      var d = C(b), e = C(c);
      if (d && e) {
        var f = D(d);
        var g = D(e);
        f = a.h ? a.h(f, g) : a.call(null, f, g);
        d = ed(f, vf.i(a, F(d), F(e)));
      } else d = null;
      return d;
    }, null, null);
  };
  vf.B = function(a, b, c, d) {
    return new ve(null, function() {
      var e = C(b), f = C(c), g = C(d);
      if (e && f && g) {
        var h = D(e);
        var k = D(f), m = D(g);
        h = a.i ? a.i(h, k, m) : a.call(null, h, k, m);
        e = ed(h, vf.B(a, F(e), F(f), F(g)));
      } else e = null;
      return e;
    }, null, null);
  };
  vf.u = function(a, b, c, d, e) {
    return vf.h(function(f) {
      return Qe(a, f);
    }, (function h(g) {
      return new ve(null, function() {
        var k = vf.h(C, g);
        return cf(be, k) ? ed(vf.h(D, k), h(vf.h(F, k))) : null;
      }, null, null);
    })(M.u(e, d, fd([c, b]))));
  };
  vf.G = function(a) {
    var b = D(a), c = G(a);
    a = D(c);
    var d = G(c);
    c = D(d);
    var e = G(d);
    d = D(e);
    e = G(e);
    return this.u(b, a, c, d, e);
  };
  vf.J = 4;
  function wf(a, b) {
    return new ve(null, function() {
      if (0 < a) {
        var c = C(b);
        return c ? ed(D(c), wf(a - 1, F(c))) : null;
      }
      return null;
    }, null, null);
  }
  function xf(a, b) {
    if (null != b && (b.F & 262144 || n === b.Uc)) {
      var c = 0 < a ? b.Va(null, Math.ceil(a)) : C(b);
      return u(c) ? c : Cc;
    }
    return new ve(null, function() {
      a: for (var d = a, e = b; ; ) if (e = C(e), 0 < d && e) --d, e = F(e);
      else break a;
      return e;
    }, null, null);
  }
  function yf(a) {
    return vf.i(function(b) {
      return b;
    }, a, xf(2, a));
  }
  function zf(a, b) {
    return new ve(null, function() {
      a: for (var c = a, d = b; ; ) {
        d = C(d);
        var e;
        if (e = d) e = D(d), e = c.g ? c.g(e) : c.call(null, e);
        if (u(e)) d = F(d);
        else break a;
      }
      return d;
    }, null, null);
  }
  function Af(a, b, c, d) {
    this.o = a;
    this.count = b;
    this.I = c;
    this.next = d;
    this.A = null;
    this.l = 32374988;
    this.F = 262145;
  }
  l = Af.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, this.count);
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    return null == this.next ? 1 < this.count ? this.next = new Af(null, this.count - 1, this.I, null) : -1 === this.count ? this : null : this.next;
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ha = function(a, b) {
    if (-1 === this.count) for (var c = b.h ? b.h(this.I, this.I) : b.call(null, this.I, this.I); ; ) {
      if (Nc(c)) return x(c);
      c = b.h ? b.h(c, this.I) : b.call(null, c, this.I);
    }
    else for (a = 1, c = this.I; ; ) if (a < this.count) {
      c = b.h ? b.h(c, this.I) : b.call(null, c, this.I);
      if (Nc(c)) return x(c);
      a += 1;
    } else return c;
  };
  l.ia = function(a, b, c) {
    if (-1 === this.count) for (c = b.h ? b.h(c, this.I) : b.call(null, c, this.I); ; ) {
      if (Nc(c)) return x(c);
      c = b.h ? b.h(c, this.I) : b.call(null, c, this.I);
    }
    else for (a = 0; ; ) if (a < this.count) {
      c = b.h ? b.h(c, this.I) : b.call(null, c, this.I);
      if (Nc(c)) return x(c);
      a += 1;
    } else return c;
  };
  l.ca = function() {
    return this.I;
  };
  l.ea = function() {
    return null == this.next ? 1 < this.count ? this.next = new Af(null, this.count - 1, this.I, null) : -1 === this.count ? this : Cc : this.next;
  };
  l.R = function() {
    return this;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new Af(b, this.count, this.I, this.next);
  };
  l.aa = function(a, b) {
    return ed(b, this);
  };
  l.Va = function(a, b) {
    if (-1 === this.count) return this;
    a = this.count - b;
    return 0 < a ? new Af(null, a, this.I, null) : null;
  };
  function Bf(a, b) {
    return 0 < a ? new Af(null, a, b, null) : Cc;
  }
  var Cf = function Cf2(a) {
    switch (arguments.length) {
      case 0:
        return Cf2.v();
      case 1:
        return Cf2.g(arguments[0]);
      case 2:
        return Cf2.h(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
        else break;
        return Cf2.u(arguments[0], arguments[1], 2 < c.length ? new Ac(c.slice(2), 0, null) : null);
    }
  };
  Cf.v = function() {
    return Cc;
  };
  Cf.g = function(a) {
    return new ve(null, function() {
      return a;
    }, null, null);
  };
  Cf.h = function(a, b) {
    return new ve(null, function() {
      var c = C(a), d = C(b);
      return c && d ? ed(D(c), ed(D(d), Cf.h(F(c), F(d)))) : null;
    }, null, null);
  };
  Cf.u = function(a, b, c) {
    return new ve(null, function() {
      var d = vf.h(C, M.u(c, b, fd([a])));
      return cf(be, d) ? Ge.h(vf.h(D, d), Qe(Cf, vf.h(F, d))) : null;
    }, null, null);
  };
  Cf.G = function(a) {
    var b = D(a), c = G(a);
    a = D(c);
    c = G(c);
    return this.u(b, a, c);
  };
  Cf.J = 2;
  function Df(a, b) {
    return Qe(Ge, Re(vf, a, b));
  }
  function Ef(a) {
    return function(b) {
      return (function() {
        function c(g, h) {
          return u(a.g ? a.g(h) : a.call(null, h)) ? b.h ? b.h(g, h) : b.call(null, g, h) : g;
        }
        function d(g) {
          return b.g ? b.g(g) : b.call(null, g);
        }
        function e() {
          return b.v ? b.v() : b.call(null);
        }
        var f = null;
        f = function(g, h) {
          switch (arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return d.call(this, g);
            case 2:
              return c.call(this, g, h);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.v = e;
        f.g = d;
        f.h = c;
        return f;
      })();
    };
  }
  function Ff(a, b) {
    return new ve(null, function() {
      var c = C(b);
      if (c) {
        if (Gd(c)) {
          for (var d = Vb(c), e = K(d), f = ze(e), g = 0; ; ) if (g < e) {
            var h = Ua(d, g);
            h = a.g ? a.g(h) : a.call(null, h);
            if (u(h)) {
              h = f;
              var k = Ua(d, g);
              h.add(k);
            }
            g += 1;
          } else break;
          return Be(De(f), Ff(a, Wb(c)));
        }
        d = D(c);
        c = F(c);
        return u(a.g ? a.g(d) : a.call(null, d)) ? ed(d, Ff(a, c)) : Ff(a, c);
      }
      return null;
    }, null, null);
  }
  function Gf(a, b) {
    return Ff(ff(a), b);
  }
  function If(a) {
    var b = Jf, c = Jf;
    return (function f(e) {
      return new ve(null, function() {
        return ed(e, u(b.g ? b.g(e) : b.call(null, e)) ? Df(f, fd([c.g ? c.g(e) : c.call(null, e)])) : null);
      }, null, null);
    })(a);
  }
  var Kf = function Kf2(a) {
    switch (arguments.length) {
      case 0:
        return Kf2.v();
      case 1:
        return Kf2.g(arguments[0]);
      case 2:
        return Kf2.h(arguments[0], arguments[1]);
      case 3:
        return Kf2.i(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  };
  Kf.v = function() {
    return ld;
  };
  Kf.g = function(a) {
    return a;
  };
  Kf.h = function(a, b) {
    return null != a ? null != a && (a.F & 4 || n === a.rc) ? ub(Qb(Ka(Pb, Ob(a), b)), vd(a)) : Ka(Sa, a, b) : Ka(M, a, b);
  };
  Kf.i = function(a, b, c) {
    if (null != a && (a.F & 4 || n === a.rc)) {
      var d = vd(a);
      return ce(b, (function() {
        function e(g) {
          return ub(Qb(g), d);
        }
        var f = null;
        f = function(g, h) {
          switch (arguments.length) {
            case 1:
              return e.call(this, g);
            case 2:
              return Pb(g, h);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.g = e;
        f.h = function(g, h) {
          return Pb(g, h);
        };
        return f;
      })(), Ob(a), c);
    }
    return ce(b, M, a, c);
  };
  Kf.J = 3;
  function Lf(a, b) {
    return Qb(Ka(function(c, d) {
      d = a.g ? a.g(d) : a.call(null, d);
      return Pb(c, d);
    }, Ob(ld), b));
  }
  function Mf(a, b, c) {
    return Kf.h(ld, vf.i(a, b, c));
  }
  function Nf(a, b) {
    return Qb(Ka(function(c, d) {
      return u(a.g ? a.g(d) : a.call(null, d)) ? Pb(c, d) : c;
    }, Ob(ld), b));
  }
  function Of(a, b, c) {
    return new ve(null, function() {
      var d = C(c);
      if (d) {
        var e = wf(a, d);
        return a === K(e) ? ed(e, Of(a, b, xf(b, d))) : null;
      }
      return null;
    }, null, null);
  }
  function Pf(a, b) {
    for (b = C(b); ; ) {
      if (null == b) return a;
      a = y(a, D(b));
      b = G(b);
    }
  }
  var Qf = function Qf2(a, b, c) {
    var e = C(b);
    b = D(e);
    var f = G(e);
    if (f) {
      e = qd.i;
      var g = y(a, b);
      c = Qf2.i ? Qf2.i(g, f, c) : Qf2.call(null, g, f, c);
      a = e.call(qd, a, b, c);
    } else a = qd.i(a, b, c);
    return a;
  }, Rf = function Rf2(a) {
    switch (arguments.length) {
      case 3:
        return Rf2.i(arguments[0], arguments[1], arguments[2]);
      case 4:
        return Rf2.B(arguments[0], arguments[1], arguments[2], arguments[3]);
      case 5:
        return Rf2.O(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
      case 6:
        return Rf2.qa(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5]
        );
      default:
        for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
        else break;
        return Rf2.u(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], 6 < c.length ? new Ac(c.slice(6), 0, null) : null);
    }
  };
  Rf.i = function(a, b, c) {
    var d = qd.i, e = y(a, b);
    c = c.g ? c.g(e) : c.call(null, e);
    return d.call(qd, a, b, c);
  };
  Rf.B = function(a, b, c, d) {
    var e = qd.i, f = y(a, b);
    c = c.h ? c.h(f, d) : c.call(null, f, d);
    return e.call(qd, a, b, c);
  };
  Rf.O = function(a, b, c, d, e) {
    var f = qd.i, g = y(a, b);
    c = c.i ? c.i(g, d, e) : c.call(null, g, d, e);
    return f.call(qd, a, b, c);
  };
  Rf.qa = function(a, b, c, d, e, f) {
    var g = qd.i, h = y(a, b);
    c = c.B ? c.B(h, d, e, f) : c.call(null, h, d, e, f);
    return g.call(qd, a, b, c);
  };
  Rf.u = function(a, b, c, d, e, f, g) {
    return qd.i(a, b, Ue(c, y(a, b), d, e, f, fd([g])));
  };
  Rf.G = function(a) {
    var b = D(a), c = G(a);
    a = D(c);
    var d = G(c);
    c = D(d);
    var e = G(d);
    d = D(e);
    var f = G(e);
    e = D(f);
    var g = G(f);
    f = D(g);
    g = G(g);
    return this.u(b, a, c, d, e, f, g);
  };
  Rf.J = 6;
  function Sf(a, b) {
    this.W = a;
    this.j = b;
  }
  function Tf(a) {
    return new Sf(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
  }
  function Uf(a) {
    return new Sf(a.W, Ia(a.j));
  }
  function Vf(a) {
    a = a.m;
    return 32 > a ? 0 : a - 1 >>> 5 << 5;
  }
  function Wf(a, b, c) {
    for (; ; ) {
      if (0 === b) return c;
      var d = Tf(a);
      d.j[0] = c;
      c = d;
      b -= 5;
    }
  }
  var Xf = function Xf2(a, b, c, d) {
    var f = Uf(c), g = a.m - 1 >>> b & 31;
    5 === b ? f.j[g] = d : (c = c.j[g], null != c ? (b -= 5, a = Xf2.B ? Xf2.B(a, b, c, d) : Xf2.call(null, a, b, c, d)) : a = Wf(null, b - 5, d), f.j[g] = a);
    return f;
  };
  function Yf(a, b) {
    throw Error(["No item ", w.g(a), " in vector of length ", w.g(b)].join(""));
  }
  function Zf(a, b) {
    if (b >= Vf(a)) return a.pa;
    var c = a.root;
    for (a = a.shift; ; ) if (0 < a) {
      var d = a - 5;
      c = c.j[b >>> a & 31];
      a = d;
    } else return c.j;
  }
  function $f(a, b) {
    return 0 <= b && b < a.m ? Zf(a, b) : Yf(b, a.m);
  }
  var ag = function ag2(a, b, c, d, e) {
    var g = Uf(c);
    if (0 === b) g.j[d & 31] = e;
    else {
      var h = d >>> b & 31;
      b -= 5;
      c = c.j[h];
      a = ag2.O ? ag2.O(a, b, c, d, e) : ag2.call(null, a, b, c, d, e);
      g.j[h] = a;
    }
    return g;
  }, bg = function bg2(a, b, c) {
    var e = a.m - 2 >>> b & 31;
    if (5 < b) {
      b -= 5;
      var f = c.j[e];
      a = bg2.i ? bg2.i(a, b, f) : bg2.call(null, a, b, f);
      if (null == a && 0 === e) return null;
      c = Uf(c);
      c.j[e] = a;
      return c;
    }
    if (0 === e) return null;
    c = Uf(c);
    c.j[e] = null;
    return c;
  };
  function cg(a, b, c, d, e, f) {
    this.s = a;
    this.Xb = b;
    this.j = c;
    this.fa = d;
    this.start = e;
    this.end = f;
  }
  cg.prototype.da = function() {
    return this.s < this.end;
  };
  cg.prototype.next = function() {
    32 === this.s - this.Xb && (this.j = Zf(this.fa, this.s), this.Xb += 32);
    var a = this.j[this.s & 31];
    this.s += 1;
    return a;
  };
  function dg(a, b, c) {
    return new cg(b, b - b % 32, b < K(a) ? Zf(a, b) : null, a, b, c);
  }
  function eg(a, b, c, d) {
    return c < d ? fg(a, b, Yc(a, c), c + 1, d) : b.v ? b.v() : b.call(null);
  }
  function fg(a, b, c, d, e) {
    var f = c;
    c = d;
    for (d = Zf(a, d); ; ) if (c < e) {
      var g = c & 31;
      d = 0 === g ? Zf(a, c) : d;
      g = d[g];
      f = b.h ? b.h(f, g) : b.call(null, f, g);
      if (Nc(f)) return x(f);
      c += 1;
    } else return f;
  }
  function P(a, b, c, d, e, f) {
    this.o = a;
    this.m = b;
    this.shift = c;
    this.root = d;
    this.pa = e;
    this.A = f;
    this.l = 167666463;
    this.F = 401412;
  }
  l = P.prototype;
  l.rb = function(a, b) {
    return 0 <= b && b < this.m ? new gg(b, Zf(this, b)[b & 31]) : null;
  };
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.sa = function(a, b) {
    return this.V(null, b, null);
  };
  l.V = function(a, b, c) {
    return "number" === typeof b ? this.ra(null, b, c) : c;
  };
  l.Cb = function(a, b, c) {
    a = 0;
    for (var d = c; ; ) if (a < this.m) {
      var e = Zf(this, a);
      c = e.length;
      a: for (var f = 0; ; ) if (f < c) {
        var g = f + a, h = e[f];
        d = b.i ? b.i(d, g, h) : b.call(null, d, g, h);
        if (Nc(d)) {
          e = d;
          break a;
        }
        f += 1;
      } else {
        e = d;
        break a;
      }
      if (Nc(e)) return x(e);
      a += c;
      d = e;
    } else return d;
  };
  l.Zb = n;
  l.H = function(a, b) {
    return $f(this, b)[b & 31];
  };
  l.ra = function(a, b, c) {
    return 0 <= b && b < this.m ? Zf(this, b)[b & 31] : c;
  };
  l.ib = function(a, b, c) {
    if (0 <= b && b < this.m) return Vf(this) <= b ? (a = Ia(this.pa), a[b & 31] = c, new P(this.o, this.m, this.shift, this.root, a, null)) : new P(this.o, this.m, this.shift, ag(this, this.shift, this.root, b, c), this.pa, null);
    if (b === this.m) return this.aa(null, c);
    throw Error(["Index ", w.g(b), " out of bounds  [0,", w.g(this.m), "]"].join(""));
  };
  l.xa = function() {
    return dg(this, 0, this.m);
  };
  l.X = function() {
    return this.o;
  };
  l.U = function() {
    return this.m;
  };
  l.gb = function() {
    return 0 < this.m ? this.H(null, this.m - 1) : null;
  };
  l.hb = function() {
    if (0 === this.m) throw Error("Can't pop empty vector");
    if (1 === this.m) return ub(ld, this.o);
    if (1 < this.m - Vf(this)) return new P(this.o, this.m - 1, this.shift, this.root, this.pa.slice(0, -1), null);
    var a = Zf(this, this.m - 2), b = bg(this, this.shift, this.root);
    b = null == b ? R : b;
    var c = this.m - 1;
    return 5 < this.shift && null == b.j[1] ? new P(this.o, c, this.shift - 5, b.j[0], a, null) : new P(this.o, c, this.shift, b, a, null);
  };
  l.Gb = function() {
    return 0 < this.m ? new bd(this, this.m - 1, null) : null;
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    if (b instanceof P) if (this.m === K(b)) for (a = this.xa(null), b = b.xa(null); ; ) if (a.da()) {
      var c = a.next(), d = b.next();
      if (!J.h(c, d)) return false;
    } else return true;
    else return false;
    else return cd(this, b);
  };
  l.qb = function() {
    return new hg(this.m, this.shift, ig.g ? ig.g(this.root) : ig.call(null, this.root), jg.g ? jg.g(this.pa) : jg.call(null, this.pa));
  };
  l.$ = function() {
    return ub(ld, this.o);
  };
  l.ha = function(a, b) {
    return eg(this, b, 0, this.m);
  };
  l.ia = function(a, b, c) {
    a = 0;
    for (var d = c; ; ) if (a < this.m) {
      var e = Zf(this, a);
      c = e.length;
      a: for (var f = 0; ; ) if (f < c) {
        var g = e[f];
        d = b.h ? b.h(d, g) : b.call(null, d, g);
        if (Nc(d)) {
          e = d;
          break a;
        }
        f += 1;
      } else {
        e = d;
        break a;
      }
      if (Nc(e)) return x(e);
      a += c;
      d = e;
    } else return d;
  };
  l.Ua = function(a, b, c) {
    if ("number" === typeof b) return this.ib(null, b, c);
    throw Error("Vector's key for assoc must be a number.");
  };
  l.fb = function(a, b) {
    return Ld(b) ? 0 <= b && b < this.m : false;
  };
  l.R = function() {
    if (0 === this.m) return null;
    if (32 >= this.m) return new Ac(this.pa, 0, null);
    a: {
      var a = this.root;
      for (var b = this.shift; ; ) if (0 < b) b -= 5, a = a.j[0];
      else {
        a = a.j;
        break a;
      }
    }
    return kg ? kg(this, a, 0, 0) : lg.call(null, this, a, 0, 0);
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new P(b, this.m, this.shift, this.root, this.pa, this.A);
  };
  l.aa = function(a, b) {
    if (32 > this.m - Vf(this)) {
      a = this.pa.length;
      for (var c = Array(a + 1), d = 0; ; ) if (d < a) c[d] = this.pa[d], d += 1;
      else break;
      c[a] = b;
      return new P(this.o, this.m + 1, this.shift, this.root, c, null);
    }
    a = (c = this.m >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
    c ? (c = Tf(null), c.j[0] = this.root, d = Wf(null, this.shift, new Sf(null, this.pa)), c.j[1] = d) : c = Xf(this, this.shift, this.root, new Sf(null, this.pa));
    return new P(this.o, this.m + 1, a, c, [b], null);
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.g = function(a) {
    if ("number" === typeof a) return this.H(null, a);
    throw Error("Key must be integer");
  };
  l.Va = function(a, b) {
    if (b < this.m) {
      a = b % 32;
      var c = Zf(this, b);
      b -= a;
      return kg ? kg(this, c, b, a) : lg.call(null, this, c, b, a);
    }
    return null;
  };
  var R = new Sf(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), ld = new P(null, 0, 5, R, [], Hc);
  function mg(a) {
    var b = a.length;
    if (32 > b) return new P(null, b, 5, R, a, null);
    for (var c = 32, d = new P(null, 32, 5, R, a.slice(0, 32), null).qb(null); ; ) if (c < b) {
      var e = c + 1;
      d = Pb(d, a[c]);
      c = e;
    } else return Qb(d);
  }
  P.prototype[Ha] = function() {
    return Ec(this);
  };
  function ng(a) {
    return u(og.g ? og.g(a) : og.call(null, a)) ? new P(null, 2, 5, R, [pg.g ? pg.g(a) : pg.call(null, a), qg.g ? qg.g(a) : qg.call(null, a)], null) : Fd(a) ? ud(a, null) : Aa(a) ? mg(a) : Qb(Ka(Pb, Ob(ld), a));
  }
  function rg(a, b, c, d, e) {
    this.la = a;
    this.node = b;
    this.s = c;
    this.ja = d;
    this.o = e;
    this.A = null;
    this.l = 32375020;
    this.F = 263680;
  }
  l = rg.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    if (this.ja + 1 < this.node.length) {
      var a = this.la;
      var b = this.node, c = this.s, d = this.ja + 1;
      a = kg ? kg(a, b, c, d) : lg.call(null, a, b, c, d);
      return null == a ? null : a;
    }
    return this.Sb();
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ha = function(a, b) {
    return eg(this.la, b, this.s + this.ja, K(this.la));
  };
  l.ia = function(a, b, c) {
    return fg(this.la, b, c, this.s + this.ja, K(this.la));
  };
  l.ca = function() {
    return this.node[this.ja];
  };
  l.ea = function() {
    if (this.ja + 1 < this.node.length) {
      var a = this.la;
      var b = this.node, c = this.s, d = this.ja + 1;
      a = kg ? kg(a, b, c, d) : lg.call(null, a, b, c, d);
      return null == a ? Cc : a;
    }
    return this.Ya(null);
  };
  l.R = function() {
    return this;
  };
  l.Ab = function() {
    var a = this.node;
    return new ye(a, this.ja, a.length);
  };
  l.Ya = function() {
    var a = this.s + this.node.length;
    if (a < Na(this.la)) {
      var b = this.la, c = Zf(this.la, a);
      return kg ? kg(b, c, a, 0) : lg.call(null, b, c, a, 0);
    }
    return Cc;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : sg ? sg(this.la, this.node, this.s, this.ja, b) : lg.call(null, this.la, this.node, this.s, this.ja, b);
  };
  l.aa = function(a, b) {
    return ed(b, this);
  };
  l.Va = function(a, b) {
    a = this.ja + b;
    if (a < this.node.length) return kg ? kg(this.la, this.node, this.s, a) : lg.call(null, this.la, this.node, this.s, a);
    var c = this.s + a;
    if (c < Na(this.la)) {
      a = c % 32;
      b = this.la;
      var d = Zf(this.la, c);
      c -= a;
      return kg ? kg(b, d, c, a) : lg.call(null, b, d, c, a);
    }
    return null;
  };
  l.Sb = function() {
    var a = this.s + this.node.length;
    if (a < Na(this.la)) {
      var b = this.la, c = Zf(this.la, a);
      return kg ? kg(b, c, a, 0) : lg.call(null, b, c, a, 0);
    }
    return null;
  };
  rg.prototype[Ha] = function() {
    return Ec(this);
  };
  function lg(a) {
    switch (arguments.length) {
      case 3:
        var b = arguments[0], c = arguments[1], d = arguments[2];
        return new rg(b, $f(b, c), c, d, null);
      case 4:
        return kg(arguments[0], arguments[1], arguments[2], arguments[3]);
      case 5:
        return sg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  }
  function kg(a, b, c, d) {
    return new rg(a, b, c, d, null);
  }
  function sg(a, b, c, d, e) {
    return new rg(a, b, c, d, e);
  }
  function tg(a, b, c, d, e) {
    this.o = a;
    this.fa = b;
    this.start = c;
    this.end = d;
    this.A = e;
    this.l = 167666463;
    this.F = 139264;
  }
  l = tg.prototype;
  l.rb = function(a, b) {
    if (0 > b) return null;
    a = this.start + b;
    return a < this.end ? new gg(b, db(this.fa, a)) : null;
  };
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.sa = function(a, b) {
    return this.V(null, b, null);
  };
  l.V = function(a, b, c) {
    return "number" === typeof b ? this.ra(null, b, c) : c;
  };
  l.Cb = function(a, b, c) {
    a = this.start;
    for (var d = 0; ; ) if (a < this.end) {
      var e = d, f = Ua(this.fa, a);
      c = b.i ? b.i(c, e, f) : b.call(null, c, e, f);
      if (Nc(c)) return x(c);
      d += 1;
      a += 1;
    } else return c;
  };
  l.H = function(a, b) {
    return 0 > b || this.end <= this.start + b ? Yf(b, this.end - this.start) : Ua(this.fa, this.start + b);
  };
  l.ra = function(a, b, c) {
    return 0 > b || this.end <= this.start + b ? c : Ua(this.fa, this.start + b, c);
  };
  l.ib = function(a, b, c) {
    a = this.start + b;
    if (0 > b || this.end + 1 <= a) throw Error(["Index ", w.g(b), " out of bounds [0,", w.g(this.U(null)), "]"].join(""));
    b = this.o;
    c = qd.i(this.fa, a, c);
    var d = this.start, e = this.end;
    a += 1;
    a = e > a ? e : a;
    return ug.O ? ug.O(b, c, d, a, null) : ug.call(null, b, c, d, a, null);
  };
  l.xa = function() {
    return null != this.fa && n === this.fa.Zb ? dg(this.fa, this.start, this.end) : new bf(this);
  };
  l.X = function() {
    return this.o;
  };
  l.U = function() {
    return this.end - this.start;
  };
  l.gb = function() {
    return this.start === this.end ? null : Ua(this.fa, this.end - 1);
  };
  l.hb = function() {
    if (this.start === this.end) throw Error("Can't pop empty vector");
    var a = this.o, b = this.fa, c = this.start, d = this.end - 1;
    return ug.O ? ug.O(a, b, c, d, null) : ug.call(null, a, b, c, d, null);
  };
  l.Gb = function() {
    return this.start !== this.end ? new bd(this, this.end - this.start - 1, null) : null;
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return ub(ld, this.o);
  };
  l.ha = function(a, b) {
    return null != this.fa && n === this.fa.Zb ? eg(this.fa, b, this.start, this.end) : Pc(this, b);
  };
  l.ia = function(a, b, c) {
    return null != this.fa && n === this.fa.Zb ? fg(this.fa, b, c, this.start, this.end) : Qc(this, b, c);
  };
  l.Ua = function(a, b, c) {
    if ("number" === typeof b) return this.ib(null, b, c);
    throw Error("Subvec's key for assoc must be a number.");
  };
  l.fb = function(a, b) {
    return Ld(b) ? 0 <= b && b < this.end - this.start : false;
  };
  l.R = function() {
    var a = this;
    return (function d(c) {
      return c === a.end ? null : ed(Ua(a.fa, c), new ve(null, function() {
        return d(c + 1);
      }, null, null));
    })(a.start);
  };
  l.Z = function(a, b) {
    return b === this.o ? this : ug.O ? ug.O(b, this.fa, this.start, this.end, this.A) : ug.call(null, b, this.fa, this.start, this.end, this.A);
  };
  l.aa = function(a, b) {
    a = this.o;
    b = qb(this.fa, this.end, b);
    var c = this.start, d = this.end + 1;
    return ug.O ? ug.O(a, b, c, d, null) : ug.call(null, a, b, c, d, null);
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.g = function(a) {
    return this.H(null, a);
  };
  l.h = function(a, b) {
    return this.ra(null, a, b);
  };
  tg.prototype[Ha] = function() {
    return Ec(this);
  };
  function ug(a, b, c, d, e) {
    for (; ; ) if (b instanceof tg) c = b.start + c, d = b.start + d, b = b.fa;
    else {
      if (!Fd(b)) throw Error("v must satisfy IVector");
      if (0 > c || d < c || d > K(b)) throw Error("Index out of bounds");
      return new tg(a, b, c, d, e);
    }
  }
  function vg(a, b) {
    return a === b.W ? b : new Sf(a, Ia(b.j));
  }
  function ig(a) {
    return new Sf({}, Ia(a.j));
  }
  function jg(a) {
    var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
    Hd(a, 0, b, 0, a.length);
    return b;
  }
  var wg = function wg2(a, b, c, d) {
    c = vg(a.root.W, c);
    var f = a.m - 1 >>> b & 31;
    if (5 === b) a = d;
    else {
      var g = c.j[f];
      null != g ? (b -= 5, a = wg2.B ? wg2.B(a, b, g, d) : wg2.call(null, a, b, g, d)) : a = Wf(a.root.W, b - 5, d);
    }
    c.j[f] = a;
    return c;
  };
  function hg(a, b, c, d) {
    this.m = a;
    this.shift = b;
    this.root = c;
    this.pa = d;
    this.F = 88;
    this.l = 275;
  }
  l = hg.prototype;
  l.ub = function(a, b) {
    if (this.root.W) {
      if (32 > this.m - Vf(this)) this.pa[this.m & 31] = b;
      else {
        a = new Sf(this.root.W, this.pa);
        var c = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
        c[0] = b;
        this.pa = c;
        this.m >>> 5 > 1 << this.shift ? (b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], c = this.shift + 5, b[0] = this.root, b[1] = Wf(this.root.W, this.shift, a), this.root = new Sf(this.root.W, b), this.shift = c) : this.root = wg(this, this.shift, this.root, a);
      }
      this.m += 1;
      return this;
    }
    throw Error("conj! after persistent!");
  };
  l.Hb = function() {
    if (this.root.W) {
      this.root.W = null;
      var a = this.m - Vf(this), b = Array(a);
      Hd(this.pa, 0, b, 0, a);
      return new P(null, this.m, this.shift, this.root, b, null);
    }
    throw Error("persistent! called twice");
  };
  l.tb = function(a, b, c) {
    if ("number" === typeof b) return xg(this, b, c);
    throw Error("TransientVector's key for assoc! must be a number.");
  };
  function xg(a, b, c) {
    if (a.root.W) {
      if (0 <= b && b < a.m) {
        if (Vf(a) <= b) a.pa[b & 31] = c;
        else {
          var d = (function h(f, g) {
            g = vg(a.root.W, g);
            if (0 === f) g.j[b & 31] = c;
            else {
              var k = b >>> f & 31;
              f = h(f - 5, g.j[k]);
              g.j[k] = f;
            }
            return g;
          })(a.shift, a.root);
          a.root = d;
        }
        return a;
      }
      if (b === a.m) return a.ub(null, c);
      throw Error(["Index ", w.g(b), " out of bounds for TransientVector of length", w.g(a.m)].join(""));
    }
    throw Error("assoc! after persistent!");
  }
  l.U = function() {
    if (this.root.W) return this.m;
    throw Error("count after persistent!");
  };
  l.H = function(a, b) {
    if (this.root.W) return $f(this, b)[b & 31];
    throw Error("nth after persistent!");
  };
  l.ra = function(a, b, c) {
    return 0 <= b && b < this.m ? this.H(null, b) : c;
  };
  l.sa = function(a, b) {
    return this.V(null, b, null);
  };
  l.V = function(a, b, c) {
    if (this.root.W) return "number" === typeof b ? this.ra(null, b, c) : c;
    throw Error("lookup after persistent!");
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.g = function(a) {
    return this.sa(null, a);
  };
  l.h = function(a, b) {
    return this.V(null, a, b);
  };
  function yg(a, b) {
    this.wb = a;
    this.Ob = b;
  }
  yg.prototype.da = function() {
    var a = null != this.wb && C(this.wb);
    return a ? a : (a = null != this.Ob) ? this.Ob.da() : a;
  };
  yg.prototype.next = function() {
    if (null != this.wb) {
      var a = D(this.wb);
      this.wb = G(this.wb);
      return a;
    }
    if (null != this.Ob && this.Ob.da()) return this.Ob.next();
    throw Error("No such element");
  };
  yg.prototype.remove = function() {
    return Error("Unsupported operation");
  };
  function zg(a, b, c, d) {
    this.o = a;
    this.va = b;
    this.ya = c;
    this.A = d;
    this.l = 31850700;
    this.F = 0;
  }
  l = zg.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    var a = G(this.va);
    return a ? new zg(this.o, a, this.ya, null) : null != this.ya ? new zg(this.o, this.ya, null, null) : null;
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return ub(Cc, this.o);
  };
  l.ca = function() {
    return D(this.va);
  };
  l.ea = function() {
    var a = G(this.va);
    return a ? new zg(this.o, a, this.ya, null) : null == this.ya ? this.$(null) : new zg(this.o, this.ya, null, null);
  };
  l.R = function() {
    return this;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new zg(b, this.va, this.ya, this.A);
  };
  l.aa = function(a, b) {
    return ed(b, this);
  };
  zg.prototype[Ha] = function() {
    return Ec(this);
  };
  function Ag(a, b, c, d, e) {
    this.o = a;
    this.count = b;
    this.va = c;
    this.ya = d;
    this.A = e;
    this.F = 139264;
    this.l = 31858766;
  }
  l = Ag.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, this.count.g ? this.count.g(this) : this.count.call(null, this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.xa = function() {
    return new yg(this.va, dc(this.ya));
  };
  l.X = function() {
    return this.o;
  };
  l.U = function() {
    return this.count;
  };
  l.gb = function() {
    return D(this.va);
  };
  l.hb = function() {
    if (u(this.va)) {
      var a = G(this.va);
      return a ? new Ag(this.o, this.count - 1, a, this.ya, null) : new Ag(this.o, this.count - 1, C(this.ya), ld, null);
    }
    return this;
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return ub(Bg, this.o);
  };
  l.ca = function() {
    return D(this.va);
  };
  l.ea = function() {
    return F(C(this));
  };
  l.R = function() {
    var a = C(this.ya), b = this.va;
    return u(u(b) ? b : a) ? new zg(null, this.va, C(a), null) : null;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new Ag(b, this.count, this.va, this.ya, this.A);
  };
  l.aa = function(a, b) {
    u(this.va) ? (a = this.ya, b = new Ag(this.o, this.count + 1, this.va, M.h(u(a) ? a : ld, b), null)) : b = new Ag(this.o, this.count + 1, M.h(this.va, b), ld, null);
    return b;
  };
  var Bg = new Ag(null, 0, null, ld, Hc);
  Ag.prototype[Ha] = function() {
    return Ec(this);
  };
  function Cg() {
    this.l = 2097152;
    this.F = 0;
  }
  Cg.prototype.S = function() {
    return false;
  };
  var Dg = new Cg();
  function Eg(a, b) {
    return Kd(Cd(b) && !Ed(b) ? K(a) === K(b) ? (null != a ? a.l & 1048576 || n === a.wc || (a.l ? 0 : Da(yb, a)) : Da(yb, a)) ? ae(function(c, d, e) {
      return J.h(xc(b, d, Dg), e) ? true : new Mc(false);
    }, true, a) : cf(function(c) {
      return J.h(xc(b, D(c), Dg), jd(c));
    }, a) : null : null);
  }
  function Fg(a) {
    this.K = a;
  }
  Fg.prototype.next = function() {
    if (null != this.K) {
      var a = D(this.K), b = N(a, 0, null);
      a = N(a, 1, null);
      this.K = G(this.K);
      return { value: [b, a], done: false };
    }
    return { value: null, done: true };
  };
  function Gg(a) {
    this.K = a;
  }
  Gg.prototype.next = function() {
    if (null != this.K) {
      var a = D(this.K);
      this.K = G(this.K);
      return { value: [a, a], done: false };
    }
    return { value: null, done: true };
  };
  function Hg(a, b) {
    if (b instanceof z) a: {
      var c = a.length;
      b = b.M;
      for (var d = 0; ; ) {
        if (c <= d) {
          a = -1;
          break a;
        }
        if (a[d] instanceof z && b === a[d].M) {
          a = d;
          break a;
        }
        d += 2;
      }
    }
    else if ("string" === typeof b || "number" === typeof b) a: for (c = a.length, d = 0; ; ) {
      if (c <= d) {
        a = -1;
        break a;
      }
      if (b === a[d]) {
        a = d;
        break a;
      }
      d += 2;
    }
    else if (b instanceof vc) a: for (c = a.length, b = b.Ta, d = 0; ; ) {
      if (c <= d) {
        a = -1;
        break a;
      }
      if (a[d] instanceof vc && b === a[d].Ta) {
        a = d;
        break a;
      }
      d += 2;
    }
    else if (null == b) a: for (b = a.length, c = 0; ; ) {
      if (b <= c) {
        a = -1;
        break a;
      }
      if (null == a[c]) {
        a = c;
        break a;
      }
      c += 2;
    }
    else a: for (c = a.length, d = 0; ; ) {
      if (c <= d) {
        a = -1;
        break a;
      }
      if (J.h(b, a[d])) {
        a = d;
        break a;
      }
      d += 2;
    }
    return a;
  }
  function gg(a, b) {
    this.key = a;
    this.I = b;
    this.A = null;
    this.l = 166619935;
    this.F = 0;
  }
  l = gg.prototype;
  l.rb = function(a, b) {
    switch (b) {
      case 0:
        return new gg(0, this.key);
      case 1:
        return new gg(1, this.I);
      default:
        return null;
    }
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.sa = function(a, b) {
    return this.ra(null, b, null);
  };
  l.V = function(a, b, c) {
    return this.ra(null, b, c);
  };
  l.H = function(a, b) {
    if (0 === b) return this.key;
    if (1 === b) return this.I;
    throw Error("Index out of bounds");
  };
  l.ra = function(a, b, c) {
    return 0 === b ? this.key : 1 === b ? this.I : c;
  };
  l.ib = function(a, b, c) {
    return new P(null, 2, 5, R, [this.key, this.I], null).ib(null, b, c);
  };
  l.X = function() {
    return null;
  };
  l.U = function() {
    return 2;
  };
  l.yc = function() {
    return this.key;
  };
  l.zc = function() {
    return this.I;
  };
  l.gb = function() {
    return this.I;
  };
  l.hb = function() {
    return new P(null, 1, 5, R, [this.key], null);
  };
  l.Gb = function() {
    return new Ac([this.I, this.key], 0, null);
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return null;
  };
  l.ha = function(a, b) {
    return Pc(this, b);
  };
  l.ia = function(a, b, c) {
    return Qc(this, b, c);
  };
  l.Ua = function(a, b, c) {
    return qd.i(new P(null, 2, 5, R, [this.key, this.I], null), b, c);
  };
  l.fb = function(a, b) {
    return 0 === b || 1 === b;
  };
  l.R = function() {
    return new Ac([this.key, this.I], 0, null);
  };
  l.Z = function(a, b) {
    return ud(new P(null, 2, 5, R, [this.key, this.I], null), b);
  };
  l.aa = function(a, b) {
    return new P(null, 3, 5, R, [this.key, this.I, b], null);
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.g = function(a) {
    return this.H(null, a);
  };
  l.h = function(a, b) {
    return this.ra(null, a, b);
  };
  function og(a) {
    return null != a ? a.l & 2048 || n === a.$c ? true : false : false;
  }
  function Ig(a, b, c) {
    this.j = a;
    this.s = b;
    this.Sa = c;
    this.l = 32374990;
    this.F = 262144;
  }
  l = Ig.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.Sa;
  };
  l.ba = function() {
    return this.s < this.j.length - 2 ? new Ig(this.j, this.s + 2, null) : null;
  };
  l.U = function() {
    return (this.j.length - this.s) / 2;
  };
  l.T = function() {
    return Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ha = function(a, b) {
    return gd(b, this);
  };
  l.ia = function(a, b, c) {
    return id(b, c, this);
  };
  l.ca = function() {
    return new gg(this.j[this.s], this.j[this.s + 1]);
  };
  l.ea = function() {
    return this.s < this.j.length - 2 ? new Ig(this.j, this.s + 2, null) : Cc;
  };
  l.R = function() {
    return this;
  };
  l.Z = function(a, b) {
    return b === this.Sa ? this : new Ig(this.j, this.s, b);
  };
  l.aa = function(a, b) {
    return ed(b, this);
  };
  l.Va = function(a, b) {
    return b < this.U(null) ? new Ig(this.j, this.s + 2 * b, null) : null;
  };
  Ig.prototype[Ha] = function() {
    return Ec(this);
  };
  function Jg(a, b) {
    this.j = a;
    this.s = 0;
    this.m = b;
  }
  Jg.prototype.da = function() {
    return this.s < this.m;
  };
  Jg.prototype.next = function() {
    var a = new gg(this.j[this.s], this.j[this.s + 1]);
    this.s += 2;
    return a;
  };
  function r(a, b, c, d) {
    this.o = a;
    this.m = b;
    this.j = c;
    this.A = d;
    this.l = 16647951;
    this.F = 401412;
  }
  l = r.prototype;
  l.rb = function(a, b) {
    a = Hg(this.j, b);
    return -1 === a ? null : new gg(this.j[a], this.j[a + 1]);
  };
  l.toString = function() {
    return hc(this);
  };
  l.keys = function() {
    return Ec(Kg.g ? Kg.g(this) : Kg.call(null, this));
  };
  l.entries = function() {
    return new Fg(C(C(this)));
  };
  l.values = function() {
    return Ec(Lg.g ? Lg.g(this) : Lg.call(null, this));
  };
  l.has = function(a) {
    return Md(this, a);
  };
  l.get = function(a, b) {
    return this.V(null, a, b);
  };
  l.forEach = function(a) {
    for (var b = C(this), c = null, d = 0, e = 0; ; ) if (e < d) {
      var f = c.H(null, e), g = N(f, 0, null);
      f = N(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else if (b = C(b)) Gd(b) ? (c = Vb(b), b = Wb(b), g = c, d = K(c), c = g) : (c = D(b), g = N(c, 0, null), f = N(c, 1, null), a.h ? a.h(f, g) : a.call(null, f, g), b = G(b), c = null, d = 0), e = 0;
    else return null;
  };
  l.sa = function(a, b) {
    return this.V(null, b, null);
  };
  l.V = function(a, b, c) {
    a = Hg(this.j, b);
    return -1 === a ? c : this.j[a + 1];
  };
  l.Cb = function(a, b, c) {
    a = this.j.length;
    for (var d = 0; ; ) if (d < a) {
      var e = this.j[d], f = this.j[d + 1];
      c = b.i ? b.i(c, e, f) : b.call(null, c, e, f);
      if (Nc(c)) return x(c);
      d += 2;
    } else return c;
  };
  l.xa = function() {
    return new Jg(this.j, 2 * this.m);
  };
  l.X = function() {
    return this.o;
  };
  l.U = function() {
    return this.m;
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Ic(this);
  };
  l.S = function(a, b) {
    if (Cd(b) && !Ed(b)) if (a = this.j.length, this.m === b.U(null)) for (var c = 0; ; ) if (c < a) {
      var d = b.V(null, this.j[c], Id);
      if (d !== Id) if (J.h(this.j[c + 1], d)) c += 2;
      else return false;
      else return false;
    } else return true;
    else return false;
    else return false;
  };
  l.qb = function() {
    return new Mg(this.j.length, Ia(this.j));
  };
  l.$ = function() {
    return ub(We, this.o);
  };
  l.ha = function(a, b) {
    return Yd(this, b);
  };
  l.ia = function(a, b, c) {
    return Zd(this, b, c);
  };
  l.Ua = function(a, b, c) {
    a = Hg(this.j, b);
    if (-1 === a) {
      if (this.m < Ng) {
        a = this.j;
        for (var d = a.length, e = Array(d + 2), f = 0; ; ) if (f < d) e[f] = a[f], f += 1;
        else break;
        e[d] = b;
        e[d + 1] = c;
        return new r(this.o, this.m + 1, e, null);
      }
      return ub(hb(Kf.h(Og, this), b, c), this.o);
    }
    if (c === this.j[a + 1]) return this;
    b = Ia(this.j);
    b[a + 1] = c;
    return new r(this.o, this.m, b, null);
  };
  l.fb = function(a, b) {
    return -1 !== Hg(this.j, b);
  };
  l.R = function() {
    var a = this.j;
    return 0 <= a.length - 2 ? new Ig(a, 0, null) : null;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new r(b, this.m, this.j, this.A);
  };
  l.aa = function(a, b) {
    if (Fd(b)) return this.Ua(null, Ua(b, 0), Ua(b, 1));
    a = this;
    for (b = C(b); ; ) {
      if (null == b) return a;
      var c = D(b);
      if (Fd(c)) a = hb(a, Ua(c, 0), Ua(c, 1)), b = G(b);
      else throw Error("conj on a map takes map entries or seqables of map entries");
    }
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.g = function(a) {
    return this.sa(null, a);
  };
  l.h = function(a, b) {
    return this.V(null, a, b);
  };
  l.Va = function(a, b) {
    a = this.R(null);
    return null == a ? null : ec(a, b);
  };
  var We = new r(null, 0, [], Jc), Ng = 8;
  function Pg(a, b) {
    return a === b ? true : a === b || a instanceof z && b instanceof z && a.M === b.M ? true : J.h(a, b);
  }
  function Qg(a) {
    for (var b = 0, c = 0; ; ) if (b < a.length) {
      var d;
      a: for (d = 0; ; ) if (d < b) {
        var e = Pg(a[b], a[d]);
        if (e) {
          d = e;
          break a;
        }
        d = 2 + d;
      } else {
        d = false;
        break a;
      }
      c = d ? c : c + 2;
      b = 2 + b;
    } else return c;
  }
  function Rg(a, b) {
    var c = a.length - 1, d = C(b);
    b = Array(c + 2 * K(d));
    a = Hd(a, 0, b, 0, c);
    for (b = c; ; ) if (d) {
      var e = D(d);
      a[b] = kb(e);
      a[b + 1] = lb(e);
      b = 2 + c;
      d = G(d);
    } else return a;
  }
  function rd(a) {
    var b = a.length, c = 1 === (b & 1), d;
    if (!(d = c)) a: for (d = 0; ; ) if (d < a.length) {
      var e;
      b: for (e = 0; ; ) if (e < d) {
        var f = Pg(a[d], a[e]);
        if (f) {
          e = f;
          break b;
        }
        e = 2 + e;
      } else {
        e = false;
        break b;
      }
      if (e) {
        d = e;
        break a;
      }
      d = 2 + d;
    } else {
      d = false;
      break a;
    }
    return d ? Sg(a, c) : new r(null, b / 2, a, null);
  }
  function Sg(a, b) {
    var c = b ? Rg(a, Kf.h(We, a[a.length - 1])) : a;
    a = Qg(c);
    var d = c.length;
    if (a < d) {
      a = Array(a);
      for (var e = 0, f = 0; ; ) if (e < d) (function() {
        for (var g = 0; ; ) if (g < f) {
          var h = Pg(c[e], c[g]);
          if (h) return h;
          g = 2 + g;
        } else return false;
      })() ? (b = f, e = 2 + e, f = b) : (b = (function() {
        for (var g = d - 2; ; ) if (g >= e) {
          if (Pg(c[e], c[g])) return g;
          g -= 2;
        } else return g;
      })(), a[f] = c[e], a[f + 1] = c[b + 1], b = 2 + f, e = 2 + e, f = b);
      else break;
      return new r(null, a.length / 2, a, null);
    }
    return new r(null, c.length / 2, c, null);
  }
  r.prototype[Ha] = function() {
    return Ec(this);
  };
  function Mg(a, b) {
    this.vb = {};
    this.lb = a;
    this.j = b;
    this.l = 259;
    this.F = 56;
  }
  l = Mg.prototype;
  l.U = function() {
    if (this.vb) return ge(this.lb);
    throw Error("count after persistent!");
  };
  l.sa = function(a, b) {
    return this.V(null, b, null);
  };
  l.V = function(a, b, c) {
    if (this.vb) return a = Hg(this.j, b), -1 === a ? c : this.j[a + 1];
    throw Error("lookup after persistent!");
  };
  l.ub = function(a, b) {
    if (this.vb) {
      if (og(b)) return this.tb(null, pg.g ? pg.g(b) : pg.call(null, b), qg.g ? qg.g(b) : qg.call(null, b));
      if (Fd(b)) return this.tb(null, b.g ? b.g(0) : b.call(null, 0), b.g ? b.g(1) : b.call(null, 1));
      a = C(b);
      for (b = this; ; ) {
        var c = D(a);
        if (u(c)) a = G(a), b = Rb(b, pg.g ? pg.g(c) : pg.call(null, c), qg.g ? qg.g(c) : qg.call(null, c));
        else return b;
      }
    } else throw Error("conj! after persistent!");
  };
  l.Hb = function() {
    if (this.vb) return this.vb = false, new r(null, ge(this.lb), this.j, null);
    throw Error("persistent! called twice");
  };
  l.tb = function(a, b, c) {
    if (this.vb) {
      a = Hg(this.j, b);
      if (-1 === a) return this.lb + 2 <= 2 * Ng ? (this.lb += 2, this.j.push(b), this.j.push(c), this) : He(Tg.h ? Tg.h(this.lb, this.j) : Tg.call(null, this.lb, this.j), b, c);
      c !== this.j[a + 1] && (this.j[a + 1] = c);
      return this;
    }
    throw Error("assoc! after persistent!");
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.g = function(a) {
    return this.V(null, a, null);
  };
  l.h = function(a, b) {
    return this.V(null, a, b);
  };
  function Tg(a, b) {
    for (var c = Ob(Og), d = 0; ; ) if (d < a) c = Rb(c, b[d], b[d + 1]), d += 2;
    else return c;
  }
  function Ug() {
    this.I = false;
  }
  function Wg(a, b, c) {
    a = Ia(a);
    a[b] = c;
    return a;
  }
  function Xg(a, b, c, d) {
    a = a.kb(b);
    a.j[c] = d;
    return a;
  }
  function Yg(a, b, c) {
    for (var d = a.length, e = 0, f = c; ; ) if (e < d) {
      c = a[e];
      if (null != c) {
        var g = a[e + 1];
        c = b.i ? b.i(f, c, g) : b.call(null, f, c, g);
      } else c = a[e + 1], c = null != c ? c.Mb(b, f) : f;
      if (Nc(c)) return c;
      e += 2;
      f = c;
    } else return f;
  }
  function Zg(a) {
    this.j = a;
    this.s = 0;
    this.Qa = this.Nb = null;
  }
  Zg.prototype.advance = function() {
    for (var a = this.j.length; ; ) if (this.s < a) {
      var b = this.j[this.s], c = this.j[this.s + 1];
      null != b ? b = this.Nb = new gg(b, c) : null != c ? (b = dc(c), b = b.da() ? this.Qa = b : false) : b = false;
      this.s += 2;
      if (b) return true;
    } else return false;
  };
  Zg.prototype.da = function() {
    var a = null != this.Nb;
    return a ? a : (a = null != this.Qa) ? a : this.advance();
  };
  Zg.prototype.next = function() {
    if (null != this.Nb) {
      var a = this.Nb;
      this.Nb = null;
      return a;
    }
    if (null != this.Qa) return a = this.Qa.next(), this.Qa.da() || (this.Qa = null), a;
    if (this.advance()) return this.next();
    throw Error("No such element");
  };
  Zg.prototype.remove = function() {
    return Error("Unsupported operation");
  };
  function $g(a, b, c) {
    this.W = a;
    this.ga = b;
    this.j = c;
    this.F = 131072;
    this.l = 0;
  }
  l = $g.prototype;
  l.kb = function(a) {
    if (a === this.W) return this;
    var b = he(this.ga), c = Array(0 > b ? 4 : 2 * (b + 1));
    Hd(this.j, 0, c, 0, 2 * b);
    return new $g(a, this.ga, c);
  };
  l.Lb = function() {
    return ah ? ah(this.j) : bh.call(null, this.j);
  };
  l.Mb = function(a, b) {
    return Yg(this.j, a, b);
  };
  l.bb = function(a, b, c, d) {
    var e = 1 << (b >>> a & 31);
    if (0 === (this.ga & e)) return d;
    var f = he(this.ga & e - 1);
    e = this.j[2 * f];
    f = this.j[2 * f + 1];
    return null == e ? f.bb(a + 5, b, c, d) : Pg(c, e) ? f : d;
  };
  l.Oa = function(a, b, c, d, e, f) {
    var g = 1 << (c >>> b & 31), h = he(this.ga & g - 1);
    if (0 === (this.ga & g)) {
      var k = he(this.ga);
      if (2 * k < this.j.length) {
        a = this.kb(a);
        b = a.j;
        f.I = true;
        c = 2 * (k - h);
        f = 2 * h + (c - 1);
        for (k = 2 * (h + 1) + (c - 1); 0 !== c; ) b[k] = b[f], --k, --c, --f;
        b[2 * h] = d;
        b[2 * h + 1] = e;
        a.ga |= g;
        return a;
      }
      if (16 <= k) {
        h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
        h[c >>> b & 31] = ch.Oa(a, b + 5, c, d, e, f);
        for (e = d = 0; ; ) if (32 > d) 0 === (this.ga >>> d & 1) ? d += 1 : (h[d] = null != this.j[e] ? ch.Oa(a, b + 5, qc(this.j[e]), this.j[e], this.j[e + 1], f) : this.j[e + 1], e += 2, d += 1);
        else break;
        return new dh(a, k + 1, h);
      }
      b = Array(2 * (k + 4));
      Hd(this.j, 0, b, 0, 2 * h);
      b[2 * h] = d;
      b[2 * h + 1] = e;
      Hd(this.j, 2 * h, b, 2 * (h + 1), 2 * (k - h));
      f.I = true;
      a = this.kb(a);
      a.j = b;
      a.ga |= g;
      return a;
    }
    k = this.j[2 * h];
    g = this.j[2 * h + 1];
    if (null == k) return k = g.Oa(a, b + 5, c, d, e, f), k === g ? this : Xg(this, a, 2 * h + 1, k);
    if (Pg(d, k)) return e === g ? this : Xg(this, a, 2 * h + 1, e);
    f.I = true;
    f = b + 5;
    d = eh ? eh(a, f, k, g, c, d, e) : fh.call(null, a, f, k, g, c, d, e);
    e = 2 * h;
    h = 2 * h + 1;
    a = this.kb(a);
    a.j[e] = null;
    a.j[h] = d;
    return a;
  };
  l.Na = function(a, b, c, d, e) {
    var f = 1 << (b >>> a & 31), g = he(this.ga & f - 1);
    if (0 === (this.ga & f)) {
      var h = he(this.ga);
      if (16 <= h) {
        g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
        g[b >>> a & 31] = ch.Na(a + 5, b, c, d, e);
        for (d = c = 0; ; ) if (32 > c) 0 === (this.ga >>> c & 1) ? c += 1 : (g[c] = null != this.j[d] ? ch.Na(a + 5, qc(this.j[d]), this.j[d], this.j[d + 1], e) : this.j[d + 1], d += 2, c += 1);
        else break;
        return new dh(null, h + 1, g);
      }
      a = Array(2 * (h + 1));
      Hd(
        this.j,
        0,
        a,
        0,
        2 * g
      );
      a[2 * g] = c;
      a[2 * g + 1] = d;
      Hd(this.j, 2 * g, a, 2 * (g + 1), 2 * (h - g));
      e.I = true;
      return new $g(null, this.ga | f, a);
    }
    var k = this.j[2 * g];
    f = this.j[2 * g + 1];
    if (null == k) return h = f.Na(a + 5, b, c, d, e), h === f ? this : new $g(null, this.ga, Wg(this.j, 2 * g + 1, h));
    if (Pg(c, k)) return d === f ? this : new $g(null, this.ga, Wg(this.j, 2 * g + 1, d));
    e.I = true;
    e = this.ga;
    h = this.j;
    a += 5;
    a = gh ? gh(a, k, f, b, c, d) : fh.call(null, a, k, f, b, c, d);
    c = 2 * g;
    g = 2 * g + 1;
    d = Ia(h);
    d[c] = null;
    d[g] = a;
    return new $g(null, e, d);
  };
  l.Kb = function(a, b, c, d) {
    var e = 1 << (b >>> a & 31);
    if (0 === (this.ga & e)) return d;
    var f = he(this.ga & e - 1);
    e = this.j[2 * f];
    f = this.j[2 * f + 1];
    return null == e ? f.Kb(a + 5, b, c, d) : Pg(c, e) ? new gg(e, f) : d;
  };
  l.xa = function() {
    return new Zg(this.j);
  };
  var ch = new $g(null, 0, []);
  function hh(a) {
    this.j = a;
    this.s = 0;
    this.Qa = null;
  }
  hh.prototype.da = function() {
    for (var a = this.j.length; ; ) {
      if (null != this.Qa && this.Qa.da()) return true;
      if (this.s < a) {
        var b = this.j[this.s];
        this.s += 1;
        null != b && (this.Qa = dc(b));
      } else return false;
    }
  };
  hh.prototype.next = function() {
    if (this.da()) return this.Qa.next();
    throw Error("No such element");
  };
  hh.prototype.remove = function() {
    return Error("Unsupported operation");
  };
  function dh(a, b, c) {
    this.W = a;
    this.m = b;
    this.j = c;
    this.F = 131072;
    this.l = 0;
  }
  l = dh.prototype;
  l.kb = function(a) {
    return a === this.W ? this : new dh(a, this.m, Ia(this.j));
  };
  l.Lb = function() {
    return ih ? ih(this.j) : jh.call(null, this.j);
  };
  l.Mb = function(a, b) {
    for (var c = this.j.length, d = 0; ; ) if (d < c) {
      var e = this.j[d];
      if (null != e) {
        b = e.Mb(a, b);
        if (Nc(b)) return b;
        d += 1;
      } else d += 1;
    } else return b;
  };
  l.bb = function(a, b, c, d) {
    var e = this.j[b >>> a & 31];
    return null != e ? e.bb(a + 5, b, c, d) : d;
  };
  l.Oa = function(a, b, c, d, e, f) {
    var g = c >>> b & 31, h = this.j[g];
    if (null == h) return a = Xg(this, a, g, ch.Oa(a, b + 5, c, d, e, f)), a.m += 1, a;
    b = h.Oa(a, b + 5, c, d, e, f);
    return b === h ? this : Xg(this, a, g, b);
  };
  l.Na = function(a, b, c, d, e) {
    var f = b >>> a & 31, g = this.j[f];
    if (null == g) return new dh(null, this.m + 1, Wg(this.j, f, ch.Na(a + 5, b, c, d, e)));
    a = g.Na(a + 5, b, c, d, e);
    return a === g ? this : new dh(null, this.m, Wg(this.j, f, a));
  };
  l.Kb = function(a, b, c, d) {
    var e = this.j[b >>> a & 31];
    return null != e ? e.Kb(a + 5, b, c, d) : d;
  };
  l.xa = function() {
    return new hh(this.j);
  };
  function kh(a, b, c) {
    b *= 2;
    for (var d = 0; ; ) if (d < b) {
      if (Pg(c, a[d])) return d;
      d += 2;
    } else return -1;
  }
  function lh(a, b, c, d) {
    this.W = a;
    this.$a = b;
    this.m = c;
    this.j = d;
    this.F = 131072;
    this.l = 0;
  }
  l = lh.prototype;
  l.kb = function(a) {
    if (a === this.W) return this;
    var b = Array(2 * (this.m + 1));
    Hd(this.j, 0, b, 0, 2 * this.m);
    return new lh(a, this.$a, this.m, b);
  };
  l.Lb = function() {
    return ah ? ah(this.j) : bh.call(null, this.j);
  };
  l.Mb = function(a, b) {
    return Yg(this.j, a, b);
  };
  l.bb = function(a, b, c, d) {
    a = kh(this.j, this.m, c);
    return 0 > a ? d : Pg(c, this.j[a]) ? this.j[a + 1] : d;
  };
  l.Oa = function(a, b, c, d, e, f) {
    if (c === this.$a) {
      b = kh(this.j, this.m, d);
      if (-1 === b) {
        if (this.j.length > 2 * this.m) return b = 2 * this.m, c = 2 * this.m + 1, a = this.kb(a), a.j[b] = d, a.j[c] = e, f.I = true, a.m += 1, a;
        c = this.j.length;
        b = Array(c + 2);
        Hd(this.j, 0, b, 0, c);
        b[c] = d;
        b[c + 1] = e;
        f.I = true;
        d = this.m + 1;
        a === this.W ? (this.j = b, this.m = d, a = this) : a = new lh(this.W, this.$a, d, b);
        return a;
      }
      return this.j[b + 1] === e ? this : Xg(this, a, b + 1, e);
    }
    return new $g(a, 1 << (this.$a >>> b & 31), [null, this, null, null]).Oa(a, b, c, d, e, f);
  };
  l.Na = function(a, b, c, d, e) {
    return b === this.$a ? (a = kh(this.j, this.m, c), -1 === a ? (a = 2 * this.m, b = Array(a + 2), Hd(this.j, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.I = true, new lh(null, this.$a, this.m + 1, b)) : J.h(this.j[a + 1], d) ? this : new lh(null, this.$a, this.m, Wg(this.j, a + 1, d))) : new $g(null, 1 << (this.$a >>> a & 31), [null, this]).Na(a, b, c, d, e);
  };
  l.Kb = function(a, b, c, d) {
    a = kh(this.j, this.m, c);
    return 0 > a ? d : Pg(c, this.j[a]) ? new gg(this.j[a], this.j[a + 1]) : d;
  };
  l.xa = function() {
    return new Zg(this.j);
  };
  function fh(a) {
    switch (arguments.length) {
      case 6:
        return gh(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      case 7:
        return eh(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  }
  function gh(a, b, c, d, e, f) {
    var g = qc(b);
    if (g === d) return new lh(null, g, 2, [b, c, e, f]);
    var h = new Ug();
    return ch.Na(a, g, b, c, h).Na(a, d, e, f, h);
  }
  function eh(a, b, c, d, e, f, g) {
    var h = qc(c);
    if (h === e) return new lh(null, h, 2, [c, d, f, g]);
    var k = new Ug();
    return ch.Oa(a, b, h, c, d, k).Oa(a, b, e, f, g, k);
  }
  function mh(a, b, c, d, e) {
    this.o = a;
    this.Ra = b;
    this.s = c;
    this.K = d;
    this.A = e;
    this.l = 32374988;
    this.F = 0;
  }
  l = mh.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    if (null == this.K) {
      var a = this.Ra, b = this.s + 2;
      return nh ? nh(a, b, null) : bh.call(null, a, b, null);
    }
    a = this.Ra;
    b = this.s;
    var c = G(this.K);
    return nh ? nh(a, b, c) : bh.call(null, a, b, c);
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ha = function(a, b) {
    return gd(b, this);
  };
  l.ia = function(a, b, c) {
    return id(b, c, this);
  };
  l.ca = function() {
    return null == this.K ? new gg(this.Ra[this.s], this.Ra[this.s + 1]) : D(this.K);
  };
  l.ea = function() {
    var a = this, b = null == a.K ? (function() {
      var c = a.Ra, d = a.s + 2;
      return nh ? nh(c, d, null) : bh.call(null, c, d, null);
    })() : (function() {
      var c = a.Ra, d = a.s, e = G(a.K);
      return nh ? nh(c, d, e) : bh.call(null, c, d, e);
    })();
    return null != b ? b : Cc;
  };
  l.R = function() {
    return this;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new mh(b, this.Ra, this.s, this.K, this.A);
  };
  l.aa = function(a, b) {
    return ed(b, this);
  };
  mh.prototype[Ha] = function() {
    return Ec(this);
  };
  function bh(a) {
    switch (arguments.length) {
      case 1:
        return ah(arguments[0]);
      case 3:
        return nh(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  }
  function ah(a) {
    return nh(a, 0, null);
  }
  function nh(a, b, c) {
    if (null == c) for (c = a.length; ; ) if (b < c) {
      if (null != a[b]) return new mh(null, a, b, null, null);
      var d = a[b + 1];
      if (u(d) && (d = d.Lb(), u(d))) return new mh(null, a, b + 2, d, null);
      b += 2;
    } else return null;
    else return new mh(null, a, b, c, null);
  }
  function oh(a, b, c, d, e) {
    this.o = a;
    this.Ra = b;
    this.s = c;
    this.K = d;
    this.A = e;
    this.l = 32374988;
    this.F = 0;
  }
  l = oh.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    var a = this.Ra, b = this.s, c = G(this.K);
    return ph ? ph(a, b, c) : jh.call(null, a, b, c);
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ha = function(a, b) {
    return gd(b, this);
  };
  l.ia = function(a, b, c) {
    return id(b, c, this);
  };
  l.ca = function() {
    return D(this.K);
  };
  l.ea = function() {
    var a = this.Ra;
    var b = this.s, c = G(this.K);
    a = ph ? ph(a, b, c) : jh.call(null, a, b, c);
    return null != a ? a : Cc;
  };
  l.R = function() {
    return this;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new oh(b, this.Ra, this.s, this.K, this.A);
  };
  l.aa = function(a, b) {
    return ed(b, this);
  };
  oh.prototype[Ha] = function() {
    return Ec(this);
  };
  function jh(a) {
    switch (arguments.length) {
      case 1:
        return ih(arguments[0]);
      case 3:
        return ph(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  }
  function ih(a) {
    return ph(a, 0, null);
  }
  function ph(a, b, c) {
    if (null == c) for (c = a.length; ; ) if (b < c) {
      var d = a[b];
      if (u(d) && (d = d.Lb(), u(d))) return new oh(null, a, b + 1, d, null);
      b += 1;
    } else return null;
    else return new oh(null, a, b, c, null);
  }
  function qh(a, b) {
    this.na = a;
    this.lc = b;
    this.bc = false;
  }
  qh.prototype.da = function() {
    return !this.bc || this.lc.da();
  };
  qh.prototype.next = function() {
    if (this.bc) return this.lc.next();
    this.bc = true;
    return new gg(null, this.na);
  };
  qh.prototype.remove = function() {
    return Error("Unsupported operation");
  };
  function rh(a, b, c, d, e, f) {
    this.o = a;
    this.m = b;
    this.root = c;
    this.ta = d;
    this.na = e;
    this.A = f;
    this.l = 16123663;
    this.F = 139268;
  }
  l = rh.prototype;
  l.rb = function(a, b) {
    return null == b ? this.ta ? new gg(null, this.na) : null : null == this.root ? null : this.root.Kb(0, qc(b), b, null);
  };
  l.toString = function() {
    return hc(this);
  };
  l.keys = function() {
    return Ec(Kg.g ? Kg.g(this) : Kg.call(null, this));
  };
  l.entries = function() {
    return new Fg(C(C(this)));
  };
  l.values = function() {
    return Ec(Lg.g ? Lg.g(this) : Lg.call(null, this));
  };
  l.has = function(a) {
    return Md(this, a);
  };
  l.get = function(a, b) {
    return this.V(null, a, b);
  };
  l.forEach = function(a) {
    for (var b = C(this), c = null, d = 0, e = 0; ; ) if (e < d) {
      var f = c.H(null, e), g = N(f, 0, null);
      f = N(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else if (b = C(b)) Gd(b) ? (c = Vb(b), b = Wb(b), g = c, d = K(c), c = g) : (c = D(b), g = N(c, 0, null), f = N(c, 1, null), a.h ? a.h(f, g) : a.call(null, f, g), b = G(b), c = null, d = 0), e = 0;
    else return null;
  };
  l.sa = function(a, b) {
    return this.V(null, b, null);
  };
  l.V = function(a, b, c) {
    return null == b ? this.ta ? this.na : c : null == this.root ? c : this.root.bb(0, qc(b), b, c);
  };
  l.Cb = function(a, b, c) {
    a = this.ta ? b.i ? b.i(c, null, this.na) : b.call(null, c, null, this.na) : c;
    Nc(a) ? b = x(a) : null != this.root ? (b = this.root.Mb(b, a), b = Nc(b) ? Oc.g ? Oc.g(b) : Oc.call(null, b) : b) : b = a;
    return b;
  };
  l.xa = function() {
    var a = this.root ? dc(this.root) : new Ze(We);
    return this.ta ? new qh(this.na, a) : a;
  };
  l.X = function() {
    return this.o;
  };
  l.U = function() {
    return this.m;
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Ic(this);
  };
  l.S = function(a, b) {
    return Eg(this, b);
  };
  l.qb = function() {
    return new sh(this.root, this.m, this.ta, this.na);
  };
  l.$ = function() {
    return ub(Og, this.o);
  };
  l.Ua = function(a, b, c) {
    if (null == b) return this.ta && c === this.na ? this : new rh(this.o, this.ta ? this.m : this.m + 1, this.root, true, c, null);
    a = new Ug();
    b = (null == this.root ? ch : this.root).Na(0, qc(b), b, c, a);
    return b === this.root ? this : new rh(this.o, a.I ? this.m + 1 : this.m, b, this.ta, this.na, null);
  };
  l.fb = function(a, b) {
    return null == b ? this.ta : null == this.root ? false : this.root.bb(0, qc(b), b, Id) !== Id;
  };
  l.R = function() {
    if (0 < this.m) {
      var a = null != this.root ? this.root.Lb() : null;
      return this.ta ? ed(new gg(null, this.na), a) : a;
    }
    return null;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new rh(b, this.m, this.root, this.ta, this.na, this.A);
  };
  l.aa = function(a, b) {
    if (Fd(b)) return this.Ua(null, Ua(b, 0), Ua(b, 1));
    a = this;
    for (b = C(b); ; ) {
      if (null == b) return a;
      var c = D(b);
      if (Fd(c)) a = hb(a, Ua(c, 0), Ua(c, 1)), b = G(b);
      else throw Error("conj on a map takes map entries or seqables of map entries");
    }
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.g = function(a) {
    return this.sa(null, a);
  };
  l.h = function(a, b) {
    return this.V(null, a, b);
  };
  var Og = new rh(null, 0, null, false, null, Jc);
  function th(a, b) {
    for (var c = a.length, d = 0, e = Ob(Og); ; ) if (d < c) {
      if (b.length <= d) throw Error(["No value supplied for key: ", w.g(a[d])].join(""));
      var f = d + 1;
      e = Rb(e, a[d], b[d]);
      d = f;
    } else return Qb(e);
  }
  rh.prototype[Ha] = function() {
    return Ec(this);
  };
  function sh(a, b, c, d) {
    this.W = {};
    this.root = a;
    this.count = b;
    this.ta = c;
    this.na = d;
    this.l = 259;
    this.F = 56;
  }
  function uh(a, b, c) {
    if (a.W) {
      if (null == b) a.na !== c && (a.na = c), a.ta || (a.count += 1, a.ta = true);
      else {
        var d = new Ug();
        b = (null == a.root ? ch : a.root).Oa(a.W, 0, qc(b), b, c, d);
        b !== a.root && (a.root = b);
        d.I && (a.count += 1);
      }
      return a;
    }
    throw Error("assoc! after persistent!");
  }
  l = sh.prototype;
  l.U = function() {
    if (this.W) return this.count;
    throw Error("count after persistent!");
  };
  l.sa = function(a, b) {
    return null == b ? this.ta ? this.na : null : null == this.root ? null : this.root.bb(0, qc(b), b);
  };
  l.V = function(a, b, c) {
    return null == b ? this.ta ? this.na : c : null == this.root ? c : this.root.bb(0, qc(b), b, c);
  };
  l.ub = function(a, b) {
    a: if (this.W) if (og(b)) a = uh(this, pg.g ? pg.g(b) : pg.call(null, b), qg.g ? qg.g(b) : qg.call(null, b));
    else if (Fd(b)) a = uh(this, b.g ? b.g(0) : b.call(null, 0), b.g ? b.g(1) : b.call(null, 1));
    else for (a = C(b), b = this; ; ) {
      var c = D(a);
      if (u(c)) a = G(a), b = uh(b, pg.g ? pg.g(c) : pg.call(null, c), qg.g ? qg.g(c) : qg.call(null, c));
      else {
        a = b;
        break a;
      }
    }
    else throw Error("conj! after persistent");
    return a;
  };
  l.Hb = function() {
    if (this.W) {
      this.W = null;
      var a = new rh(null, this.count, this.root, this.ta, this.na, null);
    } else throw Error("persistent! called twice");
    return a;
  };
  l.tb = function(a, b, c) {
    return uh(this, b, c);
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.g = function(a) {
    return this.sa(null, a);
  };
  l.h = function(a, b) {
    return this.V(null, a, b);
  };
  var vh = function vh2(a) {
    for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
    else break;
    return vh2.u(0 < c.length ? new Ac(c.slice(0), 0, null) : null);
  };
  vh.u = function(a) {
    a = a instanceof Ac && 0 === a.s ? a.j : Ja(a);
    if (!ef(a.length)) throw Error(["No value supplied for key: ", w.g(kd(a))].join(""));
    return rd(a);
  };
  vh.J = 0;
  vh.G = function(a) {
    return this.u(C(a));
  };
  function wh(a, b) {
    this.N = a;
    this.Sa = b;
    this.l = 32374988;
    this.F = 0;
  }
  l = wh.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.Sa;
  };
  l.ba = function() {
    var a = (null != this.N ? this.N.l & 128 || n === this.N.Fb || (this.N.l ? 0 : Da($a, this.N)) : Da($a, this.N)) ? this.N.ba(null) : G(this.N);
    return null == a ? null : new wh(a, null);
  };
  l.T = function() {
    return Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ha = function(a, b) {
    return gd(b, this);
  };
  l.ia = function(a, b, c) {
    return id(b, c, this);
  };
  l.ca = function() {
    return this.N.ca(null).key;
  };
  l.ea = function() {
    var a = (null != this.N ? this.N.l & 128 || n === this.N.Fb || (this.N.l ? 0 : Da($a, this.N)) : Da($a, this.N)) ? this.N.ba(null) : G(this.N);
    return null != a ? new wh(a, null) : Cc;
  };
  l.R = function() {
    return this;
  };
  l.Z = function(a, b) {
    return b === this.Sa ? this : new wh(this.N, b);
  };
  l.aa = function(a, b) {
    return ed(b, this);
  };
  wh.prototype[Ha] = function() {
    return Ec(this);
  };
  function Kg(a) {
    return (a = C(a)) ? new wh(a, null) : null;
  }
  function pg(a) {
    return kb(a);
  }
  function xh(a, b) {
    this.N = a;
    this.Sa = b;
    this.l = 32374988;
    this.F = 0;
  }
  l = xh.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.X = function() {
    return this.Sa;
  };
  l.ba = function() {
    var a = (null != this.N ? this.N.l & 128 || n === this.N.Fb || (this.N.l ? 0 : Da($a, this.N)) : Da($a, this.N)) ? this.N.ba(null) : G(this.N);
    return null == a ? null : new xh(a, null);
  };
  l.T = function() {
    return Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ha = function(a, b) {
    return gd(b, this);
  };
  l.ia = function(a, b, c) {
    return id(b, c, this);
  };
  l.ca = function() {
    return this.N.ca(null).I;
  };
  l.ea = function() {
    var a = (null != this.N ? this.N.l & 128 || n === this.N.Fb || (this.N.l ? 0 : Da($a, this.N)) : Da($a, this.N)) ? this.N.ba(null) : G(this.N);
    return null != a ? new xh(a, null) : Cc;
  };
  l.R = function() {
    return this;
  };
  l.Z = function(a, b) {
    return b === this.Sa ? this : new xh(this.N, b);
  };
  l.aa = function(a, b) {
    return ed(b, this);
  };
  xh.prototype[Ha] = function() {
    return Ec(this);
  };
  function Lg(a) {
    return (a = C(a)) ? new xh(a, null) : null;
  }
  function qg(a) {
    return lb(a);
  }
  function yh(a) {
    return u(df(be, a)) ? $d(function(b, c) {
      return M.h(u(b) ? b : We, c);
    }, a) : null;
  }
  function zh(a) {
    this.xb = a;
  }
  zh.prototype.da = function() {
    return this.xb.da();
  };
  zh.prototype.next = function() {
    if (this.xb.da()) return this.xb.next().key;
    throw Error("No such element");
  };
  zh.prototype.remove = function() {
    return Error("Unsupported operation");
  };
  function Ah(a, b, c) {
    this.o = a;
    this.ab = b;
    this.A = c;
    this.l = 15077647;
    this.F = 139268;
  }
  l = Ah.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.keys = function() {
    return Ec(C(this));
  };
  l.entries = function() {
    return new Gg(C(C(this)));
  };
  l.values = function() {
    return Ec(C(this));
  };
  l.has = function(a) {
    return Md(this, a);
  };
  l.forEach = function(a) {
    for (var b = C(this), c = null, d = 0, e = 0; ; ) if (e < d) {
      var f = c.H(null, e), g = N(f, 0, null);
      f = N(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else if (b = C(b)) Gd(b) ? (c = Vb(b), b = Wb(b), g = c, d = K(c), c = g) : (c = D(b), g = N(c, 0, null), f = N(c, 1, null), a.h ? a.h(f, g) : a.call(null, f, g), b = G(b), c = null, d = 0), e = 0;
    else return null;
  };
  l.sa = function(a, b) {
    return this.V(null, b, null);
  };
  l.V = function(a, b, c) {
    a = ib(this.ab, b);
    return u(a) ? kb(a) : c;
  };
  l.xa = function() {
    return new zh(dc(this.ab));
  };
  l.X = function() {
    return this.o;
  };
  l.U = function() {
    return Na(this.ab);
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Ic(this);
  };
  l.S = function(a, b) {
    if (a = Ad(b)) if (a = K(this) === K(b)) try {
      return ae(function(c, d) {
        return (c = Md(b, d)) ? c : new Mc(false);
      }, true, this.ab);
    } catch (c) {
      if (c instanceof Error) return false;
      throw c;
    }
    else return a;
    else return a;
  };
  l.qb = function() {
    return new Bh(Ob(this.ab));
  };
  l.$ = function() {
    return ub(Ch, this.o);
  };
  l.R = function() {
    return Kg(this.ab);
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new Ah(b, this.ab, this.A);
  };
  l.aa = function(a, b) {
    return new Ah(this.o, qd.i(this.ab, b, null), null);
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.g = function(a) {
    return this.sa(null, a);
  };
  l.h = function(a, b) {
    return this.V(null, a, b);
  };
  var Ch = new Ah(null, We, Jc);
  function Dh(a) {
    for (var b = a.length, c = Ob(Ch), d = 0; ; ) if (d < b) Pb(c, a[d]), d += 1;
    else break;
    return Qb(c);
  }
  Ah.prototype[Ha] = function() {
    return Ec(this);
  };
  function Bh(a) {
    this.mb = a;
    this.F = 136;
    this.l = 259;
  }
  l = Bh.prototype;
  l.ub = function(a, b) {
    this.mb = Rb(this.mb, b, null);
    return this;
  };
  l.Hb = function() {
    return new Ah(null, Qb(this.mb), null);
  };
  l.U = function() {
    return K(this.mb);
  };
  l.sa = function(a, b) {
    return this.V(null, b, null);
  };
  l.V = function(a, b, c) {
    return db(this.mb, b, Id) === Id ? c : b;
  };
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.g = function(a) {
    return db(this.mb, a, Id) === Id ? null : a;
  };
  l.h = function(a, b) {
    return db(this.mb, a, Id) === Id ? b : a;
  };
  function Eh(a) {
    if (Ad(a)) return ud(a, null);
    a = C(a);
    if (null == a) return Ch;
    if (a instanceof Ac && 0 === a.s) return Dh(a.j);
    for (var b = Ob(Ch); ; ) if (null != a) {
      var c = G(a);
      b = Pb(b, Ya(a));
      a = c;
    } else return Qb(b);
  }
  function Fh(a) {
    return (function e(c, d) {
      return new ve(null, function() {
        var f;
        a: {
          var g = c;
          for (f = d; ; ) {
            var h = g;
            g = N(h, 0, null);
            if (h = C(h)) if (Md(f, g)) g = F(h);
            else {
              f = ed(g, e(F(h), M.h(f, g)));
              break a;
            }
            else {
              f = null;
              break a;
            }
          }
        }
        return f;
      }, null, null);
    })(a, Ch);
  }
  function ue(a) {
    if (null != a && (a.F & 4096 || n === a.Ac)) return a.Db(null);
    if ("string" === typeof a) return a;
    throw Error(["Doesn't support name: ", w.g(a)].join(""));
  }
  function Gh(a, b) {
    return new ve(null, function() {
      var c = C(b);
      if (c) {
        var d = D(c);
        d = a.g ? a.g(d) : a.call(null, d);
        c = u(d) ? ed(D(c), Gh(a, F(c))) : null;
      } else c = null;
      return c;
    }, null, null);
  }
  function Hh(a, b, c) {
    this.start = a;
    this.step = b;
    this.count = c;
    this.l = 82;
    this.F = 0;
  }
  l = Hh.prototype;
  l.U = function() {
    return this.count;
  };
  l.ca = function() {
    return this.start;
  };
  l.H = function(a, b) {
    return this.start + b * this.step;
  };
  l.ra = function(a, b, c) {
    return 0 <= b && b < this.count ? this.start + b * this.step : c;
  };
  l.$b = function() {
    if (1 >= this.count) throw Error("-drop-first of empty chunk");
    return new Hh(this.start + this.step, this.step, this.count - 1);
  };
  function Ih(a, b, c) {
    this.s = a;
    this.end = b;
    this.step = c;
  }
  Ih.prototype.da = function() {
    return 0 < this.step ? this.s < this.end : this.s > this.end;
  };
  Ih.prototype.next = function() {
    var a = this.s;
    this.s += this.step;
    return a;
  };
  function Jh(a, b, c, d, e, f) {
    this.o = a;
    this.start = b;
    this.end = c;
    this.step = d;
    this.m = e;
    this.A = f;
    this.l = 32375006;
    this.F = 402944;
  }
  l = Jh.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  l.H = function(a, b) {
    if (0 <= b && b < this.U(null)) return this.start + b * this.step;
    if (0 <= b && this.start > this.end && 0 === this.step) return this.start;
    throw Error("Index out of bounds");
  };
  l.ra = function(a, b, c) {
    return 0 <= b && b < this.U(null) ? this.start + b * this.step : 0 <= b && this.start > this.end && 0 === this.step ? this.start : c;
  };
  l.xa = function() {
    return new Ih(this.start, this.end, this.step);
  };
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    return 0 < this.step ? this.start + this.step < this.end ? new Jh(null, this.start + this.step, this.end, this.step, Math.ceil((this.end - (this.start + this.step)) / this.step), null) : null : this.start + this.step > this.end ? new Jh(null, this.start + this.step, this.end, this.step, Math.ceil((this.end - (this.start + this.step)) / this.step), null) : null;
  };
  l.U = function() {
    return this.m;
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ha = function(a, b) {
    return Pc(this, b);
  };
  l.ia = function(a, b, c) {
    for (a = this.start; ; ) if (0 < this.step ? a < this.end : a > this.end) {
      c = b.h ? b.h(c, a) : b.call(null, c, a);
      if (Nc(c)) return x(c);
      a += this.step;
    } else return c;
  };
  l.ca = function() {
    return this.start;
  };
  l.ea = function() {
    var a = this.ba(null);
    return null == a ? Cc : a;
  };
  l.R = function() {
    return this;
  };
  l.Ab = function() {
    var a = this.m;
    return new Hh(this.start, this.step, 32 > a ? a : 32);
  };
  l.Ya = function() {
    if (32 >= this.m) return Cc;
    var a = this.start + 32 * this.step;
    return 0 < this.step ? this.end <= a ? Cc : new Jh(null, a, this.end, this.step, Math.ceil((this.end - a) / this.step), null) : 0 > this.step ? this.end >= a ? Cc : new Jh(null, a, this.end, this.step, Math.ceil((this.end - a) / this.step), null) : this.end === a ? Cc : new Af(null, -1, a, null);
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new Jh(b, this.start, this.end, this.step, this.m, this.A);
  };
  l.aa = function(a, b) {
    return ed(b, this);
  };
  l.Va = function(a, b) {
    return 0 < b ? b < this.m ? new Jh(null, this.start + this.step * b, this.end, this.step, this.m - b, null) : null : this;
  };
  l.Sb = function() {
    return C(this.Ya(null));
  };
  Jh.prototype[Ha] = function() {
    return Ec(this);
  };
  function Kh(a, b, c, d, e, f, g) {
    this.o = a;
    this.start = b;
    this.end = c;
    this.step = d;
    this.ua = e;
    this.Qb = f;
    this.A = g;
    this.F = 140800;
    this.l = 32374988;
  }
  l = Kh.prototype;
  l.toString = function() {
    return hc(this);
  };
  l.indexOf = (function() {
    var a = null;
    a = function(b, c) {
      switch (arguments.length) {
        case 1:
          return Xc(this, b, 0);
        case 2:
          return Xc(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.g = function(b) {
      return Xc(this, b, 0);
    };
    a.h = function(b, c) {
      return Xc(this, b, c);
    };
    return a;
  })();
  l.lastIndexOf = (function() {
    function a(c) {
      return $c(this, c, K(this));
    }
    var b = null;
    b = function(c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return $c(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.g = a;
    b.h = function(c, d) {
      return $c(this, c, d);
    };
    return b;
  })();
  function Lh(a) {
    if (null == a.ua) {
      var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      a: {
        var c = 0;
        for (var d = a.start; ; ) if (32 > c) {
          if (b[c] = d, c += 1, d += a.step, !(0 < a.step ? d < a.end : d > a.end)) {
            c = a.ua = new ye(b, 0, c);
            break a;
          }
        } else {
          c = d;
          break a;
        }
      }
      null == a.ua && (a.ua = new ye(b, 0, 32), (0 < a.step ? c < a.end : c > a.end) && (a.Qb = new Kh(null, c, a.end, a.step, null, null, null)));
    }
  }
  l.xa = function() {
    return new Ih(this.start, this.end, this.step);
  };
  l.X = function() {
    return this.o;
  };
  l.ba = function() {
    return 0 < this.step ? this.start + this.step < this.end ? new Kh(null, this.start + this.step, this.end, this.step, null, null, null) : null : this.start + this.step > this.end ? new Kh(null, this.start + this.step, this.end, this.step, null, null, null) : null;
  };
  l.T = function() {
    var a = this.A;
    return null != a ? a : this.A = a = Gc(this);
  };
  l.S = function(a, b) {
    return cd(this, b);
  };
  l.$ = function() {
    return Cc;
  };
  l.ha = function(a, b) {
    return gd(b, this);
  };
  l.ia = function(a, b, c) {
    for (a = this.start; ; ) if (0 < this.step ? a < this.end : a > this.end) {
      c = b.h ? b.h(c, a) : b.call(null, c, a);
      if (Nc(c)) return x(c);
      a += this.step;
    } else return c;
  };
  l.ca = function() {
    return this.start;
  };
  l.ea = function() {
    var a = this.ba(null);
    return null == a ? Cc : a;
  };
  l.R = function() {
    return this;
  };
  l.Ab = function() {
    Lh(this);
    return this.ua;
  };
  l.Ya = function() {
    Lh(this);
    return null == this.Qb ? Cc : this.Qb;
  };
  l.Z = function(a, b) {
    return b === this.o ? this : new Kh(b, this.start, this.end, this.step, this.ua, this.Qb, this.A);
  };
  l.aa = function(a, b) {
    return ed(b, this);
  };
  l.Sb = function() {
    return C(this.Ya(null));
  };
  Kh.prototype[Ha] = function() {
    return Ec(this);
  };
  function Mh(a, b) {
    return new ve(null, function() {
      var c = C(b);
      return c ? ed(D(c), Mh(a, xf(a, c))) : null;
    }, null, null);
  }
  function Nh(a) {
    return Qb(Ka(function(b, c) {
      return He(b, c, xc(b, c, 0) + 1);
    }, Ob(We), a));
  }
  function Ph(a, b) {
    return (function() {
      function c(k, m, p) {
        return new P(null, 2, 5, R, [a.i ? a.i(k, m, p) : a.call(null, k, m, p), b.i ? b.i(k, m, p) : b.call(null, k, m, p)], null);
      }
      function d(k, m) {
        return new P(null, 2, 5, R, [a.h ? a.h(k, m) : a.call(null, k, m), b.h ? b.h(k, m) : b.call(null, k, m)], null);
      }
      function e(k) {
        return new P(null, 2, 5, R, [a.g ? a.g(k) : a.call(null, k), b.g ? b.g(k) : b.call(null, k)], null);
      }
      function f() {
        return new P(null, 2, 5, R, [a.v ? a.v() : a.call(null), b.v ? b.v() : b.call(null)], null);
      }
      var g = null, h = (function() {
        function k(p, q, t, v) {
          var A = null;
          if (3 < arguments.length) {
            A = 0;
            for (var E = Array(arguments.length - 3); A < E.length; ) E[A] = arguments[A + 3], ++A;
            A = new Ac(E, 0, null);
          }
          return m.call(this, p, q, t, A);
        }
        function m(p, q, t, v) {
          return new P(null, 2, 5, R, [Te(a, p, q, t, v), Te(b, p, q, t, v)], null);
        }
        k.J = 3;
        k.G = function(p) {
          var q = D(p);
          p = G(p);
          var t = D(p);
          p = G(p);
          var v = D(p);
          p = F(p);
          return m(q, t, v, p);
        };
        k.u = m;
        return k;
      })();
      g = function(k, m, p, q) {
        switch (arguments.length) {
          case 0:
            return f.call(this);
          case 1:
            return e.call(this, k);
          case 2:
            return d.call(this, k, m);
          case 3:
            return c.call(
              this,
              k,
              m,
              p
            );
          default:
            var t = null;
            if (3 < arguments.length) {
              t = 0;
              for (var v = Array(arguments.length - 3); t < v.length; ) v[t] = arguments[t + 3], ++t;
              t = new Ac(v, 0, null);
            }
            return h.u(k, m, p, t);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      g.J = 3;
      g.G = h.G;
      g.v = f;
      g.g = e;
      g.h = d;
      g.i = c;
      g.u = h.u;
      return g;
    })();
  }
  function Qh(a) {
    a: for (var b = a; ; ) if (b = C(b)) b = G(b);
    else break a;
    return a;
  }
  function Rh(a, b) {
    if ("string" === typeof b) return a = a.exec(b), null != a && J.h(a[0], b) ? 1 === a.length ? a[0] : ng(a) : null;
    throw new TypeError("re-matches must match against a string.");
  }
  function Sh(a, b) {
    if ("string" === typeof b) return a = a.exec(b), null == a ? null : 1 === a.length ? a[0] : ng(a);
    throw new TypeError("re-find must match against a string.");
  }
  var Th = function Th2(a, b) {
    var d = a.exec(b);
    if (null == d) return null;
    var e = d[0], f = 1 === d.length ? e : ng(d);
    return ed(f, new ve(null, function() {
      var g = e.length;
      g = d.index + (1 > g ? 1 : g);
      return g <= b.length ? (g = b.substring(g), Th2.h ? Th2.h(a, g) : Th2.call(null, a, g)) : null;
    }, null, null));
  };
  function Uh(a, b) {
    if ("string" === typeof b) return Th(a, b);
    throw new TypeError("re-seq must match against a string.");
  }
  function Vh(a, b, c, d, e, f, g) {
    var h = qa;
    qa = null == qa ? null : qa - 1;
    try {
      if (null != qa && 0 > qa) return Kb(a, "#");
      Kb(a, c);
      if (0 === ya.g(f)) C(g) && Kb(a, (function() {
        var v = Wh.g(f);
        return u(v) ? v : "...";
      })());
      else {
        if (C(g)) {
          var k = D(g);
          b.i ? b.i(k, a, f) : b.call(null, k, a, f);
        }
        for (var m = G(g), p = ya.g(f) - 1; ; ) if (!m || null != p && 0 === p) {
          C(m) && 0 === p && (Kb(a, d), Kb(a, (function() {
            var v = Wh.g(f);
            return u(v) ? v : "...";
          })()));
          break;
        } else {
          Kb(a, d);
          var q = D(m);
          c = a;
          g = f;
          b.i ? b.i(q, c, g) : b.call(null, q, c, g);
          var t = G(m);
          c = p - 1;
          m = t;
          p = c;
        }
      }
      return Kb(a, e);
    } finally {
      qa = h;
    }
  }
  function Xh(a, b) {
    b = C(b);
    for (var c = null, d = 0, e = 0; ; ) if (e < d) {
      var f = c.H(null, e);
      Kb(a, f);
      e += 1;
    } else if (b = C(b)) c = b, Gd(c) ? (b = Vb(c), d = Wb(c), c = b, f = K(b), b = d, d = f) : (f = D(c), Kb(a, f), b = G(c), c = null, d = 0), e = 0;
    else return null;
  }
  var Yh = { '"': '\\"', "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" };
  function Zh(a) {
    return ['"', w.g(a.replace(RegExp('[\\\\"\b\f\n\r	]', "g"), function(b) {
      return Yh[b];
    })), '"'].join("");
  }
  function $h(a, b) {
    return (a = Kd(y(a, wa))) ? (a = null != b ? b.l & 131072 || n === b.ec ? true : false : false) ? null != vd(b) : a : a;
  }
  function ai(a, b, c) {
    if (null == a) return Kb(b, "nil");
    if ($h(c, a)) {
      Kb(b, "^");
      var d = vd(a);
      bi.i ? bi.i(d, b, c) : bi.call(null, d, b, c);
      Kb(b, " ");
    }
    if (a.Jc) return a.ed(a, b, c);
    if (null != a ? a.l & 2147483648 || n === a.Y || (a.l ? 0 : Da(Lb, a)) : Da(Lb, a)) return Nb(a, b, c);
    if (true === a || false === a) return Kb(b, w.g(a));
    if ("number" === typeof a) return Kb(b, isNaN(a) ? "##NaN" : a === Number.POSITIVE_INFINITY ? "##Inf" : a === Number.NEGATIVE_INFINITY ? "##-Inf" : w.g(a));
    if (null != a && a.constructor === Object) return Kb(b, "#js "), d = vf.h(function(f) {
      return new gg(null != Rh(/[A-Za-z_\*\+\?!\-'][\w\*\+\?!\-']*/, f) ? te.g(f) : f, a[f]);
    }, ja(a)), ci.B ? ci.B(d, bi, b, c) : ci.call(null, d, bi, b, c);
    if (Aa(a)) return Vh(b, bi, "#js [", " ", "]", c, a);
    if ("string" === typeof a) return u(va.g(c)) ? Kb(b, Zh(a)) : Kb(b, a);
    if ("function" === typeof a) {
      var e = a.name;
      c = u((function() {
        var f = null == e;
        return f ? f : /^[\s\xa0]*$/.test(e);
      })()) ? "Function" : e;
      return Xh(b, fd(["#object[", c, u(false) ? [' "', w.g(a), '"'].join("") : "", "]"]));
    }
    if (a instanceof Date) return c = function(f, g) {
      for (f = w.g(f); ; ) if (f.length < g) f = ["0", f].join("");
      else return f;
    }, Xh(b, fd(['#inst "', c(a.getUTCFullYear(), 4), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"']));
    if (a instanceof RegExp) return Xh(b, fd(['#"', a.source, '"']));
    if ("symbol" === aa(a) || "undefined" !== typeof Symbol && a instanceof Symbol) return Xh(b, fd(["#object[", a.toString(), "]"]));
    if (u((function() {
      var f = null == a ? null : a.constructor;
      return null == f ? null : f.ac;
    })())) return Xh(b, fd([
      "#object[",
      a.constructor.ac.replace(RegExp("/", "g"), "."),
      "]"
    ]));
    e = (function() {
      var f = null == a ? null : a.constructor;
      return null == f ? null : f.name;
    })();
    c = u((function() {
      var f = null == e;
      return f ? f : /^[\s\xa0]*$/.test(e);
    })()) ? "Object" : e;
    return null == a.constructor ? Xh(b, fd(["#object[", c, "]"])) : Xh(b, fd(["#object[", c, " ", w.g(a), "]"]));
  }
  function bi(a, b, c) {
    var d = di.g(c);
    return u(d) ? (c = qd.i(c, ei, ai), d.i ? d.i(a, b, c) : d.call(null, a, b, c)) : ai(a, b, c);
  }
  function fi(a) {
    var b = sa();
    if (yd(a)) b = "";
    else {
      var c = w, d = c.g, e = new pa(), f = new gc(e);
      bi(D(a), f, b);
      a = C(G(a));
      for (var g = null, h = 0, k = 0; ; ) if (k < h) {
        var m = g.H(null, k);
        Kb(f, " ");
        bi(m, f, b);
        k += 1;
      } else if (a = C(a)) g = a, Gd(g) ? (a = Vb(g), h = Wb(g), g = a, m = K(a), a = h, h = m) : (m = D(g), Kb(f, " "), bi(m, f, b), a = G(g), g = null, h = 0), k = 0;
      else break;
      b = d.call(c, e);
    }
    return b;
  }
  function gi(a) {
    return a instanceof vc ? yc.h(null, ue(a)) : te.h(null, ue(a));
  }
  function hi(a) {
    if (u(false)) {
      var b = C(a), c = C(b), d = D(c);
      G(c);
      N(d, 0, null);
      N(d, 1, null);
      c = nd(a);
      for (a = null; ; ) {
        d = a;
        b = C(b);
        a = D(b);
        var e = G(b), f = a;
        a = N(f, 0, null);
        b = N(f, 1, null);
        if (u(f)) if (a instanceof z || a instanceof vc) if (u(d)) if (J.h(d, se(a))) c = qd.i(c, gi(a), b), a = d, b = e;
        else return null;
        else if (d = se(a), u(d)) c = qd.i(c, gi(a), b), a = d, b = e;
        else return null;
        else return null;
        else return new P(null, 2, 5, R, [d, c], null);
      }
    } else return null;
  }
  function ii(a, b, c, d, e) {
    return Vh(d, function(f, g, h) {
      var k = kb(f);
      c.i ? c.i(k, g, h) : c.call(null, k, g, h);
      Kb(g, " ");
      f = lb(f);
      return c.i ? c.i(f, g, h) : c.call(null, f, g, h);
    }, [w.g(a), "{"].join(""), ", ", "}", e, C(b));
  }
  function ci(a, b, c, d) {
    var e = Cd(a) ? hi(a) : null, f = N(e, 0, null);
    e = N(e, 1, null);
    return u(f) ? ii(["#:", w.g(f)].join(""), e, b, c, d) : ii(null, a, b, c, d);
  }
  sf.prototype.Y = n;
  sf.prototype.P = function(a, b, c) {
    Kb(b, "#object[cljs.core.Volatile ");
    bi(new r(null, 1, [ji, this.state], null), b, c);
    return Kb(b, "]");
  };
  Ac.prototype.Y = n;
  Ac.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  ve.prototype.Y = n;
  ve.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  gg.prototype.Y = n;
  gg.prototype.P = function(a, b, c) {
    return Vh(b, bi, "[", " ", "]", c, this);
  };
  mh.prototype.Y = n;
  mh.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  Ig.prototype.Y = n;
  Ig.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  Fc.prototype.Y = n;
  Fc.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  rg.prototype.Y = n;
  rg.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  qe.prototype.Y = n;
  qe.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  bd.prototype.Y = n;
  bd.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  Jh.prototype.Y = n;
  Jh.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  rh.prototype.Y = n;
  rh.prototype.P = function(a, b, c) {
    return ci(this, bi, b, c);
  };
  oh.prototype.Y = n;
  oh.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  tg.prototype.Y = n;
  tg.prototype.P = function(a, b, c) {
    return Vh(b, bi, "[", " ", "]", c, this);
  };
  Ah.prototype.Y = n;
  Ah.prototype.P = function(a, b, c) {
    return Vh(b, bi, "#{", " ", "}", c, this);
  };
  Ae.prototype.Y = n;
  Ae.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  of.prototype.Y = n;
  of.prototype.P = function(a, b, c) {
    Kb(b, "#object[cljs.core.Atom ");
    bi(new r(null, 1, [ji, this.state], null), b, c);
    return Kb(b, "]");
  };
  xh.prototype.Y = n;
  xh.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  Af.prototype.Y = n;
  Af.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  P.prototype.Y = n;
  P.prototype.P = function(a, b, c) {
    return Vh(b, bi, "[", " ", "]", c, this);
  };
  zg.prototype.Y = n;
  zg.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  ne.prototype.Y = n;
  ne.prototype.P = function(a, b) {
    return Kb(b, "()");
  };
  Ag.prototype.Y = n;
  Ag.prototype.P = function(a, b, c) {
    return Vh(b, bi, "#queue [", " ", "]", c, C(this));
  };
  r.prototype.Y = n;
  r.prototype.P = function(a, b, c) {
    return ci(this, bi, b, c);
  };
  Kh.prototype.Y = n;
  Kh.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  wh.prototype.Y = n;
  wh.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  md.prototype.Y = n;
  md.prototype.P = function(a, b, c) {
    return Vh(b, bi, "(", " ", ")", c, this);
  };
  vc.prototype.pb = n;
  vc.prototype.Za = function(a, b) {
    if (b instanceof vc) return uc(this, b);
    throw Error(["Cannot compare ", w.g(this), " to ", w.g(b)].join(""));
  };
  z.prototype.pb = n;
  z.prototype.Za = function(a, b) {
    if (b instanceof z) return re(this, b);
    throw Error(["Cannot compare ", w.g(this), " to ", w.g(b)].join(""));
  };
  tg.prototype.pb = n;
  tg.prototype.Za = function(a, b) {
    if (Fd(b)) return Od(this, b);
    throw Error(["Cannot compare ", w.g(this), " to ", w.g(b)].join(""));
  };
  P.prototype.pb = n;
  P.prototype.Za = function(a, b) {
    if (Fd(b)) return Od(this, b);
    throw Error(["Cannot compare ", w.g(this), " to ", w.g(b)].join(""));
  };
  gg.prototype.pb = n;
  gg.prototype.Za = function(a, b) {
    if (Fd(b)) return Od(this, b);
    throw Error(["Cannot compare ", w.g(this), " to ", w.g(b)].join(""));
  };
  function ki(a) {
    return function(b, c) {
      b = a.h ? a.h(b, c) : a.call(null, b, c);
      return Nc(b) ? new Mc(b) : b;
    };
  }
  function li(a, b) {
    Ka(function(c, d) {
      return a.g ? a.g(d) : a.call(null, d);
    }, null, b);
    return null;
  }
  function mi() {
  }
  function ni(a) {
    if (null != a && null != a.vc) a = a.vc(a);
    else {
      var b = ni[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = ni._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IEncodeJS.-clj->js", a);
    }
    return a;
  }
  function oi(a, b) {
    return (null != a ? n === a.uc || (a.ic ? 0 : Da(mi, a)) : Da(mi, a)) ? ni(a) : "string" === typeof a || "number" === typeof a || a instanceof z || a instanceof vc ? b.g ? b.g(a) : b.call(null, a) : fi(fd([a]));
  }
  var pi = function pi2(a) {
    for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
    else break;
    return pi2.u(arguments[0], 1 < c.length ? new Ac(c.slice(1), 0, null) : null);
  };
  pi.u = function(a, b) {
    b = Ve(b);
    var c = xc(b, qi, ue), d = function g(f) {
      if (null == f) return null;
      if (null != f ? n === f.uc || (f.ic ? 0 : Da(mi, f)) : Da(mi, f)) return ni(f);
      if (f instanceof z) return c.g ? c.g(f) : c.call(null, f);
      if (f instanceof vc) return w.g(f);
      if (Cd(f)) {
        var h = {};
        f = C(f);
        for (var k = null, m = 0, p = 0; ; ) if (p < m) {
          var q = k.H(null, p), t = N(q, 0, null), v = N(q, 1, null);
          q = h;
          t = oi(t, d);
          v = g(v);
          q[t] = v;
          p += 1;
        } else if (f = C(f)) Gd(f) ? (m = Vb(f), f = Wb(f), k = m, m = K(m)) : (k = D(f), m = N(k, 0, null), p = N(k, 1, null), k = h, m = oi(m, d), p = g(p), k[m] = p, f = G(f), k = null, m = 0), p = 0;
        else break;
        return h;
      }
      if (zd(f)) {
        h = [];
        f = C(vf.h(g, f));
        k = null;
        for (p = m = 0; ; ) if (p < m) q = k.H(null, p), h.push(q), p += 1;
        else if (f = C(f)) k = f, Gd(k) ? (f = Vb(k), p = Wb(k), k = f, m = K(f), f = p) : (f = D(k), h.push(f), f = G(k), k = null, m = 0), p = 0;
        else break;
        return h;
      }
      return f;
    };
    return d(a);
  };
  pi.J = 1;
  pi.G = function(a) {
    var b = D(a);
    a = G(a);
    return this.u(b, a);
  };
  function ri() {
  }
  function si(a, b) {
    if (null != a && null != a.tc) a = a.tc(a, b);
    else {
      var c = si[aa(null == a ? null : a)];
      if (null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = si._, null != c) a = c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("IEncodeClojure.-js->clj", a);
    }
    return a;
  }
  function ti(a) {
    var b = fd([ui, false]), c = Ve(b);
    c = y(c, ui);
    var d = u(c) ? te : w;
    return (function g(f) {
      return (null != f ? n === f.Vc || (f.ic ? 0 : Da(ri, f)) : Da(ri, f)) ? si(f, Qe(vh, b)) : Jd(f) ? Qh(vf.h(g, f)) : og(f) ? new gg(g(kb(f)), g(lb(f))) : zd(f) ? Kf.i(nd(f), vf.g(g), f) : Aa(f) ? Qb(Ka(function(h, k) {
        k = g(k);
        return Pb(h, k);
      }, Ob(ld), f)) : Ea(f) === Object ? Qb(Ka(function(h, k) {
        return He(h, d.g ? d.g(k) : d.call(null, k), g(null !== f && k in f ? f[k] : void 0));
      }, Ob(We), ja(f))) : f;
    })(a);
  }
  var vi = null;
  function wi() {
    null == vi && (vi = pf(new r(null, 3, [xi, We, yi, We, zi, We], null)));
    return vi;
  }
  function Ai(a, b, c) {
    var d = J.h(b, c);
    if (d) return d;
    d = zi.g(a);
    d = d.g ? d.g(b) : d.call(null, b);
    if (!(d = Md(d, c)) && (d = Fd(c))) if (d = Fd(b)) if (d = K(c) === K(b)) {
      d = true;
      for (var e = 0; ; ) if (d && e !== K(c)) d = Ai(a, b.g ? b.g(e) : b.call(null, e), c.g ? c.g(e) : c.call(null, e)), e += 1;
      else return d;
    } else return d;
    else return d;
    else return d;
  }
  function Bi(a) {
    var b = x(wi());
    return Ye(y(xi.g(b), a));
  }
  function Ci(a, b, c, d) {
    rf.h(a, function() {
      return x(b);
    });
    rf.h(c, function() {
      return x(d);
    });
  }
  var Di = function Di2(a, b, c) {
    var e = (function() {
      var f = x(c);
      return f.g ? f.g(a) : f.call(null, a);
    })();
    e = u(u(e) ? e.g ? e.g(b) : e.call(null, b) : e) ? true : null;
    if (u(e)) return e;
    e = (function() {
      for (var f = Bi(b); ; ) if (0 < K(f)) {
        var g = D(f);
        Di2.i ? Di2.i(a, g, c) : Di2.call(null, a, g, c);
        f = F(f);
      } else return null;
    })();
    if (u(e)) return e;
    e = (function() {
      for (var f = Bi(a); ; ) if (0 < K(f)) {
        var g = D(f);
        Di2.i ? Di2.i(g, b, c) : Di2.call(null, g, b, c);
        f = F(f);
      } else return null;
    })();
    return u(e) ? e : false;
  };
  function Ei(a, b, c, d) {
    c = Di(a, b, c);
    return u(c) ? c : Ai(d, a, b);
  }
  var Fi = function Fi2(a, b, c, d, e, f, g, h) {
    var m = Ka(function(q, t) {
      var v = N(t, 0, null);
      N(t, 1, null);
      if (Ai(x(c), b, v)) {
        q = null == q || Ei(v, D(q), e, x(c)) ? t : q;
        if (!Ei(D(q), v, e, x(c))) throw Error(["Multiple methods in multimethod '", w.g(a), "' match dispatch value: ", w.g(b), " -> ", w.g(v), " and ", w.g(D(q)), ", and neither is preferred"].join(""));
        return q;
      }
      return q;
    }, null, x(d)), p = (function() {
      var q;
      if (q = null == m) q = x(d), q = q.g ? q.g(h) : q.call(null, h);
      return u(q) ? new P(null, 2, 5, R, [h, q], null) : m;
    })();
    if (u(p)) {
      if (J.h(x(g), x(c))) return rf.B(
        f,
        qd,
        b,
        jd(p)
      ), jd(p);
      Ci(f, d, g, c);
      return Fi2.wa ? Fi2.wa(a, b, c, d, e, f, g, h) : Fi2.call(null, a, b, c, d, e, f, g, h);
    }
    return null;
  };
  function Gi(a, b) {
    throw Error(["No method in multimethod '", w.g(a), "' for dispatch value: ", w.g(b)].join(""));
  }
  function Hi(a, b, c, d, e, f, g) {
    var h = Ii;
    this.name = a;
    this.D = b;
    this.Nc = h;
    this.Tb = c;
    this.Vb = d;
    this.Pc = e;
    this.Ub = f;
    this.Pb = g;
    this.l = 4194305;
    this.F = 4352;
  }
  l = Hi.prototype;
  l.call = function(a) {
    switch (arguments.length - 1) {
      case 0:
        return this.v();
      case 1:
        return this.g(arguments[1]);
      case 2:
        return this.h(arguments[1], arguments[2]);
      case 3:
        return this.i(arguments[1], arguments[2], arguments[3]);
      case 4:
        return this.B(arguments[1], arguments[2], arguments[3], arguments[4]);
      case 5:
        return this.O(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      case 6:
        return this.qa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
      case 7:
        return this.Ka(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7]
        );
      case 8:
        return this.wa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]);
      case 9:
        return this.La(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
      case 10:
        return this.za(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10]);
      case 11:
        return this.Aa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11]);
      case 12:
        return this.Ba(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12]);
      case 13:
        return this.Ca(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13]
        );
      case 14:
        return this.Da(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14]);
      case 15:
        return this.Ea(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15]);
      case 16:
        return this.Fa(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16]
        );
      case 17:
        return this.Ga(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17]);
      case 18:
        return this.Ha(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16],
          arguments[17],
          arguments[18]
        );
      case 19:
        return this.Ia(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19]);
      case 20:
        return this.Ja(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16],
          arguments[17],
          arguments[18],
          arguments[19],
          arguments[20]
        );
      case 21:
        return this.Bb(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16],
          arguments[17],
          arguments[18],
          arguments[19],
          arguments[20],
          arguments[21]
        );
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length - 1)].join(""));
    }
  };
  l.apply = function(a, b) {
    return this.call.apply(this, [this].concat(Ia(b)));
  };
  l.v = function() {
    var a = this.D.v ? this.D.v() : this.D.call(null), b = Ji(this, a);
    u(b) || Gi(this.name, a);
    return b.v ? b.v() : b.call(null);
  };
  l.g = function(a) {
    var b = this.D.g ? this.D.g(a) : this.D.call(null, a), c = Ji(this, b);
    u(c) || Gi(this.name, b);
    return c.g ? c.g(a) : c.call(null, a);
  };
  l.h = function(a, b) {
    var c = this.D.h ? this.D.h(a, b) : this.D.call(null, a, b), d = Ji(this, c);
    u(d) || Gi(this.name, c);
    return d.h ? d.h(a, b) : d.call(null, a, b);
  };
  l.i = function(a, b, c) {
    var d = this.D.i ? this.D.i(a, b, c) : this.D.call(null, a, b, c), e = Ji(this, d);
    u(e) || Gi(this.name, d);
    return e.i ? e.i(a, b, c) : e.call(null, a, b, c);
  };
  l.B = function(a, b, c, d) {
    var e = this.D.B ? this.D.B(a, b, c, d) : this.D.call(null, a, b, c, d), f = Ji(this, e);
    u(f) || Gi(this.name, e);
    return f.B ? f.B(a, b, c, d) : f.call(null, a, b, c, d);
  };
  l.O = function(a, b, c, d, e) {
    var f = this.D.O ? this.D.O(a, b, c, d, e) : this.D.call(null, a, b, c, d, e), g = Ji(this, f);
    u(g) || Gi(this.name, f);
    return g.O ? g.O(a, b, c, d, e) : g.call(null, a, b, c, d, e);
  };
  l.qa = function(a, b, c, d, e, f) {
    var g = this.D.qa ? this.D.qa(a, b, c, d, e, f) : this.D.call(null, a, b, c, d, e, f), h = Ji(this, g);
    u(h) || Gi(this.name, g);
    return h.qa ? h.qa(a, b, c, d, e, f) : h.call(null, a, b, c, d, e, f);
  };
  l.Ka = function(a, b, c, d, e, f, g) {
    var h = this.D.Ka ? this.D.Ka(a, b, c, d, e, f, g) : this.D.call(null, a, b, c, d, e, f, g), k = Ji(this, h);
    u(k) || Gi(this.name, h);
    return k.Ka ? k.Ka(a, b, c, d, e, f, g) : k.call(null, a, b, c, d, e, f, g);
  };
  l.wa = function(a, b, c, d, e, f, g, h) {
    var k = this.D.wa ? this.D.wa(a, b, c, d, e, f, g, h) : this.D.call(null, a, b, c, d, e, f, g, h), m = Ji(this, k);
    u(m) || Gi(this.name, k);
    return m.wa ? m.wa(a, b, c, d, e, f, g, h) : m.call(null, a, b, c, d, e, f, g, h);
  };
  l.La = function(a, b, c, d, e, f, g, h, k) {
    var m = this.D.La ? this.D.La(a, b, c, d, e, f, g, h, k) : this.D.call(null, a, b, c, d, e, f, g, h, k), p = Ji(this, m);
    u(p) || Gi(this.name, m);
    return p.La ? p.La(a, b, c, d, e, f, g, h, k) : p.call(null, a, b, c, d, e, f, g, h, k);
  };
  l.za = function(a, b, c, d, e, f, g, h, k, m) {
    var p = this.D.za ? this.D.za(a, b, c, d, e, f, g, h, k, m) : this.D.call(null, a, b, c, d, e, f, g, h, k, m), q = Ji(this, p);
    u(q) || Gi(this.name, p);
    return q.za ? q.za(a, b, c, d, e, f, g, h, k, m) : q.call(null, a, b, c, d, e, f, g, h, k, m);
  };
  l.Aa = function(a, b, c, d, e, f, g, h, k, m, p) {
    var q = this.D.Aa ? this.D.Aa(a, b, c, d, e, f, g, h, k, m, p) : this.D.call(null, a, b, c, d, e, f, g, h, k, m, p), t = Ji(this, q);
    u(t) || Gi(this.name, q);
    return t.Aa ? t.Aa(a, b, c, d, e, f, g, h, k, m, p) : t.call(null, a, b, c, d, e, f, g, h, k, m, p);
  };
  l.Ba = function(a, b, c, d, e, f, g, h, k, m, p, q) {
    var t = this.D.Ba ? this.D.Ba(a, b, c, d, e, f, g, h, k, m, p, q) : this.D.call(null, a, b, c, d, e, f, g, h, k, m, p, q), v = Ji(this, t);
    u(v) || Gi(this.name, t);
    return v.Ba ? v.Ba(a, b, c, d, e, f, g, h, k, m, p, q) : v.call(null, a, b, c, d, e, f, g, h, k, m, p, q);
  };
  l.Ca = function(a, b, c, d, e, f, g, h, k, m, p, q, t) {
    var v = this.D.Ca ? this.D.Ca(a, b, c, d, e, f, g, h, k, m, p, q, t) : this.D.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t), A = Ji(this, v);
    u(A) || Gi(this.name, v);
    return A.Ca ? A.Ca(a, b, c, d, e, f, g, h, k, m, p, q, t) : A.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t);
  };
  l.Da = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v) {
    var A = this.D.Da ? this.D.Da(a, b, c, d, e, f, g, h, k, m, p, q, t, v) : this.D.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v), E = Ji(this, A);
    u(E) || Gi(this.name, A);
    return E.Da ? E.Da(a, b, c, d, e, f, g, h, k, m, p, q, t, v) : E.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v);
  };
  l.Ea = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A) {
    var E = this.D.Ea ? this.D.Ea(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A) : this.D.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A), B = Ji(this, E);
    u(B) || Gi(this.name, E);
    return B.Ea ? B.Ea(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A) : B.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A);
  };
  l.Fa = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E) {
    var B = this.D.Fa ? this.D.Fa(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E) : this.D.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E), I = Ji(this, B);
    u(I) || Gi(this.name, B);
    return I.Fa ? I.Fa(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E) : I.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E);
  };
  l.Ga = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B) {
    var I = this.D.Ga ? this.D.Ga(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B) : this.D.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B), Q = Ji(this, I);
    u(Q) || Gi(this.name, I);
    return Q.Ga ? Q.Ga(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B) : Q.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B);
  };
  l.Ha = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I) {
    var Q = this.D.Ha ? this.D.Ha(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I) : this.D.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I), H = Ji(this, Q);
    u(H) || Gi(this.name, Q);
    return H.Ha ? H.Ha(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I) : H.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I);
  };
  l.Ia = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q) {
    var H = this.D.Ia ? this.D.Ia(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q) : this.D.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q), O = Ji(this, H);
    u(O) || Gi(this.name, H);
    return O.Ia ? O.Ia(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q) : O.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q);
  };
  l.Ja = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H) {
    var O = this.D.Ja ? this.D.Ja(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H) : this.D.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H), S = Ji(this, O);
    u(S) || Gi(this.name, O);
    return S.Ja ? S.Ja(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H) : S.call(null, a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H);
  };
  l.Bb = function(a, b, c, d, e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H, O) {
    var S = Ue(this.D, a, b, c, d, fd([e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H, O])), ca = Ji(this, S);
    u(ca) || Gi(this.name, S);
    return Ue(ca, a, b, c, d, fd([e, f, g, h, k, m, p, q, t, v, A, E, B, I, Q, H, O]));
  };
  function Ki(a, b, c) {
    rf.B(a.Vb, qd, b, c);
    Ci(a.Ub, a.Vb, a.Pb, a.Tb);
  }
  function Ji(a, b) {
    J.h(x(a.Pb), x(a.Tb)) || Ci(a.Ub, a.Vb, a.Pb, a.Tb);
    var c = x(a.Ub);
    c = c.g ? c.g(b) : c.call(null, b);
    return u(c) ? c : Fi(a.name, b, a.Tb, a.Vb, a.Pc, a.Ub, a.Pb, a.Nc);
  }
  l.Db = function() {
    return Xb(this.name);
  };
  l.Eb = function() {
    return Yb(this.name);
  };
  l.T = function() {
    return ba(this);
  };
  function Li(a) {
    this.nb = a;
    this.A = null;
    this.l = 2153775104;
    this.F = 2048;
  }
  l = Li.prototype;
  l.Ic = n;
  l.toString = function() {
    return this.nb;
  };
  l.S = function(a, b) {
    return (a = null != b ? n === b.Ic ? true : false : false) ? this.nb === b.nb : a;
  };
  l.P = function(a, b) {
    return Kb(b, ['#uuid "', w.g(this.nb), '"'].join(""));
  };
  l.T = function() {
    null == this.A && (this.A = qc(this.nb));
    return this.A;
  };
  l.Za = function(a, b) {
    if (b instanceof Li) return la(this.nb, b.nb);
    throw Error(["Cannot compare ", w.g(this), " to ", w.g(b)].join(""));
  };
  function Mi(a, b, c) {
    var d = Error(a);
    this.message = a;
    this.data = b;
    this.cause = c;
    this.name = d.name;
    this.description = d.description;
    this.number = d.number;
    this.fileName = d.fileName;
    this.lineNumber = d.lineNumber;
    this.columnNumber = d.columnNumber;
    this.stack = d.stack;
    return this;
  }
  Mi.prototype.__proto__ = Error.prototype;
  Mi.prototype.Y = n;
  Mi.prototype.P = function(a, b, c) {
    Kb(b, "#error {:message ");
    bi(this.message, b, c);
    u(this.data) && (Kb(b, ", :data "), bi(this.data, b, c));
    u(this.cause) && (Kb(b, ", :cause "), bi(this.cause, b, c));
    return Kb(b, "}");
  };
  Mi.prototype.toString = function() {
    return hc(this);
  };
  var Ni = new z(null, "nil", "nil", 99600501), Oi = new z(null, "entity-def", "entity-def", 1479583824), Pi = new z(null, "ge", "ge", 2089513250), Qi = new z(null, "line", "line", 212345235), Ri = new z(null, "string", "string", -1989541586), Si = new z(null, "list-literal", "list-literal", 408989698), Ti = new z(null, "binary-op", "binary-op", -1718429858), Ui = new z(null, "gt", "gt", -1797443692), Vi = new z(null, "reader-exception", "reader-exception", -1938323098), Wi = new z(null, "root-entity", "root-entity", -205257190), Xi = new z(
    null,
    "after-not",
    "after-not",
    989078972
  ), Yi = new vc(null, "js", "js", -886355190, null), Zi = new z(null, "relations", "relations", -427124442), $i = new z(null, "type-conflict?", "type-conflict?", 444149602), aj = new z(null, "scalar-and-expr", "scalar-and-expr", -1622862084), bj = new z(null, "namespace", "namespace", -377510372), cj = new vc(null, "uuid", "uuid", -504564192, null), dj = new z(null, "used-fns", "used-fns", -104591145), ej = new z(null, "description", "description", -1428560544), xa = new z(null, "dup", "dup", 556298533), fj = new z(
    null,
    "end-offset",
    "end-offset",
    -1290057545
  ), gj = new z(null, "count", "count", 2139924085), hj = new z(null, "path-continuation", "path-continuation", 1949828098), ij = new z(null, "offsets", "offsets", 727555611), jj = new z(null, "number", "number", 1570378438), kj = new z(null, "message", "message", -406056002), lj = new z(null, "uuid", "uuid", -2145095719), mj = new z(null, "eq-parens", "eq-parens", 1103192736), va = new z(null, "readably", "readably", 1129599760), nj = new z(null, "eq", "eq", -618539067), T = new z(null, "from", "from", 1815293044), oj = new z(
    null,
    "arg-stmt",
    "arg-stmt",
    1931784665
  ), pj = new z(null, "cardinality", "cardinality", -104971109), qj = new z(null, "dash", "dash", 23821356), tj = new z(null, "block-start", "block-start", -333036359), uj = new z(null, "param-name", "param-name", 1477186051), vj = new z(null, "kind", "kind", -717265803), wj = new z(null, "entity", "entity", -450970276), xj = new z(null, "after-like", "after-like", -1325061198), yj = new z(null, "in-parens", "in-parens", 2114595281), zj = new z(null, "in-agg-body?", "in-agg-body?", 2079349618), Aj = new z(null, "selections", "selections", -1277610233), Bj = new z(null, "after-in", "after-in", 155255131), Cj = new z(null, "dedent", "dedent", -1577188063), Dj = new z(null, "after-is", "after-is", 375979581), Ej = new z(null, "neq", "neq", 1883246164), Fj = new vc(null, "Inf", "Inf", 647172781, null), Gj = new z(null, "severity", "severity", 175684886), Hj = new z(null, "agg-attr", "agg-attr", 1640427710), Ij = new z(null, "scalar-prim", "scalar-prim", 1979598231), Jj = new z(null, "data-var", "data-var", -172190977), Kj = new z(null, "scope", "scope", -439358418), Ii = new z(null, "default", "default", -1987822328), Jf = new z(null, "children", "children", -940561982), Lj = new z(null, "numeric-only?", "numeric-only?", -714521568), Mj = new z(null, "strable", "strable", 1877668047), Nj = new z(null, "ex-kind", "ex-kind", 1581199296), Oj = new z(null, "col", "col", -1959363084), Pj = new z(null, "relation", "relation", -693437925), Qj = new z(null, "relations-only?", "relations-only?", -973036265), Rj = new z(null, "errors", "errors", -908790718), Sj = new z(null, "primary-expr", "primary-expr", 1746685142), Tj = new z(null, "offset", "offset", 296498311), Uj = new z(
    null,
    "tokens",
    "tokens",
    -818939304
  ), Vj = new z(null, "decl-offset", "decl-offset", 2058293567), Wj = new z(null, "map", "map", 1371690461), Xj = new z(null, "params", "params", 710516235), Yj = new z(null, "scalar-or-expr", "scalar-or-expr", 345993837), Zj = new z(null, "any-parens", "any-parens", -1041584282), ak = new z(null, "insert", "insert", 1286475395), bk = new z(null, "or-expr", "or-expr", 1848298779), ck = new z(null, "arg-predicate", "arg-predicate", 6664335), dk = new z(null, "typed?", "typed?", -1077227317), ek = new z(
    null,
    "in-string?",
    "in-string?",
    890620978
  ), fk = new z(null, "sql?", "sql?", -773838128), gk = new z(null, "optional", "optional", 2053951509), hk = new z(null, "readers", "readers", -2118263030), ik = new z(null, "type-args", "type-args", 1580007623), jk = new z(null, "param-ref", "param-ref", -579458975), kk = new z(null, "path", "path", -188191168), lk = new z(null, "and-expr", "and-expr", -544150156), mk = new z(null, "dot", "dot", 1442709401), nk = new z(null, "_eq", "_eq", 1127703966), ok = new z(null, "arg-list", "arg-list", 332788853), pk = new z(null, "column", "column", 2078222095), qk = new z(null, "root-entity-line", "root-entity-line", 146588817), rk = new z(null, "op", "op", -1882987955), sk = new z(null, "count-child", "count-child", 482936112), tk = new z(null, "enum", "enum", 1679018432), uk = new z(null, "error", "error", -978969032), vk = new z(null, "float", "float", -1732389368), wk = new z(null, "eof", "eof", -489063237), xk = new z(null, "snippet", "snippet", 953581994), yk = new z(null, "root", "root", -448657453), zk = new z(null, "order-attr", "order-attr", 251507290), Ak = new z(null, "agg", "agg", -2001869296), Bk = new z(
    null,
    "args",
    "args",
    1315556576
  ), Ck = new z(null, "query", "query", -1288509510), Dk = new z(null, "eq-in", "eq-in", 1015687057), Ek = new z(null, "after-attr-in-pred", "after-attr-in-pred", 368221365), Fk = new z(null, "watch", "watch", 380988277), Gk = new vc(null, "-Inf", "-Inf", -2123243689, null), Hk = new z(null, "missing", "missing", 362507769), Ik = new z(null, "taken", "taken", 1185385376), Jk = new z(null, "schema", "schema", -1582001791), Kk = new z(null, "info", "info", -317069002), Lk = new z(null, "used-attrs", "used-attrs", 2072245993), Mk = new z(
    null,
    "list",
    "list",
    765357683
  ), Nk = new z(null, "pred-op", "pred-op", 492610915), xi = new z(null, "parents", "parents", -2027538891), Ok = new z(null, "siblings", "siblings", 382285157), Pk = new z(null, "count-block", "count-block", 970622465), Qk = new z(null, "source", "source", -433931539), Rk = new z(null, "alias", "alias", -2039751630), Sk = new z(null, "file", "file", -1269645878), Tk = new z(null, "vals", "vals", 768058733), Uk = new z(null, "value", "value", 305978217), Vk = new z(null, "le", "le", -219152293), Wk = new z(null, "keyword", "keyword", 811389747), Xk = new z(null, "on-relation", "on-relation", -989228375), Yk = new vc(null, "NaN", "NaN", 666918153, null), Zk = new z(null, "agg-block-body", "agg-block-body", 796683127), $k = new z(null, "lt", "lt", 421989243), al = new z(null, "blank-line", "blank-line", -383794769), bl = new z(null, "lparen", "lparen", -1339862485), cl = new z(null, "dir", "dir", 1734754661), dl = new z(null, "normal", "normal", -1519123858), el = new z(null, "block-comment", "block-comment", -1841772213), U = new z(null, "diags", "diags", -2061915968), fl = new z(
    null,
    "agg-attr-name",
    "agg-attr-name",
    -1776347620
  ), gl = new z(null, "optional?", "optional?", 1184638129), hl = new z(null, "brace", "brace", -1705077624), il = new z(null, "body-end", "body-end", 67906429), jl = new z(null, "scalar-filter", "scalar-filter", -158240055), kl = new z(null, "set", "set", 304602554), ll = new z(null, "members", "members", 159001018), ml = new vc(null, "queue", "queue", -1198599890, null), W = new z(null, "text", "text", -1790561697), nl = new z(null, "line-start-root", "line-start-root", 974733310), ol = new z(null, "meta-key", "meta-key", 280559106), pl = new z(null, "join-marker", "join-marker", -708964227), wa = new z(null, "meta", "meta", 1499536964), X = new z(null, "node", "node", 581201198), ql = new z(null, "agg-kind", "agg-kind", 1117910606), ya = new z(null, "print-length", "print-length", 1931866356), rl = new vc(null, "/", "/", -1371932971, null), sl = new z(null, "param-default", "param-default", -1625922832), tl = new z(null, "int", "int", -1741416922), ul = new z(null, "rparen", "rparen", 302222095), vl = new z(null, "attr", "attr", -604132353), zi = new z(null, "ancestors", "ancestors", -776045424), wl = new z(null, "agg-relation", "agg-relation", -1781592216), xl = new z(null, "code", "code", 1586293142), yl = new z(null, "dstring", "dstring", -419154112), zl = new z(null, "after-predicate-value", "after-predicate-value", 1222709003), Al = new z(null, "attr-def", "attr-def", -944743582), Bl = new z(null, "integer", "integer", -604721710), Cl = new z(null, "currency", "currency", -898327568), Dl = new z(null, "options", "options", 99638489), El = new z(null, "body", "body", -2049205669), Fl = new z(null, "mode", "mode", 654403691), Gl = new z(
    null,
    "hierarchy",
    "hierarchy",
    -1053470341
  ), Hl = new z(null, "comma", "comma", 1699024745), Il = new z(null, "named", "named", -422393479), Jl = new z(null, "agg-block", "agg-block", -948650240), Kl = new z(null, "mutate", "mutate", 1422419038), Ll = new z(null, "apply", "apply", 1320385493), ei = new z(null, "fallback-impl", "fallback-impl", -1501286995), Ml = new z(null, "name", "name", 1843675177), Nl = new z(null, "tag", "tag", -1290361223), Ol = new z(null, "label", "label", 1718410804), Pl = new z(null, "illegal-argument", "illegal-argument", -1845493170), Ql = new z(
    null,
    "order-dir",
    "order-dir",
    919591676
  ), qi = new z(null, "keyword-fn", "keyword-fn", -64566675), Rl = new z(null, "section", "section", -300141526), ui = new z(null, "keywordize-keys", "keywordize-keys", 1310784252), Y = new z(null, "to", "to", 192099007), Sl = new vc(null, "inst", "inst", -2008473268, null), Tl = new z(null, "line-comment", "line-comment", 1188932211), Ul = new z(null, "unknown-types", "unknown-types", -990897338), Vl = new z(null, "entities", "entities", 1940967403), Wl = new z(null, "ambiguous", "ambiguous", -1979837908), Xl = new z(
    null,
    "block-opener",
    "block-opener",
    630825111
  ), Yl = new z(null, "batch", "batch", -662921200), Zl = new z(null, "warning", "warning", -1685650671), $l = new z(null, "dropped?", "dropped?", 360675010), am = new z(null, "positional", "positional", -203580463), cm = new z(null, "param", "param", 2013631823), dm = new z(null, "value-suggestion", "value-suggestion", -147786129), em = new z(null, "values", "values", 372645556), fm = new z(null, "attributes", "attributes", -74013604), gm = new z(null, "relation-prefix", "relation-prefix", -902132077), hm = new z(
    null,
    "colon",
    "colon",
    -965200945
  ), im = new z(null, "indent", "indent", -148200125), yi = new z(null, "descendants", "descendants", 1824886031), jm = new z(null, "root-parens", "root-parens", -414331741), km = new z(null, "start", "start", -355208981), lm = new z(null, "word", "word", -420123725), mm = new z(null, "returns", "returns", -615452578), nm = new z(null, "raw-type", "raw-type", -1688280240), ji = new z(null, "val", "val", 128701612), om = new z(null, "rels", "rels", 1770187185), pm = new z(null, "vector", "vector", 1902966158), qm = new z(
    null,
    "arrow",
    "arrow",
    1071351425
  ), rm = new z(null, "body-offset", "body-offset", 1740708285), sm = new z(null, "root-entity-def", "root-entity-def", -271500806), tm = new z(null, "order-spec", "order-spec", -1855125096), um = new z(null, "end-decl", "end-decl", 764756192), vm = new z(null, "used-rels", "used-rels", 1452160701), wm = new z(null, "entity-stack", "entity-stack", 1163353080), xm = new z(null, "parens", "parens", 1028661830), ym = new z(null, "scalar", "scalar", 1611359571), ta = new z(null, "flush-on-newline", "flush-on-newline", -151457939), zm = new z(
    null,
    "count-block-body",
    "count-block-body",
    -68975556
  ), Am = new z("synthigy.xsql.compile", "absent", "synthigy.xsql.compile/absent", -982408818), Bm = new z(null, "timestamp", "timestamp", 579478971), Cm = new z(null, "detail", "detail", -1545345025), Dm = new z(null, "desc-error", "desc-error", -1990825691), Em = new z(null, "warnings", "warnings", -735437651), Fm = new z(null, "unique", "unique", 329397282), Gm = new z(null, "marker-before", "marker-before", -1838704997), Hm = new z(null, "statement", "statement", -32780863), Im = new z(
    null,
    "header-offsets",
    "header-offsets",
    1711008954
  ), Jm = new z(null, "path-target-entity", "path-target-entity", 1516169653), Km = new z(null, "character", "character", 380652989), Lm = new z(null, "agg-fn", "agg-fn", -616417360), Mm = new z(null, "positional-count", "positional-count", -836677815), Nm = new z(null, "arg-list-start", "arg-list-start", -250816387), Om = new z(null, "reader-error", "reader-error", 1610253121), Pm = new z(null, "boolean", "boolean", -1919418404), Qm = new z(null, "relation-detail", "relation-detail", 171604810), Rm = new z(
    null,
    "namespaced-map",
    "namespaced-map",
    1235665380
  ), Sm = new z(null, "block", "block", 664686210), Tm = new z(null, "identifier", "identifier", -805503498), Um = new z(null, "symbol", "symbol", -1038572696), Vm = new z(null, "grouped-expr", "grouped-expr", -2034097955), Wm = new z(null, "order", "order", -1254677256), Xm = new z(null, "attrs", "attrs", -2090668713), Wh = new z(null, "more-marker", "more-marker", -14717935), Ym = new z(null, "pos", "pos", -864607220), Zm = new z(null, "span", "span", 1394872991), $m = new z(null, "newline", "newline", 1790071323), Z = new z(null, "type", "type", 1174270348), di = new z(null, "alt-impl", "alt-impl", 670969595), an = new z(null, "none", "none", 1333468478), bn = new z(null, "after-is-not", "after-is-not", -11763153), cn = new z(null, "target", "target", 253001721), dn = new z(null, "array?", "array?", 1405427572), en = new z(null, "param-type-raw", "param-type-raw", 332931050), fn = new z(null, "param-type-args", "param-type-args", -1667822829);
  var gn = require_node3();
  var hn = (init_main(), __toCommonJS(main_exports));
  var jn = require("fs");
  var kn = require("path");
  function ln(a, b, c) {
    var d = u(b.ignoreCase) ? "gi" : "g";
    d = u(b.multiline) ? [d, "m"].join("") : d;
    return a.replace(new RegExp(b.source, u(b.unicode) ? [d, "u"].join("") : d), c);
  }
  function mn(a) {
    return (function() {
      function b(d) {
        var e = null;
        if (0 < arguments.length) {
          e = 0;
          for (var f = Array(arguments.length - 0); e < f.length; ) f[e] = arguments[e + 0], ++e;
          e = new Ac(f, 0, null);
        }
        return c.call(this, e);
      }
      function c(d) {
        d = yf(d);
        if (J.h(K(d), 1)) return d = D(d), a.g ? a.g(d) : a.call(null, d);
        d = ng(d);
        return a.g ? a.g(d) : a.call(null, d);
      }
      b.J = 0;
      b.G = function(d) {
        d = C(d);
        return c(d);
      };
      b.u = c;
      return b;
    })();
  }
  function nn(a, b, c) {
    if ("string" === typeof b) return a.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c);
    if (b instanceof RegExp) return "string" === typeof c ? ln(a, b, c) : ln(a, b, mn(c));
    throw ["Invalid match arg: ", w.g(b)].join("");
  }
  function on(a, b) {
    var c = new pa();
    for (b = C(b); ; ) if (null != b) c.append(w.g(D(b))), b = G(b), null != b && c.append(a);
    else return c.toString();
  }
  function pn(a, b) {
    if (0 >= b || b >= 2 + K(a)) return M.h(ng(ed("", vf.h(w, C(a)))), "");
    if (u(je ? Bb(1, b) : ie.call(null, 1, b))) return new P(null, 1, 5, R, [a], null);
    if (u(je ? Bb(2, b) : ie.call(null, 2, b))) return new P(null, 2, 5, R, ["", a], null);
    b -= 2;
    var c = M.h;
    var d = ng(vf.h(w, C(a)));
    d = ug(null, d, 0, b | 0, null);
    return c.call(M, ng(ed("", d)), a.substring(b));
  }
  function qn(a, b) {
    return rn(a, b, 0);
  }
  function rn(a, b, c) {
    if ("/(?:)/" === w.g(b)) b = pn(a, c);
    else if (1 > c) b = ng(w.g(a).split(b));
    else a: for (var d = c, e = ld; ; ) {
      if (1 === d) {
        b = M.h(e, a);
        break a;
      }
      var f = Sh(b, a);
      if (null != f) {
        var g = a.indexOf(f);
        f = a.substring(g + K(f));
        --d;
        e = M.h(e, a.substring(0, g));
        a = f;
      } else {
        b = M.h(e, a);
        break a;
      }
    }
    if (0 === c && 1 < K(b)) a: for (c = b; ; ) if ("" === wd(c)) c = xd(c);
    else break a;
    else c = b;
    return c;
  }
  function sn(a) {
    return ia(a);
  }
  function tn(a) {
    return /^[\s\xa0]*$/.test(null == a ? "" : String(a));
  }
  function un(a, b) {
    a = a.indexOf(b);
    return 0 > a ? null : a;
  }
  function vn(a, b, c) {
    a = a.indexOf(b, c);
    return 0 > a ? null : a;
  }
  function wn(a, b) {
    a = a.lastIndexOf(b);
    return 0 > a ? null : a;
  }
  function xn(a, b) {
    return ha(a, b);
  }
  function yn(a) {
    const b = a.length - 1;
    return 0 <= b && a.indexOf('"', b) == b;
  }
  ;
  function zn(a, b, c) {
    return new r(null, 3, [X, a, Zm, b, Jf, ng(c)], null);
  }
  function An(a, b, c) {
    return new r(null, 3, [X, a, Zm, b, W, c], null);
  }
  function Bn(a) {
    return Cd(a) && Md(a, Jf);
  }
  function Cn(a, b) {
    return Nf(function(c) {
      return J.h(b, X.g(c));
    }, Jf.g(a));
  }
  function Dn(a, b) {
    return D(Cn(a, b));
  }
  ;
  var En = /[a-zA-Z_]/, Fn = /[a-zA-Z0-9_]/, Gn = /[0-9]/;
  function Hn(a, b) {
    return 0 <= b && b < K(a) ? a.substring(b, b + 1) : null;
  }
  function In(a) {
    return u(a) ? Rh(En, a) : a;
  }
  function Jn(a) {
    return u(a) ? Rh(Fn, a) : a;
  }
  function Kn(a) {
    return u(a) ? Rh(Gn, a) : a;
  }
  function Ln(a) {
    return J.h(" ", a) || J.h("	", a);
  }
  function Mn(a, b, c) {
    for (var d = K(a); ; ) {
      var e;
      if (e = b < d) e = Hn(a, b), e = c.g ? c.g(e) : c.call(null, e);
      if (u(e)) b += 1;
      else return b;
    }
  }
  function Nn(a, b) {
    return Mn(a, b, function(c) {
      return u(c) ? Xe("\n", c) : c;
    });
  }
  function On(a, b) {
    var c = J.h("-", Hn(a, b)) ? b + 1 : b;
    c = Mn(a, c, Kn);
    c = J.h(".", Hn(a, c)) ? Mn(a, c + 1, Kn) : c;
    return new r(null, 4, [Z, jj, T, b, Y, c, W, a.substring(b, c)], null);
  }
  function Pn(a, b) {
    var c = K(a), d = b + 1, e = Hn(a, d);
    if (null == e || Ba(In(e))) return new r(null, 5, [Z, uk, T, b, Y, d, W, "?", kj, "XSQL parameters must be named (?name[:type][])"], null);
    var f = Mn(a, d, Jn);
    e = a.substring(d, f);
    var g = (d = J.h("?", Hn(a, f))) ? f + 1 : f, h = (f = J.h(":", Hn(a, g)) && Xe(":", Hn(a, g + 1))) ? g + 1 : null, k = u(h) ? Mn(a, h, Jn) : null, m = u(h) ? a.substring(h, k) : null, p = u(u(k) ? 0 < k - h && J.h("(", Hn(a, k)) : k) ? k : !f && J.h("(", Hn(a, g)) ? g : null, q = u(p) ? (function() {
      for (var H = p + 1; ; ) {
        if (H >= c) return null;
        if (J.h(")", Hn(a, H))) return H;
        if (J.h("\n", Hn(
          a,
          H
        ))) return null;
        H += 1;
      }
    })() : null, t = u(q) ? ng(Gf(yd, vf.h(sn, qn(a.substring(p + 1, q), /,/)))) : null, v = u(q) ? q + 1 : null, A = u(v) ? v : u(k) ? k : g, E = J.h("[", Hn(a, A)) && J.h("]", Hn(a, A + 1));
    g = E ? A + 2 : u(v) ? v : u(k) ? k : g;
    if (f && J.h(h, k)) return new r(null, 5, [Z, uk, T, b, Y, g, W, a.substring(b, g), kj, "expected type token after `:`"], null);
    if (u(u(p) ? null == q : p)) return new r(null, 5, [Z, uk, T, b, Y, u(k) ? k : b, W, a.substring(b, u(k) ? k : b), kj, "unterminated `(\u2026)` restriction set on parameter type"], null);
    if (u((function() {
      if (u(q)) {
        var H = yd(t);
        return H ? H : df(function(O) {
          return Ba(Rh(
            /[a-z_][a-z0-9_]*/,
            O
          ));
        }, t);
      }
      return q;
    })())) return new r(null, 5, [Z, uk, T, b, Y, g, W, a.substring(b, g), kj, "restriction set must be comma-separated snake_case identifiers"], null);
    var B = J.h("=", Hn(a, g)), I = g + 1;
    f = B ? J.h("[", Hn(a, I)) ? (function() {
      for (var H = I + 1; ; ) {
        if (H >= c) return H;
        if (J.h("]", Hn(a, H))) return H + 1;
        H += 1;
      }
    })() : J.h('"', Hn(a, I)) ? (function() {
      for (var H = I + 1; ; ) {
        if (H >= c) return H;
        if (J.h('"', Hn(a, H))) return H + 1;
        H += 1;
      }
    })() : Mn(a, I, function(H) {
      if (u(H)) {
        var O = new Ah(null, new r(null, 7, [
          "]",
          null,
          "\r",
          null,
          ")",
          null,
          "	",
          null,
          ",",
          null,
          " ",
          null,
          "\n",
          null
        ], null), null);
        H = O.g ? O.g(H) : O.call(null, H);
        H = Ba(H);
      }
      return H;
    }) : null;
    h = B ? f : g;
    var Q = B ? a.substring(I, f) : null;
    if (d && B) return new r(null, 5, [Z, uk, T, b, Y, h, W, a.substring(b, h), kj, ["?", e, "? is optional, so it can't have a default \u2014 drop `?` to always filter, or drop `=", Q, "` to skip the predicate when absent"].join("")], null);
    if (u((function() {
      if (B) {
        var H = new Ah(null, new r(null, 2, ["string", null, "text", null], null), null);
        H = H.g ? H.g(m) : H.call(null, m);
        return u(H) ? !E && !(2 <= K(Q) && ha(Q, '"') && yn(Q)) : H;
      }
      return B;
    })())) return new r(
      null,
      5,
      [Z, uk, T, b, Y, h, W, a.substring(b, h), kj, ["?", e, ":", m, ' default must be double-quoted \u2014 write ="', nn(Q, /^'|'$/, ""), '"'].join("")],
      null
    );
    b = new r(null, 7, [Z, jk, T, b, Y, h, W, a.substring(b, h), uj, e, en, m, dn, E], null);
    b = d ? qd.i(b, gl, true) : b;
    b = u(t) ? qd.i(b, fn, t) : b;
    return B ? qd.i(b, sl, Q) : b;
  }
  function Qn(a, b) {
    var c = Hn(a, b), d = Hn(a, b + 1);
    if (J.h("-", c) && J.h(">", d)) b = new r(null, 4, [Z, qm, T, b, Y, b + 2, W, "->"], null);
    else if (J.h("!", c) && J.h("=", d)) b = new r(null, 4, [Z, Ej, T, b, Y, b + 2, W, "!="], null);
    else if (J.h("<", c) && J.h("=", d)) b = new r(null, 4, [Z, Vk, T, b, Y, b + 2, W, "<="], null);
    else if (J.h(">", c) && J.h("=", d)) b = new r(null, 4, [Z, Pi, T, b, Y, b + 2, W, ">="], null);
    else if (J.h("=", c)) b = new r(null, 4, [Z, nj, T, b, Y, b + 1, W, "="], null);
    else if (J.h("<", c)) b = new r(null, 4, [
      Z,
      $k,
      T,
      b,
      Y,
      b + 1,
      W,
      "<"
    ], null);
    else if (J.h(">", c)) b = new r(null, 4, [Z, Ui, T, b, Y, b + 1, W, ">"], null);
    else if (J.h(":", c)) b = new r(null, 4, [Z, hm, T, b, Y, b + 1, W, ":"], null);
    else if (J.h(",", c)) b = new r(null, 4, [Z, Hl, T, b, Y, b + 1, W, ","], null);
    else if (J.h(".", c)) b = new r(null, 4, [Z, mk, T, b, Y, b + 1, W, "."], null);
    else if (J.h("(", c)) b = new r(null, 4, [Z, bl, T, b, Y, b + 1, W, "("], null);
    else if (J.h(")", c)) b = new r(null, 4, [Z, ul, T, b, Y, b + 1, W, ")"], null);
    else if (J.h("-", c)) u(Kn(d)) ? b = On(a, b) : (a = Jn(Hn(a, b - 1)), a = u(a) ? In(d) : a, b = u(a) ? new r(null, 5, [Z, uk, T, b, Y, b + 1, W, "-", kj, "identifiers must be snake_case (use '_' not '-')"], null) : new r(null, 4, [Z, qj, T, b, Y, b + 1, W, "-"], null));
    else if (J.h('"', c)) a: for (d = K(a), c = b + 1; ; ) {
      if (c >= d) {
        b = new r(null, 5, [Z, uk, T, b, Y, d, W, a.substring(b, d), kj, "unterminated string"], null);
        break a;
      }
      if (J.h("\n", Hn(a, c))) {
        b = new r(null, 5, [Z, uk, T, b, Y, c, W, a.substring(b, c), kj, "unterminated string (newline)"], null);
        break a;
      }
      if (J.h("\\", Hn(a, c))) c += 2;
      else {
        if (J.h('"', Hn(a, c))) {
          b = new r(null, 4, [Z, Ri, T, b, Y, c + 1, W, a.substring(b, c + 1)], null);
          break a;
        }
        c += 1;
      }
    }
    else J.h(
      "?",
      c
    ) ? b = Pn(a, b) : u(Kn(c)) ? b = On(a, b) : u(In(c)) ? (d = Mn(a, b + 1, Jn), a = a.substring(b, d), b = u(Sh(/[A-Z]/, a)) ? new r(null, 5, [Z, uk, T, b, Y, d, W, a, kj, ['identifiers must be snake_case \u2014 "', a, '" contains uppercase'].join("")], null) : new r(null, 4, [Z, Tm, T, b, Y, d, W, a], null)) : b = J.h("#", c) ? new r(null, 5, [Z, uk, T, b, Y, b + 1, W, "#", kj, "comments must start at the beginning of a line"], null) : new r(null, 5, [Z, uk, T, b, Y, b + 1, W, c, kj, ["unexpected character: ", fi(fd([c]))].join("")], null);
    return b;
  }
  function Rn(a) {
    for (var b = K(a), c = 0, d = new P(null, 1, 5, R, [0], null), e = true, f = 0, g = ld; ; ) {
      if (c >= b) {
        var h = 0 < b ? Hn(a, b - 1) : null;
        a = (function() {
          var t = g;
          return 0 < b && Xe("\n", h) && !e ? M.h(t, new r(null, 4, [Z, $m, T, b, Y, b, W, ""], null)) : t;
        })();
        c = ng(Bf(K(d) - 1, new r(null, 4, [Z, Cj, T, b, Y, b, W, ""], null)));
        a = Kf.h(a, c);
        return M.h(a, new r(null, 4, [Z, wk, T, b, Y, b, W, ""], null));
      }
      if (e) {
        var k = Mn(a, c, Ln), m = k - c, p = Hn(a, k);
        null == p || J.h("\n", p) || J.h("#", p) ? (k = Nn(a, c), k = m = k < b && J.h("\n", Hn(a, k)) ? k + 1 : k, p = f, m = M.h(g, new r(null, 4, [Z, al, T, c, Y, m, W, a.substring(
          c,
          m
        )], null)), c = k, e = true, f = p, g = m) : m > wd(d) ? (p = k, d = M.h(d, m), m = f, k = M.h(g, new r(null, 4, [Z, im, T, c, Y, k, W, a.substring(c, k)], null)), c = p, e = false, f = m, g = k) : m < wd(d) ? (k = c, d = xd(d), p = f, m = M.h(g, new r(null, 4, [Z, Cj, T, c, Y, c, W, ""], null)), c = k, e = true, f = p, g = m) : (p = f, m = g, c = k, e = false, f = p, g = m);
      } else if (k = Hn(a, c), J.h("\n", k)) 0 < f ? (k = f, p = g, c += 1, e = false, f = k, g = p) : (k = c + 1, p = f, m = M.h(g, new r(null, 4, [Z, $m, T, c, Y, c + 1, W, "\n"], null)), c = k, e = true, f = p, g = m);
      else if (Ln(k)) k = f, p = g, c += 1, e = false, f = k, g = p;
      else {
        var q = Qn(a, c);
        k = (function() {
          var t = Z.g(q);
          switch (t instanceof z ? t.M : null) {
            case "lparen":
              return f + 1;
            case "rparen":
              return t = f - 1, 0 > t ? 0 : t;
            default:
              return f;
          }
        })();
        c = Y.g(q);
        p = M.h(g, q);
        e = false;
        f = k;
        g = p;
      }
    }
  }
  ;
  function Sn(a) {
    return y(Uj.g(a), Ym.g(a));
  }
  function Tn(a) {
    return y(Uj.g(a), Ym.g(a) + 1);
  }
  function Un(a) {
    return Z.g(Sn(a));
  }
  function Vn(a) {
    return Rf.i(a, Ym, Kc);
  }
  function Wn(a, b) {
    return J.h(Tm, Un(a)) && J.h(b, W.g(Sn(a)));
  }
  function Xn(a, b) {
    var c = u(a) ? a : new r(null, 3, [T, 0, Y, 0, W, ""], null);
    return new r(null, 4, [X, uk, Zm, new P(null, 2, 5, R, [T.g(c), Y.g(c)], null), W, (function() {
      var d = W.g(c);
      return u(d) ? d : "";
    })(), kj, (function() {
      var d = kj.g(c);
      return u(d) ? d : b;
    })()], null);
  }
  function Yn(a) {
    for (; ; ) {
      var b = Un(a);
      switch (b instanceof z ? b.M : null) {
        case "newline":
          return Vn(a);
        case "dedent":
        case "eof":
          return a;
        default:
          a = Vn(a);
      }
    }
  }
  function Zn(a) {
    var b = Z.g(a), c = new P(null, 2, 5, R, [T.g(a), Y.g(a)], null), d = b instanceof z ? b.M : null;
    switch (d) {
      case "identifier":
      case "string":
      case "number":
      case "arrow":
      case "dash":
      case "eq":
      case "neq":
      case "lt":
      case "le":
      case "gt":
      case "ge":
        return An(b, c, W.g(a));
      case "error":
        return b = An(b, c, W.g(a)), u(kj.g(a)) ? qd.i(b, kj, kj.g(a)) : b;
      case "param-ref":
        return b = qd.u(An(b, c, W.g(a)), uj, uj.g(a), fd([en, en.g(a), dn, dn.g(a)])), b = u(gl.g(a)) ? qd.i(b, gl, true) : b, b = u(sl.g(a)) ? qd.i(b, sl, sl.g(a)) : b, u(fn.g(a)) ? qd.i(b, fn, fn.g(a)) : b;
      case "newline":
      case "blank-line":
      case "indent":
      case "dedent":
        return An(b, c, W.g(a));
      default:
        throw Error(["No matching clause: ", w.g(d)].join(""));
    }
  }
  function $n(a) {
    return new P(null, 2, 5, R, [Zn(Sn(a)), Vn(a)], null);
  }
  function ao(a, b, c) {
    return J.h(b, Un(a)) ? $n(a) : new P(null, 2, 5, R, [Xn(Sn(a), u(c) ? c : ["expected ", ue(b)].join("")), a], null);
  }
  function bo(a, b) {
    return J.h(b, Un(a)) ? Vn(a) : a;
  }
  function co(a, b, c) {
    b = T.g(b);
    if (C(c)) {
      var d = jd(Zm.g(kd(c)));
      d = u(d) ? d : b;
    } else d = b;
    return zn(a, new P(null, 2, 5, R, [b, d], null), ng(c));
  }
  var eo = new Ah(null, new r(null, 6, [Pi, null, nj, null, Ej, null, Ui, null, Vk, null, $k, null], null), null), fo = new Ah(null, new r(null, 6, ["_order_by", null, "_offset", null, "_distinct", null, "_limit", null, "_on", null, "_join", null], null), null), go = new Ah(null, new r(null, 5, ["offset", null, "distinct", null, "limit", null, "on", null, "join", null], null), null);
  function ho(a) {
    switch (a) {
      case "limit":
        return "_limit";
      case "offset":
        return "_offset";
      case "order":
        return "_order_by";
      case "distinct":
        return "_distinct";
      case "join":
        return "_join";
      case "on":
        return "_on";
      default:
        return a;
    }
  }
  function io(a) {
    var b = Un(a);
    b = eo.g ? eo.g(b) : eo.call(null, b);
    return u(b) ? b : Wn(a, "in") || Wn(a, "not") || Wn(a, "like") || Wn(a, "ilike") || Wn(a, "is");
  }
  function jo(a) {
    var b = J.h(Tm, Un(a));
    if (b) {
      b = W.g(Sn(a));
      var c = fo.g ? fo.g(b) : fo.call(null, b);
      if (u(c)) return c;
      if (c = J.h("order", b)) c = J.h(Tm, Z.g(Tn(a))) && J.h("by", W.g(Tn(a)));
      if (c) return c;
      b = go.g ? go.g(b) : go.call(null, b);
      return u(b) ? Ba(io(Vn(a))) : b;
    }
    return b;
  }
  function ko(a) {
    return J.h(Tm, Un(a)) && J.h(hm, Z.g(Tn(a)));
  }
  function lo(a) {
    var b = a;
    for (a = ld; ; ) {
      var c = Ym.g(b);
      if (u((function() {
        var f = null == Un(b);
        if (f) return f;
        f = Un(b);
        var g = new Ah(null, new r(null, 2, [Cj, null, wk, null], null), null);
        return g.g ? g.g(f) : g.call(null, f);
      })())) return new P(null, 2, 5, R, [a, b], null);
      if (J.h(al, Un(b))) {
        var d = $n(b), e = N(d, 0, null);
        d = N(d, 1, null);
        a = M.h(a, e);
        b = d;
      } else if (u((function() {
        var f = Un(b);
        var g = new Ah(null, new r(null, 2, [qm, null, qj, null], null), null);
        f = g.g ? g.g(f) : g.call(null, f);
        return u(f) ? f : J.h(Tm, Un(b));
      })())) d = mo.g ? mo.g(b) : mo.call(null, b), e = N(
        d,
        0,
        null
      ), d = N(d, 1, null), a = M.h(a, e), b = d;
      else {
        e = Xn(Sn(b), ["unexpected token: ", ue((function() {
          var f = Un(b);
          return u(f) ? f : wk;
        })())].join(""));
        d = Yn(Vn(b));
        if (J.h(c, Ym.g(d))) return new P(null, 2, 5, R, [M.h(a, e), Vn(d)], null);
        a = M.h(a, e);
        b = d;
      }
    }
  }
  function no(a) {
    var b = Sn(a), c = T.h(b, 0), d = (function() {
      for (var v = a, A = ld; ; ) if (J.h(al, Un(v))) {
        var E = $n(v);
        v = N(E, 0, null);
        E = N(E, 1, null);
        A = M.h(A, v);
        v = E;
      } else return new P(null, 2, 5, R, [A, v], null);
    })();
    b = N(d, 0, null);
    d = N(d, 1, null);
    d = J.h(Tm, Un(d)) ? $n(d) : new P(null, 2, 5, R, [null, d], null);
    var e = N(d, 0, null);
    d = N(d, 1, null);
    d = u(u(e) ? J.h(bl, Un(d)) : e) ? oo.g ? oo.g(d) : oo.call(null, d) : new P(null, 2, 5, R, [null, d], null);
    var f = N(d, 0, null);
    d = N(d, 1, null);
    var g = bo(d, $m), h = (function() {
      for (var v = g, A = ld; ; ) if (J.h(al, Un(v))) {
        var E = $n(v);
        v = N(
          E,
          0,
          null
        );
        E = N(E, 1, null);
        A = M.h(A, v);
        v = E;
      } else return new P(null, 2, 5, R, [A, v], null);
    })();
    d = N(h, 0, null);
    var k = N(h, 1, null);
    h = J.h(im, Un(k));
    k = bo(k, im);
    var m = lo(k);
    k = N(m, 0, null);
    m = N(m, 1, null);
    var p = h ? bo(m, Cj) : m, q = Kf.h(Kf.h(ng(b), d), k), t = (function() {
      var v = T.g(Sn(p));
      return u(v) ? v : c;
    })();
    b = (function() {
      var v = zn(Ck, new P(null, 2, 5, R, [c, t], null), q);
      v = u(e) ? qd.i(v, Wi, e) : v;
      return u(f) ? qd.i(v, jm, f) : v;
    })();
    return new P(null, 2, 5, R, [b, bo(p, wk)], null);
  }
  function mo(a) {
    var b = Sn(a);
    if (Wn(a, "_count")) a = po.g ? po.g(a) : po.call(null, a);
    else if (Wn(a, "_agg")) a = qo.g ? qo.g(a) : qo.call(null, a);
    else {
      var c = Un(a);
      var d = new Ah(null, new r(null, 2, [qm, null, qj, null], null), null);
      c = d.g ? d.g(c) : d.call(null, c);
      a = u(c) ? ro.g ? ro.g(a) : ro.call(null, a) : J.h(Tm, Un(a)) ? so.g ? so.g(a) : so.call(null, a) : new P(null, 2, 5, R, [Xn(b, "expected statement"), Vn(a)], null);
    }
    c = a;
    a = N(c, 0, null);
    c = N(c, 1, null);
    return new P(null, 2, 5, R, [co(Hm, b, new P(null, 1, 5, R, [a], null)), c], null);
  }
  function so(a) {
    var b = Sn(a), c = ao(a, Tm, "expected field name");
    a = N(c, 0, null);
    var d = N(c, 1, null);
    a = M.h(ld, a);
    if (J.h(bl, Un(d))) c = to.g ? to.g(d) : to.call(null, d);
    else if (u(io(d))) {
      c = Sn(d);
      var e = uo.g ? uo.g(d) : uo.call(null, d);
      d = N(e, 0, null);
      e = N(e, 1, null);
      var f = Jf.g(d);
      J.h(1, K(f)) ? (f = Jf.g(D(f)), f = J.h(1, K(f)) ? Dn(D(f), Nk) : null) : f = null;
      c = u(f) ? new P(null, 2, 5, R, [f, e], null) : new P(null, 2, 5, R, [co(jl, c, new P(null, 1, 5, R, [d], null)), e], null);
    } else c = new P(null, 2, 5, R, [null, d], null);
    d = c;
    c = N(d, 0, null);
    d = N(d, 1, null);
    a = u(c) ? M.h(
      a,
      c
    ) : a;
    d = ao(d, $m, "expected newline at end of scalar");
    c = N(d, 0, null);
    d = N(d, 1, null);
    a = M.h(a, c);
    return new P(null, 2, 5, R, [co(ym, b, a), d], null);
  }
  function ro(a) {
    var b = Sn(a), c = vo.g ? vo.g(a) : vo.call(null, a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    a = M.h(ld, a);
    var d = ko(c) ? wo.g ? wo.g(c) : wo.call(null, c) : new P(null, 2, 5, R, [null, c], null);
    c = N(d, 0, null);
    d = N(d, 1, null);
    a = u(c) ? M.h(a, c) : a;
    d = ao(d, Tm, "expected relation name");
    c = N(d, 0, null);
    d = N(d, 1, null);
    a = M.h(a, c);
    d = J.h(bl, Un(d)) ? oo.g ? oo.g(d) : oo.call(null, d) : new P(null, 2, 5, R, [null, d], null);
    c = N(d, 0, null);
    d = N(d, 1, null);
    a = u(c) ? M.h(a, c) : a;
    d = ao(d, $m, "expected newline after relation header");
    c = N(d, 0, null);
    d = N(d, 1, null);
    a = M.h(
      a,
      c
    );
    d = J.h(im, Un(d)) ? xo.g ? xo.g(d) : xo.call(null, d) : new P(null, 2, 5, R, [null, d], null);
    c = N(d, 0, null);
    d = N(d, 1, null);
    a = u(c) ? M.h(a, c) : a;
    return new P(null, 2, 5, R, [co(Pj, b, a), d], null);
  }
  function xo(a) {
    var b = Sn(a), c = ao(a, im, "expected indent to open block");
    a = N(c, 0, null);
    c = N(c, 1, null);
    for (a = new P(null, 1, 5, R, [a], null); ; ) {
      if (J.h(Cj, Un(c))) {
        var d = $n(c);
        c = N(d, 0, null);
        d = N(d, 1, null);
        return new P(null, 2, 5, R, [co(Sm, b, M.h(a, c)), d], null);
      }
      if (J.h(wk, Un(c))) return new P(null, 2, 5, R, [co(Sm, b, a), c], null);
      J.h(al, Un(c)) ? (d = $n(c), c = N(d, 0, null), d = N(d, 1, null), a = M.h(a, c), c = d) : (d = mo(c), c = N(d, 0, null), d = N(d, 1, null), a = M.h(a, c), c = d);
    }
  }
  function po(a) {
    var b = Sn(a), c = $n(a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    c = ao(c, $m, "expected newline after _count");
    var d = N(c, 0, null);
    c = N(c, 1, null);
    c = ao(c, im, "expected indented children for _count");
    var e = N(c, 0, null);
    c = N(c, 1, null);
    for (a = new P(null, 3, 5, R, [a, d, e], null); ; ) {
      if (J.h(Cj, Un(c))) return d = $n(c), c = N(d, 0, null), d = N(d, 1, null), new P(null, 2, 5, R, [co(Pk, b, M.h(a, c)), d], null);
      if (J.h(wk, Un(c))) return new P(null, 2, 5, R, [co(Pk, b, a), c], null);
      if (J.h(al, Un(c))) d = $n(c), c = N(d, 0, null), d = N(d, 1, null), a = M.h(a, c), c = d;
      else {
        d = Ym.g(c);
        e = yo.g ? yo.g(c) : yo.call(null, c);
        c = N(e, 0, null);
        e = N(e, 1, null);
        if (J.h(d, Ym.g(e))) return new P(null, 2, 5, R, [co(Pk, b, M.h(a, c)), Vn(e)], null);
        d = e;
        a = M.h(a, c);
        c = d;
      }
    }
  }
  function yo(a) {
    var b = Sn(a), c = (function() {
      var f = Un(a);
      switch (f instanceof z ? f.M : null) {
        case "dash":
          return f = $n(a), N(f, 0, null), f = N(f, 1, null), new P(null, 2, 5, R, [Xn(b, "join markers are not allowed inside `_count` \u2014 counts are always inner; drop the `-`"), f], null);
        case "arrow":
          return f = $n(a), N(f, 0, null), f = N(f, 1, null), new P(null, 2, 5, R, [Xn(b, "join markers are not allowed inside `_count` \u2014 counts are always inner; drop the `->`"), f], null);
        default:
          return new P(null, 2, 5, R, [null, a], null);
      }
    })(), d = N(c, 0, null);
    c = N(c, 1, null);
    d = u(d) ? M.h(ld, d) : ld;
    var e = ko(c) ? wo.g ? wo.g(c) : wo.call(null, c) : new P(null, 2, 5, R, [null, c], null);
    c = N(e, 0, null);
    e = N(e, 1, null);
    d = u(c) ? M.h(d, c) : d;
    e = ao(e, Tm, "expected relation name");
    c = N(e, 0, null);
    e = N(e, 1, null);
    d = M.h(d, c);
    e = J.h(bl, Un(e)) ? oo.g ? oo.g(e) : oo.call(null, e) : new P(null, 2, 5, R, [null, e], null);
    c = N(e, 0, null);
    e = N(e, 1, null);
    d = u(c) ? M.h(d, c) : d;
    e = ao(e, $m, "expected newline after count child");
    c = N(e, 0, null);
    e = N(e, 1, null);
    d = M.h(d, c);
    return new P(null, 2, 5, R, [co(sk, b, d), e], null);
  }
  function qo(a) {
    var b = Sn(a), c = $n(a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    c = ao(c, $m, "expected newline after _agg");
    var d = N(c, 0, null);
    c = N(c, 1, null);
    c = ao(c, im, "expected indented children for _agg");
    var e = N(c, 0, null);
    c = N(c, 1, null);
    for (a = new P(null, 3, 5, R, [a, d, e], null); ; ) {
      if (J.h(Cj, Un(c))) return d = $n(c), c = N(d, 0, null), d = N(d, 1, null), new P(null, 2, 5, R, [co(Jl, b, M.h(a, c)), d], null);
      if (J.h(wk, Un(c))) return new P(null, 2, 5, R, [co(Jl, b, a), c], null);
      if (J.h(al, Un(c))) d = $n(c), c = N(d, 0, null), d = N(d, 1, null), a = M.h(a, c), c = d;
      else {
        d = Ym.g(c);
        e = zo.g ? zo.g(c) : zo.call(null, c);
        c = N(e, 0, null);
        e = N(e, 1, null);
        if (J.h(d, Ym.g(e))) return new P(null, 2, 5, R, [co(Jl, b, M.h(a, c)), Vn(e)], null);
        d = e;
        a = M.h(a, c);
        c = d;
      }
    }
  }
  function zo(a) {
    var b = Sn(a), c = (function() {
      var g = Un(a);
      switch (g instanceof z ? g.M : null) {
        case "dash":
          return g = $n(a), N(g, 0, null), g = N(g, 1, null), new P(null, 2, 5, R, [Xn(b, "join markers are not allowed inside `_agg` \u2014 aggregates are always inner; drop the `-`"), g], null);
        case "arrow":
          return g = $n(a), N(g, 0, null), g = N(g, 1, null), new P(null, 2, 5, R, [Xn(b, "join markers are not allowed inside `_agg` \u2014 aggregates are always inner; drop the `->`"), g], null);
        default:
          return new P(null, 2, 5, R, [null, a], null);
      }
    })(), d = N(c, 0, null);
    c = N(c, 1, null);
    d = u(d) ? M.h(ld, d) : ld;
    var e = ko(c) ? wo.g ? wo.g(c) : wo.call(null, c) : new P(null, 2, 5, R, [null, c], null);
    c = N(e, 0, null);
    e = N(e, 1, null);
    d = u(c) ? M.h(d, c) : d;
    e = ao(e, Tm, "expected agg-relation name");
    c = N(e, 0, null);
    e = N(e, 1, null);
    d = M.h(d, c);
    e = J.h(bl, Un(e)) ? oo.g ? oo.g(e) : oo.call(null, e) : new P(null, 2, 5, R, [null, e], null);
    c = N(e, 0, null);
    e = N(e, 1, null);
    d = u(c) ? M.h(d, c) : d;
    e = ao(e, $m, "expected newline after agg-relation header");
    c = N(e, 0, null);
    e = N(e, 1, null);
    d = M.h(d, c);
    e = ao(e, im, "expected indented agg attributes");
    c = N(
      e,
      0,
      null
    );
    e = N(e, 1, null);
    for (d = M.h(d, c); ; ) {
      if (J.h(Cj, Un(e))) return e = $n(e), c = N(e, 0, null), e = N(e, 1, null), new P(null, 2, 5, R, [co(wl, b, M.h(d, c)), e], null);
      if (J.h(wk, Un(e))) return new P(null, 2, 5, R, [co(wl, b, d), e], null);
      c = Ym.g(e);
      var f = Ao.g ? Ao.g(e) : Ao.call(null, e);
      e = N(f, 0, null);
      f = N(f, 1, null);
      if (J.h(c, Ym.g(f))) return new P(null, 2, 5, R, [co(wl, b, M.h(d, e)), Vn(f)], null);
      c = f;
      d = M.h(d, e);
      e = c;
    }
  }
  function Ao(a) {
    var b = Sn(a), c = ao(a, Tm, "expected aggregate attribute name");
    a = N(c, 0, null);
    c = N(c, 1, null);
    c = bo(c, hm);
    a = new P(null, 1, 5, R, [a], null);
    var d = Bo.g ? Bo.g(c) : Bo.call(null, c);
    c = N(d, 0, null);
    d = N(d, 1, null);
    a = M.h(a, c);
    for (c = d; ; ) if (J.h(Hl, Un(c))) d = Vn(c), d = Bo.g ? Bo.g(d) : Bo.call(null, d), c = N(d, 0, null), d = N(d, 1, null), a = M.h(a, c), c = d;
    else return J.h($m, Un(c)) ? (d = $n(c), c = N(d, 0, null), d = N(d, 1, null), new P(null, 2, 5, R, [co(Hj, b, M.h(a, c)), d], null)) : new P(null, 2, 5, R, [
      co(Hj, b, M.h(a, Xn(Sn(c), "expected , or newline after agg fn"))),
      Yn(c)
    ], null);
  }
  function Bo(a) {
    var b = Sn(a), c;
    if (c = J.h(Tm, Un(a))) {
      c = W.g(Sn(a));
      var d = new Ah(null, new r(null, 4, ["min", null, "sum", null, "max", null, "avg", null], null), null);
      c = d.g ? d.g(c) : d.call(null, c);
    }
    return u(c) ? (c = $n(a), a = N(c, 0, null), c = N(c, 1, null), new P(null, 2, 5, R, [co(Lm, b, new P(null, 1, 5, R, [a], null)), c], null)) : new P(null, 2, 5, R, [Xn(b, "expected aggregate function (avg/sum/min/max)"), Vn(a)], null);
  }
  function wo(a) {
    var b = Sn(a), c = $n(a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    c = bo(c, hm);
    return new P(null, 2, 5, R, [co(Rk, b, new P(null, 1, 5, R, [a], null)), c], null);
  }
  function vo(a) {
    var b = Sn(a), c = Un(a);
    switch (c instanceof z ? c.M : null) {
      case "arrow":
      case "dash":
        return c = $n(a), a = N(c, 0, null), c = N(c, 1, null), new P(null, 2, 5, R, [co(pl, b, new P(null, 1, 5, R, [a], null)), c], null);
      default:
        return new P(null, 2, 5, R, [Xn(b, "expected join marker (- or ->)"), Vn(a)], null);
    }
  }
  function oo(a) {
    var b = Sn(a);
    a = bo(a, bl);
    a = J.h(ul, Un(a)) || J.h(wk, Un(a)) ? new P(null, 2, 5, R, [null, a], null) : Co.g ? Co.g(a) : Co.call(null, a);
    var c = N(a, 0, null);
    a = N(a, 1, null);
    var d = J.h(ul, Un(a)) ? Y.g(Sn(a)) : null;
    a = bo(a, ul);
    c = Nf(Ca, new P(null, 1, 5, R, [c], null));
    b = T.g(b);
    u(d) || (d = C(c) ? jd(Zm.g(kd(c))) : null, d = u(d) ? d : b);
    return new P(null, 2, 5, R, [zn(xm, new P(null, 2, 5, R, [b, d], null), c), a], null);
  }
  function Co(a) {
    var b = Sn(a), c = Do.g ? Do.g(a) : Do.call(null, a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    for (a = new P(null, 1, 5, R, [a], null); ; ) if (J.h(Hl, Un(c))) {
      c = Vn(c);
      c = Do.g ? Do.g(c) : Do.call(null, c);
      var d = N(c, 0, null), e = N(c, 1, null);
      c = e;
      a = M.h(a, d);
    } else if (J.h(Tm, Un(c))) {
      var f = Ym.g(c);
      e = Do.g ? Do.g(c) : Do.call(null, c);
      d = N(e, 0, null);
      e = N(e, 1, null);
      if (J.h(f, Ym.g(e))) return new P(null, 2, 5, R, [co(ok, b, a), c], null);
      c = e;
      a = M.h(a, d);
    } else return new P(null, 2, 5, R, [co(ok, b, a), c], null);
  }
  function Do(a) {
    var b = Sn(a), c = u(jo(a)) ? Eo.g ? Eo.g(a) : Eo.call(null, a) : Fo.g ? Fo.g(a) : Fo.call(null, a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    return new P(null, 2, 5, R, [co(oj, b, new P(null, 1, 5, R, [a], null)), c], null);
  }
  function Fo(a) {
    var b = Sn(a), c = Go.g ? Go.g(a) : Go.call(null, a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    for (a = new P(null, 1, 5, R, [a], null); ; ) if (Wn(c, "or")) {
      c = Vn(c);
      var d = Go.g ? Go.g(c) : Go.call(null, c);
      c = N(d, 0, null);
      d = N(d, 1, null);
      a = M.h(a, c);
      c = d;
    } else return new P(null, 2, 5, R, [co(bk, b, a), c], null);
  }
  function Go(a) {
    var b = Sn(a), c = Ho.g ? Ho.g(a) : Ho.call(null, a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    for (a = new P(null, 1, 5, R, [a], null); ; ) if (Wn(c, "and")) {
      c = Vn(c);
      var d = Ho.g ? Ho.g(c) : Ho.call(null, c);
      c = N(d, 0, null);
      d = N(d, 1, null);
      a = M.h(a, c);
      c = d;
    } else return new P(null, 2, 5, R, [co(lk, b, a), c], null);
  }
  function Ho(a) {
    var b = Sn(a), c = J.h(bl, Un(a)) ? Io.g ? Io.g(a) : Io.call(null, a) : Jo.g ? Jo.g(a) : Jo.call(null, a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    return new P(null, 2, 5, R, [co(Sj, b, new P(null, 1, 5, R, [a], null)), c], null);
  }
  function Io(a) {
    var b = Sn(a);
    a = bo(a, bl);
    var c = Fo(a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    c = bo(c, ul);
    return new P(null, 2, 5, R, [co(Vm, b, new P(null, 1, 5, R, [a], null)), c], null);
  }
  function Jo(a) {
    var b = Sn(a), c = Ko.g ? Ko.g(a) : Ko.call(null, a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    var d = Lo.g ? Lo.g(c) : Lo.call(null, c);
    c = N(d, 0, null);
    d = N(d, 1, null);
    return new P(null, 2, 5, R, [co(ck, b, new P(null, 2, 5, R, [a, c], null)), d], null);
  }
  function Ko(a) {
    var b = Sn(a), c = ao(a, Tm, "expected identifier in path");
    a = N(c, 0, null);
    c = N(c, 1, null);
    for (a = new P(null, 1, 5, R, [a], null); ; ) if (J.h(mk, Un(c))) {
      c = Vn(c);
      var d = ao(c, Tm, "expected identifier after `.`");
      c = N(d, 0, null);
      d = N(d, 1, null);
      a = M.h(a, c);
      c = d;
    } else return new P(null, 2, 5, R, [co(kk, b, a), c], null);
  }
  function Mo(a) {
    if (J.h(jk, Un(a))) {
      var b = Sn(a), c = $n(a);
      a = N(c, 0, null);
      c = N(c, 1, null);
      return new P(null, 2, 5, R, [co(Si, b, new P(null, 1, 5, R, [co(Uk, b, new P(null, 1, 5, R, [a], null))], null)), c], null);
    }
    return No.g ? No.g(a) : No.call(null, a);
  }
  function Lo(a) {
    var b = Sn(a);
    if (Wn(a, "is")) {
      var c = $n(a), d = N(c, 0, null);
      c = N(c, 1, null);
      var e = new P(null, 1, 5, R, [d], null);
      c = Wn(c, "not") ? $n(c) : new P(null, 2, 5, R, [null, c], null);
      var f = N(c, 0, null);
      c = N(c, 1, null);
      d = (function() {
        var h = e;
        return u(f) ? M.h(h, f) : h;
      })();
      c = Wn(c, "null") ? $n(c) : new P(null, 2, 5, R, [Xn(Sn(c), "expected `null` after `is`"), c], null);
      var g = N(c, 0, null);
      c = N(c, 1, null);
      d = M.h(d, g);
      return new P(null, 2, 5, R, [co(Nk, b, d), c], null);
    }
    if (Wn(a, "not")) {
      c = $n(a);
      f = N(c, 0, null);
      c = N(c, 1, null);
      e = new P(null, 1, 5, R, [f], null);
      if (Wn(c, "in")) return c = $n(c), d = N(c, 0, null), c = N(c, 1, null), d = M.h(e, d), c = Mo(c), g = N(c, 0, null), c = N(c, 1, null), d = M.h(d, g), new P(null, 2, 5, R, [co(Nk, b, d), c], null);
      d = Xn(Sn(c), "expected `in` after `not`");
      return new P(null, 2, 5, R, [co(Nk, b, M.h(e, d)), c], null);
    }
    return Wn(a, "in") ? (c = $n(a), d = N(c, 0, null), c = N(c, 1, null), c = Mo(c), g = N(c, 0, null), c = N(c, 1, null), new P(null, 2, 5, R, [co(Nk, b, new P(null, 2, 5, R, [d, g], null)), c], null)) : Wn(a, "like") || Wn(a, "ilike") ? (c = $n(a), d = N(c, 0, null), c = N(c, 1, null), c = J.h(jk, Un(c)) ? $n(c) : ao(c, Ri, "expected string or named-param after like/ilike"), g = N(c, 0, null), c = N(c, 1, null), new P(null, 2, 5, R, [co(Nk, b, new P(null, 2, 5, R, [d, g], null)), c], null)) : u((function() {
      var h = Un(a);
      return eo.g ? eo.g(h) : eo.call(null, h);
    })()) ? (c = Oo.g ? Oo.g(a) : Oo.call(null, a), d = N(c, 0, null), c = N(c, 1, null), c = Po.g ? Po.g(c) : Po.call(null, c), g = N(c, 0, null), c = N(c, 1, null), g = J.h(uk, X.g(g)) ? qd.i(g, Zm, Zm.g(d)) : g, new P(null, 2, 5, R, [co(Nk, b, new P(null, 2, 5, R, [d, g], null)), c], null)) : new P(null, 2, 5, R, [Xn(b, "expected predicate operator"), Vn(a)], null);
  }
  function Oo(a) {
    var b = Sn(a);
    var c = Un(a);
    c = eo.g ? eo.g(c) : eo.call(null, c);
    return u(c) ? (c = $n(a), a = N(c, 0, null), c = N(c, 1, null), new P(null, 2, 5, R, [co(Ti, b, new P(null, 1, 5, R, [a], null)), c], null)) : new P(null, 2, 5, R, [Xn(b, "expected binary operator"), Vn(a)], null);
  }
  function Po(a) {
    var b = Sn(a);
    if (J.h(Ri, Un(a))) {
      a = $n(a);
      var c = N(a, 0, null);
      a = N(a, 1, null);
      return new P(null, 2, 5, R, [co(Uk, b, new P(null, 1, 5, R, [c], null)), a], null);
    }
    if (J.h(jj, Un(a))) return a = $n(a), c = N(a, 0, null), a = N(a, 1, null), new P(null, 2, 5, R, [co(Uk, b, new P(null, 1, 5, R, [c], null)), a], null);
    if (J.h(bl, Un(a))) return a = No.g ? No.g(a) : No.call(null, a), c = N(a, 0, null), a = N(a, 1, null), new P(null, 2, 5, R, [co(Uk, b, new P(null, 1, 5, R, [c], null)), a], null);
    if (c = J.h(Tm, Un(a))) c = W.g(Sn(a)), c = fo.g ? fo.g(c) : fo.call(null, c);
    return u(c) ? new P(
      null,
      2,
      5,
      R,
      [new r(null, 4, [X, uk, Zm, new P(null, 2, 5, R, [T.g(b), T.g(b)], null), W, "", kj, "expected value after operator"], null), a],
      null
    ) : J.h(Tm, Un(a)) || J.h(jk, Un(a)) ? (a = $n(a), c = N(a, 0, null), a = N(a, 1, null), new P(null, 2, 5, R, [co(Uk, b, new P(null, 1, 5, R, [c], null)), a], null)) : new P(null, 2, 5, R, [Xn(b, "expected value"), Vn(a)], null);
  }
  function No(a) {
    var b = Sn(a);
    a = bo(a, bl);
    if (J.h(ul, Un(a))) return new P(null, 2, 5, R, [co(Si, b, ld), Vn(a)], null);
    var c = Po(a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    for (a = M.h(ld, a); ; ) if (J.h(Hl, Un(c))) {
      c = Vn(c);
      var d = Po(c);
      c = N(d, 0, null);
      d = N(d, 1, null);
      a = M.h(a, c);
      c = d;
    } else return J.h(ul, Un(c)) ? new P(null, 2, 5, R, [co(Si, b, a), Vn(c)], null) : new P(null, 2, 5, R, [co(Si, b, M.h(a, Xn(Sn(c), "expected , or ) in list"))), Yn(c)], null);
  }
  function Qo(a, b) {
    return J.h(jj, Un(a)) ? $n(a) : J.h(jk, Un(a)) ? $n(a) : new P(null, 2, 5, R, [Xn(Sn(a), ["expected number or named-param after ", w.g(b)].join("")), a], null);
  }
  function Eo(a) {
    var b = Sn(a), c = W.g(Sn(a)), d = ho(c), e = $n(a);
    a = N(e, 0, null);
    e = N(e, 1, null);
    e = J.h("order", c) && Wn(e, "by") ? $n(e) : new P(null, 2, 5, R, [null, e], null);
    c = N(e, 0, null);
    e = N(e, 1, null);
    a = new P(null, 1, 5, R, [a], null);
    a = u(c) ? M.h(a, c) : a;
    switch (d) {
      case "_limit":
        return d = Qo(e, "_limit"), c = N(d, 0, null), d = N(d, 1, null), new P(null, 2, 5, R, [co(ol, b, M.h(a, c)), d], null);
      case "_offset":
        return d = Qo(e, "_offset"), c = N(d, 0, null), d = N(d, 1, null), new P(null, 2, 5, R, [co(ol, b, M.h(a, c)), d], null);
      case "_join":
        return d = ao(e, Tm, "expected join type (left|inner|right|full) after _join"), c = N(d, 0, null), d = N(d, 1, null), new P(null, 2, 5, R, [co(ol, b, M.h(a, c)), d], null);
      case "_on":
        return d = ao(e, Tm, "expected a self-relation name after _on"), c = N(d, 0, null), d = N(d, 1, null), new P(null, 2, 5, R, [co(ol, b, M.h(a, c)), d], null);
      case "_order_by":
        if (J.h(jk, Un(e))) return d = $n(e), c = N(d, 0, null), d = N(d, 1, null), new P(null, 2, 5, R, [co(ol, b, M.h(a, c)), d], null);
        d = Ro.g ? Ro.g(e) : Ro.call(null, e);
        c = N(d, 0, null);
        d = N(d, 1, null);
        for (a = M.h(a, c); ; ) if (J.h(Hl, Un(d)) && Ba(jo(Vn(d)))) d = Vn(d), c = Ro.g ? Ro.g(d) : Ro.call(null, d), d = N(c, 0, null), c = N(c, 1, null), a = M.h(a, d), d = c;
        else return new P(null, 2, 5, R, [co(ol, b, a), d], null);
      case "_distinct":
        for (d = ao(e, Tm, "expected identifier after _distinct"), c = N(d, 0, null), d = N(d, 1, null), a = M.h(a, c); ; ) if (J.h(Hl, Un(d))) d = Vn(d), c = ao(d, Tm, "expected identifier after `,`"), d = N(c, 0, null), c = N(c, 1, null), a = M.h(a, d), d = c;
        else return new P(null, 2, 5, R, [co(ol, b, a), d], null);
      default:
        throw Error(["No matching clause: ", w.g(d)].join(""));
    }
  }
  function Ro(a) {
    var b = Sn(a), c = ao(a, Tm, "expected identifier in order-by");
    a = N(c, 0, null);
    c = N(c, 1, null);
    if (Wn(c, "asc") || Wn(c, "desc")) {
      var d = $n(c);
      c = N(d, 0, null);
      d = N(d, 1, null);
      a = new P(null, 2, 5, R, [new P(null, 2, 5, R, [a, c], null), d], null);
    } else a = new P(null, 2, 5, R, [new P(null, 1, 5, R, [a], null), c], null);
    c = a;
    a = N(c, 0, null);
    c = N(c, 1, null);
    return new P(null, 2, 5, R, [co(tm, b, a), c], null);
  }
  function to(a) {
    var b = Sn(a);
    a = bo(a, bl);
    var c = uo.g ? uo.g(a) : uo.call(null, a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    c = bo(c, ul);
    return new P(null, 2, 5, R, [co(jl, b, new P(null, 1, 5, R, [a], null)), c], null);
  }
  function uo(a) {
    var b = Sn(a), c = So.g ? So.g(a) : So.call(null, a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    for (a = new P(null, 1, 5, R, [a], null); ; ) if (Wn(c, "or")) {
      c = Vn(c);
      var d = So.g ? So.g(c) : So.call(null, c);
      c = N(d, 0, null);
      d = N(d, 1, null);
      a = M.h(a, c);
      c = d;
    } else return new P(null, 2, 5, R, [co(Yj, b, a), c], null);
  }
  function So(a) {
    var b = Sn(a), c = To.g ? To.g(a) : To.call(null, a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    for (a = new P(null, 1, 5, R, [a], null); ; ) if (Wn(c, "and")) {
      c = Vn(c);
      var d = To.g ? To.g(c) : To.call(null, c);
      c = N(d, 0, null);
      d = N(d, 1, null);
      a = M.h(a, c);
      c = d;
    } else return new P(null, 2, 5, R, [co(aj, b, a), c], null);
  }
  function To(a) {
    var b = Sn(a);
    if (J.h(bl, Un(a))) {
      a = bo(a, bl);
      var c = uo(a);
      a = N(c, 0, null);
      c = N(c, 1, null);
      c = bo(c, ul);
      a = new P(null, 2, 5, R, [a, c], null);
    } else a = Lo(a);
    c = a;
    a = N(c, 0, null);
    c = N(c, 1, null);
    return new P(null, 2, 5, R, [co(Ij, b, new P(null, 1, 5, R, [a], null)), c], null);
  }
  function Uo(a) {
    a = Rn(a);
    a = new r(null, 2, [Uj, ng(a), Ym, 0], null);
    a = no(a);
    var b = N(a, 0, null);
    N(a, 1, null);
    return b;
  }
  ;
  var Vo = /[\s]/;
  function Wo(a) {
    return null == a ? null : "," === a ? true : Vo.test(a);
  }
  function Xo(a) {
    return null == a ? null : !/[^0-9]/.test(a);
  }
  function Yo(a, b) {
    return (function e(d) {
      return new ve(null, function() {
        for (; ; ) {
          var f = C(d);
          if (f) {
            if (Gd(f)) {
              var g = Vb(f), h = K(g), k = ze(h);
              return (function() {
                for (var p = 0; ; ) if (p < h) {
                  var q = Ua(g, p), t = k;
                  if (q instanceof vc || q instanceof z) {
                    var v = Ph(se, ue)(q), A = N(v, 0, null);
                    v = N(v, 1, null);
                    var E = q instanceof vc ? yc : te;
                    q = null == A ? E.h ? E.h(a, v) : E.call(null, a, v) : J.h("_", A) ? E.g ? E.g(v) : E.call(null, v) : q;
                  }
                  t.add(q);
                  p += 1;
                } else return true;
              })() ? Be(De(k), e(Wb(f))) : Be(De(k), null);
            }
            var m = D(f);
            return ed(m instanceof vc || m instanceof z ? (function() {
              var p = Ph(se, ue)(m), q = N(p, 0, null);
              p = N(p, 1, null);
              var t = m instanceof vc ? yc : te;
              return null == q ? t.h ? t.h(a, p) : t.call(null, a, p) : J.h("_", q) ? t.g ? t.g(p) : t.call(null, p) : m;
            })() : m, e(F(f)));
          }
          return null;
        }
      }, null, null);
    })(b);
  }
  function Zo(a, b) {
    a = parseInt(a, b);
    return u(isNaN(a)) ? -1 : a;
  }
  ;
  function $o(a) {
    if (null != a && null != a.jb) a = a.jb(a);
    else {
      var b = $o[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = $o._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("Reader.read-char", a);
    }
    return a;
  }
  function ap(a) {
    if (null != a && null != a.Ib) a = a.Ib(a);
    else {
      var b = ap[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = ap._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("Reader.peek-char", a);
    }
    return a;
  }
  function bp(a, b) {
    if (null != a && null != a.jc) a.jc(a, b);
    else {
      var c = bp[aa(null == a ? null : a)];
      if (null != c) c.h ? c.h(a, b) : c.call(null, a, b);
      else if (c = bp._, null != c) c.h ? c.h(a, b) : c.call(null, a, b);
      else throw Fa("IPushbackReader.unread", a);
    }
  }
  function cp(a) {
    if (null != a && null != a.Mc) a = a.Mc(a);
    else {
      var b = cp[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = cp._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IndexingReader.get-line-number", a);
    }
    return a;
  }
  function dp(a) {
    if (null != a && null != a.Kc) a = a.Kc(a);
    else {
      var b = dp[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = dp._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IndexingReader.get-column-number", a);
    }
    return a;
  }
  function ep(a) {
    if (null != a && null != a.Lc) a = a.Lc(a);
    else {
      var b = ep[aa(null == a ? null : a)];
      if (null != b) a = b.g ? b.g(a) : b.call(null, a);
      else if (b = ep._, null != b) a = b.g ? b.g(a) : b.call(null, a);
      else throw Fa("IndexingReader.get-file-name", a);
    }
    return a;
  }
  function fp(a, b) {
    this.K = a;
    this.mc = b;
    this.yb = 0;
  }
  fp.prototype.jb = function() {
    if (this.mc > this.yb) {
      var a = this.K.charAt(this.yb);
      this.yb += 1;
      return a;
    }
    return null;
  };
  fp.prototype.Ib = function() {
    return this.mc > this.yb ? this.K.charAt(this.yb) : null;
  };
  function gp(a, b) {
    this.kc = a;
    this.eb = b;
    this.Ma = this.Yb = 1;
  }
  gp.prototype.jb = function() {
    var a = this.Ma < this.Yb ? this.eb[this.Ma] : this.kc.jb(null);
    this.Ma < this.Yb && (this.Ma += 1);
    return null == a ? null : fe(a);
  };
  gp.prototype.Ib = function() {
    var a = this.Ma < this.Yb ? this.eb[this.Ma] : this.kc.Ib(null);
    return null == a ? null : fe(a);
  };
  gp.prototype.jc = function(a, b) {
    if (u(b)) {
      if (0 === this.Ma) throw Error("Pushback buffer is full");
      --this.Ma;
      return this.eb[this.Ma] = b;
    }
    return null;
  };
  function hp(a) {
    return null != a ? n === a.fd ? true : false : false;
  }
  ;
  function ip(a, b, c, d) {
    var e = K(b);
    a = u(a) ? 0 : 10 < e ? 10 : e;
    b = vf.h(jf(jp, true), wf(a, b));
    b = Qe(w, xf(1, Cf.h(new Af(null, -1, " ", null), b)));
    e = a < e ? "..." : null;
    return [w.g(c), w.g(b), e, w.g(d)].join("");
  }
  var jp, kp = pf(We), lp = pf(We), mp = pf(We), np = pf(We), op = xc(We, Gl, wi.v ? wi.v() : wi.call(null));
  jp = new Hi(yc.h("cljs.tools.reader.impl.inspect", "inspect*"), function(a, b) {
    return null == b ? Ni : "string" === typeof b ? Ri : b instanceof z ? Mj : "number" === typeof b ? Mj : b instanceof vc ? Mj : Fd(b) ? pm : me(b) ? Mk : Cd(b) ? Wj : Ad(b) ? kl : J.h(b, true) ? Mj : J.h(b, false) ? Mj : Ea(b);
  }, op, kp, lp, mp, np);
  Ki(jp, Ri, function(a, b) {
    a = u(a) ? 5 : 20;
    var c = b.length > a ? '..."' : '"', d = b.length;
    return ['"', w.g(b.substring(0, a < d ? a : d)), c].join("");
  });
  Ki(jp, Mj, function(a, b) {
    return w.g(b);
  });
  Ki(jp, Ac, function() {
    return "<indexed seq>";
  });
  Ki(jp, Ig, function() {
    return "<map seq>";
  });
  Ki(jp, mh, function() {
    return "<map seq>";
  });
  Ki(jp, qe, function() {
    return "<cons>";
  });
  Ki(jp, ve, function() {
    return "<lazy seq>";
  });
  Ki(jp, Ni, function() {
    return "nil";
  });
  Ki(jp, Mk, function(a, b) {
    return ip(a, b, "(", ")");
  });
  Ki(jp, Wj, function(a, b) {
    var c = K(b), d = u(a) ? 0 : c;
    b = Qe(Ge, wf(d, b));
    return ip(a, b, "{", c > d ? "...}" : "}");
  });
  Ki(jp, kl, function(a, b) {
    return ip(a, b, "#{", "}");
  });
  Ki(jp, pm, function(a, b) {
    return ip(a, b, "[", "]");
  });
  Ki(jp, Ii, function(a, b) {
    return fi(fd([Ea(b)]));
  });
  function pp(a, b, c) {
    b = new r(null, 2, [Z, Vi, Nj, b], null);
    a = hp(a) ? qd.u(b, Sk, ep(a), fd([Qi, cp(a), Oj, dp(a)])) : b;
    var d = Sk.g(a);
    b = Qi.g(a);
    var e = Oj.g(a);
    d = u(d) ? [w.g(d), " "].join("") : null;
    b = u(b) ? ["[line ", w.g(b), ", col ", w.g(e), "]"].join("") : null;
    c = Te(w, d, b, u(u(d) ? d : b) ? " " : null, c);
    throw new Mi(c, a, null);
  }
  function qp(a, b) {
    return pp(a, Om, fd([Qe(w, b)]));
  }
  function rp(a, b) {
    return pp(a, Pl, fd([Qe(w, b)]));
  }
  function sp(a, b) {
    return pp(a, wk, fd([Qe(w, b)]));
  }
  function tp(a, b, c, d) {
    qp(a, fd(["The map literal starting with ", jp.h(false, D(d)), u(b) ? [" on line ", w.g(b), " column ", w.g(c)].join("") : null, " contains ", K(d), " form(s). Map literals must contain an even number of forms."]));
  }
  function up(a, b, c) {
    return qp(a, fd(["Invalid ", ue(b), ": ", c, "."]));
  }
  function vp(a, b, c) {
    return qp(a, fd(["Invalid character: ", c, " found while reading ", ue(b), "."]));
  }
  function wp(a, b) {
    a: {
      var c = Ri instanceof z ? Ri.M : null;
      switch (c) {
        case "regex":
          c = '#"';
          break a;
        case "string":
          c = '"';
          break a;
        default:
          throw Error(["No matching clause: ", w.g(c)].join(""));
      }
    }
    return sp(a, fd(["Unexpected EOF reading ", ue(Ri), " starting ", Re(w, c, b), "."]));
  }
  function xp(a, b) {
    return rp(a, fd(["Invalid digit ", b, " in unicode character."]));
  }
  function yp(a) {
    return qp(a, fd(["Octal escape sequence must be in range [0, 377]."]));
  }
  function zp(a, b) {
    b = (function(c) {
      return (function f(e) {
        return new ve(null, function() {
          for (var g = e; ; ) if (g = C(g)) {
            if (Gd(g)) {
              var h = Vb(g), k = K(h), m = ze(k);
              a: for (var p = 0; ; ) if (p < k) {
                var q = Ua(h, p), t = N(q, 0, null);
                1 < N(q, 1, null) && m.add(t);
                p += 1;
              } else {
                h = true;
                break a;
              }
              return h ? Be(De(m), f(Wb(g))) : Be(De(m), null);
            }
            m = D(g);
            h = N(m, 0, null);
            if (1 < N(m, 1, null)) return ed(h, f(F(g)));
            g = F(g);
          } else return null;
        }, null, null);
      })(Nh(c));
    })(b);
    return Te(w, a, 1 < K(b) ? "s" : null, ": ", xf(1, Cf.h(new Af(null, -1, ", ", null), b)));
  }
  function Ap(a, b, c) {
    qp(a, fd([zp([na(ue(b)), " literal contains duplicate key"].join(""), c)]));
  }
  ;
  function Bp(a) {
    for (var b = a.jb(null); ; ) if (Wo.g ? Wo.g(b) : Wo.call(null, b)) b = a.jb(null);
    else return b;
  }
  var Cp = /^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$/, Dp = /([-+]?[0-9]+)\/([0-9]+)/, Ep = /([-+]?[0-9]+(\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?/;
  function Fp(a, b) {
    a = Sh(a, b);
    return N(a, 0, null) === b;
  }
  function Gp(a) {
    if (Fp(Cp, a)) {
      var b = ng(Sh(Cp, a));
      if (null != (b.g ? b.g(2) : b.call(null, 2))) a = 0;
      else {
        a = "-" === (b.g ? b.g(1) : b.call(null, 1));
        b = null != (b.g ? b.g(3) : b.call(null, 3)) ? new P(null, 2, 5, R, [b.g ? b.g(3) : b.call(null, 3), 10], null) : null != (b.g ? b.g(4) : b.call(null, 4)) ? new P(null, 2, 5, R, [b.g ? b.g(4) : b.call(null, 4), 16], null) : null != (b.g ? b.g(5) : b.call(null, 5)) ? new P(null, 2, 5, R, [b.g ? b.g(5) : b.call(null, 5), 8], null) : null != (b.g ? b.g(7) : b.call(null, 7)) ? new P(null, 2, 5, R, [b.g ? b.g(7) : b.call(null, 7), parseInt(b.g ? b.g(6) : b.call(
          null,
          6
        ))], null) : new P(null, 2, 5, R, [null, null], null);
        var c = b.g ? b.g(0) : b.call(null, 0);
        null == c ? a = null : (b = parseInt(c, b.g ? b.g(1) : b.call(null, 1)), a = a ? -1 * b : b, a = u(isNaN(a)) ? null : a);
      }
    } else Fp(Ep, a) ? (b = ng(Sh(Ep, a)), a = null != (b.g ? b.g(4) : b.call(null, 4)) ? parseFloat(b.g ? b.g(1) : b.call(null, 1)) : parseFloat(a)) : Fp(Dp, a) ? (b = ng(Sh(Dp, a)), a = b.g ? b.g(1) : b.call(null, 1), b = b.g ? b.g(2) : b.call(null, 2), a = u(Sh(/^\+/, a)) ? a.substring(1) : a, a = parseInt(a) / parseInt(b)) : a = null;
    return a;
  }
  function Hp(a) {
    if ("" === a || true === /:$/.test(a) || true === /^::/.test(a)) return null;
    var b = a.indexOf("/"), c = 0 < b ? a.substring(0, b) : null;
    if (null != c) {
      b += 1;
      if (b === K(a)) return null;
      a = a.substring(b);
      return Xo(Yc(a, 0)) || "" === a || false !== /:$/.test(c) || "/" !== a && -1 !== a.indexOf("/") ? null : new P(null, 2, 5, R, [c, a], null);
    }
    return "/" === a || -1 === a.indexOf("/") ? new P(null, 2, 5, R, [null, a], null) : null;
  }
  var Lp = function Lp2(a) {
    for (var c = [], d = arguments.length, e = 0; ; ) if (e < d) c.push(arguments[e]), e += 1;
    else break;
    return Lp2.u(arguments[0], 1 < c.length ? new Ac(c.slice(1), 0, null) : null);
  };
  Lp.u = function(a) {
    for (; ; ) {
      var b = a.jb(null);
      if ("\n" === b || "\n" === b || null == b) break;
    }
    return a;
  };
  Lp.J = 1;
  Lp.G = function(a) {
    var b = D(a);
    a = G(a);
    return this.u(b, a);
  };
  function Mp() {
    return (function() {
      function a(c, d) {
        var e = null;
        if (1 < arguments.length) {
          e = 0;
          for (var f = Array(arguments.length - 1); e < f.length; ) f[e] = arguments[e + 1], ++e;
          e = new Ac(f, 0, null);
        }
        return b.call(this, c, e);
      }
      function b(c) {
        return qp(c, fd(["Unreadable form"]));
      }
      a.J = 1;
      a.G = function(c) {
        var d = D(c);
        c = F(c);
        return b(d, c);
      };
      a.u = b;
      return a;
    })();
  }
  ;
  new pa();
  function Np(a) {
    var b = "#" !== a;
    return b ? (b = "'" !== a) ? (b = ":" !== a) ? Op.g ? Op.g(a) : Op.call(null, a) : b : b : b;
  }
  function Pp(a) {
    return "@" === a || "`" === a || "~" === a;
  }
  function Qp(a, b, c, d) {
    if (Ba(c)) return sp(a, fd(["Unexpected EOF while reading start of ", ue(b), "."]));
    if (u(u(d) ? Pp(c) : d)) return vp(a, b, c);
    d = new pa();
    for (bp(a, c); ; ) {
      if (Wo(c) || Np(c) || null == c) return w.g(d);
      if (Pp(c)) return vp(a, b, c);
      d.append($o(a));
      c = ap(a);
    }
  }
  function Rp(a, b, c) {
    b = $o(a);
    if (u(b)) {
      var d = Sp.g ? Sp.g(b) : Sp.call(null, b);
      if (u(d)) return d.i ? d.i(a, b, c) : d.call(null, a, b, c);
      bp(a, b);
      return Tp.i ? Tp.i(a, b, c) : Tp.call(null, a, b, c);
    }
    return sp(a, fd(["Unexpected EOF while reading dispatch character."]));
  }
  function Up(a, b) {
    return qp(a, fd(["Unmatched delimiter ", b, "."]));
  }
  function Vp(a, b, c) {
    b = 1 + b;
    if (K(a) !== b) throw rp(null, fd(["Invalid unicode literal: \\", a, "."]));
    for (var d = 1, e = 0; ; ) {
      if (d === b) return String.fromCharCode(e);
      var f = Zo(Yc(a, d), c);
      if (-1 === f) return c = Yc(a, d), rp(null, fd(["Invalid digit ", c, " in unicode character \\", a, "."]));
      e = f + e * c;
      d += 1;
    }
  }
  function Wp(a, b, c, d, e) {
    for (var f = 1, g = Zo(b, c); ; ) {
      if (-1 === g) return xp(a, b);
      if (f !== d) {
        var h = ap(a);
        var k = Wo(h);
        k || (k = Op.g ? Op.g(h) : Op.call(null, h), k = u(k) ? k : null == h);
        if (u(k)) return u(e) ? rp(a, fd(["Invalid unicode literal. Unicode literals should be ", d, "characters long. ", "Value supplied is ", f, " characters long."])) : String.fromCharCode(g);
        k = Zo(h, c);
        $o(a);
        if (-1 === k) return xp(a, h);
        g = k + g * c;
        f += 1;
      } else return String.fromCharCode(g);
    }
  }
  function Xp(a) {
    var b = $o(a);
    if (null != b) {
      b = Np(b) || Pp(b) || Wo(b) ? w.g(b) : Qp(a, Km, b, false);
      var c = b.length;
      if (1 === c) return Yc(b, 0);
      if ("newline" === b) return "\n";
      if ("space" === b) return " ";
      if ("tab" === b) return "	";
      if ("backspace" === b) return "\b";
      if ("formfeed" === b) return "\f";
      if ("return" === b) return "\r";
      if (u(ha(b, "u"))) return b = Vp(b, 4, 16), c = b.charCodeAt(), 55295 < c && 57344 > c ? (b = c.toString(16), a = qp(a, fd(["Invalid character literal \\u", b, "."]))) : a = b, a;
      if (u(ha(b, "o"))) {
        --c;
        if (3 < c) return qp(a, fd([
          "Invalid octal escape sequence in a character literal: ",
          b,
          ". Octal escape sequences must be 3 or fewer digits."
        ]));
        b = Vp(b, c, 8);
        return 255 < (b | 0) ? yp(a) : b;
      }
      return qp(a, fd(["Unsupported character: ", b, "."]));
    }
    return sp(a, fd(["Unexpected EOF while reading character."]));
  }
  function Yp(a) {
    return hp(a) ? new P(null, 2, 5, R, [cp(a), (dp(a) | 0) - 1 | 0], null) : null;
  }
  function Zp(a, b, c, d) {
    var e = Yp(c), f = N(e, 0, null);
    e = N(e, 1, null);
    b = null == b ? null : fe(b);
    for (var g = Ob(ld); ; ) {
      var h = Bp(c);
      if (!u(h)) {
        var k = c, m = a, p = f, q = e, t = K(g);
        sp(k, fd(["Unexpected EOF while reading ", u(t) ? ["item ", w.g(t), " of "].join("") : null, ue(m), u(p) ? [", starting at line ", w.g(p), " and column ", w.g(q)].join("") : null, "."]));
      }
      if (J.h(b, null == h ? null : fe(h))) return Qb(g);
      k = Op.g ? Op.g(h) : Op.call(null, h);
      u(k) ? (h = k.i ? k.i(c, h, d) : k.call(null, c, h, d), g = h !== c ? Pb(g, h) : g) : (bp(c, h), h = $p ? $p(c, true, null, d) : aq.call(
        null,
        c,
        true,
        null,
        d
      ), g = h !== c ? Pb(g, h) : g);
    }
  }
  function bq(a, b, c) {
    a = Zp(Mk, ")", a, c);
    return yd(a) ? Cc : Qe(pe, a);
  }
  function cq(a, b, c) {
    return Zp(pm, "]", a, c);
  }
  function dq(a, b, c) {
    var d = Yp(a);
    b = N(d, 0, null);
    d = N(d, 1, null);
    c = Zp(Wj, "}", a, c);
    var e = K(c), f = Mh(2, c), g = Eh(f);
    !ef(e) && tp(a, b, d, c);
    J.h(K(g), K(f)) || Ap(a, Wj, f);
    if (e <= 2 * Ng) a = Sd(c), a = new r(null, a.length / 2, a, null);
    else a: for (a = Sd(c), b = a.length, d = 0, e = Ob(Og); ; ) if (d < b) c = d + 2, e = Rb(e, a[d], a[d + 1]), d = c;
    else {
      a = Qb(e);
      break a;
    }
    return a;
  }
  function eq(a, b) {
    for (var c = (function() {
      var g = new pa();
      g.append(b);
      return g;
    })(), d = $o(a); ; ) {
      if (u((function() {
        var g = Wo(d);
        if (g) return g;
        g = Op.g ? Op.g(d) : Op.call(null, d);
        return u(g) ? g : null == d;
      })())) {
        var e = w.g(c);
        bp(a, d);
        var f = Gp(e);
        return u(f) ? f : qp(a, fd(["Invalid number: ", e, "."]));
      }
      e = (function() {
        var g = c;
        g.append(d);
        return g;
      })();
      f = $o(a);
      c = e;
      d = f;
    }
  }
  function fq(a) {
    var b = $o(a);
    switch (b) {
      case "t":
        return "	";
      case "r":
        return "\r";
      case "n":
        return "\n";
      case "\\":
        return "\\";
      case '"':
        return '"';
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "u":
        return b = $o(a), -1 === parseInt(b | 0, 16) ? qp(a, fd(["Invalid unicode escape: \\u", b, "."])) : Wp(a, b, 16, 4, true);
      default:
        return Xo(b) ? (b = Wp(a, b, 8, 3, false), 255 < (b | 0) ? yp(a) : b) : qp(a, fd(["Unsupported escape character: \\", b, "."]));
    }
  }
  function gq(a) {
    for (var b = new pa(), c = $o(a); ; ) {
      var d = c;
      if (J.h(null, d)) return wp(a, fd(['"', b]));
      if (J.h("\\", d)) {
        d = (function() {
          var f = b;
          f.append(fq(a));
          return f;
        })();
        var e = $o(a);
        b = d;
        c = e;
      } else {
        if (J.h('"', d)) return w.g(b);
        d = (function() {
          var f = b;
          f.append(c);
          return f;
        })();
        e = $o(a);
        b = d;
        c = e;
      }
    }
  }
  function hq(a, b) {
    b = Qp(a, Um, b, true);
    if (u(b)) switch (b) {
      case "nil":
        return null;
      case "true":
        return true;
      case "false":
        return false;
      case "/":
        return rl;
      default:
        var c = Hp(b);
        c = u(c) ? yc.h(c.g ? c.g(0) : c.call(null, 0), c.g ? c.g(1) : c.call(null, 1)) : null;
        return u(c) ? c : up(a, Um, b);
    }
    else return null;
  }
  function iq(a) {
    var b = $o(a);
    if (Wo(b)) return qp(a, fd(["A single colon is not a valid keyword."]));
    b = Qp(a, Wk, b, true);
    var c = Hp(b);
    if (u(u(c) ? -1 === b.indexOf("::") : c)) {
      var d = c.g ? c.g(0) : c.call(null, 0);
      c = c.g ? c.g(1) : c.call(null, 1);
      return ":" === Yc(b, 0) ? up(a, Wk, [":", w.g(b)].join("")) : te.h(d, c);
    }
    return up(a, Wk, [":", w.g(b)].join(""));
  }
  function jq(a, b, c) {
    b = $p ? $p(a, true, null, c) : aq.call(null, a, true, null, c);
    b = b instanceof z ? rd([b, true]) : b instanceof vc ? new r(null, 1, [Nl, b], null) : "string" === typeof b ? new r(null, 1, [Nl, b], null) : b;
    Cd(b) || qp(a, fd(["Metadata cannot be ", jp.h(false, b), ". Metadata must be a Symbol, Keyword, String or Map."]));
    c = $p ? $p(a, true, null, c) : aq.call(null, a, true, null, c);
    return null != c && (c.l & 131072 || n === c.ec) ? ud(c, yh(fd([vd(c), b]))) : qp(a, fd(["Metadata can not be applied to ", jp.h(false, c), ". ", "Metadata can only be applied to IMetas."]));
  }
  function kq(a, b, c) {
    b = Zp(kl, "}", a, c);
    c = Eh(b);
    J.h(K(b), K(c)) || Ap(a, kl, b);
    return c;
  }
  function lq(a) {
    $p ? $p(a, true, null, true) : aq.call(null, a, true, null, true);
    return a;
  }
  function mq(a, b, c) {
    b = $o(a);
    b = Qp(a, Rm, b, true);
    var d = null == b ? null : Hp(b);
    if (null == d) var e = null;
    else e = N(d, 0, null), d = N(d, 1, null), e = u(e) ? null : d;
    if (u(e)) {
      if ("{" === Bp(a)) {
        b = Zp(Rm, "}", a, c);
        !ef(K(b)) && tp(a, null, null, b);
        c = Yo(w.g(e), Mh(2, b));
        b = Mh(2, F(b));
        J.h(K(Eh(c)), K(c)) || Ap(a, Rm, c);
        a: for (a = Ob(We), c = C(c), b = C(b); ; ) if (c && b) a = He(a, D(c), D(b)), c = G(c), b = G(b);
        else {
          a = Qb(a);
          break a;
        }
        return a;
      }
      return qp(a, fd(["Namespaced map with namespace ", b, " does not specify a map."]));
    }
    return qp(a, fd([
      "Invalid value used as namespace in namespaced map: ",
      b,
      "."
    ]));
  }
  function nq(a, b, c) {
    b = $p ? $p(a, true, null, c) : aq.call(null, a, true, null, c);
    return J.h(Yk, b) ? Number.NaN : J.h(Gk, b) ? Number.NEGATIVE_INFINITY : J.h(Fj, b) ? Number.POSITIVE_INFINITY : qp(a, fd([["Invalid token: ##", w.g(b)].join("")]));
  }
  function Op(a) {
    switch (a) {
      case '"':
        return gq;
      case ":":
        return iq;
      case ";":
        return Lp;
      case "^":
        return jq;
      case "(":
        return bq;
      case ")":
        return Up;
      case "[":
        return cq;
      case "]":
        return Up;
      case "{":
        return dq;
      case "}":
        return Up;
      case "\\":
        return Xp;
      case "#":
        return Rp;
      default:
        return null;
    }
  }
  function Sp(a) {
    switch (a) {
      case "^":
        return jq;
      case "{":
        return kq;
      case "<":
        return Mp();
      case "!":
        return Lp;
      case "_":
        return lq;
      case ":":
        return mq;
      case "#":
        return nq;
      default:
        return null;
    }
  }
  function Tp(a, b, c) {
    b = $p ? $p(a, true, null, c) : aq.call(null, a, true, null, c);
    var d = $p ? $p(a, true, null, c) : aq.call(null, a, true, null, c);
    b instanceof vc || qp(a, fd(["Invalid reader tag: ", jp.h(false, "Reader tag must be a symbol"), ". Reader tags must be symbols."]));
    var e = y(hk.g(c), b);
    e = u(e) ? e : We.g ? We.g(b) : We.call(null, b);
    if (u(e)) return e.g ? e.g(d) : e.call(null, d);
    c = Ii.g(c);
    return u(c) ? c.h ? c.h(b, d) : c.call(null, b, d) : qp(a, fd(["No reader function for tag ", jp.h(false, b), "."]));
  }
  function aq(a) {
    switch (arguments.length) {
      case 1:
        return oq(We, arguments[0]);
      case 2:
        return oq(arguments[0], arguments[1]);
      case 4:
        return $p(arguments[0], arguments[1], arguments[2], arguments[3]);
      default:
        throw Error(["Invalid arity: ", w.g(arguments.length)].join(""));
    }
  }
  function oq(a, b) {
    a = Ve(a);
    var c = y(a, wk), d = !Md(a, wk);
    return $p(b, d, c, a);
  }
  function $p(a, b, c, d) {
    try {
      for (; ; ) {
        var e = $o(a);
        if (!Wo(e)) {
          if (null == e) {
            if (u(b)) {
              b = a;
              var f = u(null) ? sp(b, fd(["EOF while reading, starting at line ", null, "."])) : sp(b, fd(["EOF while reading."]));
            } else f = c;
            return f;
          }
          if (Xo(e) || ("+" === e || "-" === e) && Xo(a.Ib(null))) return eq(a, e);
          var g = Op(e);
          if (u(g)) {
            var h = g.i ? g.i(a, e, d) : g.call(null, a, e, d);
            if (h !== a) return h;
          } else return hq(a, e);
        }
      }
    } catch (k) {
      if (k instanceof Error) {
        f = k;
        if (f instanceof Mi) {
          c = f instanceof Mi ? f.data : null;
          if (J.h(Vi, Z.g(c))) throw f;
          b = f.message;
          a = yh(fd([new r(
            null,
            1,
            [Z, Vi],
            null
          ), c, hp(a) ? new r(null, 3, [Qi, cp(a), pk, dp(a), Sk, ep(a)], null) : null]));
          throw new Mi(b, a, f);
        }
        b = f.message;
        a = yh(fd([new r(null, 1, [Z, Vi], null), hp(a) ? new r(null, 3, [Qi, cp(a), pk, dp(a), Sk, ep(a)], null) : null]));
        throw new Mi(b, a, f);
      }
      throw k;
    }
  }
  ;
  var pq = (function() {
    var a = new P(null, 13, 5, R, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new P(null, 13, 5, R, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
    return function(c, d) {
      return y(u(d) ? b : a, c);
    };
  })(), qq = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
  function rq(a) {
    a = parseInt(a, 10);
    return Ba(isNaN(a)) ? a : null;
  }
  function sq(a, b, c, d) {
    if (!(a <= b && b <= c)) throw Error([w.g(d), " Failed:  ", w.g(a), "<=", w.g(b), "<=", w.g(c)].join(""));
    return b;
  }
  function tq(a) {
    var b = Rh(qq, a);
    N(b, 0, null);
    var c = N(b, 1, null), d = N(b, 2, null), e = N(b, 3, null), f = N(b, 4, null), g = N(b, 5, null), h = N(b, 6, null), k = N(b, 7, null), m = N(b, 8, null), p = N(b, 9, null), q = N(b, 10, null);
    if (Ba(b)) throw Error(["Unrecognized date/time syntax: ", w.g(a)].join(""));
    a = rq(c);
    b = (function() {
      var B = rq(d);
      return u(B) ? B : 1;
    })();
    c = (function() {
      var B = rq(e);
      return u(B) ? B : 1;
    })();
    var t = (function() {
      var B = rq(f);
      return u(B) ? B : 0;
    })(), v = (function() {
      var B = rq(g);
      return u(B) ? B : 0;
    })(), A = (function() {
      var B = rq(h);
      return u(B) ? B : 0;
    })(), E = (function() {
      a: if (J.h(
        3,
        K(k)
      )) var B = k;
      else if (3 < K(k)) B = k.substring(0, 3);
      else for (B = new pa(k); ; ) if (3 > B.getLength()) B = B.append("0");
      else {
        B = B.toString();
        break a;
      }
      B = rq(B);
      return u(B) ? B : 0;
    })();
    m = (J.h(m, "-") ? -1 : 1) * (60 * (function() {
      var B = rq(p);
      return u(B) ? B : 0;
    })() + (function() {
      var B = rq(q);
      return u(B) ? B : 0;
    })());
    return new P(null, 8, 5, R, [
      a,
      sq(1, b, 12, "timestamp month field must be in range 1..12"),
      sq(1, c, pq(b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)), "timestamp day field must be in range 1..last day in month"),
      sq(0, t, 23, "timestamp hour field must be in range 0..23"),
      sq(0, v, 59, "timestamp minute field must be in range 0..59"),
      sq(0, A, J.h(v, 59) ? 60 : 59, "timestamp second field must be in range 0..60"),
      sq(0, E, 999, "timestamp millisecond field must be in range 0..999"),
      m
    ], null);
  }
  var uq = pf(null), vq = pf(yh(fd([new r(null, 4, [Sl, function(a) {
    if ("string" === typeof a) {
      var b = tq(a);
      if (u(b)) {
        a = N(b, 0, null);
        var c = N(b, 1, null), d = N(b, 2, null), e = N(b, 3, null), f = N(b, 4, null), g = N(b, 5, null), h = N(b, 6, null);
        b = N(b, 7, null);
        b = new Date(Date.UTC(a, c - 1, d, e, f, g, h) - 6e4 * b);
      } else throw Error(["Unrecognized date/time syntax: ", w.g(a)].join(""));
      return b;
    }
    throw Error("Instance literal expects a string for its timestamp.");
  }, cj, function(a) {
    if ("string" === typeof a) return new Li(a.toLowerCase());
    throw Error("UUID literal expects a string as its representation.");
  }, ml, function(a) {
    if (Fd(a)) return Kf.h(Bg, a);
    throw Error("Queue literal expects a vector for its elements.");
  }, Yi, function(a) {
    if (Fd(a)) {
      var b = [];
      a = C(a);
      for (var c = null, d = 0, e = 0; ; ) if (e < d) {
        var f = c.H(null, e);
        b.push(f);
        e += 1;
      } else if (a = C(a)) c = a, Gd(c) ? (a = Vb(c), e = Wb(c), c = a, d = K(a), a = e) : (a = D(c), b.push(a), a = G(c), c = null, d = 0), e = 0;
      else break;
      return b;
    }
    if (Cd(a)) {
      b = {};
      a = C(a);
      c = null;
      for (e = d = 0; ; ) if (e < d) {
        var g = c.H(null, e);
        f = N(g, 0, null);
        g = N(g, 1, null);
        var h = b;
        f = ue(f);
        h[f] = g;
        e += 1;
      } else if (a = C(a)) Gd(a) ? (d = Vb(a), a = Wb(a), c = d, d = K(d)) : (d = D(a), c = N(d, 0, null), d = N(d, 1, null), e = b, c = ue(c), e[c] = d, a = G(a), c = null, d = 0), e = 0;
      else break;
      return b;
    }
    throw Error("JS literal expects a vector or map containing only string or unqualified keyword keys");
  }], null), We])));
  var wq = th("float boolean int numeric string timestamp uuid bool text number datetime order integer".split(" "), [vk, Pm, tl, vk, Ri, Bm, lj, Pm, Ri, vk, Bm, Wm, tl]);
  function xq(a) {
    return u(a) ? y(wq, a.toLowerCase()) : null;
  }
  var yq = /[A-Za-z_]/, zq = /[A-Za-z0-9_]/;
  function Aq(a, b) {
    return 0 <= b && b < K(a) ? a.substring(b, b + 1) : null;
  }
  function Bq(a) {
    return Kd(u(a) ? Rh(yq, a) : a);
  }
  function Cq(a) {
    return Kd(u(a) ? Rh(zq, a) : a);
  }
  function Dq(a, b, c) {
    for (var d = K(a); ; ) {
      var e;
      if (e = b < d) e = Aq(a, b), e = c.g ? c.g(e) : c.call(null, e);
      if (u(e)) b += 1;
      else return b;
    }
  }
  function Eq(a) {
    for (var b = K(a), c = 0, d = dl, e = ld; ; ) {
      if (c >= b) return e;
      var f = Aq(a, c), g = Aq(a, c + 1), h = d, k = h instanceof z ? h.M : null;
      switch (k) {
        case "string":
          J.h("'", f) && J.h("'", g) ? (d = Ri, c += 2) : J.h("'", f) ? (d = dl, c += 1) : (d = Ri, c += 1);
          continue;
        case "line-comment":
          J.h("\n", f) ? (d = dl, c += 1) : (d = Tl, c += 1);
          continue;
        case "block-comment":
          J.h("*", f) && J.h("/", g) ? (d = dl, c += 2) : (d = el, c += 1);
          continue;
        default:
          if (J.h("'", f)) d = Ri, c += 1;
          else if (J.h("-", f) && J.h("-", g)) d = Tl, c += 2;
          else if (J.h("/", f) && J.h("*", g)) d = el, c += 2;
          else if (J.h("?", f)) if (Bq(g)) {
            var m = Dq(a, c + 2, Cq), p = a.substring(c + 1, m), q = J.h("?", Aq(a, m)), t = q ? m + 1 : m, v = J.h(":", Aq(a, t)) && Bq(Aq(a, t + 1)), A = v ? Dq(a, t + 2, Cq) : t, E = v ? a.substring(t + 1, A) : null, B = v && J.h("(", Aq(a, A)) ? A : !v && J.h("(", Aq(a, t)) ? t : null, I = u(B) ? (function() {
              for (var da = B + 1; ; ) {
                if (da >= b) return null;
                if (J.h(")", Aq(a, da))) return da;
                if (J.h("\n", Aq(a, da))) return null;
                da += 1;
              }
            })() : null, Q = u(I) ? ng(Gf(yd, vf.h(sn, qn(a.substring(B + 1, I), /,/)))) : null, H = u(I) ? I + 1 : A, O = J.h("[", Aq(a, H)) && J.h("]", Aq(a, H + 1)), S = O ? H + 2 : H, ca = J.h("=", Aq(a, S)), ua = S + 1, ab = ca ? J.h("[", Aq(
              a,
              ua
            )) ? (function() {
              for (var da = ua + 1; ; ) {
                if (da >= b) return da;
                if (J.h("]", Aq(a, da))) return da + 1;
                da += 1;
              }
            })() : J.h('"', Aq(a, ua)) ? (function() {
              for (var da = ua + 1; ; ) {
                if (da >= b) return da;
                if (J.h('"', Aq(a, da))) return da + 1;
                da += 1;
              }
            })() : Dq(a, ua, /* @__PURE__ */ (function() {
              return function(da) {
                if (u(da)) {
                  var Ra = new Ah(null, new r(null, 7, ["]", null, "\r", null, ")", null, "	", null, ",", null, " ", null, "\n", null], null), null);
                  da = Ra.g ? Ra.g(da) : Ra.call(null, da);
                  da = Ba(da);
                }
                return da;
              };
            })(c, d, e, m, p, q, t, v, A, E, B, I, Q, H, O, S, ca, ua, h, k, f, g, b)) : null, V = ca ? ab : S;
            d = V;
            f = dl;
            e = M.h(
              e,
              (function() {
                var da = new r(null, 7, [vj, Il, Ml, p, nm, E, Z, xq(E), dn, O, T, c, Y, V], null);
                da = q ? qd.i(da, gl, true) : da;
                da = u(Q) ? qd.i(da, ik, Q) : da;
                return ca ? qd.i(da, Ii, a.substring(ua, ab)) : da;
              })()
            );
            c = d;
            d = f;
          } else d = c + 1, f = dl, e = M.h(e, new r(null, 3, [vj, am, T, c, Y, c + 1], null)), c = d, d = f;
          else d = dl, c += 1;
      }
    }
  }
  var Fq = /\b(ORDER|GROUP)\s+BY\s+(?:[^,()]*,\s*)*$/is;
  function Gq(a, b) {
    return ng((function() {
      return (function e(d) {
        return new ve(null, function() {
          for (var f = d; ; ) if (f = C(f)) {
            if (Gd(f)) {
              var g = Vb(f), h = K(g), k = ze(h);
              a: for (var m = 0; ; ) if (m < h) {
                var p = Ua(g, m), q = Ve(p);
                p = y(q, T);
                var t = y(q, Y), v = y(q, Ml), A = y(q, Z);
                q = y(q, ik);
                u(Sh(Fq, a.substring(0, p))) && (A = J.h(Wm, A), !A || yd(q)) && (q = k, p = new r(null, 3, [kj, A ? ["?", w.g(v), " is an order param without a restriction set \u2014 write ?", w.g(v), ":order(col_a, col_b) to declare which columns callers may sort by"].join("") : [
                  "?",
                  w.g(v),
                  " is in ORDER BY / GROUP BY position, where a bind parameter silently sorts by a constant instead of a column \u2014 use a literal column name, or ?",
                  w.g(v),
                  ":order(col_a, col_b) for a caller-chosen one"
                ].join(""), T, p, Y, t], null), q.add(p));
                m += 1;
              } else {
                g = true;
                break a;
              }
              return g ? Be(De(k), e(Wb(f))) : Be(De(k), null);
            }
            k = D(f);
            p = Ve(k);
            k = y(p, T);
            g = y(p, Y);
            h = y(p, Ml);
            m = y(p, Z);
            p = y(p, ik);
            if (u(Sh(Fq, a.substring(0, k))) && (m = J.h(Wm, m), !m || yd(p))) return ed(new r(null, 3, [kj, m ? ["?", w.g(h), " is an order param without a restriction set \u2014 write ?", w.g(h), ":order(col_a, col_b) to declare which columns callers may sort by"].join("") : [
              "?",
              w.g(h),
              " is in ORDER BY / GROUP BY position, where a bind parameter silently sorts by a constant instead of a column \u2014 use a literal column name, or ?",
              w.g(h),
              ":order(col_a, col_b) for a caller-chosen one"
            ].join(""), T, k, Y, g], null), e(F(f)));
            f = F(f);
          } else return null;
        }, null, null);
      })(b);
    })());
  }
  function Hq(a) {
    return 2 <= K(a) && ha(a, '"') && yn(a);
  }
  function Iq(a) {
    var b = Kf.i(Ch, gf.h(Ef(gl), vf.g(Ml)), a);
    return Ge.h((function() {
      return (function e(d) {
        return new ve(null, function() {
          for (var f = d; ; ) if (f = C(f)) {
            if (Gd(f)) {
              var g = Vb(f), h = K(g), k = ze(h);
              return (function() {
                for (var v = 0; ; ) if (v < h) {
                  var A = Ua(g, v), E = Ve(A);
                  A = E;
                  var B = y(E, Ml);
                  E = y(E, Ii);
                  var I = E;
                  I = u(I) ? b.g ? b.g(B) : b.call(null, B) : I;
                  u(I) && (I = k, A = new r(null, 3, [
                    kj,
                    ["?", w.g(B), "? is optional, so it can't have a default \u2014 drop `?` to always filter, or drop `=", w.g(E), "` to skip the predicate when absent"].join(""),
                    T,
                    T.g(A),
                    Y,
                    Y.g(A)
                  ], null), I.add(A));
                  v += 1;
                } else return true;
              })() ? Be(De(k), e(Wb(f))) : Be(De(k), null);
            }
            var m = D(f), p = m = Ve(m), q = y(m, Ml), t = y(m, Ii);
            if (u((function() {
              var v = t;
              return u(v) ? b.g ? b.g(q) : b.call(null, q) : v;
            })())) return ed(new r(null, 3, [kj, ["?", w.g(q), "? is optional, so it can't have a default \u2014 drop `?` to always filter, or drop `=", w.g(t), "` to skip the predicate when absent"].join(""), T, T.g(p), Y, Y.g(p)], null), e(F(f)));
            f = F(f);
          } else return null;
        }, null, null);
      })(a);
    })(), (function() {
      return (function e(d) {
        return new ve(
          null,
          function() {
            for (var f = d; ; ) if (f = C(f)) {
              if (Gd(f)) {
                var g = Vb(f), h = K(g), k = ze(h);
                return (function() {
                  for (var E = 0; ; ) if (E < h) {
                    var B = Ua(g, E), I = Ve(B);
                    B = I;
                    var Q = y(I, Ml), H = y(I, Ii), O = y(I, nm);
                    I = y(I, Z);
                    var S = H;
                    I = u(S) ? !ha(H, "[") && (J.h(Ri, I) || null == I) && !Hq(H) : S;
                    u(I) && (I = k, B = new r(null, 3, [kj, ["?", w.g(Q), u(O) ? [":", w.g(O)].join("") : null, ' default must be double-quoted \u2014 write ="', nn(H, /^'|'$/, ""), '"'].join(""), T, T.g(B), Y, Y.g(B)], null), I.add(B));
                    E += 1;
                  } else return true;
                })() ? Be(De(k), e(Wb(f))) : Be(De(k), null);
              }
              var m = D(f), p = m = Ve(m), q = y(m, Ml), t = y(m, Ii), v = y(m, nm), A = y(m, Z);
              if (u((function() {
                var E = t;
                return u(E) ? !ha(t, "[") && (J.h(Ri, A) || null == A) && !Hq(t) : E;
              })())) return ed(new r(null, 3, [kj, ["?", w.g(q), u(v) ? [":", w.g(v)].join("") : null, ' default must be double-quoted \u2014 write ="', nn(t, /^'|'$/, ""), '"'].join(""), T, T.g(p), Y, Y.g(p)], null), e(F(f)));
              f = F(f);
            } else return null;
          },
          null,
          null
        );
      })(a);
    })());
  }
  function Jq(a) {
    function b(k) {
      return Ff(function(m) {
        return J.h(k, Ml.g(m));
      }, d);
    }
    var c = Eq(u(a) ? a : ""), d = Nf(function(k) {
      return J.h(Il, vj.g(k));
    }, c), e = Nf(function(k) {
      return J.h(am, vj.g(k));
    }, c);
    if (yd(d) && yd(e)) return new r(null, 5, [Fl, an, Xj, ld, Mm, 0, Rj, ld, Em, ld], null);
    if (yd(d)) return new r(null, 5, [Fl, am, Xj, ld, Mm, K(e), Rj, ld, Em, ld], null);
    var f = ng(Fh(vf.h(Ml, d))), g = Lf(function(k) {
      var m = b(k), p = dn.g(D(m)), q = ng(Fh(nf(nm, m))), t = ng(Fh(nf(Z, m))), v = ng(Gf(xq, q)), A = D(t);
      A = u(A) ? A : Ri;
      var E = D(q);
      var B = Gf(tn, qn(w.g(k), /[_\s]+/));
      B = yd(B) ? w.g(k) : on(" ", ed(na(D(B)), F(B)));
      k = new r(null, 8, [Ml, k, dn, p, Z, A, nm, E, Ol, B, dk, Kd(C(q)), $i, 1 < K(t), Ul, v], null);
      k = u(df(gl, m)) ? qd.i(k, gk, true) : k;
      return u(df(Ii, m)) ? qd.i(k, Ii, df(Ii, m)) : k;
    }, f), h = Kf.h(
      Kf.h(Kf.h(Kf.h(Kf.h(ld, (function() {
        return (function p(m) {
          return new ve(null, function() {
            for (var q = m; ; ) {
              var t = C(q);
              if (t) {
                var v = t, A = D(v), E = b(A);
                if (1 < K(Fh(vf.h(dn, E))) && (t = C((/* @__PURE__ */ (function(B, I, Q, H, O, S, ca, ua, ab, V, da) {
                  return function Va(oa) {
                    return new ve(
                      null,
                      /* @__PURE__ */ (function(ra, Ab, dd) {
                        return function() {
                          for (; ; ) {
                            var sb = C(oa);
                            if (sb) {
                              if (Gd(sb)) {
                                var sc = Vb(sb), Mb = K(sc), tc = ze(Mb);
                                a: for (var Lc = 0; ; ) if (Lc < Mb) {
                                  var Td = Ua(sc, Lc), Dd = tc;
                                  Td = new r(null, 3, [kj, ["?", w.g(dd), " is used as both a scalar and an array \u2014 pick one"].join(""), T, T.g(Td), Y, Y.g(Td)], null);
                                  Dd.add(Td);
                                  Lc += 1;
                                } else {
                                  sc = true;
                                  break a;
                                }
                                return sc ? Be(De(tc), Va(Wb(sb))) : Be(De(tc), null);
                              }
                              tc = D(sb);
                              return ed(new r(null, 3, [kj, ["?", w.g(dd), " is used as both a scalar and an array \u2014 pick one"].join(""), T, T.g(tc), Y, Y.g(tc)], null), Va(F(sb)));
                            }
                            return null;
                          }
                        };
                      })(B, I, Q, H, O, S, ca, ua, ab, V, da),
                      null,
                      null
                    );
                  };
                })(q, E, A, v, t, f, b, g, c, d, e))(E)))) return Ge.h(t, p(F(q)));
                q = F(q);
              } else return null;
            }
          }, null, null);
        })(f);
      })()), (function() {
        return (function p(m) {
          return new ve(null, function() {
            for (var q = m; ; ) {
              var t = C(q);
              if (t) {
                var v = t, A = D(v);
                if (u($i.g(A)) && (t = C((/* @__PURE__ */ (function(E, B, I, Q, H, O, S, ca, ua, ab) {
                  return function Ra(da) {
                    return new ve(null, /* @__PURE__ */ (function(oa, Va) {
                      return function() {
                        for (; ; ) {
                          var ra = C(da);
                          if (ra) {
                            if (Gd(ra)) {
                              var Ab = Vb(ra), dd = K(Ab), sb = ze(dd);
                              a: for (var sc = 0; ; ) if (sc < dd) {
                                var Mb = Ua(Ab, sc), tc = sb;
                                Mb = new r(null, 3, [kj, [
                                  "?",
                                  w.g(Ml.g(Va)),
                                  " is annotated with conflicting types"
                                ].join(""), T, T.g(Mb), Y, Y.g(Mb)], null);
                                tc.add(Mb);
                                sc += 1;
                              } else {
                                Ab = true;
                                break a;
                              }
                              return Ab ? Be(De(sb), Ra(Wb(ra))) : Be(De(sb), null);
                            }
                            sb = D(ra);
                            return ed(new r(null, 3, [kj, ["?", w.g(Ml.g(Va)), " is annotated with conflicting types"].join(""), T, T.g(sb), Y, Y.g(sb)], null), Ra(F(ra)));
                          }
                          return null;
                        }
                      };
                    })(E, B, I, Q, H, O, S, ca, ua, ab), null, null);
                  };
                })(q, A, v, t, f, b, g, c, d, e))(b(Ml.g(A)))))) return Ge.h(t, p(F(q)));
                q = F(q);
              } else return null;
            }
          }, null, null);
        })(g);
      })()), (function() {
        return (function p(m) {
          return new ve(
            null,
            function() {
              for (; ; ) {
                var q = C(m);
                if (q) {
                  if (Gd(q)) {
                    var t = Vb(q), v = K(t), A = ze(v);
                    a: for (var E = 0; ; ) if (E < v) {
                      var B = Ua(t, E), I = A;
                      B = new r(null, 3, [kj, "Template mixes named (?name) and positional (?) placeholders \u2014 use one style", T, T.g(B), Y, Y.g(B)], null);
                      I.add(B);
                      E += 1;
                    } else {
                      t = true;
                      break a;
                    }
                    return t ? Be(De(A), p(Wb(q))) : Be(De(A), null);
                  }
                  A = D(q);
                  return ed(new r(null, 3, [kj, "Template mixes named (?name) and positional (?) placeholders \u2014 use one style", T, T.g(A), Y, Y.g(A)], null), p(F(q)));
                }
                return null;
              }
            },
            null,
            null
          );
        })(e);
      })()), Gq(a, d)),
      Iq(d)
    );
    a = ng((function() {
      return (function p(m) {
        return new ve(null, function() {
          for (var q = m; ; ) {
            var t = C(q);
            if (t) {
              var v = t, A = D(v);
              if (t = C((/* @__PURE__ */ (function(E, B, I, Q, H, O, S, ca, ua, ab, V) {
                return function oa(Ra) {
                  return new ve(null, /* @__PURE__ */ (function(Va, ra, Ab, dd, sb, sc, Mb, tc, Lc, Td, Dd) {
                    return function() {
                      for (var fc = Ra; ; ) {
                        var pd = C(fc);
                        if (pd) {
                          var hf = pd, Tc = D(hf);
                          if (pd = C((/* @__PURE__ */ (function(Ud, Vd, Je, Vg, Os, Ps, Qs, Rs, Ss, Ts, Us, Vs, Ws, Xs, Ys) {
                            return function Ip(Zs) {
                              return new ve(null, /* @__PURE__ */ (function(Iu, Ju, rj, Ku, Lu, Jp) {
                                return function() {
                                  for (var Ke = Zs; ; ) if (Ke = C(Ke)) {
                                    if (Gd(Ke)) {
                                      var sj = Vb(Ke), Kp = K(sj), Hf = ze(Kp);
                                      a: for (var bm = 0; ; ) if (bm < Kp) {
                                        var Oh = Ua(sj, bm);
                                        if (J.h(rj, nm.g(Oh))) {
                                          var $s = Hf;
                                          Oh = new r(null, 3, [kj, ["?", w.g(Ml.g(Jp)), ": unknown type '", w.g(rj), "' \u2014 treated as string"].join(""), T, T.g(Oh), Y, Y.g(Oh)], null);
                                          $s.add(Oh);
                                        }
                                        bm += 1;
                                      } else {
                                        sj = true;
                                        break a;
                                      }
                                      return sj ? Be(De(Hf), Ip(Wb(Ke))) : Be(De(Hf), null);
                                    }
                                    Hf = D(Ke);
                                    if (J.h(rj, nm.g(Hf))) return ed(new r(null, 3, [kj, ["?", w.g(Ml.g(Jp)), ": unknown type '", w.g(rj), "' \u2014 treated as string"].join(""), T, T.g(Hf), Y, Y.g(Hf)], null), Ip(F(Ke)));
                                    Ke = F(Ke);
                                  } else return null;
                                };
                              })(
                                Ud,
                                Vd,
                                Je,
                                Vg,
                                Os,
                                Ps,
                                Qs,
                                Rs,
                                Ss,
                                Ts,
                                Us,
                                Vs,
                                Ws,
                                Xs,
                                Ys
                              ), null, null);
                            };
                          })(fc, Va, Tc, hf, pd, ra, Ab, dd, sb, sc, Mb, tc, Lc, Td, Dd))(sc(Ml.g(ra))))) return Ge.h(pd, oa(F(fc)));
                          fc = F(fc);
                        } else return null;
                      }
                    };
                  })(E, B, I, Q, H, O, S, ca, ua, ab, V), null, null);
                };
              })(q, A, v, t, f, b, g, h, c, d, e))(Ul.g(A)))) return Ge.h(t, p(F(q)));
              q = F(q);
            } else return null;
          }
        }, null, null);
      })(g);
    })());
    return new r(null, 5, [Fl, Il, Xj, g, Mm, 0, Rj, h, Em, a], null);
  }
  function Kq(a, b) {
    if (null == a) return null;
    var c = ha(a, "[");
    c ? b = c : (c = new Ah(null, new r(null, 6, [tl, null, jj, null, vk, null, Cl, null, Bl, null, Pm, null], null), null), b = c.g ? c.g(b) : c.call(null, b));
    if (u(b)) try {
      var d = new r(null, 3, [hk, x(vq), Ii, x(uq), wk, null], null);
      if (u(u(a) ? Xe(a, "") : a)) {
        var e = new fp(a, K(a));
        a: {
          var f = Array(1);
          if (Jd(null)) {
            b = 0;
            for (var g = C(null); ; ) if (g && 1 > b) {
              f[b] = D(g);
              c = b + 1;
              var h = G(g);
              b = c;
              g = h;
            } else {
              var k = f;
              break a;
            }
          } else {
            for (g = 0; ; ) if (1 > g) f[g] = null, g += 1;
            else break;
            k = f;
          }
        }
        var m = oq(d, new gp(e, k));
      } else m = null;
      return m;
    } catch (p) {
      return a;
    }
    else return Hq(a) ? le(a, 1, K(a) - 1) : a;
  }
  ;
  function Lq(a) {
    a = en.g(a);
    a = u(a) ? y(wq, a.toLowerCase()) : null;
    return u(a) ? a : Ri;
  }
  function Mq(a) {
    var b = Lq(a), c = dn.g(a), d = uj.g(a);
    var e = u(u(null) ? Md(null, te.g(d)) : null) ? y(null, te.g(d)) : u(u(null) ? Md(null, d) : null) ? y(null, d) : u(sl.g(a)) ? Kq(sl.g(a), Lq(a)) : null;
    if (u(null)) throw d = ["Parameter ?", w.g(uj.g(a)), " ", w.g(null)].join(""), a = new r(null, 7, [xl, "PARAM_TYPE_MISMATCH", cm, uj.g(a), Z, b, dn, c, Uk, e, kj, null, Zm, Zm.g(a)], null), new Mi(d, a, null);
    return e;
  }
  var Nq = (function() {
    var a = pf(We), b = pf(We), c = pf(We), d = pf(We), e = xc(We, Gl, wi.v ? wi.v() : wi.call(null));
    return new Hi(yc.h("synthigy.xsql.compile", "op-compile-rewrite"), function(f) {
      return u(f) ? f : Ii;
    }, e, a, b, c, d);
  })();
  Ki(Nq, Ii, function(a, b) {
    return b;
  });
  function Oq(a) {
    return Cd(a) && J.h(new P(null, 1, 5, R, [nk], null), ng(Kg(a))) ? nk.g(a) : a;
  }
  Ki(Nq, "get", function(a, b) {
    a = Ve(b);
    var c = y(a, Aj);
    b = y(a, Bk);
    var d = ae(function(e, f, g) {
      var h = N(e, 0, null);
      e = N(e, 1, null);
      var k;
      if (k = Fd(g)) {
        if (k = J.h(1, K(g))) k = D(g), k = Cd(k) && J.h(new Ah(null, new r(null, 1, [Bk, null], null), null), Eh(Kg(k))) && Cd(Bk.g(k));
      }
      return k ? new P(null, 2, 5, R, [qd.i(h, f, null), qd.i(e, f, Oq(Bk.g(D(g))))], null) : new P(null, 2, 5, R, [qd.i(h, f, g), e], null);
    }, new P(null, 2, 5, R, [We, We], null), c);
    c = N(d, 0, null);
    d = N(d, 1, null);
    b = ae(function(e, f, g) {
      return qd.i(e, f, Oq(g));
    }, We, yh(fd([u(b) ? b : We, d])));
    return qd.u(
      a,
      Aj,
      c,
      fd([Bk, b])
    );
  });
  function Pq(a) {
    a = D(Jf.g(a));
    var b = X.g(a);
    switch (b instanceof z ? b.M : null) {
      case "string":
        return a = W.g(a), a = le(a, 1, K(a) - 1), nn(a, /\\(.)/, "$1");
      case "number":
        return a = W.g(a), -1 != a.indexOf(".") ? parseFloat(a) : parseInt(a, 10);
      case "list-literal":
        return Qq.g ? Qq.g(a) : Qq.call(null, a);
      case "identifier":
        switch (W.g(a)) {
          case "true":
            return true;
          case "false":
            return false;
          case "null":
            return null;
          default:
            return W.g(a);
        }
      case "param-ref":
        return Mq(a);
      default:
        return null;
    }
  }
  function Qq(a) {
    a = Ka(function(c, d) {
      var e = D(Jf.g(d));
      var f = (f = J.h(jk, X.g(e))) ? dn.g(e) : f;
      if (u(f)) return d = Mq(e), J.h(Am, d) ? qd.i(c, $l, true) : null == d ? Rf.B(c, Tk, M, null) : Bd(d) ? Rf.B(c, Tk, Kf, d) : Rf.B(c, Tk, M, d);
      d = Pq(d);
      return J.h(Am, d) ? qd.i(c, $l, true) : Rf.B(c, Tk, M, d);
    }, new r(null, 2, [Tk, ld, $l, false], null), Cn(a, Uk));
    var b = Ve(a);
    a = y(b, Tk);
    b = y(b, $l);
    return u(u(b) ? yd(a) : b) ? Am : a;
  }
  ;
  var Rq = new r(null, 5, [
    "string",
    new Ah(null, new r(null, 12, ["_ilike", null, "_like", null, "_in", null, "_le", null, "_gt", null, "is_not_null", null, "_neq", null, "is_null", null, "_eq", null, "_lt", null, "_not_in", null, "_ge", null], null), null),
    "number",
    new Ah(null, new r(null, 10, ["_in", null, "_le", null, "_gt", null, "is_not_null", null, "_neq", null, "is_null", null, "_eq", null, "_lt", null, "_not_in", null, "_ge", null], null), null),
    "boolean",
    new Ah(null, new r(null, 4, ["is_not_null", null, "_neq", null, "is_null", null, "_eq", null], null), null),
    "timestamp",
    new Ah(null, new r(null, 10, ["_in", null, "_le", null, "_gt", null, "is_not_null", null, "_neq", null, "is_null", null, "_eq", null, "_lt", null, "_not_in", null, "_ge", null], null), null),
    "enum",
    new Ah(null, new r(null, 6, ["_in", null, "is_not_null", null, "_neq", null, "is_null", null, "_eq", null, "_not_in", null], null), null)
  ], null), Sq = new Ah(null, new r(null, 9, [Jl, null, Hm, null, Pk, null, Sm, null, wl, null, sk, null, ym, null, $m, null, Pj, null], null), null);
  function Tq(a, b) {
    return new r(null, 4, [Gj, uk, T, D(Zm.g(a)), Y, jd(Zm.g(a)), kj, b], null);
  }
  function Uq(a, b) {
    return new r(null, 4, [Gj, Zl, T, D(Zm.g(a)), Y, jd(Zm.g(a)), kj, b], null);
  }
  function Vq(a, b) {
    b = df(function(c) {
      var d = N(c, 0, null);
      c = N(c, 1, null);
      return J.h(c, a) ? d : null;
    }, Vl.g(b));
    return u(b) ? b : "entity";
  }
  function Wq(a) {
    for (var b = K(a) - 1; ; ) {
      if (0 > b) return 0;
      if (u(Rh(/\s/, a.substring(b, b + 1)))) --b;
      else return b + 1;
    }
  }
  function Xq(a, b) {
    var c = Wq(b), d = tf(ld), e = tf(false);
    (function k(g, h) {
      return J.h(uk, X.g(g)) ? Ba(x(e)) && D(Zm.g(g)) < c ? (d.ma(null, M.h(d.ka(null), qd.i(Tq(g, (function() {
        var m = kj.g(g);
        if (!u(m)) {
          m = D(Zm.g(g));
          var p = jd(Zm.g(g));
          var q = K(b);
          p = p > m ? p : m + 24;
          q = p < q ? p : q;
          p = vn(b, "\n", m);
          q = ia(b.substring(m, u(u(p) ? p < q : p) ? p : q));
          q = 0 < q.length ? q : null;
          m = m < K(b) ? b.substring(m, m + 1) : null;
          m = J.h("(", m) ? 'Inside `attr(\u2026)` write operator-first predicates joined with and/or: `xid(= "a" or = "b")`, `priority(>= 3 and <= 9)`.' : J.h(xm, X.g(h)) ? "Missing `)`" : J.h(Sm, X.g(h)) ? "Empty indented block \u2014 add a child or dedent." : u(q) ? ["Syntax error near `", q, "`"].join("") : "Syntax error";
        }
        return m;
      })()), Gj, uk))), bc(e, true)) : null : u((function() {
        var m = X.g(g);
        return Sq.g ? Sq.g(m) : Sq.call(null, m);
      })()) ? (bc(e, false), Bn(g) ? li(function(m) {
        return k(m, g);
      }, Jf.g(g)) : null) : Bn(g) ? li(function(m) {
        return k(m, g);
      }, Jf.g(g)) : null;
    })(a, null);
    return x(d);
  }
  function Yq(a, b, c) {
    a = D(Jf.g(a));
    var d = X.g(a);
    switch (d instanceof z ? d.M : null) {
      case "scalar":
        Zq.i ? Zq.i(a, b, c) : Zq.call(null, a, b, c);
        break;
      case "relation":
        $q.i ? $q.i(a, b, c) : $q.call(null, a, b, c);
        break;
      case "count-block":
        ar.i ? ar.i(a, b, c) : ar.call(null, a, b, c);
        break;
      case "agg-block":
        br.i ? br.i(a, b, c) : br.call(null, a, b, c);
    }
  }
  function cr(a) {
    return Nf(function(b) {
      return J.h(Tm, X.g(b));
    }, Jf.g(a));
  }
  function Zq(a, b, c) {
    var d = cr(a);
    if (C(d)) {
      var e = D(d);
      d = W.g(e);
      var f = Pf(b, new P(null, 2, 5, R, [fm, d], null)), g = Pf(b, new P(null, 2, 5, R, [Zi, d], null)), h = df(function(k) {
        var m = J.h(uk, X.g(k));
        return m ? (m = J.h(":", W.g(k))) ? k : m : m;
      }, Jf.g(a));
      return J.h("_args", d) ? bc(U.g(c), M.h(x(U.g(c)), Tq(e, "`_args` was removed \u2014 put args in parens on the root or relation line: `entity (\u2026)` / `-rel (\u2026)`. Parens may span multiple lines."))) : u(h) ? bc(U.g(c), M.h(x(U.g(c)), Tq(h, [
        "Unexpected `:` after '",
        w.g(d),
        "'. For relation aliases use `-",
        w.g(d),
        ":<relation>`. Scalar aliases are not supported."
      ].join("")))) : u(f) ? (a = Dn(a, Nk), u(a) ? dr.B ? dr.B(a, f, d, c) : dr.call(null, a, f, d, c) : null) : u(g) ? bc(U.g(c), M.h(x(U.g(c)), Tq(e, ["'", w.g(d), "' is a relation; prefix with '-' or '->' to select it"].join("")))) : bc(U.g(c), M.h(x(U.g(c)), Tq(e, ["Unknown attribute '", w.g(d), "' on ", w.g(Vq(b, Jk.g(c)))].join(""))));
    }
    return null;
  }
  function er(a) {
    return Kd(df(function(b) {
      return J.h(Hm, X.g(b));
    }, Jf.g(a)));
  }
  function fr(a, b) {
    var c = Dn(a, Rk);
    u(c) && (c = D(Ff(function(d) {
      return J.h(Tm, X.g(d));
    }, Jf.g(c))), a = D(cr(a)), u(u(c) ? u(a) ? J.h(W.g(c), W.g(a)) : a : c) && bc(U.g(b), M.h(x(U.g(b)), Uq(c, ["Redundant alias \u2014 '", w.g(W.g(c)), ":", w.g(W.g(a)), "' is the same as bare '", w.g(W.g(a)), "'"].join("")))));
  }
  function $q(a, b, c) {
    fr(a, c);
    var d = cr(a);
    if (C(d)) {
      d = D(d);
      var e = W.g(d), f = Pf(b, new P(null, 2, 5, R, [Zi, e], null)), g = Pf(b, new P(null, 2, 5, R, [fm, e], null));
      if (u(f)) if (b = Pf(Jk.g(c), new P(null, 2, 5, R, [Vl, cn.g(f)], null)), f = Dn(a, xm), a = Dn(a, Sm), u(u(f) ? b : f) && (gr.i ? gr.i(f, b, c) : gr.call(null, f, b, c)), null != a && er(a)) if (u(b)) for (a = C(Jf.g(a)), d = null, g = f = 0; ; ) if (g < f) e = d.H(null, g), J.h(Hm, X.g(e)) && Yq(e, b, c), g += 1;
      else if (a = C(a)) d = a, Gd(d) ? (a = Vb(d), f = Wb(d), d = a, e = K(a), a = f, f = e) : (e = D(d), J.h(Hm, X.g(e)) && Yq(e, b, c), a = G(d), d = null, f = 0), g = 0;
      else return null;
      else return null;
      else return bc(U.g(c), M.h(x(U.g(c)), Tq(d, ["Relation '", w.g(e), "' must have at least one child selection"].join(""))));
      else return u(g) ? bc(U.g(c), M.h(x(U.g(c)), Tq(d, ["'", w.g(e), "' is an attribute; drop the '-' prefix to select it"].join("")))) : bc(U.g(c), M.h(x(U.g(c)), Tq(d, ["Unknown relation '", w.g(e), "' on ", w.g(Vq(b, Jk.g(c)))].join(""))));
    } else return null;
  }
  function ar(a, b, c) {
    for (var d = C(Cn(a, sk)), e = null, f = 0, g = 0; ; ) if (g < f) {
      a = e.H(null, g);
      fr(a, c);
      var h = cr(a);
      if (C(h)) {
        h = D(h);
        var k = W.g(h), m = Pf(b, new P(null, 2, 5, R, [Zi, k], null));
        if (u(m)) {
          var p = Pf(Jk.g(c), new P(null, 2, 5, R, [Vl, cn.g(m)], null)), q = Dn(a, xm);
          u((function() {
            var A = q;
            return u(A) ? p : A;
          })()) && (gr.i ? gr.i(q, p, c) : gr.call(null, q, p, c));
        } else bc(U.g(c), M.h(x(U.g(c)), Tq(h, ["Unknown relation '", w.g(k), "' on ", w.g(Vq(b, Jk.g(c)))].join(""))));
      }
      g += 1;
    } else if (a = C(d)) {
      d = a;
      if (Gd(d)) e = Vb(d), d = Wb(d), a = e, f = K(e), e = a;
      else {
        a = D(d);
        fr(a, c);
        e = cr(a);
        if (C(e)) if (e = D(e), f = W.g(e), g = Pf(b, new P(null, 2, 5, R, [Zi, f], null)), u(g)) {
          var t = Pf(Jk.g(c), new P(null, 2, 5, R, [Vl, cn.g(g)], null)), v = Dn(a, xm);
          u((function() {
            var A = v;
            return u(A) ? t : A;
          })()) && (gr.i ? gr.i(v, t, c) : gr.call(null, v, t, c));
        } else bc(U.g(c), M.h(x(U.g(c)), Tq(e, ["Unknown relation '", w.g(f), "' on ", w.g(Vq(b, Jk.g(c)))].join(""))));
        d = G(d);
        e = null;
        f = 0;
      }
      g = 0;
    } else return null;
  }
  function br(a, b, c) {
    a = C(Cn(a, wl));
    for (var d = null, e = 0, f = 0; ; ) if (f < e) {
      var g = d.H(null, f);
      fr(g, c);
      var h = cr(g);
      if (C(h)) {
        var k = D(h), m = W.g(k), p = Pf(b, new P(null, 2, 5, R, [Zi, m], null));
        if (Ba(p)) bc(U.g(c), M.h(x(U.g(c)), Tq(k, ["Unknown relation '", w.g(m), "' on ", w.g(Vq(b, Jk.g(c)))].join(""))));
        else {
          var q = Pf(Jk.g(c), new P(null, 2, 5, R, [Vl, cn.g(p)], null));
          if (u(q)) for (var t = q, v = C(Cn(g, Hj)), A = null, E = 0, B = 0; ; ) if (B < E) {
            var I = A.H(null, B);
            I = D(Ff(/* @__PURE__ */ (function() {
              return function(ca) {
                return J.h(Tm, X.g(ca));
              };
            })(
              v,
              A,
              E,
              B,
              a,
              d,
              e,
              f,
              I,
              t,
              q,
              k,
              m,
              p,
              h,
              g
            ), Jf.g(I)));
            var Q = W.g(I), H = Pf(t, new P(null, 2, 5, R, [fm, Q], null));
            null == H ? bc(U.g(c), M.h(x(U.g(c)), Tq(I, ["Unknown attribute '", w.g(Q), "' on ", w.g(cn.g(p))].join("")))) : Xe("number", Z.g(H)) && bc(U.g(c), M.h(x(U.g(c)), Tq(I, ["_agg requires a numeric attribute; '", w.g(Q), "' is ", w.g(Z.g(H))].join(""))));
            B += 1;
          } else if (Q = C(v)) I = Q, Gd(I) ? (v = Vb(I), B = Wb(I), A = v, E = K(v), v = B) : (H = D(I), v = D(Ff(/* @__PURE__ */ (function() {
            return function(ca) {
              return J.h(Tm, X.g(ca));
            };
          })(v, A, E, B, a, d, e, f, H, I, Q, t, q, k, m, p, h, g), Jf.g(H))), A = W.g(v), E = Pf(t, new P(
            null,
            2,
            5,
            R,
            [fm, A],
            null
          )), null == E ? bc(U.g(c), M.h(x(U.g(c)), Tq(v, ["Unknown attribute '", w.g(A), "' on ", w.g(cn.g(p))].join("")))) : Xe("number", Z.g(E)) && bc(U.g(c), M.h(x(U.g(c)), Tq(v, ["_agg requires a numeric attribute; '", w.g(A), "' is ", w.g(Z.g(E))].join("")))), v = G(I), A = null, E = 0), B = 0;
          else break;
        }
      }
      f += 1;
    } else if (k = C(a)) {
      h = k;
      if (Gd(h)) a = Vb(h), f = Wb(h), d = a, e = K(a), a = f;
      else {
        g = D(h);
        fr(g, c);
        m = cr(g);
        if (C(m)) {
          if (p = D(m), q = W.g(p), t = Pf(b, new P(null, 2, 5, R, [Zi, q], null)), Ba(t)) bc(U.g(c), M.h(x(U.g(c)), Tq(p, [
            "Unknown relation '",
            w.g(q),
            "' on ",
            w.g(Vq(b, Jk.g(c)))
          ].join(""))));
          else if (v = Pf(Jk.g(c), new P(null, 2, 5, R, [Vl, cn.g(t)], null)), u(v)) for (A = v, E = C(Cn(g, Hj)), B = null, Q = I = 0; ; ) if (Q < I) {
            H = B.H(null, Q);
            H = D(Ff(/* @__PURE__ */ (function() {
              return function(ca) {
                return J.h(Tm, X.g(ca));
              };
            })(E, B, I, Q, a, d, e, f, H, A, v, p, q, t, m, g, h, k), Jf.g(H)));
            var O = W.g(H), S = Pf(A, new P(null, 2, 5, R, [fm, O], null));
            null == S ? bc(U.g(c), M.h(x(U.g(c)), Tq(H, ["Unknown attribute '", w.g(O), "' on ", w.g(cn.g(t))].join("")))) : Xe("number", Z.g(S)) && bc(U.g(c), M.h(x(U.g(c)), Tq(H, [
              "_agg requires a numeric attribute; '",
              w.g(O),
              "' is ",
              w.g(Z.g(S))
            ].join(""))));
            Q += 1;
          } else if (O = C(E)) H = O, Gd(H) ? (E = Vb(H), Q = Wb(H), B = E, I = K(E), E = Q) : (S = D(H), E = D(Ff(/* @__PURE__ */ (function() {
            return function(ca) {
              return J.h(Tm, X.g(ca));
            };
          })(E, B, I, Q, a, d, e, f, S, H, O, A, v, p, q, t, m, g, h, k), Jf.g(S))), B = W.g(E), I = Pf(A, new P(null, 2, 5, R, [fm, B], null)), null == I ? bc(U.g(c), M.h(x(U.g(c)), Tq(E, ["Unknown attribute '", w.g(B), "' on ", w.g(cn.g(t))].join("")))) : Xe("number", Z.g(I)) && bc(U.g(c), M.h(x(U.g(c)), Tq(E, ["_agg requires a numeric attribute; '", w.g(B), "' is ", w.g(Z.g(I))].join("")))), E = G(H), B = null, I = 0), Q = 0;
          else break;
        }
        a = G(h);
        d = null;
        e = 0;
      }
      f = 0;
    } else return null;
  }
  function hr(a, b, c) {
    for (var d = C(fn.g(a)), e = null, f = 0, g = 0; ; ) if (g < f) {
      var h = e.H(null, g);
      Md(fm.g(b), h) || bc(U.g(c), M.h(x(U.g(c)), Tq(a, ["Unknown order column '", w.g(h), "' on ", w.g(Vq(b, Jk.g(c)))].join(""))));
      g += 1;
    } else if (d = C(d)) e = d, Gd(e) ? (d = Vb(e), f = Wb(e), e = d, h = K(d), d = f, f = h) : (h = D(e), Md(fm.g(b), h) || bc(U.g(c), M.h(x(U.g(c)), Tq(a, ["Unknown order column '", w.g(h), "' on ", w.g(Vq(b, Jk.g(c)))].join("")))), d = G(e), e = null, f = 0), g = 0;
    else break;
  }
  function ir(a, b, c) {
    if (u((function() {
      if (u(b)) {
        var k = J.h;
        var m = null == a ? null : Jf.g(a);
        m = null == m ? null : D(m);
        m = null == m ? null : W.g(m);
        k = k.call(J, "_order_by", ho(m));
      } else k = b;
      return k;
    })())) {
      var d = D(Ff(function(k) {
        return J.h(jk, X.g(k));
      }, Jf.g(a)));
      if (u(d)) hr(d, b, c);
      else {
        d = C(Cn(a, tm));
        for (var e = null, f = 0, g = 0; ; ) if (g < f) {
          var h = e.H(null, g);
          h = D(Jf.g(h));
          J.h(Tm, X.g(h)) && !Md(fm.g(b), W.g(h)) && bc(U.g(c), M.h(x(U.g(c)), Tq(h, ["Unknown order column '", w.g(W.g(h)), "' on ", w.g(Vq(b, Jk.g(c)))].join(""))));
          g += 1;
        } else if (d = C(d)) Gd(d) ? (f = Vb(d), d = Wb(d), e = f, f = K(f)) : (h = D(d), h = D(Jf.g(h)), J.h(Tm, X.g(h)) && !Md(fm.g(b), W.g(h)) && bc(U.g(c), M.h(x(U.g(c)), Tq(h, ["Unknown order column '", w.g(W.g(h)), "' on ", w.g(Vq(b, Jk.g(c)))].join("")))), d = G(d), e = null, f = 0), g = 0;
        else break;
      }
    }
  }
  function gr(a, b, c) {
    a = Dn(a, ok);
    if (u(a)) {
      a = C(Cn(a, oj));
      for (var d = null, e = 0, f = 0; ; ) if (f < e) {
        var g = d.H(null, f);
        g = D(Jf.g(g));
        var h = X.g(g);
        switch (h instanceof z ? h.M : null) {
          case "or-expr":
            jr.i ? jr.i(g, b, c) : jr.call(null, g, b, c);
            break;
          case "meta-key":
            ir(g, b, c);
        }
        f += 1;
      } else if (a = C(a)) {
        if (Gd(a)) e = Vb(a), a = Wb(a), d = e, e = K(e);
        else {
          g = D(a);
          d = D(Jf.g(g));
          e = X.g(d);
          switch (e instanceof z ? e.M : null) {
            case "or-expr":
              jr.i ? jr.i(d, b, c) : jr.call(null, d, b, c);
              break;
            case "meta-key":
              ir(d, b, c);
          }
          a = G(a);
          d = null;
          e = 0;
        }
        f = 0;
      } else return null;
    } else return null;
  }
  var jr = function jr2(a, b, c) {
    a = C(Cn(a, lk));
    for (var e = null, f = 0, g = 0; ; ) if (g < f) {
      var h = e.H(null, g);
      h = C(Cn(h, Sj));
      for (var k = null, m = 0, p = 0; ; ) if (p < m) {
        var q = k.H(null, p);
        q = D(Jf.g(q));
        var t = X.g(q);
        switch (t instanceof z ? t.M : null) {
          case "arg-predicate":
            kr.i ? kr.i(q, b, c) : kr.call(null, q, b, c);
            break;
          case "grouped-expr":
            q = Dn(q, bk), u(q) && (jr2.i ? jr2.i(q, b, c) : jr2.call(null, q, b, c));
        }
        p += 1;
      } else if (h = C(h)) {
        if (Gd(h)) m = Vb(h), h = Wb(h), k = m, m = K(m);
        else {
          k = D(h);
          k = D(Jf.g(k));
          m = X.g(k);
          switch (m instanceof z ? m.M : null) {
            case "arg-predicate":
              kr.i ? kr.i(k, b, c) : kr.call(null, k, b, c);
              break;
            case "grouped-expr":
              k = Dn(k, bk), u(k) && (jr2.i ? jr2.i(k, b, c) : jr2.call(null, k, b, c));
          }
          h = G(h);
          k = null;
          m = 0;
        }
        p = 0;
      } else break;
      g += 1;
    } else if (a = C(a)) {
      if (Gd(a)) f = Vb(a), a = Wb(a), e = f, f = K(f);
      else {
        h = D(a);
        e = C(Cn(h, Sj));
        f = null;
        for (h = g = 0; ; ) if (h < g) {
          k = f.H(null, h);
          k = D(Jf.g(k));
          m = X.g(k);
          switch (m instanceof z ? m.M : null) {
            case "arg-predicate":
              kr.i ? kr.i(k, b, c) : kr.call(null, k, b, c);
              break;
            case "grouped-expr":
              k = Dn(k, bk), u(k) && (jr2.i ? jr2.i(k, b, c) : jr2.call(null, k, b, c));
          }
          h += 1;
        } else if (e = C(e)) {
          if (Gd(e)) g = Vb(e), e = Wb(e), f = g, g = K(g);
          else {
            f = D(e);
            f = D(Jf.g(f));
            g = X.g(f);
            switch (g instanceof z ? g.M : null) {
              case "arg-predicate":
                kr.i ? kr.i(f, b, c) : kr.call(null, f, b, c);
                break;
              case "grouped-expr":
                f = Dn(f, bk), u(f) && (jr2.i ? jr2.i(f, b, c) : jr2.call(null, f, b, c));
            }
            e = G(e);
            f = null;
            g = 0;
          }
          h = 0;
        } else break;
        a = G(a);
        e = null;
        f = 0;
      }
      g = 0;
    } else return null;
  };
  function kr(a, b, c) {
    var d = Dn(a, kk);
    a = Dn(a, Nk);
    if (u(d)) {
      d = Nf(function(v) {
        return J.h(Tm, X.g(v));
      }, Jf.g(d));
      for (var e = Jk.g(c), f = 0, g = null, h = null; ; ) {
        if (f >= K(d)) return u(u(a) ? g : a) ? dr.B ? dr.B(a, g, h, c) : dr.call(null, a, g, h, c) : null;
        var k = Yc(d, f), m = W.g(k), p = J.h(f, K(d) - 1), q = Pf(b, new P(null, 2, 5, R, [fm, m], null)), t = Pf(b, new P(null, 2, 5, R, [Zi, m], null));
        if (u(q)) if (p) g = q, h = m, f += 1;
        else return bc(U.g(c), M.h(x(U.g(c)), Tq(k, ["'", w.g(m), "' is an attribute \u2014 path cannot continue past a scalar"].join(""))));
        else if (u(t)) {
          b = Pf(
            e,
            new P(null, 2, 5, R, [Vl, cn.g(t)], null)
          );
          if (null == b) return null;
          if (p) return bc(U.g(c), M.h(x(U.g(c)), Tq(k, ["'", w.g(m), "' is a relation \u2014 path must terminate at an attribute"].join(""))));
          f += 1;
        } else return bc(U.g(c), M.h(x(U.g(c)), Tq(k, ["Unknown attribute/relation '", w.g(m), "' on ", w.g(Vq(b, e))].join(""))));
      }
    } else return null;
  }
  function lr(a) {
    var b = Jf.g(a), c = W.g(D(b)), d = (function() {
      var g = null == b ? null : jd(b);
      return null == g ? null : W.g(g);
    })(), e = Lf(W, b);
    if (J.h(new P(null, 2, 5, R, ["is", "null"], null), e)) return new P(null, 2, 5, R, ["is_null", "is_null"], null);
    if (J.h(new P(null, 3, 5, R, ["is", "not", "null"], null), e)) return new P(null, 2, 5, R, ["is_not_null", "is_not_null"], null);
    if (J.h("not", c) && J.h("in", d)) return new P(null, 2, 5, R, ["not_in", "_not_in"], null);
    if (J.h("in", c)) return new P(null, 2, 5, R, ["in", "_in"], null);
    if (J.h("ilike", c)) return new P(
      null,
      2,
      5,
      R,
      ["ilike", "_ilike"],
      null
    );
    if (J.h("like", c)) return new P(null, 2, 5, R, ["like", "_like"], null);
    a = Dn(a, Ti);
    if (u(a)) {
      var f = X.g(D(Jf.g(a)));
      return new P(null, 2, 5, R, ["binop", (function() {
        switch (f instanceof z ? f.M : null) {
          case "eq":
            return "_eq";
          case "neq":
            return "_neq";
          case "lt":
            return "_lt";
          case "le":
            return "_le";
          case "gt":
            return "_gt";
          case "ge":
            return "_ge";
          default:
            return null;
        }
      })()], null);
    }
    return new P(null, 2, 5, R, [null, null], null);
  }
  var mr = th("_ilike _like _in _le _gt is_not_null _neq is_null _eq _lt _not_in _ge".split(" "), "ilike;like;in;<=;>;is not null;!=;is null;=;<;not in;>=".split(";"));
  function nr(a, b, c, d) {
    var e = C(vf.h(function(B) {
      return nn(B, /-|\s/, "_");
    }, tk.g(b)));
    if (e) for (var f = C(Ge.h(Cn(a, Uk), (function() {
      var B = Dn(a, Si);
      return null == B ? null : Cn(B, Uk);
    })())), g = null, h = 0, k = 0; ; ) if (k < h) {
      var m = g.H(null, k), p = D(Jf.g(m)), q = u((function() {
        var B = X.g(p), I = new Ah(null, new r(null, 2, [Ri, null, Tm, null], null), null);
        return I.g ? I.g(B) : I.call(null, B);
      })()) ? Pq(m) : null;
      "string" === typeof q && Ba(df(Dh([q]), e)) && bc(U.g(d), M.h(x(U.g(d)), Tq(p, ["'", w.g(q), "' is not a value of enum '", w.g(c), "'", (function() {
        var B = df(/* @__PURE__ */ (function(I, Q, H, O, S, ca) {
          return function(ua) {
            return J.h(ua.toLowerCase(), ca.toLowerCase()) ? ua : null;
          };
        })(f, g, h, k, p, q, m, e, e), e);
        return u(B) ? [' \u2014 values are case-sensitive: "', w.g(B), '"'].join("") : [" (", on(", ", e), ")"].join("");
      })()].join(""))));
      k += 1;
    } else {
      var t = C(f);
      if (t) {
        var v = t;
        if (Gd(v)) {
          var A = Vb(v);
          b = Wb(v);
          var E = A;
          A = K(A);
          f = b;
          g = E;
          h = A;
        } else m = D(v), p = D(Jf.g(m)), q = u((function() {
          var B = X.g(p), I = new Ah(null, new r(null, 2, [Ri, null, Tm, null], null), null);
          return I.g ? I.g(B) : I.call(null, B);
        })()) ? Pq(m) : null, "string" === typeof q && Ba(df(
          Dh([q]),
          e
        )) && bc(U.g(d), M.h(x(U.g(d)), Tq(p, ["'", w.g(q), "' is not a value of enum '", w.g(c), "'", (function() {
          var B = df(/* @__PURE__ */ (function(I, Q, H, O, S, ca) {
            return function(ua) {
              return J.h(ua.toLowerCase(), ca.toLowerCase()) ? ua : null;
            };
          })(f, g, h, k, p, q, m, v, t, e, e), e);
          return u(B) ? [' \u2014 values are case-sensitive: "', w.g(B), '"'].join("") : [" (", on(", ", e), ")"].join("");
        })()].join("")))), f = G(v), g = null, h = 0;
        k = 0;
      } else break;
    }
  }
  function dr(a, b, c, d) {
    nr(a, b, c, d);
    var e = lr(a), f = N(e, 0, null);
    e = N(e, 1, null);
    if (u(e)) {
      if (u((function() {
        var h = new Ah(null, new r(null, 2, ["not_in", null, "in", null], null), null);
        return h.g ? h.g(f) : h.call(null, f);
      })())) {
        var g = Dn(a, Si);
        u(g) && 0 === K(Cn(g, Uk)) && bc(U.g(d), M.h(x(U.g(d)), Tq(g, ["Empty list for '", w.g(c), "' \u2014 ", nn(f, "_", " "), " () is invalid"].join(""))));
      }
      g = (function() {
        var h = Z.g(b);
        return Rq.g ? Rq.g(h) : Rq.call(null, h);
      })();
      return u(g) ? u(g.g ? g.g(e) : g.call(null, e)) ? null : bc(U.g(d), M.h(x(U.g(d)), Tq(a, [
        "Operator '",
        w.g(mr.h ? mr.h(e, e) : mr.call(null, e, e)),
        "' is not valid on ",
        w.g(Z.g(b)),
        " attribute '",
        w.g(c),
        "'"
      ].join("")))) : null;
    }
    return null;
  }
  var or = (function() {
    var a = pf(We), b = pf(We), c = pf(We), d = pf(We), e = xc(We, Gl, wi.v ? wi.v() : wi.call(null));
    return new Hi(yc.h("synthigy.xsql.lint", "op-lint-rules"), function(f) {
      return u(f) ? f : Ii;
    }, e, a, b, c, d);
  })();
  Ki(or, Ii, function() {
    return null;
  });
  function pr(a, b, c) {
    var d = Dn(a, Nk), e = Dn(a, jl), f = df(function(m) {
      return J.h(Tm, X.g(m)) ? m : null;
    }, Jf.g(a)), g = (function() {
      var m = W.g(f);
      return u(m) ? m : "field";
    })(), h = u(u(b) ? g : b) ? Pf(b, new P(null, 2, 5, R, [fm, g], null)) : null;
    if (u(d)) {
      e = lr(d);
      N(e, 0, null);
      var k = N(e, 1, null);
      u(u(k) ? Xe("_eq", k) : k) ? bc(U.g(c), M.h(x(U.g(c)), Tq(d, ["`get` only accepts `=` at the root for identity. `", w.g(mr.h ? mr.h(k, k) : mr.call(null, k, k)), "` on '", w.g(g), "' is not allowed."].join("")))) : u((function() {
        var m = J.h("_eq", k);
        return m ? u(h) ? (m = Ba(Fm.g(h))) ? df(function(p) {
          N(p, 0, null);
          p = N(p, 1, null);
          return Fm.g(p);
        }, fm.g(b)) : m : h : m;
      })()) && bc(U.g(c), M.h(x(U.g(c)), Tq(a, ["`get` requires identity on a unique-constrained attribute. '", w.g(g), "' is not unique."].join(""))));
    } else u(e) && (a = D(Jf.g(e)), a = Cn(a, aj), a = J.h(1, K(a)) ? Cn(D(a), Ij) : null, d = u(a) ? J.h(1, K(a)) : a, a = u(d) ? D(a) : null, a = u(a) ? Dn(a, Nk) : null, a = u(a) ? lr(a) : null, N(a, 0, null), a = N(a, 1, null), J.h("_eq", a) || bc(U.g(c), M.h(x(U.g(c)), Tq(e, [
      "`get` only accepts `=` at the root. Compound or non-`=` predicates on '",
      w.g(g),
      "' are not allowed."
    ].join("")))));
  }
  function qr(a, b, c) {
    a = u(u(c) ? a : c) ? Pf(c, new P(null, 2, 5, R, [fm, a], null)) : null;
    return u(u(b) ? a : b) ? (b = lr(b), N(b, 0, null), b = N(b, 1, null), (b = J.h("_eq", b)) ? (a = Fm.g(a), u(a) ? a : Ba(df(function(d) {
      N(d, 0, null);
      d = N(d, 1, null);
      return Fm.g(d);
    }, fm.g(c)))) : b) : null;
  }
  function rr(a, b) {
    return Kd((function() {
      var c = jm.g(a);
      return u(c) ? df(function(d) {
        if (J.h(ck, X.g(d))) {
          var e = Dn(d, kk);
          e = df(function(f) {
            return J.h(Tm, X.g(f)) ? f : null;
          }, Jf.g(e));
          return qr(null == e ? null : W.g(e), Dn(d, Nk), b);
        }
        return null;
      }, If(c)) : null;
    })());
  }
  function sr(a, b) {
    return Kd(df(function(c) {
      if (J.h(Hm, X.g(c))) {
        var d = D(Jf.g(c));
        if (J.h(ym, X.g(d)) && (c = Dn(d, Nk), d = df(function(e) {
          return J.h(Tm, X.g(e)) ? e : null;
        }, Jf.g(d)), d = null == d ? null : W.g(d), d = u(u(b) ? d : b) ? Pf(b, new P(null, 2, 5, R, [fm, d], null)) : null, u(u(c) ? d : c))) return c = lr(c), N(c, 0, null), c = N(c, 1, null), (c = J.h("_eq", c)) ? (c = Fm.g(d), u(c) ? c : Ba(df(function(e) {
          N(e, 0, null);
          e = N(e, 1, null);
          return Fm.g(e);
        }, fm.g(b)))) : c;
      }
      return null;
    }, Jf.g(a)));
  }
  Ki(or, "get", function(a, b, c) {
    a = sm.g(c);
    for (var d = C(Jf.g(b)), e = null, f = 0, g = 0; ; ) if (g < f) {
      var h = e.H(null, g), k = X.g(h);
      switch (k instanceof z ? k.M : null) {
        case "statement":
          h = D(Jf.g(h)), J.h(ym, X.g(h)) && pr(h, a, c);
      }
      g += 1;
    } else if (d = C(d)) {
      if (Gd(d)) f = Vb(d), d = Wb(d), e = f, f = K(f);
      else {
        e = D(d);
        f = X.g(e);
        switch (f instanceof z ? f.M : null) {
          case "statement":
            e = D(Jf.g(e)), J.h(ym, X.g(e)) && pr(e, a, c);
        }
        d = G(d);
        e = null;
        f = 0;
      }
      g = 0;
    } else break;
    u(u(a) ? C(Jf.g(b)) && !sr(b, a) && !rr(b, a) : a) ? (a = bc, d = U.g(c), e = M.h, f = x(U.g(c)), g = qd.u, b = Tq(b, '`get` requires identity. Add at least one root predicate like `xid = "\u2026"` on a unique-constrained attribute.'), c = K(Qk.h(c, "")), c = a(d, e.call(M, f, g.call(qd, b, T, 0, fd([Y, 1 > c ? 1 : c]))))) : c = null;
    return c;
  });
  var tr = new Ah(null, new r(null, 2, ["search-tree", null, "get-tree", null], null), null);
  function ur(a) {
    var b;
    if (b = J.h(ol, X.g(a))) b = J.h, a = D(Jf.g(a)), a = null == a ? null : W.g(a), b = b.call(J, "_on", ho(a));
    return b;
  }
  function vr(a) {
    a = jm.g(a);
    return u(a) ? Nf(ur, If(a)) : ld;
  }
  function wr(a) {
    return df(function(b) {
      return J.h(Tm, X.g(b)) ? b : null;
    }, F(Jf.g(a)));
  }
  function xr(a, b, c) {
    var d = sm.g(c);
    b = vr(b);
    if (yd(b)) {
      d = bc;
      b = U.g(c);
      var e = M.h, f = x(U.g(c));
      c = K(Qk.h(c, ""));
      return d(b, e.call(M, f, new r(null, 4, [Gj, uk, T, 0, Y, 1 > c ? 1 : c, kj, ["`", w.g(a), "` requires `on <relation>` in the root parens \u2014 the self-relation to recurse over."].join("")], null)));
    }
    return 1 < K(b) ? bc(U.g(c), M.h(x(U.g(c)), Tq(jd(b), "Only one `on` per tree op"))) : u(d) ? (a = D(b), b = wr(a), e = W.g(b), f = Pf(d, new P(null, 2, 5, R, [Zi, e], null)), d = Vq(d, Jk.g(c)), null == f ? bc(U.g(c), M.h(x(U.g(c)), Tq(u(b) ? b : a, [
      "Unknown relation '",
      w.g(e),
      "' on ",
      w.g(d)
    ].join("")))) : Xe(cn.g(f), d) ? bc(U.g(c), M.h(x(U.g(c)), Tq(u(b) ? b : a, ["`on ", w.g(e), "` must be a SELF-relation of ", w.g(d), " \u2014 it targets ", w.g(cn.g(f))].join("")))) : J.h("many", pj.g(f)) ? bc(U.g(c), M.h(x(U.g(c)), Tq(u(b) ? b : a, ["`on ", w.g(e), "` must be a tree (single-parent) relation \u2014 it is to-many"].join("")))) : null) : null;
  }
  function yr(a) {
    return Kd((function() {
      var b = jm.g(a);
      return u(b) ? df(function(c) {
        if (J.h(ck, X.g(c))) {
          var d = Dn(c, kk), e = df(function(f) {
            return J.h(Tm, X.g(f)) ? W.g(f) : null;
          }, Jf.g(d));
          c = Dn(c, Nk);
          d = (function() {
            var f = new Ah(null, new r(null, 2, ["xid", null, "euuid", null], null), null);
            return f.g ? f.g(e) : f.call(null, e);
          })();
          return u(d) ? u(c) ? J.h("_eq", jd(lr(c))) : c : d;
        }
        return null;
      }, If(b)) : null;
    })());
  }
  Ki(or, "search-tree", function(a, b, c) {
    return xr(a, b, c);
  });
  function zr(a) {
    a = Ff(function(d) {
      return J.h(ck, X.g(d));
    }, If(a));
    var b = J.h(1, K(a));
    if (b) {
      a = D(a);
      var c = df(function(d) {
        return J.h(Tm, X.g(d)) ? W.g(d) : null;
      }, Jf.g(Dn(a, kk)));
      a = Dn(a, Nk);
      b = (function() {
        var d = new Ah(null, new r(null, 2, ["xid", null, "euuid", null], null), null);
        return d.g ? d.g(c) : d.call(null, c);
      })();
      return u(b) ? u(a) ? J.h("_eq", jd(lr(a))) : a : b;
    }
    return b;
  }
  function Ar(a) {
    var b = D(Jf.g(a));
    if (a = J.h(ol, X.g(b))) a = J.h, b = null == b ? null : Jf.g(b), b = null == b ? null : D(b), b = null == b ? null : W.g(b), a = a.call(J, "_on", ho(b));
    return a;
  }
  function Br(a, b) {
    for (var c = C((function() {
      var p = jm.g(a), q = null == p ? null : If(p);
      return null == q ? null : Ff(/* @__PURE__ */ (function() {
        return function(t) {
          return J.h(oj, X.g(t));
        };
      })(p, q, "`get-tree` fixes its root by identity \u2014 only `xid = \u2026` and `on` belong in the root parens; filter relations instead"), q);
    })()), d = null, e = 0, f = 0; ; ) if (f < e) {
      var g = d.H(null, f);
      Ba((function() {
        var p = zr(g);
        return u(p) ? p : Ar(g);
      })()) && bc(U.g(b), M.h(x(U.g(b)), Tq(g, "`get-tree` fixes its root by identity \u2014 only `xid = \u2026` and `on` belong in the root parens; filter relations instead")));
      f += 1;
    } else if (c = C(c)) {
      d = c;
      if (Gd(d)) c = Vb(d), f = Wb(d), d = c, e = K(c), c = f;
      else {
        var h = D(d);
        Ba((function() {
          var p = zr(h);
          return u(p) ? p : Ar(h);
        })()) && bc(U.g(b), M.h(x(U.g(b)), Tq(h, "`get-tree` fixes its root by identity \u2014 only `xid = \u2026` and `on` belong in the root parens; filter relations instead")));
        c = G(d);
        d = null;
        e = 0;
      }
      f = 0;
    } else break;
    c = C(Jf.g(a));
    d = null;
    for (f = e = 0; ; ) if (f < e) {
      var k = d.H(null, f), m = D(Jf.g(k));
      u((function() {
        var p = J.h(Hm, X.g(k));
        return p ? (p = J.h(ym, X.g(m))) ? (p = Dn(m, Nk), u(p) ? p : Dn(m, jl)) : p : p;
      })()) && bc(U.g(b), M.h(
        x(U.g(b)),
        Tq(m, "`get-tree` ignores filters on root fields \u2014 filter relations instead")
      ));
      f += 1;
    } else if (c = C(c)) d = c, Gd(d) ? (c = Vb(d), f = Wb(d), d = c, e = K(c), c = f) : (k = D(d), m = D(Jf.g(k)), u((function() {
      var p = J.h(Hm, X.g(k));
      return p ? (p = J.h(ym, X.g(m))) ? (p = Dn(m, Nk), u(p) ? p : Dn(m, jl)) : p : p;
    })()) && bc(U.g(b), M.h(x(U.g(b)), Tq(m, "`get-tree` ignores filters on root fields \u2014 filter relations instead"))), c = G(d), d = null, e = 0), f = 0;
    else break;
  }
  Ki(or, "get-tree", function(a, b, c) {
    xr(a, b, c);
    Br(b, c);
    if (yr(b)) c = null;
    else {
      a = U.g(c);
      b = M.h;
      var d = x(U.g(c));
      c = K(Qk.h(c, ""));
      c = bc(a, b.call(M, d, new r(null, 4, [Gj, uk, T, 0, Y, 1 > c ? 1 : c, kj, "`get-tree` requires the tree root's identity in the root parens: `xid = \u2026`"], null)));
    }
    return c;
  });
  function Cr(a) {
    var b = sl.g(a);
    if (u(b)) {
      b = ia(b);
      b = ha(b, '"') && yn(b) && 1 < b.length ? b.substring(1, b.length - 1) : b;
      var c = Ye(Eh(fn.g(a)));
      b = Gf(tn, vf.h(sn, qn(b, /,/)));
      return yd(b) ? new P(null, 1, 5, R, [Tq(a, "An `:order` default must name at least one column")], null) : ng(nf(function(d) {
        var e = qn(d, /\s+/), f = C(e);
        e = D(f);
        var g = G(f);
        f = D(g);
        g = G(g);
        C(g) ? e = Tq(a, ['Malformed order spec "', w.g(d), '" in default'].join("")) : Ba(Rh(/[a-z_][a-z0-9_]*/, u(e) ? e : "")) ? e = Tq(a, ['Invalid order column "', w.g(e), '" in default'].join("")) : (u(f) ? (d = new Ah(null, new r(null, 2, ["desc", null, "asc", null], null), null), d = d.g ? d.g(f) : d.call(null, f), d = Ba(d)) : d = f, e = u(d) ? Tq(a, ['Invalid direction "', w.g(f), '" in default (asc|desc)'].join("")) : u(u(c) ? Ba(c.g ? c.g(e) : c.call(null, e)) : c) ? Tq(a, ['Default orders by "', w.g(e), '" \u2014 outside its restriction set (', on(", ", Qd(c)), ")"].join("")) : null);
        return e;
      }, b));
    }
    return null;
  }
  function Dr(a) {
    var b = tf(ld);
    (function f(d, e) {
      if (J.h(jk, X.g(d))) {
        var g = (function() {
          var m = en.g(d);
          return null == m ? null : m.toLowerCase();
        })(), h = (function() {
          var m = J.h("order", g);
          return m ? m : u(e) ? null == g : e;
        })();
        u(u(g) ? Xe("order", g) && !Md(wq, g) : g) ? b.ma(null, M.h(b.ka(null), Tq(d, ["Unknown parameter type `:", g, "`. Expected one of: ", on(", ", Qd(M.h(Eh(Kg(wq)), "order")))].join("")))) : J.h("order", g) && Ba(e) ? b.ma(null, M.h(b.ka(null), Tq(d, "The `:order` parameter type is only valid in `order by` position"))) : u(u(e) ? u(g) ? Xe(
          "order",
          g
        ) : g : e) ? b.ma(null, M.h(b.ka(null), Tq(d, ["An order-by parameter's type is inferred \u2014 drop `:", g, "` (or declare `:order`)"].join("")))) : u(h) && li(function(m) {
          return b.ma(null, M.h(b.ka(null), m));
        }, Cr(d));
        u((function() {
          var m = fn.g(d);
          return u(m) ? Ba(h) : m;
        })()) && b.ma(null, M.h(b.ka(null), Tq(d, "A restriction set `( \u2026 )` is only valid on order parameters")));
      }
      if (Bn(d)) {
        var k = (function() {
          var m = J.h(ol, X.g(d));
          if (m) {
            m = null == d ? null : Jf.g(d);
            m = null == m ? null : D(m);
            m = null == m ? null : W.g(m);
            var p = new Ah(null, new r(null, 2, [
              "_order_by",
              null,
              "order",
              null
            ], null), null);
            return p.g ? p.g(m) : p.call(null, m);
          }
          return m;
        })();
        return li(function(m) {
          return f(m, k);
        }, Jf.g(d));
      }
      return null;
    })(a, false);
    return x(b);
  }
  var Er = new r(null, 6, "_limit;limit;_offset;offset;_order_by;order by;_distinct;distinct;_join;join;_on;on".split(";"), null);
  function Fr(a) {
    var b = tf(ld);
    (function e(d) {
      if (J.h(ol, X.g(d))) {
        var f = (function() {
          var h = null == d ? null : Jf.g(d);
          return null == h ? null : D(h);
        })(), g = (function() {
          var h = W.g(f);
          return Er.g ? Er.g(h) : Er.call(null, h);
        })();
        u(g) && b.ma(null, M.h(b.ka(null), qd.i(Uq(f, ["`", w.g(W.g(f)), "` is the wire spelling \u2014 prefer `", w.g(g), "`"].join("")), Gj, Kk)));
      }
      return Bn(d) ? li(e, Jf.g(d)) : null;
    })(a);
    return x(b);
  }
  function Gr(a) {
    var b = D(Jf.g(a));
    if (J.h(ym, X.g(b))) {
      if (a = df(function(c) {
        return J.h(Tm, X.g(c)) ? c : null;
      }, Jf.g(b)), u(a)) return new P(null, 2, 5, R, [ym, a], null);
    } else if (u((function() {
      var c = X.g(b), d = new Ah(null, new r(null, 2, [sk, null, Pj, null], null), null);
      return d.g ? d.g(c) : d.call(null, c);
    })())) {
      if (u(df(function(c) {
        return J.h(Rk, X.g(c));
      }, Jf.g(b)))) return null;
      a = df(function(c) {
        return J.h(Tm, X.g(c)) ? c : null;
      }, Jf.g(b));
      if (u(a)) return new P(null, 2, 5, R, [Pj, a], null);
    }
    return null;
  }
  function Hr(a, b) {
    (function e(d) {
      if (Bn(d)) {
        var f = X.g(d);
        var g = new Ah(null, new r(null, 2, [Sm, null, Ck, null], null), null);
        f = g.g ? g.g(f) : g.call(null, f);
        if (u(f)) {
          f = tf(We);
          g = C(Jf.g(d));
          for (var h = null, k = 0, m = 0; ; ) if (m < k) {
            var p = h.H(null, m);
            if (J.h(Hm, X.g(p)) && (p = Gr(p), u(p))) {
              var q = p;
              p = N(q, 0, null);
              q = N(q, 1, null);
              var t = W.g(q), v = y(x(f), t);
              u(v) ? bc(U.g(b), M.h(x(U.g(b)), Uq(q, ["Duplicate ", ue(p), " '", w.g(t), "' at this scope (first listed at offset ", w.g(v), "). ", J.h(p, Pj) ? ["Add an alias (e.g. `-other:", w.g(t), "`) to project it again under a different key."].join("") : "XSQL has no scalar aliases; remove the duplicate."].join("")))) : f.ma(null, qd.i(f.ka(null), t, D(Zm.g(q))));
            }
            m += 1;
          } else if (g = C(g)) Gd(g) ? (k = Vb(g), g = Wb(g), h = k, k = K(k)) : (h = D(g), J.h(Hm, X.g(h)) && (h = Gr(h), u(h) && (k = h, h = N(k, 0, null), k = N(k, 1, null), m = W.g(k), p = y(x(f), m), u(p) ? bc(U.g(b), M.h(x(U.g(b)), Uq(k, ["Duplicate ", ue(h), " '", w.g(m), "' at this scope (first listed at offset ", w.g(p), "). ", J.h(h, Pj) ? ["Add an alias (e.g. `-other:", w.g(m), "`) to project it again under a different key."].join("") : "XSQL has no scalar aliases; remove the duplicate."].join("")))) : f.ma(null, qd.i(f.ka(null), m, D(Zm.g(k)))))), g = G(g), h = null, k = 0), m = 0;
          else break;
        }
        return li(e, Jf.g(d));
      }
      return null;
    })(a);
  }
  function Ir(a, b, c) {
    var d = Uo(a), e = Wi.g(d), f = null == e ? null : W.g(e);
    var g = u(f) ? f : null;
    f = jm.g(d);
    f = tf(ng(Ge.u(Xq(d, a), u(f) ? Xq(f, a) : null, fd([Dr(d), u(f) ? Dr(f) : null, Fr(d), u(f) ? Fr(f) : null]))));
    var h = u(u(b) ? g : b) ? Pf(b, new P(null, 2, 5, R, [Vl, g], null)) : null;
    a = new r(null, 4, [Qk, a, Jk, b, sm, h, U, f], null);
    u(u(b) ? u(e) ? Ba(h) : e : b) && f.ma(null, M.h(f.ka(null), Tq(e, ["Unknown entity '", w.g(g), "' \u2014 not found in the deployed model."].join(""))));
    if (u(h)) {
      b = jm.g(d);
      u(b) && gr(b, h, a);
      b = C(Jf.g(d));
      e = null;
      for (var k = g = 0; ; ) if (k < g) {
        var m = e.H(null, k), p = X.g(m);
        switch (p instanceof z ? p.M : null) {
          case "statement":
            Yq(m, h, a);
        }
        k += 1;
      } else if (b = C(b)) {
        if (Gd(b)) g = Vb(b), b = Wb(b), e = g, g = K(g);
        else {
          e = D(b);
          g = X.g(e);
          switch (g instanceof z ? g.M : null) {
            case "statement":
              Yq(e, h, a);
          }
          b = G(b);
          e = null;
          g = 0;
        }
        k = 0;
      } else break;
    }
    Hr(d, a);
    h = Kf.i(Ch, vf.g(Zm), vr(d));
    b = Ge.h(Ff(ur, If(d)), vr(d));
    b = C(b);
    e = null;
    for (m = k = 0; ; ) if (m < k) g = e.H(null, m), Md(h, Zm.g(g)) ? u(u(c) ? Ba(tr.g ? tr.g(c) : tr.call(null, c)) : c) && bc(U.g(a), M.h(x(U.g(a)), Tq(g, [
      "`on` is only valid on @search-tree / @get-tree \u2014 not @",
      w.g(c)
    ].join("")))) : bc(U.g(a), M.h(x(U.g(a)), Tq(g, "`on` belongs in the ROOT parens \u2014 it names the relation a tree op recurses over"))), m += 1;
    else if (b = C(b)) e = b, Gd(e) ? (b = Vb(e), k = Wb(e), e = b, g = K(b), b = k, k = g) : (g = D(e), Md(h, Zm.g(g)) ? u(u(c) ? Ba(tr.g ? tr.g(c) : tr.call(null, c)) : c) && bc(U.g(a), M.h(x(U.g(a)), Tq(g, ["`on` is only valid on @search-tree / @get-tree \u2014 not @", w.g(c)].join("")))) : bc(U.g(a), M.h(x(U.g(a)), Tq(g, "`on` belongs in the ROOT parens \u2014 it names the relation a tree op recurses over"))), b = G(e), e = null, k = 0), m = 0;
    else break;
    or.i(c, d, a);
    return x(f);
  }
  ;
  var Jr = new P(null, 5, 5, R, ["limit", "offset", "order by", "distinct", "join"], null), Kr = new P(null, 4, 5, R, ["avg", "sum", "min", "max"], null), Lr = new r(null, 5, ["string", new P(null, 12, 5, R, "=;!=;<;<=;>;>=;like;ilike;in;not in;is;is not null".split(";"), null), "number", new P(null, 9, 5, R, "=;!=;<;<=;>;>=;in;not in;is".split(";"), null), "boolean", new P(null, 3, 5, R, ["=", "!=", "is"], null), "timestamp", new P(
    null,
    9,
    5,
    R,
    "=;!=;<;<=;>;>=;in;not in;is".split(";"),
    null
  ), "enum", new P(null, 5, 5, R, ["=", "!=", "in", "not in", "is"], null)], null);
  function Mr(a, b) {
    return 0 <= b && b < K(a) ? a.substring(b, b + 1) : null;
  }
  function Nr(a) {
    return J.h(" ", a) || J.h("	", a);
  }
  function Or(a) {
    return u(a) ? Rh(/[A-Za-z0-9_]/, a) : a;
  }
  function Pr(a) {
    return u(a) ? Rh(/[A-Za-z_]/, a) : a;
  }
  function Qr(a, b) {
    for (--b; ; ) {
      if (0 > b) return null;
      var c = Mr(a, b);
      if (J.h(c, " ") || J.h(c, "	") || J.h(c, "\n")) --b;
      else return Mr(a, b);
    }
  }
  function Rr(a, b) {
    if (J.h(":", Mr(a, b - 1))) a: for (b -= 2; ; ) if (u(Or(Mr(a, b)))) --b;
    else {
      b += 1;
      break a;
    }
    return 2 <= b && J.h(">", Mr(a, b - 1)) && J.h("-", Mr(a, b - 2)) ? qm : 1 <= b && J.h("-", Mr(a, b - 1)) ? qj : null;
  }
  function Sr(a, b) {
    K(a);
    for (var c = b - 1; ; ) {
      if (0 > c) return null;
      if (Nr(Mr(a, c))) --c;
      else for (b = c + 1; ; ) {
        var d = (d = 0 <= c) ? Pr(Mr(a, c)) : d;
        if (u(d)) --c;
        else return c += 1, c < b ? a.substring(c, b) : null;
      }
    }
  }
  function Tr(a, b) {
    for (--b; ; ) {
      if (0 > b) return 0;
      if (Nr(Mr(a, b))) --b;
      else for (; ; ) {
        var c = (c = 0 <= b) ? Pr(Mr(a, b)) : c;
        if (u(c)) --b;
        else return b + 1;
      }
    }
  }
  function Ur(a, b) {
    for (var c = b - 1; ; ) {
      if (0 > c) return null;
      if (Nr(Mr(a, c))) --c;
      else for (b = c + 1; ; ) {
        var d = (d = 0 <= c) ? Pr(Mr(a, c)) : d;
        if (u(d)) --c;
        else return c += 1, c < b ? a.substring(c, b) : null;
      }
    }
  }
  function Vr(a, b) {
    a: for (; ; ) if (0 < b && Xe("\n", Mr(a, b - 1))) --b;
    else break a;
    for (var c = K(a), d = b; ; ) if (d < c && Nr(Mr(a, d))) d += 1;
    else return d - b;
  }
  function Wr(a, b) {
    for (; ; ) if (0 < b && Xe("\n", Mr(a, b - 1))) --b;
    else return b;
  }
  function Xr(a, b) {
    var c = K(a), d = (function() {
      for (var f = b; ; ) {
        var g = (g = 0 < f) ? Or(Mr(a, f - 1)) : g;
        if (u(g)) --f;
        else return f;
      }
    })(), e = (function() {
      for (var f = b; ; ) {
        var g = (g = f < c) ? Or(Mr(a, f)) : g;
        if (u(g)) f += 1;
        else return f;
      }
    })();
    return new r(null, 2, [T, d, Y, e], null);
  }
  function Yr(a, b) {
    var c = Zm.g(a);
    a = N(c, 0, null);
    c = N(c, 1, null);
    return b >= a && b <= c;
  }
  function Zr(a, b, c) {
    function d(f, g) {
      for (var h = f, k = g; ; ) if (f = (function() {
        var m = Bn(h);
        return m ? Ka(/* @__PURE__ */ (function() {
          return function(p, q) {
            if (Yr(q, b)) {
              var t = Zm.g(q), v = N(t, 0, null);
              t = N(t, 1, null);
              t = J.h(v, t);
              return null == p ? q : t ? p : v > D(Zm.g(p)) ? q : p;
            }
            return p;
          };
        })(h, k, m), null, Jf.g(h)) : m;
      })(), u(f)) g = M.h(k, h), h = f, k = g;
      else return new P(null, 2, 5, R, [h, k], null);
    }
    var e = jm.g(a);
    return u((function() {
      if (u(e)) {
        var f = Zm.g(e), g = N(f, 0, null);
        f = N(f, 1, null);
        var h = J.h(")", Mr(c, f - 1));
        return b > g && (!h || b < f);
      }
      return e;
    })()) ? d(e, new P(null, 1, 5, R, [a], null)) : d(a, ld);
  }
  function $r(a, b, c) {
    a = J.h(c, X.g(a)) ? a : null;
    return u(a) ? a : df(function(d) {
      return J.h(c, X.g(d)) ? d : null;
    }, oe(b));
  }
  function as(a) {
    var b = pf(false);
    return df(function(c) {
      return J.h(Rk, X.g(c)) ? (qf(b, true), null) : J.h(Tm, X.g(c)) ? W.g(c) : null;
    }, Jf.g(a));
  }
  function bs(a, b, c) {
    var d = tf(ld), e = new Ah(null, new r(null, 3, [wl, null, sk, null, Pj, null], null), null);
    (function h(g) {
      if (Bn(g)) {
        var k = X.g(g);
        k = e.g ? e.g(k) : e.call(null, k);
        k = u(k) ? D(Zm.g(g)) < c : k;
        if (u(k)) {
          k = d.ma;
          var m = M.h, p = d.ka(null), q = as(g);
          var t = D(Zm.g(g));
          t = Vr(b, t);
          k.call(d, null, m.call(M, p, new r(null, 5, [Ml, q, im, t, T, D(Zm.g(g)), vj, X.g(g), X, g], null)));
        }
        return li(h, Jf.g(g));
      }
      return null;
    })(a);
    return x(d);
  }
  function cs(a, b, c, d, e, f) {
    var g = Pf(e, new P(null, 2, 5, R, [Vl, f], null));
    if (u(g)) for (var h = bs(a, b, c), k = (function() {
      for (var p = 0, q = ld; ; ) {
        if (p >= K(h)) return q;
        var t = Yc(h, p), v;
        a: for (v = p - 1; ; ) {
          if (0 > v) {
            v = null;
            break a;
          }
          var A = Yc(h, v);
          A = (A = im.g(A) < im.g(t)) ? Yc(q, v) : A;
          if (u(A)) {
            v = Yc(q, v);
            break a;
          }
          --v;
        }
        t = Pf(u(v) ? v : g, new P(null, 2, 5, R, [Zi, Ml.g(t)], null));
        t = u(t) ? Pf(e, new P(null, 2, 5, R, [Vl, cn.g(t)], null)) : null;
        p += 1;
        q = M.h(q, t);
      }
    })(), m = K(h) - 1; ; ) {
      if (0 > m) return null;
      if (u((function() {
        var p = im.g(Yc(h, m)) < d;
        return p ? Yc(k, m) : p;
      })())) return Yc(
        k,
        m
      );
      --m;
    }
    else return null;
  }
  function ds(a, b, c, d, e, f) {
    if (u(Pf(e, new P(null, 2, 5, R, [Vl, f], null)))) for (a = bs(a, b, c), b = K(a) - 1; ; ) {
      if (0 > b) return null;
      if (im.g(Yc(a, b)) < d) return vj.g(Yc(a, b));
      --b;
    }
    else return null;
  }
  function es(a, b, c) {
    if (u(b)) {
      a = Nf(function(g) {
        return J.h(Tm, X.g(g));
      }, Jf.g(a));
      for (var d = 0, e = b; ; ) {
        if (d >= K(a)) return null;
        var f = W.g(Yc(a, d));
        b = Pf(e, new P(null, 2, 5, R, [fm, f], null));
        e = Pf(e, new P(null, 2, 5, R, [Zi, f], null));
        if (J.h(d, K(a) - 1)) return b;
        if (u(e)) if (b = Pf(c, new P(null, 2, 5, R, [Vl, cn.g(e)], null)), u(b)) d += 1, e = b;
        else return null;
        else return null;
      }
    } else return null;
  }
  function fs(a, b, c, d) {
    if (u(u(c) ? d : c)) {
      a: for (; ; ) {
        b = 0 < b && J.h(".", Mr(a, b - 1)) ? b - 1 : b;
        break a;
      }
      a: for (var e = ld; ; ) {
        var f = Mr(a, b - 1);
        var g = (g = 0 < b) ? Rh(/[A-Za-z0-9_.]/, f) : g;
        if (u(g)) --b, e = ed(f, e);
        else break a;
      }
      a = Qe(w, e);
      for (a = Ff(C, qn(a, /\./)); ; ) {
        if (yd(a)) return c;
        b = D(a);
        c = Pf(c, new P(null, 2, 5, R, [Zi, b], null));
        c = u(c) ? Pf(d, new P(null, 2, 5, R, [Vl, cn.g(c)], null)) : null;
        if (u(c)) a = F(a);
        else return null;
      }
    } else return null;
  }
  function gs(a, b) {
    return u(a) ? (a = Dn(a, im), u(a) ? Vr(b, D(Zm.g(a))) : null) : null;
  }
  function hs(a, b) {
    a = Dn(a, im);
    return u(a) ? Vr(b, D(Zm.g(a))) : null;
  }
  function is(a, b, c, d, e) {
    var f = Vr(c, b);
    return Ka(function(g, h) {
      if (u((function() {
        var E = X.g(h), B = new Ah(null, new r(null, 2, [sk, null, Pj, null], null), null);
        return B.g ? B.g(E) : B.call(null, E);
      })())) {
        var k = as(h), m = wd(g);
        k = Pf(m, new P(null, 2, 5, R, [Zi, k], null));
        var p = u(k) ? Pf(d, new P(null, 2, 5, R, [Vl, cn.g(k)], null)) : null;
        k = Dn(h, Sm);
        m = Dn(h, xm);
        var q = u(k) ? Yr(k, b) : k, t = u(m) ? Yr(m, b) : m, v = gs(k, c);
        return u((function() {
          var E = p;
          return u(E) ? (E = u(q) ? q : t, u(E) ? Ba(u(q) ? u(v) ? f < v : v : q) : E) : E;
        })()) ? M.h(g, p) : g;
      }
      if (J.h(wl, X.g(h))) {
        k = as(h);
        m = wd(g);
        k = Pf(m, new P(null, 2, 5, R, [Zi, k], null));
        p = u(k) ? Pf(d, new P(null, 2, 5, R, [Vl, cn.g(k)], null)) : null;
        k = Dn(h, im);
        var A = u(k) ? b > D(Zm.g(k)) : k;
        v = hs(h, c);
        return u((function() {
          var E = p;
          return u(E) ? u(A) ? Ba(u(v) ? f < v : v) : A : E;
        })()) ? M.h(g, p) : g;
      }
      return g;
    }, e, a);
  }
  function js(a, b, c, d) {
    var e = $r(a, b, Nk);
    if (u((function() {
      return u(e) ? df(function(g) {
        return J.h(Ti, X.g(g));
      }, Jf.g(e)) : e;
    })())) {
      var f = (function() {
        var g = $r(a, b, ck);
        return u(g) ? (g = Dn(g, kk), u(g) ? es(g, c, d) : null) : null;
      })();
      if (u(f)) return f;
      f = $r(a, b, ym);
      if (u(f)) return f = df(function(g) {
        return J.h(Tm, X.g(g)) ? g : null;
      }, Jf.g(f)), u(f) ? Pf(c, new P(null, 2, 5, R, [fm, W.g(f)], null)) : null;
    }
    return null;
  }
  function ks(a, b, c, d) {
    var e = Vr(c, d);
    b = kd(Ff(function(f) {
      f = gs(f, c);
      return u(f) ? f <= e : null;
    }, Ff(function(f) {
      return J.h(Sm, X.g(f));
    }, b)));
    return u(b) ? b : a;
  }
  function ls(a, b, c) {
    function d(m) {
      var p = Zm.g(m);
      m = N(p, 0, null);
      p = N(p, 1, null);
      return c >= m && c < p && !k;
    }
    var e = tf(Ch), f = tf(Ch), g = Wr(b, c), h = (function() {
      for (var m = g; ; ) if (m < K(b) && Xe("\n", Mr(b, m))) m += 1;
      else return m;
    })(), k = tn(b.substring(g, h));
    li(function(m) {
      if (u(d(m))) return null;
      m = C(Jf.g(m));
      for (var p = null, q = 0, t = 0; ; ) if (t < q) {
        var v = p.H(null, t);
        if (J.h(ym, X.g(v))) {
          var A = df(/* @__PURE__ */ (function() {
            return function(B) {
              return J.h(Tm, X.g(B)) ? B : null;
            };
          })(m, p, q, t, v, e, f, g, h, k), Jf.g(v));
          u(A) && e.ma(null, M.h(e.ka(null), W.g(A)));
        } else u((function() {
          var B = X.g(v), I = new Ah(null, new r(null, 2, [sk, null, Pj, null], null), null);
          return I.g ? I.g(B) : I.call(null, B);
        })()) && !u(df(/* @__PURE__ */ (function() {
          return function(B) {
            return J.h(Rk, X.g(B));
          };
        })(m, p, q, t, v, e, f, g, h, k), Jf.g(v))) && (A = df(/* @__PURE__ */ (function() {
          return function(B) {
            return J.h(Tm, X.g(B)) ? B : null;
          };
        })(m, p, q, t, v, e, f, g, h, k), Jf.g(v)), u(A) && f.ma(null, M.h(f.ka(null), W.g(A))));
        t += 1;
      } else {
        var E = C(m);
        if (E) A = E, Gd(A) ? (m = Vb(A), q = Wb(A), p = m, A = K(m), m = q, q = A) : (v = D(A), J.h(ym, X.g(v)) ? (m = df(/* @__PURE__ */ (function() {
          return function(B) {
            return J.h(Tm, X.g(B)) ? B : null;
          };
        })(
          m,
          p,
          q,
          t,
          v,
          A,
          E,
          e,
          f,
          g,
          h,
          k
        ), Jf.g(v)), u(m) && e.ma(null, M.h(e.ka(null), W.g(m)))) : u((function() {
          var B = X.g(v), I = new Ah(null, new r(null, 2, [sk, null, Pj, null], null), null);
          return I.g ? I.g(B) : I.call(null, B);
        })()) && !u(df(/* @__PURE__ */ (function() {
          return function(B) {
            return J.h(Rk, X.g(B));
          };
        })(m, p, q, t, v, A, E, e, f, g, h, k), Jf.g(v))) && (m = df(/* @__PURE__ */ (function() {
          return function(B) {
            return J.h(Tm, X.g(B)) ? B : null;
          };
        })(m, p, q, t, v, A, E, e, f, g, h, k), Jf.g(v)), u(m) && f.ma(null, M.h(f.ka(null), W.g(m)))), m = G(A), p = null, q = 0), t = 0;
        else return null;
      }
    }, Ff(
      function(m) {
        return J.h(Hm, X.g(m));
      },
      Jf.g(a)
    ));
    return new r(null, 2, [Xm, x(e), om, x(f)], null);
  }
  function ms(a, b, c) {
    return Kf.i(Ch, mf(function(d) {
      var e = Zm.g(d), f = N(e, 0, null);
      e = N(e, 1, null);
      return !J.h(b, X.g(d)) || c >= f && c < e || !Ba(df(function(g) {
        return J.h(Rk, X.g(g));
      }, Jf.g(d))) ? null : df(function(g) {
        return J.h(Tm, X.g(g)) ? W.g(g) : null;
      }, Jf.g(d));
    }), Jf.g(a));
  }
  function ns(a, b) {
    return Kf.i(Ch, mf(function(c) {
      var d = Zm.g(c), e = N(d, 0, null);
      d = N(d, 1, null);
      return !J.h(Hj, X.g(c)) || b >= e && b < d ? null : df(function(f) {
        return J.h(Tm, X.g(f)) ? W.g(f) : null;
      }, Jf.g(c));
    }), Jf.g(a));
  }
  function os(a) {
    return Kf.i(Ch, mf(function(b) {
      return J.h(Lm, X.g(b)) ? df(function(c) {
        return J.h(Tm, X.g(c)) ? W.g(c) : null;
      }, Jf.g(b)) : null;
    }), Jf.g(a));
  }
  function ps(a, b) {
    for (var c = 0, d = 0; ; ) {
      if (c >= b) return d;
      var e = Mr(a, c);
      c += 1;
      J.h(e, "(") ? d += 1 : J.h(e, ")") && (--d, d = 0 > d ? 0 : d);
    }
  }
  function qs(a, b) {
    for (var c = 0, d = ld; ; ) {
      if (c >= b) return wd(d);
      var e = Mr(a, c), f = c + 1;
      d = J.h(e, "(") ? M.h(d, c) : J.h(e, ")") ? C(d) ? xd(d) : d : d;
      c = f;
    }
  }
  var rs = /^\s*(?:_order_by|order\s+by)(?=\s|$)/, ss = /^\s*[A-Za-z_][A-Za-z0-9_]*(?:\s+(?:asc|desc))?\s*$/;
  function ts(a, b) {
    var c = u(a) ? a : "";
    a = (function() {
      var h = qs(c, b);
      return u(h) ? h + 1 : 0;
    })();
    var d = ng(rn(c.substring(a, b), /,/, -1));
    a = wd(d);
    var e = Sh(rs, a);
    if ((function() {
      var h = null != e;
      if (h) return h;
      for (h = K(d) - 2; ; ) {
        if (0 > h) return false;
        if (u(Sh(rs, Yc(d, h)))) return true;
        if (u(Rh(ss, Yc(d, h)))) --h;
        else return false;
      }
    })()) {
      a = u(e) ? ke(a, K(e)) : a;
      var f = Kf.i(ld, Ef(ff(tn)), qn(a, /\s+/)), g = Kd(Sh(/\s$/, a));
      return xn(w.g(D(f)), "?") ? null : u((function() {
        var h = yd(f);
        return h ? u(e) ? !g : e : h;
      })()) ? null : yd(f) ? vl : J.h(1, K(f)) ? g ? cl : vl : J.h(2, K(f)) && !g ? cl : null;
    }
    return null;
  }
  function us(a) {
    var b = null == Dn(a, ol);
    if (b) {
      a: for (; ; ) if (b = C(Jf.g(a))) a = kd(b);
      else break a;
      b = X.g(a);
      var c = new Ah(null, new r(null, 3, [jk, null, jj, null, Ri, null], null), null);
      b = c.g ? c.g(b) : c.call(null, b);
      if (u(b)) return b;
      a = W.g(a);
      b = new Ah(null, new r(null, 3, ["null", null, "false", null, "true", null], null), null);
      return b.g ? b.g(a) : b.call(null, a);
    }
    return b;
  }
  function vs(a, b) {
    b = le(a, Wr(a, b), b);
    a = Sh(/([A-Za-z_][A-Za-z0-9_]*)\s*(?:!=|=)\s*("[^"]*|[A-Za-z0-9_]*)$/, b);
    b = Sh(/([A-Za-z_][A-Za-z0-9_]*)\s+(?:not\s+)?in\s*\(((?:\s*(?:"[^"]*"|[^\s,()"]+)\s*,)*)\s*("[^"]*|[A-Za-z0-9_]*)$/, b);
    return u(a) ? new r(null, 2, [vl, Yc(a, 1), ek, xn(Yc(a, 2), '"')], null) : u(b) ? new r(null, 3, [vl, Yc(b, 1), ek, xn(Yc(b, 3), '"'), Ik, Kf.i(Ch, vf.g(jd), Uh(/"([^"]*)"/, Yc(b, 2)))], null) : null;
  }
  function ws(a, b, c, d, e, f, g) {
    var h = u(u(f) ? u(g) ? Pf(f, new P(null, 2, 5, R, [Vl, g], null)) : g : f) ? M.h(ld, Pf(f, new P(null, 2, 5, R, [Vl, g], null))) : ld;
    h = is(c, e, d, f, h);
    var k = wd(h), m = Sr(d, e), p = Qr(d, e), q = T.g(Xr(d, e)), t = Rr(d, q), v = ks(a, c, d, e);
    v = ls(v, d, e);
    var A = js(b, c, k, f), E = (function() {
      var V = J.h(Ri, X.g(b));
      return V ? (V = J.h(e, jd(Zm.g(b)))) ? (V = W.g(b), 1 < K(V) && J.h('"', ke(V, K(V) - 1))) : V : V;
    })(), B = ts(d, e), I = vs(d, e), Q = u(I) ? Pf(k, new P(null, 2, 5, R, [fm, vl.g(I)], null)) : null;
    if (J.h(vl, B)) return new r(null, 2, [vj, zk, wm, h], null);
    if (J.h(cl, B)) return new r(
      null,
      2,
      [vj, Ql, wm, h],
      null
    );
    if (u(Q)) return new r(null, 5, [vj, dm, wm, h, Al, Q, ek, ek.g(I), Ik, Ik.g(I)], null);
    if (u(u(A) ? !E : A)) return new r(null, 3, [vj, dm, wm, h, Al, A], null);
    if (E) return new r(null, 2, [vj, zl, wm, h], null);
    if (J.h(m, "is")) return new r(null, 2, [vj, Dj, wm, h], null);
    if (J.h(m, "not")) return q = Ur(d, Tr(d, e)), J.h(q, "is") ? new r(null, 2, [vj, bn, wm, h], null) : new r(null, 2, [vj, Xi, wm, h], null);
    if (J.h(m, "like") || J.h(m, "ilike")) return new r(null, 2, [vj, xj, wm, h], null);
    if (J.h(m, "in")) return new r(null, 2, [vj, Bj, wm, h], null);
    if (u((function() {
      var V = new Ah(null, new r(null, 2, ["on", null, "_on", null], null), null);
      return V.g ? V.g(m) : V.call(null, m);
    })())) return new r(null, 2, [vj, Xk, wm, h], null);
    var H = $r(b, c, xm);
    A = Kd(u(H) ? H : $r(b, c, ok));
    var O = $r(b, c, ck), S = (function() {
      var V = u(O) ? Dn(O, kk) : O;
      return u(V) ? V : $r(b, c, kk);
    })();
    E = u((function() {
      if (u(S)) {
        var V = e >= jd(Zm.g(S));
        return V ? k : V;
      }
      return S;
    })()) ? es(S, k, f) : null;
    B = J.h(p, ".") ? fs(d, e, k, f) : null;
    I = (function() {
      var V = (function() {
        for (var oa = e - 1; ; ) if (0 <= oa && Nr(Mr(d, oa))) --oa;
        else return oa;
      })();
      if (u((function() {
        var oa = V < e - 1;
        return oa ? (oa = 0 <= V) ? Or(Mr(d, V)) : oa : oa;
      })())) {
        var da = V + 1, Ra = (function() {
          for (var oa = V; ; ) {
            var Va = (Va = 0 <= oa) ? Or(Mr(d, oa)) : Va;
            if (u(Va)) --oa;
            else return oa + 1;
          }
        })();
        return Pf(k, new P(null, 2, 5, R, [fm, d.substring(Ra, da)], null));
      }
      return null;
    })();
    Q = A && Xe(p, "(") && Xe(p, ",") ? (function() {
      var V = (function() {
        var Ra = $r(b, c, ok);
        return u(Ra) ? Ra : null == H ? null : Dn(H, ok);
      })();
      if (u(V)) {
        var da = tf(ld);
        (function Va(oa) {
          return Cd(oa) ? (J.h(ck, X.g(oa)) && da.ma(null, M.h(da.ka(null), oa)), li(Va, Jf.g(oa))) : null;
        })(V);
        return kd(Ff(function(oa) {
          oa = jd(Zm.g(oa));
          var Va;
          if (Va = oa <= e) Va = K(d), Va = tn(d.substring(oa, e < Va ? e : Va));
          return Va;
        }, x(da)));
      }
      return null;
    })() : null;
    if (A) return J.h(m, "asc") || J.h(m, "desc") ? new r(null, 2, [vj, Nm, wm, h], null) : J.h(p, "(") || J.h(p, ",") ? new r(null, 2, [vj, Nm, wm, h], null) : u(E) ? new r(null, 3, [vj, Ek, wm, h, Al, E], null) : u(B) ? new r(null, 3, [vj, hj, wm, h, Jm, B], null) : u(u(Q) ? us(Q) : Q) ? new r(null, 2, [vj, zl, wm, h], null) : new r(null, 2, [vj, Nm, wm, h], null);
    if (u((function() {
      var V = 0 < ps(d, e);
      if (V) {
        a: for (V = e - 1; ; ) {
          if (0 > V) {
            V = d.substring(0, e);
            break a;
          }
          var da = Mr(d, V);
          if (J.h(
            da,
            ","
          ) || J.h(da, "(")) {
            V = d.substring(V + 1, e);
            break a;
          }
          --V;
        }
        V = ia(V);
        return (da = C(V)) ? (da = !ha(V, "_")) ? Sh(/(\d|"|\bnull|\btrue|\bfalse)$/, V) : da : da;
      }
      return V;
    })()) || u((function() {
      var V = $r(b, c, ym);
      if (u(V)) {
        var da = (function() {
          var Va = Dn(V, jl);
          return u(Va) ? Va : Dn(V, Nk);
        })();
        if (u(da)) {
          var Ra = jd(Zm.g(da)), oa = Ra <= e;
          return oa ? (Ra = tn(le(d, Ra, (function() {
            var Va = K(d);
            return e < Va ? e : Va;
          })()))) ? us(da) : Ra : oa;
        }
      }
      return null;
    })())) return new r(null, 2, [vj, zl, wm, h], null);
    if (u((function() {
      var V = $r(b, c, jl);
      return u(V) ? V : 0 < ps(d, e) && (V = qs(d, e), u(V)) ? (V = Sr(d, V), u(V) ? Pf(k, new P(null, 2, 5, R, [fm, V], null)) : null) : null;
    })())) {
      var ca = (function() {
        var V = J.h(ym, X.g(b)) ? b : null;
        return u(V) ? V : df(function(da) {
          return J.h(ym, X.g(da)) ? da : null;
        }, oe(c));
      })();
      t = (function() {
        var V = df(function(da) {
          return J.h(Tm, X.g(da)) ? W.g(da) : null;
        }, Jf.g(ca));
        if (u(V)) return V;
        V = qs(d, e);
        return null == V ? null : Sr(d, V);
      })();
      t = Pf(k, new P(null, 2, 5, R, [fm, t], null));
      var ua = Qr(d, q);
      return u((function() {
        var V = new Ah(null, new r(null, 4, ["=", null, "!", null, "<", null, ">", null], null), null);
        return V.g ? V.g(ua) : V.call(null, ua);
      })()) ? new r(null, 3, [vj, dm, wm, h, Al, t], null) : new r(null, 3, [vj, Ek, wm, h, Al, t], null);
    }
    if (u($r(b, c, Hj))) return q = $r(b, c, Hj), t = Dn(q, Tm), null == t || e < jd(Zm.g(t)) ? new r(null, 3, [vj, fl, wm, h, Lk, (function() {
      var V = $r(b, c, wl);
      return u(V) ? ns(V, e) : Ch;
    })()], null) : new r(null, 3, [vj, Lm, wm, h, dj, os(q)], null);
    if (u((function() {
      var V = $r(b, c, Pk);
      return u(V) ? Ba(H) : V;
    })())) return new r(null, 3, [vj, zm, wm, h, vm, ms($r(b, c, Pk), sk, e)], null);
    if (u((function() {
      var V = $r(b, c, Jl);
      return u(V) ? Ba($r(b, c, Hj)) && Ba(H) && Xe(wl, ds(a, d, e, Vr(
        d,
        e
      ), f, g)) : V;
    })())) return new r(null, 3, [vj, Zk, wm, h, vm, ms($r(b, c, Jl), wl, e)], null);
    if (u(I)) return new r(null, 3, [vj, Ek, wm, h, Al, I], null);
    var ab = Vr(d, e);
    return u((function() {
      var V = 0 < ab;
      return V ? u(f) ? g : f : V;
    })()) ? (q = cs(a, d, e, ab, f, g), u(q) ? (h = ds(a, d, e, ab, f, g), new r(null, 5, [vj, tj, wm, new P(null, 1, 5, R, [q], null), Gm, t, Ok, v, zj, J.h(wl, h)], null)) : u($r(b, c, Sm)) ? new r(null, 4, [vj, tj, wm, h, Gm, t, Ok, v], null) : new r(null, 4, [vj, nl, wm, h, Gm, t, Ok, v], null)) : u($r(b, c, Sm)) ? new r(null, 4, [vj, tj, wm, h, Gm, t, Ok, v], null) : new r(null, 3, [
      vj,
      qk,
      Gm,
      t,
      Ok,
      v
    ], null);
  }
  function xs(a) {
    return Qd(vf.h(D, Ff(function(b) {
      N(b, 0, null);
      b = N(b, 1, null);
      return J.h("many", pj.g(b));
    }, Zi.g(a))));
  }
  function ys(a, b) {
    return u(a) ? Lf(function(c) {
      return new r(null, 3, [Ol, c, Z, "attribute", Rl, "Attributes"], null);
    }, Qd(Gf(b, vf.h(D, Ff(function(c) {
      N(c, 0, null);
      c = N(c, 1, null);
      return J.h("number", Z.g(c));
    }, fm.g(a)))))) : null;
  }
  function zs(a, b) {
    return new r(null, 5, [Ol, a, Z, "relation", Rl, "Relations", Cm, "already used \u2014 alias it", xk, [w.g(b), "${alias}:", w.g(a)].join("")], null);
  }
  function As(a, b) {
    b = Ve(b);
    var c = y(b, gm), d = y(b, Qm);
    b = y(b, Ok);
    var e = Xm.h(b, Ch), f = om.h(b, Ch);
    b = Gf(e, Qd(Kg(fm.g(a))));
    return Ge.h(Lf(function(g) {
      return new r(null, 3, [Ol, g, Z, "attribute", Rl, "Attributes"], null);
    }, b), Lf(function(g) {
      if (u(f.g ? f.g(g) : f.call(null, g))) return zs(g, u(c) ? c : "");
      g = new r(null, 3, [Ol, [w.g(u(c) ? c : ""), w.g(g)].join(""), Z, "relation", Rl, "Relations"], null);
      return u(d) ? qd.i(g, Cm, d) : g;
    }, Qd(Kg(Zi.g(a)))));
  }
  function Bs(a, b) {
    if (u(a)) {
      var c = om.h(b, Ch);
      return Lf(function(d) {
        return u(c.g ? c.g(d) : c.call(null, d)) ? zs(d, "") : new r(null, 3, [Ol, d, Z, "relation", Rl, "Relations"], null);
      }, Qd(Kg(Zi.g(a))));
    }
    return null;
  }
  function Cs(a, b, c) {
    var d = (function() {
      var m = wd(wm.g(a));
      return u(m) ? m : u(u(b) ? c : b) ? Pf(b, new P(null, 2, 5, R, [Vl, c], null)) : null;
    })(), e = Gm.g(a), f = vj.g(a);
    switch (f instanceof z ? f.M : null) {
      case "line-start-root":
        return u(e) ? Bs(d, Ok.g(a)) : Ge.h(u(d) ? As(d, new r(null, 2, [gm, "->", Ok, Ok.g(a)], null)) : null, new P(null, 2, 5, R, [new r(null, 5, [Ol, "_count", Z, "keyword", Rl, "Operators", Cm, "aliased counters", Ll, Xl], null), new r(null, 5, [Ol, "_agg", Z, "keyword", Rl, "Operators", Cm, "aggregates", Ll, Xl], null)], null));
      case "root-entity-line":
        return Lf(function(m) {
          return new r(
            null,
            4,
            [Ol, m, Z, "class", Rl, "Entities", Cm, "root entity"],
            null
          );
        }, Qd(Kg(Vl.g(b))));
      case "block-start":
        return u(zj.g(a)) ? ys(d, Ch) : u(e) ? Bs(d, Ok.g(a)) : Ge.h(u(d) ? As(d, new r(null, 2, [gm, "->", Ok, Ok.g(a)], null)) : null, new P(null, 2, 5, R, [new r(null, 5, [Ol, "_count", Z, "keyword", Rl, "Operators", Cm, "aliased counters", Ll, Xl], null), new r(null, 5, [Ol, "_agg", Z, "keyword", Rl, "Operators", Cm, "aggregates", Ll, Xl], null)], null));
      case "arg-list-start":
        return Ge.h(Lf(function(m) {
          return new r(
            null,
            3,
            [Ol, m, Z, "attribute", Rl, "Attributes"],
            null
          );
        }, Qd(Kg(fm.g(d)))), Lf(function(m) {
          return new r(null, 3, [Ol, m, Z, "keyword", Rl, "Operators"], null);
        }, Jr));
      case "after-attr-in-pred":
        var g = Pf(a, new P(null, 2, 5, R, [Al, Z], null));
        e = (function() {
          var m = Lr.g ? Lr.g(g) : Lr.call(null, g);
          return u(m) ? m : Lr.g ? Lr.g("string") : Lr.call(null, "string");
        })();
        return Lf(function(m) {
          return new r(null, 2, [Ol, m, Z, "operator"], null);
        }, e);
      case "after-predicate-value":
        return new P(null, 2, 5, R, [new r(null, 5, [Ol, "and", Z, "keyword", Rl, "Operators", Cm, "both must match", ak, "and "], null), new r(
          null,
          5,
          [Ol, "or", Z, "keyword", Rl, "Operators", Cm, "either matches", ak, "or "],
          null
        )], null);
      case "after-is":
        return new P(null, 2, 5, R, [new r(null, 2, [Ol, "null", Z, "constant"], null), new r(null, 2, [Ol, "not null", Z, "constant"], null)], null);
      case "after-is-not":
        return new P(null, 1, 5, R, [new r(null, 2, [Ol, "null", Z, "constant"], null)], null);
      case "after-not":
        return new P(null, 1, 5, R, [new r(null, 2, [Ol, "in", Z, "operator"], null)], null);
      case "after-like":
        return new P(null, 4, 5, R, [new r(
          null,
          3,
          [Ol, '"%\u2026%" (contains)', Z, "text", xk, '"%${1}%"'],
          null
        ), new r(null, 3, [Ol, '"\u2026%" (starts with)', Z, "text", xk, '"${1}%"'], null), new r(null, 3, [Ol, '"%\u2026" (ends with)', Z, "text", xk, '"%${1}"'], null), new r(null, 3, [Ol, '"\u2026" (exact)', Z, "text", xk, '"${1}"'], null)], null);
      case "after-in":
        return new P(null, 1, 5, R, [new r(null, 4, [Ol, "(\u2026)", Z, "text", xk, "(${1})", Cm, "list of values"], null)], null);
      case "path-continuation":
        return e = Jm.g(a), u(e) ? As(e, new r(null, 1, [Qm, "path hop"], null)) : null;
      case "count-block-body":
      case "agg-block-body":
        if (u(d)) {
          var h = vm.h(a, Ch);
          e = xs(d);
          e = J.h(
            Zk,
            vj.g(a)
          ) ? Nf(function(m) {
            m = Pf(d, new P(null, 3, 5, R, [Zi, m, cn], null));
            m = Pf(b, new P(null, 2, 5, R, [Vl, m], null));
            return Kd(df(function(p) {
              N(p, 0, null);
              p = N(p, 1, null);
              return J.h("number", Z.g(p));
            }, fm.g(m)));
          }, e) : e;
          return Lf(function(m) {
            return u(h.g ? h.g(m) : h.call(null, m)) ? zs(m, "") : new r(null, 3, [Ol, m, Z, "relation", Rl, "Relations"], null);
          }, e);
        }
        return null;
      case "agg-attr-name":
        return ys(d, Lk.h(a, Ch));
      case "agg-fn":
        return Lf(function(m) {
          return new r(null, 2, [Ol, m, Z, "function"], null);
        }, Gf(dj.h(a, Ch), Kr));
      case "order-attr":
        return Lf(function(m) {
          return new r(
            null,
            3,
            [Ol, m, Z, "attribute", Rl, "Attributes"],
            null
          );
        }, Qd(Kg(fm.g(d))));
      case "order-dir":
        return new P(null, 2, 5, R, [new r(null, 3, [Ol, "asc", Z, "constant", Cm, "ascending"], null), new r(null, 3, [Ol, "desc", Z, "constant", Cm, "descending"], null)], null);
      case "on-relation":
        if (u(d)) {
          var k = (function() {
            return u(c) ? c : df(function(m) {
              var p = N(m, 0, null);
              m = N(m, 1, null);
              return J.h(m, d) ? p : null;
            }, Vl.g(b));
          })();
          return Lf(function(m) {
            return new r(null, 4, [Ol, m, Z, "relation", Rl, "Relations", Cm, "self-relation"], null);
          }, Qd(vf.h(D, Ff(function(m) {
            N(
              m,
              0,
              null
            );
            m = N(m, 1, null);
            return J.h(k, cn.g(m)) && Xe("many", pj.g(m));
          }, Zi.g(d)))));
        }
        return null;
      case "value-suggestion":
        switch (Pf(a, new P(null, 2, 5, R, [Al, Z], null))) {
          case "boolean":
            return u(ek.g(a)) ? ld : new P(null, 2, 5, R, [new r(null, 2, [Ol, "true", Z, "constant"], null), new r(null, 2, [Ol, "false", Z, "constant"], null)], null);
          case "enum":
            return Lf(function(m) {
              return new r(null, 3, [Ol, u(ek.g(a)) ? m : ['"', w.g(m), '"'].join(""), Z, "constant", Cm, "enum"], null);
            }, Gf((function() {
              var m = Ik.g(a);
              return u(m) ? m : Ch;
            })(), Pf(a, new P(
              null,
              2,
              5,
              R,
              [Al, em],
              null
            ))));
          default:
            return ld;
        }
      default:
        return ld;
    }
  }
  var Ds = (function() {
    var a = pf(We), b = pf(We), c = pf(We), d = pf(We), e = xc(We, Gl, wi.v ? wi.v() : wi.call(null));
    return new Hi(yc.h("synthigy.xsql.complete", "op-complete-options"), function(f) {
      return u(f) ? f : Ii;
    }, e, a, b, c, d);
  })();
  Ki(Ds, Ii, function(a, b, c) {
    return c;
  });
  Ki(Ds, "get", function(a, b, c, d) {
    a = Ve(b);
    a = y(a, vj);
    switch (a instanceof z ? a.M : null) {
      case "line-start-root":
        var e = df(function(f) {
          N(f, 0, null);
          f = N(f, 1, null);
          return Fm.g(f);
        }, fm.g(d));
        return Lf(function(f) {
          return u(u(e) ? J.h("attribute", Z.g(f)) && Kd(Pf(d, new P(null, 3, 5, R, [fm, Ol.g(f), Fm], null))) : e) ? qd.i(f, Cm, "unique \u2014 identity") : f;
        }, c);
      default:
        return c;
    }
  });
  function Es(a, b) {
    var c = Ve(a);
    a = y(c, vj);
    c = y(c, wm);
    return J.h(Nm, a) && 1 >= K(c) ? M.h(ng(b), new r(null, 4, [Ol, "on", Z, "keyword", Rl, "Operators", Cm, "self-relation to recurse over"], null)) : b;
  }
  Ki(Ds, "search-tree", function(a, b, c) {
    return Es(b, c);
  });
  Ki(Ds, "get-tree", function(a, b, c) {
    a = Ve(b);
    b = y(a, vj);
    var d = y(a, wm);
    c = J.h(Nm, b) && 1 >= K(d) ? Nf(function(e) {
      var f = J.h("attribute", Z.g(e));
      return f ? (e = Ol.g(e), f = new Ah(null, new r(null, 2, ["xid", null, "euuid", null], null), null), f.g ? f.g(e) : f.call(null, e)) : f;
    }, c) : c;
    return Es(a, c);
  });
  function Fs(a) {
    var b = Ve(a);
    a = y(b, Qk);
    var c = xc(b, Tj, 0), d = y(b, Jk), e = y(b, Wi);
    b = y(b, rk);
    var f = Uo(u(a) ? a : ""), g = (function() {
      var p = Wi.g(f);
      p = null == p ? null : W.g(p);
      return u(p) ? p : e;
    })(), h = Zr(f, c, u(a) ? a : ""), k = N(h, 0, null);
    h = N(h, 1, null);
    var m = ws(f, k, h, a, c, d, g);
    k = (function() {
      var p = wd(wm.g(m));
      return u(p) ? p : u(u(d) ? g : d) ? Pf(d, new P(null, 2, 5, R, [Vl, g], null)) : null;
    })();
    h = ng(Cs(m, d, g));
    b = Ds.B(b, m, h, k);
    a = Xr(u(a) ? a : "", c);
    c = Ve(a);
    a = y(c, T);
    c = y(c, Y);
    return new r(null, 3, [T, a, Y, c, Dl, b], null);
  }
  var Gs = new Ah(null, new r(null, 13, [hj, null, zl, null, bn, null, dm, null, Lm, null, xj, null, Ek, null, zk, null, Bj, null, Xi, null, Ql, null, Nm, null, Dj, null], null), null);
  function Hs(a, b, c, d) {
    a = bs(a, b, c);
    var e = K(a) - 1;
    c = Vr(b, c);
    for (b = Cc; ; ) {
      if (0 > e) return Kf.i(ld, Ef(ff(za)), ed(d, b));
      var f = Yc(a, e);
      im.g(f) < c ? (--e, c = im.g(f), b = M.h(b, Ml.g(f))) : --e;
    }
  }
  function Is(a, b, c) {
    var d = Vr(b, c);
    return df(function(e) {
      return im.g(e) < d ? e : null;
    }, Jb(bs(a, b, c)));
  }
  function Js(a) {
    a = Ve(a);
    var b = y(a, Qk), c = y(a, Tj), d = y(a, Jk), e = y(a, Wi), f = Uo(u(b) ? b : "");
    a = (function() {
      var H = Wi.g(f);
      H = null == H ? null : W.g(H);
      return u(H) ? H : e;
    })();
    var g = Zr(f, c, u(b) ? b : ""), h = N(g, 0, null), k = N(g, 1, null), m = ws(f, h, k, b, c, d, a), p = wm.g(m), q = wd(p);
    g = (function() {
      var H = Vr(b, c);
      return 2 > H ? 2 : H;
    })();
    var t = u((function() {
      var H = vj.g(m), O = new Ah(null, new r(null, 2, [tj, null, nl, null], null), null);
      return O.g ? O.g(H) : O.call(null, H);
    })()) ? (function() {
      var H = $r(h, k, Pj);
      return u(H) ? J.h(Wr(b, c), Wr(b, D(Zm.g(H)))) ? H : null : null;
    })() : null, v = u(t) ? (function() {
      var H = as(t);
      H = Pf(q, new P(null, 2, 5, R, [Zi, H], null));
      H = u(H) ? Pf(d, new P(null, 2, 5, R, [Vl, cn.g(H)], null)) : null;
      return u(u(H) ? Xe(H, q) : H) ? H : null;
    })() : null, A = J.h(qk, vj.g(m)) && C(a) ? Pf(d, new P(null, 2, 5, R, [Vl, a], null)) : null;
    p = J.h(1, K(p)) && Xe(q, Pf(d, new P(null, 2, 5, R, [Vl, a], null)));
    var E = $r(h, k, Pj), B = (function() {
      if (u(E)) {
        var H = Dn(E, Sm);
        if (u(H)) {
          var O = Zm.g(H), S = N(O, 0, null);
          O = N(O, 1, null);
          var ca = gs(H, b);
          return c >= S && c <= O && Ba(u(ca) ? Vr(b, c) < ca : ca) ? H : null;
        }
      }
      return null;
    })(), I = (function() {
      var H = Is(f, b, c);
      return u(H) ? J.h(Pj, vj.g(H)) && (null == B || T.g(H) > D(Zm.g(E))) ? H : null : null;
    })();
    p = u(I) ? (function() {
      var H = Dn(X.g(I), Sm);
      return u(H) ? ls(H, b, c) : new r(null, 2, [Xm, Ch, om, Ch], null);
    })() : u(B) ? ls(B, b, c) : p ? new r(null, 2, [Xm, Ch, om, Ch], null) : Ok.g(m);
    var Q = Hs(f, b, c, a);
    if (u(v)) return new r(null, 5, [Fl, Kj, Oi, v, Ok, (function() {
      var H = Dn(t, Sm);
      return u(H) ? ls(H, b, c) : new r(null, 2, [Xm, Ch, om, Ch], null);
    })(), kk, M.h(Q, as(t)), im, 2 + Vr(b, c)], null);
    if (u(A)) return new r(null, 5, [Fl, Kj, Oi, A, Ok, ls(f, b, c), kk, Q, im, g], null);
    v = vj.g(m);
    switch (v instanceof z ? v.M : null) {
      case "root-entity-line":
        return new r(null, 2, [Fl, yk, Vl, ng(Qd(Kg(Vl.g(d))))], null);
      case "count-block-body":
        return new r(null, 7, [Fl, Kj, Oi, q, Ok, new r(null, 2, [Xm, Ch, om, vm.h(m, Ch)], null), Qj, true, ql, gj, kk, Q, im, g], null);
      case "agg-block-body":
        return new r(null, 7, [Fl, Kj, Oi, q, Ok, new r(null, 2, [Xm, Ch, om, vm.h(m, Ch)], null), Qj, true, ql, Ak, kk, Q, im, g], null);
      case "agg-attr-name":
        return new r(null, 7, [Fl, Kj, Oi, q, Lj, true, Ok, new r(null, 2, [Xm, Lk.h(m, Ch), om, Ch], null), ql, Hj, kk, Q, im, g], null);
      default:
        return Md(Gs, vj.g(m)) ? new r(
          null,
          3,
          [Fl, Bk, kk, Q, Dl, ng(Cs(m, d, a))],
          null
        ) : new r(null, 5, [Fl, Kj, Oi, q, Ok, p, kk, Q, im, g], null);
    }
  }
  ;
  function Ks(a, b) {
    for (var c = K(a), d = 0, e = 1, f = 0; ; ) {
      if (d >= b || d >= c) return new r(null, 2, [Qi, e, Oj, b - f - -1], null);
      J.h("\n", a.charAt(d)) ? (e += 1, f = d + 1, d += 1) : d += 1;
    }
  }
  ;
  var Ls = mg("SELECT;FROM;WHERE;GROUP BY;HAVING;ORDER BY;LIMIT;OFFSET;JOIN;LEFT JOIN;RIGHT JOIN;INNER JOIN;ON;AS;AND;OR;NOT;IN;BETWEEN;LIKE;ILIKE;IS NULL;IS NOT NULL;DISTINCT;WITH;UNION;UNION ALL;CASE;WHEN;THEN;ELSE;END;ASC;DESC;NULLS FIRST;NULLS LAST;COUNT;SUM;AVG;MIN;MAX;ROUND;COALESCE;NULLIF;CAST".split(";")), Ms = Kf.h(Kf.i(Ch, gf.h(vf.g(function(a) {
    return qn(a, /\s+/);
  }), function(a) {
    var b = ki(a);
    return (function() {
      function c(g, h) {
        return Ka(b, g, h);
      }
      function d(g) {
        return a.g ? a.g(g) : a.call(null, g);
      }
      function e() {
        return a.v ? a.v() : a.call(null);
      }
      var f = null;
      f = function(g, h) {
        switch (arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, g);
          case 2:
            return c.call(this, g, h);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.v = e;
      f.g = d;
      f.h = c;
      return f;
    })();
  }), Ls), new P(null, 26, 5, R, "TRUE FALSE NULL LOWER UPPER LENGTH TRIM CONCAT SUBSTRING SUBSTR EXTRACT ABS CEIL FLOOR EXISTS ANY ALL DATE INTERVAL OVER PARTITION USING FULL OUTER CROSS FILTER".split(" "), null)), Ns = Nf(function(a) {
    return 4 <= K(a);
  }, Ms);
  function at(a, b) {
    return -1 < b && b < K(a) ? a.substring(b, b + 1) : null;
  }
  function bt(a, b) {
    var c = K(a), d = K(b), e = c - d;
    if (J.h(a, b) || 1 < (0 > e ? -e : e)) return false;
    if (J.h(c, d)) switch (d = uf(function(h) {
      return Xe(at(a, h), at(b, h)) ? h : null;
    }, a), K(d)) {
      case 1:
        return true;
      case 2:
        c = N(d, 0, null);
        var f = N(d, 1, null);
        return J.h(f, c + 1) && J.h(at(a, c), at(b, f)) && J.h(at(a, f), at(b, c));
      default:
        return false;
    }
    else {
      c = c < d ? new P(null, 2, 5, R, [a, b], null) : new P(null, 2, 5, R, [b, a], null);
      d = N(c, 0, null);
      e = N(c, 1, null);
      f = c = 0;
      for (var g = false; ; ) {
        if (c >= K(d)) return true;
        if (J.h(at(d, c), at(e, f))) f += 1, c += 1;
        else {
          if (u(g)) return false;
          f += 1;
          g = true;
        }
      }
    }
  }
  function ct(a) {
    return Kd(u(a) ? Sh(/[A-Za-z_]/, a) : a);
  }
  function dt(a) {
    function b(k) {
      for (; ; ) {
        var m = at(a, k);
        if (Kd(u(m) ? Sh(/[A-Za-z0-9_]/, m) : m)) k += 1;
        else return k;
      }
    }
    for (var c = K(a), d = 0, e = dl, f = ld; ; ) {
      if (d >= c) return f;
      var g = at(a, d), h = at(a, d + 1);
      switch (e instanceof z ? e.M : null) {
        case "string":
          J.h(g, "'") && J.h(h, "'") ? (e = Ri, d += 2) : J.h(g, "'") ? (e = dl, d += 1) : (e = Ri, d += 1);
          continue;
        case "dstring":
          e = d + 1;
          g = J.h(g, '"') ? dl : yl;
          d = e;
          e = g;
          continue;
        case "line-comment":
          e = d + 1;
          g = J.h(g, "\n") ? dl : Tl;
          d = e;
          e = g;
          continue;
        case "block-comment":
          J.h(g, "*") && J.h(h, "/") ? (e = dl, d += 2) : (e = el, d += 1);
          continue;
        case "brace":
          e = d + 1;
          g = J.h(g, "}") ? dl : hl;
          d = e;
          e = g;
          continue;
        default:
          J.h(g, "'") ? (e = Ri, d += 1) : J.h(g, '"') ? (e = yl, d += 1) : J.h(g, "-") && J.h(h, "-") ? (e = Tl, d += 2) : J.h(g, "/") && J.h(h, "*") ? (e = el, d += 2) : J.h(g, "{") ? (e = hl, d += 1) : J.h(g, "?") ? (e = (function() {
            var k = d + 1, m = b(d + 1);
            return k > m ? k : m;
          })(), g = dl, d = e, e = g) : ct(g) ? (e = h = b(d + 1), g = dl, f = M.h(f, new r(null, 3, [lm, a.substring(d, h), T, d, Y, h], null)), d = e, e = g) : (e = dl, d += 1);
      }
    }
  }
  function et(a) {
    return Kf.i(Ch, gf.h(Ef(function(b) {
      var c = N(b, 0, null);
      N(b, 1, null);
      return J.h("AS", lm.g(c).toUpperCase());
    }), vf.g(function(b) {
      N(b, 0, null);
      b = N(b, 1, null);
      return lm.g(b).toUpperCase();
    })), Of(2, 1, a));
  }
  function ft(a) {
    function b(f) {
      return df(function(g) {
        var h = N(g, 0, null);
        g = N(g, 1, null);
        return h <= f && f <= g - 1;
      }, e);
    }
    var c = dt(a), d = et(c), e = vf.h(Ph(T, Y), Eq(a));
    return (function h(g) {
      return new ve(null, function() {
        for (var k = g; ; ) {
          var m = C(k);
          if (m) {
            var p = m;
            if (Gd(p)) {
              var q = Vb(p), t = K(q), v = ze(t);
              return (function() {
                for (var O = 0; ; ) if (O < t) {
                  var S = Ua(q, O), ca = Ve(S), ua = y(ca, lm), ab = y(ca, T), V = y(ca, Y), da = ua.toUpperCase();
                  4 <= K(ua) && Ba(Ms.g ? Ms.g(da) : Ms.call(null, da)) && Ba(d.g ? d.g(da) : d.call(null, da)) && Ba(b(ab)) && (S = df(/* @__PURE__ */ (function(Ra, oa, Va) {
                    return function(ra) {
                      return u(bt(Va, ra)) ? ra : null;
                    };
                  })(O, k, da, S, ca, ua, ab, V, q, t, v, p, m, c, d, e, b), Ns), u(S) && Ce(v, new r(null, 4, [Gj, Zl, kj, ["Unknown word '", w.g(ua), "' \u2014 did you mean '", w.g(S), "'?"].join(""), T, ab, Y, V], null)));
                  O += 1;
                } else return true;
              })() ? Be(De(v), h(Wb(p))) : Be(De(v), null);
            }
            var A = D(p), E = Ve(A), B = y(E, lm), I = y(E, T), Q = y(E, Y), H = B.toUpperCase();
            if (4 <= K(B) && Ba(Ms.g ? Ms.g(H) : Ms.call(null, H)) && Ba(d.g ? d.g(H) : d.call(null, H)) && Ba(b(I)) && (A = df(/* @__PURE__ */ (function(O, S) {
              return function(ca) {
                return u(bt(S, ca)) ? ca : null;
              };
            })(
              k,
              H,
              A,
              E,
              B,
              I,
              Q,
              p,
              m,
              c,
              d,
              e,
              b
            ), Ns), u(A))) return ed(new r(null, 4, [Gj, Zl, kj, ["Unknown word '", w.g(B), "' \u2014 did you mean '", w.g(A), "'?"].join(""), T, I, Y, Q], null), h(F(p)));
            k = F(p);
          } else return null;
        }
      }, null, null);
    })(c);
  }
  function gt(a) {
    var b = Ve(a);
    a = y(b, Ml);
    b = y(b, nm);
    return ["?", w.g(a), u(b) ? [":", w.g(b)].join("") : null, "[]"].join("");
  }
  var ht = new r(null, 4, [yj, function(a) {
    return ["Drop the outer parens \u2014 ", w.g(a), " already expands to (?, ?, ?). Write `IN ", w.g(a), "`."].join("");
  }, Zj, function(a) {
    return ["ANY() needs a real array, but ", w.g(a), " expands to a row (?, ?, ?). Write `IN ", w.g(a), "`."].join("");
  }, Dk, function(a) {
    return ["`=` and `IN` don't combine. Write `IN ", w.g(a), "`."].join("");
  }, mj, function(a) {
    return [w.g(a), " expands to (?, ?, ?) \u2014 `=` against a row is a type mismatch. Write `IN ", w.g(a), "`."].join("");
  }], null);
  function it(a, b) {
    function c(g, h) {
      g = Sh(g, f);
      return u(g) ? (g = "string" === typeof g ? g : D(g), new r(null, 2, [vj, h, km, d + (e.length - K(g))], null)) : null;
    }
    var d = (function() {
      var g = b - 48;
      return 0 > g ? 0 : g;
    })(), e = a.substring(d, b), f = e.toLowerCase();
    a = c(/\bin\s*\(\s*$/, yj);
    if (u(a)) return a;
    a = c(/\bany\s*\(\s*$/, Zj);
    if (u(a)) return a;
    a = c(/=\s*in\s+$/, Dk);
    return u(a) ? a : c(/=\s*\(\s*$/, mj);
  }
  function jt(a) {
    return (function d(c) {
      return new ve(null, function() {
        for (var e = c; ; ) if (e = C(e)) {
          if (Gd(e)) {
            var f = Vb(e), g = K(f), h = ze(g);
            return (function() {
              for (var A = 0; ; ) if (A < g) {
                var E = Ua(f, A), B = Ve(E), I = B, Q = y(B, vj), H = y(B, dn);
                E = y(B, T);
                B = y(B, Y);
                if (u((function() {
                  var S = J.h(Il, Q);
                  return S ? H : S;
                })())) {
                  var O = it(a, E);
                  u(O) && Ce(h, new r(null, 4, [Gj, uk, kj, (function() {
                    var S = gt(I);
                    var ca = vj.g(O);
                    ca = ht.g ? ht.g(ca) : ht.call(null, ca);
                    return ca.g ? ca.g(S) : ca.call(null, S);
                  })(), T, km.g(O), Y, B], null));
                }
                A += 1;
              } else return true;
            })() ? Be(De(h), d(Wb(e))) : Be(De(h), null);
          }
          var k = D(e), m = Ve(k), p = m, q = y(m, vj), t = y(m, dn);
          k = y(m, T);
          m = y(m, Y);
          if (u((function() {
            var A = J.h(Il, q);
            return A ? t : A;
          })())) {
            var v = it(a, k);
            if (u(v)) return ed(new r(null, 4, [Gj, uk, kj, (function() {
              var A = gt(p);
              var E = vj.g(v);
              E = ht.g ? ht.g(E) : ht.call(null, E);
              return E.g ? E.g(A) : E.call(null, A);
            })(), T, km.g(v), Y, m], null), d(F(e)));
          }
          e = F(e);
        } else return null;
      }, null, null);
    })(Eq(a));
  }
  function kt(a) {
    return Ge.h(jt(a), ft(a));
  }
  ;
  var lt = new Ah(null, new r(null, 7, ["purge", null, "search-tree", null, "get-tree", null, "sql-template", null, "slice", null, "search", null, "get", null], null), null), mt = new Ah(null, new r(null, 2, ["search-tree", null, "get-tree", null], null), null), nt = new Ah(null, new r(null, 3, ["delete", null, "sync", null, "stack", null], null), null), ot = new Ah(null, new r(null, 1, ["sql-template", null], null), null);
  function pt(a) {
    for (var b = 0, c = ld; ; ) {
      var d = un(a, "\n");
      if (u(d)) {
        var e = d;
        d = a.substring(e + 1);
        var f = b + e + 1;
        c = M.h(c, new P(null, 2, 5, R, [a.substring(0, e), b], null));
        a = d;
        b = f;
      } else return M.h(c, new P(null, 2, 5, R, [a, b], null));
    }
  }
  function qt(a) {
    var b = Sh(/^@([\w-]+)/, a);
    return u(b) ? Kd((function() {
      var c = (function() {
        var d = Yc(b, 1);
        return lt.g ? lt.g(d) : lt.call(null, d);
      })();
      if (u(c)) return c;
      c = (function() {
        var d = Yc(b, 1);
        return nt.g ? nt.g(d) : nt.call(null, d);
      })();
      return u(c) ? c : J.h("batch", Yc(b, 1));
    })()) : null;
  }
  function rt(a) {
    for (var b = ld, c = ld; ; ) {
      if (yd(a)) return C(c) ? M.h(b, c) : b;
      var d = D(a), e = N(d, 0, null);
      N(d, 1, null);
      u(qt(e)) ? (a = F(a), b = C(c) ? M.h(b, c) : b, c = new P(null, 1, 5, R, [d], null)) : (a = F(a), c = M.h(c, d));
    }
  }
  var st = new Ah(null, new r(null, 4, ["returns", null, "watch", null, "namespace", null, "description", null], null), null), tt = new Ah(null, new r(null, 1, ["workspace", null], null), null);
  function ut(a) {
    for (var b = a, c = We; ; ) {
      var d = D(b), e = N(d, 0, null), f = N(d, 1, null), g = u(e) ? jd(Sh(/^@([\w-]+)/, e)) : null;
      a = /* @__PURE__ */ (function(v, A, E, B, I, Q) {
        return function(H) {
          return Qf(H, new P(null, 2, 5, R, [ij, Q], null), new P(null, 2, 5, R, [I, I + K(B)], null));
        };
      })(b, c, d, e, f, g);
      if (Ba(st.g ? st.g(g) : st.call(null, g))) return new P(null, 2, 5, R, [c, b], null);
      if (J.h(g, "description")) {
        var h = ia(e.substring(12)), k = f + K(e);
        if (ha(h, '"')) {
          var m = h.substring(1), p = un(m, '"');
          if (u(p)) a = F(b), h = (function() {
            var v = Qf(c, new P(null, 2, 5, R, [ij, g], null), new P(
              null,
              2,
              5,
              R,
              [f, k],
              null
            ));
            return 0 < p ? qd.i(v, ej, m.substring(0, p)) : v;
          })(), b = a, c = h;
          else if (d = (function() {
            for (var v = F(b), A = ld; ; ) {
              var E = D(v);
              if (u(E)) {
                var B = E;
                E = N(B, 0, null);
                N(B, 1, null);
                var I = un(E, '"');
                if (u(I)) return new P(null, 3, 5, R, [M.h(A, E.substring(0, I)), B, F(v)], null);
                v = F(v);
                A = M.h(A, E);
              } else return new P(null, 3, 5, R, [A, null, null], null);
            }
          })(), a = N(d, 0, null), h = N(d, 1, null), d = N(d, 2, null), u(h)) a = Qf(qd.i(c, ej, on("\n", Kf.h(new P(null, 1, 5, R, [m], null), a))), new P(null, 2, 5, R, [ij, g], null), new P(null, 2, 5, R, [f, jd(h) + K(D(h))], null)), b = d, c = a;
          else return new P(null, 2, 5, R, [qd.i(Qf(qd.i(c, ej, on("\n", Kf.h(new P(null, 1, 5, R, [m], null), a))), new P(null, 2, 5, R, [ij, g], null), new P(null, 2, 5, R, [f, k], null)), Dm, new r(null, 3, [kj, "unterminated @description string \u2014 missing closing quote", T, f, Y, k], null)), null], null);
        } else {
          d = Gh(/* @__PURE__ */ (function() {
            return function(v) {
              var A = N(v, 0, null);
              N(v, 1, null);
              return tn(A) || Kd(Sh(/^\s/, A));
            };
          })(b, c, h, k, d, e, f, g, a), F(b));
          var q = on(" ", Gf(tn, ed(h, vf.h(gf.h(sn, D), d))));
          h = xf(K(d), F(b));
          a = a((function() {
            var v = c;
            v = C(q) ? qd.i(v, ej, q) : v;
            return C(q) ? qd.i(v, Dm, new r(null, 4, [Gj, Zl, kj, '@description should be a quoted string, e.g. @description "\u2026"', T, f, Y, k], null)) : v;
          })());
          b = h;
          c = a;
        }
      } else {
        var t = ia((function() {
          var v = N(Sh(/^@[\w-]+\s*(.*)$/, e), 1, null);
          return u(v) ? v : "";
        })());
        h = F(b);
        a = a((function() {
          switch (g) {
            case "namespace":
              var v = c;
              return C(t) ? qd.i(v, bj, t) : v;
            case "watch":
              return qd.i(c, Fk, C(t) ? ng(Gf(tn, qn(t, /[\s,]+/))) : true);
            case "returns":
              return v = c, C(t) ? qd.i(v, mm, t) : v;
            default:
              return c;
          }
        })());
        b = h;
        c = a;
      }
    }
  }
  function vt(a) {
    function b(H) {
      return xc(v, H, new P(null, 2, 5, R, [e, k], null));
    }
    var c = C(a);
    a = D(c);
    c = G(c);
    var d = N(a, 0, null), e = N(a, 1, null);
    a = Sh(/^@([\w-]+)(?:\s+(\S+))?/, d);
    var f = Yc(a, 1), g = N(a, 2, null), h = Kd(ot.g ? ot.g(f) : ot.call(null, f));
    a = Kd(nt.g ? nt.g(f) : nt.call(null, f));
    var k = e + K(d);
    d = ut(c);
    c = N(d, 0, null);
    var m = N(d, 1, null), p = Ve(c);
    c = y(p, ej);
    d = y(p, bj);
    var q = y(p, Fk), t = y(p, mm), v = y(p, ij), A = y(p, Dm);
    p = zf(function(H) {
      var O = N(H, 0, null);
      N(H, 1, null);
      return tn(O);
    }, m);
    m = C(p) ? jd(D(p)) : k + 1;
    var E = on("\n", vf.h(D, p)), B = (function() {
      var H = null == g ? M.h(ld, new r(null, 4, [Gj, uk, kj, ["operation @", w.g(f), " requires a name"].join(""), T, e, Y, k], null)) : ld;
      return u(A) ? M.h(H, Rf.i(A, Gj, function(O) {
        return u(O) ? O : uk;
      })) : H;
    })();
    if (a) {
      a = Sh(/\?(\w+)(?::(\w+))?(\[\])?/, E);
      var I = N(a, 1, null), Q = N(a, 2, null);
      a = Kd(N(a, 3, null));
      return th([ej, Rj, Ml, rk, dn, El, wj, bj, rm, Kl, Vj, Jj], [c, (function() {
        var H = null == I ? M.h(B, new r(null, 4, [Gj, uk, kj, ["@", w.g(f), " needs a data variable, e.g. ?records:Entity[]"].join(""), T, e, Y, k], null)) : B;
        H = u(u(I) ? null == Q : I) ? M.h(H, new r(null, 4, [
          Gj,
          uk,
          kj,
          ["@", w.g(f), " data variable ?", w.g(I), " must carry the entity, e.g. ?", w.g(I), ":Entity[]"].join(""),
          T,
          e,
          Y,
          k
        ], null)) : H;
        H = u(q) ? M.h(H, (function() {
          var O = b("watch"), S = N(O, 0, null);
          O = N(O, 1, null);
          return new r(null, 4, [Gj, Zl, kj, ["@watch is ignored on @", w.g(f), " \u2014 mutations have no watch variant"].join(""), T, S, Y, O], null);
        })()) : H;
        return u(t) ? M.h(H, (function() {
          var O = b("returns"), S = N(O, 0, null);
          O = N(O, 1, null);
          return new r(null, 4, [
            Gj,
            Zl,
            kj,
            ["@returns is ignored on @", w.g(f), " \u2014 mutation results are schema-derived"].join(""),
            T,
            S,
            Y,
            O
          ], null);
        })()) : H;
      })(), g, f, a, E, Q, d, m, true, e, I]);
    }
    return th([ej, Rj, Ml, rk, fk, yk, Fk, Im, El, bj, rm, mm, Vj], [c, (function() {
      var H = u(u(t) ? !h : t) ? M.h(B, (function() {
        var O = b("returns"), S = N(O, 0, null);
        O = N(O, 1, null);
        return new r(null, 4, [Gj, Zl, kj, ["@returns is only used by @sql-template \u2014 @", w.g(f), " derives its result shape"].join(""), T, S, Y, O], null);
      })()) : B;
      H = h && null == t ? M.h(H, new r(null, 4, [Gj, Zl, kj, "@sql-template without @returns \u2014 result columns are untyped in generated SDKs", T, e, Y, k], null)) : H;
      H = Bd(q) && !h ? M.h(H, (function() {
        var O = b("watch"), S = N(O, 0, null);
        O = N(O, 1, null);
        return new r(null, 4, [Gj, Zl, kj, ["@watch entity list is only used by @sql-template \u2014 @", w.g(f), " derives its dependencies; use bare @watch"].join(""), T, S, Y, O], null);
      })()) : H;
      return u(u(q) ? mt.g ? mt.g(f) : mt.call(null, f) : q) ? M.h(H, (function() {
        var O = b("watch"), S = N(O, 0, null);
        O = N(O, 1, null);
        return new r(null, 4, [Gj, Zl, kj, ["@watch is not supported on @", w.g(f), " \u2014 tree walks have no live variant yet"].join(""), T, S, Y, O], null);
      })()) : H;
    })(), g, f, h, !h && C(ia(u(E) ? E : "")) ? (function() {
      var H = Sh(/^\s*([\w.-]+)/, E);
      return null == H ? null : Yc(H, 1);
    })() : null, q, v, E, d, m, t, e]);
  }
  function wt(a) {
    var b = D(a);
    N(b, 0, null);
    b = N(b, 1, null);
    a = zf(function(c) {
      var d = N(c, 0, null);
      N(c, 1, null);
      return tn(d);
    }, Gf(function(c) {
      var d = N(c, 0, null);
      N(c, 1, null);
      c = jd(Sh(/^@([\w-]+)/, u(d) ? d : ""));
      d = st.g ? st.g(c) : st.call(null, c);
      return u(d) ? d : tt.g ? tt.g(c) : tt.call(null, c);
    }, a));
    return new r(null, 8, [rk, null, Ml, null, ej, null, fk, false, El, on("\n", vf.h(D, a)), rm, C(a) ? jd(D(a)) : b, Vj, b, Rj, ld], null);
  }
  function xt(a) {
    for (; ; ) {
      var b = D(a);
      if (u(b)) {
        var c = N(b, 0, null);
        N(b, 1, null);
        if (u(qt(c))) return null;
        if (u(Sh(/^@namespace\s+(\S+)/, c))) return jd(Sh(/^@namespace\s+(\S+)/, c));
        a = F(a);
      } else return null;
    }
  }
  function yt(a) {
    a = pt(a);
    var b = xt(a);
    return Lf(function(c) {
      var d = N(c, 0, null), e = N(d, 0, null);
      N(d, 1, null);
      d = C(e) ? jd(Sh(/^@([\w-]+)/, e)) : null;
      if (J.h("batch", d)) {
        d = C(c);
        c = D(d);
        G(d);
        var f = N(c, 0, null);
        c = N(c, 1, null);
        e = Sh(/^@batch\s+(\S+)\s*:\s*(.*)$/, f);
        d = N(e, 1, null);
        e = u(e) ? ng(Gf(tn, qn(ia(N(e, 2, "")), /\s+/))) : ld;
        f = c + K(f);
        var g = null == d ? M.h(ld, new r(null, 4, [Gj, uk, kj, "@batch requires a name (@batch <name>: op op \u2026)", T, c, Y, f], null)) : ld;
        g = u(u(d) ? yd(e) : d) ? M.h(g, new r(null, 4, [
          Gj,
          uk,
          kj,
          ["@batch '", w.g(d), "' lists no operations"].join(""),
          T,
          c,
          Y,
          f
        ], null)) : g;
        c = new r(null, 6, [Yl, true, Ml, d, ll, e, Vj, c, um, f, Rj, g], null);
      } else e = lt.g ? lt.g(d) : lt.call(null, d), d = u(e) ? e : nt.g ? nt.g(d) : nt.call(null, d), c = u(d) ? vt(c) : wt(c);
      d = rk.g(c);
      u(d) && (d = (d = Ba(bj.g(c))) ? b : d);
      return u(d) ? qd.i(c, bj, b) : c;
    }, rt(a));
  }
  function zt(a) {
    var b = Ve(a);
    a = y(b, bj);
    var c = y(b, yk);
    b = y(b, wj);
    a = u(a) ? a : u(c) ? c : b;
    return null == a ? null : a.toLowerCase();
  }
  function At(a) {
    a = Ve(a);
    var b = y(a, Ml);
    return [zt(a), "/", null == b ? null : b.toLowerCase()].join("");
  }
  function Bt(a, b) {
    a = Ff(Ml, Gf(Yl, a));
    var c = -1 != b.indexOf("/") ? (function() {
      var f = un(b, "/");
      return new P(null, 2, 5, R, [b.substring(0, f).toLowerCase(), b.substring(f + 1)], null);
    })() : new P(null, 2, 5, R, [null, b], null), d = N(c, 0, null), e = N(c, 1, null).toLowerCase();
    a = Nf(function(f) {
      return J.h(e, Ml.g(f).toLowerCase()) && (null == d || J.h(d, zt(f)));
    }, a);
    return yd(a) ? new r(null, 1, [Hk, true], null) : null == d && 1 < K(a) ? new r(null, 1, [Wl, a], null) : new r(null, 1, [rk, D(a)], null);
  }
  function Ct(a) {
    function b(d) {
      var e = Ve(d);
      d = y(e, Ml);
      var f = R, g = Ve(e);
      e = y(g, bj);
      var h = y(g, yk);
      g = y(g, wj);
      e = u(e) ? e : u(h) ? h : g;
      return new P(null, 2, 5, f, [null == e ? null : e.toLowerCase(), d.toLowerCase()], null);
    }
    var c = Nh(nf(function(d) {
      return u(Ml.g(d)) ? b(d) : null;
    }, a));
    return (function f(e) {
      return new ve(null, function() {
        for (var g = e; ; ) if (g = C(g)) {
          if (Gd(g)) {
            var h = Vb(g), k = K(h), m = ze(k);
            return (function() {
              for (var B = 0; ; ) if (B < k) {
                var I = Ua(h, B), Q = I = Ve(I), H = y(I, Ml), O = y(I, bj), S = y(I, yk), ca = y(I, wj);
                I = y(I, Vj);
                u((function() {
                  var ua = H;
                  return u(ua) ? 1 < xc(c, b(Q), 0) : ua;
                })()) && Ce(m, new r(null, 4, [Gj, uk, kj, ["duplicate operation '", (function() {
                  var ua = O;
                  u(ua) || (ua = S, ua = u(ua) ? ua : ca);
                  return u(ua) ? [w.g(ua), "/"].join("") : null;
                })(), w.g(H), "' \u2014 (namespace, name) must be unique"].join(""), T, I, Y, I + 1 + K(H)], null));
                B += 1;
              } else return true;
            })() ? Be(De(m), f(Wb(g))) : Be(De(m), null);
          }
          var p = D(g), q = p = Ve(p), t = y(p, Ml), v = y(p, bj), A = y(p, yk), E = y(p, wj);
          p = y(p, Vj);
          if (u((function() {
            var B = t;
            return u(B) ? 1 < xc(c, b(q), 0) : B;
          })())) return ed(new r(null, 4, [Gj, uk, kj, [
            "duplicate operation '",
            (function() {
              var B = v;
              u(B) || (B = A, B = u(B) ? B : E);
              return u(B) ? [w.g(B), "/"].join("") : null;
            })(),
            w.g(t),
            "' \u2014 (namespace, name) must be unique"
          ].join(""), T, p, Y, p + 1 + K(t)], null), f(F(g)));
          g = F(g);
        } else return null;
      }, null, null);
    })(a);
  }
  function Dt(a) {
    return Ff(function(b) {
      return J.h("sql-template", rk.g(b)) && Ba(C(bj.g(b)));
    }, a);
  }
  function Et(a) {
    return (function d(c) {
      return new ve(null, function() {
        for (; ; ) {
          var e = C(c);
          if (e) {
            if (Gd(e)) {
              var f = Vb(e), g = K(f), h = ze(g);
              a: for (var k = 0; ; ) if (k < g) {
                var m = Ua(f, k), p = Ve(m);
                m = y(p, Ml);
                var q = y(p, Vj);
                p = h;
                m = new r(null, 4, [Gj, Zl, kj, ["@sql-template '", w.g(m), "' has no root entity \u2014 add @namespace (e.g. @namespace dashboard) so generated SDKs know where it goes"].join(""), T, q, Y, q + 14 + K(m)], null);
                p.add(m);
                k += 1;
              } else {
                f = true;
                break a;
              }
              return f ? Be(De(h), d(Wb(e))) : Be(De(h), null);
            }
            h = D(e);
            f = Ve(h);
            h = y(f, Ml);
            f = y(f, Vj);
            return ed(new r(null, 4, [Gj, Zl, kj, ["@sql-template '", w.g(h), "' has no root entity \u2014 add @namespace (e.g. @namespace dashboard) so generated SDKs know where it goes"].join(""), T, f, Y, f + 14 + K(h)], null), d(F(e)));
          }
          return null;
        }
      }, null, null);
    })(Dt(a));
  }
  function Ft(a) {
    return (function d(c) {
      return new ve(null, function() {
        for (var e = c; ; ) {
          var f = C(e);
          if (f) {
            var g = f, h = D(g), k = Ve(h), m = y(k, Yl), p = y(k, Ml), q = y(k, ll), t = y(k, Vj), v = y(k, um);
            if (u(m) && (f = C((/* @__PURE__ */ (function(A, E, B, I, Q, H, O, S, ca, ua) {
              return function da(V) {
                return new ve(null, /* @__PURE__ */ (function(Ra, oa, Va, ra, Ab, dd, sb, sc) {
                  return function() {
                    for (var Mb = V; ; ) if (Mb = C(Mb)) {
                      if (Gd(Mb)) {
                        var tc = Vb(Mb), Lc = K(tc), Td = ze(Lc);
                        return (function() {
                          for (var Tc = 0; ; ) if (Tc < Lc) {
                            var Ud = Ua(tc, Tc), Vd = Bt(a, Ud), Je = Ve(Vd);
                            Vd = y(Je, Hk);
                            Je = y(Je, Wl);
                            var Vg = Vd;
                            u(u(Vg) ? Vg : Je) && (Vg = Td, Ud = new r(null, 4, [Gj, uk, kj, u(Vd) ? ["@batch '", w.g(Ab), "' references unknown operation '", w.g(Ud), "'"].join("") : ["@batch '", w.g(Ab), "' \u2014 '", w.g(Ud), "' is ambiguous: ", on(", ", vf.h(At, Je)), " \u2014 qualify the reference"].join(""), T, sb, Y, u(sc) ? sc : sb + 1], null), Vg.add(Ud));
                            Tc += 1;
                          } else return true;
                        })() ? Be(De(Td), da(Wb(Mb))) : Be(De(Td), null);
                      }
                      var Dd = D(Mb), fc = Bt(a, Dd);
                      fc = Ve(fc);
                      var pd = y(fc, Hk), hf = y(fc, Wl);
                      if (u((function() {
                        var Tc = pd;
                        return u(Tc) ? Tc : hf;
                      })())) return ed(new r(null, 4, [Gj, uk, kj, u(pd) ? [
                        "@batch '",
                        w.g(Ab),
                        "' references unknown operation '",
                        w.g(Dd),
                        "'"
                      ].join("") : ["@batch '", w.g(Ab), "' \u2014 '", w.g(Dd), "' is ambiguous: ", on(", ", vf.h(At, hf)), " \u2014 qualify the reference"].join(""), T, sb, Y, u(sc) ? sc : sb + 1], null), da(F(Mb)));
                      Mb = F(Mb);
                    } else return null;
                  };
                })(A, E, B, I, Q, H, O, S, ca, ua), null, null);
              };
            })(e, h, k, m, p, q, t, v, g, f))(q)))) return Ge.h(f, d(F(e)));
            e = F(e);
          } else return null;
        }
      }, null, null);
    })(a);
  }
  function Gt(a, b) {
    function c(p) {
      return Kd(df(function(q) {
        var t = N(q, 0, null);
        q = N(q, 1, null);
        return p > t && p <= q;
      }, m));
    }
    function d(p) {
      return Kd(df(function(q) {
        var t = N(q, 0, null);
        q = N(q, 1, null);
        return p >= t && p < q;
      }, k));
    }
    function e(p) {
      return Kd(df(function(q) {
        var t = N(q, 0, null);
        q = N(q, 1, null);
        return p >= t && p < q;
      }, h));
    }
    var f = (function() {
      var p = C(nf(function(q) {
        var t = rk.g(q);
        t = u(t) ? t : Yl.g(q);
        return u(t) ? Vj.g(q) : null;
      }, b));
      return p ? Qe(ee, p) : null;
    })(), g = M.h(Lf(Vj, F(b)), K(a)), h = nf(be, vf.i(function(p, q) {
      return u(fk.g(p)) ? new P(
        null,
        2,
        5,
        R,
        [rm.g(p), q],
        null
      ) : null;
    }, b, g)), k = nf(function(p) {
      var q = Ve(p);
      p = y(q, rk);
      var t = y(q, Vj);
      q = y(q, rm);
      return u(p) ? new P(null, 2, 5, R, [t, q], null) : null;
    }, b), m = nf(function(p) {
      return Pf(p, new P(null, 2, 5, R, [Im, "description"], null));
    }, b);
    return (function t(q) {
      return new ve(null, function() {
        for (var v = q; ; ) {
          var A = C(v);
          if (A) {
            var E = A;
            if (Gd(E)) {
              var B = Vb(E), I = K(B), Q = ze(I);
              return (function() {
                for (var ab = 0; ; ) if (ab < I) {
                  var V = Ua(B, ab), da = N(V, 0, null), Ra = N(V, 1, null), oa = jd(Sh(/^@([\w-]+)/, da)), Va = Ra + K(da);
                  u((function() {
                    var ra = oa;
                    return u(ra) ? Ba(lt.g ? lt.g(oa) : lt.call(null, oa)) && Ba(nt.g ? nt.g(oa) : nt.call(null, oa)) && Xe("batch", oa) && !e(Ra) && !c(Ra) : ra;
                  })()) && (V = /* @__PURE__ */ (function(ra, Ab, dd, sb, sc, Mb, tc) {
                    return function() {
                      var Lc;
                      if (Lc = J.h(dd, "namespace")) Lc = jd(Sh(/^@namespace\s+(\S+)/, Mb)), Lc = u(Lc) ? Ba(Rh(/[a-z][a-z0-9_]*/, Lc)) : null;
                      return u(Lc) ? new r(null, 4, [Gj, Zl, kj, "@namespace should be snake_case, like entity names (e.g. movie_genre)", T, tc, Y, sb], null) : null;
                    };
                  })(ab, v, oa, Va, V, da, Ra, B, I, Q, E, A, f, g, h, e, k, d, m, c), Va = Ba((function() {
                    var ra = st.g ? st.g(oa) : st.call(null, oa);
                    return u(ra) ? ra : tt.g ? tt.g(oa) : tt.call(null, oa);
                  })()) ? new r(null, 4, [Gj, uk, kj, ["unknown declaration '@", w.g(oa), "'"].join(""), T, Ra, Y, Va], null) : u((function() {
                    var ra = tt.g ? tt.g(oa) : tt.call(null, oa);
                    return u(ra) ? u(f) ? Ra > f : f : ra;
                  })()) ? new r(null, 4, [Gj, uk, kj, ["@", w.g(oa), " must appear before the first operation"].join(""), T, Ra, Y, Va], null) : u((function() {
                    var ra = st.g ? st.g(oa) : st.call(null, oa);
                    return u(ra) ? !d(Ra) : ra;
                  })()) ? null == f || Ra < f ? J.h(oa, "namespace") ? V() : new r(null, 4, [
                    Gj,
                    Zl,
                    kj,
                    ["@", w.g(oa), " before the first operation attaches to nothing and is ignored"].join(""),
                    T,
                    Ra,
                    Y,
                    Va
                  ], null) : new r(null, 4, [Gj, uk, kj, ["@", w.g(oa), " must sit in an operation header, directly after its @verb line"].join(""), T, Ra, Y, Va], null) : V(), u(Va) && Q.add(Va));
                  ab += 1;
                } else return true;
              })() ? Be(De(Q), t(Wb(E))) : Be(De(Q), null);
            }
            var H = D(E), O = N(H, 0, null), S = N(H, 1, null), ca = jd(Sh(/^@([\w-]+)/, O)), ua = S + K(O);
            if (u((function() {
              var ab = ca;
              return u(ab) ? Ba(lt.g ? lt.g(ca) : lt.call(null, ca)) && Ba(nt.g ? nt.g(ca) : nt.call(null, ca)) && Xe("batch", ca) && !e(S) && !c(S) : ab;
            })()) && (H = /* @__PURE__ */ (function(ab, V, da, Ra, oa, Va) {
              return function() {
                var ra;
                if (ra = J.h(V, "namespace")) ra = jd(Sh(/^@namespace\s+(\S+)/, oa)), ra = u(ra) ? Ba(Rh(/[a-z][a-z0-9_]*/, ra)) : null;
                return u(ra) ? new r(null, 4, [Gj, Zl, kj, "@namespace should be snake_case, like entity names (e.g. movie_genre)", T, Va, Y, da], null) : null;
              };
            })(v, ca, ua, H, O, S, E, A, f, g, h, e, k, d, m, c), ua = Ba((function() {
              var ab = st.g ? st.g(ca) : st.call(null, ca);
              return u(ab) ? ab : tt.g ? tt.g(ca) : tt.call(null, ca);
            })()) ? new r(null, 4, [Gj, uk, kj, ["unknown declaration '@", w.g(ca), "'"].join(""), T, S, Y, ua], null) : u((function() {
              var ab = tt.g ? tt.g(ca) : tt.call(
                null,
                ca
              );
              return u(ab) ? u(f) ? S > f : f : ab;
            })()) ? new r(null, 4, [Gj, uk, kj, ["@", w.g(ca), " must appear before the first operation"].join(""), T, S, Y, ua], null) : u((function() {
              var ab = st.g ? st.g(ca) : st.call(null, ca);
              return u(ab) ? !d(S) : ab;
            })()) ? null == f || S < f ? J.h(ca, "namespace") ? H() : new r(null, 4, [Gj, Zl, kj, ["@", w.g(ca), " before the first operation attaches to nothing and is ignored"].join(""), T, S, Y, ua], null) : new r(
              null,
              4,
              [Gj, uk, kj, ["@", w.g(ca), " must sit in an operation header, directly after its @verb line"].join(""), T, S, Y, ua],
              null
            ) : H(), u(ua))) return ed(ua, t(F(E)));
            v = F(E);
          } else return null;
        }
      }, null, null);
    })(pt(u(a) ? a : ""));
  }
  var Ht = /\s*(?:=>|->|<-|-)\s*/, It = /[a-z][a-z0-9_]*/;
  function Jt(a) {
    for (var b = 0, c = ld; ; ) if (b = vn(a, "{", b), u(b)) {
      var d = vn(a, "}", b + 1);
      if (u(d)) {
        var e = d;
        d = e + 1;
        c = M.h(c, new P(null, 3, 5, R, [b, e, a.substring(b + 1, e)], null));
        b = d;
      } else return c;
    } else return c;
  }
  function Kt(a, b) {
    return u(Vl.g(b)) ? (function e(d) {
      return new ve(null, function() {
        for (var f = d; ; ) {
          var g = C(f);
          if (g) {
            var h = g;
            if (Gd(h)) {
              var k = Vb(h), m = K(k), p = ze(m);
              return (function() {
                for (var O = 0; ; ) if (O < m) {
                  var S = Ua(k, O), ca = N(S, 0, null), ua = N(S, 1, null), ab = N(S, 2, null), V = ia(ab), da = wn(V, "."), Ra = u(da) ? V.substring(da + 1) : null, oa = (function() {
                    var ra = rn(u(da) ? V.substring(0, da) : V, Ht, -1);
                    return C(ra) ? ra : new P(null, 1, 5, R, [""], null);
                  })(), Va = /* @__PURE__ */ (function() {
                    return function(ra) {
                      if (u(Rh(It, u(ra) ? ra : ""))) var Ab = null;
                      else Ab = w.g(ra), ra = (u(ra) ? ra : "").toLowerCase(), ra = u(Pf(b, new P(null, 2, 5, R, [Vl, ra], null))) ? ['; use "', ra, '"'].join("") : null, Ab = ["'", Ab, "' \u2014 identifiers are snake_case", ra].join("");
                      return Ab;
                    };
                  })(O, f, V, da, Ra, oa, S, ca, ua, ab, k, m, p, h, g);
                  S = (function() {
                    var ra = df(Va, oa);
                    if (u(ra)) return ra;
                    ra = u((function() {
                      var sb = Ra;
                      return u(sb) ? !ha(Ra, "_") : sb;
                    })()) ? u(Rh(It, Ra)) ? null : ["'", Ra, "' \u2014 identifiers are snake_case"].join("") : null;
                    if (u(ra)) return ra;
                    var Ab = D(oa);
                    for (ra = F(oa); ; ) {
                      if (Ba(Pf(b, new P(null, 2, 5, R, [Vl, Ab], null)))) return [
                        "unknown entity '",
                        w.g(Ab),
                        "'"
                      ].join("");
                      if (C(ra)) {
                        var dd = Pf(b, new P(null, 5, 5, R, [Vl, Ab, Zi, D(ra), cn], null));
                        if (u(dd)) ra = F(ra), Ab = dd;
                        else return ["entity '", w.g(Ab), "' has no relation '", w.g(D(ra)), "'"].join("");
                      } else return u((function() {
                        var sb = Ra;
                        return u(sb) ? !ha(Ra, "_") && Ba(Pf(b, new P(null, 4, 5, R, [Vl, Ab, fm, Ra], null))) : sb;
                      })()) ? ["entity '", w.g(Ab), "' has no attribute '", Ra, "'"].join("") : null;
                    }
                  })();
                  u(S) && Ce(p, new r(null, 4, [Gj, uk, kj, S, T, ca, Y, ua + 1], null));
                  O += 1;
                } else return true;
              })() ? Be(De(p), e(Wb(h))) : Be(De(p), null);
            }
            var q = D(h), t = N(
              q,
              0,
              null
            ), v = N(q, 1, null), A = N(q, 2, null), E = ia(A), B = wn(E, "."), I = u(B) ? E.substring(B + 1) : null, Q = (function() {
              var O = rn(u(B) ? E.substring(0, B) : E, Ht, -1);
              return C(O) ? O : new P(null, 1, 5, R, [""], null);
            })(), H = /* @__PURE__ */ (function() {
              return function(O) {
                if (u(Rh(It, u(O) ? O : ""))) var S = null;
                else S = w.g(O), O = (u(O) ? O : "").toLowerCase(), O = u(Pf(b, new P(null, 2, 5, R, [Vl, O], null))) ? ['; use "', O, '"'].join("") : null, S = ["'", S, "' \u2014 identifiers are snake_case", O].join("");
                return S;
              };
            })(f, E, B, I, Q, q, t, v, A, h, g);
            q = (function() {
              var O = df(H, Q);
              if (u(O)) return O;
              O = u((function() {
                var ua = I;
                return u(ua) ? !ha(I, "_") : ua;
              })()) ? u(Rh(It, I)) ? null : ["'", I, "' \u2014 identifiers are snake_case"].join("") : null;
              if (u(O)) return O;
              var S = D(Q);
              for (O = F(Q); ; ) {
                if (Ba(Pf(b, new P(null, 2, 5, R, [Vl, S], null)))) return ["unknown entity '", w.g(S), "'"].join("");
                if (C(O)) {
                  var ca = Pf(b, new P(null, 5, 5, R, [Vl, S, Zi, D(O), cn], null));
                  if (u(ca)) O = F(O), S = ca;
                  else return ["entity '", w.g(S), "' has no relation '", w.g(D(O)), "'"].join("");
                } else return u((function() {
                  var ua = I;
                  return u(ua) ? !ha(I, "_") && Ba(Pf(b, new P(null, 4, 5, R, [Vl, S, fm, I], null))) : ua;
                })()) ? ["entity '", w.g(S), "' has no attribute '", I, "'"].join("") : null;
              }
            })();
            if (u(q)) return ed(new r(null, 4, [Gj, uk, kj, q, T, t, Y, v + 1], null), e(F(h)));
            f = F(h);
          } else return null;
        }
      }, null, null);
    })(Jt(a)) : null;
  }
  function Lt(a) {
    var b = Eh(Mt.g ? Mt.g(a) : Mt.call(null, a));
    return C(b) ? (function e(d) {
      return new ve(null, function() {
        for (var f = d; ; ) {
          var g = C(f);
          if (g) {
            var h = g, k = D(h), m = Ve(k), p = y(m, vj), q = y(m, Z), t = y(m, ik), v = y(m, T), A = y(m, Y);
            if (J.h(Il, p) && J.h(Wm, q) && C(t) && (g = C((/* @__PURE__ */ (function(E, B, I, Q, H, O, S, ca, ua, ab, V) {
              return function oa(Ra) {
                return new ve(null, /* @__PURE__ */ (function(Va, ra, Ab, dd, sb, sc, Mb, tc, Lc, Td, Dd) {
                  return function() {
                    for (var fc = Ra; ; ) if (fc = C(fc)) {
                      if (Gd(fc)) {
                        var pd = Vb(fc), hf = K(pd), Tc = ze(hf);
                        a: for (var Ud = 0; ; ) if (Ud < hf) {
                          var Vd = Ua(pd, Ud);
                          if (!Md(Dd, Vd)) {
                            var Je = Tc;
                            Vd = new r(null, 4, [Gj, Zl, kj, ["'", w.g(Vd), "' is not one of this query's output columns (", on(", ", Qd(Dd)), ")"].join(""), T, Mb, Y, tc], null);
                            Je.add(Vd);
                          }
                          Ud += 1;
                        } else {
                          pd = true;
                          break a;
                        }
                        return pd ? Be(De(Tc), oa(Wb(fc))) : Be(De(Tc), null);
                      }
                      Tc = D(fc);
                      if (Md(Dd, Tc)) fc = F(fc);
                      else return ed(new r(null, 4, [Gj, Zl, kj, ["'", w.g(Tc), "' is not one of this query's output columns (", on(", ", Qd(Dd)), ")"].join(""), T, Mb, Y, tc], null), oa(F(fc)));
                    } else return null;
                  };
                })(E, B, I, Q, H, O, S, ca, ua, ab, V), null, null);
              };
            })(
              f,
              k,
              m,
              p,
              q,
              t,
              v,
              A,
              h,
              g,
              b
            ))(t)))) return Ge.h(g, e(F(f)));
            f = F(f);
          } else return null;
        }
      }, null, null);
    })(Eq(a)) : null;
  }
  function Nt(a) {
    var b = Jq(a), c = Ve(b);
    b = y(c, Rj);
    c = y(c, Em);
    return Ge.u(vf.h(function(d) {
      return qd.i(d, Gj, uk);
    }, b), vf.h(function(d) {
      return qd.i(d, Gj, Zl);
    }, c), fd([Lt(a)]));
  }
  function Ot(a, b) {
    var c = yt(a);
    return ng(Ge.u(Ct(c), Et(c), fd([Ft(c), Gt(a, c), Df(
      function(d) {
        var e = Ve(d), f = y(e, rk), g = y(e, El), h = y(e, rm);
        d = y(e, fk);
        var k = y(e, Kl);
        e = y(e, Rj);
        return Ge.u(e, u(u(d) ? C(ia(u(g) ? g : "")) : d) ? (function() {
          return (function q(p) {
            return new ve(null, function() {
              for (; ; ) {
                var t = C(p);
                if (t) {
                  if (Gd(t)) {
                    var v = Vb(t), A = K(v), E = ze(A);
                    a: for (var B = 0; ; ) if (B < A) {
                      var I = Ua(v, B), Q = E;
                      I = Rf.B(Rf.B(I, T, de, h), Y, de, h);
                      Q.add(I);
                      B += 1;
                    } else {
                      v = true;
                      break a;
                    }
                    return v ? Be(De(E), q(Wb(t))) : Be(De(E), null);
                  }
                  E = D(t);
                  return ed(Rf.B(Rf.B(
                    E,
                    T,
                    de,
                    h
                  ), Y, de, h), q(F(t)));
                }
                return null;
              }
            }, null, null);
          })(Ge.u(Kt(g, b), Nt(g), fd([kt(g)])));
        })() : null, fd([Ba(d) && Ba(k) && C(ia(u(g) ? g : "")) ? (function() {
          return (function q(p) {
            return new ve(null, function() {
              for (; ; ) {
                var t = C(p);
                if (t) {
                  if (Gd(t)) {
                    var v = Vb(t), A = K(v), E = ze(A);
                    a: for (var B = 0; ; ) if (B < A) {
                      var I = Ua(v, B), Q = E;
                      I = Rf.B(Rf.B(I, T, de, h), Y, de, h);
                      Q.add(I);
                      B += 1;
                    } else {
                      v = true;
                      break a;
                    }
                    return v ? Be(De(E), q(Wb(t))) : Be(De(E), null);
                  }
                  E = D(t);
                  return ed(Rf.B(Rf.B(E, T, de, h), Y, de, h), q(F(t)));
                }
                return null;
              }
            }, null, null);
          })(Ir(g, b, f));
        })() : null]));
      },
      fd([c])
    )])));
  }
  function Pt(a, b) {
    var c = K(a);
    return Mf(function(d, e) {
      return qd.i(e, fj, d + 1 < c ? Vj.g(Yc(a, d + 1)) : K(b));
    }, 0 >= c ? Cc : Ld(0) && Ld(c) && Ld(1) ? new Jh(null, 0, c, 1, Math.ceil(c - 0), null) : new Kh(null, 0, c, 1, null, null, null), a);
  }
  var Qt = new P(null, 16, 5, R, [new r(null, 4, [Ol, "@search", Z, "keyword", Rl, "Operations", Cm, "query \u2014 matching rows"], null), new r(null, 4, [Ol, "@get", Z, "keyword", Rl, "Operations", Cm, "query \u2014 one row by identity"], null), new r(null, 4, [Ol, "@search-tree", Z, "keyword", Rl, "Operations", Cm, "query \u2014 matches + ancestors via on"], null), new r(null, 4, [Ol, "@get-tree", Z, "keyword", Rl, "Operations", Cm, "query \u2014 root + descendants via on"], null), new r(
    null,
    4,
    [Ol, "@sql-template", Z, "keyword", Rl, "Operations", Cm, "raw SQL, {Entity.field} placeholders"],
    null
  ), new r(null, 4, [Ol, "@slice", Z, "keyword", Rl, "Operations", Cm, "destroy \u2014 slice matched rows"], null), new r(null, 4, [Ol, "@purge", Z, "keyword", Rl, "Operations", Cm, "destroy \u2014 delete matched rows"], null), new r(null, 4, [Ol, "@sync", Z, "keyword", Rl, "Operations", Cm, "mutate \u2014 declarative records"], null), new r(null, 4, [Ol, "@stack", Z, "keyword", Rl, "Operations", Cm, "mutate \u2014 additive records"], null), new r(null, 4, [Ol, "@delete", Z, "keyword", Rl, "Operations", Cm, "mutate \u2014 by ids"], null), new r(null, 4, [
    Ol,
    "@description",
    Z,
    "keyword",
    Rl,
    "Directives",
    Cm,
    "document the op above"
  ], null), new r(null, 4, [Ol, "@namespace", Z, "keyword", Rl, "Directives", Cm, "codegen namespace"], null), new r(null, 4, [Ol, "@returns", Z, "keyword", Rl, "Directives", Cm, "sql-template result columns \u2014 name:type, \u2026"], null), new r(null, 4, [Ol, "@watch", Z, "keyword", Rl, "Directives", Cm, "sql-template live deps \u2014 entity list"], null), new r(null, 4, [Ol, "@workspace", Z, "keyword", Rl, "Directives", Cm, 'console workspace \u2014 e.g. @workspace "My Queries"'], null), new r(null, 4, [
    Ol,
    "@batch",
    Z,
    "keyword",
    Rl,
    "Directives",
    Cm,
    "named composition of ops"
  ], null)], null), Rt = new P(null, 6, 5, R, "int float string boolean timestamp uuid".split(" "), null), St = Lf(function(a) {
    return new r(null, 3, [Ol, a, Z, "type", Cm, "@returns column type"], null);
  }, Rt);
  function Tt(a, b) {
    a: for (var c = b; ; ) if (0 < c && Xe("\n", a.charAt(c - 1))) --c;
    else break a;
    a = a.substring(c, b);
    return u(Sh(/^@returns\s/, a)) && (a = Sh(/:\s*([A-Za-z_][A-Za-z0-9_]*)?$/, a), u(a)) ? (N(a, 0, null), a = N(a, 1, null), new r(null, 3, [T, b - K(u(a) ? a : ""), Y, b, Dl, St], null)) : null;
  }
  function Ut(a, b, c, d) {
    if (u((function() {
      var f = Kl.g(c);
      return u(f) ? u(d) ? (f = rm.g(c), u(f) ? b >= rm.g(c) : f) : d : f;
    })())) {
      var e = (function() {
        for (var f = b; ; ) if (0 < f && Xe("\n", a.charAt(f - 1))) --f;
        else return f;
      })();
      e = Sh(/^\s*\?\w+:([A-Za-z0-9_]*)$/, a.substring(e, b));
      if (u(e)) return N(e, 0, null), e = N(e, 1, null), new r(null, 3, [T, b - K(e), Y, b, Dl, Lf(function(f) {
        return new r(null, 4, [Ol, f, Z, "type", Cm, "records", ak, [w.g(f), "[]"].join("")], null);
      }, Qd(Kg(Vl.g(d))))], null);
    }
    return null;
  }
  function Vt(a, b) {
    var c = (function() {
      for (var f = b; ; ) if (0 < f && Xe("\n", a.charAt(f - 1))) --f;
      else return f;
    })();
    if (c < K(a) && J.h("@", a.charAt(c))) {
      var d = K(a), e = (function() {
        for (var f = c + 1; ; ) {
          var g = (g = f < d) ? Rh(/[\w-]/, w.g(a.charAt(f))) : g;
          if (u(g)) f += 1;
          else return f;
        }
      })();
      return b <= e ? new r(null, 3, [T, c, Y, e, Dl, Qt], null) : null;
    }
    return null;
  }
  function Wt(a, b) {
    var c = C(b);
    b = D(c);
    c = G(c);
    return Ka(function(d, e) {
      d = Pf(a, new P(null, 5, 5, R, [Vl, d, Zi, e, cn], null));
      return u(d) ? d : new Mc(null);
    }, u(Pf(a, new P(null, 2, 5, R, [Vl, b], null))) ? b : null, c);
  }
  function Xt(a) {
    return Lf(function(b) {
      return new r(null, 3, [Ol, b, Z, "class", Cm, "entity"], null);
    }, Qd(Kg(Vl.g(a))));
  }
  function Yt(a, b) {
    return Lf(function(c) {
      var d = N(c, 0, null);
      c = N(c, 1, null);
      var e = Ve(c);
      c = y(e, cn);
      e = y(e, pj);
      return new r(null, 4, [Ol, d, Z, "property", Rl, "Relations", Cm, [w.g(c), u(e) ? [" \xB7 ", w.g(e)].join("") : null].join("")], null);
    }, Wd(pg, Pf(a, new P(null, 3, 5, R, [Vl, b, Zi], null))));
  }
  function Zt(a, b) {
    return Lf(function(c) {
      var d = N(c, 0, null);
      c = N(c, 1, null);
      c = Z.g(c);
      return new r(null, 4, [Ol, d, Z, "property", Rl, "Attributes", Cm, u(c) ? c : "string"], null);
    }, Wd(pg, Pf(a, new P(null, 3, 5, R, [Vl, b, fm], null))));
  }
  function $t(a, b, c) {
    a = a.substring(0, b);
    var d = wn(a, "{"), e = wn(a, "}");
    if (u(u(d) ? (null == e || e < d) && -1 == a.substring(d).indexOf("\n") : d)) {
      a = a.substring(d + 1).replace(/^[\s\xa0]+/, "");
      var f = Sh(/\s*(?:=>|->|<-|-)\s*$/, a), g = u(f) ? le(a, 0, a.length - K(f)) : a;
      d = (function() {
        var k = rn(g, Ht, -1);
        return C(k) ? k : new P(null, 1, 5, R, [""], null);
      })();
      var h = wd(d);
      e = u((function() {
        var k = Ba(f);
        return k ? h : k;
      })()) ? un(h, ".") : null;
      if (u(f)) return d = Wt(c, d), u(d) ? new r(null, 3, [T, b, Y, b, Dl, Yt(c, d)], null) : null;
      if (u(e)) return a = h.substring(e + 1), d = M.h(
        xd(d),
        h.substring(0, e)
      ), d = Wt(c, d), u(d) ? new r(null, 3, [T, b - a.length, Y, b, Dl, Zt(c, d)], null) : null;
      if (J.h(1, K(d))) return new r(null, 3, [T, b - K(h), Y, b, Dl, Xt(c)], null);
      d = Wt(c, xd(d));
      if (u(d)) return a = d, new r(null, 3, [T, b - K(h), Y, b, Dl, Yt(c, a)], null);
    }
    return null;
  }
  function Mt(a) {
    return Fh(Ge.h(vf.h(jd, Uh(/\bas\s+([A-Za-z_][A-Za-z0-9_]*)/i, a)), vf.h(jd, Uh(/\{[^{}]*\.([A-Za-z_][A-Za-z0-9_]*)\s*\}\s*(?=,|\n|$)/, a))));
  }
  function au(a, b) {
    var c = a.substring(0, b), d = (function() {
      var g = Sh(/[A-Za-z_][A-Za-z0-9_]*$/, c);
      return u(g) ? g : "";
    })(), e = le(c, 0, c.length - K(d)), f = (function() {
      var g = kd(Uh(/\b(?:order\s+by|group\s+by|select|where|having|limit|offset|union|when|then|on)\b/i, e));
      g = null == g ? null : g.toLowerCase();
      return null == g ? null : nn(g, /\s+/, " ");
    })();
    return Md(new Ah(null, new r(null, 2, ["group by", null, "order by", null], null), null), f) ? (a = Mt(a), C(a) ? new r(null, 3, [T, b - K(d), Y, b, Dl, Lf(function(g) {
      return new r(null, 3, [
        Ol,
        g,
        Z,
        "property",
        Cm,
        "output column"
      ], null);
    }, a)], null) : null) : null;
  }
  function bu(a, b) {
    a = a.substring(0, b);
    var c = Sh(/\?[a-z_][a-z0-9_]*\??:([a-zA-Z]*)$/, a);
    if (u(c)) {
      var d = N(c, 0, null);
      c = N(c, 1, null);
      c = u(c) ? c : "";
      d = a.length - K(d);
      a = u(Sh(Fq, a.substring(0, d))) ? new P(null, 1, 5, R, ["order"], null) : Rt;
      return new r(null, 3, [T, b - K(c), Y, b, Dl, Lf(function(e) {
        return new r(null, 2, [Ol, e, Z, "type"], null);
      }, a)], null);
    }
    return null;
  }
  function cu(a, b) {
    var c = (function() {
      for (var e = b - 1, f = 0; ; ) {
        if (0 > e) return null;
        if (J.h(")", a.charAt(e))) f += 1, --e;
        else if (J.h("(", a.charAt(e))) {
          if (0 === f) return e;
          --f;
          --e;
        } else --e;
      }
    })();
    if (u(u(c) ? Sh(/\?[a-z_][a-z0-9_]*\??(?::[a-zA-Z]+)?$/, a.substring(0, c)) : c)) {
      c = Mt(a);
      var d = (function() {
        var e = Sh(/[A-Za-z_][A-Za-z0-9_]*$/, a.substring(0, b));
        return u(e) ? e : "";
      })();
      return C(c) ? new r(null, 3, [T, b - K(d), Y, b, Dl, Lf(function(e) {
        return new r(null, 3, [Ol, e, Z, "property", Cm, "output column"], null);
      }, c)], null) : null;
    }
    return null;
  }
  function du(a, b, c) {
    if (u((function() {
      if (u(c)) {
        var f = fk.g(c);
        return u(f) ? C(El.g(c)) : f;
      }
      return c;
    })())) {
      var d = (function() {
        for (var f = b; ; ) if (0 < f && Xe("\n", a.charAt(f - 1))) --f;
        else return f;
      })();
      d = a.substring(d, b);
      if (u(Sh(/^@returns(\s|$)/, d))) {
        var e = Sh(/(?:@returns\s+|,\s*)([A-Za-z_][A-Za-z0-9_]*)?$/, d);
        if (u(e)) return N(e, 0, null), e = N(e, 1, null), e = u(e) ? e : "", d = Eh(vf.h(jd, Uh(/([A-Za-z_][A-Za-z0-9_]*)\s*:/, d))), d = Gf(d, Mt(El.g(c))), C(d) ? new r(null, 3, [T, b - K(e), Y, b, Dl, Lf(function(f) {
          return new r(null, 3, [
            Ol,
            f,
            Z,
            "property",
            Cm,
            "column \u2014 add :type"
          ], null);
        }, d)], null) : null;
      }
    }
    return null;
  }
  function eu(a, b) {
    a: {
      var c = b - 1;
      for (var d = 0; ; ) {
        if (0 > c) {
          c = null;
          break a;
        }
        if (J.h(")", a.charAt(c))) d += 1, --c;
        else if (J.h("(", a.charAt(c))) {
          if (0 === d) break a;
          --d;
          --c;
        } else --c;
      }
    }
    return u(c) && (a = a.substring(c + 1, b), b = Sh(/\border\s+by\b/is, a), u(b)) ? (a = ke(a, un(a, b) + K(b)), Ba(Sh(/\b(?:limit|offset|distinct|join|_limit|_offset|_distinct|_join)\b/is, a))) : null;
  }
  function fu(a, b) {
    var c = Sh(/\?[a-z_][a-z0-9_]*\??:([a-zA-Z]*)$/, a.substring(0, b));
    return u(c) ? (N(c, 0, null), c = N(c, 1, null), c = u(c) ? c : "", a = u(eu(a, b)) ? new P(null, 1, 5, R, ["order"], null) : Rt, new r(null, 3, [T, b - K(c), Y, b, Dl, Lf(function(d) {
      return new r(null, 2, [Ol, d, Z, "type"], null);
    }, a)], null)) : null;
  }
  function gu(a, b, c, d) {
    var e = (function() {
      for (var f = b - 1, g = 0; ; ) {
        if (0 > f) return null;
        if (J.h(")", a.charAt(f))) g += 1, --f;
        else if (J.h("(", a.charAt(f))) {
          if (0 === g) return f;
          --g;
          --f;
        } else --f;
      }
    })();
    return u(u(e) ? u(c) ? Sh(/\?[a-z_][a-z0-9_]*\??(?::[a-zA-Z]+)?$/, a.substring(0, e)) : c : e) ? (c = Fs(new r(null, 5, [Qk, a, Tj, b, Jk, c, Wi, null, rk, d], null)), d = Nf(function(f) {
      return J.h("attribute", Z.g(f));
    }, Dl.g(c)), C(d) ? qd.i(c, Dl, d) : null) : null;
  }
  function hu(a) {
    a = Ve(a);
    var b = y(a, Qk), c = xc(a, Tj, 0), d = y(a, Jk);
    a = u(b) ? b : "";
    var e = Pt(yt(a), a), f = (function() {
      var k = df(function(m) {
        return c >= Vj.g(m) && c < fj.g(m) ? m : null;
      }, e);
      return u(k) ? k : kd(e);
    })();
    b = Vt(a, c);
    if (u(b)) return b;
    b = Tt(a, c);
    if (u(b)) return b;
    b = du(a, c, f);
    if (u(b)) return b;
    a = Ut(a, c, f, d);
    if (u(a)) return a;
    a = u((function() {
      if (u(f)) {
        var k = fk.g(f);
        return u(k) ? u(d) ? (k = rm.g(f), u(k) ? c >= rm.g(f) : k) : d : k;
      }
      return f;
    })()) ? (function() {
      var k = El.g(f), m = (function() {
        var q = c - rm.g(f), t = K(k);
        return q < t ? q : t;
      })(), p = (function() {
        var q = $t(k, m, d);
        if (u(q)) return q;
        q = cu(k, m);
        if (u(q)) return q;
        q = bu(k, m);
        return u(q) ? q : au(k, m);
      })();
      return u(p) ? Rf.B(Rf.B(p, T, de, rm.g(f)), Y, de, rm.g(f)) : null;
    })() : null;
    if (u(a)) return a;
    if (u((function() {
      if (u(f)) {
        var k = Ba(Yl.g(f));
        return k ? (k = Ba(Kl.g(f))) ? (k = Ba(fk.g(f))) ? (k = rm.g(f), u(k) ? c >= rm.g(f) : k) : k : k : k;
      }
      return f;
    })())) {
      var g = El.g(f), h = c - rm.g(f);
      a = (function() {
        var k = gu(g, h, d, rk.g(f));
        if (u(k)) return k;
        k = fu(g, h);
        return u(k) ? k : Fs(new r(null, 5, [Qk, g, Tj, h, Jk, d, Wi, null, rk, rk.g(f)], null));
      })();
      return Rf.B(
        Rf.B(a, T, de, rm.g(f)),
        Y,
        de,
        rm.g(f)
      );
    }
    return new r(null, 3, [T, c, Y, c, Dl, ld], null);
  }
  function iu(a) {
    var b = Ve(a);
    a = y(b, Qk);
    var c = xc(b, Tj, 0);
    b = y(b, Jk);
    var d = Pt(yt(u(a) ? a : ""), u(a) ? a : ""), e = (function() {
      var f = df(function(g) {
        return c >= Vj.g(g) && c < fj.g(g) ? g : null;
      }, d);
      return u(f) ? f : kd(d);
    })();
    return u((function() {
      if (u(e)) {
        var f = Ba(Yl.g(e));
        return f ? (f = Ba(Kl.g(e))) ? (f = Ba(fk.g(e))) ? (f = rm.g(e), u(f) ? c >= rm.g(e) : f) : f : f : f;
      }
      return e;
    })()) ? qd.u(Js(new r(null, 4, [Qk, El.g(e), Tj, c - rm.g(e), Jk, b, Wi, null], null)), rk, rk.g(e), fd([rm, rm.g(e), il, fj.g(e)])) : new r(null, 1, [Fl, an], null);
  }
  ;
  function ju(a) {
    return new r(null, 1, [Vl, Kf.i(We, vf.g(function(b) {
      var c = N(b, 0, null);
      b = N(b, 1, null);
      var d = Kf.i(Ch, gf.h(Ef(function(e) {
        return J.h(1, K(e));
      }), vf.g(D)), Pf(b, new P(null, 2, 5, R, ["constraints", "unique"], null)));
      return new P(null, 2, 5, R, [c, new r(null, 2, [fm, Kf.i(We, vf.g(function(e) {
        var f = N(e, 0, null), g = N(e, 1, null);
        e = R;
        var h = y(g, "type");
        h = null == h ? null : h.toLowerCase();
        h = null == h ? "string" : u(Sh(/bool/, h)) ? "boolean" : u(Sh(/^(int|long|float|double|decimal|numeric|number)/, h)) ? "number" : u(Sh(
          /(timestamp|datetime|date|time)/,
          h
        )) ? "timestamp" : u(Sh(/enum/, h)) ? "enum" : u(Sh(/(string|text|varchar|char)/, h)) ? "string" : h;
        h = new r(null, 2, [Z, h, Fm, Md(d, f)], null);
        g = u(y(g, "enum")) ? qd.i(h, tk, y(g, "enum")) : h;
        return new P(null, 2, 5, e, [f, g], null);
      }), y(b, "attributes")), Zi, Kf.i(We, vf.g(function(e) {
        var f = N(e, 0, null);
        e = N(e, 1, null);
        return new P(null, 2, 5, R, [f, new r(null, 2, [cn, y(e, "to"), pj, y(e, "cardinality")], null)], null);
      }), y(b, "relations"))], null)], null);
    }), y(a, "entities"))], null);
  }
  ;
  var ku = gn.createConnection(gn.ProposedFeatures.all, process.stdin, process.stdout), lu = new gn.TextDocuments(hn.TextDocument), mu = pf(We);
  function nu(a) {
    for (; ; ) if (u(a)) {
      var b = df(/* @__PURE__ */ (function(c) {
        return function(d) {
          d = kn.join(c, d);
          return u(jn.existsSync(d)) ? d : null;
        };
      })(a), new P(null, 2, 5, R, ["synthigy.schema.json", "schema.json"], null));
      if (u(b)) return b;
      if (J.h(a, kn.dirname(a))) return null;
      a = kn.dirname(a);
    } else return null;
  }
  function ou(a) {
    try {
      return ju(ti(JSON.parse(jn.readFileSync(a, "utf8"))));
    } catch (c) {
      var b = c;
      console.warn(["[xsql-lsp] failed to parse ", w.g(a), ": ", w.g(b.message)].join(""));
      return null;
    }
  }
  function pu(a, b) {
    try {
      jn.watch(a, function() {
        rf.u(mu, Rf, b, qd, fd([Jk, ou(a)]));
        for (var c = C(lu.all()), d = null, e = 0, f = 0; ; ) if (f < e) {
          var g = d.H(null, f);
          qu.g ? qu.g(g) : qu.call(null, g);
          f += 1;
        } else if (c = C(c)) d = c, Gd(d) ? (c = Vb(d), e = Wb(d), d = c, g = K(c), c = e, e = g) : (g = D(d), qu.g ? qu.g(g) : qu.call(null, g), c = G(d), d = null, e = 0), f = 0;
        else return null;
      });
    } catch (c) {
    }
  }
  function ru(a) {
    a = kn.dirname(a);
    var b = y(x(mu), a);
    if (u(b)) return Jk.g(b);
    b = nu(a);
    rf.B(mu, qd, a, new r(null, 2, [kk, b, Jk, u(b) ? ou(b) : null], null));
    u(b) && pu(b, a);
    return Jk.g(y(x(mu), a));
  }
  function su(a) {
    try {
      return require("url").fileURLToPath(a);
    } catch (b) {
      return a;
    }
  }
  function tu(a, b) {
    var c = Ve(b);
    b = y(c, Gj);
    var d = y(c, T), e = y(c, Y);
    c = y(c, kj);
    var f = Ks(a, d);
    a = Ks(a, d > e ? d : e);
    a: switch (b instanceof z ? b.M : null) {
      case "error":
        b = gn.DiagnosticSeverity.Error;
        break a;
      case "warning":
        b = gn.DiagnosticSeverity.Warning;
        break a;
      default:
        b = gn.DiagnosticSeverity.Information;
    }
    return { severity: b, range: { start: { line: Qi.g(f) - 1, character: Oj.g(f) - 1 }, end: { line: Qi.g(a) - 1, character: Oj.g(a) - 1 } }, message: c, source: "xsql" };
  }
  var uu = pf(We);
  function qu(a) {
    var b = a.uri, c = y(x(uu), b);
    u(c) && clearTimeout(c);
    return rf.B(uu, qd, b, setTimeout(function() {
      var d = a.uri, e = a.getText(), f = ru(su(d));
      try {
        var g = Ot(e, f);
      } catch (h) {
        f = h, console.warn(["[xsql-lsp] lint threw on ", w.g(d), ": ", w.g(f.message)].join("")), g = ld;
      }
      return ku.sendDiagnostics({ uri: d, diagnostics: pi(Lf(jf(tu, e), g)) });
    }, 150));
  }
  function vu(a, b, c) {
    a = rn(a, /\n/, -1);
    return Ka(de, 0, vf.h(function(d) {
      return K(d) + 1;
    }, wf(b, a))) + c;
  }
  var wu = th("constant class operator attribute text keyword property function type relation".split(" "), [gn.CompletionItemKind.Constant, gn.CompletionItemKind.Class, gn.CompletionItemKind.Operator, gn.CompletionItemKind.Field, gn.CompletionItemKind.Text, gn.CompletionItemKind.Keyword, gn.CompletionItemKind.Property, gn.CompletionItemKind.Function, gn.CompletionItemKind.TypeParameter, gn.CompletionItemKind.Reference]);
  function xu(a, b) {
    a = Ks(a, b);
    b = Ve(a);
    a = y(b, Qi);
    b = y(b, Oj);
    return { line: a - 1, character: b - 1 };
  }
  function lf(a, b, c, d) {
    var e = Ve(d);
    d = y(e, Ol);
    var f = y(e, Z), g = y(e, Cm);
    e = y(e, Rl);
    return { label: d, kind: xc(wu, f, gn.CompletionItemKind.Text), detail: u(u(g) ? e : g) ? [w.g(g), " \u2014 ", w.g(e)].join("") : u(g) ? g : u(e) ? e : null, textEdit: { range: { start: xu(a, b), end: xu(a, c) }, newText: d } };
  }
  function yu(a) {
    var b = a.textDocument.uri, c = a.position;
    a = lu.get(b);
    if (Ba(a)) return [];
    a = a.getText();
    c = vu(a, c.line, c.character);
    var d = ru(su(b));
    try {
      var e = hu(new r(null, 3, [Qk, a, Tj, c, Jk, d], null));
    } catch (f) {
      e = f, console.warn(["[xsql-lsp] complete threw on ", w.g(b), ": ", w.g(e.message)].join("")), e = null;
    }
    c = Ve(e);
    b = y(c, T);
    e = y(c, Y);
    c = y(c, Dl);
    return pi(Lf(kf(a, b, e), c));
  }
  function zu(a) {
    return Rh(/[a-zA-Z0-9_]/, a);
  }
  function Au(a, b) {
    function c(g) {
      return 0 <= g && g < d ? a.substring(g, g + 1) : null;
    }
    var d = K(a);
    if (u(zu((function() {
      var g = c(b);
      if (u(g)) return g;
      g = c(b - 1);
      return u(g) ? g : "";
    })()))) for (var e = b; ; ) if (u((function() {
      var g = 0 < e;
      return g ? zu(c(e - 1)) : g;
    })())) --e;
    else for (var f = (function() {
      var g = u(zu(c(b))) ? b + 1 : b;
      return b > g ? b : g;
    })(); ; ) if (u((function() {
      var g = f < d;
      return g ? zu(c(f)) : g;
    })())) f += 1;
    else return new r(null, 3, [lm, a.substring(e, f), T, e, Y, f], null);
    else return null;
  }
  function Bu(a, b) {
    return Pf(a, new P(null, 2, 5, R, [Vl, b], null));
  }
  function Cu(a, b) {
    return Ka(function(c, d) {
      return u(c) ? Bu(a, Pf(c, new P(null, 3, 5, R, [Zi, d, cn], null))) : null;
    }, Bu(a, D(b)), F(b));
  }
  function Du(a) {
    var b = a.textDocument.uri, c = a.position;
    a = lu.get(b);
    if (Ba(a)) return null;
    a = a.getText();
    c = vu(a, c.line, c.character);
    c = Au(a, c);
    if (u(c)) {
      var d = Ve(c), e = y(d, lm);
      c = y(d, T);
      d = y(d, Y);
      var f = ru(su(b));
      try {
        var g = iu(new r(null, 3, [Qk, a, Tj, d, Jk, f], null));
      } catch (p) {
        g = null;
      }
      b = kk.g(g);
      e = nn(e, /^->/, "");
      var h = J.h(e, kd(b)) && 1 < K(b);
      if (h) {
        a: {
          var k = ld;
          for (var m = b; ; ) if (G(m)) k = M.h(k, D(m)), m = G(m);
          else {
            k = C(k);
            break a;
          }
        }
        f = Cu(f, k);
      } else f = null;
      f = h ? f : Oi.g(g);
      h = y(fm.g(f), e);
      u(h) ? (k = Ve(h), h = y(k, Z), k = y(k, Fm), h = [
        "**",
        w.g(e),
        "** : `",
        w.g(h),
        "`",
        u(k) ? " \xB7 unique" : null
      ].join("")) : h = null;
      u(h) ? g = h : (f = y(Zi.g(f), e), u(f) ? (h = Ve(f), f = y(h, cn), h = y(h, pj), f = ["**", w.g(e), "** \u2192 `", w.g(f), "` (", w.g(h), ")"].join("")) : f = null, g = u(f) ? f : J.h(e, kd(b)) ? ["**", e, "** \u2014 entity (", w.g(K(fm.g(Oi.g(g)))), " attrs, ", w.g(K(Zi.g(Oi.g(g)))), " relations)"].join("") : null);
      return u(g) ? { contents: { kind: "markdown", value: g }, range: { start: xu(a, c), end: xu(a, d) } } : null;
    }
    return null;
  }
  var Eu = th("delete purge search-tree sync get-tree sql-template slice search get stack".split(" "), [3, 25, 12, 3, 12, 6, 25, 12, 12, 3]);
  function Fu(a, b) {
    var c = Ve(b);
    b = y(c, rk);
    var d = y(c, Ml), e = y(c, Vj), f = y(c, rm);
    c = y(c, El);
    return u(u(b) ? d : b) ? (f += K(u(c) ? c : ""), { name: ["@", w.g(b), " ", w.g(d)].join(""), kind: xc(Eu, b, 12), range: { start: xu(a, e), end: xu(a, f) }, selectionRange: { start: xu(a, e), end: xu(a, f) } }) : null;
  }
  function Gu(a) {
    a = lu.get(a.textDocument.uri);
    if (Ba(a)) return [];
    a = a.getText();
    try {
      var b = yt(a);
    } catch (c) {
      b = ld;
    }
    return pi(ng(nf(jf(Fu, a), b)));
  }
  function Hu() {
    return { capabilities: { textDocumentSync: gn.TextDocumentSyncKind.Incremental, completionProvider: { triggerCharacters: ["@", ".", "-", " "] }, hoverProvider: true, documentSymbolProvider: true } };
  }
  ;
  Qe(function() {
    ku.onInitialize(Hu);
    ku.onCompletion(yu);
    ku.onHover(Du);
    ku.onDocumentSymbol(Gu);
    lu.onDidChangeContent(function(a) {
      return qu(a.document);
    });
    lu.onDidClose(function(a) {
      return ku.sendDiagnostics({ uri: a.document.uri, diagnostics: [] });
    });
    lu.listen(ku);
    return ku.listen();
  }, process.argv.slice(2));
})();
