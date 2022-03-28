<script>
  import { mode, account, accounts } from "./stores.js";

  function remode(x) {
    $mode = x;
  }
</script>

<header>
  <div class="nav">
    <ul>
      <li>หน้าหลัก</li>
      <li>
        ลงทะเบียน
        <ul>
          <li on:click={() => remode("allsubjects")}>รายวิชาทั้งหมด</li>
          <li on:click={() => remode("addsubjects")}>เพิ่มรายวิชา</li>
          <li on:click={() => remode("removesubjects")}>ถอนรายวิชา</li>
          <li on:click={() => remode("alladd")}>วิชาทั้งหมดที่ลงทะเบียน</li>
        </ul>
      </li>
      <li>
        ตั้งค่า
        <ul>
          <li on:click={() => remode("editprofile")}>แก้ไขโปรไฟล์</li>
          <li>ออกจากระบบ</li>
        </ul>
      </li>
    </ul>
  </div>
</header>

<style>
</style>
