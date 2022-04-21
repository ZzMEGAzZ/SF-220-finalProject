<script>
  import { accounts, account, subjects } from "./stores.js";
</script>

<div id="bg2" />
<div id="bg" />
<box>
  <div id="sticky">

  <div id="page-name"><h1>ผลการขอโควตา</h1></div>

   <table id="head">
      <tr id="head-list">
        <td class="half-space" />
        <th class="index">ลำดับที่</th>
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
    {#each $accounts[$account].sub as name, index}
    <tr id="list-content">
      <td class="space" />
      <td id="index">{index + 1}</td>
      <td id="idsub">{name}</td>
      <td class="half-space" />
      <td class="space" />
      <td class="space" />
      <td id="subject">{$subjects.find((x) => x.name == name).subject}</td>
      <td id="credit">{$subjects.find((x) => x.name == name).credit}</td>
      <td class="space" />
      <td class="half-space" />
      <td id="teacher">{$subjects.find((x) => x.name == name).Teacher}</td>
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

  #content {
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

</style>
