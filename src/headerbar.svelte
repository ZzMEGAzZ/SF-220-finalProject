<script>
  import { mode, account, accounts } from "./stores.js";

  function remode(x) {
    $mode = x;
  }
</script>

<header>
  <div class="nav">
    <div class="flex-nav">
      <div id="profile-nav-container">
        <img src={$accounts[$account].image} />
        <p> <b>ชื่อ</b> {$accounts[$account].name} <br> <b>เลขประจำตัว</b> {$accounts[$account].id} </p>
      </div>
      <ul>
        <li on:click={() => remode("profile")}><a href="#">หน้าหลัก</a></li>
        <li>
          <a href="#">ลงทะเบียน</a>
          <ul>
            <li on:click={() => remode("allsubjects")}><a href="#">รายวิชาทั้งหมด</a></li>
            <li on:click={() => remode("addsubjects")}><a href="#">เพิ่มรายวิชา</a></li>
            <li on:click={() => remode("removesubjects")}><a href="#">ถอนรายวิชา</a></li>
            <li on:click={() => remode("alladd")}><a href="#">วิชาทั้งหมดที่ลงทะเบียน</a></li>
          </ul>
        </li>
        <li>
          <a href="#">ตั้งค่า</a>
          <ul>
            <li on:click={() => remode("editprofile")}><a href="#">แก้ไขโปรไฟล์</a></li>
            <li><a href="#" >ออกจากระบบ</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</header>

<style>

  #profile-nav-container {
    display: flex;
    align-items: center;
    color: white;
    margin-left: 30px;
    margin-right: 15px;
  }

  #profile-nav-container img {
    width: 45px;
    height: 45px;
    border-radius: 45px;
    margin-right: 15px ;
    vertical-align: middle;
  }

  
  #profile-nav-container p{
    margin: 0;
    font-size: 10px;
  }

  .flex-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-right: 30px;
  }

  .nav {
    overflow: hidden;
    background-color: #3A3845;
  }

  .nav ul {
    list-style: none;
    background-color: #3A3845;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  .nav li {
    font-size: 14px;
    line-height: 40px;
    text-align: left;
  }

  .nav a {
    text-decoration: none;
    text-align: center;
    color: white;
    display: block;
    border: 1px solid black;
    transition: .1s;
  }

  .nav a:hover {
    background-color: #4D96FF;
  }

  .nav a:active {
    background-color: #cee2ff;
    color: #FF6B6B;
    cursor: pointer;
  }

  .nav li li{
    font-size: 10px;
  }

  @media screen and (min-width: 650px){
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

  .nav a {
    border: none;
  }

  .nav ul li{
    text-align: center;
  }

  .nav ul li a {
    padding-left: 0;
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
