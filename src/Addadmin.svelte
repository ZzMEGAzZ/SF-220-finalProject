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
    } else if(!Number.isInteger(+newtotal) || !Number.isInteger(+newcredit)){
      alert("กรุณากรอกเป็นจำนวนเต็ม");
    }
    else if (
      newcredit >= 0 &&
      newtotal >= 0 &&
      newcredit <= 3 &&
      newtotal <= 100
    ) {
      showmode = false;
    } else {
      alert("กรุณากรอกรายละเอียดให้ถูกต้อง");
    }
  }

  function confirm() {
    if (newcredit >= 0 && newtotal >= 0 && newcredit <= 3 && newtotal <= 100) {
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
</script>

<div class="container">
  <div class="model">
    <h1>รายละเอียดวิชาที่ต้องการเพิ่ม</h1>
    <div class="terms">
    {#if showmode == true}
      <form>
        รหัสวิชา:<input
          type="text"
          minlength="5"
          maxlength="5"
          on:input={(e) => (newname = e.target.value)}
        />
        ชื่อวิชา:<input
          type="text"
          maxlength="30"
          on:input={(e) => (newsubject = e.target.value)}
        />
        จำนวนโควต้า:<input
          type="number"
          min="0"
          max="100"
          step='1'
          on:input={(e) => (newtotal = e.target.value)}
        />
        หน่วยกิต:
        <input
          type="number"
          min="0"
          max="3"
          step='1'
          on:input={(e) => (newcredit = e.target.value)}
        />
        ชื่ออาจารย์ผู้สอน:<input
          type="text"
          maxlength="30"
          on:input={(e) => (newTeacher = e.target.value)}
        />
        เพิ่มเติม:
        <input
          type="text"
          maxlength="5"
          on:input={(e) => (newshort_description = e.target.value)}
        />
        รายละเอียดวิชา:<input
          class="resize-box"
          type="text"
          maxlenght="100"
          on:input={(e) => (newdescription = e.target.value)}
        />

          <button class="button" on:click={() => show_results()}>ยืนยันวิชาที่ต้องการเพิ่ม</button>
        </form>
    {/if}
    </div>
  </div>
</div>

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
  <button on:click={() => confirm()}>ยืนยันวิชาที่ต้องการเพิ่ม</button>
{/if}

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .model {
    margin-top: 60px;
    max-width: 50%;
    padding: 1rem 2rem;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 0.25rem;
    box-shadow: 0px 10px 30px 5px rgba(87,85,101,.2);
    
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
</style>
