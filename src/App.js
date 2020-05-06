import React from 'react';
import logo from './logo.svg';
import './App.css';

// Krok 11 przykład z filtrowanie listy

const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class ListFilterApp extends React.Component {
    constructor() {
        super();

        this.state = {
            filteredUsers: allUsers
        };
    }

    filterUsers(e) {
        const text = e.currentTarget.value;
        const filteredUsers = this.getFilteredUsersForText(text)
        this.setState({
            filteredUsers
        })
    }

    getFilteredUsersForText(text) {
        return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
    }

    render () {
        return (
            <div>
                <input onInput={this.filterUsers.bind(this)} />
                <UsersList users={this.state.filteredUsers} />
            </div>
        );
    }
}

const UsersList = ({ users }) => {
    if (users.length > 0) {
        return (
            <ul>
                {users.map(user => <li key={user}>{user}</li>)}
            </ul>
        );
    }

    return (
        <p>Brak wyników!</p>
    );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <br/>
      <p>Zadanie z punktu 11</p>
      <ListFilterApp/>
    </div>
  );
}

export default App;
