import './App.css';
// import Dashboard from './Views/Dashboard'
import UserList from './Views/UsersCard'

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  listItemText: {
    fontFamily: "Montserrat",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UserList />
      </div>
    </ThemeProvider>
  );
}

export default App;
