  *  将树结构数据处理成数组类型
     *  递归，树不能太深，否则会很慢
     *  node: Array | Object
     *  childProp: String | Object， string: 代表子节点的属性，Object: 配置项
     *  result: Array, 结果数组
     */

    function treeDataToArray(node, childProp) {
        var result = [];
        //配置项
        var config = {
            childProp: '', // 用于查找子节点
            keepChild: false // 当前节点是否保留子点节
        };
        if (typeof childProp === 'string') {
            config.childProp = childProp;
        } else {
            Object.keys(childProp).forEach(function (item) {
                config[item] = childProp[item];
            });
        }
        if (node instanceof Array) {
            node.forEach(function (item) {
                 result = result.concat(treeDataToArray(item, childProp));
            });
            return result;
        }
        var obj = {};
        var props = Object.keys(node);
        for (var i = 0; i < props.length; i++) {
            if (node.hasOwnProperty(props[i])) {
                if (props[i] === childProp && !config.keepChild) {
                    continue;
                }
                obj[props[i]] = node[props[i]];
            }
        }
        Object.keys(obj).length > 0 && result.push(obj);

        // if has children
        if (node[childProp]) {
            result = result.concat(treeDataToArray(node[childProp], childProp));
        }

        return result;
    }
