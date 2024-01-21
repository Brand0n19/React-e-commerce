import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';


function ColorFilter() {

  return (
    <div>
      <DropdownButton title="Seleccionar color">
        <Dropdown.Item onClick={() => handleColorSelect('red')}>
          Rojo
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleColorSelect('green')}>
          Verde
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleColorSelect('blue')}>
          Azul
        </Dropdown.Item>
      </DropdownButton>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ColorFilter