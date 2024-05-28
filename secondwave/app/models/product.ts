import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare product_name: string

  @column()
  declare product_description: string

  @column()
  declare gender: string

  @column()
  declare product_size: string

  @column()
  declare pricing: number

  @column()
  declare image_url: string

  @column()
  declare category: string

  @column()
  declare duration: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime | null
}
