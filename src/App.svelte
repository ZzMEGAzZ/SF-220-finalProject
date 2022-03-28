<script>
  import { islogin, mode } from "./stores.js";
  import Login from "./Login.svelte";
  import Forgot from "./Forgot.svelte";
  import Profile from "./Profile.svelte";
</script>

{#if !$islogin}
  <Login />
{:else}
  <header>
    <div class="nav">
      <button>หน้าหลัก</button>
      <p>
        ลงทะเบียน
        <button>รายชื่อวิชาทั้งหมด</button>
        <button>รายชื่อวิชาที่เพิ่ม</button>
        <button>รายชื่อวิชาที่ถอน</button>
        <button>รายชื่อวิชาที่ลงทะเบียน</button>
      </p>
      <p>
        ตั้งค่า
        <button>เปลี่ยนรูปโปรไฟล์</button>
        <button>เปลี่ยนรหัสผ่าน</button>
        <button>Log out</button>
      </p>
    </div>
  </header>

  {#if $mode == "profile"}
    <Profile />
  {:else if $mode == "forgot"}
    <Forgot />
  {/if}
{/if}

<style>
  .nav p button {
    position: absolute;
    display: none;
    width: inherit;
  }
  .nav p:hover button {
    display: block;
  }
  .nav {
    display: inline;
  }
</style>
