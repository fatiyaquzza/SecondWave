import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
    vine.object({
      fullName: vine.string().maxLength(100),
      email: vine.string().email().normalizeEmail(),
      password: vine.string().minLength(8),
      role: vine.enum(['Buyer', 'Seller']),
      address: vine.string().maxLength(500),
    })
  )

  export const loginValidator = vine.compile(
    vine.object({
      email: vine.string().email().normalizeEmail(),
      password: vine.string(),
      role: vine.enum(['Buyer', 'Seller']), // Add role validation
    })
  )