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
  import Addadmin from "./Addadmin.svelte";
  import Removeadmin from "./Removeadmin.svelte";
  import Detail from "./Detail.svelte";
  import Liststudent from "./Liststudent.svelte";

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA5wOssAOnziELHyIsImd-wliieN2l9eeY",
    authDomain: "sf-220-final.firebaseapp.com",
    projectId: "sf-220-final",
    storageBucket: "sf-220-final.appspot.com",
    messagingSenderId: "759002209096",
    appId: "1:759002209096:web:bb3137ba26b0db5359b17d",
    measurementId: "G-XL6ZHD3ND7",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

{#if !$islogin && !($mode == "forgot")}
  <Login />
{:else if !$islogin && $mode == "forgot"}
  <Forgot />
{:else}
  <div class="sticky">
    <Headerbar />
  </div>
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
  {:else if $mode == "addadmin"}
    <Addadmin />
  {:else if $mode == "removeadmin"}
    <Removeadmin />
  {:else if $mode == "detail"}
    <Detail />
  {:else if $mode == "liststudent"}
    <Liststudent />
  {/if}
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "prompt", sans-serif;
  }

  :global(input) {
    display: flex;
    margin: 6px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255, 0.5);
  }

  :global(textarea) {
    display: flex;
    margin: 6px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255, 0.5);
  }

  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
  }
</style>
