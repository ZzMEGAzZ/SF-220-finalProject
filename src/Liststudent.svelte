<script>
  import { mode, subjects, sub, accounts, account } from "./stores.js";

  let list = [];

  let issearch = false;
  let searchname = "";

  let subject = $sub;
  for (let key in $accounts) {
    if ($accounts[key].sub.includes(subject)) {
      list.push($accounts[key].name +" "+ $accounts[key].id);
    }
  }
</script>

<div id="bg2" />
<div id="bg" />
<box>
  <div id="sticky">
    <div id="page-name"><h1>รายชื่อนักศึกษา วิชา : {$sub}</h1></div>

    <div id="search">
      <input
        type="text"
        id="search"
        placeholder="ค้นหารายชื่อ"
        on:input={(e) => (searchname = e.target.value)}
        on:input={() => (issearch = true)}
      />
    </div>
  </div>
    <table id="content">
{#each list as name}
{#if issearch == false || name
  .toLowerCase()
  .includes(searchname.toLowerCase())}
  <tr id="list-content">
    <td id="name">{name}</td>
    {/if}
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

  #list-content {
    display: flex;
    justify-content: center;
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
    font-size: 25px;
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
</style>
