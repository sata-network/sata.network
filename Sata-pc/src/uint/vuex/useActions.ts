import { mapActions, createNamespacedHelpers } from 'vuex';
import { useActionMapper } from './useMapper'

/**
 *
 * @param {*} moduleName 模块名称
 * @param {*} mapper 方法名集合 ['fn1', 'fn2']
 * @returns
 */
export function useActions(moduleName: any, mapper: any) {
  let mapperFn = mapActions;

  // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapActions方法
  if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapActions
  }

  return useActionMapper(mapper, mapperFn)
}

function checkType(data: any) {
  return Object.prototype.toString.call(data)
};
