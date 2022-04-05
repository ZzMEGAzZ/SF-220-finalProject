<script>
  import { subjects, accounts, account, mode } from "./stores.js";

  function removesubject(name, index) {
    let confirm = prompt(
      "กรุณายืนยันการลบวิชา(กรอก 'ยืนยัน' เพื่อยืนยันการลบวิชา)"
    );
    if (confirm == "ยืนยัน") {
      alert("ลบวิชาสำเร็จ");
      $subjects.splice(index, 1);
      $subjects = [...new Set($subjects)];
      deletesubjectallusers(name);
    }
  }

  function deletesubjectallusers(name) {
    alert("deletesubjectallusers");
    for (let key in $accounts) {
      for (let i = 0; i < $accounts[key].sub.length; i++) {
        if ($accounts[key].sub[i] == name) {
          $accounts[key].sub.splice(i, 1);
          i--;
          $accounts[key].sub = [...new Set($accounts[key].sub)];
        }
      }
    }
    $mode = "allsubjects";
  }
</script>

<div>
  <h1>ลบรายวิชา</h1>
</div>

<div>
  <table>
    <tr>
      <th />
      <th>รายวิชา</th>
      <th>โควตา</th>
      <th>ลงทะเบียนแล้ว</th>
      <th>คงเหลือ</th>
      <th>เพิ่มเติม</th>
    </tr>

    {#each $subjects as { name, total, register, remaining }, index}
      <tr>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{total}</td>
        <td>{register}</td>
        <td>{remaining}</td>
        <td>
          <button on:click={() => removesubject(name, index)}>ลบ</button>
        </td></tr
      >
    {/each}
  </table>
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
  div table {
    margin-top: 40px;
    border-collapse: collapse;
    background-color: #c7d0d8;

    padding: 10px;
    text-align: center;

    width: 540px;
    height: 200px;
    box-shadow: 0px 10px 30px 5px rgba(87, 85, 101, 0.2);
  }
  tr {
    border-bottom: 1px dashed grey;
    background-color: white;
    height: 50px;
  }
  tr:nth-last-child(-n + 1) {
    border-bottom: none;
  }
</style>
