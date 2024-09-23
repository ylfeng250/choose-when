import React from "react";

export interface WhenProps {
  children: React.ReactNode;
  condition: boolean;
  fallback?: React.ReactNode;
}
/**
 * 条件渲染组件
 * @param children 渲染内容
 * @param condition 是否显示
 * @param fallback 渲染失败内容，仅在单独使用的时候有效
 * @returns 渲染结果
 * @example
 * <When condition={true}>显示内容</When>
 * <When condition={false}>隐藏内容</When>
 * <When condition={false} fallback={<div>隐藏内容</div>}>显示内容</When>/>
 *
 * <Choose>
 *  <When condition={true}>显示内容</When>
 *  <Otherwise>隐藏内容</Otherwise>
 * </Choose>
 */
export default function When({
  children,
  condition,
  fallback = null,
}: WhenProps) {
  return condition ? children : fallback;
}
