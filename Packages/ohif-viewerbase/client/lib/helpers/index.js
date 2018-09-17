/**
 * Helpers with exposed symbols...
 */

import { isTouchDevice } from './isTouchDevice';
import { formatPN } from './formatPN';
import { formatDA } from './formatDA';
import { formatTM } from './formatTM';
import isValidNumber from './isValidNumber';

/**
 * Helpers with side effects only...
 */

import './formatJSDate';
import './jsDateFromNow';
import formatNumberPrecision from './formatNumberPrecision';
import './inc';
import './isDisplaySetActive';
import './getUsername';
import './capitalizeFirstLetter';
import './objectToPairs';
import './objectEach';
import './ifTypeIs';
import './prettyPrintStringify';
import './sorting';
import './studyThumbnails';

/**
 * Exposed interface...
 */

const helpers = {
    isTouchDevice,
    formatPN,
    formatDA,
    formatTM,
    formatNumberPrecision,
    isValidNumber,
};

export { helpers };