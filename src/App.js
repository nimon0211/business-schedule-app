import React from 'react';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ja } from 'date-fns/locale';
import ScheduleList from './components/ScheduleList';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <div className="App">
        <header className="App-header">
          <h1>業務予定一覧</h1>
        </header>
        <main>
          <ScheduleList />
        </main>
      </div>
    </LocalizationProvider>
  );
}

export default App;
