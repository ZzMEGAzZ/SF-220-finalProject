<script>
  let x = [];
  let y = [];
  import { subjects, accounts, account, mode } from "./stores.js";

  function addsubjects(name, index) {
    if (!(name in $accounts[$account].sub)) {
      let confirm = prompt(
        "กรุณายืนยันการลงทะเบียน(กรอก 'ยืนยัน' เพื่อยืนยันการลงทะเบียน)"
      );
      if (confirm == "ยืนยัน") {
        x.push(name);
        x = x;
        y.push(index);
        y = y;
      }
    } else {
      alert("วิชานี้ถูกเพิ่มไปแล้ว");
    }
  }

  function confirm(x) {
    let i = 0;
    let len = x.length;
    for (; i < len; i++) {
      $accounts[$account].sub.push(x[i]);
    }
    let j = 0;
    len = y.length;
    for (; j < len; j++) {
      $subjects[y[j]].register++;
      $subjects[y[j]].remaining--;
    }

    $mode = "alladd";
  }

  var listsub = $accounts[$account].sub;

  function check(name) {
    for (let i = 0; i < listsub.length; i++) {
      if (listsub[i] == name) {
        return true;
      }
    }
  }
</script>

<div>
  <h1>ลงทะเบียนรายวิชา</h1>
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
          {#if check(name)}
            ลงทะเบียนแล้ว
          {:else if remaining == 0}
            วิชานี้เต็มแล้ว
          {:else}
            <button on:click={addsubjects(name, index)}> เพิ่ม </button>
          {/if}
        </td>
      </tr>
    {/each}
  </table>
</div>

<div>
  <p>วิชาที่ต้องการลงทะเบียน</p>
  <p>{x}</p>
</div>

<div>
  <button on:click={() => confirm(x)}>ยืนยันการลงทะเบียน</button>
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
