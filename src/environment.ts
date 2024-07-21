import dotenv from 'dotenv'

dotenv.config({
    path: '.env.development',
})

export const PORT = process.env.PORT;