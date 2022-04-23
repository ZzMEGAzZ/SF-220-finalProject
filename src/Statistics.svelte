<script>
  import { onMount } from "svelte";
  import { accounts, account, subjects } from "./stores.js";
  let data = [];
  let labels = [];
  let average = [];

  for (let i = 0; i < $subjects.length; i++) {
    average.push(($subjects[i].register / $subjects[i].total) * 100);
    data.push($subjects[i].register);
    labels.push($subjects[i].name);
  }

  function createChart() {
    const chart1 = document.getElementById("myChart1");
    const myChart1 = new Chart(chart1, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
            label: "สถิติการขอโควตา(%)",
            data: average,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const chart2 = document.getElementById("myChart2");
    const myChart2 = new Chart(chart2, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
            label: "จำนวนผู้ขอโควตา(คน)",
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  onMount(() => {
    createChart();
  });
</script>

<div class="container">
  <h1>statistics</h1>
  <p>สถิติการขอโควตาเฉลี่ยรายวิชา</p>
  <canvas id="myChart1" width="3" height="1" />
  <p>จำนวนผู้ขอโควตาทั้งหมดแต่ละรายวิชา</p>
  <canvas id="myChart2" width="3" height="1" />
</div>

<div id="bg" />

<style>
  #bg {
    background-image: linear-gradient(
      180deg,
      rgb(6, 113, 183) 12%,
      rgb(103, 163, 217) 22%,
      rgb(199, 230, 245) 32%
    );
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  div.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  h1{
    color:white;
    font-size: 50px;
  }

  p {
    font-size: 20px;
    color: white;
  }
  canvas {
    margin-bottom: 150px;
    margin-right: 50px;
    margin-left: 50px;
  }
</style>
