import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm'
import { Todo } from './Todo'

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

  // NOTE: typeorm by default creates this camelcase id reference, need some addtional config to make it todo_id
  @Column()
  todoId: number

  @ManyToOne(type => Todo, todo => todo.comments, {
    onDelete: 'CASCADE',
  })
  todo: Todo
}
