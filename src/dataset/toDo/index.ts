import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

export class Todo extends Model {
  public id!: number;
  public title!: string;
  public completed!: boolean;

  static async createTodo(
    title: string,
    completed: boolean
  ): Promise<Todo> {
    return await Todo.create({ title, completed });
  }

  static async updateTodo(
    id: number,
    completed: boolean
  ): Promise<Todo | null> {
    const [numRows, [updatedTodo]] = await Todo.update(
      { completed },
      {
        where: { id },
        returning: true,
      }
    );
    return numRows === 0 ? null : updatedTodo;
  }

  async deleteTodo(id: number): Promise<boolean> {
    const numRows = await Todo.destroy({
      where: { id },
    });
    return numRows > 0;
  }

  async listTodos(filter: {completed: boolean}): Promise<Todo[]> {
    return await Todo.findAll(Object.keys(filter) ? {where: filter}: undefined);
  }

}

Todo.init(
  {
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
  },
  {
    sequelize,
    tableName: 'todos',
  }
);
