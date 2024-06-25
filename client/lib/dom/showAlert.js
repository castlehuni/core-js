import { addClass, removeClass } from './css.js'
import { isString } from '../utils/type.js'
import { getNode } from './getNode.js'

/**
 * 
 * @param {HTMLElement | String} node 
 * @param {String} message 
 * @param {Number} timeout 
 * @returns {void}
 */
export function showAlert(node,message,timeout = 1000){
  
  if(isString(node)) node = getNode(node);

  node.textContent = message;

  addClass(node,'is-active');
  setTimeout(()=>{ // removeClass만 사용하면 다시 눌렀을때 클래스가 추가가 되지 않게 되므로 settimeout으로 처리해줘야함
    removeClass(node,'is-active');
  },timeout)

}
