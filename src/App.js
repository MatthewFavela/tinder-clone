import "./App.css";
import Header from './components/header/Header'
import SwipeButtons from "./components/swipebuttons/SwipeButtons";
import TinderCards from './components/tindercards/TinderCards'

function App() {
  return <div className="app">
    {/* Header */}
    <Header />
    {/* Tinder Cards */}
    <TinderCards />
    {/* Swipe Buttons */}
    <SwipeButtons />
  </div>;
}

export default App;
