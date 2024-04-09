import "./App.css";
import ContactForm from "./components/Button/ContactForm/ContactForm";
import ContactHeader from "./components/Button/ContactHeader/ContactHeader";
import Navigation from "./components/Button/Navigation/Navigation1";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;