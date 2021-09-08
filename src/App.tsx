import { FC } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import 'react-virtualized/styles.css';
import { Column, Table } from 'react-virtualized';

const list = [
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Jan Kowalski', description: 'Sprzatac' },
  { name: 'Jacek Nowak', description: 'Manager' },
  { name: 'Robert Kubiak', description: 'Ceo' },
];

const App: FC = () => {
  return (
    <div className="App">
      <Table
        width={500}
        height={300}
        headerHeight={20}
        rowHeight={30}
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}>
        <Column label="Name" dataKey="name" width={200} />
        <Column label="Description" dataKey="description" width={300} />
      </Table>,
      <Counter />
    </div>
  );
}

export default App;
