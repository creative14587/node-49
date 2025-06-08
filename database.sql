CREATE DATABASE db_food;
USE db_food;

-- Bảng user
CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY not NULL,
    full_name VARCHAR(255),
    email VARCHAR(255),
    pass VARCHAR(255)
);

-- Bảng food_type
CREATE TABLE food_type (
    type_id INT AUTO_INCREMENT PRIMARY KEY not NULL,
    type_name VARCHAR(255)
);

-- Bảng food
CREATE TABLE food (
    food_id INT AUTO_INCREMENT PRIMARY KEY not NULL,
    food_name VARCHAR(255),
    pic VARCHAR(255),
    price FLOAT,
    info VARCHAR(255),
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES food_type(type_id)
);

-- Bảng sub_food
CREATE TABLE sub_food (
    sub_id INT AUTO_INCREMENT PRIMARY KEY not NULL,
    sub_name VARCHAR(255),
    sub_price FLOAT,
    food_id INT,
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);

-- Bảng restaurant
CREATE TABLE restaurant (
    res_id INT AUTO_INCREMENT PRIMARY KEY not NULL,
    res_name VARCHAR(255),
    picture VARCHAR(255),
    info VARCHAR(255)
);

-- Bảng order
CREATE TABLE order (
    user_id INT,
    food_id INT,
    amount INT,
    code VARCHAR(255),
    arr_sub_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);

-- Bảng rate_res (đánh giá nhà hàng)
CREATE TABLE rate_res (
    user_id INT,
    res_id INT,
    amount INT,
    date_rate DATETIME,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

-- Bảng like_res (like nhà hàng)
CREATE TABLE like_res (
    user_id INT,
    res_id INT,
    date_like DATETIME,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

-- Tìm 5 người đã like nhà hàng nhiều nhất
SELECT u.user_id, u.full_name, COUNT(l.res_id) AS like_count
FROM user u
JOIN like_res l ON u.user_id = l.user_id
GROUP BY u.user_id, u.full_name
ORDER BY like_count DESC
LIMIT 5;

-- Tìm 2 nhà hàng được like nhiều nhất
SELECT r.res_id, r.res_name, COUNT(l.user_id) AS like_count
FROM restaurant r
JOIN like_res l ON r.res_id = l.res_id
GROUP BY r.res_id, r.res_name
ORDER BY like_count DESC
LIMIT 2;

-- Tìm người đặt hàng nhiều nhất
SELECT u.user_id, u.full_name, COUNT(o.food_id) AS order_count
FROM user u
JOIN order o ON u.user_id = o.user_id
GROUP BY u.user_id, u.full_name
ORDER BY order_count DESC
LIMIT 1;

-- Tìm người dùng không hoạt động trong hệ thống
SELECT u.user_id, u.full_name
FROM user u
LEFT JOIN order o ON u.user_id = o.user_id
LEFT JOIN like_res l ON u.user_id = l.user_id
LEFT JOIN rate_res rr ON u.user_id = rr.user_id
WHERE o.user_id IS NULL AND l.user_id IS NULL AND rr.user_id IS NULL;