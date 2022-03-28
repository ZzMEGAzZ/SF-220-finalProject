<script>
  import { subjects, accounts, account, addsub } from "./stores.js";
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
      <td>
        <input type="checkbox" />
      </td>
      <td>{name}</td>
      <td>{total}</td>
      <td>{register}</td>
      <td>{remaining}</td>
    </tr>
  {/each}
</table>

<button>ลงทะเบียน</button>
