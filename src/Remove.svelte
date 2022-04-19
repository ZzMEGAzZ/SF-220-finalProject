<script>
  let x = [];
  let y = [];
  let name = "";
  import { accounts, account, mode, subjects } from "./stores.js";

  function removesubjects(subject, index) {
    let confirm = prompt(
      "กรุณายืนยันวิชาที่ต้องการเอาออก(กรอก 'ยืนยัน' เพื่อยืนยันวิชาที่ต้องการถอน)"
    );
    if (confirm == "ยืนยัน") {
      x.push(subject);
      x = x;
      x = Array.from(new Set(x));
      y.push(index);
      y = y;
      y = Array.from(new Set(y));
    }
  }

  function confirm(x, y) {
    let i = 0;
    let len = x.length;
    for (; i < len; i++) {
      $accounts[$account].sub.splice($accounts[$account].sub.indexOf(x[i]), 1);
    }
    $accounts[$account].sub = [...new Set($accounts[$account].sub)];
    let j = 0;
    len = y.length;
    for (; j < len; j++) {
      $subjects[y[j]].register--;
      $subjects[y[j]].remaining++;
    }

    $mode = "alladd";
  }
</script>
<box>
<div><h1>ถอดถอนรายวิชา</h1></div>

<div>
    <div id="list">
      <p id="subject">รายวิชา</p>
      <p id="etc">เพิ่มเติม</p>
    </div>

    {#each $subjects as { name, total, register, remaining }, index}
      {#each $accounts[$account].sub as sub}
        {#if sub == name}
          <div id="content">
            <p id="name">{name}</p>
            <div>
              <button on:click={() => removesubjects(name, index)}
                >ถอนรายวิชา</button
              >
              </div>
            </div>
        {/if}
      {/each}
    {/each}
</div>

<div>
  <p id="p1">วิชาที่ต้องการถอน</p>
  <p id="p2">{x}</p>
</div>

<div>
  <button class="button" on:click={() => confirm(x, y)}
    >ยืนยันวิชาที่ต้องการถอน</button
  >
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

  #content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
  }

  p#name {
    font-size: 15px;
    font-weight: bold;
    color: white;
  }

  #list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;

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
    color: white;
  }
</style>
