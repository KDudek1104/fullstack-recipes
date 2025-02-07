from flask import Flask, jsonify, request
from flask_cors import CORS 
import psycopg2

app = Flask(__name__)
CORS(app)  

def get_db_connection():
    return psycopg2.connect(
        host="db",
        database="postgres",
        user="postgres",
        password="password"
    )
def get_db_connection():
    return psycopg2.connect(
        host="db",
        database="postgres",
        user="postgres",
        password="password"
    )

@app.route('/recipes', methods=['GET'])
def get_recipes():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, ingredients, instructions FROM recipes;")  # ✅ Pobieramy przepisy
    recipes = cursor.fetchall()
    cursor.close()
    conn.close()

    recipe_list = [{"id": r[0], "name": r[1], "ingredients": r[2], "instructions": r[3]} for r in recipes]
    return jsonify(recipe_list)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

@app.route('/recipes', methods=['POST'])
def add_recipe():
    data = request.json
    print("📢 Otrzymano dane:", data)  # ✅ Logowanie danych w backendzie
    
    name = data.get('name')
    ingredients = data.get('ingredients')
    instructions = data.get('instructions')

    if not name or not ingredients or not instructions:
        return jsonify({"error": "Wszystkie pola są wymagane"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO recipes (name, ingredients, instructions) VALUES (%s, %s, %s) RETURNING id;",
        (name, ingredients, instructions)
    )
    new_id = cursor.fetchone()[0]
    conn.commit()
    cursor.close()
    conn.close()

    print("✅ Przepis dodany:", new_id)  # ✅ Logowanie nowego ID
    return jsonify({"message": "Przepis dodany!", "id": new_id}), 201


@app.route('/recipes/<int:recipe_id>', methods=['DELETE'])
def delete_recipe(recipe_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM recipes WHERE id = %s RETURNING id;", (recipe_id,))
    deleted = cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()

    if deleted:
        return jsonify({"message": "Przepis usunięty!"}), 200
    else:
        return jsonify({"error": "Przepis nie istnieje"}), 404
