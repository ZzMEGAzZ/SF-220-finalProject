<script>
  import { mode, subjects, sub, accounts, account } from "./stores.js";

  let issearch = false;
  let searchname = "";

  function description(subject) {
    $mode = "detail";
    $sub = subject;
  }
  function isadmin() {
    if ($accounts[$account].role == "admin") {
      return true;
    } else {
      return false;
    }
  }
  function showliststudents(subject) {
    $mode = "liststudent";
    $sub = subject;
  }
</script>

<div id="bg2" />
<div id="bg" />
<box>
  <div id="sticky">
    <div id="page-name"><h1>รายวิชาที่เปิดให้ขอโควตา</h1></div>

    <div id="search">
      <input
        type="text"
        id="search"
        placeholder="ค้นหารายวิชา"
        on:input={(e) => (searchname = e.target.value)}
        on:input={() => (issearch = true)}
      />
    </div>

        <div id="list">
      <div id="head-list">
        <p class="num">ลำดับที่</p>
        <p class="sub">รายวิชา</p>
        <p class="quo">โควต้า<br>ทั้งหมด</p>
        <p class="amo">จำนวนที่<br>ขอโควตา</p>
        <p class="rem">เหลือ</p>
        <p class="etc">เพิ่มเติม</p>
      </div>
    </div>
  </div>
  <div id="wrap">
  <div id="content">
    {#each $subjects as { name, total, register, remaining, short_description }, index}
      {#if issearch == false || name
          .toLowerCase()
          .includes(searchname.toLowerCase())}
        <div id="list-container">
          <p id="index">{index + 1}</p>
          {#if !isadmin()}
            <div id="description">
              <button class="glow-on-hover" on:click={() => description(name)}>{name}</button>
            </div>
          {:else}
            <p id="name">{name}</p>
          {/if}
          <p id="total">{total}</p>
          <p id="register">{register}</p>
          <p id="remaining">{remaining}</p>
          <p id="shortdes">{short_description}</p>
          {#if isadmin()}
            <div id="admin-list">
              <button class="glow-on-hover" on:click={() => showliststudents(name)}
                >รายชื่อนักศึกษา</button
              >
            </div>
            <div id="admin-edit">
              <button class="glow-on-hover" on:click={() => description(name)}>แก้ไข</button>
            </div>
          {/if}
        </div>
      {/if}
    {/each}
  </div>
  </div>
</box>

<style>
  #sticky {
    position: -webkit-sticky;
    position: fixed;
    top: 100px;
    width: 100%;
    z-index: 60;
  }

  #bg {
    background-image: linear-gradient(
      180deg,
      rgb(6, 113, 183) 22%,
      rgb(103, 163, 217) 32%,
      rgb(199, 230, 245) 42%
    );
    width: 100%;
    height: 800%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  #bg2 {
    background-image: linear-gradient(
      0deg,
      rgb(6, 113, 183) 10%,
      rgb(103, 163, 217) 72%,
      rgb(199, 230, 245) 92%
    );
    width: 100%;
    height: 380px;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: auto;
  }

  #wrap {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: auto;
    width: 100%;
  }

  #content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    position: relative;
    top: 300px;
  }

  #page-name {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  #page-name h1 {
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 60px;
  }

  #search {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #search input {
    width: 1000px;
    height: 40px;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    background-color: rgb(255, 255, 255, 0.15);
    padding-left: 10px;
  }

  #head-list {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 22%;
    padding-right: 40%;

    color: white;
  }

  #head-list p {
    font-size: 15px;
    margin: 10px;
    text-align: center;
  }

  #list-container {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    width: auto;
    height: 50px;
    color: white;
    background-color: rgb(255, 255, 255, 0.15);
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    width: 60%;
  }

  #list-container p {
    font-size: 20px;
    text-align: center;
  }
  .glow-on-hover {
    width: auto;
    height: 42px;
    padding: 10px;
    border: none;
    outline: none;
    color: #fff;
    background: rgba(190, 220, 239, 1) 42%;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
  }

  .glow-on-hover:before {
    content: "";
    background: linear-gradient(
      180deg,
      rgba(17, 34, 49, 1) 10%,
      rgba(30, 71, 112, 1) 22%,
      rgba(69, 117, 165, 1) 32%,
      rgba(190, 220, 239, 1) 42%
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  .glow-on-hover:active {
    color: #000;
  }

  .glow-on-hover:active:after {
    background: transparent;
  }

  .glow-on-hover:hover:before {
    opacity: 1;
  }

  .glow-on-hover:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  .num,.sub,.quo,.amo,.rem,.etc{
  position:relative;
}

.num{
  right: 177px;
}
.sub{
  right: 178px;
}
.quo{
  right: 180px;
}
.amo{
  right: 192px;
}
.rem{
  right: 208px;
}
.etc{
  right: 145px;
}

</style>
