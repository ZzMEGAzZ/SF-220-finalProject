<script>
  import { subjects } from "./stores.js";
</script>

<div><h1>รายวิชาที่เปิดลงทะเบียน</h1></div>

<div><table>
  <tr>
    <th>ลำดับที่</th>
    <th>รายวิชา</th>
    <th>โควตา</th>
    <th>ลงทะเบียนแล้ว</th>
    <th>คงเหลือ</th>
    <th>เพิ่มเติม</th>
  </tr>
  {#each $subjects as { name, total, register, remaining }, index}

  <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{total}</td>
      <td>{register}</td>
      <td>{remaining}</td>
      <td></td>
  </tr>
  {/each}
</table></div>

<style>
  *{
      padding:0px;
      margin: 0px;
      box-sizing: border-box;
        }
  div{
    display: flex;
    justify-content: center;
  }
  div h1{
    margin-top: 50px;
  }
  div table{
    margin-top:40px;
    border-collapse: collapse;
    background-color:#C7D0D8;
            
    padding: 10px;
    text-align: center;
            
    width:540px;
    height: 200px;

    box-shadow: 0px 10px 30px 5px rgba(87,85,101,.2);
  }
  tr{
    background-color: white;
    border-bottom: 1px dashed grey;
    height: 50px; 
  }
  td{
    border-bottom: 1px dashed grey;
  }

</style>

