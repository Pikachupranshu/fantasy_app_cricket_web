// @mui icons

import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// /import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Prediction from "layouts/prediction";
import Tables from "layouts/tables";
// import Billing from "layouts/billing";
// import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Predictions",
    key: "predictions",
    icon: <AttachMoneyIcon />,
    route: "/predict",
    component: <Prediction />,
  },
  {
    type: "collapse",
    name: "LeaderBoard",
    key: "leaderboard",
    icon: <LeaderboardIcon />,
    route: "/leaderboard",
    component: <Tables />,
  },
];

export default routes;
