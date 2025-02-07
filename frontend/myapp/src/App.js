import { useEffect, useState } from "react";
import styled from "styled-components";

// 🎨 Stylizacja całej strony
const Container = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f1e5;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  text-align: center;
  color: #6b4226;
`;

const RecipeCard = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  margin: 10px 0;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const RecipeTitle = styled.h2`
  color: #d2691e;
`;

const IngredientList = styled.p`
  font-weight: bold;
  color: #4d3b2d;
`;

const Instructions = styled.p`
  color: #333;
`;

const Button = styled.button`
  background: #e08e45;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    background: #c76a30;
  }
`;

const FormContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  color: #6b4226;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  background: #4caf50;
  &:hover {
    background: #388e3c;
  }
`;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: ""
  });

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error("Błąd:", error));
  }, []);

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipe)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        setRecipes([...recipes, { ...newRecipe, id: data.id }]);
        setNewRecipe({ name: "", ingredients: "", instructions: "" });
      }
    })
    .catch(error => console.error("Błąd:", error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/recipes/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        setRecipes(recipes.filter(recipe => recipe.id !== id));
      } else {
        alert("Nie udało się usunąć przepisu");
      }
    })
    .catch(error => console.error("Błąd:", error));
  };

  return (
    <Container>
      <Header>📖 Lista Przepisów</Header>

      {/* 🆕 PRZENIEŚLIŚMY FORMULARZ NA GÓRĘ */}
      <FormContainer>
        <FormTitle>➕ Dodaj nowy przepis</FormTitle>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Nazwa przepisu" value={newRecipe.name} onChange={handleChange} required />
          <Textarea name="ingredients" placeholder="Składniki" value={newRecipe.ingredients} onChange={handleChange} required />
          <Textarea name="instructions" placeholder="Instrukcje" value={newRecipe.instructions} onChange={handleChange} required />
          <SubmitButton type="submit">Dodaj przepis</SubmitButton>
        </form>
      </FormContainer>

      {/* 📜 LISTA PRZEPISÓW */}
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id}>
          <RecipeTitle>🍽️ {recipe.name}</RecipeTitle>
          <IngredientList>🛒 <strong>Składniki:</strong> {recipe.ingredients}</IngredientList>
          <Instructions>📖 <strong>Instrukcje:</strong> {recipe.instructions}</Instructions>
          <Button onClick={() => handleDelete(recipe.id)}>🗑 Usuń przepis</Button>
        </RecipeCard>
      ))}
    </Container>
  );
}

export default App;
