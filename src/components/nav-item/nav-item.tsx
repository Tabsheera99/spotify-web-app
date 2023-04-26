import { Typography, styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

import { capitalizeFirstLetter, replaceHyphens } from "@/utils/general";

const StyledNavItem = styled(Typography)(({ theme }) => ({
  padding: `${theme.spacing(1)} 0`,
  color: theme.palette.info.light,
  cursor: "pointer",
  fontWeight: 500,

  ":hover": {
    color: theme.palette.info.main,
  },
  "&.active": {
    color: theme.palette.success.main,
  },
}));

interface IProps {
  data: string;
}

const NavItem = ({ data }: IProps) => {
  const router = useRouter();
  const { query } = router;

  return (
    <StyledNavItem className={query.genre === data ? "active" : ""}>
      <Link href={`/${data}`}>
        {replaceHyphens(capitalizeFirstLetter(data))}
      </Link>
    </StyledNavItem>
  );
};

export default NavItem;
