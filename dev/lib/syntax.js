/**
 * @import {Options} from 'micromark-extension-math'
 * @import {Extension} from 'micromark-util-types'
 */

import {codes} from 'micromark-util-symbol'
import {mathFlow} from './math-flow.js'
import {mathFlow as mathFlowBackslash} from './math-flow-backslash.js'
import {mathText} from './math-text.js'
import {mathText as mathTextBackslash} from './math-text-backslash.js'

/**
 * Create an extension for `micromark` to enable math syntax.
 *
 * @param {Options | null | undefined} [options={}]
 *   Configuration (default: `{}`).
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions`, to
 *   enable math syntax.
 */
export function math(options) {
  return {
    flow: {
      [codes.dollarSign]: mathFlow,
      [codes.backslash]: mathFlowBackslash
    },
    text: {
      [codes.dollarSign]: mathText(options),
      [codes.backslash]: [
        mathTextBackslash({
          openChar: codes.leftParenthesis,
          closeChar: codes.rightParenthesis
        }),
        mathTextBackslash({
          openChar: codes.leftSquareBracket,
          closeChar: codes.rightSquareBracket
        })
      ]
    }
  }
}
