// import { useState } from 'react';

import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';

export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}
