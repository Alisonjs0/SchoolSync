import { useState } from 'react';

function Formulario() {
  // Estado para controlar a categoria selecionada
  const [categoria, setCategoria] = useState('frutas');
  
  // Objeto com as opções de subcategorias para cada categoria
  const opcoesSubcategorias = {
    frutas: ['Maçã', 'Banana', 'Laranja'],
    vegetais: ['Cenoura', 'Brócolis', 'Espinafre']
  };
  
  // Função para atualizar a categoria e subcategorias
  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  return (
    <div>
      <label htmlFor="categoria">Categoria:</label>
      <select id="categoria" value={categoria} onChange={handleCategoriaChange}>
        <option value="frutas">Frutas</option>
        <option value="vegetais">Vegetais</option>
      </select>

      <label htmlFor="subcategoria">Subcategoria:</label>
      <select id="subcategoria">
        {/* Renderiza as subcategorias com base na categoria selecionada */}
        {opcoesSubcategorias[categoria].map((subcategoria) => (
          <option key={subcategoria} value={subcategoria.toLowerCase()}>
            {subcategoria}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Formulario;
