import type { HttpContext } from '@adonisjs/core/http'
import Product from '../models/product.js'

export default class ProductsController {

  async store({ request, response }: HttpContext) {
    try {
      // Mendapatkan data yang dikirim dari form
      const data = request.only(['product_name', 'product_description', 'gender', 'product_size', 'pricing', 'category', 'duration'])
      // const image = request.file('image_url', {
      //   extnames: ['jpg', 'jpeg', 'png'], // Tentukan ekstensi file yang diizinkan
      //   size: '2mb'
      // })!
  
      // if (!image) {
      //   return response.status(400).send('No image uploaded') // Melempar kesalahan jika tidak ada file gambar yang diunggah
      // }
  
      // await image.move('resources/images', {
      //   name: `${cuid()}.${image.extname}`,
      //   overwrite: true
      // })
  
      // if (!image) {
      //   throw new Error('Failed to move uploaded image')
      // }
  
      // Simpan path file gambar ke dalam data produk setelah dipindahkan
      // const data = {
      //   ...requestData,
      //   image_url: image.fileName
      // }
  
      // Buat entri baru di database
      await Product.create(data)
  
      // Redirect ke halaman yang sesuai
      return response.redirect('/dashboard')
    } catch (error) {
      console.error('Error:', error)
      // Tangani kesalahan jika terjadi
      return response.status(500).send('Failed to store product')
    }
  }

  public async index({ view }: HttpContext) {
    try {
      // Ambil data produk dengan hanya memilih kolom yang dibutuhkan
      const products = await Product.query().select('product_name', 'category')

      // Kirim data produk ke view untuk ditampilkan
      return view.render('pages/admin/dashboard', { products })
    } catch (error) {
      console.error('Error:', error)
    }
  }

public async belanja({ view }: HttpContext) {
  try {
    // Ambil data produk dengan hanya memilih kolom yang dibutuhkan dan mengelompokkannya berdasarkan kategori
    const products = await Product.query().select('id','product_name', 'pricing', 'category')
      .orderBy('category')
      .orderBy('created_at', 'desc')
      .groupBy('category') // Mengelompokkan berdasarkan kategori
      .exec()
    // Kirim data produk ke view untuk ditampilkan

    return view.render('pages/home', { products })
  } catch (error) {
    console.error('Error:', error)
  }
}

public async semua({ view }: HttpContext) {
  try {
    const products = await Product.all();
    return view.render('pages/all', { products })
  } catch (error) {
    console.error('Error:', error)
  }
}

async detail({ params, view }: HttpContext) {
    const product = await Product.find(params.id)
    return view.render('pages/detail', { product : product })
}
  
}