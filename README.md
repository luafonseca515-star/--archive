# --archive
<!DOCTYPE html>
<html>

<head>
  <title>nós</title>

  <style>
    body {
      background: #0f0f0f;
      color: white;
      font-family: Arial;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
      text-align: center;
    }

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 25px;
    }
  </style>
</head>

<body>

  <h1>eu te amo há:</h1>

  <p id="timer"></p>

  <script>
    const startDate = new Date("2023-08-16");

    function updateTimer() {
      const now = new Date();
      const difference = now - startDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      document.getElementById("timer").innerHTML =
        days + " dias e " + hours + " horas";
    }

    setInterval(updateTimer, 1000);

  </script>

</body>
</html>
