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

<div id="bg2" />
<div id="bg" />
<box>
  <div id="sticky">
    <div id="page-name"><h1>การขอโควตา</h1></div>

    <div id="search">
      <input
        type="text"
        id="search"
        placeholder="ค้นหารายวิชา"
        on:input={(e) => (searchname = e.target.value)}
        on:input={() => (issearch = true)}
      />
    </div>

    <table id="head">
      <tr id="head-list">
        <td class="half-space" />
        <th class="num">ลำดับที่</th>
        <td class="space" />
        <th class="sub">รายวิชา</th>
        <td class="space" />
        <th class="quo">โควตา</th>
        <td class="half-space" />
        <th class="amo">ลงทะเบียน</th>
        <td class="half-space" />
        <th class="rem">คงเหลือ</th>
      </tr>
    </table>
  </div>
    <table id="content">
      {#each $subjects as { name, total, register, remaining }, index}
        {#if issearch == false || name
            .toLowerCase()
            .includes(searchname.toLowerCase())}
          <tr id="list-content">
            <td class="space" />
            <td id="index">{index + 1}</td>
            <td class="space" />
            <td id="name">{name}</td>
            <td class="space" />
            <td class="half-space" />
            <td id="total">{total}</td>
            <td class="space" />
            <td id="register">{register}</td>
            <td class="space" />
            <td class="space" />
            <td id="remaining">{remaining}</td>
            <td class="space" />
            <td id="result">
              {#if check(name)}
                ขอโควตาแล้ว
              {:else if remaining == 0}
                วิชานี้เต็มแล้ว
              {:else}
                <button
                  class="glow-on-hover"
                  on:click={addsubjects(name, index)}
                >
                  เพิ่ม
                </button>
              {/if}
            </td>
          </tr>{/if}
      {/each}
    </table>
  <div id="sum">
    <table id="sum-sub">
      <th> วิชาที่ต้องการขอโควตา: &nbsp; </th>
      {#each x as name, index}
        <td>{name}</td>
        <td
          ><button on:click={() => (x = x.filter((_, i) => i != index))}
            >&#10060;</button
          ></td
        >
        <br />
      {/each}
    </table>

    <div>
      <button class="button" on:click={() => confirm(x)}
        >ยืนยันการขอโควตา</button
      >
    </div>
    <bottom />
    </div>

</box>

<style>
  #sticky {
    position: -webkit-sticky;
    position: fixed;
    top: 100px;
    width: 100%;
    z-index: 60;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  #head {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 600px;
  }

  #head-list {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: auto;
    position: relative;
    top: 0px;
    margin-top: 30px;
    color: white;
  }

  #content, #sum {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px;
    height: auto;
    position: relative;
    top: 300px;
    bottom: 0;
  }

  #sum {
    margin: 50px;
    width: 1000px;
  }

  .half-space {
    width: 20px;
  }

  td {
    width: 40px;
  }

  #result {
    width: 200px;
  }

  #list-content {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: auto;
    position: relative;
    top: 0px;
    margin: 10px;

    border-radius: 20px;
    width: 100%;
    height: auto;
    color: white;
    background-color: rgb(255, 255, 255, 0.3);
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
    width: 600px;
    height: 40px;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    background-color: rgb(255, 255, 255, 0.15);
    padding-left: 10px;
    margin: 10px;
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

  bottom {
    margin-bottom: 50px;
  }
</style>
