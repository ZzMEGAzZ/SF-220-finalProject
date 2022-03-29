<script>
  import { subjects } from "./stores.js";
</script>

<h1>รายวิชาที่เปิดลงทะเบียน</h1>

<table>
  <tr>
    <th>ลำดับที่</th>
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
    </tr>
  {/each}
</table>
