import Sequelize from 'sequelize';
 
const sequelize = new Sequelize('SMVO', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

module.export = sequelize;
