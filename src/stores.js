import { writable } from "svelte/store";

let data = {
  test: {
    name: "นายภาณุวัฒน์ มั่งคั่ง",
    password: "test",
    id: 6410742057,
    role: "student",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: [ "subject2"],
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
  $:{
    name: "นางสาวศศิภา บุญอุ้มชู",
    password: "$",
    id: 6410742511,
    role: "admin",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: [],
    image: "https://i1.sndcdn.com/avatars-000600452151-38sfei-t500x500.jpg",
  },
  e:{
    name: "นางสาวณพัชสินี พวงบุบผา",
    password: "e",
    id: 6410742354,
    role: "admin",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: [],
    image: "https://i.pinimg.com/564x/10/db/43/10db43f94fd4d2ef167db304c4eee343.jpg",
  }
};

let data2 = [
  { name: "SF210", total: 10, register: 10, remaining: 0 },
  { name: "SF220", total: 10, register: 0, remaining: 10 },
  { name: "SF230", total: 10, register: 0, remaining: 10 },
  { name: "TU107", total: 10, register: 0, remaining: 10 },
  { name: "TU109", total: 10, register: 0, remaining: 10 },
];

export const accounts = writable(data);
export const islogin = writable(false);
export const mode = writable("");
export const account = writable("");
export const subjects = writable(data2);
