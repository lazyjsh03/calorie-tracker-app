# 칼로리 계산 앱(MVP)

음식 사진을 통해 해당 음식의 칼로리, 영양 정보를 계산, 기록하는 앱

# 기능

- 음식 사진 인식
- 사진 속 음식의 종류, 양 판별
- 영양소 및 칼로리 추론, 계산
- 기록

# 데이터베이스 스키마

| 스키마      | 데이터타입  | 비고                                    |
| ----------- | ----------- | --------------------------------------- |
| ID          | 시그널 넘버 | 음식의 고유 번호                        |
| 음식 이름   | 문자열      | 음식의 이름                             |
| 칼로리      | 정수        | 음식의 총 칼로리                        |
| 탄수화물 양 | 정수        | 음식에 포함되어있는 탄수화물의 양       |
| 단백질 양   | 정수        | 음식에 포함되어있는 단백질의 양         |
| 지방 양     | 정수        | 음식에 포함되어있는 지방의 양           |
| 섬유질 양   | 정수        | 음식에 포함되어있는 섬유질의 양         |
| 식사 종류   | 문자열      | 식사 종류(아침, 점심, 저녁, 야식, 간식) |
| 식사 시간   | 시간        | 식사 시간                               |
| 이미지 주소 | 문자열      | 이미지의 주소                           |
| 기록 시간   | 시간        | 데이터베이스에 기록된 시간              |
