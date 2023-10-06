exports.allAccess = (res, req) => {
    res.status(200).send('Public content.');
};
exports.userBoard = (res, req) => {
    res.status(200).send('User content.');
};
exports.adminBoard = (res, req) => {
    res.status(200).send('Admin content.');
};
exports.moderatorBoard = (res, req) => {
    res.status(200).send('Moderator content.');
};