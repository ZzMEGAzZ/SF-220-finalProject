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

ลงทะเบียนรายวิชา

{listsub}

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
        {:else}
          <button on:click={addsubjects(name, index)}> เพิ่ม </button>
        {/if}
      </td>
    </tr>
  {/each}
</table>

<p>วิชาที่ต้องการลงทะเบียน</p>
<p>{x}</p>

<button on:click={() => confirm(x)}>ยืนยันการลงทะเบียน</button>
