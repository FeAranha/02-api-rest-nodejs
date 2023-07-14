interface User {
  birthYear: number
}

function calcAgeUser(user: User) {
  return new Date().getFullYear() - user.birthYear
}

calcAgeUser({ birthYear: 1993})