import CreateIcon from "@mui/icons-material/Create";

interface typeProps {
  data: string[];
}

const HeaderBody = ({ data }: typeProps) => {
  return (
    <div className="relative bg-[#F3F3F3] p-2 md:p-4 rounded-b-[50%_50%] flex gap-1 md:gap-4 justify-center items-center shadow-lg">
      {data.map((item, index) => (
        <div className="flex gap-0" key={index}>
          <p className="text-sm md:text-lg">{item}</p>
          <CreateIcon />
        </div>
      ))}
    </div>
  );
};

export default HeaderBody;
