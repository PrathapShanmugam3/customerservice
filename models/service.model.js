module.exports = (sequelize, Sequelize) => {
  const Service = sequelize.define("services", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    }
  });

  return Service;
};
