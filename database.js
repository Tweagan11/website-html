const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('simon').collection('user');
const adminCollection = client.db('simon').collection('admin');

function getUser(email) {
    var user = adminCollection.findOne({ email: email });
    if(user) {
        return user;
    } else {
        user = userCollection.findOne({ email: email });
        return user;
    }
}
  
function getUserByToken(token) {
    var user = adminCollection.findOne({ token: token});
    if (user) {
        return user;
    } else {
        user = userCollection.findOne({ token: token });
        return user;
    }
} 

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      authenticated: true,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
}

async function createAdmin(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const admin = {
        email: email,
        password: passwordHash,
        authenticated: true,
        token: uuid.v4(),
    };
    await adminCollection.insertOne(admin);

    return admin;
}

function getAdmin(email) {
    return adminCollection.findOne({ email: email });
}

function getadminByToken(token) {
    return adminCollection.findOne({ token: token });
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    getAdmin,
    getadminByToken,
    createAdmin,
};