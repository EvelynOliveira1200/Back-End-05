const filmesMarcantes = [
    {
        id: 1001,
        titulo: "Bad Boys",
        genero: "Ação",
        emCartaz: false,
    },
    {
        id: 1002,
        titulo: "Deadpool & Wolverine",
        genero: "Ação",
        emCartaz: true,
    },
    {
        id: 1003,
        titulo: "É assim que acaba",
        genero: "Romance",
        emCartaz: true,
    }
]

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})