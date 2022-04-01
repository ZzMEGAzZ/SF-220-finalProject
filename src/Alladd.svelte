<script>
  import { accounts, account } from "./stores.js";
</script>

<h1>allsubjects ที่ add</h1>


<table>
  <tr>รายวิชา</tr>
  {#each $accounts[$account].sub as i}
    <tr>
      {i}
    </tr>
  {/each}
</table>
