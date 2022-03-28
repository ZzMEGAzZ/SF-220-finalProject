<script>
  import { islogin, mode } from "./stores.js";
  import Login from "./Login.svelte";
  import Forgot from "./Forgot.svelte";
  import Profile from "./Profile.svelte";
  import Headerbar from "./Headerbar.svelte";
  import Allsubjects from "./All.svelte";
  import Addsubjects from "./Add.svelte";
  import Removesubjects from "./Remove.svelte";
  import Alladd from "./Alladd.svelte";
  import Editprofile from "./Editprofile.svelte";
</script>

{#if !$islogin}
  <Login />
{:else}
  <Headerbar />

  {#if $mode == "profile"}
    <Profile />
  {:else if $mode == "forgot"}
    <Forgot />
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
  {/if}
{/if}
