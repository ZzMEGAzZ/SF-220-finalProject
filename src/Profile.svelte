<script>
  import { islogin, mode, account, accounts } from "./stores.js";

  function isadmin() {
    if ($accounts[$account].role == "admin") {
      return true;
    } else {
      return false;
    }
  }
</script>

<div id="profile">
  <box>
    <img src={$accounts[$account].image} alt="img profile" />
    <div id="detail-profile">
      {#if !isadmin()}
        <p><b>ชื่อ :</b> {$accounts[$account].name}</p>
        <p><b>เลขประจำตัว :</b> {$accounts[$account].id}</p>
        <p><b>คณะ :</b> {$accounts[$account].group}</p>
        <p><b>ปีการศึกษา :</b> {$accounts[$account].year}</p>
      {:else}
        <p><b>ชื่อ :</b> {$accounts[$account].name}</p>
        <p><b>เลขประจำตัว :</b> {$accounts[$account].id}</p>
        <p><b>สังกัด :</b> {$accounts[$account].group}</p>
      {/if}
    </div>
  </box>
</div>

<div id="bg" />

<style>
 #bg {
    background: linear-gradient(
      -45deg,
      #A202FF,
      #0671B7,
      #67A3D9,
      #C8E7F5 
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin-left: 50px;
    margin-right: 50px;
  }

  #profile {
    height: 60%;
    width: auto !important;

    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  #detail-profile {
    margin: 10%;
    display: flex;
    flex-direction: column;
  }

  box{
    background-color: rgb(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    margin-top: 100px;
    border-radius:40px;
    width: 530px;
    height: 294px;
  }
</style>
