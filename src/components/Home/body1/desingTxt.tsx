const TxtDesign = ({title}: {title: string}) => {
  return (
    <div className="flex justify-center items-center my-5 p-4">
      <div className="flex items-center w-full">
        <div className="flex-1 border-t border-black mx-5"></div>
        <span className="mx-4 text-lg font-semibold text-black">
          {title}
        </span>
        <div className="flex-1 border-t border-black mx-5"></div>
      </div>
    </div>
  );
};

export default TxtDesign;
