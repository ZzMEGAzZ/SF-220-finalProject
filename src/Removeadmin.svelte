<script>
  import { subjects, accounts, account, mode } from "./stores.js";

  function removesubject(name, index) {
    let confirm = prompt(
      "กรุณายืนยันการลบรายวิชา(กรอก 'ยืนยัน' เพื่อยืนยันการลบรายวิชา)"
    );
    if (confirm == "ยืนยัน") {
      alert("ลบรายวิชาสำเร็จ");
      $subjects.splice(index, 1);
      $subjects = [...new Set($subjects)];
      deletesubjectallusers(name);
    }
  }

  function deletesubjectallusers(name) {
    alert("ลบรายวิชานี้ออกจากผู้ใช้ทั้งหมดแล้ว");
    for (let key in $accounts) {
      for (let i = 0; i < $accounts[key].sub.length; i++) {
        if ($accounts[key].sub[i] == name) {
          $accounts[key].sub.splice(i, 1);
          i--;
          $accounts[key].sub = [...new Set($accounts[key].sub)];
        }
      }
    }
    $mode = "allsubjects";
  }
</script>

<div id="bg2" />
<div id="bg" />
<box>
  <div id="sticky">
    <div id="page-name"><h1>ลบรายวิชา</h1></div>

    <table id="head">
      <tr id="head-list">
        <td class="half-space" />
        <th class="num">ลำดับที่</th>
        <td class="space" />
        <td class="half-space" />
        <th class="sub">รายวิชา</th>
        <td class="half-space" />
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
      <tr id="list-content">
        <td class="space" />
        <td id="index">{index + 1}</td>
        <td class="space" />
        <td id="name">{name}</td>
        <td class="space" />
        <td class="space" />
        <td id="total">{total}</td>
        <td class="space" />
        <td id="register">{register}</td>
        <td class="space" />
        <td id="remaining">{remaining}</td>
        <td class="space" />
        <td
          ><button
            class="button button1"
            on:click={() => removesubject(name, index)}>ลบ</button
          ></td
        >
      </tr>
    {/each}
  </table>
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
    align-items: left;
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
    margin-top: 100px;
    color: white;
  }

  #content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px;
    height: auto;
    position: relative;
    top: 300px;
  }

  .half-space {
    width: 20px;
  }

  td {
    width: 40px;
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
  
  .button {
    margin-top: auto;
    padding: 10px 20px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 40px;
    transition-duration: 0.4s;
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .button1 {
    background-color: white;
    color: black;
    border: 2px solid rgba(69, 117, 165, 1);
  }

  .button1:hover {
    background-color: rgb(103, 163, 217);
    color: white;
  }
</style>
