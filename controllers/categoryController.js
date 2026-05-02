const db = require('../db');

exports.getAllCategories = async (req, res) => {
    try {
        const [categories] = await db.query('SELECT * FROM categories');
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        await db.query('INSERT INTO categories (name) VALUES (?)', [name]);
        res.status(201).json({ message: "Category created!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
