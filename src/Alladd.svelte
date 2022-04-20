<script>
  import { accounts, account, subjects } from "./stores.js";
</script>

<box>
  <div id="pagehead"><h1>ผลการขอโควตา</h1></div>

  <div id="list">
    <p id="num">ลำดับที่</p>
    <p id="sub">รหัสวิชา</p>
    <p id="name">ชื่อวิชา</p>
    <p id="cred">หน่วยกิต</p>
    <p id="teach">อาจารย์ผู้สอน</p>
  </div>

  <div id="content">
    {#each $accounts[$account].sub as name, index}
      <br />
      <p id="index">{index + 1}</p>
      <p id="idsub">{name}</p>
      <p id="subject">{$subjects.find((x) => x.name == name).subject}</p>
      <p id="credit">{$subjects.find((x) => x.name == name).credit}</p>
      <p id="teacher">{$subjects.find((x) => x.name == name).Teacher}</p>
    {/each}
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
  div {
    display: flex;
    justify-content: center;
  }
  div h1 {
    margin-top: 50px;
    color: white;
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
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: auto;
    background-color: rgb(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    color: white;
  }

  #list {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    height: auto;
    margin-top: 10px;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 20px;
    background-color: rgb(255, 255, 255, 0.5);
    padding: 10px;
    margin: 10px;
    color: white;
  }
</style>
