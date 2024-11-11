import React from "react";

const formProfessor = () => {
  return (
    <div>
      <form id="forms">
          <input type="text" placeholder="Disciplinas Ministradas"/>
          <select name="cargo" id=""  defaultValue="">
            <option value="" disabled>Cargo</option>
            <option value="Titular" id="">Titular</option>
            <option value="Substituto" id="">Substituto</option>
          </select>

      </form>
    </div>
  );
};

export default formProfessor;
