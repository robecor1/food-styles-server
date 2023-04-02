import { Sequelize } from 'sequelize';
import {DATABASE_FILE_NAME} from '../../../env'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: DATABASE_FILE_NAME,
});