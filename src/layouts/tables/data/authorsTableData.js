/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "player", accessor: "player", width: "45%", align: "left" },
      { Header: "average points", accessor: "average points", align: "left" },
      { Header: "points last match", accessor: "points last match", align: "center" },
      { Header: "total points", accessor: "total points", align: "center" },
      { Header: "rank", accessor: "rank", align: "center" },
    ],

    rows: [
      {
        player: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        "average points": <div>1023</div>,
        "points last match": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="1300" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        "total points": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            32002
          </MDTypography>
        ),
        rank: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #1
          </MDTypography>
        ),
      },
      {
        player: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        "average points": <div>1023</div>,
        "points last match": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="1300" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        "total points": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            32002
          </MDTypography>
        ),
        rank: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #1
          </MDTypography>
        ),
      },
      {
        player: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        "average points": <div>1023</div>,
        "points last match": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="1300" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        "total points": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            32002
          </MDTypography>
        ),
        rank: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #1
          </MDTypography>
        ),
      },
      {
        player: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        "average points": <div>1023</div>,
        "points last match": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="1300" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        "total points": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            32002
          </MDTypography>
        ),
        rank: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #1
          </MDTypography>
        ),
      },
      {
        player: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        "average points": <div>1023</div>,
        "points last match": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="1300" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        "total points": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            32002
          </MDTypography>
        ),
        rank: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #1
          </MDTypography>
        ),
      },
      {
        player: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        "average points": <div>1023</div>,
        "points last match": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="1300" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        "total points": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            32002
          </MDTypography>
        ),
        rank: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #1
          </MDTypography>
        ),
      },
      {
        player: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        "average points": <div>1023</div>,
        "points last match": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="1300" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        "total points": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            32002
          </MDTypography>
        ),
        rank: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #1
          </MDTypography>
        ),
      },
      {
        player: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        "average points": <div>1023</div>,
        "points last match": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="1300" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        "total points": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            32002
          </MDTypography>
        ),
        rank: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #1
          </MDTypography>
        ),
      },
      {
        player: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        "average points": <div>1023</div>,
        "points last match": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="1300" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        "total points": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            32002
          </MDTypography>
        ),
        rank: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #1
          </MDTypography>
        ),
      },
      {
        player: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        "average points": <div>1023</div>,
        "points last match": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="1300" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        "total points": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            32002
          </MDTypography>
        ),
        rank: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            #1
          </MDTypography>
        ),
      },
    ],
  };
}
