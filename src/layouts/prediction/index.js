// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MasterCard from "examples/Cards/MasterCard";
import { Grid } from "@mui/material";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import BillingInformation from "layouts/billing/components/BillingInformation";
import MDBox from "components/MDBox";

function Prediction() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={8}>
        <Grid container spacing={3} sx={{ mb: 2 }}>
          <Grid item xs={12} xl={6}>
            <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultInfoCard
              icon="account_balance"
              title="Your balance"
              description="Left to play"
              value="1000"
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultInfoCard
              icon="money"
              title="Coins used"
              description="Points You used for playing"
              value="455"
            />
          </Grid>
        </Grid>
        <MDBox mb={3}>
          <Grid item xs={16} md={12}>
            <BillingInformation />
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Prediction;
