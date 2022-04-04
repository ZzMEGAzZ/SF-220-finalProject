<script>
  import { subjects, accounts, account, mode } from "./stores.js";

  function removesubject(name) {
    let confirm = prompt(
      "กรุณายืนยันการลบวิชา(กรอก 'ยืนยัน' เพื่อยืนยันการลบวิชา)"
    );
    if (confirm == "ยืนยัน") {
      for (let i = 0; i < $subjects.length; i++) {
        if ($subjects[i].name == name) {
          $subjects.splice($subjects[i], 1);
          alert("ลบวิชาสำเร็จ");
          break;
        }
      }
      deletesubjectallusers(name);

      $mode = "allsubjects";
    }
  }

  function deletesubjectallusers(name) {
    alert("deletesubjectallusers");
    for (let key in $accounts) {
      for (let i = 0; i < $accounts[key].sub.length; i++) {
        if ($accounts[key].sub[i] == name) {
          $accounts[key].sub.splice(i, 1);
          i--;
        }
      }
    }
  }
</script>

<h1>removeadmin</h1>

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
        <button on:click={() => removesubject(name)}>ลบรายวิชา</button>
      </td></tr
    >
  {/each}
</table>
