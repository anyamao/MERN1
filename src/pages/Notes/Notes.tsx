import Header from "../../components/Header.tsx";
import { Search, CirclePlus, TextAlignJustify } from "lucide-react";

const Notes = () => {
  return (
    <main>
      <div className="wrapper">
        <Header></Header>
        <div className="page-wrapper flex flex-row">
          <div className="normal-pink w-1/4 max-w-[150px]  normal-text">
            <Search className="icon"></Search>
            <CirclePlus className="icon"></CirclePlus>
          </div>
          <div className="light-pink normal-text flex-1">500000</div>
        </div>
      </div>
    </main>
  );
};

export default Notes;
