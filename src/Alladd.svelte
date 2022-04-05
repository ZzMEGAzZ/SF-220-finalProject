<script>
  import { accounts, account } from "./stores.js";
</script>

<div><h1>ผลการจดทะเบียน</h1></div>


<div><table>
  <thead><tr>รายวิชา</tr></thead>
  {#each $accounts[$account].sub as i}
    <tbody><tr>
      {i}
    </tr></tbody>
  {/each}
</table></div>

<style>
  *{
      padding:0px;
      margin: 0px;
      box-sizing: border-box;
    }
  div{
      display: flex;
      justify-content: center;
    }
  div h1{
    margin-top: 50px;
  }
  div table{
    margin-top:40px;
    border-collapse: collapse;
    background-color:#C7D0D8;

    padding: 10px;
    text-align: center;
    box-shadow: 0px 10px 30px 5px rgba(87,85,101,.2);
    width:120px;
  }
  thead tr{
    background-color: white;
    border-bottom: 1px dashed grey;
    height: 50px;
  }

</style>