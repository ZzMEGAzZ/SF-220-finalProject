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
        <ul>
          <li on:click={() => remode("profile")}><button>หน้าหลัก</button></li>
          <li>
            <button>ลงทะเบียน</button>
            <ul>
              <li on:click={() => remode("allsubjects")}>
                <button>รายวิชาทั้งหมด</button>
              </li>
              {#if !checkrole_admin()}
                <li on:click={() => remode("addsubjects")}>
                  <button>เพิ่มรายวิชา</button>
                </li>
                <li on:click={() => remode("removesubjects")}>
                  <button>ถอนรายวิชา</button>
                </li>
                <li on:click={() => remode("alladd")}>
                  <button>วิชาทั้งหมดที่ลงทะเบียน</button>
                </li>
              {:else}
                <li on:click={() => remode("addandedit")}>
                  <button>เพิ่มและแก้ไขรายวิชา</button>
                </li>
                <li on:click={() => remode("removeadmin")}>
                  <button>ลบรายวิชา</button>
                </li>
                <li on:click={() => remode("statistics")}>
                  <button>สถิตการลงทะเบียน</button>
                </li>
              {/if}
            </ul>
          </li>
          <li>
            <button>ตั้งค่า</button>
            <ul>
              <li on:click={() => remode("editprofile")}>
                <button>แก้ไขโปรไฟล์</button>
              </li>
              <li on:click={() => logout()}>
                <button>ออกจากระบบ</button>
              </li>
            </ul>
          </li>
        </ul>
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
    margin-right: 30px;
  }

  .nav {
    overflow: hidden;
    background-color: #3a3845;
  }

  .nav ul {
    list-style: none;
    background-color: #3a3845;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  .nav button {
    background-color: transparent;
    text-decoration: none;
    text-align: center;
    color: white;
    font-size: 11px;
    font-weight: bold;
    border: none;
    outline: none;
  }

  .nav button:hover {
    color: #4d96ff;
  }

  .nav button:active {
    color: #ff6b6b;
    cursor: pointer;
  }

  .nav li li {
    font-size: 10px;
  }

  @media screen and (min-width: 650px) {
    .nav li {
      width: 130px;
      border: none;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      display: inline-block;
      margin-right: -4px;
    }
  }

  .nav button {
    border: none;
  }

  .nav ul li {
    text-align: center;
  }

  .nav ul li button {
    padding-left: 0;
    text-align: center;
  }

  .nav li ul {
    position: absolute;
    display: none;
    width: inherit;
  }

  .nav li:hover ul {
    display: block;
  }

  .nav li ul li {
    display: block;
  }
</style>
