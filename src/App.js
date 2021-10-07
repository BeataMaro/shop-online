import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import BlogScreen from "./screens/BlogScreen";
import AboutScreen from "./screens/AboutScreen";
import ShopScreen from "./screens/ShopScreen";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <main className='justify-content-center'>
          <Switch>
            <Route path='/' exact component={BlogScreen} />
            <Route path='/about' component={AboutScreen} />
            <Route path='/shop' component={ShopScreen} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
