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
    a6: DataTypes.TEXT,
    t7: DataTypes.TEXT,
    a7: DataTypes.TEXT,
    t8: DataTypes.TEXT,
    a8: DataTypes.TEXT,
    t9: DataTypes.TEXT,
    a9: DataTypes.TEXT,
    t10: DataTypes.TEXT,
    a10: DataTypes.TEXT,
    t11: DataTypes.TEXT,
    a11: DataTypes.TEXT,
    t12: DataTypes.TEXT,
    a12: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Data;
};