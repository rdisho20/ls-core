interface Account {
  username: string,
  email: string,
  readonly accountCreationDate: string,
}

const userAccount: Account = {
  username: "johndoe123",
  email: "john@example.com",
  accountCreationDate: "2023-01-01",
}