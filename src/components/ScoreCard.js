import MDBox from "./MDBox";

function CricketScoreCard() {
  const innings = "Second";
  const battingTeam = "RR";
  const score = 150;
  const wickets = 4;
  const runRate = 7.5;
  const livePlayers = {
    striker: {
      name: "John Smith",
      score: 65,
      balls: 48,
    },
    nonStriker: {
      name: "Jane Doe",
      score: 28,
      balls: 26,
    },
    bowler: {
      name: "Adam Johnson",
      wickets: 1,
      runs: 32,
      overs: 3.4,
    },
  };
  const target = 201;
  const overs = 16.4;

  return (
    <MDBox
      sx={{
        display: "flex",
        alignItems: "left",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <MDBox
        sx={{
          display: "flex",
          alignItems: "left",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "24px",
        }}
        style={{ background: "linear-gradient(195deg, #42424a, #191919)" }}
      >
        <MDBox
          sx={{
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          {innings} Innings
        </MDBox>
        <MDBox sx={{ fontSize: "24px", fontWeight: "bold" }}>{battingTeam}</MDBox>
      </MDBox>
      <MDBox
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "24px",
        }}
      >
        <MDBox sx={{ fontSize: "48px", fontWeight: "bold" }}>
          {score}/{wickets} ({overs})
        </MDBox>
        <MDBox sx={{ fontSize: "24px", fontWeight: "bold" }}>{runRate.toFixed(2)} RPO</MDBox>
      </MDBox>
      <MDBox sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>
        {livePlayers.striker.name} {livePlayers.striker.score}({livePlayers.striker.balls})*
      </MDBox>
      <MDBox sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>
        {livePlayers.nonStriker.name} {livePlayers.nonStriker.score}({livePlayers.nonStriker.balls})
      </MDBox>
      <MDBox sx={{ fontSize: "18px", fontWeight: "bold", marginBottom: "24px" }}>
        Bowler: {livePlayers.bowler.name} ({livePlayers.bowler.overs}.{livePlayers.bowler.balls})
        {"  "}
        Wickets: {livePlayers.bowler.wickets} Runs: {livePlayers.bowler.runs}
      </MDBox>
      <MDBox sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>
        Target: {target}
      </MDBox>
    </MDBox>
  );
}

export default CricketScoreCard;
