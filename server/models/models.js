const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'USER',
  },
});

const Basket = sequelize.define('basket', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
});

const BasketDevice = sequelize.define('basket_device', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
});

const Device = sequelize.define('device', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const TypeDevice = sequelize.define('type_device', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

const BrandDevice = sequelize.define('brand_device', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

const Rating = sequelize.define('rating', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const DeviceInfo = sequelize.define('device_info', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// промежуточная таблица для связи много ко многим
const TypeBrand = sequelize.define('type_brand', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  }
});

User.hasOne(Basket); // 1 к 1 - для 1 юзера 1 корзина
Basket.belongsTo(User); // корзина принадлежит пользователю

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

TypeDevice.hasMany(Device);
Device.belongsTo(TypeDevice);

BrandDevice.hasMany(Device);
Device.belongsTo(BrandDevice);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo);
DeviceInfo.belongsTo(Device);

TypeDevice.belongsToMany(BrandDevice, { through: TypeBrand });
BrandDevice.belongsToMany(TypeDevice, { through: TypeBrand });

module.exports = {
  User,
  Basket,
  BasketDevice,
  Device,
  TypeDevice,
  BrandDevice,
  Rating,
  DeviceInfo,
  TypeBrand,
};
