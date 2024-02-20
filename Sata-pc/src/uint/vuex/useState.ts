import {mapState, createNamespacedHelpers} from 'vuex'

import {useStateMapper} from './useMapper'

/**
 *
 * @param {*} moduleName 模块名称
 * @param {*} mapper state属性集合 ['name', 'age']
 * @returns
 */
export function useState(moduleName: string, mapper: any): any {
    let mapperFn = mapState;

    // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapState方法
    if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapState
    }

    return useStateMapper(mapper, mapperFn)
}

function checkType(data: any) {
    return Object.prototype.toString.call(data)
};
