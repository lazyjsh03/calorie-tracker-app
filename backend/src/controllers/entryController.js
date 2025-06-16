// src/controllers/entryController.js

const pool = require("../config/database");

// 모든 음식 기록 가져오기
exports.getAllEntries = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM food_entries ORDER BY eaten_at DESC"
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error occurred" });
  }
};

// 새로운 음식 기록 생성하기
exports.createEntry = async (req, res) => {
  // 요청 본문(body)에서 데이터 추출
  const {
    food_name,
    calories,
    carbs_g,
    protein_g,
    fat_g,
    fiber_g,
    meal_type,
    eaten_at,
  } = req.body;

  // 필수 항목 검증 (간단한 예시)
  if (!food_name || calories === undefined) {
    return res
      .status(400)
      .json({ error: "food_name and calories are required" });
  }

  try {
    const query = `
      INSERT INTO food_entries 
        (food_name, calories, carbs_g, protein_g, fat_g, fiber_g, meal_type, eaten_at) 
      VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *;
    `;
    // RETURNING * : 방금 생성된 행의 모든 데이터를 반환해달라는 구문

    const values = [
      food_name,
      calories,
      carbs_g,
      protein_g,
      fat_g,
      fiber_g,
      meal_type,
      eaten_at || new Date(), // eaten_at이 없으면 현재 시간으로
    ];

    const result = await pool.query(query, values);
    // 201 Created: 리소스가 성공적으로 생성되었음을 의미
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error occurred" });
  }
};
