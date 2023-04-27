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
const productCollection = client.db('tht').collection('products');


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
    const adminStatus = false;
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
      admin: adminStatus,
    };

    await userCollection.insertOne(user);
  
    return user;
}

function addProduct(product) {
    productCollection.insertOne(product);
}

function getProducts() {
    const query = {};
    const options = {
        sort: { id: -1},
        limit: 10,
    };
    const cursor = productCollection.find(query, options);
    return cursor.toArray();
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    getProducts,
    addProduct,
};