import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('product_name').notNullable(); // Kolom untuk menyimpan nama produk, tidak boleh kosong
      table.text('product_description').notNullable();; // Kolom untuk menyimpan deskripsi produk
      table.string('gender', 10).notNullable();; // Kolom untuk menyimpan jenis kelamin produk
      table.string('product_size').notNullable(); // Kolom untuk menyimpan ukuran produk, tidak boleh kosong
      table.decimal('pricing', 10, 2).notNullable(); // Kolom untuk menyimpan harga produk dengan dua digit desimal
      table.string('image_url').notNullable();; // Kolom untuk menyimpan URL gambar produk setelah diunggah
      table.string('category').notNullable();
      table.string('duration').notNullable();


      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}