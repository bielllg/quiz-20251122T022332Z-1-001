const questions = [
    {
        question: "1/15: Qual é o principal benefício da utilização de nanopartículas como veículos de entrega de medicamentos (drug delivery)?",
        answers: [
            { text: "Aceleração da eliminação do fármaco pelo sistema renal.", correct: false },
            { text: "Redução do custo total da terapia farmacológica.", correct: false },
            { text: "Entrega direcionada (targetted delivery) de fármacos em células específicas, como as cancerígenas.", correct: true },
            { text: "Aumento do tamanho das moléculas ativas para prolongar seu efeito.", correct: false }
        ]
    },
    {
        question: "2/15: Qual é a principal aplicação da Inteligência Artificial (IA) no processamento e análise de imagens médicas (como raios-X, TC ou RM)?",
        answers: [
            { text: "Realizar a calibração automática dos equipamentos de ressonância magnética.", correct: false },
            { text: "Diminuir a radiação ionizante durante a aquisição da imagem.", correct: false },
            { text: "Auxiliar na deteção precoce de anomalias subtis, quantificação e triagem de exames urgentes.", correct: true },
            { text: "Substituir o radiologista na emissão do diagnóstico final.", correct: false }
        ]
    },
    {
        question: "3/15: Qual termo define o processo de impressão 3D que utiliza 'bioink' (células vivas e biomateriais) para construir estruturas semelhantes a tecidos ou órgãos?",
        answers: [
            { text: "Biotecnologia Sintética", correct: false },
            { text: "Engenharia de Tecidos", correct: true },
            { text: "Nanofabricação", correct: false },
            { text: "Eletrofiação", correct: false }
        ]
    },
    {
        question: "4/15: Qual avanço a tecnologia robótica oferece ao cirurgião além da filtração de tremor?",
        answers: [
            { text: "Substituição da anestesia geral pela anestesia local em procedimentos complexos.", correct: false },
            { text: "Diminuição do custo total do procedimento cirúrgico para o hospital.", correct: false },
            { text: "Redução do tempo de recuperação pós-operatório devido à maior precisão e menor invasividade.", correct: true },
            { text: "Aumento do feedback tátil para uma sensação mais realista do tecido.", correct: false }
        ]
    },
    {
        question: "5/15: A telemedicina 'store-and-forward' (armazenar e enviar) é mais adequada para qual tipo de serviço médico?",
        answers: [
            { text: "Monitorização remota contínua de sinais vitais críticos.", correct: false },
            { text: "Interpretação de imagens médicas e dermatologia para segunda opinião.", correct: true },
            { text: "Consultas psiquiátricas e psicológicas virtuais.", correct: false },
            { text: "Cirurgias de emergência realizadas remotamente.", correct: false }
        ]
    },
    {
        question: "6/15: Qual é a principal preocupação ética em relação ao 'viés algorítmico' em sistemas de IA de diagnóstico na saúde?",
        answers: [
            { text: "Resultados de diagnóstico menos precisos para grupos populacionais sub-representados nos dados de treino.", correct: true },
            { text: "O custo de energia elétrica para treinar os modelos de IA.", correct: false },
            { text: "A dificuldade de explicar a lógica de decisão do algoritmo (black-box problem).", correct: false },
            { text: "A possibilidade de o algoritmo partilhar dados sensíveis com empresas de publicidade.", correct: false }
        ]
    },
    {
        question: "7/15: A impressão 3D de modelos anatómicos específicos de pacientes (Patient-Specific Models) é mais valiosa para qual finalidade cirúrgica?",
        answers: [
            { text: "Auxiliar na prescrição de medicamentos pós-operatórios.", correct: false },
            { text: "Praticar procedimentos complexos antes da cirurgia real e planejar a abordagem ideal.", correct: true },
            { text: "Monitorar a recuperação do paciente remotamente após a alta.", correct: false },
            { text: "Criar próteses definitivas para substituição óssea.", correct: false }
        ]
    },
    {
        question: "8/15: O que são nanobots na medicina, e qual é o seu objetivo futuro mais discutido?",
        answers: [
            { text: "São medicamentos biológicos que atuam a nível celular.", correct: false },
            { text: "São minúsculas máquinas capazes de navegar no corpo para diagnóstico e tratamento localizado (e.g., desobstruir artérias).", correct: true },
            { text: "São sistemas de IA que controlam robôs cirúrgicos.", correct: false },
            { text: "São membranas filtrantes utilizadas no sistema de diálise renal.", correct: false }
        ]
    },
    {
        question: "9/15: Qual é a principal barreira para a ampla adoção de serviços de telemedicina além da tecnologia (e.g., acesso à internet)?",
        answers: [
            { text: "O elevado custo dos telemóveis e tablets para os utilizadores.", correct: false },
            { text: "As questões de licenciamento médico e regulamentação entre estados ou países.", correct: true },
            { text: "A impossibilidade de prescrever medicamentos controlados por via digital.", correct: false },
            { text: "A falta de interesse dos pacientes em evitar deslocamentos.", correct: false }
        ]
    },
    {
        question: "10/15: Um sistema de monitorização remota de pacientes (RPM) que usa wearables é particularmente eficaz no tratamento de qual condição?",
        answers: [
            { text: "Lesões agudas por trauma.", correct: false },
            { text: "Infeções bacterianas agudas.", correct: false },
            { text: "Fraturas ósseas recentes.", correct: false },
            { text: "Doenças crónicas, como insuficiência cardíaca e diabetes, que requerem acompanhamento contínuo de sinais vitais.", correct: true }
        ]
    },
    {
        question: "11/15: Na robótica cirúrgica, o que o termo 'telesurgery' (telecirurgia) implica de forma única?",
        answers: [
            { text: "A transmissão de vídeo da cirurgia para fins de ensino e formação.", correct: false },
            { text: "A realização de uma cirurgia com o cirurgião operando o robô a partir de uma localização física diferente e distante do paciente.", correct: true },
            { text: "O uso de robôs menores do que 1mm para entrar em vasos sanguíneos.", correct: false },
            { text: "A capacidade de realizar a cirurgia usando apenas comandos de voz e IA.", correct: false }
        ]
    },
    {
        question: "12/15: Qual é a principal aplicação da nanotecnologia na imagiologia e diagnóstico médico?",
        answers: [
            { text: "Aumento do tempo de exposição do paciente à radiação.", correct: false },
            { text: "Uso de nanosensores para deteção ultra-sensível de biomarcadores de doença em fluidos corporais.", correct: true },
            { text: "Produção de contrastes de ressonância magnética com maior toxicidade.", correct: false },
            { text: "Substituição total da biópsia pela análise de sangue.", correct: false }
        ]
    },
    {
        question: "13/15: O que a IA generativa, como grandes modelos de linguagem (LLMs), pode oferecer à telemedicina?",
        answers: [
            { text: "Sumarização automática de consultas, geração de notas clínicas e assistência à codificação médica.", correct: true },
            { text: "Geração de novos medicamentos a partir de interações de pacientes.", correct: false },
            { text: "Criação de cirurgias robóticas personalizadas e totalmente autónomas.", correct: false },
            { text: "Deteção de feixes de radiação X em exames de imagem.", correct: false }
        ]
    },
    {
        question: "14/15: Qual é um dos principais desafios técnicos da robótica médica na cirurgia minimamente invasiva?",
        answers: [
            { text: "A falta de precisão dos braços robóticos, que são menos estáveis que a mão humana.", correct: false },
            { text: "A complexidade de fornecer uma pinça com sensibilidade tátil (feedback de força) que se assemelhe à mão humana.", correct: true },
            { text: "O elevado volume de sangue perdido durante o procedimento.", correct: false },
            { text: "A impossibilidade de realizar incisões em órgãos moles.", correct: false }
        ]
    },
    {
        question: "15/15: A impressão 3D de 'scaffolds' (arcabouços) porosos e biocompatíveis é fundamental para qual objetivo na Engenharia de Tecidos?",
        answers: [
            { text: "Construir cápsulas de nanotecnologia para entrega de medicamentos.", correct: false },
            { text: "Imprimir modelos anatómicos rígidos para treino cirúrgico.", correct: false },
            { text: "Fornecer uma estrutura temporária para que as células migrem, proliferem e formem novo tecido.", correct: true },
            { text: "Criar invólucros à prova de choque para equipamentos médicos.", correct: false }
        ]
    }
];
// Elementos do DOM (mantidos iguais à versão anterior)
const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const quizContainer = document.getElementById('question-container');
const restartButton = document.getElementById('restart-button');
const scoreDisplay = document.getElementById('score-display');
const totalQuestionsDisplay = document.getElementById('total-questions-display');
const currentQNumber = document.getElementById('current-q-number');
const saveScoreBtn = document.getElementById('save-score-btn');
const playerNameInput = document.getElementById('player-name');

let currentQuestionIndex = 0;
let score = 0;

startQuiz();

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    nextButton.textContent = 'Próxima Pergunta';
    nextButton.classList.remove('hide');
    quizContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    totalQuestionsDisplay.textContent = questions.length;
    
    // Reseta o estado dos resultados
    playerNameInput.value = '';
    saveScoreBtn.disabled = false;
    saveScoreBtn.textContent = 'Salvar Pontuação';
    
    showQuestion();
}

function showQuestion() {
    // Lógica para mostrar a pergunta atual e criar botões (igual à versão anterior)
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    
    currentQNumber.textContent = currentQuestionIndex + 1;
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = 'Ver Meu Desempenho';
    } else {
        nextButton.textContent = 'Próxima Pergunta';
    }
}

function resetState() {
    // Lógica para limpar botões e desabilitar o Próximo (igual à versão anterior)
    nextButton.disabled = true;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    // Lógica para verificar a resposta e dar feedback visual (igual à versão anterior)
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    if (isCorrect) {
        score++;
    } else {
        selectedButton.classList.add('wrong'); 
    }

    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    // Lógica de avanço para próxima pergunta ou resultados (igual à versão anterior)
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
});

restartButton.addEventListener('click', startQuiz);

function showResults() {
    // Lógica para exibir a tela de resultados (igual à versão anterior)
    quizContainer.classList.add('hide');
    nextButton.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreDisplay.textContent = score;
}

// *** Lógica de SALVAR PONTUAÇÃO (Para o futuro Backend/SQL) ***
saveScoreBtn.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();

    if (playerName.length === 0) {
        alert("Por favor, digite seu nome para salvar a pontuação!");
        return;
    }

    // AQUI ENTRARIA A CHAMADA AO BACKEND (SERVIDOR) COM 'fetch()'
    // O servidor receberia o nome e a pontuação e executaria o INSERT SQL.
    
    /*
    const scoreData = {
        name: playerName,
        score: score,
        total: questions.length
    };
    
    fetch('/api/save-score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(scoreData),
    })
    .then(response => response.json())
    .then(data => {
        // Exemplo de feedback:
        saveScoreBtn.textContent = "Pontuação Salva! (Emular)"; 
        saveScoreBtn.disabled = true;
    })
    .catch(error => {
        console.error('Erro ao salvar no banco:', error);
        saveScoreBtn.textContent = "Erro ao Salvar!";
    });
    */

    // Simulação de salvamento
    console.log(`Simulando salvamento: ${playerName} fez ${score}/${questions.length}`);
    saveScoreBtn.textContent = "Pontuação Salva!"; 
    saveScoreBtn.disabled = true;
});