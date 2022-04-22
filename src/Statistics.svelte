<script>
  import { onMount } from "svelte";
  import { accounts, account, subjects } from "./stores.js";
  let data = [];
  let labels = [];

  for (let i = 0; i < $subjects.length; i++) {
    data.push(($subjects[i].register / $subjects[i].total) * 100);
    labels.push($subjects[i].name);
  }

  function createChart() {
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "สถิติการลงทะเบียน",
            data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
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
  <canvas id="myChart" width="3" height="1" />
</div>

<div id="bg" />

<style>
  #bg {
    background-image: linear-gradient(
      0deg,
      rgb(6, 113, 183) 22%,
      rgb(103, 163, 217) 87%,
      rgb(199, 230, 245) 97%
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
  }
</style>
