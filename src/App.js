import "./App.css";
import Breadcrums from "./components/DetailsPage/Breadcrumbs";
import FilterActions from "./components/FilterActions/FilterActions";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Listing from "./components/Listing/Listing";
import Navbar from "./components/Navbar/Navbar";
import Sort from "./components/Sort/Sort";
import FilterProvider from "./ProductsContext";

function App() {
  return (
    <FilterProvider>
        <Navbar />
        <Breadcrums title="hello/hello"/>
        <Sort />
      <div className="outer-wrapper">
        <FilterActions />
        <Listing />
      </div>
    </FilterProvider>
    // <h1>Hi</h1>
  );
}

export default App;
