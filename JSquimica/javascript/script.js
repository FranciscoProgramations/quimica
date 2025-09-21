perguntas = [
    {
        pergunta: "Não sei o que não sei o que lá?",
        respostas: [
            {texto: "Opção 1", trueorfalse: false},
            { texto: "Opção 2", trueorfalse: false},
            {texto: "Opção 3", trueorfalse: false},
            {texto: "Opção 4", trueorfalse: false},
            {texto: "Opção 5", trueorfalse: true},
        ]
    },
    {
        pergunta: "Sei o que não sei o que lá?",
        respostas: [
            { texto: "Opção 1", trueorfalse: false},
            {texto: "Opção 2", trueorfalse: true},
            {texto: "Opção 3", trueorfalse: false},
            {texto: "Opção 4", trueorfalse: false},
            {texto: "Opção 5", trueorfalse: false},
        ]
    }
]

perguntaElemento = document.getElementById("pergunta");
opcaoElemento = document.getElementById("button");
proximoElemento = document.getElementById("proximo");

let perguntaNo = 0;
let acerto = 0;
