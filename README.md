# PawieUI

A simple **React UI library** with reusable components like Button, Input, and DateField.

## Features

- Easy-to-use React components
- Fully typed with TypeScript
- Supports modern React JSX
- Ready for NPM publishing




## Installation

Using npm
```bash
npm install pawieui

```
Using yarn
```bash
yarn add pawieui

```

## Usage

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Input, DateField } from 'pawieui';

const App = () => {
  return (
    <div>
      <h1>Testing PawieUI</h1>
      <Button label="Click Me" onClick={() => alert('Clicked!')} />
      <Input placeholder="Type here" />
      <DateField />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
