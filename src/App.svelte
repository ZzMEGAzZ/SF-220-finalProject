<script>
  import { islogin, mode, accounts, account } from "./stores.js";
  import Login from "./Login.svelte";
  import Forgot from "./Forgot.svelte";
  import Profile from "./Profile.svelte";
  import Headerbar from "./Headerbar.svelte";
  import Allsubjects from "./All.svelte";
  import Addsubjects from "./Add.svelte";
  import Removesubjects from "./Remove.svelte";
  import Alladd from "./Alladd.svelte";
  import Editprofile from "./Editprofile.svelte";
  import Statistics from "./Statistics.svelte";
  import Addandedit from "./Addandedit.svelte";
  import Removeadmin from "./Removeadmin.svelte";
  import Detail from "./Detail.svelte";
</script>

{#if !$islogin && !($mode == "forgot")}
  <Login />
{:else if !$islogin && $mode == "forgot"}
  <Forgot />
{:else}
  <Headerbar />

  {#if $mode == "profile"}
    <Profile />
  {:else if $mode == "allsubjects"}
    <Allsubjects />
  {:else if $mode == "addsubjects"}
    <Addsubjects />
  {:else if $mode == "removesubjects"}
    <Removesubjects />
  {:else if $mode == "alladd"}
    <Alladd />
  {:else if $mode == "editprofile"}
    <Editprofile />
  {:else if $mode == "statistics"}
    <Statistics />
  {:else if $mode == "addandedit"}
    <Addandedit />
  {:else if $mode == "removeadmin"}
    <Removeadmin />
  {:else if $mode == "detail"}
    <Detail />
  {/if}
{/if}
