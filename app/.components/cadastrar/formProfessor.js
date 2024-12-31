import { useEffect, useState } from "react";

const FormProfessor = ({

}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form id="forms" onSubmit={handleSubmit}>
        <select name="cargo" id="cargo" defaultValue="">
          <option value="" disabled>
            Selecione Cargo
          </option>
          <option value="Titular">Titular</option>
          <option value="Substituto">Substituto</option>
        </select>
      </form>
    </>
  );
};

export default FormProfessor;
