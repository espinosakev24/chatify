export default interface IInput {
  id?: string,
  label?: string,
  name?: string,
  type?: string,
  className?: string,
  action?(event: any): void
}
