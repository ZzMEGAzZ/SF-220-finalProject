<script>
  import { subjects, accounts, account, mode } from "./stores.js";

  function removesubject(name, index) {
    let confirm = prompt(
      "กรุณายืนยันการลบรายวิชา(กรอก 'ยืนยัน' เพื่อยืนยันการลบรายวิชา)"
    );
    if (confirm == "ยืนยัน") {
      alert("ลบรายวิชาสำเร็จ");
      $subjects.splice(index, 1);
      $subjects = [...new Set($subjects)];
      deletesubjectallusers(name);
    }
  }

  function deletesubjectallusers(name) {
    alert("ลบรายวิชานี้ออกจากผู้ใช้ทั้งหมดแล้ว");
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
      <th>โควตาทั้งหมด</th>
      <th>จำนวนนักศึกษาที่ขอ</th>
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
    flex-direction: column;
    align-items: center;
  }
  div h1 {
    margin-top: 50px;
    color:white;
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
