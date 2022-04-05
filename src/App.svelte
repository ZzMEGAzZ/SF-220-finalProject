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

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCb0yKSZNCYMUmtONpHi_8f5KQTUVv8Nhk",
    authDomain: "sf220-last-project.firebaseapp.com",
    projectId: "sf220-last-project",
    storageBucket: "sf220-last-project.appspot.com",
    messagingSenderId: "519567761335",
    appId: "1:519567761335:web:21996f7a3300e84f715232",
    measurementId: "G-R68XQY6Z69"
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
  {:else if $mode == "addadmin"}
    <Addadmin />
  {:else if $mode == "removeadmin"}
    <Removeadmin />
  {:else if $mode == "detail"}
    <Detail />
  {/if}
{/if}

