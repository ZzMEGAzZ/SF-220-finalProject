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
