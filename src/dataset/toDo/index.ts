import { DataTypes } from 'sequelize';
import { sequelize } from '../database';

export const ToDo = sequelize.define('ToDo', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
})

export const createTodo = async (title: string): Promise<any> => {
  return await ToDo.create({ title });
}

export const listTodos = async (filter?: {completed: boolean}): Promise<any[]> => {
  return await ToDo.findAll(filter && Object.keys(filter).length ? {where: filter}: undefined);
}

export const updateTodo = async (
    id: number,
    { completed } : {completed: boolean}
  ): Promise<any | null> => {
  const numRows = await ToDo.update(
    { completed },
    {
      where: { id }
    }
  );
  return numRows > 0;
}

export const deleteTodo = async (id: number): Promise<boolean> => {
  const numRows = await ToDo.destroy({
    where: { id },
  });
  return numRows > 0;
}
