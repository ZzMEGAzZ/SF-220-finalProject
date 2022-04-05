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
    } else if (
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

<h1>รายละเอียดวิชาที่ต้องการเพิ่ม</h1>
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

    <button on:click={() => show_results()}>ยืนยันวิชาที่ต้องการเพิ่ม</button>
  </form>
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
  <button on:click={() => confirm()}>ยืนยันวิชาที่ต้องการเพิ่ม</button>
{/if}

<style>
</style>
