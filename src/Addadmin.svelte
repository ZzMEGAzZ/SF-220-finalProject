<script>
  let showmode = true;
  let newname = "";
  let newsubject = "";
  let newtotal = "";
  let newcredit = "";
  let newTeacher = "";
  let newshort_description = "";
  let newdescription = "";
  import { subjects, accounts, account, mode } from "./stores.js";

  function show_results() {
    if ((newcredit < 0 || newcredit > 3 || newcredit == "") && (newtotal < 1 || newtotal > 100 || newtotal == "") && (newname == "" || newname.length < 5)) {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
      document.getElementById("total-sub").style.display = "block";
      document.getElementById("credit-sub").style.display = "block";
      document.getElementById("name-sub").style.display = "block";
    } else if ((newcredit < 0 || newcredit > 3 || newcredit == "") && (newtotal < 1 || newtotal > 100 || newtotal == "")) {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
      document.getElementById("total-sub").style.display = "block";
      document.getElementById("credit-sub").style.display = "block";
      document.getElementById("name-sub").style.display = "none";
    } else if ((newcredit < 0 || newcredit > 3 || newcredit == "") && (newname == "" || newname.length < 5)) {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
      document.getElementById("total-sub").style.display = "none";
      document.getElementById("credit-sub").style.display = "block";
      document.getElementById("name-sub").style.display = "block";
    } else if ((newtotal < 1 || newtotal > 100 || newtotal == "") && (newname == "" || newname.length < 5)) {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
      document.getElementById("total-sub").style.display = "block";
      document.getElementById("credit-sub").style.display = "none";
      document.getElementById("name-sub").style.display = "block";
    } else if (!Number.isInteger(+newtotal) || !Number.isInteger(+newcredit)) {
      alert("กรุณากรอกเป็นจำนวนเต็ม");    
    } else if (newname == "" || newname.length < 5) {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
      document.getElementById("name-sub").style.display = "block";
      document.getElementById("total-sub").style.display = "none";
      document.getElementById("credit-sub").style.display = "none";
    } else if (newcredit < 0 || newcredit > 3 || newcredit == "")  {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
      document.getElementById("credit-sub").style.display = "block";
      document.getElementById("total-sub").style.display = "none";
      document.getElementById("name-sub").style.display = "none";
    } else if (newtotal < 1 || newtotal > 100 || newtotal == "")  {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
      document.getElementById("total-sub").style.display = "block";
      document.getElementById("credit-sub").style.display = "none";
      document.getElementById("name-sub").style.display = "none";

    } else if (newcredit >= 0 && newtotal >= 1 && newcredit <= 3 && newtotal <= 100) {
      document.getElementById("total-sub").style.display = "none";
      document.getElementById("credit-sub").style.display = "none";
      document.getElementById("name-sub").style.display = "none";
      document.getElementById("model").style.display = "none";
      showmode = false;
    } else {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
      document.getElementById("total-sub").style.display = "none";
      document.getElementById("credit-sub").style.display = "none";
      document.getElementById("name-sub").style.display = "none";
    }
    for (let i = 0; i < $subjects.length; i++) {
      if ($subjects[i].name == newname) {
        alert("มีรายวิชาดังกล่าวแล้ว");
        duplicate();
      }
    }
  }

  function confirm() {
    if (newcredit >= 0 && newtotal >= 1 && newcredit <= 3 && newtotal <= 100) {
      $subjects.push({
        name: newname,
        subject: newsubject,
        total: Math.ceil(newtotal),
        register: 0,
        remaining: newtotal,
        credit: Math.ceil(newcredit),
        teacher: newTeacher,
        short_description: newshort_description,
        description: newdescription,
      });
      $subjects = [...new Set($subjects)];

      alert("เพิ่มรายวิชาสำเร็จ");
      newname = "";
      newsubject = "";
      newtotal = "";
      newcredit = "";
      newTeacher = "";
      newshort_description = "";
      newdescription = "";
      mode.set("allsubjects");
    }
  }

  function back() {
    showmode = true;
    document.getElementById("model").style.display = "flex";
  }

  function duplicate() {
    newname = "";
    showmode = true;
    document.getElementById("model").style.display = "flex";
    document.getElementById("name").value = newname;
  }
</script>

<h1>รายละเอียดวิชาที่ต้องการเพิ่ม</h1>

<div id="container">
  <div id="model">
    {#if showmode == true}
      <div class="terms">
        <div class="highsub-1">
          <div class="sub-1">
            <div class="sub-name">
            รหัสวิชา: <p id="name-sub">*กรุณาใส่ให้ครบ 5 ตำแหน่ง </p></div><input
              id="name"
              type="text"
              minlength="5"
              maxlength="5"
              value={newname}
              on:input={(e) => (newname = e.target.value)}
            />
          </div>
          <div class="sub-2">
            ชื่อวิชา:<input
              id="subject"
              type="text"
              maxlength="30"
              value={newsubject}
              on:input={(e) => (newsubject = e.target.value)}
            />
          </div>
        </div>
        <div class="highsub-2">
          <div class="sub-3">
            <div class="sub-total">
            จำนวนโควต้า:<p id="total-sub">*ขั้นต่ำ 1 คน <br> ไม่เกิน 100 คน</p></div><input
              id="total"
              type="number"
              min="1"
              max="100"
              step="1"
              value={newtotal}
              on:input={(e) => (newtotal = e.target.value)}
            />
          </div>
          <div class="sub-4">
            <div class="sub-credit">
            หน่วยกิต:<p id="credit-sub">*ขั้นต่ำ 0 หน่วย <br> ไม่เกิน 3 หน่วย</p></div><input
              id="credit"
              type="number"
              min="0"
              max="3"
              step="1"
              value={newcredit}
              on:input={(e) => (newcredit = e.target.value)}
            />
          </div>
        </div>
        <div class="highsub-3">
          <div class="sub-5">
            ชื่ออาจารย์ผู้สอน:<input
              id="teacher"
              type="text"
              maxlength="30"
              value={newTeacher}
              on:input={(e) => (newTeacher = e.target.value)}
            />
          </div>
          <div class="sub-6">
            เพิ่มเติม:
            <input
              id="short_description"
              type="text"
              maxlength="30"
              value={newshort_description}
              on:input={(e) => (newshort_description = e.target.value)}
            />
          </div>
        </div>
        <div class="sub-7">
          รายละเอียดวิชา:<textarea
            id="description"
            type="text"
            maxlength="300"
            value={newdescription}
            on:input={(e) => (newdescription = e.target.value)}
          />
        </div>
        <div class="sub-8">
          <button class="button" on:click={() => show_results()}
            >ยืนยันวิชาที่ต้องการเพิ่ม</button
          >
        </div>
      </div>
    {/if}
  </div>
</div>

<div id="confirm">
  {#if showmode == false}
    <table>
      <thead>
        <tr>
          <th>รหัสวิชา</th>
          <th>ชื่อวิชา</th>
          <th>จำนวนโควต้า</th>
          <th>หน่วยกิต</th>
          <th>ชื่ออาจารย์ผู้สอน</th>
          <th>เพิ่มเติม</th>
          <th>รายละเอียดวิชา</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{newname}</td>
          <td>{newsubject}</td>
          <td>{newtotal}</td>
          <td>{newcredit}</td>
          <td>{newTeacher}</td>
          <td>{newshort_description}</td>
          <td>{newdescription}</td>
        </tr>
      </tbody>
    </table>
    <button on:click={() => back()}>ย้อนกลับ</button>
    <button
      class="button1"
      style="vertical-align: middle;"
      on:click={() => confirm()}><span>ยืนยันวิชาที่ต้องการเพิ่ม</span></button
    >
  {/if}
</div>

<style>
  p {
    font-size: 10px;
    color: tomato;
  }

  #name-sub {
    display: none;
  }

  #total-sub {
    display: none;
  }

  #credit-sub {
    display: none;
  }

  textarea {
    resize: both;
    min-width: 200px;
    min-height: 200px;
    max-width: 300px;
    max-height: 250px;
    margin-left: 20px;
  }

  div#confirm {
    display: flex;
    justify-content: center;
  }

  div#container {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #model {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
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
  table,
  td,
  th {
    border: 1px solid #ddd;
    text-align: center;
  }
  table {
    border-collapse: collapse;

    background-color: #c7d0d8;

    padding: 10px;
    text-align: center;

    width: 700px;
    height: 150px;
    box-shadow: 0px 10px 30px 5px rgba(87, 85, 101, 0.2);
  }
  th,
  td {
    padding: 10px;
    border-bottom: 1px dashed grey;
    background-color: white;
    height: 50px;
  }
  tr:nth-last-child(-n + 1) {
    border-bottom: none;
  }

  h1 {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  .button1 {
    display: inline-block;
    border-radius: 4px;
    background-color: #b5b5b5;
    border: none;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    box-shadow: 0 9px rgb(228, 228, 228);
  }
  .button1 span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  .button1 span:after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  .button1:hover span {
    padding-right: 25px;
  }
  .button1:hover span:after {
    opacity: 1;
    right: 0;
  }

  .highsub-1,
  .highsub-2,
  .highsub-3 {
    display: flex;
    justify-content: left;
    margin-top: 20px;
  }

  .sub-1,
  .sub-2,
  .sub-5,
  .sub-6,
  .sub-7 {
    display: flex;
    justify-content: left;
    flex-direction: column;
    margin-top: 10px;
  }

  .sub-3,
  .sub-4 {
    display: flex;
    justify-content: left;
    margin-top: 10px;
  }

  .sub-4 {
    margin-left: 70px;
  }

  .sub-8 {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
</style>
