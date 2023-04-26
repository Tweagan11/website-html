const { MongoClient, ServerApiVersion } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function run() {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

run();

const userCollection = client.db('tht').collection('user');
const adminCollection = client.db('tht').collection('admin');


function getUser(email) {
    const user = userCollection.findOne({ email: email });
    return user;
}
  
function getUserByToken(token) {
    const user = userCollection.findOne({ token: token });
    return user;
} 

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      online: true,
      token: uuid.v4(),
    };

    await userCollection.insertOne(user);
  
    return user;
}

async function createAdmin(email, password) {
    await run();
    const passwordHash = await bcrypt.hash(password, 10);

    const admin = {
        email: email,
        password: passwordHash,
        online: true,
        admin: true,
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