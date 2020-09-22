import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/task-list';
import Filter from './components/filter';

const mockList = {
  "Project": [{
    "Name": "Work",
    "Tasks": [
      "Pay Electricity Bill",
      "Buy Groceries",
      "Car Servicing",
      "Buy Concert Ticket"
    ]
  },
  {
    "Name": "Home",
    "Tasks": [
      "Send emails",
      "Write doc"
    ]

  }
  ]

}

function App() {
  const [list, setList] = useState();

  const [selectedProject, setSelectedProject] = useState('');
  const [selectedList, setSelectedList] = useState([]);

  const handleChange = (val) => {
    setSelectedProject(val);
  }

  useState(() => {
    fetch('http://demo0242938.mockable.io/todo')
      .then(res => res.json())
      .then(res => {
        // Note: Api response is corrupt
        // setList(res); 

        // Using mock data
        setList(mockList);
      })
  }, [])

  useEffect(() => {
    const filteredList = list &&
      list.Project &&
      list.Project.filter(project => project.Name === selectedProject);

    setSelectedList(filteredList && filteredList[0] && filteredList[0].Tasks)
  }, [selectedProject]);

  return (
    <div className={'todo-app'}>
      <Filter
        options={list && list.Project && list.Project.map((project) => project.Name)}
        onChange={handleChange}
      />
      <TaskList
        list={selectedList}
      />
    </div>
  );
}

export default App;
