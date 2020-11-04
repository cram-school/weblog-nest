import { Injectable } from "@nestjs/common";
const path = require("path") 

export default class DbConfig {
  constructor() {
    return {
      type: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.ACCOUNT,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      charset: 'utf8mb4',
      entities: [path.resolve(__dirname, '../entity/*.entity.*')],
      synchronize: true,
      logging: true,
    }
  }
}