const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Object.keys(db).forEach(async (model) => {
//   try {
//     await db[model].sync();
//     const [results] = await sequelize.query(`describe ${model}`);
//     const schema = results.map((r) => ({
//       Field: r.Field, Type: r.Type, Null: r.Null, Key: r.Key, Default: r.Default, Extra: r.Extra,
//     }));
//     console.log(model);
//     console.table(schema);
//   } catch (error) {
//     console.error(error);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
