<script>
  import { mode, subjects, sub, accounts, account } from "./stores.js";
  function description(subject) {
    $mode = "detail";
    $sub = subject;
  }
  function isadmin() {
    if ($accounts[$account].role == "admin") {
      return true;
    } else {
      return false;
    }
  }
</script>
<body>
<div><h1>รายวิชาที่เปิดลงทะเบียน</h1></div>
<div>
  <table>
    <tr>
      <th>ลำดับที่</th>
      <th>รายวิชา</th>
      <th>โควตา</th>
      <th>ลงทะเบียนแล้ว</th>
      <th>คงเหลือ</th>
      <th>เพิ่มเติม</th>
    </tr>
    {#each $subjects as { name, total, register, remaining, short_description }, index}
      <tr>
        <td>{index + 1}</td>
        {#if !isadmin()}
          <td><button on:click={() => description(name)}>{name}</button></td>
        {:else}
          <td>{name}</td>
        {/if}
        <td>{total}</td>
        <td>{register}</td>
        <td>{remaining}</td>
        <td>{short_description}</td>
        {#if isadmin()}
          <td><button on:click={() => description(name)}>แก้ไข</button></td>
        {/if}
      </tr>
    {/each}
  </table>
</div>
</body>
<style>
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  body{
    background-image: url("https://cdn.discordapp.com/attachments/959342189224271872/960768895021637712/BG_center_wave5.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  div {
    display: flex;
    justify-content: center;
  }
  div h1 {
    margin-top: 50px;
  }
  div table {
    margin-top: 40px;
    border-collapse: collapse;
    background-color: #ffffff;

    padding: 10px;
    text-align: center;

    width: 700px;
    height: 200px;

    box-shadow: 0px 10px 30px 5px rgba(87, 85, 101, 0.5);
  }
  tr {
    background-color: white;
    border-bottom: 1px dashed grey;
    height: 50px;
  }
  tr:nth-last-child(-n + 1) {
    border-bottom: none;
  }
</style>
