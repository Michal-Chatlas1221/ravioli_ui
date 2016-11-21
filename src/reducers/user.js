const user = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

module.exports = {isAuthorised: (user) => !!user.token};

export default user;