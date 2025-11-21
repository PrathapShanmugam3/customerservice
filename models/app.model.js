module.exports = (sequelize, Sequelize) => {
  const App = sequelize.define("app", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return App;
};
