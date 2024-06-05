import app from './app'

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server ir running on PORT: ${PORT}`)
})