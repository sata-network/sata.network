import {mapGetters, createNamespacedHelpers} from 'vuex'

import {useStateMapper} from './useMapper'

/**
 *
 * @param {*} moduleName 模块名称
 * @param {*} mapper getters属性集合 ['name', 'age']
 * @returns
 */
export function useGetters(moduleName: any, mapper: any) {
  let mapperFn = mapGetters;

  // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapGetters方法
  if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters
  }

  return useStateMapper(mapper, mapperFn)
}

function checkType(data: any) {
  return Object.prototype.toString.call(data)
};
