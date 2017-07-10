// @flow
import URLSearchParams from 'url-search-params';

const URLSearchParamsInstance = new URLSearchParams()

/**
 * set
 */
URLSearchParamsInstance.set('testKey', 'value');
URLSearchParamsInstance.set('anotherTestKey', 5);

/**
 * get
 */
 URLSearchParamsInstance.get('testKey');
 // $ExpectError get() must be passed a string
 URLSearchParamsInstance.get(undefined);

/**
 * has
 */
 URLSearchParamsInstance.has('testKey');
 // $ExpectError has() must be passed a string
 URLSearchParamsInstance.has(undefined);

 /**
  * append
  */
 URLSearchParamsInstance.append('testKey', 'anotherValue');

/**
 * getAll
 */
 URLSearchParamsInstance.getAll('testKey');
 // $ExpectError getAll() must be passed a string
 URLSearchParamsInstance.get(null);

 /**
 * toString
 */
 URLSearchParamsInstance.toString();

 /**
 * delete
 */
 URLSearchParamsInstance.delete('anotherTestKey');
 // $ExpectError delete() must be passed a string
 URLSearchParamsInstance.delete();
