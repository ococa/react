/**
 * @license React
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable max-len */

'use strict';

(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory(require('react')))
    : typeof define === 'function' && define.amd // eslint-disable-line no-undef
      ? define(['react'], factory) // eslint-disable-line no-undef
      : (global.Scheduler = factory(global));
})(this, function(global) {
  function unstable_now() {
    return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_now.apply(
      this,
      arguments
    );
  }

  function unstable_scheduleCallback() {
    return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_scheduleCallback.apply(
      this,
      arguments
    );
  }

  function unstable_cancelCallback() {
    return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_cancelCallback.apply(
      this,
      arguments
    );
  }

  function unstable_runWithPriority() {
    return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_runWithPriority.apply(
      this,
      arguments
    );
  }

  function unstable_wrapCallback() {
    return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_wrapCallback.apply(
      this,
      arguments
    );
  }

  function unstable_getCurrentPriorityLevel() {
    return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_getCurrentPriorityLevel.apply(
      this,
      arguments
    );
  }

  return Object.freeze({
    unstable_now: unstable_now,
    unstable_scheduleCallback: unstable_scheduleCallback,
    unstable_cancelCallback: unstable_cancelCallback,
    unstable_runWithPriority: unstable_runWithPriority,
    unstable_wrapCallback: unstable_wrapCallback,
    unstable_getCurrentPriorityLevel: unstable_getCurrentPriorityLevel,
  });
});
