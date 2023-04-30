import PropTypes from "prop-types";

import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import pattern from "assets/images/illustrations/pattern-tree.svg";

function MasterCard({ color, number }) {
  const numbers = [...`${number}`];

  if (numbers.length < 16 || numbers.length > 16) {
    throw new Error(
      "Invalid value for the prop number, the value for the number prop shouldn't be greater than or less than 16 digits"
    );
  }

  return (
    <Card
      sx={({ palette: { gradients }, functions: { linearGradient }, boxShadows: { xl } }) => ({
        background: gradients[color]
          ? linearGradient(gradients[color].main, gradients[color].state)
          : linearGradient(gradients.dark.main, gradients.dark.state),
        boxShadow: xl,
        position: "relative",
      })}
    >
      <MDBox
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        opacity={0.2}
        sx={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "cover",
        }}
      />
      <MDBox position="relative" zIndex={2} p={2}>
        <MDBox color="white" p={0} lineHeight={0} display="inline-block">
          2nd Innings
        </MDBox>
        <MDTypography variant="h5" color="white" fontWeight="medium" sx={{ mt: 3, mb: 1, pb: 1 }}>
          104/2 (14.2 overs)
        </MDTypography>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <MDBox display="flex" alignItems="center">
            <MDBox mr={3} lineHeight={1}>
              <MDTypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Anurag
              </MDTypography>
              <MDTypography
                variant="h6"
                color="white"
                fontWeight="medium"
                textTransform="capitalize"
              >
                Pranshu
              </MDTypography>
            </MDBox>
            <MDBox lineHeight={1}>
              <MDTypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                0 (55)
              </MDTypography>
              <MDTypography variant="h6" color="white" fontWeight="medium">
                104 (21)
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" color="white" justifyContent="flex-end" width="20%">
            7.7 RR
          </MDBox>
        </MDBox>
        <MDTypography variant="h6" color="white" fontWeight="medium" textTransform="capitalize">
          Varun 2.2 (52/1)
        </MDTypography>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of MasterCard
MasterCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the MasterCard
MasterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  number: PropTypes.number.isRequired,
};

export default MasterCard;
