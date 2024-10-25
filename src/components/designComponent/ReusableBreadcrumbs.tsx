
import { Breadcrumbs, Link, Typography } from "@mui/material";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ReusableBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const ReusableBreadcrumbs: React.FC<ReusableBreadcrumbsProps> = ({ items }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="mx-5 font-bold">
      {items.map((item, index) => (
        item.href ? (
          <Link key={index} color="inherit" href={item.href}>
            {item.label}
          </Link>
        ) : (
          <Typography key={index} className="text-primary">
            {item.label}
          </Typography>
        )
      ))}
    </Breadcrumbs>
  );
};

export default ReusableBreadcrumbs;
