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
    if (newname == "" || newtotal == "" || newcredit == "") {
      alert("กรุณากรอกรายละเอียดให้ครบถ้วน");
    } else {
      showmode = false;
    }
  }

  function confirm() {
    $subjects.push({
      name: newname,
      subject: newsubject,
      total: newtotal,
      register: 0,
      remaining: newtotal,
      credit: newcredit,
      teacher: newTeacher,
      short_description: newshort_description,
      description: newdescription,
    });

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
</script>

  <h1>Addandedit</h1>

<<<<<<< HEAD
<h1>รายละเอียดวิชาที่ต้องการเพิ่ม</h1>
{#if showmode == true}
  รหัสวิชา:<input type="text" on:input={(e) => (newname = e.target.value)} />
  ชื่อวิชา:
  <input type="text" on:input={(e) => (newsubject = e.target.value)} />
  จำนวนโควต้า:<input
    type="number"
    min="0"
    on:input={(e) => (newtotal = e.target.value)}
  />
  หน่วยกิต:
  <input
    type="number"
    min="0"
    max="3"
    on:input={(e) => (newcredit = e.target.value)}
  />
  ชื่ออาจารย์ผู้สอน:<input
    type="text"
    on:input={(e) => (newTeacher = e.target.value)}
  />
  เพิ่มเติม:
  <input
    type="text"
    on:input={(e) => (newshort_description = e.target.value)}
  />
  รายละเอียดวิชา:
  <input type="text" on:input={(e) => (newdescription = e.target.value)} />
=======
<div>
  <h1>เพิ่มรายวิชา</h1>
</div>
>>>>>>> f4230880eabbbd8c9427c0e28cb0dd6968021fea

  <button on:click={() => show_results()}>ยืนยันวิชาที่ต้องการเพิ่ม</button>
{/if}

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
<<<<<<< HEAD
  <button on:click={() => confirm()}>ยืนยันวิชาที่ต้องการเพิ่ม</button>
{/if}
=======
</div>

<div>
  <p id="space">วิชาที่ต้องการเพิ่มในระบบ</p>
  <p>{x}</p>
</div>

<div>
  <button class="button" on:click={() => editsubject()}> ยืนยันการแก้ไข </button>
</div>

<style>
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  div {
    display: flex;
    justify-content: center;
  }
  div h1 {
    margin-top: 50px;
  }
  div table {
    margin-top: 40px;
    border-collapse: collapse;
    background-color: #c7d0d8;

    padding: 10px;
    text-align: center;

    width: 540px;
    height: 200px;
    box-shadow: 0px 10px 30px 5px rgba(87, 85, 101, 0.2);
  }
  tr {
    border-bottom: 1px dashed grey;
    background-color: white;
    height: 50px;
  }
  tr:nth-last-child(-n + 1) {
    border-bottom: none;
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

  .button:hover {background-color: #b5b5b5}

  .button:active {
  background-color: #b5b5b5;
  box-shadow: 0 5px rgb(228, 228, 228);
  transform: translateY(4px);
  }

  #space {
    margin: 10px;
  }
</style>
>>>>>>> f4230880eabbbd8c9427c0e28cb0dd6968021fea
