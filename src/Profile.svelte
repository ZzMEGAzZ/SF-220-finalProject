<script>
  import { islogin, mode, account, accounts } from "./stores.js";
</script>

<div id="profile">
  <img src={$accounts[$account].image} />
  <div id="detail-profile">
    <p display="inline">ชื่อ {$accounts[$account].name}</p>
    <p>เลขประจำตัว {$accounts[$account].id}</p>
    <p>คณะ {$accounts[$account].group}</p>
    <p>ปีการศึกษา {$accounts[$account].year}</p>
  </div>
</div>

<style>
  
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