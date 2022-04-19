<script>
  import { mode, subjects, sub, accounts, account } from "./stores.js";

  let list = [];

  let subject = $sub;
  for (let key in $accounts) {
    if ($accounts[key].sub.includes(subject)) {
      list.push($accounts[key].name);
    }
  }
</script>

รายชื่อนักศึกษา วิชา : {$sub}
<br />

{#each list as name}
  {name}
  <br />
{/each}

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
</style>
