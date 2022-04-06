<script>
  import { mode, account, accounts, islogin } from "./stores.js";
  function remode(x) {
    $mode = x;
  }
  function logout() {
    $islogin = false;
    $account = {};
  }

  function checkrole_admin() {
    if ($accounts[$account].role == "admin") {
      return true;
    } else {
      return false;
    }
  }
</script>

<header>
  <nav id="nav-head">
    <div class="nav">
      <div class="flex-nav">
        <div id="profile-nav-container">
          <img src={$accounts[$account].image} alt="profile" />
          <p>
            <b>{$accounts[$account].role}</b> <br /> <b>ชื่อ</b>
            {$accounts[$account].name} <br /> <b>เลขประจำตัว</b>
            {$accounts[$account].id}
          </p>
        </div>
        <div class="btn">
          <button class="btn-head" on:click={() => remode("profile")}
            >หน้าหลัก</button
          >
          <div class="dropdown">
            <button class="btn-head">ลงทะเบียน</button>
            <div class="dropdown-content">
              <button on:click={() => remode("allsubjects")}
                >รายวิชาทั้งหมด</button
              >
              {#if !checkrole_admin()}
                <button on:click={() => remode("addsubjects")}
                  >เพิ่มรายวิชา</button
                >
                <button on:click={() => remode("removesubjects")}
                  >ถอนรายวิชา</button
                >
                <button on:click={() => remode("alladd")}
                  >วิชาทั้งหมดที่ลงทะเบียน</button
                >
              {:else}
                <button on:click={() => remode("addadmin")}>เพิ่มรายวิชา</button
                >
                <button on:click={() => remode("removeadmin")}>ลบรายวิชา</button
                >
                <button on:click={() => remode("statistics")}
                  >สถิติการลงทะเบียน</button
                >
              {/if}
            </div>
          </div>
          <div class="dropdown">
            <button class="btn-head">ตั้งค่า</button>
            <div class="dropdown-content">
              <button on:click={() => remode("editprofile")}
                >แก้ไขโปรไฟล์</button
              >
              <button on:click={() => logout()}>ออกจากระบบ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

<style>
  #profile-nav-container {
    display: flex;
    align-items: center;
    color: white;
    margin-right: 15px;
  }

  #profile-nav-container img {
    width: 45px;
    height: 45px;
    border-radius: 45px;
    margin-right: 15px;
    vertical-align: middle;
  }

  #profile-nav-container p {
    margin: 0;
    font-size: 10px;
  }

  .flex-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-left: 30px;
    margin-right: 100px;
  }

  .nav {
    background-color: #3a3845;
  }

  .btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    background-color: transparent;
  }

  .btn .btn-head {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin-left: 30px;
    margin-right: 30px;
    padding: 5px;
  }

  .btn button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 12px;
  }

  .dropdown {
    text-align: center;
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #3a3845;
    min-width: 160px;
  }

  .dropdown-content button {
    background-color: transparent;
    border: none;
    color: white;
    padding: 12px 16px;
    display: block;
    cursor: pointer;
  }

  .dropdown-content button:hover {
    color: #ff6b6b;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .btn-head {
    color: #4d96ff;
  }

  .btn-head:hover {
    color: #4d96ff;
  }

  .nav button:active {
    color: rgb(255, 150, 171);
  }
</style>
