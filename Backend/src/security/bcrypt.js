const bcrypt = require('bcrypt');

async function genHash(password){
    let hash = await bcrypt.hash(password,10);
    return hash;
}

async function matchPassword(password,hash) {
    let isMatch = await bcrypt.compare(password,hash);
    return isMatch;
}

module.exports.genHash = genHash;
module.exports.matchPassword=matchPassword;