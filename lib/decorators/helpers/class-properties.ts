/**
 * @license
 * Copyright Andrey Chalkin <L2jLiga@gmail.com> (https://github.com/L2jLiga). All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/L2jLiga/fastify-decorators/blob/master/LICENSE
 */

import { IErrorHandler, IHandler, IHook } from '../../interfaces/index.js';
import { ERROR_HANDLERS, HANDLERS, HOOKS } from '../../symbols/index.js';

export function ensureHandlers(val: { [HANDLERS]?: IHandler[] }): asserts val is { [HANDLERS]: IHandler[] } {
  if (!(HANDLERS in val)) {
    Reflect.defineProperty(val, HANDLERS, {
      value: [],
      enumerable: false,
      configurable: false,
      writable: false,
    });
  }
}

export function hasHandlers<Class>(val: Class): val is Class & { [HANDLERS]: IHandler[] } {
  return HANDLERS in val;
}

export function ensureErrorHandlers(val: { [ERROR_HANDLERS]?: IErrorHandler[] }): asserts val is { [ERROR_HANDLERS]: IErrorHandler[] } {
  if (!(ERROR_HANDLERS in val)) {
    Reflect.defineProperty(val, ERROR_HANDLERS, {
      value: [],
      enumerable: false,
      configurable: false,
      writable: false,
    });
  }
}

export function hasErrorHandlers<Class>(val: Class): val is Class & { [ERROR_HANDLERS]: IErrorHandler[] } {
  return ERROR_HANDLERS in val;
}

export function ensureHooks(val: { [HOOKS]?: IHook[] }): asserts val is { [HOOKS]: IHook[] } {
  if (!(HOOKS in val)) {
    Reflect.defineProperty(val, HOOKS, {
      value: [],
      enumerable: false,
      configurable: false,
      writable: false,
    });
  }
}

export function hasHooks<Class>(val: Class): val is Class & { [HOOKS]: IHook[] } {
  return HOOKS in val;
}
