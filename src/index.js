function calcAgeUser(user) {
    return new Date().getFullYear() - user.birthYear;
}
calcAgeUser({ birthYear: 1993 });
