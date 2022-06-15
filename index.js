// This is done in a linear time O(n) without recursion
// memory complexity is O(1) or O(n) if mutable param is set to false
export default function flatten(array, mutable) {
    const toString = Object.prototype.toString;
    const arrayTypeStr = '[object Array]';
    
    const result = [];

    if (!Array.isArray(array)) {
        return null;
    }

    if (!array.length) {
        return [];
    }

    const nodes = (mutable && array) || array.slice();
    let node = null;

    node = nodes.pop();
    
    do {
        if (toString.call(node) === arrayTypeStr) {
            nodes.push.apply(nodes, node);
        } else {
            result.push(node);
        }
    } while (nodes.length && (node = nodes.pop()) !== undefined);

    result.reverse(); // we reverse result to restore the original order
    return result;
}