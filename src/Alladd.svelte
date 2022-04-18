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

<style>
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
