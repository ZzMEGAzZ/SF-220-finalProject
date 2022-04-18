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
    if (!Number.isInteger(+newtotal) || !Number.isInteger(+newcredit)) {
      alert("กรุณากรอกเป็นจำนวนเต็ม");
    } else if (
      newcredit >= 0 &&
      newtotal >= 1 &&
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
      $subjects.find((x) => x.name == name).Teacher = new_teacher;

      $mode = "allsubjects";
      alert("บันทึก");
    } else if (newtotal < $subjects.find((x) => x.name == name).register) {
      alert("จำนวนผู้ลงทะเบียนเกินกว่าค่าที่แก้");
    } else {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
    }
  }
</script>

<div id="bg" />
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

      อาจารย์ผู้สอน : {$subjects.find((x) => x.name == name).Teacher}

      <div class="stu_sub5">
        <div>description</div>
        :
        {$subjects.find((x) => x.name == name).description}
      </div>
    </div>
  </div>
{:else}
  <div class="container">
    <form>
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
        (0-3)
      </div>

      <div class="sub2-container">
        จำนวนโควต้า :
        <div>
          <input
            type="number"
            id="total"
            min={mintotal}
            max="100"
            value={$subjects.find((x) => x.name == name).total}
          />
        </div>
        ({mintotal} - 100)
        <br />
      </div>
      <div class="sub3-container">
        จำนวนที่ลงทะเบียน :
        <textarea class="register"
          >{$subjects.find((x) => x.name == name).register}</textarea
        > <br />
      </div>
      อาจารย์ผู้สอน :
      <input
        type="text"
        id="Teacher"
        value={$subjects.find((x) => x.name == name).Teacher}
      />
      <div class="sub6-container">
        description :
        <textarea
          type="text"
          id="description"
          class="description"
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
  #bg {
    background-image: linear-gradient(
      180deg,
      rgba(17, 34, 49, 1) 4%,
      rgba(30, 71, 112, 1) 32%,
      rgba(69, 117, 165, 0.8) 72%,
      rgba(190, 220, 239, 1) 100%
    );
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

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
  }
  .sub1-container,
  .sub2-container,
  .sub3-container,
  .sub4-container,
  .sub6-container {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: left;
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

  .stu_container,
  .All_stu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .All_stu {
    background-color: white;
    box-shadow: 0px 10px 30px 5px rgba(87, 85, 101, 0.5);
    padding: 15px;
    border-radius: 20px;
  }
  .stu_sub5 {
    display: flex;
  }
</style>
