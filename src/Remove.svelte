<script>
  let x = [];
  let y = [];
  let name = "";
  import { accounts, account, mode, subjects } from "./stores.js";

  function removesubjects(subject, index) {
    x.push(subject);
    x = x;
    x = Array.from(new Set(x));
    y.push(index);
    y = y;
    y = Array.from(new Set(y));
  }

  function confirm(x, y) {
    let confirm = prompt(
      'กรุณายืนยันการลบรายวิชา(กรอก "ยืนยัน" เพื่อยืนยันการลบรายวิชา)'
    );
    if ((confirm = "ยืนยัน")) {
      let i = 0;
      let len = x.length;
      for (; i < len; i++) {
        $accounts[$account].sub.splice(
          $accounts[$account].sub.indexOf(x[i]),
          1
        );
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
  }
</script>

<div id="bg2" />
<div id="bg" />
<box>
  <div id="sticky">
    <div id="page-name"><h1>ถอนรายชื่อโควตา</h1></div>

    <table id="head">
      <tr id="head-list">
        <td class="half-space" />
        <th class="sub">รหัสวิชา</th>
        <td class="space" />
        <td class="space" />
        <td class="space" />
        <th class="name">รายวิชา</th>
        <td class="half-space" />
        <td class="space" />
        <td class="space" />
        <td class="space" />
        <td class="space" />
        <th class="credit">หน่วยกิต</th>
        <td class="half-space" />
        <td class="space" />
        <td class="space" />
        <th class="teach">อาจารย์ผู้สอน</th>
      </tr>
    </table>
  </div>
  <table id="content">
    {#each $subjects as { name, subject, credit, Teacher }, index}
      {#each $accounts[$account].sub as sub}
        {#if sub == name}
          <tr id="list-content">
            <td class="half-space" />
            <td id="sub-name">{name}</td>
            <td class="space" />
            <td id="subject">{subject}</td>
            <td class="space" />
            <td id="credit">{credit}</td>
            <td class="space" />
            <td id="teacher">{Teacher}</td>
            <td class="space" />
            <td id="remove">
              <button on:click={() => removesubjects(name, index)}
                >ถอนรายวิชา</button
              >
            </td>
          </tr>
        {/if}
      {/each}
    {/each}
  </table>

  <div id="sum">
    <table id="sum-sub">
      <th> วิชาที่ต้องการถอน: &nbsp; </th>
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
    <button class="button" on:click={() => confirm(x, y)}
      >ยืนยันวิชาที่ต้องการถอน</button
    >
  </div>
  <bottom />
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
    width: 1000px;
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

  #content,
  #sum {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1000px;
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

  #subject {
    width: 300px;
  }

  #teacher {
    width: 300px;
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

  bottom {
    margin-bottom: 50px;
  }
</style>
