import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(() =>
        console.log(
          `Connected to MongoDB ${mongoose.connection.host}`.bgGreen.yellow
            .underline
        )
      )
  } catch (err) {
    console.log(`${err}`.bgRed.yellow.underline)
  }
}
