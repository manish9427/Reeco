import Header from "./components/header/Header";
import ProductTable from "./components/productTable/ProductTable";
import NavBar from "./components/navBar/NavBar";
import Details from "./components/details/Details";
function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Details />
      <ProductTable />
    </div>
  );
}

export default App;
