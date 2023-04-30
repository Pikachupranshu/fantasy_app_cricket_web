import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useMaterialUIController } from "context";
import { Typography } from "@mui/material";

function QuestionCard({ noGutter }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [answer, setAnswer] = useState("");
  const [clicked, setClicked] = useState(false);
  const question = "Will CSK will today?";
  const odds = 1;

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleButtonClick = (e) => {
    setClicked(true);
    if (answer !== "") {
      // Handle button click logic here
      console.log(e);
    }
  };

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <MDBox width="100%" display="flex" flexDirection="column">
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <MDTypography variant="button" fontWeight="medium">
            {question}
          </MDTypography>
        </MDBox>
        <MDBox mb={1}>
          <MDTypography variant="h5" color="text">
            Odds : 1
          </MDTypography>
        </MDBox>
        <MDBox mb={1}>
          <MDTypography variant="caption" color="text">
            Points:
          </MDTypography>
          <input type="text" value={answer} onChange={handleAnswerChange} />
          <MDTypography variant="caption" color="error">
            {answer === "" && clicked ? "Please fill in the answer field." : ""}
          </MDTypography>
        </MDBox>
        <MDBox mb={1}>
          <MDTypography variant="caption" color="text">
            Points You ll get
          </MDTypography>
          <Typography variant="h4">{answer * odds}</Typography>
        </MDBox>
      </MDBox>
      <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
        <MDBox mr={1}>
          <MDButton
            variant="text"
            color={darkMode ? "white" : "error"}
            onClick={handleButtonClick}
            disabled={answer === ""}
          >
            <Icon>close</Icon>&nbsp;No
          </MDButton>
        </MDBox>
        <MDButton
          variant="text"
          color={darkMode ? "white" : "success"}
          onClick={handleButtonClick}
          disabled={answer === ""}
        >
          <Icon>check</Icon>&nbsp;Yes
        </MDButton>
      </MDBox>
    </MDBox>
  );
}

QuestionCard.defaultProps = {
  noGutter: false,
};

QuestionCard.propTypes = {
  noGutter: PropTypes.bool,
};

export default QuestionCard;
