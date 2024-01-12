import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Outlet } from 'react-router-dom';

export const MainPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button
        icon="pi pi-plus"
        className="mr-2"
        label="Increment"
        onClick={() => setCount((count) => count + 1)}
      ></Button>
      <InputText value={count.toString()} />
      <Outlet />
    </div>
  );
};
