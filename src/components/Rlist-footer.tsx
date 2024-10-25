import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  title: string;
  href?: string
}

interface typeProps {
  data: ServiceItem[];
  header: string;
}

const ListFooter = (props: typeProps) => {
  return (
    <>
      <h6>{props.header}</h6>
      <div className="flex flex-col">
        {props.data.map((item, index) => (
          <Link href={item.href || "#"} className="flex gap-2 cursor-pointer" key={index}>
            <FiberManualRecordIcon fontSize="small" />
            <p className="text-sm font-light hover:underline cursor-pointer">{item.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ListFooter;
