 /**
 * 删除为空的对象属性。也可以指定要删除的属性。
 * ojb: Object, key|value pairs
 * props: Array<String>
 * config: Object | Boolean
 * config.mergeDefault: default: true
 */
function deleteEmptyProperty(obj, props, config) {
    var deleteArr = ['', null, undefined, NaN, []];
    if (typeof config === 'boolean') {
        config = {
            mergeDefault: config
        };
    } else {
        config = {
            mergeDefault: true
        };
    }
    if (!Array.isArray(props)) {
        props = [];
    }
    if (config.mergeDefault) {
        deleteArr = deleteArr.concat(props);
    }
    Object.keys(obj).forEach(function (prop) {
        for (var i = 0; i < deleteArr.length; i++) {
            var willDelete = false;
            if (obj[prop] === deleteArr[i]) {
                willDelete = true;
            }
            if (typeof obj[prop] === 'number' && isNaN(deleteArr[i]) && isNaN(obj[prop])) {
                willDelete = true;
            }
            if (emptyArray(deleteArr[i]) && emptyArray(obj[prop])) {
                willDelete = true;
            }
            if(willDelete){
                delete obj[prop];
                break;
            }
        }
    });

    return obj;
}
/**
 * 测定空数组。
 */
function emptyArray(arr) {
    return Array.isArray(arr && arr.length === 0);
}
