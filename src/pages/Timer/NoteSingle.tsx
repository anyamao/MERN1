import {
  PanelRight,
  Search,
  Pencil,
  X,
  Plus,
  CirclePlus,
  Trash2,
  TextAlignJustify,
} from "lucide-react";

const NoteSingle = () => {
  return (
    <div className=" normal-color normal-text w-[700px] h-[400px] light-pink outline-[2px]  mt-[10px]  flex flex-row rounded-[5px] overflow-hidden">
      <div className="normal-pink w-[30px] flex flex-col items-center pt-[8px]">
        <PanelRight className="icon"></PanelRight>
        <Search className="icon mt-[7px]"></Search>
      </div>
      <div className="flex flex-col w-full pt-[10px] ">
        <div className="flex flex-row items-center justify-between px-[10px] relative">
          <p className="">Notes</p>

          <div className="flex bg-pink-200 flex-1 mx-[30px] max-w-[320px] rounded-[3px] flex items-center justify-center">
            Introduction to Biology chapter 1
          </div>

          <div className="flex normal-pink  justify-around flex-1 max-w-[70px] rounded-[3px]">
            <CirclePlus className="icon"></CirclePlus>
            <TextAlignJustify className="icon"></TextAlignJustify>
            <X className="icon"></X>
          </div>
        </div>

        <div className="flex flex-1 smaller-text m-[15px]">
          Dddf dgfgddg dgkkgdkdg aeooror ;dldf ll dgkdgkg ko rog k
          grgrrogjgrjsjg j jo jrgjrj g jjrg rjg jg rjgrjgr jrg jrgrjgrjgrj
          rjgrgjo rjogjrgjogojsojro jogj oj oj rgogjrs;k peg o oj rogkg ojg j oj
          gojrogjoj gojs;lf og rjr g j
        </div>
      </div>
    </div>
  );
};

export default NoteSingle;
