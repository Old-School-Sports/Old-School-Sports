'use strict';
module.exports = function(sequelize, DataTypes) {
  var Data = sequelize.define('Data', {
    t1: DataTypes.TEXT,
    a1: DataTypes.TEXT,
    t2: DataTypes.TEXT,
    a2: DataTypes.TEXT,
    t3: DataTypes.TEXT,
    a3: DataTypes.TEXT,
    t4: DataTypes.TEXT,
    a4: DataTypes.TEXT,
    t5: DataTypes.TEXT,
    a5: DataTypes.TEXT,
    t6: DataTypes.TEXT,
    a6: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Data;
};