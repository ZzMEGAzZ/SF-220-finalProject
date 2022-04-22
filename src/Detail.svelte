<script>
  import { mode, subjects, sub, accounts, account } from "./stores.js";
  let name = $sub;
  let subject = $subjects.find((x) => x.name == name).subject;
  let mintotal = 1;

  if ($subjects.find((x) => x.name == name).register > 0) {
    mintotal = $subjects.find((x) => x.name == name).register;
  } else {
    mintotal = 1;
  }

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
    let new_teacher = document.getElementById("Teacher").value;
    if (
      (newcredit < 0 || newcredit > 3 || newcredit == "") &&
      (newtotal < mintotal || newtotal > 100 || newtotal == "")
    ) {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
      document.getElementById("total-sub").style.display = "block";
      document.getElementById("credit-sub").style.display = "block";
    } else if (newtotal < 1 || newtotal > 100 || newtotal == "") {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
      document.getElementById("total-sub").style.display = "block";
      document.getElementById("credit-sub").style.display = "none";
    } else if (
      (newcredit < 0 || newcredit > 3 || newcredit == "")
    ) {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
      document.getElementById("total-sub").style.display = "none";
      document.getElementById("credit-sub").style.display = "block";
    } else if (!Number.isInteger(+newtotal) || !Number.isInteger(+newcredit)) {
      alert("กรุณากรอกเป็นจำนวนเต็ม");
    } else if (
      newcredit >= 0 &&
      newtotal >= 1 &&
      newcredit <= 3 &&
      newtotal <= 100 &&
      newtotal >= $subjects.find((x) => x.name == name).register
    ) {
      document.getElementById("total-sub").style.display = "none";
      document.getElementById("credit-sub").style.display = "none";
      $subjects.find((x) => x.name == name).credit = Math.ceil(newcredit);
      $subjects.find((x) => x.name == name).total = Math.ceil(newtotal);
      $subjects.find((x) => x.name == name).description = newdescription;
      $subjects.find((x) => x.name == name).short_description =
        new_short_description;
      $subjects.find((x) => x.name == name).remaining =
        newtotal - $subjects.find((x) => x.name == name).register;
      $subjects.find((x) => x.name == name).Teacher = new_teacher;

      $mode = "allsubjects";
      alert("บันทึก");
    } else {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
      document.getElementById("total-sub").style.display = "none";
      document.getElementById("credit-sub").style.display = "none";
    }
  }
</script>

<div class="title">
  <div id="page-name"><h1>รายละเอียดวิชา</h1></div>
  <div id="title">{name}</div>
</div>
<br />
{#if !isadmin()}
  <div class="stu_container">
    <div class="All_stu">
      <div class="stu_sub1">
        <b>วิชา {subject}</b>
      </div>

      <div class="stu_sub2">
        <b>หน่วยกิต :</b> {$subjects.find((x) => x.name == name).credit} หน่วยกิต &nbsp;
        <b>จำนวนโควต้าทั้งหมด :</b> {$subjects.find((x) => x.name == name).total} คน &nbsp;
        <b>จำนวนที่ขอโควตาไปแล้ว :</b> {$subjects.find((x) => x.name == name).register} คน
      </div>
      <div class="stu_sub3">
      <b>อาจารย์ผู้สอน :</b> {$subjects.find((x) => x.name == name).Teacher}
      </div>

      <div class="stu_sub5">
      <b>description :</b> &nbsp; {$subjects.find((x) => x.name == name).description}
      </div>
    </div>
  </div>
{:else}
<box>
  <div class="container">
      <div class="sub1-container">
        วิชา {subject} จำนวนหน่วยกิต :
        <div>
          <input
            type="number"
            id="credit"
            min="0"
            max="3"
            value={$subjects.find((x) => x.name == name).credit}
          />
        </div>
        (0-3) <p id="credit-sub">&nbsp; *ขั้นต่ำ 0 หน่วย <br /> ไม่เกิน 3 หน่วย</p>
      </div>

      <div class="sub2-container">
        จำนวนโควตา :
        <div>
          <input
            type="number"
            id="total"
            min={mintotal}
            max="100"
            value={$subjects.find((x) => x.name == name).total}
          />
        </div>
        ({mintotal} - 100) <p id="total-sub">&nbsp; *ขั้นต่ำ {mintotal} คน <br /> ไม่เกิน 100 คน</p>
        <br />
      </div>
      <div class="sub3-container">
        จำนวนที่ขอโควตาไปแล้ว :
        <textarea class="register"
          >{$subjects.find((x) => x.name == name).register}</textarea
        > <br />
      </div>
      <div class="sub4-container">
        อาจารย์ผู้สอน :
      <input
        type="text"
        id="Teacher"
        value={$subjects.find((x) => x.name == name).Teacher}
      />
      </div>
      <div class="sub5-container">
        รายละเอียดวิชา :
        <textarea
          type="text"
          id="description"
          class="description"
          maxlength="300"
          value={$subjects.find((x) => x.name == name).description}
        />
      </div>

      <div class="sub6-container">
        หมายเหตุ : <br />
        <input
          type="text"
          id="short_description"
          maxlength="30"
          value={$subjects.find((x) => x.name == name).short_description}
        />
      </div>

      <div class="sub7-container">
        <button class="button" on:click={() => change_subject()}>บันทึก</button>
      </div>
  </div>
</box>
{/if}

<div id="bg" />

<style>
  #bg {
    background-image: linear-gradient(
      0deg,
      rgb(6, 113, 183) 22%,
      rgb(103, 163, 217) 87%,
      rgb(199, 230, 245) 97%
    );
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  p#total-sub, p#credit-sub {
    font-size: 10px;
    color: tomato;
  }

  #total-sub {
    display: none;
  }

  #credit-sub {
    display: none;
  }

  box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: auto;
  }

  div.title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  #title {
    padding: 15px;
    border-radius: 20px;
    color: white;
    font-size: 40px;
  }

  .stu_container .All_stu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 60%;
    height: auto;
    font-size: 20px;
    color: white;
  }

  textarea.register {
    min-width: 40px;
    min-height: 40px;
    max-width: 40px;
    max-height: 40px;
    margin-left: 20px;
    resize: none;
  }

  textarea.description {
    resize: both;
    min-width: 200px;
    min-height: 200px;
    max-width: 300px;
    max-height: 250px;
    margin-left: 20px;
  }

  div.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    background-color: rgb(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 20px;
  }
  .sub1-container,
  .sub2-container,
  .sub3-container,
  .sub4-container,
  .sub6-container {
    text-align: center;
    display: flex;
    align-items: center;
  }

  .sub5-container {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sub2-container,
  .sub4-container {
    margin-top: 5px;
  }

  .sub3-container {
    margin-top: 10px;
  }

  .sub7-container {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
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

  .stu_container,
  .All_stu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .All_stu {
    background-color: rgb(255, 255, 255, 0.3);
    box-shadow: 0px 10px 30px 5px rgba(87, 85, 101, 0.5);
    padding: 15px;
    border-radius: 20px;
  }
  .stu_sub5 {
    display: flex;
  }

  #page-name {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  #page-name h1 {
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 60px;
  }

</style>
