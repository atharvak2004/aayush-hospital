import pool from "./db";

export async function initializeDatabase() {
  const connection = await pool.getConnection();

  try {
    // Categories
    await connection.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        slug VARCHAR(120) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Authors
    await connection.query(`
      CREATE TABLE IF NOT EXISTS authors (
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        designation VARCHAR(150),
        image VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    await connection.query(`
CREATE TABLE IF NOT EXISTS admins (

    id BIGINT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(150) NOT NULL,

    email VARCHAR(255) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    role ENUM('admin','super_admin') DEFAULT 'admin',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
`);
    // Blogs
    await connection.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id BIGINT AUTO_INCREMENT PRIMARY KEY,

        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,

        excerpt TEXT,

        content LONGTEXT NOT NULL,

        thumbnail VARCHAR(500),

        meta_title VARCHAR(255),
        meta_description TEXT,

        category_id BIGINT,
        author_id BIGINT,

        reading_time INT DEFAULT 0,

        featured BOOLEAN DEFAULT FALSE,

        views INT DEFAULT 0,

        status ENUM('draft','published') DEFAULT 'draft',

        published_at DATETIME NULL,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          ON UPDATE CURRENT_TIMESTAMP,

        FOREIGN KEY (category_id)
          REFERENCES categories(id)
          ON DELETE SET NULL,

        FOREIGN KEY (author_id)
          REFERENCES authors(id)
          ON DELETE SET NULL
      );
    `);

    // Tags
    await connection.query(`
      CREATE TABLE IF NOT EXISTS tags (
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        slug VARCHAR(120) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Blog Tags
    await connection.query(`
      CREATE TABLE IF NOT EXISTS blog_tags (
        blog_id BIGINT NOT NULL,
        tag_id BIGINT NOT NULL,

        PRIMARY KEY (blog_id, tag_id),

        FOREIGN KEY (blog_id)
          REFERENCES blogs(id)
          ON DELETE CASCADE,

        FOREIGN KEY (tag_id)
          REFERENCES tags(id)
          ON DELETE CASCADE
      );
    `);
    await connection.query(`
  CREATE TABLE IF NOT EXISTS contacts (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(30),
    message TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`);
  } finally {
    connection.release();
  }
}
