<script>
  let x = [];
  let y = [];
  let newname = "";
  let total = "";
  import { subjects, accounts, account, mode } from "./stores.js";
  function editsubject() {
    let confirm = prompt(
      "กรุณายืนยันการแก้ไขข้อมูล(กรอก 'ยืนยัน' เพื่อยืนยันการแก้ไขข้อมูล)"
    );
    if (confirm == "ยืนยัน") {
        newname = document.getElementById("name").value;
        total = document.getElementById("total").value;

    }
  }
</script>

  <h1>Addandedit</h1>

<div>
  <h1>เพิ่มรายวิชา</h1>
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
        <td><input id="newname" type="text" name="newname" bind:value={name} /></td>
        <td
          ><input id="total" type="text=" name="total" bind:value={total} /></td
        >
        <td>{register}</td>
        <td>{remaining}</td>
      </tr>
    {/each}
  </table>
</div>

<div>
  <p id="space">วิชาที่ต้องการเพิ่มในระบบ</p>
  <p>{x}</p>
</div>

<div>
  <button class="button" on:click={() => editsubject()}> ยืนยันการแก้ไข </button>
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
  .button {
  margin-top: auto;
  padding: 10px 20px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  outline: none;
  background-color: #d3d3d3;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px rgb(228, 228, 228);
  }

  .button:hover {background-color: #b5b5b5}

  .button:active {
  background-color: #b5b5b5;
  box-shadow: 0 5px rgb(228, 228, 228);
  transform: translateY(4px);
  }

  #space {
    margin: 10px;
  }
</style>
