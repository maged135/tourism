import Banner from "../app/components/Banner";
import SearchPage from "./components/SearchPage";


export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Banner />
      <SearchPage/>
    </div>
  );
};


