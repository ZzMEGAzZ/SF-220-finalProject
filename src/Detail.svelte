<script>
  import { mode, subjects, sub, accounts, account } from "./stores.js";
  let name = $sub;
  let subject = $subjects.find((x) => x.name == name).subject;
  function isadmin() {
    if ($accounts[$account].role == "admin") {
      return true;
    } else {
      return false;
    }
  }
  function change_subject() {
    let newcredit = document.getElementById("credit").value;
    let newtotal = document.getElementById("total").value;
    let newdescription = document.getElementById("description").value;
    let new_short_description =
      document.getElementById("short_description").value;
    if (!Number.isInteger(+newtotal) || !Number.isInteger(+newcredit)) {
      alert("กรุณากรอกเป็นจำนวนเต็ม");
    } else if (
      newcredit >= 0 &&
      newtotal >= 0 &&
      newcredit <= 3 &&
      newtotal <= 100 &&
      newtotal >= $subjects.find((x) => x.name == name).register
    ) {
      $subjects.find((x) => x.name == name).credit = Math.ceil(newcredit);
      $subjects.find((x) => x.name == name).total = Math.ceil(newtotal);
      $subjects.find((x) => x.name == name).description = newdescription;
      $subjects.find((x) => x.name == name).short_description =
        new_short_description;
      $subjects.find((x) => x.name == name).remaining =
        newtotal - $subjects.find((x) => x.name == name).register;
      $mode = "allsubjects";
      alert("บันทึก");
    } else if (newtotal < $subjects.find((x) => x.name == name).register) {
      alert("จำนวนผู้ลงทะเบียนเกินกว่าค่าที่แก้");
    } else {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
    }
  }
</script>

<div class="title">
  <h1>รายละเอียดวิชา</h1>
  <div id="title1">{name}</div>
</div>
<br />
{#if !isadmin()}
  <div class="stu_container">
    <div class="All_stu">
      <div class="stu_sub1">
        วิชา {subject}
      </div>

      <div class="stu_sub2">
        หน่วยกิต : {$subjects.find((x) => x.name == name).credit}
      </div>

      <div class="stu_sub3">
        จำนวนโควต้า : {$subjects.find((x) => x.name == name).total}
      </div>

      <div class="stu_sub4">
        จำนวนที่ลงทะเบียน : {$subjects.find((x) => x.name == name).register}
      </div>

      <div class="stu_sub5">
        <div>description</div> : 
        {$subjects.find((x) => x.name == name).description}
      </div>

    </div>
  </div>
{:else}
  <div class="container">
    <form>
      <div class="sub1-container">
        วิชา {subject} จำนวนหน่วยกิต
        <div>
          <input
            type="number"
            id="credit"
            min="0"
            max="3"
            value={$subjects.find((x) => x.name == name).credit}
          />
        </div>
        (0-3)
      </div>

      <div class="sub2-container">
        จำนวนโควต้า :
        <div>
          <input
            type="number"
            id="total"
            min={$subjects.find((x) => x.name == name).register}
            max="100"
            value={$subjects.find((x) => x.name == name).total}
          />
        </div>
        ({$subjects.find((x) => x.name == name).register}-100)
        <br />
      </div>
      <div class="sub3-container">
        จำนวนที่ลงทะเบียน {$subjects.find((x) => x.name == name).register} <br/>
      </div>
      <div class="sub6-container">
        description :
        <textarea
          type="text"
          id="description"
          maxlength="300"
          value={$subjects.find((x) => x.name == name).description}
        />
      </div>

      <div class="sub4-container">
        short description : <br />
        <input
          type="text"
          id="short_description"
          maxlength="30"
          value={$subjects.find((x) => x.name == name).short_description}
        />
      </div>

      <div class="sub5-container">
        <button class="button" on:click={() => change_subject()}>บันทึก</button>
      </div>
    </form>
  </div>
{/if}

<style>
  div.title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  #title1 {
    background-color: white;
    padding: 15px;
    border-radius: 20px;
  }

  textarea {
    resize: both;
    min-width: 200px;
    min-height: 200px;
    max-width: 300px;
    max-height: 250px;
  }

  div.container {
    display: flex;
    justify-content: center;
  }
  .sub1-container,
  .sub2-container,
  .sub3-container,
  .sub4-container,
  .sub5-container,
  .sub6-container{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .sub5-container {
    margin-top: 20px;
  }
  .sub2-container,
  .sub4-container{
    margin-top: 5px;
  }

  .sub3-container{
    margin-top: 10px;
  }

  form {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 10px 30px 5px rgba(87, 85, 101, 0.5);
  }
  .button {
    margin-top: auto;
    padding: 10px 20px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    outline: none;
    background-color: #d3d3d3;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px rgb(228, 228, 228);
  }

  .button:hover {
    background-color: #b5b5b5;
  }

  .button:active {
    background-color: #b5b5b5;
    box-shadow: 0 5px rgb(228, 228, 228);
    transform: translateY(4px);
  }

  .stu_container, .All_stu{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .All_stu{
    background-color: white;
    box-shadow: 0px 10px 30px 5px rgba(87, 85, 101, 0.5);
    padding: 15px;
    border-radius: 20px;
  }
  .stu_sub5{
    display: flex;
  }

</style>