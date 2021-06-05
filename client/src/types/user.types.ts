type TUserRegister = {
  fullname: string,
  username: string,
  password: string
}
type TUserLogin = {
  username: string,
  password: string
}

export type {
  TUserRegister,
  TUserLogin
}