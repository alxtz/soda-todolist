import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm'
import { Comment } from './Comment'

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  is_complete: boolean

  @Column()
  is_favorite: boolean

  @Column()
  content: string

  @OneToMany(type => Comment, comment => comment.todo)
  comments: Comment[]
}
