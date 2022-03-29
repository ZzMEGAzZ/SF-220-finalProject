<script>
  import { islogin, mode, account, accounts } from "./stores.js";
</script>

<img src={$accounts[$account].image} />
<p>{$accounts[$account].name}</p>
<p>{$accounts[$account].id}</p>
<p>{$accounts[$account].group}</p>
<p>{$accounts[$account].year}</p>
