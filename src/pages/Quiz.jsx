import { useState } from "react";
import { motion } from "framer-motion";
import { quizData } from "../data/quizData";
import InfoForm from "../components/InfoForm";
import { Link } from "react-router-dom";
import useQuizTimer from "../utils/useQuizTimer";
import { getRandomQuestions } from "../utils/getRandomQuestion";
import { b } from "framer-motion/client";

// Lấy ngẫu nhiên 15 câu hỏi từ quizData
const quizDataRandom = getRandomQuestions(quizData, 15);

export default function Quiz() {
  const [info, setInfo] = useState({ name: "", score: 0, time: 0 });
  const [isStarted, setIsStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const question = quizDataRandom[current];
  const { seconds, formatTime, setSeconds } = useQuizTimer(isStarted);

  const shakeAnimation = {
    x: [0, -8, 8, -6, 6, -4, 4, 0],
    transition: { duration: 0.4 },
  };

  const handleAnswer = (value) => {
    let isCorrect = false;

    if (question.type === "mcq" || question.type === "truefalse") {
      isCorrect = value === question.answer;
    } else if (question.type === "fillblank") {
      isCorrect = value.trim().toLowerCase() === question.answer.toLowerCase();
    }

    if (isCorrect) {
      setScore(score + 1);
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }

    setTimeout(() => {
      if (current + 1 < quizDataRandom.length) {
        setCurrent((prev) => prev + 1);
        setSelected("");
        setFeedback(null);
      } else {
        setFinished(true);
        setInfo({
          ...info,
          score: score + (isCorrect ? 1 : 0),
          time: formatTime(),
        });
        // Gọi API lưu điểm ở đây
      }
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#8B0000] mb-6 font-sans">
        Quiz kiến thức Mác Lê Nin
      </h2>
      <div className="mb-4 text-lg font-sans">
        <span className="mr-6">
          Thời gian: {finished ? info.time : formatTime()}
        </span>
        <span className="mr-6">
          Câu hỏi: {current + 1}/{quizDataRandom.length}
        </span>
        <span className="mr-6">
          Diểm: {score}/{quizDataRandom.length}
        </span>
      </div>

      {!isStarted ? (
        <InfoForm
          userInfo={info}
          setUserInfo={setInfo}
          setIsStarted={setIsStarted}
        />
      ) : !finished ? (
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
        >
          <p className="text-lg font-sans mb-4">{`Câu ${current + 1}: ${
            question.question
          }`}</p>

          {/* Multiple Choice */}
          {question.type === "mcq" && (
            <div className="grid grid-cols-2 gap-3">
              {question.options.map((opt, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    selected === opt
                      ? feedback === "correct"
                        ? "bg-green-500 text-white"
                        : feedback === "wrong"
                        ? "bg-red-500 text-white"
                        : "bg-[#FFD700] text-black font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setSelected(opt);
                    handleAnswer(opt);
                  }}
                  disabled={!!feedback}
                  animate={feedback === "wrong" ? shakeAnimation : {}}
                >
                  {opt}
                </motion.button>
              ))}
            </div>
          )}

          {/* True / False */}
          {question.type === "truefalse" && (
            <div className="grid grid-cols-2 gap-3">
              {["True", "False"].map((val) => (
                <motion.button
                  key={val}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-lg border ${
                    selected === val
                      ? feedback === "correct"
                        ? "bg-green-500 text-white"
                        : feedback === "wrong"
                        ? "bg-red-500 text-white"
                        : "bg-[#FFD700] text-black font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setSelected(val);
                    handleAnswer(val);
                  }}
                  disabled={!!feedback}
                  animate={feedback === "wrong" ? shakeAnimation : {}}
                >
                  {val}
                </motion.button>
              ))}
            </div>
          )}

          {/* Fill in the blank */}
          {question.type === "fillblank" && (
            <div className="mt-4">
              <motion.input
                type="text"
                className={`border px-3 py-2 rounded-lg w-full transition-colors duration-300
                            ${
                              feedback === "correct"
                                ? "border-green-500 bg-green-100"
                                : ""
                            }
                            ${
                              feedback === "wrong"
                                ? "border-red-500 bg-red-100"
                                : ""
                            }
                          `}
                placeholder="Nhập câu trả lời..."
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                disabled={!!feedback}
                animate={feedback === "wrong" ? shakeAnimation : {}}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 px-6 py-2 bg-[#FFD700] text-black font-semibold rounded-lg shadow"
                onClick={() => handleAnswer(selected)}
              >
                Trả lời
              </motion.button>
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-[#8B0000] mb-4">
            Bảng xếp hạng
          </h3>

          {/* data để test - sau này thay bằng API */}
          {[
            {
              id: 1,
              name: "Nguyễn Văn A",
              score: 14,
              total: quizDataRandom.length,
              time: "00:02:30",
            },
            {
              id: 2,
              name: "Trần Thị B",
              score: 12,
              total: quizDataRandom.length,
              time: "00:03:10",
            },
            {
              id: 3,
              name: "Lê Văn C",
              score: 10,
              total: quizDataRandom.length,
              time: "00:04:00",
            },
            {
              id: 4,
              name: info.name,
              score: info.score,
              total: quizDataRandom.length,
              time: info.time,
            }, // người chơi hiện tại
          ].map((player, idx) => (
            <div
              key={player.id}
              className={`flex justify-between items-center p-3 mb-2 rounded-lg ${
                player.name === info.name
                  ? "bg-[#FFD700] text-black font-semibold"
                  : "bg-gray-100"
              }`}
            >
              <span>
                {idx + 1}. {player.name}
              </span>
              <span>
                {player.score}/{player.total}
              </span>
              <span>{player.time}</span>
            </div>
          ))}

          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-2 bg-[#FFD700] text-black font-semibold rounded-lg shadow"
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setFinished(false);
                setSelected("");
              }}
            >
              Về trang chủ
            </motion.button>
          </Link>
        </motion.div>
      )}
      {/*Sẽ được thay thế bới scoreboard khi có api */}
    </div>
  );
}
