<script>
  let x = [];
  let name = "";
  import { accounts, account, mode, subjects } from "./stores.js";

  function removesubjects(subject) {
    let confirm = prompt(
      "กรุณายืนยันวิชาที่ต้องการถอน(กรอก 'ยืนยัน' เพื่อยืนยันวิชาที่ต้องการถอน)"
    );
    if (confirm == "ยืนยัน") {
      x.push(subject);
      x = x;
    }
  }

  function confirm(x) {
    let i = 0;
    let len = x.length;
    for (; i < len; i++) {
      $accounts[$account].sub.splice($accounts[$account].sub.indexOf(x[i]), 1);
    }
    let j = 0;
    for (; j < len; j++) {
      name = x[j];
      $subjects.find((y) => y.name == name).register--;
      $subjects.find((y) => y.name == name).remaining++;
    }
    $mode = "alladd";
  }
</script>

<div><h1>ถอดถอนรายวิชา</h1></div>

<div>
  <table>
    <tr>
      <th>รายวิชา</th>
      <th>เพิ่มเติม</th>
    </tr>
    {#each $accounts[$account].sub as i}
      <tr>
        <td>{i}</td>
        <td><button on:click={() => removesubjects(i)}>ลบ</button> </td>
      </tr>
    {/each}
  </table>
</div>

<div>
  <p id="space">วิชาที่ต้องการถอน</p>
  <p>{x}</p>
</div>

<div>
  <button class="button" on:click={() => confirm(x)}
    >ยืนยันวิชาที่ต้องการถอน</button
  >
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
  td {
    border-top: 1px dashed grey;
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

  .button:hover {
    background-color: #b5b5b5;
  }

  .button:active {
    background-color: #b5b5b5;
    box-shadow: 0 5px rgb(228, 228, 228);
    transform: translateY(4px);
  }

  #space {
    margin: 10px;
  }
</style>
