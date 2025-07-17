import Letter from "./new1";
import Unordered from "./order";
import "./new.css";
import WeatherCard from "./WeatherCard";
import "./QuoteBox.css";
import Cars from "./Carinfo";
import Message from "./Greetings";
import CourseCard from "./q4";
import Greetings from "./Greeting";
import Land from "./land";
import "./grid.css";
import Country from "./capital";
import "./capital.css";
import Myform from"./grat";
import Mail from "./mail";
import Validation from "./Proptype";
import Newsletter from "./news";
import UserStatusSwitcher from "./UserStatusSwitcher";
import Op from "./click";
import Feedback from "./Feedback";
import ExpenseTracker from "./Expense"
import BugReportForm from "./TechBug";
import ThemeBox from "./ThemeBox";
import "./ThemeBox.css";


function App() {
  return (
    <div className="App">
      <Letter />
      <Message />
      <Unordered />
      <WeatherCard />
      <Cars />
      <Message />
      <CourseCard/>
      <Greetings/>
      <h1>Famous Landmarks :-</h1>
      <Land/>
      <Country/> 
      <Myform/>
      <Mail/>
      <Validation /> 
      <Newsletter/>
      <UserStatusSwitcher/>
      < Op />
      <Feedback />
      <ExpenseTracker />
      <BugReportForm />
      <ThemeBox />

    </div>
  );
}

export default App;