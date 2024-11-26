const questions = [
    {
      question: "Turunan aljabar mengacu pada:",
      options: [
        "Proses mencari kemiringan garis singgung pada grafik fungsi aljabar di titik tertentu.",
        "Proses untuk menghitung nilai rata-rata fungsi polinomial.",
        "Operasi untuk mencari integral dari fungsi aljabar.",
        "Proses menentukan hasil bagi antara dua fungsi aljabar.",
      ],
      correctAnswer:
        "Proses mencari kemiringan garis singgung pada grafik fungsi aljabar di titik tertentu.",
    },
    {
      question:
        "Apa yang terjadi pada turunan ln(𝑥) saat 𝑥 mendekati 0?",
      options: [
        "Turunan akan mendekati 0",
        "P Turunan akan mendekati tak terhingga",
        "Turunan akan mendekati 1",
        "Turunan tidak terdefinisi",
      ],
      correctAnswer:
        "Turunan tidak terdefinisi",
    },
    {
      question:
        "Apa yang dimaksud dengan turunan dari fungsi logaritma?",
      options: [
        "Laju perubahan fungsi logaritma terhadap perubahan variabelnya",
        "Nilai fungsi logaritma itu sendiri",
        "Fungsi turunan logaritma tidak ada",
        "Fungsi turunan logaritma tidak ada",
      ],
      correctAnswer: "Laju perubahan fungsi logaritma terhadap perubahan variabelnya",
    },
    {
      question:
        "Diberikan fungsi f(x) = x^3 - 4x^2 + 2x - 5, berapakah turunan pertama dari fungsi tersebut?",
      options: [
        "3x^2 - 8x + 2",
        "3x^2 - 4x + 2",
        "2x^2 - 4x + 2",
        "3x^2 - 2x + 5",
      ],
      correctAnswer: "3x^2 - 8x + 2",
    },
    {
      question:
        "Diberikan fungsi f(x) = 2x^4 - 3x^3 - 5x - 1 berapakah turunan pertama dari fungsi tersebut",
      options: [
        "8x^3 - 9x^2 + 5",
        "8x^3 - 6x^2 + 5",
        "8x^3 - 9x^2 + 1",
        "8x^3 - 9x^2 + 5x",
      ],
      correctAnswer: "8x^3 - 9x^2 + 5",
    },
    {
      question: "Berapa turunan pertama dari fungsi f(x) = 5e^2x",
      options: ["10e^x", "5e^2x", "10e^2x", "2e^2x"],
      correctAnswer: "10e^2x",
    },
    {
      question: "Turunan dari fungsi polinomial f(x) = 6x^3 - 4x^2 + 3x - 2",
      options: [
        "Fungsi logaritma.",
        "Fungsi polinomial dengan pangkat lebih rendah.",
        "Fungsi eksponensial.",
        "Fungsi trigonometri.",
      ],
      correctAnswer: "Fungsi polinomial dengan pangkat lebih rendah.",
    },
    {
      question:
        "Turunan dari fungsi eksponensial f(x) = e^x, memiliki sifat yang unik. Apa yang dapat kita simpulkan tentang turunan fungsi ini?",
      options: [
        "Turunan dari e^x adalah 0",
        "Turunan dari e^x selalu berkurang seiring bertambahnya x.",
        "Turunan dari e^x adalah fungsi polinomial.",
        "Turunan dari e^x adalah e^x itu sendiri",
      ],
      correctAnswer: "Turunan dari e^x adalah e^x itu sendiri",
    },
    {
      question:
        "Diberikan fungsi f(x) = 3e^2x. Apa yang terjadi saat kita mengambil turunannya?",
      options: [
        "Turunan fungsi eksponensial akan mengalikan dengan pangkat eksponensial.",
        "Turunan fungsi eksponensial akan mengalikan dengan koefisien konstanta.",
        "Turunan fungsi eksponensial akan menghasilkan fungsi trigonometri.",
        "Turunan fungsi eksponensial tidak dapat dihitung.",
      ],
      correctAnswer:
        "Turunan fungsi eksponensial akan mengalikan dengan pangkat eksponensial.",
    },
    {
      question:
        "Diberikan fungsi polinomial f(x) = x^5 - 3x^4 + 2x^3 - x + 7, . Apa yang terjadi pada turunannya?",
      options: [
        "Turunan menghasilkan fungsi polinomial derajat lebih tinggi.",
        "Turunan menghasilkan fungsi eksponensial.",
        "Turunan menghasilkan fungsi polinomial derajat lebih rendah.",
        "Turunan menghasilkan fungsi trigonometri.",
      ],
      correctAnswer:
        "Turunan menghasilkan fungsi polinomial derajat lebih rendah.",
    },
  ];
  
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const scoreContainer = document.getElementById("score-container");
  const scoreText = document.getElementById("score");
  const remarkText = document.getElementById("remark");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    showQuestion(currentQuestionIndex);
  }
  
  function showQuestion(index) {
    const currentQuestion = questions[index];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
  
    for (const option of currentQuestion.options) {
      const button = document.createElement("button");
      button.textContent = option;
      button.setAttribute("onclick", "checkAnswer(this)");
      optionsContainer.appendChild(button);
    }
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;
  
    if (selectedOption.textContent === correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion(currentQuestionIndex);
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    scoreText.textContent = `Score Kamu: ${score}/${questions.length}`;
  
    if (score < 3) {
      remarkText.textContent = "Score masih Kecil, Ayo Coba Lagi!!";
    } else if (score >= 3 && score < 5) {
      remarkText.textContent = "Ada Peningkatan, Jangan Menyerah!!";
    } else if (score >= 5 && score < 7) {
      remarkText.textContent = "Wiih Lumayann, Ayoo Tingkatin!!";
    } else if (score >= 7 && score < 9) {
      remarkText.textContent = "Sudah Baguss!! GoodJoob";
    } else if (score === 10) {
      remarkText.textContent = "Jago Banget!!, Puhh Sepuhh!!";
    }
  
    scoreContainer.style.display = "block";
    questionText.style.display = "none";
    optionsContainer.style.display = "none";
  }
  
  startQuiz();
  