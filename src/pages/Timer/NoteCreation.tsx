import { SmilePlus, NotepadText, LayoutList, ClockPlus } from "lucide-react";

const NoteCreation = () => {
  return (
    <div className="fixed normal-text normal-color bottom-0 mb-[20px] w-[150px] px-[20px] h-[30px]  flex flex-row items-center justify-around bg-[#f0edeb] rounded-[10px]">
      <SmilePlus className="creating-icon"></SmilePlus>
      <NotepadText className="creating-icon"></NotepadText>
      <LayoutList className="creating-icon"></LayoutList>
      <ClockPlus className="creating-icon"></ClockPlus>
    </div>
  );
};

export default NoteCreation;
