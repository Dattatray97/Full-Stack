export const adminlogin = (req, res) => {
    res.send('This is admin login page');
};

export const user = (req, res) => {
    const userName = req.params.userName;
    res.send(`Hello ${userName}`);
};

export const username = (req, res) => {
    const user = req.params.user;
    res.send(`Searching for ${user}`);
};
