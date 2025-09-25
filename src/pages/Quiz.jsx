import { useState } from "react";
import { motion } from "framer-motion";
import { quizData } from "../data/quizData";
import InfoForm from "../components/InfoForm";
import { Link } from "react-router-dom";
import useQuizTimer from "../utils/useQuizTimer";

export default function Quiz() {
  const [info, setInfo] = useState({ name: "", score: 0, time: 0 });
  const [isStarted, setIsStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizData[current];
  const { seconds, formatTime, setSeconds } = useQuizTimer(isStarted);

  const handleAnswer = (value) => {
    let isCorrect = false;

    if (question.type === "mcq" || question.type === "truefalse") {
      isCorrect = value === question.answer;
    } else if (question.type === "fillblank") {
      isCorrect = value.trim().toLowerCase() === question.answer.toLowerCase();
    }

    if (isCorrect) {
      setScore(score + 1);
    }

    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
      setSelected("");
    } else {
      setFinished(true);
      setInfo({ ...info, score: score, time: formatTime() });
      // Gọi API để lưu điểm
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#8B0000] mb-6 font-sans">
        Quiz kiến thức Mác Lê Nin
      </h2>
      <div className="mb-4 text-lg font-sans">
        <span className="mr-6">Thời gian: {finished ? info.time : formatTime()}</span>
        <span className="mr-6">Câu hỏi: {current + 1}/{quizData.length}</span>
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
                      ? "bg-[#FFD700] text-black font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setSelected(opt);
                    handleAnswer(opt);
                  }}
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
                      ? "bg-[#FFD700] text-black font-semibold"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setSelected(val);
                    handleAnswer(val);
                  }}
                >
                  {val}
                </motion.button>
              ))}
            </div>
          )}

          {/* Fill in the blank */}
          {question.type === "fillblank" && (
            <div className="mt-4">
              <input
                type="text"
                className="border px-3 py-2 rounded-lg w-full"
                placeholder="Nhập câu trả lời..."
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
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
            { id: 1, name: "Nguyễn Văn A", score: 14, total: quizData.length, time: "00:02:30" },
            { id: 2, name: "Trần Thị B", score: 12, total: quizData.length, time: "00:03:10" },
            { id: 3, name: "Lê Văn C", score: 10, total: quizData.length, time: "00:04:00" },
            { id: 4, name: info.name, score: info.score, total: quizData.length, time: info.time }, // người chơi hiện tại
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
              <span>
                {player.time}
              </span>
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
