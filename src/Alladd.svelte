<script>
  import { accounts, account, subjects } from "./stores.js";
</script>

<div><h1>ผลการจดทะเบียน</h1></div>

<div>
  <thead><tr>รายวิชา</tr></thead>
  <br />
  {#each $accounts[$account].sub as name, index}
    {index + 1} &nbsp;
    {name} &nbsp;
    {$subjects.find((x) => x.name == name).subject} &nbsp;
    {$subjects.find((x) => x.name == name).credit} &nbsp;
    {$subjects.find((x) => x.name == name).Teacher} &nbsp;

    <br />
  {/each}
</div>

<div id="bg" />

<style>

#bg {
    background-image: linear-gradient(
      180deg,
      rgba(17, 34, 49, 1) 4%,
      rgba(30, 71, 112, 1) 32%,
      rgba(69, 117, 165, 0.8) 72%,
      rgba(190, 220, 239, 1) 100%
    );
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  div {
    display: flex;
    justify-content: center;
  }
  div h1 {
    margin-top: 50px;
  }

  thead tr {
    background-color: white;
    border-bottom: 1px dashed grey;
    height: 50px;
  }
</style>
