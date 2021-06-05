type TUserLogin = {
  username: string,
  email?: string,
  password: string
}

type TUserRegister = {
  fullname: string,
  username: string,
  email?: string,
  password: string
}

type TUserDb = {
  id: number,
  fullname: string,
  username: string,
  email?: string,
  password: string,
  createdAt?: string
}

export {
  TUserLogin,
  TUserRegister,
  TUserDb
};
