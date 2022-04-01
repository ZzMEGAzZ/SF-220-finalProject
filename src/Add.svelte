<script>
  let x = [];
  import { subjects, accounts, account, mode } from "./stores.js";

  function addsubjects(subject) {
    let confirm = prompt(
      "กรุณายืนยันการลงทะเบียน(กรอก 'ยืนยัน' เพื่อยืนยันการลงทะเบียน)"
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
      $accounts[$account].sub.push(x[i]);
    }
    
    
    $mode = "alladd";
  }
</script>

ลงทะเบียนรายวิชา

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
        <button on:click={() => addsubjects(name)}>เพิ่ม</button>
      </td>
    </tr>
  {/each}
</table>


<p>วิชาที่ต้องการลงทะเบียน</p>
<p>{x}</p>

<button on:click={() => confirm(x)}>ยืนยันการลงทะเบียน</button>
