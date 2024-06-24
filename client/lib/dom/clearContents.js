import { getNode } from "./getNode.js";
import { isString } from "../utils/type.js";





export default function clearContents(node){ // default를 넣으면 default 내보내기가 됨

  if(isString(node)) node = getNode(node);

  if(node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
    node.value = ''
    return;
  }

  node.textContent = ''
  
}

// export default clearContents







