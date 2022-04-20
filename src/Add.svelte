<script>
  let x = [];
  let y = [];
  let issearch = false;
  let searchname = "";
  import { subjects, accounts, account, mode } from "./stores.js";

  function addsubjects(name, index) {
    if (!(name in $accounts[$account].sub)) {
      x.push(name);
      x = x;
      x = Array.from(new Set(x));
      y.push(index);
      y = y;
      y = Array.from(new Set(y));
    } else {
      alert("วิชานี้ถูกเพิ่มไปแล้ว");
    }
  }

  function confirm(x) {
    let confirm = prompt(
      "กรุณายืนยันการขอโควตา(กรอก 'ยืนยัน' เพื่อยืนยันการขอโควตา)"
    );
    if ((confirm = "ยืนยัน")) {
      let i = 0;
      let len = x.length;
      for (; i < len; i++) {
        $accounts[$account].sub.push(x[i]);
        $accounts[$account].sub = [...new Set($accounts[$account].sub)];
      }
      let j = 0;
      len = y.length;
      for (; j < len; j++) {
        $subjects[y[j]].register++;
        $subjects[y[j]].remaining--;
      }

      $mode = "alladd";
    }
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

<box>
  <div>
    <h1>การขอโควตา</h1>
  </div>

  <div>
    <input
      type="text"
      id="search"
      placeholder="ค้นหารายวิชา"
      on:input={(e) => (searchname = e.target.value)}
      on:input={() => (issearch = true)}
    />
  </div>

  <div id="headlist">
    <div id="content">
      <p />
      <p id="subject">รายวิชา</p>
      <p id="total">โควตาทั้งหมด</p>
      <p id="register">จำนวนนักศึกษาที่ขอ</p>
      <p id="remaining">คงเหลือ</p>
      <p id="etc">เพิ่มเติม</p>
    </div>

    {#each $subjects as { name, total, register, remaining }, index}
      {#if issearch == false || name
          .toLowerCase()
          .includes(searchname.toLowerCase())}
        <div id="content">
          <p id="num">{index + 1}</p>
          <p id="name">{name}</p>
          <p id="tot">{total}</p>
          <p id="reg">{register}</p>
          <p id="rem">{remaining}</p>
          <div id="result">
            {#if check(name)}
              ขอโควตาแล้ว
            {:else if remaining == 0}
              วิชานี้เต็มแล้ว
            {:else}
              <button class="glow-on-hover" on:click={addsubjects(name, index)}>
                เพิ่ม
              </button>
            {/if}
          </div>
        </div>
      {/if}
    {/each}
  </div>

  <div>
    <p id="p1">วิชาที่ต้องการขอโควตา</p>
    {#each x as name, index}
      {name}
      <button on:click={() => (x = x.filter((_, i) => i != index))}
        >&#10060;
      </button>
      <br />
    {/each}
  </div>

  <div>
    <button class="button" on:click={() => confirm(x)}>ยืนยันการขอโควตา</button>
  </div>
</box>
<div id="bg" />

<style>
  #bg {
    background-image: linear-gradient(
      180deg,
      rgba(17, 34, 49, 1) 4%,
      rgba(30, 71, 112, 1) 32%,
      rgba(69, 117, 165, 0.8) 72%,
      rgba(190, 220, 239, 1) 100%
    );
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
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

  #headlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
  }

  #content {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: auto;
    margin-top: 10px;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 20px;
    background-color: rgb(255, 255, 255, 0.5);
  }

  .button {
    margin-top: auto;
    padding: 10px 20px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    outline: none;
    background-color: #d3d3d3;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px rgb(228, 228, 228);
  }

  .button:hover {
    background-color: #b5b5b5;
  }

  .button:active {
    background-color: #b5b5b5;
    box-shadow: 0 5px rgb(228, 228, 228);
    transform: translateY(4px);
  }
  #p1 {
    font-weight: bold;
    margin: 10px;
  }
  #p2 {
    font-weight: bold;
    margin: 12px;
  }
  input {
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
</style>
