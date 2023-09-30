import{ useState } from 'react'
import * as C from './App.style';
import { Item  } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';


const App = () => {
  const [list, setList] = useState<Item[]>([
    
  ]);

const handleAddTask = ( taskName: string) => {
  let newList = [...list];
  newList.push({
    id: list.length + 1,
    name: taskName,
    done: false
  });
  setList(newList);
}

  return(
    <C.Container>
        <C.Area>
          <C.Header>
            Lista de Tarefas!</C.Header>

            <AddArea onEnter={handleAddTask} />

            {list.map((Item, index)=>(
              <ListItem key = {index} item={Item}/>
            ))}


            {/* Lista de tarefas */ }
        </C.Area>
   </C.Container>
);
}

export default App;