const express = require("express");
const cors = require("cors");
const pool = require("./config/database");
require("dotenv").config(); // .env 파일의 환경변수 가져옴

const app = express();

// 데이터베이스 연결 테스트
const testDbConnection = async () => {
  try {
    const res = await pool.query("SELECT NOW()"); // 현재 시간 쿼리
    console.log("✅ 데이터베이스 연결 성공. 시간: ", res.rows[0].now);
  } catch (err) {
    console.error("❌ 데이터베이스 연결 실패: ", err.stack);
  }
};

testDbConnection();

// 미들웨어 설정
app.use(cors()); // cors 허용
app.use(express.json()); // 요청 본문(body)을 JSON 형태로 파싱

// 기본 라우트 - API 서버가 살아있는지 확인
app.get("/", (req, res) => {
  res.json({ message: "칼로리 계산 백엔드 서버" });
});

// 포트 설정
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중`);
});
