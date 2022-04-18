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

<div id="bg" />
<div id="profile">
  <img src={$accounts[$account].image} alt="img profile" />
  <div id="detail-profile">
		{#if !isadmin()} 
			<p > <b>ชื่อ</b> {$accounts[$account].name}</p>
    <p> <b>เลขประจำตัว</b> {$accounts[$account].id}</p>
    <p> <b>คณะ</b> {$accounts[$account].group}</p>
    <p> <b>ปีการศึกษา</b> {$accounts[$account].year}</p>
		
		{:else} 
			<p > <b>ชื่อ</b> {$accounts[$account].name}</p>
    <p> <b>เลขประจำตัว</b> {$accounts[$account].id}</p>
    <p> <b>สังกัด</b> {$accounts[$account].group}</p>

		{/if}
    
  </div>
</div>

<style>
  
  #bg {
    background-image: linear-gradient(180deg, rgba(17, 34, 49, 1) 4%, rgba(30, 71, 112, 1) 32%, rgba(69, 117, 165, 0.8) 72%, rgba(190, 220, 239, 1) 100%);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  img{
    width: 200px;
    height: 200px;
    border-radius: 20px;
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
</style>