export interface OtherwiseProps {
  children: React.ReactNode;
}

/**
 * 默认渲染组件
 * @param children 渲染内容
 * @returns 渲染结果
 * @example
 * <Choose>
 *  <When condition={true}>显示内容</When>
 *  <Otherwise>隐藏内容</Otherwise>
 * </Choose>
 */
export default function Otherwise({ children }: OtherwiseProps) {
  return <>{children}</>;
}
