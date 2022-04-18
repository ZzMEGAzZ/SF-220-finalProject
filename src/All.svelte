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


<div id="bg" />
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
    flex-direction: column;
    align-items: center;
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
