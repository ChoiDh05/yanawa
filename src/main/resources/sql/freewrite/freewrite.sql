CREATE TABLE TBL_FREEWRITE (
                               POST_ID NUMBER PRIMARY KEY,
                               POST_READ_COUNT NUMBER DEFAULT 0,
                               REPLY_COUNT NUMBER DEFAULT 0,
                               USER_ID NUMBER NOT NULL,
                               CREATED_DATE DATE DEFAULT CURRENT_TIMESTAMP,
                               UPDATED_DATE DATE DEFAULT CURRENT_TIMESTAMP,
                               CONSTRAINT FK_FREEWRITE_POST FOREIGN KEY(POST_ID)
                                   REFERENCES TBL_POST(ID),
                               CONSTRAINT FK_FREEWRITE_USER FOREIGN KEY (USER_ID)
                                   REFERENCES TBL_USER(ID)
);

SELECT * FROM TBL_FREEWRITE ORDER BY CREATED_DATE DESC;
CREATE SEQUENCE SEQ_FREEWRITE;
DROP TABLE TBL_FREEWRITE;
DROP SEQUENCE SEQ_FREEWRITE;
DROP TABLE TBL_POST;


SELECT
    f.POST_ID,
    p.POST_TITLE,
    p.POST_CONTENT,
    u.USER_NICKNAME,
    f.POST_READ_COUNT,
    f.REPLY_COUNT,
    f.CREATED_DATE,
    f.UPDATED_DATE
FROM
    TBL_FREEWRITE f
        JOIN TBL_POST p ON f.POST_ID = p.ID
        JOIN TBL_USER u ON f.USER_ID = u.ID
WHERE
    p.TYPE = 1 -- FREEWRITE만 가져오기 위한 조건
ORDER BY
    f.CREATED_DATE DESC;

SELECT * FROM TBL_FREEWRITE;



SELECT * FROM TBL_POST WHERE TYPE = 1;

SELECT f.POST_ID, p.ID, p.TYPE
FROM TBL_FREEWRITE f
         LEFT JOIN TBL_POST p ON f.POST_ID = p.ID
WHERE p.ID IS NULL;


SELECT * FROM TBL_FREEWRITE WHERE POST_ID = 6;



INSERT INTO TBL_POST (ID, POST_TITLE, POST_CONTENT, CREATED_DATE, UPDATED_DATE, TYPE)
VALUES (8, 'Test Title 8', 'Test Content 8', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO TBL_POST (ID, POST_TITLE, POST_CONTENT, CREATED_DATE, UPDATED_DATE, TYPE)
VALUES (9, 'Test Title 9', 'Test Content 9', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO TBL_POST (ID, POST_TITLE, POST_CONTENT, CREATED_DATE, UPDATED_DATE, TYPE)
VALUES (10, 'Test Title 10', 'Test Content 10', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO TBL_POST (ID, POST_TITLE, POST_CONTENT, CREATED_DATE, UPDATED_DATE, TYPE)
SELECT f.POST_ID, '자동 생성 제목', '자동 생성 내용', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1
FROM TBL_FREEWRITE f
         LEFT JOIN TBL_POST p ON f.POST_ID = p.ID
WHERE p.ID IS NULL;
