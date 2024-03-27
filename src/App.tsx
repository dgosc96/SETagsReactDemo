import { useState } from 'react';
import { Button } from '@mui/material';
const App = () => {
  return (
    <div>
      <h1>HELLO WORLasdD</h1>
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [val, setVal] = useState<number>(0);
  return (
    <Button variant='contained' onClick={() => setVal((prev) => prev + 1)}>
      Count {val}
    </Button>
  );
};

export default App;
