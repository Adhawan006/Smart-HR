import { Button, Container, Typography, Card, CardContent } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card elevation={6}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Welcome to SmartHR Lite !
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Our HR Management System is under development.
          </Typography>

          <Button variant="contained">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;