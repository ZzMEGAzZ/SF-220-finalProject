<script>
  let x = [];
  import { accounts, account, mode } from "./stores.js";

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
    $mode = "alladd";
  }
</script>

<h1>removesubjects</h1>

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

<p>วิชาที่ต้องการถอน</p>
<p>{x}</p>

<button on:click={() => confirm(x)}>ยืนยันวิชาที่ต้องการถอน</button>
