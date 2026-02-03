import Header from "../../components/Header.tsx";

const NotFound = () => {
  return (
    <main>
      <div className="wrapper ">
        <Header></Header>
        <div className="page-wrapper bg-[url('/notfound.jpg')] bg-cover bg-center flex justify-center normal-text  ">
          <div className="flex flex-col w-[300px] text-white items-center mt-[50px]">
            <div className=" text-[40px]">404 Not Found</div>
            <div className="rounded-full w-[3px] h-[10px] bg-white"></div>
            <p className="text-[15px] text-center mt-[5px] ">
              There is no such page here. <br /> But we have a lot of other
              pages! <br />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
