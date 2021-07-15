CREATE TABLE "user" (
	user_id TEXT NOT NULL PRIMARY KEY,
	password TEXT NOT NULL,
	name TEXT NOT NULL,
	about_me TEXT,
	joined DATE NOT NULL,
	isActivate BOOL NOT NULL
);

CREATE TABLE texte (
	text_id SERIAL NOT NULL PRIMARY KEY,
	user_id TEXT NOT NULL,
	title TEXT NOT NULL,
	main_text TEXT NOT NULL,
	created TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE comment (
	comment_id SERIAL NOT NULL PRIMARY KEY,
	text_id INT NOT NULL,
	user_id TEXT NOT NULL,
	comment_text TEXT NOT NULL,
	created TIMESTAMPTZ DEFAULT now()
);

INSERT INTO "user" (
	user_id, password, name, about_me, joined, isActivate)
VALUES ('assistant0603', '123123', '조교행님', '안녕하세요 조교행님입니다.', DATE '2013-04-13', true);

INSERT INTO "user" (
	user_id, password, name, about_me, joined, isActivate)
VALUES ('sujini', '111111', '수지니','리액트 배우고싶은 수지니에요0', DATE '2013-04-14', false);

INSERT INTO "user" (
	user_id, password, name, about_me, joined, isActivate)
VALUES ('joayo', 'joayo123', '조아요맨', '조아요~~', DATE '2013-08-21', true);

INSERT INTO "user" (
	user_id, password, name, joined, isActivate)
VALUES ('corini', '113366', '코리니', DATE '2015-12-10', true);

INSERT INTO texte (
	user_id, title, main_text)
VALUES ('assistant0603', '조교행님의 첫 글 ㅎㅎ', '안녕 얘들아 난 조교 행님이야. 우리 같이 리액트 잘 배워보자!');

INSERT INTO texte (
	user_id, title, main_text)
VALUES ('corini', '리액트... 막막하네요', '어떻게 공부해야되는지 모르겠어요. 혹시 잘 작성되어있는 커리큘럼같은게 있나요?');

INSERT INTO comment (
	text_id, user_id, comment_text)
VALUES ('1', 'sujini', '잘 부탁드려요 ㅎㅎㅎ');


INSERT INTO comment (
	text_id, user_id, comment_text)
VALUES ('1', 'joayo123', '조아요~~');

INSERT INTO comment (
	text_id, user_id, comment_text)
VALUES ('2', 'corini', '아시는 분은 댓글 부탁드려요~~');

INSERT INTO comment (
	text_id, user_id, comment_text)
VALUES ('2', 'corini', 'ㅠㅠㅠㅠㅠㅠ');

INSERT INTO comment (
	text_id, user_id, comment_text)
VALUES ('2', 'sujini', '조교행님 강의는 어떤가요?');

INSERT INTO comment (
	text_id, user_id, comment_text)
VALUES ('2', 'assistant0603', '제가 바로 조교행님입니다.');