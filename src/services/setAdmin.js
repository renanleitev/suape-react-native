const emailAdmin = "admin@email.com";

const setAdmin = (user) => {
    if (user.Email === emailAdmin) {
        return {...user, Role: "ADMIN"};
    }
    return user;
}

export default setAdmin;