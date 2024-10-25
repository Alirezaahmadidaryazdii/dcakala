import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

interface Item {
  id: number;
  title: string;
}

interface ListMuiProps {
  items: Item[];
}

const ListMui: React.FC<ListMuiProps> = ({ items }) => {
  const [checked, setChecked] = React.useState<number[]>([]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        direction: "rtl", // راست‌چین کردن لیست
      }}
    >
      {items.map((item) => {
        const labelId = `checkbox-list-label-${item.id}`;

        return (
          <ListItem key={item.id} disablePadding sx={{ padding: 0 }}>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(item.id)}
              dense
              sx={{ display: "flex", justifyContent: "space-between" }} // برای تنظیم راست‌چینی
            >
              <ListItemText
                id={labelId}
                primary={item.title}
                sx={{ textAlign: "right" }} // راست‌چین کردن متن
              />
              <ListItemIcon sx={{ minWidth: '40px' }}>
                <Checkbox
                  edge="end"
                  checked={checked.includes(item.id)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListMui;
