import React from "react";
import When from "../When";
import Otherwise from "../Otherwise";

export interface ChooseProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * 选择渲染组件
 * @description 嵌套使用When和Otherwise组件, 当第一个When组件的when属性为true时, 将返回对应的内容, 否则返回最后一个Otherwise组件的内容
 * @param children 组件内容 (When/Otherwise)
 * @returns 渲染结果
 * @example
 * <Choose>
 *   <When condition={true}>显示内容</When>
 *   <Otherwise>默认内容</Otherwise>
 * </Choose>
 */
export default function Choose({ children }: ChooseProps) {
  let otherwise = null;

  for (const child of React.Children.toArray(children)) {
    if (React.isValidElement(child)) {
      if (child.type === When && child.props.condition) {
        return child;
      }
      if (child.type === Otherwise) {
        otherwise = child;
      }
    }
  }

  return otherwise || null;
}
