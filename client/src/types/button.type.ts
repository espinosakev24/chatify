export default interface IButton {
  id?: string,
  label?: string,
  name?: string,
  type?: string,
  className?: string,
  action?(): void
}
