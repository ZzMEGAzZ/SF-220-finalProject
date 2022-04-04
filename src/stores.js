import { writable } from "svelte/store";

let data = {
  test: {
    name: "นายภาณุวัฒน์ มั่งคั่ง",
    password: "test",
    id: 6410742057,
    role: "student",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: ["SF210"],
    image:
      "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
  },
  admin: {
    name: "นายอภิสิทธิ์ แสงกระจ่าง",
    password: "admin",
    id: 6410742016,
    role: "admin",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: [],
    image: "https://i1.sndcdn.com/avatars-000600452151-38sfei-t500x500.jpg",
  },
  $: {
    name: "นางสาวศศิภา บุญอุ้มชู",
    password: "$",
    id: 6410742511,
    role: "admin",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: [],
    image: "https://i1.sndcdn.com/avatars-000600452151-38sfei-t500x500.jpg",
  },
  e: {
    name: "นางสาวณพัชสินี พวงบุบผา",
    password: "e",
    id: 6410742354,
    role: "admin",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: [],
    image:
      "https://i.pinimg.com/564x/10/db/43/10db43f94fd4d2ef167db304c4eee343.jpg",
  },
  spy: {
    name: "นางสาวภัทรดา มิโคทะ",
    password: "12345",
    id: 6410742099,
    role: "student",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: [],
    image: "https://fbi.dek-d.com/27/0585/6939/128381235",
  },
};

let data2 = [
  { name: "SF210", subject: "Programming Skill Development 1", total: 10, register: 10, remaining: 0 ,Teacher:"Weerachai anotaipaiboon", short_description:"Software Engineer", description:"จัดสอนโดย Ajarn Weerachai anotaipaiboon สำหรับนักศึกษา Software Engineer"},
  { name: "SF220", subject: " ", total: 10, register: 0, remaining: 10 ,Teacher:"Weerachai anotaipaiboon", short_description:"Software Engineer", description:"สำหรับนักศึกษา Software Engineer"},
  { name: "SF230", subject: "Linear Algebra and Numerical Methods for Computer Engineering" ,total: 10, register: 0, remaining: 10 ,Teacher:"Weerachai anotaipaiboon", short_description:"Software Engineer",description:"สำหรับนักศึกษา Software Engineer"},
  { name: "TU107", subject: " ", total: 10, register: 0, remaining: 10 ,Teacher:"Weerachai anotaipaiboon", short_description:"Software Engineer", description:"สำหรับนักศึกษา Software Engineer"},
  { name: "TU109", subject: " ", total: 10, register: 0, remaining: 10 },
];

export const accounts = writable(data);
export const islogin = writable(false);
export const mode = writable("");
export const account = writable("");
export const subjects = writable(data2);
